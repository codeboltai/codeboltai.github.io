---
sidebar_position: 8
title: Custom Remote Execution Provider
---

# Custom Remote Execution Provider

A remote execution provider lets agents run their work somewhere other than the local machine — a cloud VM, a container, a sandbox, or a dedicated build server. This is implemented as an **Execution Gateway Plugin**.

## How It Fits Into CodeBolt

Normally, CodeBolt executes commands locally. When an execution plugin claims the gateway, ALL execution requests are routed to the plugin instead. The plugin handles them however it wants — forward to a remote server, run in Docker, execute in a sandbox, etc.

```
Agent requests execution
       │
       ▼
Server checks: is ExecutionGateway claimed?
       │
       ├─ No  → Execute locally (default)
       │
       └─ Yes → Forward to claiming plugin
                       │
                       ▼
              Plugin handles request
              (remote server, container, etc.)
                       │
                       ▼
              Plugin sends reply back
                       │
                       ▼
              Agent receives result
```

## Complete Example

```ts
import plugin from '@codebolt/plugin-sdk';

let remoteConnection: any = null;

plugin.onStart(async (ctx) => {
  // Load saved remote server config
  const configRaw = await plugin.kvStore.get('config', {
    instanceId: ctx.pluginId,
    namespace: 'config'
  });
  const config = configRaw ? JSON.parse(configRaw) : null;

  if (config?.remoteHost) {
    await connectToRemote(config);
  }

  // UI panel for configuration
  plugin.dynamicPanel.onMessage('plugin-ui-remote-exec', async (data) => {
    switch (data.type) {
      case 'connect':
        await connectToRemote(data.config);
        await plugin.kvStore.set('config', JSON.stringify(data.config), {
          instanceId: ctx.pluginId,
          namespace: 'config'
        });
        break;
      case 'disconnect':
        await disconnect();
        break;
      case 'getStatus':
        sendStatus();
        break;
    }
  });

  // Claim the execution gateway
  await plugin.executionGateway.claim();
  console.log('Execution gateway claimed — all requests will be proxied');

  // Handle all execution requests
  plugin.executionGateway.onRequest(async (request) => {
    try {
      if (!remoteConnection) {
        plugin.executionGateway.sendReply(request.requestId, {
          error: 'Remote server not connected'
        }, false);
        return;
      }

      console.log(`Proxying request: ${request.originalType} (${request.requestId})`);

      // Forward the request to the remote server
      const result = await remoteConnection.execute({
        type: request.originalType,
        action: request.originalAction,
        payload: request.originalMessage
      });

      // Send result back
      plugin.executionGateway.sendReply(request.requestId, result, true);
    } catch (err: any) {
      console.error('Remote execution failed:', err.message);
      plugin.executionGateway.sendReply(request.requestId, {
        error: err.message
      }, false);
    }
  });
});

async function connectToRemote(config: any) {
  // Connect to your remote execution server
  remoteConnection = await createRemoteConnection(config);
  console.log(`Connected to remote: ${config.remoteHost}`);
}

async function disconnect() {
  if (remoteConnection) {
    await remoteConnection.close();
    remoteConnection = null;
  }
}

plugin.onStop(async () => {
  await plugin.executionGateway.relinquish();
  await disconnect();
  console.log('Execution gateway released');
});
```

## With Workspace Sync (Narrative Module)

For remote execution that needs the full workspace context, use the `narrative` module to sync workspace state:

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  await plugin.executionGateway.claim();

  plugin.executionGateway.onRequest(async (request) => {
    try {
      // 1. Export current workspace as a bundle
      const exportResult = await plugin.narrative.exportUnifiedBundle({
        outputPath: '/tmp/workspace-bundle.tar.gz',
        includeGit: true
      });

      // 2. Upload bundle to remote server
      await remoteServer.uploadBundle(exportResult.path);

      // 3. Execute the command on remote
      const result = await remoteServer.execute(request.originalMessage);

      // 4. Download the result bundle (workspace changes)
      const resultBundle = await remoteServer.downloadBundle();

      // 5. Import changes back into local workspace
      await plugin.narrative.importUnifiedBundle({
        bundlePath: resultBundle
      });

      plugin.executionGateway.sendReply(request.requestId, result, true);
    } catch (err: any) {
      plugin.executionGateway.sendError(request.requestId, err.message);
    }
  });
});
```

## Notification-only Mode (Monitoring)

If you don't want to intercept execution but just observe it (for logging, mirroring, or analytics):

```ts
import plugin from '@codebolt/plugin-sdk';

plugin.onStart(async (ctx) => {
  // Subscribe to notifications (non-exclusive, multiple plugins can subscribe)
  await plugin.executionGateway.subscribe();

  plugin.executionGateway.onNotification((notification) => {
    console.log(`Execution: ${notification.originalType}`);
    console.log(`Result:`, notification.result);

    // Mirror to external system
    externalLogger.log({
      type: notification.originalType,
      action: notification.originalAction,
      result: notification.result,
      timestamp: notification.timestamp
    });
  });
});

plugin.onStop(async () => {
  await plugin.executionGateway.unsubscribe();
});
```

## Claim vs Subscribe

| Mode | Method | Exclusivity | Receives |
|------|--------|-------------|----------|
| **Claim** | `claim()` | Exclusive (only one) | `onRequest` — must reply |
| **Subscribe** | `subscribe()` | Non-exclusive (many) | `onNotification` — read-only |

A plugin can both claim AND subscribe, but typically you do one or the other:
- **Claim** when you're replacing where execution happens (remote server, sandbox)
- **Subscribe** when you're monitoring execution (logging, cloud sync, analytics)

## Request/Reply Format

### Incoming Request

```ts
interface ExecutionRequest {
  type: 'executionGateway.request';
  requestId: string;           // Must use this ID in reply
  originalMessage: any;        // The full original execution message
  originalType: string;        // Message type being proxied
  originalAction?: string;     // Action within the type
  timestamp: string;
}
```

### Reply

```ts
// Success
plugin.executionGateway.sendReply(request.requestId, resultData, true);

// Failure
plugin.executionGateway.sendReply(request.requestId, { error: 'reason' }, false);
```

## Plugin Manifest

```json
{
  "name": "my-remote-execution-plugin",
  "version": "1.0.0",
  "main": "dist/index.js",
  "codebolt": {
    "plugin": {
      "type": "execution",
      "gateway": {
        "claimsExecutionGateway": true
      },
      "triggers": [{ "type": "startup" }],
      "ui": {
        "path": "./ui/default/index.html"
      }
    }
  },
  "dependencies": {
    "@codebolt/plugin-sdk": "*"
  }
}
```

## Tips

- Use `startup` trigger for always-on execution proxying
- Add a UI panel for remote server configuration
- Store connection config in `kvStore` for auto-reconnect on restart
- Handle connection failures gracefully — fall back to error replies, not crashes
- Use the `narrative` module for full workspace sync if the remote needs file context
- Log execution details for debugging (use `console.log` — captured by debug system)
- Always call `relinquish()` in `onStop()` to release the gateway

## See Also

- [Plugins Overview](./01_overview.md)
- [Gateway, Execution, and LLM Provider Patterns](./04_major-patterns.md)
- [Packaging and Publishing Plugins](./99_packaging-and-publishing.md)
