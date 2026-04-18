---
name: createView
cbbaseinfo:
  description: "Creates a new view for querying a knowledge graph.

Views are saved queries that extract specific subsets of graph data.
They can be created from a template or with a custom query definition."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKGViewRequest
      description: View creation payload including query definition and target instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGView>"
    description: A promise that resolves to the newly created
data:
  name: createView
  category: knowledgeGraph
  link: createView.md
---
# createView

```typescript
client.knowledgeGraph.createView(data: CreateKGViewRequest): Promise<KGView>
```

Creates a new view for querying a knowledge graph.

Views are saved queries that extract specific subsets of graph data.
They can be created from a template or with a custom query definition.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKGViewRequest` | View creation payload including query definition and target instance |

## Returns

**`Promise<KGView>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createView(/* CreateKGViewRequest */);
```
