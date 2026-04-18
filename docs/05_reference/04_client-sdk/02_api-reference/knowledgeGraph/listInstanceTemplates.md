---
name: listInstanceTemplates
cbbaseinfo:
  description: "Lists all knowledge graph instance templates.

Returns every template in the system with their schema definitions
and metadata."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KGInstanceTemplate[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstanceTemplates
  category: knowledgeGraph
  link: listInstanceTemplates.md
---
# listInstanceTemplates

```typescript
client.knowledgeGraph.listInstanceTemplates(params?: Record<string, unknown>): Promise<KGInstanceTemplate[]>
```

Lists all knowledge graph instance templates.

Returns every template in the system with their schema definitions
and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGInstanceTemplate[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listInstanceTemplates();
```
