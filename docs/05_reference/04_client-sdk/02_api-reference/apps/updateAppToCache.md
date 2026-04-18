---
name: updateAppToCache
cbbaseinfo:
  description: "Updates an app's data in the cache.

Refreshes the cached representation of an app, ensuring that the
latest metadata is available without a full reload."
cbparameters:
  parameters:
    - name: params
      typeName: AppCacheParams
      description: Optional cache parameters identifying the app
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the cache has been updated
data:
  name: updateAppToCache
  category: apps
  link: updateAppToCache.md
---
# updateAppToCache

```typescript
client.apps.updateAppToCache(params?: AppCacheParams): Promise<unknown>
```

Updates an app's data in the cache.

Refreshes the cached representation of an app, ensuring that the
latest metadata is available without a full reload.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AppCacheParams` _(optional)_ | Optional cache parameters identifying the app |

## Returns

**`Promise<unknown>`** — A promise that resolves when the cache has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.apps.updateAppToCache();
```
