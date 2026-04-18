---
name: addAll
cbbaseinfo:
  description: Adds changes in the local repository to the staging area at the given path.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AddResponse>"
    description: A promise that resolves with the response from the add event.
data:
  name: addAll
  category: git
  link: addAll.md
---
# addAll

```typescript
plugin.git.addAll(): Promise<AddResponse>
```

Adds changes in the local repository to the staging area at the given path.

## Parameters

_None_

## Returns

**`Promise<AddResponse>`** — A promise that resolves with the response from the add event.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.git.addAll();
```
