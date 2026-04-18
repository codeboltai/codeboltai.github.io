---
name: getAppFromCache
cbbaseinfo:
  description: "Retrieves an app's data from the cache.

Returns the cached representation of an app for fast access,
avoiding a full database or filesystem lookup."
cbparameters:
  parameters:
    - name: params
      typeName: AppCacheParams
      description: Optional cache parameters identifying the app
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the cached app data
data:
  name: getAppFromCache
  category: apps
  link: getAppFromCache.md
---
# getAppFromCache

```typescript
client.apps.getAppFromCache(params?: AppCacheParams): Promise<unknown>
```

Retrieves an app's data from the cache.

Returns the cached representation of an app for fast access,
avoiding a full database or filesystem lookup.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AppCacheParams` _(optional)_ | Optional cache parameters identifying the app |

## Returns

**`Promise<unknown>`** — A promise that resolves to the cached app data

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.getAppFromCache();
```
