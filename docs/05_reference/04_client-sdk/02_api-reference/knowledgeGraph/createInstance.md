---
name: createInstance
cbbaseinfo:
  description: "Creates a new knowledge graph instance.

Provisions an empty graph that can be populated with records and edges.
Optionally created from a template to inherit schema constraints."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKGInstanceRequest
      description: Instance creation payload including name and optional template reference
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGInstance>"
    description: A promise that resolves to the newly created
data:
  name: createInstance
  category: knowledgeGraph
  link: createInstance.md
---
# createInstance

```typescript
client.knowledgeGraph.createInstance(data: CreateKGInstanceRequest): Promise<KGInstance>
```

Creates a new knowledge graph instance.

Provisions an empty graph that can be populated with records and edges.
Optionally created from a template to inherit schema constraints.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKGInstanceRequest` | Instance creation payload including name and optional template reference |

## Returns

**`Promise<KGInstance>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createInstance(/* CreateKGInstanceRequest */);
```
