---
name: reviewIdea
cbbaseinfo:
  description: "Submits an idea for review.

Moves an idea into the review process where it can be evaluated for potential
promotion to a roadmap feature."
cbparameters:
  parameters:
    - name: ideaId
      typeName: string
      description: The unique identifier of the idea to review
      isOptional: false
    - name: data
      typeName: ReviewIdeaRequest
      description: Optional review parameters such as reviewer assignment
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the idea has been submitted for review
data:
  name: reviewIdea
  category: roadmap
  link: reviewIdea.md
---
# reviewIdea

```typescript
client.roadmap.reviewIdea(ideaId: string, data?: ReviewIdeaRequest): Promise<unknown>
```

Submits an idea for review.

Moves an idea into the review process where it can be evaluated for potential
promotion to a roadmap feature.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `ideaId` | `string` | The unique identifier of the idea to review |
| `data` | `ReviewIdeaRequest` _(optional)_ | Optional review parameters such as reviewer assignment |

## Returns

**`Promise<unknown>`** — A promise that resolves when the idea has been submitted for review

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.reviewIdea('ideaId');
```
