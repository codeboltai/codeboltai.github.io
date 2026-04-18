---
name: getInstanceTemplate
cbbaseinfo:
  description: "Retrieves a specific knowledge graph instance template by its ID.

Returns the full template definition including its schema, node types,
and edge constraints."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the instance template
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGInstanceTemplate>"
    description: A promise that resolves to the
data:
  name: getInstanceTemplate
  category: knowledgeGraph
  link: getInstanceTemplate.md
---
# getInstanceTemplate

```typescript
client.knowledgeGraph.getInstanceTemplate(id: string): Promise<KGInstanceTemplate>
```

Retrieves a specific knowledge graph instance template by its ID.

Returns the full template definition including its schema, node types,
and edge constraints.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the instance template |

## Returns

**`Promise<KGInstanceTemplate>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.getInstanceTemplate('id');
```
