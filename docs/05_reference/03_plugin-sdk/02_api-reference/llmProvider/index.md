---
title: LlmProvider API
---

# LlmProvider API

The `llmProvider` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`onCompletionRequest`](./onCompletionRequest) | Subscribe to incoming non-streaming completion requests. |
| [`onLoginRequest`](./onLoginRequest) | Subscribe to incoming login requests (triggered by the UI login button). |
| [`onStreamRequest`](./onStreamRequest) | Subscribe to incoming streaming completion requests. |
| [`register`](./register) | Register this plugin as a custom LLM provider on the server. |
| [`sendChunk`](./sendChunk) | Send a streaming chunk for an in-flight stream request. |
| [`sendError`](./sendError) | Send an error for a completion or stream request. |
| [`sendReply`](./sendReply) | Send the final reply for a completion or stream request. |
| [`unregister`](./unregister) | Unregister this plugin's provider. |

## Methods

---

### `onCompletionRequest`

```typescript
plugin.llmProvider.onCompletionRequest(callback: Function): void
```

Subscribe to incoming non-streaming completion requests.
Reply with sendReply(requestId, response) or sendError(requestId, error).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./onCompletionRequest)

---

### `onLoginRequest`

```typescript
plugin.llmProvider.onLoginRequest(callback: Function): void
```

Subscribe to incoming login requests (triggered by the UI login button).
The plugin should run its authentication flow (e.g. OAuth) and then
call sendReply(requestId, \{ authenticated: true \}) or sendError().

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./onLoginRequest)

---

### `onStreamRequest`

```typescript
plugin.llmProvider.onStreamRequest(callback: Function): void
```

Subscribe to incoming streaming completion requests.
Stream tokens with sendChunk(requestId, chunk), then finalize with
sendReply(requestId, finalResponse) or sendError(requestId, error).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./onStreamRequest)

---

### `register`

```typescript
plugin.llmProvider.register(manifest: LlmProviderManifest): Promise<LlmProviderRegisterResponse>
```

Register this plugin as a custom LLM provider on the server.
After registration, the provider appears in the provider list and
can be selected by users like any built-in provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `manifest` | `LlmProviderManifest` | Yes |  |

**Returns:** `Promise<LlmProviderRegisterResponse>`

[Full reference →](./register)

---

### `sendChunk`

```typescript
plugin.llmProvider.sendChunk(requestId: string, chunk: any): void
```

Send a streaming chunk for an in-flight stream request.
The chunk shape should match multillm StreamChunk
(id, model, choices: [\{delta: \{content, ...\}\}]).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `chunk` | `any` | Yes |  |

**Returns:** `void`

[Full reference →](./sendChunk)

---

### `sendError`

```typescript
plugin.llmProvider.sendError(requestId: string, error: string): void
```

Send an error for a completion or stream request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `error` | `string` | Yes |  |

**Returns:** `void`

[Full reference →](./sendError)

---

### `sendReply`

```typescript
plugin.llmProvider.sendReply(requestId: string, response: any, success: boolean): void
```

Send the final reply for a completion or stream request.
For non-streaming: this is the only message you send.
For streaming: send after all chunks have been emitted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes |  |
| `response` | `any` | Yes |  |
| `success` | `boolean` | Yes |  _(default: `true`)_ |

**Returns:** `void`

[Full reference →](./sendReply)

---

### `unregister`

```typescript
plugin.llmProvider.unregister(providerId: string): Promise<LlmProviderResponse>
```

Unregister this plugin's provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `providerId` | `string` | Yes |  |

**Returns:** `Promise<LlmProviderResponse>`

[Full reference →](./unregister)

