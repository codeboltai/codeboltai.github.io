---
sidebar_position: 4
title: Gateway, Execution, and LLM Providers
---

# Gateway, Execution, and LLM Providers

Three plugin patterns extend core application behavior rather than just calling utility APIs.

## 1. Gateway / Channel Plugins

Gateway plugins connect external messaging platforms to CodeBolt. They are how you build integrations for Telegram, Slack, Discord, Teams, WhatsApp, or any custom communication system.

### SDK Methods

```ts
// Register as a channel in the routing system
await plugin.gateway.registerChannel({
  name: 'My Channel',
  platform: 'telegram',
  agentId: 'default-agent',
  threadStrategy: 'per-user',    // single | per-user | per-conversation | per-message
  autoConnect: true,
  environmentId: 'production'
});

// Route an incoming external message to an agent
await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'telegram-bot',
  threadStrategy: 'per-user',
  text: 'Hello from user',
  userId: 'user-123',
  externalThreadId: 'chat-456',
  replyTo: {
    channelId: 'telegram-bot',
    externalThreadId: 'chat-456',
    userId: 'user-123',
    pluginId: 'telegram-channel'
  },
  metadata: { platform: 'telegram' }
});

// Receive agent replies
plugin.gateway.onReply((reply) => {
  // Send reply back to external platform
  sendToTelegram(reply.channelId, reply.content);
});

// Handle proactive messages from app to external platform
plugin.gateway.onMessageToChannel((message) => {
  sendToTelegram(message.channelId, message.content);
});

// Unregister when stopping
await plugin.gateway.unregisterChannel();
```

### Thread Strategies

| Strategy | Behavior |
|----------|----------|
| `single` | All messages go to one thread |
| `per-user` | Each user gets their own thread |
| `per-conversation` | Each external conversation maps to a thread |
| `per-message` | Every message creates a new thread |
| `existing` | Route to an existing thread by ID |

### Real-world Example: Telegram Plugin

```ts
import plugin from '@codebolt/plugin-sdk';
import { Bot } from 'grammy';

let bot: Bot;

plugin.onStart(async (ctx) => {
  // Load saved config
  const configRaw = await plugin.kvStore.get('config', {
    instanceId: 'telegram-channel',
    namespace: 'config'
  });
  const config = configRaw ? JSON.parse(configRaw) : null;

  if (config?.botToken) {
    await connectBot(config);
  }

  // UI panel for configuration
  plugin.dynamicPanel.onMessage('plugin-ui-telegram-channel', async (data) => {
    if (data.type === 'connect') {
      await connectBot(data.config);
    } else if (data.type === 'disconnect') {
      await disconnectBot();
    } else if (data.type === 'getStatus') {
      sendStatus();
    }
  });

  // Handle agent replies back to Telegram
  plugin.gateway.onReply(async (reply) => {
    await bot.api.sendMessage(reply.replyTo.externalThreadId, reply.content, {
      parse_mode: 'HTML'
    });
  });
});

async function connectBot(config) {
  bot = new Bot(config.botToken);

  bot.on('message:text', async (gramCtx) => {
    await plugin.gateway.routeMessage({
      source: 'channel',
      sourceId: 'telegram-channel',
      threadStrategy: config.threadStrategy || 'per-user',
      text: gramCtx.message.text,
      userId: String(gramCtx.from.id),
      externalThreadId: String(gramCtx.chat.id),
      replyTo: {
        channelId: 'telegram-channel',
        externalThreadId: String(gramCtx.chat.id),
        userId: String(gramCtx.from.id),
        pluginId: 'telegram-channel'
      }
    });
  });

  bot.start({ drop_pending_updates: true });

  // Save config for auto-reconnect
  await plugin.kvStore.set('config', JSON.stringify(config), {
    instanceId: 'telegram-channel',
    namespace: 'config'
  });
}

plugin.onStop(async () => {
  if (bot) await bot.stop();
  await plugin.gateway.unregisterChannel();
});
```

### Manifest

```json
{
  "codebolt": {
    "plugin": {
      "type": "channel",
      "triggers": [{ "type": "manual" }],
      "ui": { "path": "./ui/default/index.html" }
    }
  }
}
```

---

## 2. Execution Gateway Plugins

Execution plugins take ownership of execution requests or observe execution notifications. Only ONE plugin can claim the gateway at a time.

### SDK Methods

```ts
// Claim exclusive control of execution
await plugin.executionGateway.claim();

// Handle execution requests (only received if claimed)
plugin.executionGateway.onRequest(async (request) => {
  // request.requestId - unique request ID
  // request.originalMessage - the original execution message
  // request.originalType - message type being proxied
  // request.originalAction - action within the type

  const result = await executeOnRemote(request.originalMessage);

  // Send reply back
  plugin.executionGateway.sendReply(request.requestId, result, true);
});

// Release exclusive control
await plugin.executionGateway.relinquish();

// Or just subscribe to notifications (non-exclusive, multiple plugins can subscribe)
await plugin.executionGateway.subscribe();
plugin.executionGateway.onNotification((notification) => {
  // notification.originalType - what type of execution happened
  // notification.result - execution result
  logExecution(notification);
});
await plugin.executionGateway.unsubscribe();
```

### Claim vs Subscribe

| Mode | Behavior | Use Case |
|------|----------|----------|
| **Claim** | Exclusive — all execution requests routed to you | Remote execution, sandboxing |
| **Subscribe** | Non-exclusive — receive notifications after execution | Logging, mirroring, cloud sync |

### Real-world Pattern: Remote Execution

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  await plugin.executionGateway.claim();

  plugin.executionGateway.onRequest(async (request) => {
    try {
      // Export workspace to remote
      const bundle = await plugin.narrative.exportUnifiedBundle({
        outputPath: '/tmp/workspace.tar.gz',
        includeGit: true
      });

      // Send to remote server
      const result = await remoteServer.execute({
        bundle: bundle.path,
        command: request.originalMessage
      });

      // Import results back
      await plugin.narrative.importUnifiedBundle({
        bundlePath: result.resultBundle
      });

      plugin.executionGateway.sendReply(request.requestId, result.output, true);
    } catch (err) {
      plugin.executionGateway.sendReply(request.requestId, { error: err.message }, false);
    }
  });
});

plugin.onStop(async () => {
  await plugin.executionGateway.relinquish();
});
```

### Manifest

```json
{
  "codebolt": {
    "plugin": {
      "type": "execution",
      "gateway": {
        "claimsExecutionGateway": true
      },
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

---

## 3. Custom LLM Provider Plugins

Plugins can register themselves as user-selectable LLM providers. Once registered, the provider appears in the Settings UI alongside built-in providers, users can configure it, and agents use it transparently.

### SDK Methods

```ts
// Register provider with manifest
await plugin.llmProvider.register({
  providerId: 'my-provider',
  name: 'My LLM Provider',
  models: [
    { id: 'model-small', name: 'Small Model', capabilities: ['streaming'] },
    { id: 'model-large', name: 'Large Model', capabilities: ['streaming', 'function_calling'] }
  ],
  capabilities: ['streaming', 'function_calling'],
  description: 'Custom LLM provider',
  requiresKey: true,
  configFields: [
    { key: 'apiKey', label: 'API Key', type: 'password', required: true },
    { key: 'baseUrl', label: 'Base URL', type: 'url', placeholder: 'https://api.example.com' }
  ]
});

// Handle non-streaming completion requests
plugin.llmProvider.onCompletionRequest(async (request) => {
  // request.requestId - unique ID for this request
  // request.providerId - which provider was selected
  // request.options - full LLM options (messages, tools, model, etc.)
  // request.options.providerConfig - user's configured apiKey, baseUrl etc.

  const result = await callMyApi(request.options);
  plugin.llmProvider.sendReply(request.requestId, result, true);
});

// Handle streaming requests
plugin.llmProvider.onStreamRequest(async (request) => {
  const stream = await callMyApiStream(request.options);

  for await (const chunk of stream) {
    plugin.llmProvider.sendChunk(request.requestId, {
      choices: [{
        delta: { content: chunk.text, reasoning: chunk.reasoning || '' }
      }]
    });
  }

  // Send final reply with usage info
  plugin.llmProvider.sendReply(request.requestId, {
    choices: [{ message: { content: fullResponse } }],
    usage: { prompt_tokens: 100, completion_tokens: 200 }
  }, true);
});

// Handle login/auth requests (for OAuth flows)
plugin.llmProvider.onLoginRequest(async (request) => {
  const authUrl = buildOAuthUrl();
  // Open browser, complete OAuth, get tokens
  const tokens = await completeOAuth(authUrl);
  plugin.llmProvider.sendReply(request.requestId, { authenticated: true }, true);
});

// Handle errors
plugin.llmProvider.sendError(requestId, { message: 'API key invalid', code: 401 });

// Unregister when stopping
await plugin.llmProvider.unregister('my-provider');
```

### Provider Manifest Interface

```ts
interface LlmProviderManifest {
  providerId: string;        // Unique ID (will be normalized: lowercase, no spaces)
  name: string;              // Display name in UI
  models?: Array<{
    id: string;
    name?: string;
    capabilities?: string[];   // 'streaming', 'function_calling', 'vision', etc.
    contextWindow?: number;
    supportsTools?: boolean;
  }>;
  capabilities?: string[];   // Provider-level capabilities
  description?: string;
  requiresKey?: boolean;     // Show API key field in settings
  configFields?: Array<{
    key: string;
    label: string;
    type?: 'string' | 'password' | 'number' | 'url';
    required?: boolean;
    placeholder?: string;
    description?: string;
  }>;
}
```

### Real-world Example: OAuth-based Provider

The `codex-plugin` and `anthropic-plugin` both implement OAuth (PKCE) flows:

```ts
import plugin from '@codebolt/plugin-sdk';
import fs from 'fs';
import path from 'path';

const AUTH_FILE = path.join(process.env.PLUGIN_DIR!, 'auth.json');

plugin.onStart(async (ctx) => {
  await plugin.llmProvider.register({
    providerId: 'my-provider',
    name: 'My Provider',
    models: [{ id: 'model-v1', name: 'Model v1' }],
    requiresKey: false  // We use OAuth, not API key
  });

  plugin.llmProvider.onLoginRequest(async (request) => {
    // 1. Generate PKCE challenge
    // 2. Open browser to auth URL
    // 3. Listen for callback with auth code
    // 4. Exchange code for tokens
    // 5. Save tokens to auth.json
    const tokens = await performOAuth();
    fs.writeFileSync(AUTH_FILE, JSON.stringify(tokens));
    plugin.llmProvider.sendReply(request.requestId, { authenticated: true }, true);
  });

  plugin.llmProvider.onCompletionRequest(async (request) => {
    const auth = JSON.parse(fs.readFileSync(AUTH_FILE, 'utf-8'));
    // Refresh token if expired
    if (auth.expires_at < Date.now()) {
      const newTokens = await refreshToken(auth.refresh_token);
      fs.writeFileSync(AUTH_FILE, JSON.stringify(newTokens));
    }

    const response = await fetch('https://api.provider.com/v1/chat', {
      method: 'POST',
      headers: { Authorization: `Bearer ${auth.access_token}` },
      body: JSON.stringify(request.options)
    });

    const result = await response.json();
    plugin.llmProvider.sendReply(request.requestId, result, true);
  });
});

plugin.onStop(async () => {
  await plugin.llmProvider.unregister('my-provider');
});
```

### Manifest

```json
{
  "codebolt": {
    "plugin": {
      "type": "llmProvider",
      "triggers": [{ "type": "startup" }]
    }
  }
}
```

---

## 4. Dynamic Panel Plugins

While not a separate "type", plugin-driven dynamic panels are an important pattern for plugins that need configuration UI or dashboards.

```ts
plugin.onStart(async (ctx) => {
  // The panel is auto-opened when user clicks "Open UI" in Plugins panel
  // (if ui.path is set in manifest)
  // Or open programmatically:
  await plugin.dynamicPanel.open('my-panel', 'Settings', html);

  plugin.dynamicPanel.onMessage('my-panel', async (data) => {
    switch (data.type) {
      case 'save':
        await plugin.kvStore.set('config', JSON.stringify(data.config), {
          instanceId: ctx.pluginId,
          namespace: 'config'
        });
        await plugin.dynamicPanel.send('my-panel', { type: 'saved', success: true });
        break;
      case 'load':
        const config = await plugin.kvStore.get('config', {
          instanceId: ctx.pluginId,
          namespace: 'config'
        });
        await plugin.dynamicPanel.send('my-panel', { type: 'config', data: JSON.parse(config) });
        break;
    }
  });
});
```

---

## When to Choose Each Pattern

| Need | Pattern | Trigger |
|------|---------|---------|
| Connect external messaging platform | **Channel / Gateway** | `manual` (user configures first) |
| Replace where code runs | **Execution Gateway (claim)** | `startup` |
| Monitor/log execution | **Execution Gateway (subscribe)** | `startup` |
| Add a new LLM provider | **LLM Provider** | `startup` |
| Custom in-app UI/dashboard | **Dynamic Panel** | any |
| Background automation | Generic plugin | `startup` or `event` |

## See Also

- [Detailed LLM Provider Guide](./06_llm-provider.md)
- [Detailed Proxy Execution Gateway Guide](./08_proxy-execution-gateway/01_overview.md)
- [Major Plugin Functionalities](./03_functionalities.md)
- [Packaging and Publishing Plugins](./99_packaging-and-publishing.md)
- [Dynamic Panels](../04_custom-uis/05_dynamic-panels.md)
