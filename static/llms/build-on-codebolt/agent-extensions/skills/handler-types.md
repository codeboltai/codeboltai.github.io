# Handler Types

> Three common skill handler shapes:

Three common skill handler shapes:

| Handler kind | What it is | When to use |
|---|---|---|
| **Inline function** | Local handler code | Logic-heavy skills with validation or tool orchestration |
| **Sub-agent** | Delegate to another agent | When the skill needs a separate reasoning loop |
| **Prompt template** | Prompt-only transformation | Cheap, stateless competencies |

Pick by cost:

- prompt template: cheapest
- inline function: moderate
- subagent: most expensive

Start with the cheapest shape that gives the behavior you need.

## Default handler scaffold

When you create a skill via the CLI or API, Codebolt generates an `index.js` placeholder:

```js
// refactor-to-pattern capability
// Type: skill
// Add your capability logic here

module.exports = {
  execute: async (params) => {
    // Implement capability logic
    return { success: true };
  }
};
```

The `params` object contains the input values defined in your `capability.yaml` inputs schema.

## How executors run skills

Skills don't run themselves — they are executed by an **executor**. The capability registry maps each capability type (e.g., `skill`) to an executor.

Executors are discovered from:
- `{appRoot}/.codebolt/capabilities/executors/` (built-in)
- `~/.codebolt/capabilities/executors/` (global)
- `<project>/.codebolt/capabilities/executors/` (project, highest priority)

Each executor has an `executor.yaml`:

```yaml
name: skill-executor
version: 1.0.0
description: Executes skill capabilities
supportedTypes: [skill]
entryPoint: dist/index.js
```

The executor's entry point (defaults to `dist/index.js`) receives the capability path, context, and parameters, then manages the execution lifecycle.

## Execution lifecycle

1. A request to run a skill arrives (via API or agent call)
2. The **CapabilityManager** looks up the skill in the registry
3. It finds the appropriate executor for the `skill` type
4. The executor runs as a side execution within the thread context
5. Status updates are broadcast via WebSocket (`starting` → `running` → `completed`/`failed`/`timeout`)
6. The result event is emitted back to the caller
