---
name: createInstance
cbbaseinfo:
  description: "Creates a new KV store instance.

An instance is an isolated key-value store that can contain multiple
namespaces. Use separate instances to isolate data between different
agents or workflows."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKvStoreInstanceRequest
      description: Instance creation payload including name and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: A promise that resolves to the newly created
data:
  name: createInstance
  category: kvStore
  link: createInstance.md
---
# createInstance

```typescript
client.kvStore.createInstance(data: CreateKvStoreInstanceRequest): Promise<KvStoreInstance>
```

Creates a new KV store instance.

An instance is an isolated key-value store that can contain multiple
namespaces. Use separate instances to isolate data between different
agents or workflows.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKvStoreInstanceRequest` | Instance creation payload including name and configuration |

## Returns

**`Promise<KvStoreInstance>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.kvStore.createInstance(/* CreateKvStoreInstanceRequest */);
```
