---
sidebar_position: 2
title: Direct Plugin Socket Interface
---

# Direct Plugin Socket Interface

Yes, this deserves its own page.

`packages/server/src/pluginLib/pluginsSocket.ts` is not just an implementation detail. It is a **direct-connect interface** that lets an external provider or plugin-like process connect to the server with much less code than a full in-sandbox plugin.

Its job is different from the Proxy Execution Gateway itself:

- the **gateway** decides which capability calls are proxied
- the **direct plugin socket** is one way an external process can connect and participate in that flow

## Why This Exists

The normal plugin path is `/plugin`.

That path is designed for regular Codebolt plugins that:

- are started by Codebolt
- authenticate with `pluginId` and `pluginToken`
- receive `pluginStartMessage`
- use the plugin SDK from inside the Codebolt plugin runtime

`/plugins` is different.

It exists so an external provider process can connect **directly** to the Codebolt server and behave like a plugin without needing the full in-sandbox bridge plugin pattern.

The file comment in `pluginsSocket.ts` describes it as a direct port of the old bridge logic from `packages/plugins/remote-execution-plugin/src/index.ts`.

## `/plugin` vs `/plugins`

| Endpoint | Intended for | Auth model | Typical use |
|---|---|---|---|
| `/plugin` | normal Codebolt plugins | `pluginId` + `pluginToken` | plugin SDK lifecycle, UI plugins, provider plugins, LLM plugins |
| `/plugins` | external direct-connect process | no built-in token auth in this layer | remote provider process or direct bridge process that should act like a plugin with less boilerplate |

The trailing `s` matters.

`pluginsSocket.ts` explicitly warns that this endpoint is meant to be reachable only through a sandbox-specific host boundary and should not be exposed to untrusted networks.

## What Happens On Connect

When a process connects to `/plugins`, the server:

1. reads `providerId` from the query string
2. creates a synthetic plugin identity like `remote-provider-${providerId}-${uuid}`
3. registers that socket in the shared `pluginConnections` map
4. auto-claims the Execution Gateway
5. auto-subscribes the connection to execution notifications

This is the key convenience feature: the external process does not need a lot of startup code just to become a gateway participant.

## What Messages It Handles

The direct plugin socket handles several important paths.

### `executionGateway.*`

Because the connection is registered in `pluginConnections`, normal gateway forwarding works:

- proxied calls arrive as `executionGateway.request`
- the external process can return `executionGateway.reply`
- local operations can be mirrored as `executionGateway.notification`

### `messageResponse`

This is treated as the "send prompt" envelope from the host side.

The server strips `environment` and `isRemoteTask` when needed and routes the message through the same chat path that starts the agent flow.

That means the direct connection can kick off normal agent work without reimplementing the whole chat/bootstrap layer.

### `narrative.*` and other plugin-routed messages

For most other messages, `pluginsSocket.ts` delegates into `pluginHandleCliMessages`, which means the direct connection can reuse the same routing used by the normal `/plugin` endpoint.

That includes flows such as:

- `narrative.*`
- `executionGateway.*`
- `gateway.*`
- `llmProvider.*`
- other messages that eventually fall through to `cliLib`

### `providerAppFs`

`pluginsSocket.ts` also has special handling for `providerAppFs`, with a dedicated response envelope:

- request: `providerAppFs`
- response: `providerAppFsResponse`

That makes the endpoint useful not only for execution proxying, but also for provider-side filesystem-style integration.

## Why It Should Be Documented Separately

This interface deserves its own page because it answers a different architectural question:

- the gateway page explains **how proxy execution works**
- this page explains **how an external process can connect with low ceremony and participate in that system**

If both are kept in one page, readers mix up routing policy with transport/interface design.

## When To Use It

Use `/plugins` when you have an external process that:

- runs outside the normal plugin runtime
- still needs to participate like a plugin
- should claim or subscribe to the execution gateway
- should forward prompts or capability requests without a lot of SDK bootstrap code

Use `/plugin` when you are building a standard Codebolt plugin managed by the plugin runtime.

## Current Constraints

This interface is powerful, but it is intentionally thin:

- it relies on surrounding network isolation rather than endpoint-level auth
- it auto-claims the gateway on connect, so it is opinionated toward remote execution scenarios
- it is designed around direct participation in existing server internals, not as a general public API

That means it should be documented as a **server-side integration interface**, not as a generic plugin SDK replacement.

## Relationship To The Old Bridge Plugin

Historically, the bridge logic lived in `packages/plugins/remote-execution-plugin/src/index.ts`.

`pluginsSocket.ts` exists to let external provider processes do that same class of work more directly:

- less bridge code
- less plugin bootstrap code
- more direct server integration

So yes, this should be a separate file in the docs.

## See Also

- [Proxy Execution Gateway](./01_overview.md)
- [Remote Environments](../../08a_multi-environment-orchestration/02_remote-environments/01_overview.md)
- [Creating a Custom Provider](../../08a_multi-environment-orchestration/03_creating-a-custom-provider.md)
- [Plugin SDK and Lifecycle](../02_sdk-and-lifecycle.md)
