---
name: initialize
cbbaseinfo:
  description: Initialize shadow git tracking
cbparameters:
  parameters:
    - name: data
      typeName: ShadowGitInitializeRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: initialize
  category: shadowGit
  link: initialize.md
---
# initialize

```typescript
client.shadowGit.initialize(data?: ShadowGitInitializeRequest): Promise<unknown>
```

Initialize shadow git tracking

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ShadowGitInitializeRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.shadowGit.initialize();
```
