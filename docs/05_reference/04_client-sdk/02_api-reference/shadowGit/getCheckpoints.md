---
name: getCheckpoints
cbbaseinfo:
  description: List all shadow git checkpoints
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ShadowGitCheckpoint[]>"
    description: ""
data:
  name: getCheckpoints
  category: shadowGit
  link: getCheckpoints.md
---
# getCheckpoints

```typescript
client.shadowGit.getCheckpoints(params?: Record<string, unknown>): Promise<ShadowGitCheckpoint[]>
```

List all shadow git checkpoints

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<ShadowGitCheckpoint[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.getCheckpoints();
```
