---
name: listInstances
cbbaseinfo:
  description: List all KV store instances
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<KVInstanceListResponse>"
    description: ""
data:
  name: listInstances
  category: kvStore
  link: listInstances.md
---
# listInstances

```typescript
plugin.kvStore.listInstances(): Promise<KVInstanceListResponse>
```

List all KV store instances

## Parameters

_None_

## Returns

**`Promise<KVInstanceListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.listInstances();
```
