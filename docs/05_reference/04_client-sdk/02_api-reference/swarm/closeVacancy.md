---
name: closeVacancy
cbbaseinfo:
  description: "Close a vacancy in a swarm.

Marks a vacancy as closed, preventing further applications. This is
used when a position has been filled or is no longer available."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: vacancyId
      typeName: string
      description: The unique identifier of the vacancy to close
      isOptional: false
    - name: data
      typeName: CloseVacancyRequest
      description: Optional closure information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the vacancy is closed
data:
  name: closeVacancy
  category: swarm
  link: closeVacancy.md
---
# closeVacancy

```typescript
client.swarm.closeVacancy(swarmId: string, vacancyId: string, data?: CloseVacancyRequest): Promise<void>
```

Close a vacancy in a swarm.

Marks a vacancy as closed, preventing further applications. This is
used when a position has been filled or is no longer available.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `vacancyId` | `string` | The unique identifier of the vacancy to close |
| `data` | `CloseVacancyRequest` _(optional)_ | Optional closure information |

## Returns

**`Promise<void>`** — A promise that resolves when the vacancy is closed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.closeVacancy('swarmId', 'vacancyId');
```
