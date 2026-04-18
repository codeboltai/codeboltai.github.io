---
name: listViewTemplates
cbbaseinfo:
  description: "Lists all knowledge graph view templates.

Returns every view template with their query definitions and metadata."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KGViewTemplate[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listViewTemplates
  category: knowledgeGraph
  link: listViewTemplates.md
---
# listViewTemplates

```typescript
client.knowledgeGraph.listViewTemplates(params?: Record<string, unknown>): Promise<KGViewTemplate[]>
```

Lists all knowledge graph view templates.

Returns every view template with their query definitions and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGViewTemplate[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listViewTemplates();
```
