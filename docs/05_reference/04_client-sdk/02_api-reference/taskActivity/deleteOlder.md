---
name: deleteOlder
cbbaseinfo:
  description: Delete older activities (cleanup)
cbparameters:
  parameters:
    - name: params
      typeName: TaskActivityCleanupParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteOlder
  category: taskActivity
  link: deleteOlder.md
---
# deleteOlder

```typescript
client.taskActivity.deleteOlder(params?: TaskActivityCleanupParams): Promise<void>
```

Delete older activities (cleanup)

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TaskActivityCleanupParams` _(optional)_ |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.deleteOlder();
```
