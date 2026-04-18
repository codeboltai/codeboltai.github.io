---
name: addWatcher
cbbaseinfo:
  description: Add a watcher to a request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddWatcherRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addWatcher
  category: updateRequests
  link: addWatcher.md
---
# addWatcher

```typescript
client.updateRequests.addWatcher(id: string, data: AddWatcherRequest): Promise<unknown>
```

Add a watcher to a request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddWatcherRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.addWatcher('id', /* AddWatcherRequest */);
```
