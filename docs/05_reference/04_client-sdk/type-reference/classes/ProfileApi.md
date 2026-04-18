---
title: ProfileApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ProfileApi

Defined in: CodeBolt/packages/clientsdk/src/api/profile.api.ts:13

Provides API methods for managing the user profile and default agent settings.

Handles retrieval and configuration of the authenticated user's profile, including
which agent is set as the default for new conversations and tasks.

## Constructors

### Constructor

```ts
new ProfileApi(http: HttpClient): ProfileApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/profile.api.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ProfileApi`

## Methods

### getDefaultProfile()

```ts
getDefaultProfile(): Promise<UserProfile>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/profile.api.ts:30

Retrieves the default user profile for the current session.

Returns the full profile object including user identity, preferences, and configured
defaults. Use this to display user information or check profile settings.

#### Returns

`Promise`\<`UserProfile`\>

A promise that resolves to the user's profile data

#### Example

```typescript
const profile = await client.profile.getDefaultProfile();
console.log(`Logged in as: ${profile.name}`);
```

***

### setDefaultAgent()

```ts
setDefaultAgent(data: SetDefaultAgentRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/profile.api.ts:49

Sets the default agent for the user's profile.

Configures which agent is automatically selected when the user starts a new
conversation or task. This persists across sessions until changed.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SetDefaultAgentRequest` | The request containing the agent to set as default |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the default agent has been updated

#### Example

```typescript
await client.profile.setDefaultAgent({ agentName: 'code-assistant' });
```
