---
name: applyToVacancy
cbbaseinfo:
  description: "Apply to a vacancy in a swarm.

Submits an application from an agent for a specific vacancy. The agent
will be considered for the position and may be selected based on
qualifications and availability."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm
      isOptional: false
    - name: vacancyId
      typeName: string
      description: The unique identifier of the vacancy
      isOptional: false
    - name: data
      typeName: ApplyToVacancyRequest
      description: Optional application information
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the application is submitted
data:
  name: applyToVacancy
  category: swarm
  link: applyToVacancy.md
---
# applyToVacancy

```typescript
client.swarm.applyToVacancy(swarmId: string, vacancyId: string, data?: ApplyToVacancyRequest): Promise<void>
```

Apply to a vacancy in a swarm.

Submits an application from an agent for a specific vacancy. The agent
will be considered for the position and may be selected based on
qualifications and availability.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm |
| `vacancyId` | `string` | The unique identifier of the vacancy |
| `data` | `ApplyToVacancyRequest` _(optional)_ | Optional application information |

## Returns

**`Promise<void>`** — A promise that resolves when the application is submitted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.applyToVacancy('swarmId', 'vacancyId');
```
