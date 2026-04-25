# Capability Executors

> A capability executor is a runtime engine that knows how to run capabilities of one or more types

A **capability executor** is a runtime engine that knows how to run capabilities of one or more types. Capabilities define *what* to do; executors define *how* to run them.

Executors are the bridge between the capability system and the actual code that does the work. When an agent starts a capability, the system finds the executor registered for that capability's type, spawns it as a child process, and the executor runs the capability logic using Codebolt APIs.

---

## Architecture overview

```text
Agent calls startCapability("my-skill", type: "skill")
  │
  ├─ CapabilityManager
  │   ├─ Looks up executor for type "skill" via CapabilityRegistry
  │   ├─ Looks up capability "my-skill" to get its path and config
  │   └─ Builds params: { capabilityPath, capabilityName, capabilityConfig, ... }
  │
  ├─ SideExecutionManager
  │   ├─ Spawns child Node.js process with env vars
  │   ├─ Waits for WebSocket connection (30s timeout)
  │   └─ Sends actionBlockInvocation message with params + threadContext
  │
  └─ Executor process (child)
      ├─ codeboltjs SDK auto-connects via WebSocket
      ├─ Receives invocation → calls your handler
      ├─ Your handler uses codebolt.fs, codebolt.terminal, etc.
      ├─ Returns result → SDK sends actionBlockComplete
      └─ Process exits
```

### Key components

| Component | Role | Location |
|-----------|------|----------|
| **CapabilityRegistry** | Discovers capabilities and executors from filesystem, maps types to executors | `services/capabilityRegistry.ts` |
| **CapabilityManager** | Orchestrates capability execution — finds executor, builds params, tracks lifecycle | `managers/CapabilityManager.ts` |
| **SideExecutionManager** | Spawns and manages child processes, handles WebSocket communication, process lifecycle | `managers/SideExecutionManager.ts` |
| **codeboltjs SDK** | Client-side library used by executors — auto-connects, receives invocations, sends results | `packages/codeboltjs` |

---

## How executors communicate

Executors use the **`codeboltjs` SDK** — not raw WebSocket connections. The SDK handles the entire communication protocol automatically.

### Connection flow

```text
1. Server spawns executor as child Node.js process
   └─ Sets env vars: SOCKET_PORT, IS_SIDE_EXECUTION=true,
      SIDE_EXECUTION_ID, THREAD_ID, PARENT_AGENT_ID, etc.

2. codeboltjs SDK reads env vars and connects via WebSocket
   └─ URL: ws://localhost:{SOCKET_PORT}/codebolt?IS_SIDE_EXECUTION=true&...
   └─ All env vars passed as URL query parameters

3. Server detects IS_SIDE_EXECUTION=true in the connection
   └─ Associates the socket with the parent agent's thread
   └─ Sets ws.agentId = parentAgentId, ws.threadId = threadId
   └─ Emits sideExecutionConnected event → resolves pending promise

4. Server sends actionBlockInvocation message
   └─ Contains: params, threadContext, sideExecutionId, threadId, etc.
   └─ Thread context sent via WebSocket (NOT env vars) to avoid HTTP 431 header size limits

5. codeboltjs calls your onActionBlockInvocation handler
   └─ Passes (threadContext, metadata) to your function

6. Your handler runs, returns a result (or throws)

7. codeboltjs sends actionBlockComplete message
   └─ Contains: sideExecutionId, result (or error)

8. Server resolves the pending completion promise
   └─ CapabilityManager emits capabilityCompleted/capabilityFailed events
   └─ Result returned to the calling agent
```

### Environment variables

When the executor process starts, the `codeboltjs` SDK reads these environment variables automatically:

| Variable | Description |
|----------|-------------|
| `SOCKET_PORT` | Server port for WebSocket connection |
| `IS_SIDE_EXECUTION` | Always `"true"` — tells the SDK this is an executor process |
| `SIDE_EXECUTION_ID` | Unique execution ID (format: `side_<timestamp>_<uuid8>`) |
| `THREAD_ID` | Thread ID — same as the parent agent's thread |
| `PARENT_AGENT_ID` | Parent agent identifier |
| `PARENT_AGENT_INSTANCE_ID` | Parent agent instance ID |
| `ACTION_BLOCK_PATH` | Path to the executor directory |
| `threadToken` | JWT token for WebSocket authentication |

You never need to read these manually — the SDK uses them to establish the connection.

---

## Executor structure

### Directory layout

```text
my-executor/
  executor.yaml         # required — capability executor config
  package.json          # dependencies (must include @codebolt/codeboltjs)
  src/
    index.ts            # source code
  dist/
    index.js            # compiled entry point (built by webpack)
  webpack.config.js     # build configuration
  tsconfig.json         # TypeScript config
```

### executor.yaml

```yaml
name: skill-executor
version: 1.0.0
description: Executes skill-type capabilities
supportedTypes:
  - skill
  - power
entryPoint: dist/index.js
author: my-team
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Unique executor name |
| `version` | string | no | Semver (default `1.0.0`) |
| `description` | string | no | What this executor does |
| `supportedTypes` | string[] | yes | Capability types this executor handles (at least one) |
| `entryPoint` | string | no | Main JS file (default `dist/index.js`) |
| `author` | string | no | Author name |

### Type-to-executor mapping

Each executor declares which capability types it supports via `supportedTypes`. The registry builds a mapping:

```text
type "skill"  →  skill-executor
type "power"  →  skill-executor    (same executor can handle multiple types)
type "talent" →  talent-executor   (different executor for different type)
```

A single executor can handle multiple types. If multiple executors declare the same type, the last one registered wins (project-level overrides global, which overrides built-in).

### package.json

```json
{
  "name": "my-executor",
  "version": "1.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "npx webpack",
    "dev": "npx tsx src/index.ts"
  },
  "dependencies": {
    "@codebolt/codeboltjs": "latest"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "ts-loader": "^9.5.1",
    "webpack": "^5.103.0",
    "webpack-cli": "^5.1.4"
  }
}
```

### Webpack configuration

Executors are bundled for Node.js using webpack:

```js
// webpack.config.js
module.exports = {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  // Node built-ins are NOT polyfilled — executors run in Node.js
  // @codebolt/* packages are bundled (not externalized)
};
```

---

## Creating an executor

### Step 1: Scaffold the project

```bash
mkdir -p my-executor/src
cd my-executor
npm init -y
npm install @codebolt/codeboltjs
```

### Step 2: Write executor.yaml

```yaml
name: my-executor
version: 1.0.0
description: Custom executor for power-type capabilities
supportedTypes:
  - power
entryPoint: dist/index.js
author: my-team
```

### Step 3: Write the executor code

```ts
// src/index.ts

codebolt.onActionBlockInvocation(async (threadContext, metadata) => {
  // Your capability logic here
  const params = threadContext.params || {};

  // Use any Codebolt API...
  const result = await doWork(params);

  // Return the result — SDK auto-sends it back
  return result;
});
```

**That's the entire pattern.** Import codebolt, register a handler, return a result.

### Step 4: Build and install

```bash
npm run build
cp -r . ../.codebolt/capabilities/executors/my-executor/
```

---

## What your handler receives

### threadContext

The full context from the parent agent's thread, with invocation params merged in:

```ts
{
  // Conversation history from the parent thread
  threadId: string;
  messages: Array<{
    messageId: string;
    threadId: string;
    content: string;
    sender: string;           // "user", "agent", "system"
    timestamp: string;
    templateType?: string;
    payload?: any;
  }>;

  // Environment
  projectPath: string;        // path to the active project
  agentId: string;
  agentInstanceId: string;
  metadata: Record<string, any>;

  // Invocation parameters (passed by the calling agent)
  params: {
    capabilityPath: string;   // filesystem path to the capability
    capabilityName: string;   // capability name
    capabilityType: string;   // capability type (e.g., "skill")
    capabilityConfig: object; // full parsed capability.yaml
    executionId: string;      // unique execution ID
    // ...plus any custom params from the caller
  };
}
```

### metadata

Execution metadata about the invocation:

```ts
{
  sideExecutionId: string;         // unique execution ID
  threadId: string;                // parent thread ID
  parentAgentId: string;           // parent agent ID
  parentAgentInstanceId: string;   // parent agent instance ID
  timestamp: string;               // invocation timestamp (ISO 8601)
}
```

### Return value

Whatever you return from the handler becomes the capability result:

```ts
// Return data → sent as success result
return { files: ['a.ts', 'b.ts'], linesChanged: 42 };

// Return nothing → completion with no result data
return;

// Throw → sent as error result
throw new Error("File not found");
```

You can also return a structured result with additional context:

```ts
return {
  result: { files: ['a.ts', 'b.ts'] },
  additionalContext: {
    executionTime: Date.now() - startTime,
    warnings: ['deprecated API used']
  }
};
```

---

## Codebolt APIs available inside executors

Executors have access to **all Codebolt APIs** through the SDK. The executor runs with the same permissions as the parent agent and operates in the same thread context.

### File system

```ts
// Read files
const content = await codebolt.fs.readFile('src/App.tsx');
const files = await codebolt.fs.readManyFiles(['src/a.ts', 'src/b.ts']);

// Write files
await codebolt.fs.createFile('src/NewComponent.tsx', componentCode);
await codebolt.fs.updateFile('src/App.tsx', updatedCode);

// Delete
await codebolt.fs.deleteFile('src/old.ts');
await codebolt.fs.deleteFolder('src/deprecated/');

// Search
const matches = await codebolt.fs.searchFiles('TODO', 'src/');
const grepResults = await codebolt.fs.grepSearch('console\\.log', 'src/');
```

### Terminal

```ts
// Run commands
const result = await codebolt.terminal.executeCommand('npm test');
const build = await codebolt.terminal.executeCommand('npm run build');

// Long-running commands
await codebolt.terminal.executeCommandRunUntilError('npm run dev');

// Interrupt
await codebolt.terminal.sendManualInterrupt();
```

### Other capabilities

```ts
// Start nested capabilities from within an executor
const lintResult = await codebolt.capability.startSkill('lint-check', { files });
const analysisResult = await codebolt.capability.startPower('deep-analysis');

// Start side executions
await codebolt.sideExecution.startWithActionBlock('my-action-block', params);
```

### Full module list

| Module | Examples |
|--------|---------|
| `codebolt.fs` | `readFile`, `createFile`, `updateFile`, `deleteFile`, `searchFiles`, `grepSearch` |
| `codebolt.terminal` | `executeCommand`, `executeCommandRunUntilError`, `sendManualInterrupt` |
| `codebolt.project` | `getProjectPath`, `getProjectFiles` |
| `codebolt.chat` | `sendMessage`, `waitForReply` |
| `codebolt.browser` | `openUrl`, `screenshot`, `click` |
| `codebolt.capability` | `listSkills`, `startCapability`, `stopCapability` |
| `codebolt.sideExecution` | `startWithActionBlock`, `startWithCode`, `stop`, `getStatus` |
| `codebolt.search` | `searchCodebase`, `searchWeb` |
| `codebolt.task` | `createTask`, `updateTask`, `listTasks` |
| `codebolt.thread` | `getThread`, `listThreads` |
| `codebolt.llm` | `chat`, `complete` |
| `codebolt.rag` | `query`, `index` |

### Executors vs regular agents: API differences

| Feature | Executor | Regular Agent |
|---------|----------|---------------|
| Entry point | `codebolt.onActionBlockInvocation()` | `codebolt.onMessage()` / `codebolt.getMessage()` |
| Receives | `threadContext` + `metadata` from parent | User messages independently |
| Thread | Runs in parent agent's thread | Has its own thread |
| All Codebolt APIs | Yes | Yes |
| Can start nested capabilities | Yes (`codebolt.capability.*`) | Yes |
| Can start side executions | Yes (`codebolt.sideExecution.*`) | Yes |
| Can receive user messages | No — only receives invocation | Yes |
| Can spawn child agents | No | Yes |
| Project scope | Inherits parent's project path | Own project scope |

---

## Full examples

### Example: File processing executor

Handles `analyze` and `format` operations on files:

```ts

codebolt.onActionBlockInvocation(async (threadContext, metadata) => {
  const { filePath, operation } = threadContext.params;

  if (!filePath) {
    throw new Error("filePath parameter is required");
  }

  switch (operation) {
    case 'analyze': {
      const content = await codebolt.fs.readFile(filePath);
      const lines = content.toString().split('\n').length;
      return { filePath, lines, size: content.length };
    }

    case 'format': {
      await codebolt.terminal.executeCommand(`npx prettier --write "${filePath}"`);
      const formatted = await codebolt.fs.readFile(filePath);
      return { filePath, formatted: true, content: formatted };
    }

    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
});
```

### Example: Test runner executor

Runs tests and returns structured results:

```ts

codebolt.onActionBlockInvocation(async (threadContext, metadata) => {
  const { testCommand, testFile } = threadContext.params;
  const command = testCommand || (testFile ? `npm test -- ${testFile}` : 'npm test');

  const result = await codebolt.terminal.executeCommand(command);

  return {
    success: result.exitCode === 0,
    command,
    output: result.stdout,
    errors: result.stderr,
    exitCode: result.exitCode
  };
});
```

### Example: Capability chaining executor

Orchestrates multiple capabilities together:

```ts

codebolt.onActionBlockInvocation(async (threadContext, metadata) => {
  const { files } = threadContext.params;

  // Step 1: Run lint check
  const lintResult = await codebolt.capability.startSkill('lint-check', { files });

  if (!lintResult.success || !lintResult.result?.errors?.length) {
    return { clean: true, message: "No lint errors found" };
  }

  // Step 2: Auto-fix lint errors
  const fixResult = await codebolt.capability.startSkill('auto-fix', {
    errors: lintResult.result.errors
  });

  // Step 3: Re-check
  const recheckResult = await codebolt.capability.startSkill('lint-check', { files });

  return {
    autoFixed: true,
    originalErrors: lintResult.result.errors.length,
    fixesApplied: fixResult.result?.fixCount || 0,
    remainingErrors: recheckResult.result?.errors?.length || 0
  };
});
```

### Example: Context-aware executor

Uses the parent agent's conversation history:

```ts

codebolt.onActionBlockInvocation(async (threadContext, metadata) => {
  const messages = threadContext.messages || [];
  const lastUserMessage = messages
    .filter(m => m.sender === 'user')
    .pop();

  // Use project context
  const projectPath = threadContext.projectPath;

  // Use the conversation context to inform the capability's work
  return {
    messageCount: messages.length,
    lastUserRequest: lastUserMessage?.content,
    projectPath,
    parentAgent: metadata.parentAgentId,
    executionId: metadata.sideExecutionId
  };
});
```

---

## Process lifecycle

### Startup sequence

1. **SideExecutionManager** spawns the executor as a child Node.js process
   - Working directory set to the executor's path
   - stdio: `['ignore', 'pipe', 'pipe', 'ipc']` — stdout/stderr piped, IPC enabled
2. **codeboltjs SDK** initialises, reads env vars, connects via WebSocket
3. **Server** detects `IS_SIDE_EXECUTION=true`, associates socket with parent thread
4. **Server** sends `actionBlockInvocation` message with params and thread context
5. **Handler** runs — your code executes
6. **SDK** sends `actionBlockComplete` with result or error
7. **Process** exits

### Timeout handling

| Timeout | Duration | Description |
|---------|----------|-------------|
| Connection timeout | 30 seconds | Executor must connect via WebSocket within this window |
| Execution timeout | Configurable | Set per-execution via `timeout` parameter (no default limit) |
| Force kill timeout | 3 seconds | After SIGTERM, process is force-killed if still running |
| Shutdown timeout | 5 seconds | Total graceful shutdown window |

### Process termination

When an execution completes or is stopped:

1. **SIGTERM** sent to the child process
2. Wait up to 5 seconds for graceful shutdown
3. **SIGKILL** if process is still alive after 3 seconds
4. Temp files cleaned up (for runtime code executions)
5. Execution metadata removed from tracking maps
6. Events emitted (`capabilityCompleted`, `capabilityFailed`, or `capabilityTimeout`)

### Error handling

| Error code | When |
|------------|------|
| `ACTION_BLOCK_NOT_FOUND` | Executor entry point doesn't exist |
| `INVALID_ACTION_BLOCK` | Executor config is malformed |
| `SYNTAX_ERROR` | JavaScript syntax error in executor code |
| `EXECUTION_TIMEOUT` | Execution exceeded timeout |
| `PROCESS_CRASHED` | Child process exited with non-zero code |
| `CONNECTION_FAILED` | WebSocket connection not established within 30s |
| `INVALID_REQUEST` | Bad parameters passed to startCapability |

If your handler throws an error, the SDK catches it and sends an `actionBlockComplete` message with the error. The calling agent receives:

```ts
{
  success: false,
  executionId: "cap_...",
  error: "Your error message here"
}
```

---

## Installing executors

### Local installation

```bash
# Project-level (highest priority)
cp -r my-executor/ .codebolt/capabilities/executors/my-executor/

# Global (available across all projects)
cp -r my-executor/ ~/.codebolt/capabilities/executors/my-executor/
```

Then refresh the registry:
```bash
curl -X POST http://localhost:PORT/api/capability/refresh
```

### Via REST API

```bash
curl -X POST http://localhost:PORT/api/capability/executors/create \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-executor",
    "version": "1.0.0",
    "description": "Custom executor",
    "supportedTypes": ["power"],
    "entryPoint": "dist/index.js"
  }'
```

This creates a scaffold with placeholder code. Replace `dist/index.js` with your built executor.

### From marketplace

```bash
curl -X POST http://localhost:PORT/api/capability/download-executor \
  -H "Content-Type: application/json" \
  -d '{ "executorId": "executor-id-from-marketplace" }'
```

---

## Executor priority and overriding

When multiple executors support the same capability type, the last one registered wins:

| Priority | Source | Path |
|----------|--------|------|
| 1 (highest) | Project | `<project>/.codebolt/capabilities/executors/` |
| 2 | Global | `~/.codebolt/capabilities/executors/` |
| 3 (lowest) | Built-in | `<appRoot>/.codebolt/capabilities/executors/` |

You can override a built-in executor by placing a custom one with the same `supportedTypes` at the project or global level.

---

## Executor validation

An executor directory is **valid** when:

| Check | Required | Failure |
|-------|----------|---------|
| Directory exists | yes | Skipped |
| `executor.yaml` or `executor.yml` present | yes | Skipped with error log |
| `name` field in config | yes | Skipped with error log |
| `supportedTypes` with at least one entry | yes | Skipped with error log |
| `entryPoint` file exists | no | Warning only (may need to be built) |

Invalid executors are logged as warnings and excluded from the registry. They do not cause the registry to fail.

---

## Debugging executors

**Connection fails (30s timeout):**
- Check that `dist/index.js` exists and is valid JavaScript
- Verify `@codebolt/codeboltjs` is installed and bundled
- Check build output for errors: `npm run build`

**Handler never called:**
- Ensure `codebolt.onActionBlockInvocation()` is called at the top level (not inside a conditional)
- Check that the executor's `supportedTypes` includes the capability type you're starting

**No result returned:**
- Make sure your handler returns a value or throws. Returning `undefined` sends a completion with no result data.
- Check for unhandled promise rejections — add try/catch in your handler.

**Console output:**
- `console.log` and `console.error` output is piped to the server debug logs
- Use these for debugging during development

**Check active executions:**
- SDK: `await codebolt.capability.getExecutionStatus(executionId)`
- WebSocket: send `{ action: 'getActiveExecutions' }`
- REST: `GET /api/capability/stats`

---

## See also

- [Capabilities Overview](./01_overview.md)
- [Execution Flow](./03_activation.md)
- [Structure and Schema](./02_structure-and-schema.md)
- [API Reference](./04_bundling-skills-and-tools.md)
- [Side Execution](../07_side-execution.md)
