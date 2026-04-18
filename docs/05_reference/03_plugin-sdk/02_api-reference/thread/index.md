---
title: Thread API
---

# Thread API

The `thread` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`createAndStartThread`](./createAndStartThread) | Creates and immediately starts a new thread. |
| [`createThread`](./createThread) | Creates a new thread with comprehensive options. |
| [`createThreadInBackground`](./createThreadInBackground) | Creates a thread in the background and resolves when the agent starts or fails. |
| [`deleteThread`](./deleteThread) | Deletes a thread. |
| [`getThreadDetail`](./getThreadDetail) | Retrieves detailed information about a specific thread. |
| [`getThreadFileChanges`](./getThreadFileChanges) | Retrieves file changes associated with a specific thread. |
| [`getThreadFileChangesSummary`](./getThreadFileChangesSummary) | Retrieves file changes summary for ChangesSummaryPanel. |
| [`getThreadList`](./getThreadList) | Retrieves a list of threads with optional filtering. |
| [`getThreadMessages`](./getThreadMessages) | Retrieves messages for a specific thread. |
| [`startThread`](./startThread) | Starts a thread. |
| [`updateThread`](./updateThread) | Updates an existing thread. |
| [`updateThreadStatus`](./updateThreadStatus) | Updates the status of a thread. |

## Methods

---

### `createAndStartThread`

```typescript
plugin.thread.createAndStartThread(options: object): Promise<object>
```

Creates and immediately starts a new thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation and start parameters |

**Returns:** `Promise<object>` — A promise that resolves with the thread start response

[Full reference →](./createAndStartThread)

---

### `createThread`

```typescript
plugin.thread.createThread(options: object): Promise<object>
```

Creates a new thread with comprehensive options.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation parameters |

**Returns:** `Promise<object>` — A promise that resolves with the thread creation response

[Full reference →](./createThread)

---

### `createThreadInBackground`

```typescript
plugin.thread.createThreadInBackground(options: object): Promise<object | object>
```

Creates a thread in the background and resolves when the agent starts or fails.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread creation and start parameters |

**Returns:** `Promise<object | object>` — A promise that resolves with ThreadAgentStarted or ThreadAgentStartFailed response

[Full reference →](./createThreadInBackground)

---

### `deleteThread`

```typescript
plugin.thread.deleteThread(threadId: string): Promise<object>
```

Deletes a thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to delete |

**Returns:** `Promise<object>` — A promise that resolves with the thread deletion response

[Full reference →](./deleteThread)

---

### `getThreadDetail`

```typescript
plugin.thread.getThreadDetail(options: object): Promise<object>
```

Retrieves detailed information about a specific thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread detail options |

**Returns:** `Promise<object>` — A promise that resolves with the thread detail response

[Full reference →](./getThreadDetail)

---

### `getThreadFileChanges`

```typescript
plugin.thread.getThreadFileChanges(threadId: string): Promise<ThreadFileChangesResponse>
```

Retrieves file changes associated with a specific thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |

**Returns:** `Promise<ThreadFileChangesResponse>` — A promise that resolves with the file changes

[Full reference →](./getThreadFileChanges)

---

### `getThreadFileChangesSummary`

```typescript
plugin.thread.getThreadFileChangesSummary(threadId: string): Promise<ThreadFileChangesSummaryResponse>
```

Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: \{ title, changes, files \}

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |

**Returns:** `Promise<ThreadFileChangesSummaryResponse>` — A promise that resolves with the file changes summary

[Full reference →](./getThreadFileChangesSummary)

---

### `getThreadList`

```typescript
plugin.thread.getThreadList(options: object): Promise<object>
```

Retrieves a list of threads with optional filtering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | Optional filters for threads _(default: `{}`)_ |

**Returns:** `Promise<object>` — A promise that resolves with the thread list response

[Full reference →](./getThreadList)

---

### `getThreadMessages`

```typescript
plugin.thread.getThreadMessages(options: object): Promise<object>
```

Retrieves messages for a specific thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `object` | Yes | The thread messages options |

**Returns:** `Promise<object>` — A promise that resolves with the thread messages response

[Full reference →](./getThreadMessages)

---

### `startThread`

```typescript
plugin.thread.startThread(threadId: string): Promise<object>
```

Starts a thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to start |

**Returns:** `Promise<object>` — A promise that resolves with the thread start response

[Full reference →](./startThread)

---

### `updateThread`

```typescript
plugin.thread.updateThread(threadId: string, updates: object): Promise<object>
```

Updates an existing thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID to update |
| `updates` | `object` | Yes | The thread update parameters |

**Returns:** `Promise<object>` — A promise that resolves with the thread update response

[Full reference →](./updateThread)

---

### `updateThreadStatus`

```typescript
plugin.thread.updateThreadStatus(threadId: string, status: string): Promise<object>
```

Updates the status of a thread.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |
| `status` | `string` | Yes | The new status |

**Returns:** `Promise<object>` — A promise that resolves with the thread status update response

[Full reference →](./updateThreadStatus)

