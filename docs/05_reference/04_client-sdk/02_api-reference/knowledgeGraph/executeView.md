---
name: executeView
cbbaseinfo:
  description: "Executes a view and returns the query results.

Runs the view's query against its associated graph instance and
returns the matching records and edges. This is the primary way
to extract data from a knowledge graph."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the view to execute
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional runtime parameters to pass to the view query
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the query results (records and edges)
data:
  name: executeView
  category: knowledgeGraph
  link: executeView.md
---
# executeView

```typescript
client.knowledgeGraph.executeView(id: string, params?: Record<string, unknown>): Promise<unknown>
```

Executes a view and returns the query results.

Runs the view's query against its associated graph instance and
returns the matching records and edges. This is the primary way
to extract data from a knowledge graph.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the view to execute |
| `params` | `Record<string, unknown>` _(optional)_ | Optional runtime parameters to pass to the view query |

## Returns

**`Promise<unknown>`** — A promise that resolves to the query results (records and edges)

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.executeView('id');
```
