---
name: getStatus
cbbaseinfo:
  description: "Retrieves the current indexing status.

Returns information about whether indexing is in progress, when it
last completed, and how many files have been indexed."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CodebaseIndexStatus>"
    description: A promise that resolves to the
data:
  name: getStatus
  category: codebaseIndex
  link: getStatus.md
---
# getStatus

```typescript
client.codebaseIndex.getStatus(): Promise<CodebaseIndexStatus>
```

Retrieves the current indexing status.

Returns information about whether indexing is in progress, when it
last completed, and how many files have been indexed.

## Parameters

_None_

## Returns

**`Promise<CodebaseIndexStatus>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codebaseIndex.getStatus();
```
