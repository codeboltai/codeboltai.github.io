---
name: list
cbbaseinfo:
  description: "Lists all models that have been downloaded to the local machine.

Returns metadata for models currently stored on disk, regardless of whether they are
currently loaded into memory for inference."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LocalModel[]>"
    description: A promise that resolves to an array of downloaded local models
data:
  name: list
  category: localModels
  link: list.md
---
# list

```typescript
client.localModels.list(): Promise<LocalModel[]>
```

Lists all models that have been downloaded to the local machine.

Returns metadata for models currently stored on disk, regardless of whether they are
currently loaded into memory for inference.

## Parameters

_None_

## Returns

**`Promise<LocalModel[]>`** — A promise that resolves to an array of downloaded local models

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.list();
```
