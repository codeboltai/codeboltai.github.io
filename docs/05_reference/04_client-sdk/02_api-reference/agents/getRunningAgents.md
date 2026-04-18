---
title: getRunningAgents
---

# `getRunningAgents`

```typescript
client.agents.getRunningAgents(): Promise<Agent[]>
```

Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime.

## Parameters

_No parameters._

## Returns

`Promise<Agent[]>` — A promise that resolves to an array of running Agent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.agents.getRunningAgents();
console.log(result);
```
