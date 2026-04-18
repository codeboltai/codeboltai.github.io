---
name: query
cbbaseinfo:
  description: "Queries key-value data using filter criteria.

Searches across namespaces and keys using the provided filter
parameters. Useful for finding values that match specific patterns
or conditions."
cbparameters:
  parameters:
    - name: data
      typeName: KvQueryRequest
      description: Query parameters specifying filters and scope
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvValue[]>"
    description: A promise that resolves to an array of matching  objects
data:
  name: query
  category: kvStore
  link: query.md
---
# query

```typescript
client.kvStore.query(data: KvQueryRequest): Promise<KvValue[]>
```

Queries key-value data using filter criteria.

Searches across namespaces and keys using the provided filter
parameters. Useful for finding values that match specific patterns
or conditions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `KvQueryRequest` | Query parameters specifying filters and scope |

## Returns

**`Promise<KvValue[]>`** — A promise that resolves to an array of matching  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.query(/* KvQueryRequest */);
```
