---
name: createInstanceTemplate
cbbaseinfo:
  description: "Creates a new knowledge graph instance template.

Templates define the schema and structure for knowledge graph instances.
Use templates to enforce consistent node types and edge patterns
across multiple graph instances."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKGInstanceTemplateRequest
      description: Template creation payload including schema definition
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGInstanceTemplate>"
    description: A promise that resolves to the newly created
data:
  name: createInstanceTemplate
  category: knowledgeGraph
  link: createInstanceTemplate.md
---
# createInstanceTemplate

```typescript
client.knowledgeGraph.createInstanceTemplate(data: CreateKGInstanceTemplateRequest): Promise<KGInstanceTemplate>
```

Creates a new knowledge graph instance template.

Templates define the schema and structure for knowledge graph instances.
Use templates to enforce consistent node types and edge patterns
across multiple graph instances.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKGInstanceTemplateRequest` | Template creation payload including schema definition |

## Returns

**`Promise<KGInstanceTemplate>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createInstanceTemplate(/* CreateKGInstanceTemplateRequest */);
```
