---
name: pushToRemote
cbbaseinfo:
  description: "Pushes committed changes to the remote repository.

Uploads local commits to the configured remote. This is the standard
way to share local changes with the remote repository."
cbparameters:
  parameters:
    - name: data
      typeName: GitPushRequest
      description: Optional push parameters such as branch or force flag
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the push is complete
data:
  name: pushToRemote
  category: git
  link: pushToRemote.md
---
# pushToRemote

```typescript
client.git.pushToRemote(data?: GitPushRequest): Promise<unknown>
```

Pushes committed changes to the remote repository.

Uploads local commits to the configured remote. This is the standard
way to share local changes with the remote repository.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPushRequest` _(optional)_ | Optional push parameters such as branch or force flag |

## Returns

**`Promise<unknown>`** — A promise that resolves when the push is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.pushToRemote();
```
