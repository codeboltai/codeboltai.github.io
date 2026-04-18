---
title: getNamespaces
---

# `getNamespaces`

```typescript
plugin.kvStore.getNamespaces(instanceId: string): Promise<KVNamespacesResponse>
```

Get all namespaces in an instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<KVNamespacesResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.getNamespaces('instanceId');
console.log(result);
```
