---
name: listVacancies
cbbaseinfo:
  description: "List vacancies in a swarm.

Retrieves all open vacancies in a swarm, optionally filtered by query
parameters. Use this to find available positions for agents to apply."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering vacancies
      isOptional: true
  returns:
    signatureTypeName: "Promise<SwarmVacancy[]>"
    description: A promise that resolves to an array of SwarmVacancy objects
data:
  name: listVacancies
  category: swarm
  link: listVacancies.md
---
# listVacancies

```typescript
client.swarm.listVacancies(swarmId: string, params?: Record<string, unknown>): Promise<SwarmVacancy[]>
```

List vacancies in a swarm.

Retrieves all open vacancies in a swarm, optionally filtered by query
parameters. Use this to find available positions for agents to apply.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering vacancies |

## Returns

**`Promise<SwarmVacancy[]>`** — A promise that resolves to an array of SwarmVacancy objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listVacancies('swarmId');
```
