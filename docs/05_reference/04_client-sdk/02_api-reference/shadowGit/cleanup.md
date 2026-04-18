---
name: cleanup
cbbaseinfo:
  description: Clean up shadow git data
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitCleanupRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: cleanup
  category: shadowGit
  link: cleanup.md
---
# cleanup

```typescript
client.shadowGit.cleanup(data?: ShadowGitCleanupRequest): Promise<unknown>
```

Clean up shadow git data

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitCleanupRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.cleanup();
```
