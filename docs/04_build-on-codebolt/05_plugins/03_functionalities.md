---
sidebar_position: 3
title: Major Plugin Functionalities
---

# Major Plugin Functionalities

Plugins have access to a large part of the CodeBolt runtime through `PluginClient`. This page groups the major areas a plugin can work with.

## Files, Terminal, Git, and Project Context

Plugins can work with the local workspace and execution environment:

```ts
// File operations
const content = await plugin.fs.readFile('/path/to/file');
await plugin.fs.writeFile('/path/to/file', newContent);
const files = await plugin.fs.listFiles('/path/to/dir');

// Terminal execution
const result = await plugin.terminal.executeCommand('npm test');

// Git operations
const status = await plugin.git.status();
const log = await plugin.git.log();

// Project info
const structure = await plugin.projectStructure.getTree();
const searchResults = await plugin.codebaseSearch.search('functionName');
```

**Modules:** `plugin.fs`, `plugin.terminal`, `plugin.git`, `plugin.project`, `plugin.projectStructure`, `plugin.codebaseSearch`, `plugin.codemap`, `plugin.environment`

## Chat, Tasks, Threads, and Jobs

Plugins can participate in the live application flow:

```ts
// Send a chat message
await plugin.chat.sendMessage({ content: 'Hello from plugin', threadId: '...' });

// Create and manage tasks
await plugin.tasksApi.create({ title: 'Process data', status: 'open' });

// Work with threads
const threads = await plugin.threadsApi.list();

// Monitor jobs
plugin.sockets.jobs.on('update', (job) => {
  console.log('Job progress:', job.progress);
});
```

**Modules:** `plugin.chat`, `plugin.task`, `plugin.thread`, `plugin.todo`, `plugin.job`, `plugin.chatApi`, `plugin.tasksApi`, `plugin.threadsApi`, `plugin.jobsApi`

## Knowledge, Memory, and State

Plugins can read and write application state for persistence and retrieval:

```ts
// Key-value store (recommended for plugin config)
await plugin.kvStore.set('config', JSON.stringify(myConfig), {
  instanceId: 'my-plugin',
  namespace: 'config'
});
const config = await plugin.kvStore.get('config', {
  instanceId: 'my-plugin',
  namespace: 'config'
});

// Vector database for semantic search
await plugin.vectordb.upsert({ id: 'doc1', content: '...', embedding: [...] });

// Knowledge base
await plugin.knowledgeApi.add({ title: 'doc', content: '...' });

// Application state
const state = await plugin.cbstate.get('key');
```

**Modules:** `plugin.knowledge`, `plugin.vectordb`, `plugin.kvStore`, `plugin.memory`, `plugin.cbstate`, `plugin.knowledgeApi`, `plugin.kvStoreApi`, `plugin.vectordbApi`

## Dynamic UI Inside the App

Plugins can render custom panels inside the existing CodeBolt UI:

```ts
// Open a panel with HTML content
const html = '<div id="app"><h1>My Plugin UI</h1><button id="btn">Click</button></div>';
await plugin.dynamicPanel.open('my-panel', 'Plugin Dashboard', html);

// Send data to the panel
await plugin.dynamicPanel.send('my-panel', { status: 'connected', data: [...] });

// Receive messages from the panel
plugin.dynamicPanel.onMessage('my-panel', (data) => {
  if (data.type === 'buttonClicked') {
    // handle UI action
  }
});

// Update panel content
await plugin.dynamicPanel.update('my-panel', newHtml);

// Close panel
await plugin.dynamicPanel.close('my-panel');
```

**Real-world example:** The Telegram channel plugin uses a dynamic panel for connection configuration — users enter their bot token, select thread strategy, and connect/disconnect via the UI.

For the UI side of this model, see [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md).

## Browser, Calendar, Mail, and Notifications

Application-level service integrations:

```ts
// Notifications
plugin.notify.info('Plugin connected');
plugin.notify.error('Connection failed');
plugin.notify.warn('Rate limit approaching');

// Calendar
const events = await plugin.calendarApi.list();

// Mail
await plugin.mailApi.send({ to: '...', subject: '...', body: '...' });

// Event logging
await plugin.eventLog.log({ type: 'plugin.action', data: {...} });
```

**Modules:** `plugin.browser`, `plugin.calendar`, `plugin.mail`, `plugin.eventLog`, `plugin.notify`

## MCP and Hook Management

Plugins can work with extension infrastructure:

```ts
// List available MCP tools
const tools = await plugin.mcp.listTools();

// Execute an MCP tool
const result = await plugin.mcp.executeTool('tool-name', { param: 'value' });

// Manage hooks
const hooks = await plugin.hooksApi.list();
```

**Modules:** `plugin.mcp`, `plugin.hook`, `plugin.hooksApi`

## Workspace Sync (Narrative)

For remote execution plugins that need to sync workspace state:

```ts
// Export workspace as a bundle
const bundle = await plugin.narrative.exportUnifiedBundle({
  outputPath: '/tmp/workspace.tar.gz',
  includeGit: true
});

// Import a bundle into workspace
await plugin.narrative.importUnifiedBundle({
  bundlePath: '/tmp/workspace.tar.gz'
});

// Create/restore snapshots
await plugin.narrative.createSnapshot({ snapshotId: 'before-test' });
await plugin.narrative.checkoutSnapshot({ snapshotId: 'before-test' });
```

## Real-time Subscriptions

Under `plugin.sockets`, plugins subscribe to push-based channels for live event streams:

```ts
// Chat events
plugin.sockets.chat.on('message', (msg) => { /* ... */ });

// Task updates
plugin.sockets.tasks.on('update', (task) => { /* ... */ });

// Job progress
plugin.sockets.jobs.on('progress', (job) => { /* ... */ });

// File tree changes
plugin.sockets.projectStructure.on('change', (event) => { /* ... */ });

// System alerts
plugin.sockets.systemAlert.on('alert', (alert) => { /* ... */ });

// Editor events
plugin.sockets.editor.on('change', (event) => { /* ... */ });
```

Use socket subscriptions when your plugin needs to stay attached to a live stream of app events.

## Practical Examples from Built-in Plugins

| Plugin | What it uses |
|--------|-------------|
| `telegram-channel` | `gateway`, `dynamicPanel`, `kvStore` (config), `onReply` |
| `slack-channel` | `gateway`, `dynamicPanel`, `kvStore` (config), `onReply` |
| `codex-plugin` | `llmProvider` (register, completion, streaming, login) |
| `anthropic-plugin` | `llmProvider` (register, completion, streaming, login) |
| `remote-execution-plugin` | `executionGateway` (claim, onRequest), `narrative` (workspace sync) |
| `cloud-plugin` | `gateway`, `executionGateway` (subscribe, notifications) |

## Choosing the Right Surface

| Need | Use |
|------|-----|
| Runtime operations tied to server message bus | WebSocket modules (`plugin.fs`, `plugin.git`, etc.) |
| CRUD-style app operations | HTTP APIs (`plugin.tasksApi`, `plugin.projectsApi`, etc.) |
| Live event subscriptions | Sockets (`plugin.sockets.chat`, etc.) |
| Custom UI inside the app | Dynamic panels (`plugin.dynamicPanel`) |
| Extend core behavior | Gateway / Execution / LLM Provider modules |
| Persistent configuration | `plugin.kvStore` |

## See Also

- [Plugin SDK and Lifecycle](./02_sdk-and-lifecycle.md)
- [Chat Gateway](./04_chat-gateway/01_overview.md)
- [Custom AI Providers](./06_custom-ai-providers/01_overview.md)
- [Proxy Execution Gateway](./08_proxy-execution-gateway/01_overview.md)
