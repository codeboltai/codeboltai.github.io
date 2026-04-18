---
title: MailApi API
---

# MailApi API

The `mailApi` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`acknowledgeMessage`](./acknowledgeMessage) |  |
| [`checkReservationConflicts`](./checkReservationConflicts) |  |
| [`createAgent`](./createAgent) |  |
| [`createReservation`](./createReservation) |  |
| [`createThread`](./createThread) |  |
| [`createThreadMessage`](./createThreadMessage) |  |
| [`deleteThread`](./deleteThread) |  |
| [`forceReservation`](./forceReservation) |  |
| [`getAgent`](./getAgent) |  |
| [`getAgentInbox`](./getAgentInbox) |  |
| [`getAgents`](./getAgents) |  |
| [`getReservations`](./getReservations) |  |
| [`getThread`](./getThread) |  |
| [`getThreadMessages`](./getThreadMessages) |  |
| [`getThreads`](./getThreads) |  |
| [`markMessageRead`](./markMessageRead) |  |
| [`releaseReservation`](./releaseReservation) |  |
| [`replyToMessage`](./replyToMessage) |  |
| [`searchMessages`](./searchMessages) |  |
| [`send`](./send) |  |
| [`summarizeThread`](./summarizeThread) |  |
| [`updateThread`](./updateThread) |  |

## Methods

---

### `acknowledgeMessage`

```typescript
plugin.mailApi.acknowledgeMessage(messageId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `messageId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./acknowledgeMessage)

---

### `checkReservationConflicts`

```typescript
plugin.mailApi.checkReservationConflicts(data: CheckReservationConflictsRequest): Promise<object>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckReservationConflictsRequest` | Yes |  |

**Returns:** `Promise<object>`

[Full reference →](./checkReservationConflicts)

---

### `createAgent`

```typescript
plugin.mailApi.createAgent(data: CreateMailAgentRequest): Promise<MailAgent>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateMailAgentRequest` | Yes |  |

**Returns:** `Promise<MailAgent>`

[Full reference →](./createAgent)

---

### `createReservation`

```typescript
plugin.mailApi.createReservation(data: CreateReservationRequest): Promise<MailReservation>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateReservationRequest` | Yes |  |

**Returns:** `Promise<MailReservation>`

[Full reference →](./createReservation)

---

### `createThread`

```typescript
plugin.mailApi.createThread(data: CreateMailThreadRequest): Promise<MailThread>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateMailThreadRequest` | Yes |  |

**Returns:** `Promise<MailThread>`

[Full reference →](./createThread)

---

### `createThreadMessage`

```typescript
plugin.mailApi.createThreadMessage(threadId: string, data: SendMailMessageRequest): Promise<MailMessage>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |
| `data` | `SendMailMessageRequest` | Yes |  |

**Returns:** `Promise<MailMessage>`

[Full reference →](./createThreadMessage)

---

### `deleteThread`

```typescript
plugin.mailApi.deleteThread(threadId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./deleteThread)

---

### `forceReservation`

```typescript
plugin.mailApi.forceReservation(data: ForceReservationRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ForceReservationRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./forceReservation)

---

### `getAgent`

```typescript
plugin.mailApi.getAgent(agentId: string): Promise<MailAgent>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `agentId` | `string` | Yes |  |

**Returns:** `Promise<MailAgent>`

[Full reference →](./getAgent)

---

### `getAgentInbox`

```typescript
plugin.mailApi.getAgentInbox(agentId: string): Promise<MailMessage[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `agentId` | `string` | Yes |  |

**Returns:** `Promise<MailMessage[]>`

[Full reference →](./getAgentInbox)

---

### `getAgents`

```typescript
plugin.mailApi.getAgents(): Promise<MailAgent[]>
```



_No parameters._

**Returns:** `Promise<MailAgent[]>`

[Full reference →](./getAgents)

---

### `getReservations`

```typescript
plugin.mailApi.getReservations(params?: Record<string, unknown>): Promise<MailReservation[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

**Returns:** `Promise<MailReservation[]>`

[Full reference →](./getReservations)

---

### `getThread`

```typescript
plugin.mailApi.getThread(threadId: string): Promise<MailThread>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<MailThread>`

[Full reference →](./getThread)

---

### `getThreadMessages`

```typescript
plugin.mailApi.getThreadMessages(threadId: string): Promise<MailMessage[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<MailMessage[]>`

[Full reference →](./getThreadMessages)

---

### `getThreads`

```typescript
plugin.mailApi.getThreads(params?: MailThreadListParams): Promise<MailThread[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `MailThreadListParams` | No |  |

**Returns:** `Promise<MailThread[]>`

[Full reference →](./getThreads)

---

### `markMessageRead`

```typescript
plugin.mailApi.markMessageRead(messageId: string): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `messageId` | `string` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./markMessageRead)

---

### `releaseReservation`

```typescript
plugin.mailApi.releaseReservation(data: ReleaseReservationRequest): Promise<void>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ReleaseReservationRequest` | Yes |  |

**Returns:** `Promise<void>`

[Full reference →](./releaseReservation)

---

### `replyToMessage`

```typescript
plugin.mailApi.replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ReplyToMessageRequest` | Yes |  |

**Returns:** `Promise<MailMessage>`

[Full reference →](./replyToMessage)

---

### `searchMessages`

```typescript
plugin.mailApi.searchMessages(params?: MailSearchParams): Promise<MailMessage[]>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `MailSearchParams` | No |  |

**Returns:** `Promise<MailMessage[]>`

[Full reference →](./searchMessages)

---

### `send`

```typescript
plugin.mailApi.send(data: SendMailMessageRequest): Promise<MailMessage>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SendMailMessageRequest` | Yes |  |

**Returns:** `Promise<MailMessage>`

[Full reference →](./send)

---

### `summarizeThread`

```typescript
plugin.mailApi.summarizeThread(threadId: string): Promise<MailThreadSummary>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<MailThreadSummary>`

[Full reference →](./summarizeThread)

---

### `updateThread`

```typescript
plugin.mailApi.updateThread(threadId: string, data: UpdateMailThreadRequest): Promise<MailThread>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |
| `data` | `UpdateMailThreadRequest` | Yes |  |

**Returns:** `Promise<MailThread>`

[Full reference →](./updateThread)

