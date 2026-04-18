---
name: query
cbbaseinfo:
  description: Query the KV store using DSL
cbparameters:
  parameters:
    - name: query
      typeName: KVQueryDSL
      description: Query DSL object
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVQueryResponse>"
    description: ""
data:
  name: query
  category: kvStore
  link: query.md
---
# query

```typescript
plugin.kvStore.query(query: KVQueryDSL): Promise<KVQueryResponse>
```

Query the KV store using DSL

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `KVQueryDSL` | Query DSL object |

## Returns

**`Promise<KVQueryResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.query(/* KVQueryDSL */);
```
