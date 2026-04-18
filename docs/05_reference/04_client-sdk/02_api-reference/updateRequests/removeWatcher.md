---
name: removeWatcher
cbbaseinfo:
  description: Remove a watcher from a request
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: watcherId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: removeWatcher
  category: updateRequests
  link: removeWatcher.md
---
# removeWatcher

```typescript
client.updateRequests.removeWatcher(id: string, watcherId: string): Promise<unknown>
```

Remove a watcher from a request

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `watcherId` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.updateRequests.removeWatcher('id', 'watcherId');
```
