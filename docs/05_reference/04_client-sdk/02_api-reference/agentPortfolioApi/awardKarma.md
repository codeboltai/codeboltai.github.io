---
name: awardKarma
cbbaseinfo:
  description: "Awards karma points to an agent.

Increases an agent's karma score as recognition for good work.
Karma contributes to the agent's overall portfolio ranking."
cbparameters:
  parameters:
    - name: data
      typeName: AwardKarmaRequest
      description: The karma award payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the karma has been awarded
data:
  name: awardKarma
  category: agentPortfolioApi
  link: awardKarma.md
---
# awardKarma

```typescript
client.agentPortfolioApi.awardKarma(data: AwardKarmaRequest): Promise<unknown>
```

Awards karma points to an agent.

Increases an agent's karma score as recognition for good work.
Karma contributes to the agent's overall portfolio ranking.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AwardKarmaRequest` | The karma award payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the karma has been awarded

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.awardKarma(/* AwardKarmaRequest */);
```
