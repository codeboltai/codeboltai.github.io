---
name: endorseTalent
cbbaseinfo:
  description: "Endorses a talent on an agent's portfolio.

Adds an endorsement to a specific talent, increasing its credibility.
Similar to LinkedIn skill endorsements."
cbparameters:
  parameters:
    - name: data
      typeName: EndorseTalentRequest
      description: The endorsement payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the endorsement has been recorded
data:
  name: endorseTalent
  category: agentPortfolioApi
  link: endorseTalent.md
---
# endorseTalent

```typescript
client.agentPortfolioApi.endorseTalent(data: EndorseTalentRequest): Promise<unknown>
```

Endorses a talent on an agent's portfolio.

Adds an endorsement to a specific talent, increasing its credibility.
Similar to LinkedIn skill endorsements.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EndorseTalentRequest` | The endorsement payload |

## Returns

**`Promise<unknown>`** — A promise that resolves when the endorsement has been recorded

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.endorseTalent(/* EndorseTalentRequest */);
```
