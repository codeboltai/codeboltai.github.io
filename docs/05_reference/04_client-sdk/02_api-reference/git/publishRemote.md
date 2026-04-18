---
name: publishRemote
cbbaseinfo:
  description: "Publishes the local repository to a new remote.

Sets up a remote and pushes the local repository to it for the first
time. Use this when the repository does not yet have a remote configured."
cbparameters:
  parameters:
    - name: data
      typeName: GitPublishRemoteRequest
      description: Remote publication parameters including the target URL
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when publishing is complete
data:
  name: publishRemote
  category: git
  link: publishRemote.md
---
# publishRemote

```typescript
client.git.publishRemote(data: GitPublishRemoteRequest): Promise<unknown>
```

Publishes the local repository to a new remote.

Sets up a remote and pushes the local repository to it for the first
time. Use this when the repository does not yet have a remote configured.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPublishRemoteRequest` | Remote publication parameters including the target URL |

## Returns

**`Promise<unknown>`** — A promise that resolves when publishing is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.publishRemote(/* GitPublishRemoteRequest */);
```
