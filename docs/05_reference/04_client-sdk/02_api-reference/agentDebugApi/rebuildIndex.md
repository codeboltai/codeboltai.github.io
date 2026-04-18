---
name: rebuildIndex
cbbaseinfo:
  description: "Rebuilds the agent debug index.

Forces a full re-index of all agent debug data. This can resolve
issues with missing or inconsistent search results in the debug interface."
cbparameters:
  parameters:
    - name: data
      typeName: RebuildAgentDebugIndexRequest
      description: Optional configuration for the rebuild operation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the index rebuild is complete
data:
  name: rebuildIndex
  category: agentDebugApi
  link: rebuildIndex.md
---
# rebuildIndex

```typescript
client.agentDebugApi.rebuildIndex(data?: RebuildAgentDebugIndexRequest): Promise<unknown>
```

Rebuilds the agent debug index.

Forces a full re-index of all agent debug data. This can resolve
issues with missing or inconsistent search results in the debug interface.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `RebuildAgentDebugIndexRequest` _(optional)_ | Optional configuration for the rebuild operation |

## Returns

**`Promise<unknown>`** — A promise that resolves when the index rebuild is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.rebuildIndex();
```
