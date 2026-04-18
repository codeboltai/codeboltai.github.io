---
name: restore
cbbaseinfo:
  description: Restore to a previous shadow git checkpoint
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitRestoreRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: restore
  category: shadowGit
  link: restore.md
---
# restore

```typescript
client.shadowGit.restore(data: ShadowGitRestoreRequest): Promise<unknown>
```

Restore to a previous shadow git checkpoint

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitRestoreRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.restore(/* ShadowGitRestoreRequest */);
```
