---
title: ExecutionGateway API
---

# ExecutionGateway API

The `executionGateway` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`claim`](./claim) | Claim exclusive handling of execution requests. |
| [`offNotification`](./offNotification) | Remove a previously registered notification callback. |
| [`offRequest`](./offRequest) | Remove a previously registered request callback. |
| [`onNotification`](./onNotification) | Register a callback for execution notifications. |
| [`onRequest`](./onRequest) | Register a callback for incoming execution requests. |
| [`relinquish`](./relinquish) | Release the claim on the execution gateway. |
| [`sendReply`](./sendReply) | Send a reply for a specific execution request. |
| [`subscribe`](./subscribe) | Subscribe to execution notifications. |
| [`unsubscribe`](./unsubscribe) | Unsubscribe from execution notifications. |

## Methods

---

### `claim`

```typescript
plugin.executionGateway.claim(): Promise<ExecutionGatewayClaimResponse>
```

Claim exclusive handling of execution requests.
Only one plugin can claim at a time. Returns an error if already claimed.

_No parameters._

**Returns:** `Promise<ExecutionGatewayClaimResponse>`

[Full reference →](./claim)

---

### `offNotification`

```typescript
plugin.executionGateway.offNotification(callback: Function): void
```

Remove a previously registered notification callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./offNotification)

---

### `offRequest`

```typescript
plugin.executionGateway.offRequest(callback: Function): void
```

Remove a previously registered request callback.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes |  |

**Returns:** `void`

[Full reference →](./offRequest)

---

### `onNotification`

```typescript
plugin.executionGateway.onNotification(callback: Function): void
```

Register a callback for execution notifications.
These are broadcast after any locally-executed agent action.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with each ExecutionNotification |

**Returns:** `void`

[Full reference →](./onNotification)

---

### `onRequest`

```typescript
plugin.executionGateway.onRequest(callback: Function): void
```

Register a callback for incoming execution requests.
These are proxied agent messages that the claiming plugin must handle.
After processing, call sendReply() with the requestId and result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with each ExecutionRequest |

**Returns:** `void`

[Full reference →](./onRequest)

---

### `relinquish`

```typescript
plugin.executionGateway.relinquish(): Promise<ExecutionGatewayResponse>
```

Release the claim on the execution gateway.

_No parameters._

**Returns:** `Promise<ExecutionGatewayResponse>`

[Full reference →](./relinquish)

---

### `sendReply`

```typescript
plugin.executionGateway.sendReply(requestId: string, result: any, success: boolean): void
```

Send a reply for a specific execution request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `requestId` | `string` | Yes | The requestId from the ExecutionRequest |
| `result` | `any` | Yes | The result object to send back (will be the response to the agent) |
| `success` | `boolean` | Yes | Whether the execution succeeded (default: true) _(default: `true`)_ |

**Returns:** `void`

[Full reference →](./sendReply)

---

### `subscribe`

```typescript
plugin.executionGateway.subscribe(): Promise<ExecutionGatewayResponse>
```

Subscribe to execution notifications.
Notifications are broadcast whenever the server handles a message locally.

_No parameters._

**Returns:** `Promise<ExecutionGatewayResponse>`

[Full reference →](./subscribe)

---

### `unsubscribe`

```typescript
plugin.executionGateway.unsubscribe(): Promise<ExecutionGatewayResponse>
```

Unsubscribe from execution notifications.

_No parameters._

**Returns:** `Promise<ExecutionGatewayResponse>`

[Full reference →](./unsubscribe)

