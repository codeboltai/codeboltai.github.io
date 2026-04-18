---
name: status
cbbaseinfo:
  description: Retrieves the status of the local repository at the given path.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GitStatusResponse>"
    description: A promise that resolves with the response from the status event.
data:
  name: status
  category: git
  link: status.md
---
# status

```typescript
plugin.git.status(): Promise<GitStatusResponse>
```

Retrieves the status of the local repository at the given path.

## Parameters

_None_

## Returns

**`Promise<GitStatusResponse>`** — A promise that resolves with the response from the status event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.status();
```
