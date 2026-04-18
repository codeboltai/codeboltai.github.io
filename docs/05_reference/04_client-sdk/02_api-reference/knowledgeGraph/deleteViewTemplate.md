---
name: deleteViewTemplate
cbbaseinfo:
  description: "Deletes a view template.

Removes the template definition. Views created from this template
continue to exist independently."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the view template to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteViewTemplate
  category: knowledgeGraph
  link: deleteViewTemplate.md
---
# deleteViewTemplate

```typescript
client.knowledgeGraph.deleteViewTemplate(id: string): Promise<unknown>
```

Deletes a view template.

Removes the template definition. Views created from this template
continue to exist independently.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the view template to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteViewTemplate('id');
```
