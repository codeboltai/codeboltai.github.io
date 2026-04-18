---
name: createTestimonial
cbbaseinfo:
  description: "Creates a new testimonial for an agent.

Adds a testimonial or review to an agent's portfolio, recording
feedback about their performance."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTestimonialRequest
      description: The testimonial creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentTestimonial>"
    description: A promise that resolves to the created AgentTestimonial
data:
  name: createTestimonial
  category: agentPortfolioApi
  link: createTestimonial.md
---
# createTestimonial

```typescript
client.agentPortfolioApi.createTestimonial(data: CreateTestimonialRequest): Promise<AgentTestimonial>
```

Creates a new testimonial for an agent.

Adds a testimonial or review to an agent's portfolio, recording
feedback about their performance.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTestimonialRequest` | The testimonial creation payload |

## Returns

**`Promise<AgentTestimonial>`** — A promise that resolves to the created AgentTestimonial

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.createTestimonial(/* CreateTestimonialRequest */);
```
