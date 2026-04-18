---
name: create
cbbaseinfo:
  description: "Creates a new file update intent.

Registers an intent to modify specified files on behalf of an agent.
The intent coordinates access to prevent conflicts with other
concurrent modifications."
cbparameters:
  parameters:
    - name: data
      typeName: CreateFileUpdateIntentRequest
      description: Request containing intent creation details
      isOptional: false
  returns:
    signatureTypeName: "Promise<FileUpdateIntent>"
    description: A promise that resolves to the created FileUpdateIntent object
data:
  name: create
  category: fileUpdateIntents
  link: create.md
---
# create

```typescript
client.fileUpdateIntents.create(data: CreateFileUpdateIntentRequest): Promise<FileUpdateIntent>
```

Creates a new file update intent.

Registers an intent to modify specified files on behalf of an agent.
The intent coordinates access to prevent conflicts with other
concurrent modifications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateFileUpdateIntentRequest` | Request containing intent creation details |

## Returns

**`Promise<FileUpdateIntent>`** — A promise that resolves to the created FileUpdateIntent object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileUpdateIntents.create(/* CreateFileUpdateIntentRequest */);
```
