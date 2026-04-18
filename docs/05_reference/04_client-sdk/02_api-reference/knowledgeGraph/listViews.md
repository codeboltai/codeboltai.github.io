---
name: listViews
cbbaseinfo:
  description: "Lists all knowledge graph views.

Returns every view with their query definitions and associated
graph instances."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KGView[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listViews
  category: knowledgeGraph
  link: listViews.md
---
# listViews

```typescript
client.knowledgeGraph.listViews(params?: Record<string, unknown>): Promise<KGView[]>
```

Lists all knowledge graph views.

Returns every view with their query definitions and associated
graph instances.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGView[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listViews();
```
