---
name: getFilesWithIntents
cbbaseinfo:
  description: "Retrieves files that have active update intents.

Returns a list of file paths that currently have one or more
registered update intents. This is useful for quickly identifying
which files are in the process of being modified."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of file path strings
data:
  name: getFilesWithIntents
  category: fileUpdateIntents
  link: getFilesWithIntents.md
---
# getFilesWithIntents

```typescript
client.fileUpdateIntents.getFilesWithIntents(params?: Record<string, unknown>): Promise<string[]>
```

Retrieves files that have active update intents.

Returns a list of file paths that currently have one or more
registered update intents. This is useful for quickly identifying
which files are in the process of being modified.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of file path strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.getFilesWithIntents();
```
