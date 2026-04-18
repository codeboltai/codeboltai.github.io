---
name: download
cbbaseinfo:
  description: "Downloads (clones) a remote Git repository.

Clones a repository from a URL into the workspace. Use this to
set up a project from an existing remote repository."
cbparameters:
  parameters:
    - name: data
      typeName: GitDownloadRequest
      description: Clone parameters including the repository URL
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the download/clone is complete
data:
  name: download
  category: git
  link: download.md
---
# download

```typescript
client.git.download(data: GitDownloadRequest): Promise<unknown>
```

Downloads (clones) a remote Git repository.

Clones a repository from a URL into the workspace. Use this to
set up a project from an existing remote repository.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitDownloadRequest` | Clone parameters including the repository URL |

## Returns

**`Promise<unknown>`** — A promise that resolves when the download/clone is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.download(/* GitDownloadRequest */);
```
