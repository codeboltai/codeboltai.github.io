---
title: set
---

# `set`

```typescript
plugin.kvStore.set(instanceId: string, namespace: string, key: string, value: any, autoCreateInstance: boolean): Promise<KVSetResponse>
```

Set a value in the KV store

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |
| `value` | `any` | Yes | Value to store |
| `autoCreateInstance` | `boolean` | Yes | Auto-create instance if it doesn't exist _(default: `false`)_ |

## Returns

`Promise<KVSetResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.set('instanceId', 'namespace', 'key', /* any */, true);
console.log(result);
```
