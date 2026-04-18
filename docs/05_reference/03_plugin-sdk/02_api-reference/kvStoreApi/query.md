---
name: query
cbbaseinfo:
  description: Call query on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: data
      typeName: KvQueryRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvValue[]>"
    description: ""
data:
  name: query
  category: kvStoreApi
  link: query.md
---
# query

```typescript
plugin.kvStoreApi.query(data: KvQueryRequest): Promise<KvValue[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `KvQueryRequest` |  |

## Returns

**`Promise<KvValue[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.query(/* KvQueryRequest */);
```
