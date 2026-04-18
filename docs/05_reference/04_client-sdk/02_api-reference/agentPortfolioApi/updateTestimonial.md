---
name: updateTestimonial
cbbaseinfo:
  description: "Updates an existing testimonial.

Modifies the content or metadata of a previously submitted testimonial."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the testimonial to update
      isOptional: false
    - name: data
      typeName: UpdateTestimonialRequest
      description: The fields to update on the testimonial
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentTestimonial>"
    description: A promise that resolves to the updated AgentTestimonial
data:
  name: updateTestimonial
  category: agentPortfolioApi
  link: updateTestimonial.md
---
# updateTestimonial

```typescript
client.agentPortfolioApi.updateTestimonial(id: string, data: UpdateTestimonialRequest): Promise<AgentTestimonial>
```

Updates an existing testimonial.

Modifies the content or metadata of a previously submitted testimonial.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the testimonial to update |
| `data` | `UpdateTestimonialRequest` | The fields to update on the testimonial |

## Returns

**`Promise<AgentTestimonial>`** — A promise that resolves to the updated AgentTestimonial

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.updateTestimonial('id', /* UpdateTestimonialRequest */);
```
