---
name: deleteTestimonial
cbbaseinfo:
  description: "Deletes a testimonial.

Permanently removes the specified testimonial from an agent's portfolio."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the testimonial to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the testimonial has been deleted
data:
  name: deleteTestimonial
  category: agentPortfolioApi
  link: deleteTestimonial.md
---
# deleteTestimonial

```typescript
client.agentPortfolioApi.deleteTestimonial(id: string): Promise<unknown>
```

Deletes a testimonial.

Permanently removes the specified testimonial from an agent's portfolio.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the testimonial to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the testimonial has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.deleteTestimonial('id');
```
