---
name: sendAppreciation
cbbaseinfo:
  description: "Sends an appreciation to an agent.

Records a lightweight positive feedback signal for an agent,
similar to a \"like\" or \"thumbs up\" on their work."
cbparameters:
  parameters:
    - name: data
      typeName: SendAppreciationRequest
      description: The appreciation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the appreciation has been sent
data:
  name: sendAppreciation
  category: agentPortfolioApi
  link: sendAppreciation.md
---
# sendAppreciation

```typescript
client.agentPortfolioApi.sendAppreciation(data: SendAppreciationRequest): Promise<unknown>
```

Sends an appreciation to an agent.

Records a lightweight positive feedback signal for an agent,
similar to a "like" or "thumbs up" on their work.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SendAppreciationRequest` | The appreciation payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the appreciation has been sent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.sendAppreciation(/* SendAppreciationRequest */);
```
