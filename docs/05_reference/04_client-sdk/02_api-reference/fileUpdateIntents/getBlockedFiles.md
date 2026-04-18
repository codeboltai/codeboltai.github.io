---
name: getBlockedFiles
cbbaseinfo:
  description: "Retrieves a list of currently blocked files.

Returns files that have active update intents, meaning they are
locked or being modified by other agents. Use this to identify
unavailable files before attempting modifications."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering blocked files
      isOptional: true
  returns:
    signatureTypeName: "Promise<BlockedFile[]>"
    description: A promise that resolves to an array of BlockedFile objects
data:
  name: getBlockedFiles
  category: fileUpdateIntents
  link: getBlockedFiles.md
---
# getBlockedFiles

```typescript
client.fileUpdateIntents.getBlockedFiles(params?: Record<string, unknown>): Promise<BlockedFile[]>
```

Retrieves a list of currently blocked files.

Returns files that have active update intents, meaning they are
locked or being modified by other agents. Use this to identify
unavailable files before attempting modifications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering blocked files |

## Returns

**`Promise<BlockedFile[]>`** — A promise that resolves to an array of BlockedFile objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.getBlockedFiles();
```
