---
name: getRemoteUrl
cbbaseinfo:
  description: "Retrieves the configured remote URL for the repository.

Returns the URL of the primary remote (typically \"origin\"). Useful
for displaying repository information or constructing web links."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GitRemoteUrlResponse>"
    description: A promise that resolves to a  containing the remote URL
data:
  name: getRemoteUrl
  category: git
  link: getRemoteUrl.md
---
# getRemoteUrl

```typescript
client.git.getRemoteUrl(): Promise<GitRemoteUrlResponse>
```

Retrieves the configured remote URL for the repository.

Returns the URL of the primary remote (typically "origin"). Useful
for displaying repository information or constructing web links.

## Parameters

_None_

## Returns

**`Promise<GitRemoteUrlResponse>`** — A promise that resolves to a  containing the remote URL

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.getRemoteUrl();
```
