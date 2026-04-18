---
name: readFile
cbbaseinfo:
  description: Read a file from a shadow git checkpoint
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitReadFileRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: readFile
  category: shadowGit
  link: readFile.md
---
# readFile

```typescript
client.shadowGit.readFile(data: ShadowGitReadFileRequest): Promise<unknown>
```

Read a file from a shadow git checkpoint

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitReadFileRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.readFile(/* ShadowGitReadFileRequest */);
```
