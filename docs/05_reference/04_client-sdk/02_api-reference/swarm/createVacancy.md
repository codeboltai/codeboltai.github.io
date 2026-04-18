---
name: createVacancy
cbbaseinfo:
  description: "Create a vacancy in a swarm.

Creates a new vacancy that agents can apply for. Vacancies represent
open positions within teams or roles that need to be filled by
qualified agents."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: data
      typeName: CreateVacancyRequest
      description: The vacancy creation information
      isOptional: false
  returns:
    signatureTypeName: "Promise<SwarmVacancy>"
    description: A promise that resolves to the created SwarmVacancy object
data:
  name: createVacancy
  category: swarm
  link: createVacancy.md
---
# createVacancy

```typescript
client.swarm.createVacancy(swarmId: string, data: CreateVacancyRequest): Promise<SwarmVacancy>
```

Create a vacancy in a swarm.

Creates a new vacancy that agents can apply for. Vacancies represent
open positions within teams or roles that need to be filled by
qualified agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `data` | `CreateVacancyRequest` | The vacancy creation information |

## Returns

**`Promise<SwarmVacancy>`** — A promise that resolves to the created SwarmVacancy object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.createVacancy('swarmId', /* CreateVacancyRequest */);
```
