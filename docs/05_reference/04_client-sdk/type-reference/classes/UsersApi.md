---
title: UsersApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: UsersApi

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:18

Manages user accounts, authentication, and message history.

This API handles user registration, authentication status checks, session
management, and agent message storage. It provides functionality for managing
local user accounts and persisting conversation history.

## Constructors

### Constructor

```ts
new UsersApi(http: HttpClient): UsersApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`UsersApi`

## Methods

### checkIfUserExistsLocally()

```ts
checkIfUserExistsLocally(data: CheckUserExistsRequest): Promise<{
  exists: boolean;
}>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:41

Checks if a user exists locally in the system.

Verifies whether a user with the specified credentials or identifier
is already present in the local user store. Useful for preventing
duplicate registrations during setup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CheckUserExistsRequest` | Request containing user identification information |

#### Returns

`Promise`\<\{
  `exists`: `boolean`;
\}\>

A promise that resolves to an object with an 'exists' boolean flag

#### Example

```typescript
const result = await client.users.checkIfUserExistsLocally({ email: 'user@example.com' });
if (result.exists) {
  console.log('User already exists');
}
```

***

### createUser()

```ts
createUser(data: CreateUserRequest): Promise<User>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:72

Creates a new user account in the system.

Registers a new local user with the provided credentials and profile
information. The user will be available for authentication immediately
after creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateUserRequest` | Request containing user creation details |

#### Returns

`Promise`\<`User`\>

A promise that resolves to the created User object

#### Example

```typescript
const newUser = await client.users.createUser({
  username: 'johndoe',
  email: 'john@example.com',
  password: 'securepassword'
});
```

***

### getMessages()

```ts
getMessages(params?: GetMessagesParams): Promise<unknown[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:142

Retrieves saved messages from conversation history.

Returns previously saved message history, optionally filtered by agent
or other criteria. Useful for restoring conversation context or
displaying chat history in the UI.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `GetMessagesParams` | Optional query parameters for filtering messages |

#### Returns

`Promise`\<`unknown`[]\>

A promise that resolves to an array of message objects

#### Example

```typescript
const messages = await client.users.getMessages({ agentId: 'agent-123' });
messages.forEach(m => console.log(`${m.role}: ${m.content}`));
```

***

### logout()

```ts
logout(data?: LogoutRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:91

Logs out the current authenticated user.

Ends the current user session and invalidates authentication tokens.
Optionally accepts logout request data for additional session handling.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `LogoutRequest` | Optional logout request parameters |

#### Returns

`Promise`\<`void`\>

A promise that resolves when logout is complete

#### Example

```typescript
await client.users.logout();
console.log('Logged out successfully');
```

***

### saveMessages()

```ts
saveMessages(agentId: string, data: SaveMessagesRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/users.api.ts:117

Saves message history for a specific agent.

Persists a batch of messages associated with an agent's conversation.
This maintains conversation history across sessions and enables
context retention for continued interactions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `SaveMessagesRequest` | Request containing messages to save |

#### Returns

`Promise`\<`void`\>

A promise that resolves when messages have been saved

#### Example

```typescript
await client.users.saveMessages('agent-123', {
  messages: [
    { role: 'user', content: 'Hello' },
    { role: 'assistant', content: 'Hi there!' }
  ]
});
```
