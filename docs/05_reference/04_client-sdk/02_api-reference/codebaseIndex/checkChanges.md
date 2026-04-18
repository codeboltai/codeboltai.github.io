---
name: checkChanges
cbbaseinfo:
  description: "Checks for changes since the last indexing run.

Compares the current filesystem state against the last indexed state
to identify new, modified, or deleted files."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CodebaseChanges>"
    description: A promise that resolves to the detected
data:
  name: checkChanges
  category: codebaseIndex
  link: checkChanges.md
---
# checkChanges

```typescript
client.codebaseIndex.checkChanges(): Promise<CodebaseChanges>
```

Checks for changes since the last indexing run.

Compares the current filesystem state against the last indexed state
to identify new, modified, or deleted files.

## Parameters

_None_

## Returns

**`Promise<CodebaseChanges>`** — A promise that resolves to the detected

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codebaseIndex.checkChanges();
```
