---
sidebar_position: 1
title: Plugins Overview
---

# Plugins

Plugins extend the CodeBolt application. They run as separate processes alongside the server and can add custom LLM providers, connect messaging platforms, proxy code execution, or show custom UI panels.

---

## What is a Plugin?

A plugin is a Node.js package with a `package.json` that includes a `codebolt.plugin` field. When CodeBolt starts, it discovers plugins from specific directories, spawns them as child processes, and they connect back to the server via WebSocket.

Plugins are different from agent extensions:
- **Agent extensions** (skills, tools, action blocks) add capabilities to agents
- **Plugins** add capabilities to the application itself

---

## How Plugins Work

1. **Discovery** — CodeBolt scans plugin directories and finds packages with `codebolt.plugin` in their `package.json`
2. **Start** — Plugin is spawned as a child process with connection credentials
3. **Connect** — Plugin uses `@codebolt/plugin-sdk` to connect back to the server
4. **Operate** — Plugin registers its capabilities and handles requests
5. **Stop** — Plugin cleans up when told to shut down

### Plugin Directories (scanned in order)

| Directory | Scope |
|-----------|-------|
| `~/.codebolt/plugins/` | Global — available in all projects |
| `<project>/.codeboltPlugins/` | Per-project — overrides global |

### Start Triggers

| Trigger | When it starts |
|---------|---------------|
| `startup` | Automatically when CodeBolt launches |
| `manual` | When user clicks Start in the Plugins panel |
| `event` | When a specific application event fires |

---

## Types of Plugins

There are **3 main types**:

| Type | Purpose | Example |
|------|---------|---------|
| **LLM Provider** | Add a custom AI model provider | `codex-plugin`, `anthropic-plugin` |
| **Channel** | Connect an external messaging platform | `telegram-channel`, `slack-channel` |
| **Execution** | Proxy code execution to a remote environment | `remote-execution-plugin` |

---

## How to Create a Plugin

### Basic Structure

Every plugin needs this structure:

```
my-plugin/
├── package.json
├── src/
│   └── index.ts
└── dist/
    └── index.js        # compiled output
```

### Minimal `package.json`

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  },
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

### Minimal Plugin Code

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  console.log(`Started: ${ctx.pluginId}`);
  // register capabilities, set up listeners
});

plugin.onStop(async () => {
  // cleanup
});
```

### Install & Run

```bash
# Build
npm run build

# Copy to plugin directory
cp -r my-plugin/ ~/.codebolt/plugins/my-plugin/

# Reload from Plugins panel in CodeBolt UI, then click Start
```

---

## Creating an LLM Provider Plugin

Makes a custom AI provider available in CodeBolt's model selector.

### `package.json`

```json
{
  "name": "my-llm-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [{ "type": "startup" }]
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

### `src/index.ts`

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async () => {
  // Register the provider
  await plugin.llmProvider.register({
    providerId: 'my-llm',
    name: 'My LLM',
    models: [
      { id: 'my-model-v1', name: 'My Model v1' },
      { id: 'my-model-v2', name: 'My Model v2' }
    ],
    requiresKey: true,
    configFields: [
      { key: 'apiKey', label: 'API Key', type: 'password', required: true }
    ]
  });

  // Handle completion requests
  plugin.llmProvider.onCompletionRequest(async (request) => {
    const apiKey = request.options.providerConfig?.apiKey;
    const response = await fetch('https://api.my-llm.com/v1/chat', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: request.options.model, messages: request.options.messages })
    });
    const result = await response.json();
    plugin.llmProvider.sendReply(request.requestId, result, true);
  });

  // Handle streaming requests
  plugin.llmProvider.onStreamRequest(async (request) => {
    const apiKey = request.options.providerConfig?.apiKey;
    const response = await fetch('https://api.my-llm.com/v1/chat', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: request.options.model, messages: request.options.messages, stream: true })
    });

    // Parse SSE stream and send chunks
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      // parse your streaming format and send chunks
      plugin.llmProvider.sendChunk(request.requestId, {
        choices: [{ delta: { content: chunk } }]
      });
      fullContent += chunk;
    }

    plugin.llmProvider.sendReply(request.requestId, {
      choices: [{ message: { content: fullContent, role: 'assistant' } }]
    }, true);
  });
});

plugin.onStop(async () => {
  await plugin.llmProvider.unregister('my-llm');
});
```

### SDK Methods for LLM Providers

| Method | Purpose |
|--------|---------|
| `plugin.llmProvider.register(manifest)` | Register provider |
| `plugin.llmProvider.unregister(id)` | Remove provider |
| `plugin.llmProvider.onCompletionRequest(cb)` | Handle non-streaming requests |
| `plugin.llmProvider.onStreamRequest(cb)` | Handle streaming requests |
| `plugin.llmProvider.onLoginRequest(cb)` | Handle OAuth login |
| `plugin.llmProvider.sendReply(requestId, data)` | Send final response |
| `plugin.llmProvider.sendChunk(requestId, chunk)` | Send stream chunk |
| `plugin.llmProvider.sendError(requestId, error)` | Send error |

---

## Creating a Channel Plugin

Connects an external messaging platform (Telegram, Slack, Discord, etc.) to CodeBolt agents.

### `package.json`

```json
{
  "name": "my-channel-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "channel",
      "triggers": [{ "type": "manual" }],
      "ui": { "path": "./ui/index.html" }
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

### `src/index.ts`

```ts
import plugin from '@codebolt/plugin-sdk';

let botConnection: any = null;

plugin.onStart(async (ctx) => {
  // Load saved config
  const configRaw = await plugin.kvStore.get('config', {
    instanceId: ctx.pluginId, namespace: 'config'
  });
  const config = configRaw ? JSON.parse(configRaw) : null;

  // Auto-connect if config exists
  if (config?.botToken) {
    await connect(config);
  }

  // Handle UI panel messages (for configuration)
  plugin.dynamicPanel.onMessage('plugin-ui-my-channel-plugin', async (data) => {
    if (data.type === 'connect') {
      await connect(data.config);
      // Save config for next time
      await plugin.kvStore.set('config', JSON.stringify(data.config), {
        instanceId: ctx.pluginId, namespace: 'config'
      });
    }
    if (data.type === 'disconnect') {
      await disconnect();
    }
  });

  // Handle agent replies → send back to external platform
  plugin.gateway.onReply(async (reply) => {
    await sendToExternalPlatform(reply.replyTo, reply.content);
  });
});

async function connect(config: any) {
  // Connect to your platform (Telegram, Slack, etc.)
  botConnection = await createBotConnection(config.botToken);

  // Register as a channel
  await plugin.gateway.registerChannel({
    name: 'My Channel',
    platform: 'my-platform',
    agentId: config.agentId || 'default',
    threadStrategy: config.threadStrategy || 'per-user'
  });

  // When external messages arrive → route to CodeBolt agent
  botConnection.onMessage(async (msg: any) => {
    await plugin.gateway.routeMessage({
      source: 'channel',
      sourceId: 'my-channel-plugin',
      threadStrategy: config.threadStrategy || 'per-user',
      text: msg.text,
      userId: msg.userId,
      externalThreadId: msg.chatId,
      replyTo: {
        channelId: 'my-channel-plugin',
        externalThreadId: msg.chatId,
        userId: msg.userId,
        pluginId: 'my-channel-plugin'
      }
    });
  });
}

async function disconnect() {
  if (botConnection) {
    await botConnection.close();
    botConnection = null;
  }
  await plugin.gateway.unregisterChannel();
}

plugin.onStop(async () => {
  await disconnect();
});
```

### `ui/index.html` (Configuration Panel)

```html
<!DOCTYPE html>
<html>
<body>
  <h3>Connect to My Platform</h3>
  <input id="token" type="text" placeholder="Bot Token" />
  <select id="strategy">
    <option value="per-user">Per User</option>
    <option value="per-conversation">Per Conversation</option>
    <option value="single">Single Thread</option>
  </select>
  <button onclick="connect()">Connect</button>
  <button onclick="disconnect()">Disconnect</button>
  <p id="status">Not connected</p>

  <script>
    function connect() {
      window.codeboltPlugin.sendMessage({
        type: 'connect',
        config: {
          botToken: document.getElementById('token').value,
          threadStrategy: document.getElementById('strategy').value
        }
      });
    }
    function disconnect() {
      window.codeboltPlugin.sendMessage({ type: 'disconnect' });
    }
    window.codeboltPlugin.onMessage((data) => {
      if (data.status) {
        document.getElementById('status').textContent = data.status;
      }
    });
  </script>
</body>
</html>
```

### SDK Methods for Channel Plugins

| Method | Purpose |
|--------|---------|
| `plugin.gateway.registerChannel(config)` | Register as a channel |
| `plugin.gateway.unregisterChannel()` | Unregister |
| `plugin.gateway.routeMessage(message)` | Route external message to agent |
| `plugin.gateway.onReply(cb)` | Receive agent replies |
| `plugin.gateway.onMessageToChannel(cb)` | Receive proactive messages from app |

### Thread Strategies

| Strategy | Behavior |
|----------|----------|
| `single` | All messages go to one thread |
| `per-user` | Each user gets their own thread |
| `per-conversation` | Each chat/group gets a thread |
| `per-message` | Every message creates a new thread |

---

## Creating an Execution Plugin

Intercepts all code execution and routes it to a remote environment.

### `package.json`

```json
{
  "name": "my-execution-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "execution",
      "gateway": { "claimsExecutionGateway": true },
      "triggers": [{ "type": "startup" }]
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

### `src/index.ts`

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  // Claim exclusive control of execution
  await plugin.executionGateway.claim();

  // All execution requests now come here
  plugin.executionGateway.onRequest(async (request) => {
    try {
      // Forward to remote server
      const result = await fetch('https://my-remote-server.com/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: request.originalType,
          action: request.originalAction,
          payload: request.originalMessage
        })
      });
      const data = await result.json();

      // Send result back to CodeBolt
      plugin.executionGateway.sendReply(request.requestId, data, true);
    } catch (err: any) {
      plugin.executionGateway.sendReply(request.requestId, { error: err.message }, false);
    }
  });
});

plugin.onStop(async () => {
  // Release the gateway so local execution resumes
  await plugin.executionGateway.relinquish();
});
```

### SDK Methods for Execution Plugins

| Method | Purpose |
|--------|---------|
| `plugin.executionGateway.claim()` | Take exclusive control |
| `plugin.executionGateway.relinquish()` | Release control |
| `plugin.executionGateway.onRequest(cb)` | Handle execution requests |
| `plugin.executionGateway.sendReply(id, result, success)` | Send response |
| `plugin.executionGateway.subscribe()` | Subscribe to notifications (non-exclusive) |
| `plugin.executionGateway.onNotification(cb)` | Observe execution (read-only) |

> **Note:** Only ONE plugin can claim the gateway at a time. Use `subscribe()` if you just want to monitor execution without intercepting it.

---

## Other SDK Capabilities

All plugins (regardless of type) also have access to:

| Module | What it does |
|--------|-------------|
| `plugin.fs` | Read/write files |
| `plugin.terminal` | Run shell commands |
| `plugin.git` | Git operations |
| `plugin.chat` | Send chat messages |
| `plugin.kvStore` | Persistent key-value storage |
| `plugin.dynamicPanel` | Open/update UI panels |
| `plugin.llm` | Make LLM calls |
| `plugin.knowledge` | Knowledge base operations |
| `plugin.vectordb` | Vector database operations |
| `plugin.dbmemory` | Memory operations |
| `plugin.mcp` | Use MCP tools |
| `plugin.thread` | Thread management |
| `plugin.task` | Task management |
| `plugin.todo` | Todo list operations |
| `plugin.project` | Project info and paths |
| `plugin.environment` | Environment variables |
| `plugin.state` | State management |
| `plugin.hook` | Hook into application events |
| `plugin.narrative` | Narrative context |
| `plugin.mail` | Mail operations |
| `plugin.calendar` | Calendar operations |
| `plugin.browser` | Browser automation |
| `plugin.codebaseSearch` | Search code |
| `plugin.codemap` | Code structure map |
| `plugin.debug` | Debug utilities |
| `plugin.eventLog` | Event logging |
| `plugin.job` | Job management |

---

## Plugin UI Panels

Any plugin can show a custom UI panel by setting `ui.path` in the manifest. The HTML gets a `window.codeboltPlugin` bridge:

```javascript
// Send message to plugin process
window.codeboltPlugin.sendMessage({ type: 'myAction', data: {...} });

// Receive messages from plugin process
window.codeboltPlugin.onMessage((data) => {
  // update UI
});
```

Plugin-side:
```ts
// Send data to UI panel
await plugin.dynamicPanel.send('panel-id', { status: 'connected' });

// Receive messages from UI panel
plugin.dynamicPanel.onMessage('panel-id', (data) => {
  // handle UI actions
});
```

---

## Configuration Storage

Use `kvStore` to persist plugin config (not the filesystem):

```ts
// Save
await plugin.kvStore.set('config', JSON.stringify(myConfig), {
  instanceId: 'my-plugin', namespace: 'config'
});

// Load
const raw = await plugin.kvStore.get('config', {
  instanceId: 'my-plugin', namespace: 'config'
});
const config = raw ? JSON.parse(raw) : null;
```

---

## Quick Reference

| Plugin Type | `type` field | Typical Trigger | Key SDK Module |
|-------------|-------------|-----------------|----------------|
| LLM Provider | `"llmProvider"` | `startup` | `plugin.llmProvider` |
| Channel | `"channel"` | `manual` | `plugin.gateway` |
| Execution | `"execution"` | `startup` | `plugin.executionGateway` |
| Generic | (none) | any | any modules |

---

## See Also

- [Plugin SDK and Lifecycle](./02_sdk-and-lifecycle.md)
- [Major Functionalities](./03_functionalities.md)
- [Gateway, Execution, and LLM Provider Patterns](./04_major-patterns.md)
- [Packaging and Publishing](./99_packaging-and-publishing.md)
- [Custom LLM Provider (detailed)](./06_llm-provider.md)
- [Custom Embedding Provider](./07_embedding-provider.md)
- [Custom Remote Execution Provider (detailed)](./08_remote-execution-provider.md)
