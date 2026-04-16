---
sidebar_position: 8
title: Custom Remote Execution Provider
---

# Custom Remote Execution Provider

A remote execution provider lets agents run their work somewhere other than the local machine — a cloud VM, a container orchestrator, a dedicated sandbox. In the plugin system, this is implemented as an **Execution Gateway Plugin**.

## How it fits into Codebolt

Normally, Codebolt spawns agents as local processes. With an execution plugin, the plugin "claims" the execution gateway and handles the spawn requests itself.

```ts
import plugin from "@codebolt/plugin-sdk";

plugin.onStart(async () => {
  // Claim the execution gateway so requests are routed to this plugin
  await plugin.executionGateway.claim();
});

// Handle incoming execution requests
plugin.executionGateway.onRequest(async (req) => {
  // 1. Start the remote container/VM
  const remoteRun = await myRemoteService.spawn(req);

  // 2. Tell the server the run has started
  plugin.executionGateway.sendReply({
    runId: req.runId,
    status: "running",
    remoteHost: remoteRun.host
  });
});
```

## Registering the provider

Your `package.json` manifest must claim the execution gateway:

```json
{
  "name": "@my-org/codebolt-plugin-remote-exec",
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

## See also

- [Plugins Overview](./01_overview.md)
- [Gateway, execution, and LLM provider patterns](./04_major-patterns.md)
- [Packaging and Publishing Plugins](./05_packaging-and-publishing.md)
