---
name: createViewTemplate
cbbaseinfo:
  description: "Creates a new view template for knowledge graphs.

View templates define reusable query patterns for extracting
specific subsets of graph data. They act as saved queries that
can be instantiated with different parameters."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKGViewTemplateRequest
      description: View template creation payload including query definition
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGViewTemplate>"
    description: A promise that resolves to the newly created
data:
  name: createViewTemplate
  category: knowledgeGraph
  link: createViewTemplate.md
---
# createViewTemplate

```typescript
client.knowledgeGraph.createViewTemplate(data: CreateKGViewTemplateRequest): Promise<KGViewTemplate>
```

Creates a new view template for knowledge graphs.

View templates define reusable query patterns for extracting
specific subsets of graph data. They act as saved queries that
can be instantiated with different parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKGViewTemplateRequest` | View template creation payload including query definition |

## Returns

**`Promise<KGViewTemplate>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createViewTemplate(/* CreateKGViewTemplateRequest */);
```
