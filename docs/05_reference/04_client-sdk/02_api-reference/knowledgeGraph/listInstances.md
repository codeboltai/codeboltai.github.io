---
name: listInstances
cbbaseinfo:
  description: "Lists all knowledge graph instances.

Returns every graph instance in the system with their metadata
and record/edge counts."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KGInstance[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listInstances
  category: knowledgeGraph
  link: listInstances.md
---
# listInstances

```typescript
client.knowledgeGraph.listInstances(params?: Record<string, unknown>): Promise<KGInstance[]>
```

Lists all knowledge graph instances.

Returns every graph instance in the system with their metadata
and record/edge counts.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGInstance[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listInstances();
```
