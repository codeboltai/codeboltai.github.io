---
title: Chat API
---

# Chat API

The `chat` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`askQuestion`](./askQuestion) |  |
| [`checkForSteeringMessage`](./checkForSteeringMessage) | Checks if any steering message has been received. |
| [`getChatHistory`](./getChatHistory) | Retrieves the chat history from the server. |
| [`onSteeringMessageReceived`](./onSteeringMessageReceived) | Waits for a steering message. |
| [`processFinished`](./processFinished) | Stops the ongoing process. |
| [`processStarted`](./processStarted) | Notifies the server that a process has started and sets up a listener for stopProcessClicked events. |
| [`sendConfirmationRequest`](./sendConfirmationRequest) | Sends a confirmation request to the server with two options: Yes or No. |
| [`sendMessage`](./sendMessage) | Sends a message through the WebSocket connection. |
| [`sendNotificationEvent`](./sendNotificationEvent) | Sends a notification event to the server. |
| [`setRequestHandler`](./setRequestHandler) | Sets a global request handler for all incoming messages |
| [`stopProcess`](./stopProcess) | Stops the ongoing process. |
| [`waitforReply`](./waitforReply) | Waits for a reply to a sent message. |

## Methods

---

### `askQuestion`

```typescript
plugin.chat.askQuestion(question: string, buttons: string[], withFeedback: boolean): Promise<string>
```



| Parameter | Type | Required | Description |
|---|---|---|---|
| `question` | `string` | Yes |  |
| `buttons` | `string[]` | Yes |  _(default: `[]`)_ |
| `withFeedback` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `Promise<string>`

[Full reference →](./askQuestion)

---

### `checkForSteeringMessage`

```typescript
plugin.chat.checkForSteeringMessage(): SteeringMessage | null
```

Checks if any steering message has been received.

_No parameters._

**Returns:** `SteeringMessage | null` — The message data if available, or null

[Full reference →](./checkForSteeringMessage)

---

### `getChatHistory`

```typescript
plugin.chat.getChatHistory(threadId: string): Promise<ChatMessage>
```

Retrieves the chat history from the server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes |  |

**Returns:** `Promise<ChatMessage>` — A promise that resolves with an array of ChatMessage objects representing the chat history.

[Full reference →](./getChatHistory)

---

### `onSteeringMessageReceived`

```typescript
plugin.chat.onSteeringMessageReceived(): Promise<SteeringMessage | null>
```

Waits for a steering message.

_No parameters._

**Returns:** `Promise<SteeringMessage | null>` — A promise that resolves with the message data

[Full reference →](./onSteeringMessageReceived)

---

### `processFinished`

```typescript
plugin.chat.processFinished(): void
```

Stops the ongoing process.
Sends a specific message to the server to stop the process.

_No parameters._

**Returns:** `void`

[Full reference →](./processFinished)

---

### `processStarted`

```typescript
plugin.chat.processStarted(onStopClicked?: Function): ProcessControl | ProcessControlWithCleanup
```

Notifies the server that a process has started and sets up a listener for stopProcessClicked events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `onStopClicked` | `Function` | No | Callback function to handle stop process events. |

**Returns:** `ProcessControl | ProcessControlWithCleanup` — An object containing a stopProcess method.

[Full reference →](./processStarted)

---

### `sendConfirmationRequest`

```typescript
plugin.chat.sendConfirmationRequest(confirmationMessage: string, buttons: string[], withFeedback: boolean): Promise<string>
```

Sends a confirmation request to the server with two options: Yes or No.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `confirmationMessage` | `string` | Yes |  |
| `buttons` | `string[]` | Yes |  _(default: `[]`)_ |
| `withFeedback` | `boolean` | Yes |  _(default: `false`)_ |

**Returns:** `Promise<string>` — A promise that resolves with the server's response.

[Full reference →](./sendConfirmationRequest)

---

### `sendMessage`

```typescript
plugin.chat.sendMessage(message: string, payload?: object): void
```

Sends a message through the WebSocket connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The message to be sent. |
| `payload` | `object` | No | Optional additional payload data. |

**Returns:** `void`

[Full reference →](./sendMessage)

---

### `sendNotificationEvent`

```typescript
plugin.chat.sendNotificationEvent(notificationMessage: string, type: "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"): void
```

Sends a notification event to the server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `notificationMessage` | `string` | Yes | The message to be sent in the notification. |
| `type` | `"editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"` | Yes |  |

**Returns:** `void`

[Full reference →](./sendNotificationEvent)

---

### `setRequestHandler`

```typescript
plugin.chat.setRequestHandler(handler: RequestHandler): void
```

Sets a global request handler for all incoming messages

| Parameter | Type | Required | Description |
|---|---|---|---|
| `handler` | `RequestHandler` | Yes | The async handler function |

**Returns:** `void`

[Full reference →](./setRequestHandler)

---

### `stopProcess`

```typescript
plugin.chat.stopProcess(): void
```

Stops the ongoing process.
Sends a specific message to the server to stop the process.

_No parameters._

**Returns:** `void`

[Full reference →](./stopProcess)

---

### `waitforReply`

```typescript
plugin.chat.waitforReply(message: string): Promise<UserMessage>
```

Waits for a reply to a sent message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The message for which a reply is expected. |

**Returns:** `Promise<UserMessage>` — A promise that resolves with the reply.

[Full reference →](./waitforReply)

