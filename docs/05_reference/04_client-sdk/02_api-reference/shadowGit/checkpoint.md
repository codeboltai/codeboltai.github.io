---
name: checkpoint
cbbaseinfo:
  description: Create a shadow git checkpoint
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitCheckpointRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ShadowGitCheckpoint>"
    description: ""
data:
  name: checkpoint
  category: shadowGit
  link: checkpoint.md
---
# checkpoint

```typescript
client.shadowGit.checkpoint(data?: ShadowGitCheckpointRequest): Promise<ShadowGitCheckpoint>
```

Create a shadow git checkpoint

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitCheckpointRequest` _(optional)_ |  |

## Returns

**`Promise<ShadowGitCheckpoint>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.checkpoint();
```
