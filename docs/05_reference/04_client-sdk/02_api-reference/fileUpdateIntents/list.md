---
name: list
cbbaseinfo:
  description: "Lists all file update intents in the system.

Returns every intent regardless of status or owning agent. Use this
for comprehensive intent monitoring or debugging coordination issues."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering intents
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileUpdateIntent[]>"
    description: A promise that resolves to an array of FileUpdateIntent objects
data:
  name: list
  category: fileUpdateIntents
  link: list.md
---
# list

```typescript
client.fileUpdateIntents.list(params?: Record<string, unknown>): Promise<FileUpdateIntent[]>
```

Lists all file update intents in the system.

Returns every intent regardless of status or owning agent. Use this
for comprehensive intent monitoring or debugging coordination issues.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering intents |

## Returns

**`Promise<FileUpdateIntent[]>`** — A promise that resolves to an array of FileUpdateIntent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.list();
```
