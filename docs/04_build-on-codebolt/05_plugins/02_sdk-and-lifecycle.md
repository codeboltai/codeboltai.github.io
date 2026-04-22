---
sidebar_position: 2
title: Plugin SDK and Lifecycle
---

# Plugin SDK and Lifecycle

The main SDK for plugin authors is `@codebolt/plugin-sdk`. It is not the same as the client SDK used for custom frontends. Plugins are server-side extensions that connect back to the application runtime.

## Core Runtime Model

The default export is a singleton `PluginClient`:

```ts
import plugin from '@codebolt/plugin-sdk';
```

The `PluginClient` establishes **two WebSocket connections** to the server:

1. **Channel 1 (`/plugin`)** — command/response pattern via cliLib modules (same as agents use)
2. **Channel 2 (`/multiplexed`)** — real-time push events via SocketConnectionManager

This dual-channel design gives plugins both request/response capabilities and live event streaming.

## Plugin Context

When `onStart` fires, the plugin receives context:

```ts
interface PluginContext {
    pluginId: string;    // Unique plugin identifier
    pluginDir: string;   // Absolute path to plugin directory
    manifest: any;       // Parsed codebolt.plugin manifest from package.json
}
```

## Lifecycle Hooks

```ts
import plugin from '@codebolt/plugin-sdk';

// Called when WebSocket connection is ready (before start message)
plugin.onReady(async () => {
  console.log('WebSocket connected');
});

// Called when server sends pluginStartMessage with context
plugin.onStart(async (ctx) => {
  console.log(`Started: ${ctx.pluginId} in ${ctx.pluginDir}`);
  // Register providers, set up listeners, load config, etc.
});

// Called when server requests shutdown (before process kill)
plugin.onStop(async () => {
  console.log('Stopping - cleaning up resources');
  // Unregister providers, close connections, save state
});

// Listen to any raw WebSocket message (advanced use)
plugin.onRawMessage(async (message) => {
  console.log('Raw message:', message);
});
```

### Lifecycle sequence:

```
Process spawned → WebSocket connects → onReady()
    → Server sends pluginStartMessage → onStart(ctx)
    → ... plugin operates ...
    → Server sends pluginStopMessage → onStop()
    → Process receives SIGTERM → exit
```

## Access Patterns

The SDK provides three main ways to interact with the application:

### 1. WebSocket Modules (cliLib)

Direct runtime modules for server operations. These use the `/plugin` WebSocket channel:

| Category | Modules |
|----------|---------|
| **Filesystem & Project** | `fs`, `git`, `project`, `projectStructure`, `codebaseSearch`, `codemap`, `environment` |
| **Terminal & Execution** | `terminal` |
| **Chat & Communication** | `chat`, `browser` |
| **AI & LLM** | `llm`, `llmProvider` |
| **Data & State** | `knowledge`, `vectordb`, `kvStore`, `memory`, `cbstate` |
| **Tasks & Work** | `task`, `thread`, `todo`, `job` |
| **UI** | `dynamicPanel` |
| **Integrations** | `calendar`, `mail`, `mcp`, `hook`, `eventLog` |
| **Plugin-specific** | `gateway`, `executionGateway`, `llmProvider` |
| **Debugging** | `debug` |

Example:
```ts
// Read a file
const content = await plugin.fs.readFile('/path/to/file');

// Run a terminal command
const result = await plugin.terminal.executeCommand('npm test');

// Store persistent config
await plugin.kvStore.set('config', JSON.stringify(myConfig), {
  instanceId: 'my-plugin',
  namespace: 'config'
});
```

### 2. HTTP APIs

REST-style wrappers for stable CRUD operations:

| API | Purpose |
|-----|---------|
| `chatApi` | Chat message operations |
| `tasksApi` | Task CRUD |
| `threadsApi` | Thread management |
| `projectsApi` | Project operations |
| `systemApi` | System info & control |
| `gitApi` | Git operations |
| `jobsApi` | Job management |
| `knowledgeApi` | Knowledge base |
| `environmentsApi` | Environment management |
| `fileApi` / `fileReadApi` | File operations |
| `calendarApi` | Calendar events |
| `mailApi` | Mail operations |
| `kvStoreApi` | Key-value store |
| `vectordbApi` | Vector database |
| `todosApi` | Todo items |
| `hooksApi` | Hook management |

Example:
```ts
// Create a task via HTTP API
await plugin.tasksApi.create({ title: 'My Task', status: 'open' });

// Get project info
const project = await plugin.projectsApi.getActive();
```

### 3. Multiplexed Sockets (Real-time Push)

Subscribe to live event streams via the `/multiplexed` channel:

| Socket | Events For |
|--------|-----------|
| `chat` | Chat messages, typing indicators |
| `tasks` | Task state changes |
| `jobs` | Job progress updates |
| `shell` | Terminal output streams |
| `browser` | Browser state changes |
| `knowledge` | Knowledge base updates |
| `eventLog` | Application events |
| `projectStructure` | File tree changes |
| `editor` | Editor state |
| `lsp` | Language server events |
| `systemAlert` | System notifications |
| `backgroundAgent` | Background agent status |
| `capability` | Capability changes |
| `orchestrator` | Agent orchestration events |
| `agentDebug` | Agent debug info |
| `aiTerminal` | AI terminal output |

Example:
```ts
// Subscribe to chat events
plugin.sockets.chat.on('message', (msg) => {
  console.log('New chat message:', msg);
});

// Subscribe to task updates
plugin.sockets.tasks.on('update', (task) => {
  console.log('Task updated:', task);
});
```

## Notifications

The SDK provides notification helpers:

```ts
plugin.notify.info('Plugin connected successfully');
plugin.notify.error('Failed to connect to external API');
plugin.notify.warn('Rate limit approaching');
```

## Plugin-Specific Modules

These modules are unique to plugins (not available to agents):

### Gateway (Chat Gateway Plugins)
```ts
plugin.gateway.registerChannel(request)
plugin.gateway.routeMessage(message)
plugin.gateway.onReply(callback)
plugin.gateway.onMessageToChannel(callback)
plugin.gateway.unregisterChannel()
```

### Execution Gateway
```ts
plugin.executionGateway.claim()
plugin.executionGateway.relinquish()
plugin.executionGateway.onRequest(callback)
plugin.executionGateway.sendReply(requestId, result)
plugin.executionGateway.subscribe()
plugin.executionGateway.onNotification(callback)
```

### LLM Provider
```ts
plugin.llmProvider.register(manifest)
plugin.llmProvider.unregister(providerId)
plugin.llmProvider.onCompletionRequest(callback)
plugin.llmProvider.onStreamRequest(callback)
plugin.llmProvider.onLoginRequest(callback)
plugin.llmProvider.sendChunk(requestId, chunk)
plugin.llmProvider.sendReply(requestId, response)
plugin.llmProvider.sendError(requestId, error)
```

### Narrative (Workspace Sync)
```ts
plugin.narrative.importUnifiedBundle(params)   // Import .tar.gz workspace bundle
plugin.narrative.exportUnifiedBundle(params)   // Export workspace as bundle
plugin.narrative.createSnapshot(params)        // Snapshot current state
plugin.narrative.checkoutSnapshot(params)      // Restore from snapshot
```

### Dynamic Panel
```ts
plugin.dynamicPanel.open(panelId, title, html, opts?)
plugin.dynamicPanel.update(panelId, html)
plugin.dynamicPanel.close(panelId)
plugin.dynamicPanel.send(panelId, data)
plugin.dynamicPanel.list()
plugin.dynamicPanel.onMessage(panelId, handler)
plugin.dynamicPanel.offMessage(panelId)
```

## Client SDK vs Plugin SDK

| | `@codebolt/client-sdk` | `@codebolt/plugin-sdk` |
|--|------------------------|------------------------|
| **Purpose** | Build standalone UIs | Extend the application runtime |
| **Runs** | In browser/electron renderer | As a server-side child process |
| **Connection** | Connects as a client | Connects as a trusted extension |
| **Access** | Limited to client-facing APIs | Full access to all server subsystems |

## Triggers and Startup

| Trigger | Behavior | Use When |
|---------|----------|----------|
| `startup` | Auto-starts on server boot | Always-on integrations (LLM providers, cloud bridges) |
| `manual` | User must click Start | On-demand integrations (Telegram bot, Slack bot) |
| `event` | Starts when application event fires | Reactive plugins |

## See Also

- [Packaging and Publishing Plugins](./99_packaging-and-publishing.md)
- [Major Functionalities Available to Plugins](./03_functionalities.md)
- [Packaging and Publishing Plugins](./99_packaging-and-publishing.md)
