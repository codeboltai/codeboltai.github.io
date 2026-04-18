---
title: Mail API
---

# Mail API

The `mail` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`acknowledge`](./acknowledge) |  |
| [`archiveThread`](./archiveThread) |  |
| [`checkConflicts`](./checkConflicts) |  |
| [`createThread`](./createThread) |  |
| [`fetchInbox`](./fetchInbox) |  |
| [`findOrCreateThread`](./findOrCreateThread) |  |
| [`forceReserveFiles`](./forceReserveFiles) |  |
| [`getAgent`](./getAgent) |  |
| [`getMessage`](./getMessage) |  |
| [`getMessages`](./getMessages) |  |
| [`getThread`](./getThread) |  |
| [`listAgents`](./listAgents) |  |
| [`listReservations`](./listReservations) |  |
| [`listThreads`](./listThreads) |  |
| [`markRead`](./markRead) |  |
| [`registerAgent`](./registerAgent) |  |
| [`releaseFiles`](./releaseFiles) |  |
| [`replyMessage`](./replyMessage) |  |
| [`reserveFiles`](./reserveFiles) |  |
| [`search`](./search) |  |
| [`sendMessage`](./sendMessage) |  |
| [`summarizeThread`](./summarizeThread) |  |
| [`updateThreadStatus`](./updateThreadStatus) |  |

## Methods

---

### `acknowledge`

```typescript
plugin.mail.acknowledge(params: IAcknowledgeParams): Promise<IAcknowledgeResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IAcknowledgeParams` | Yes |  |

**Returns:** `Promise<IAcknowledgeResponse>`

[Full reference →](./acknowledge)

---

### `archiveThread`

```typescript
plugin.mail.archiveThread(params: IArchiveThreadParams): Promise<IArchiveThreadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IArchiveThreadParams` | Yes |  |

**Returns:** `Promise<IArchiveThreadResponse>`

[Full reference →](./archiveThread)

---

### `checkConflicts`

```typescript
plugin.mail.checkConflicts(params: ICheckConflictsParams): Promise<ICheckConflictsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICheckConflictsParams` | Yes |  |

**Returns:** `Promise<ICheckConflictsResponse>`

[Full reference →](./checkConflicts)

---

### `createThread`

```typescript
plugin.mail.createThread(params: ICreateThreadParams): Promise<ICreateThreadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICreateThreadParams` | Yes |  |

**Returns:** `Promise<ICreateThreadResponse>`

[Full reference →](./createThread)

---

### `fetchInbox`

```typescript
plugin.mail.fetchInbox(params: IFetchInboxParams): Promise<IFetchInboxResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IFetchInboxParams` | Yes |  |

**Returns:** `Promise<IFetchInboxResponse>`

[Full reference →](./fetchInbox)

---

### `findOrCreateThread`

```typescript
plugin.mail.findOrCreateThread(params: IFindOrCreateThreadParams): Promise<IFindOrCreateThreadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IFindOrCreateThreadParams` | Yes |  |

**Returns:** `Promise<IFindOrCreateThreadResponse>`

[Full reference →](./findOrCreateThread)

---

### `forceReserveFiles`

```typescript
plugin.mail.forceReserveFiles(params: IForceReserveFilesParams): Promise<IForceReserveFilesResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IForceReserveFilesParams` | Yes |  |

**Returns:** `Promise<IForceReserveFilesResponse>`

[Full reference →](./forceReserveFiles)

---

### `getAgent`

```typescript
plugin.mail.getAgent(params: IGetAgentParams): Promise<IGetAgentResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetAgentParams` | Yes |  |

**Returns:** `Promise<IGetAgentResponse>`

[Full reference →](./getAgent)

---

### `getMessage`

```typescript
plugin.mail.getMessage(params: IGetMessageParams): Promise<IGetMessageResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetMessageParams` | Yes |  |

**Returns:** `Promise<IGetMessageResponse>`

[Full reference →](./getMessage)

---

### `getMessages`

```typescript
plugin.mail.getMessages(params: IGetMessagesParams): Promise<IGetMessagesResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetMessagesParams` | Yes |  |

**Returns:** `Promise<IGetMessagesResponse>`

[Full reference →](./getMessages)

---

### `getThread`

```typescript
plugin.mail.getThread(params: IGetThreadParams): Promise<IGetThreadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetThreadParams` | Yes |  |

**Returns:** `Promise<IGetThreadResponse>`

[Full reference →](./getThread)

---

### `listAgents`

```typescript
plugin.mail.listAgents(): Promise<IListAgentsResponse>
```



_No parameters._

**Returns:** `Promise<IListAgentsResponse>`

[Full reference →](./listAgents)

---

### `listReservations`

```typescript
plugin.mail.listReservations(params: IListReservationsParams): Promise<IListReservationsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListReservationsParams` | Yes |  |

**Returns:** `Promise<IListReservationsResponse>`

[Full reference →](./listReservations)

---

### `listThreads`

```typescript
plugin.mail.listThreads(params: IListThreadsParams): Promise<IListThreadsResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IListThreadsParams` | Yes |  _(default: `{}`)_ |

**Returns:** `Promise<IListThreadsResponse>`

[Full reference →](./listThreads)

---

### `markRead`

```typescript
plugin.mail.markRead(params: IMarkReadParams): Promise<IMarkReadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IMarkReadParams` | Yes |  |

**Returns:** `Promise<IMarkReadResponse>`

[Full reference →](./markRead)

---

### `registerAgent`

```typescript
plugin.mail.registerAgent(params: IRegisterAgentParams): Promise<IRegisterAgentResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IRegisterAgentParams` | Yes |  |

**Returns:** `Promise<IRegisterAgentResponse>`

[Full reference →](./registerAgent)

---

### `releaseFiles`

```typescript
plugin.mail.releaseFiles(params: IReleaseFilesParams): Promise<IReleaseFilesResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReleaseFilesParams` | Yes |  |

**Returns:** `Promise<IReleaseFilesResponse>`

[Full reference →](./releaseFiles)

---

### `replyMessage`

```typescript
plugin.mail.replyMessage(params: IReplyMessageParams): Promise<IReplyMessageResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReplyMessageParams` | Yes |  |

**Returns:** `Promise<IReplyMessageResponse>`

[Full reference →](./replyMessage)

---

### `reserveFiles`

```typescript
plugin.mail.reserveFiles(params: IReserveFilesParams): Promise<IReserveFilesResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReserveFilesParams` | Yes |  |

**Returns:** `Promise<IReserveFilesResponse>`

[Full reference →](./reserveFiles)

---

### `search`

```typescript
plugin.mail.search(params: ISearchParams): Promise<ISearchResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISearchParams` | Yes |  |

**Returns:** `Promise<ISearchResponse>`

[Full reference →](./search)

---

### `sendMessage`

```typescript
plugin.mail.sendMessage(params: ISendMessageParams): Promise<ISendMessageResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISendMessageParams` | Yes |  |

**Returns:** `Promise<ISendMessageResponse>`

[Full reference →](./sendMessage)

---

### `summarizeThread`

```typescript
plugin.mail.summarizeThread(params: ISummarizeThreadParams): Promise<ISummarizeThreadResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISummarizeThreadParams` | Yes |  |

**Returns:** `Promise<ISummarizeThreadResponse>`

[Full reference →](./summarizeThread)

---

### `updateThreadStatus`

```typescript
plugin.mail.updateThreadStatus(params: IUpdateThreadStatusParams): Promise<IUpdateThreadStatusResponse>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IUpdateThreadStatusParams` | Yes |  |

**Returns:** `Promise<IUpdateThreadStatusResponse>`

[Full reference →](./updateThreadStatus)

