---
title: HistoryApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: HistoryApi

Defined in: CodeBolt/packages/clientsdk/src/api/history.api.ts:11

Provides access to agent execution history.

Use this API to retrieve the historical record of actions and events
for a specific agent, useful for auditing, debugging, and replaying
past agent sessions.

## Constructors

### Constructor

```ts
new HistoryApi(http: HttpClient): HistoryApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/history.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`HistoryApi`

## Methods

### getByAgentId()

```ts
getByAgentId(agentId: string): Promise<HistoryEntry[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/history.api.ts:30

Retrieves the execution history for a specific agent.

Returns an ordered list of history entries documenting every action
the agent performed, including timestamps and payloads. Useful for
reviewing what an agent did during a session.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `agentId` | `string` | The unique identifier of the agent whose history to retrieve |

#### Returns

`Promise`\<`HistoryEntry`[]\>

A promise that resolves to an array of HistoryEntry objects in chronological order

#### Example

```typescript
const history = await client.history.getByAgentId('agent-001');
history.forEach(entry => console.log(entry.action, entry.timestamp));
```
