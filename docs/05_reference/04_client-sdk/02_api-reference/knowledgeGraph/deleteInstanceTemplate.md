---
name: deleteInstanceTemplate
cbbaseinfo:
  description: "Deletes a knowledge graph instance template.

Removes the template definition. Instances created from this template
continue to exist but can no longer reference the deleted template."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the template to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteInstanceTemplate
  category: knowledgeGraph
  link: deleteInstanceTemplate.md
---
# deleteInstanceTemplate

```typescript
client.knowledgeGraph.deleteInstanceTemplate(id: string): Promise<unknown>
```

Deletes a knowledge graph instance template.

Removes the template definition. Instances created from this template
continue to exist but can no longer reference the deleted template.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the template to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteInstanceTemplate('id');
```
