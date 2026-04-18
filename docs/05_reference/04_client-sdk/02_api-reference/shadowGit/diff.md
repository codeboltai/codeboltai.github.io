---
name: diff
cbbaseinfo:
  description: Get diff between shadow git checkpoints
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitDiffRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: diff
  category: shadowGit
  link: diff.md
---
# diff

```typescript
client.shadowGit.diff(data?: ShadowGitDiffRequest): Promise<unknown>
```

Get diff between shadow git checkpoints

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitDiffRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.diff();
```
