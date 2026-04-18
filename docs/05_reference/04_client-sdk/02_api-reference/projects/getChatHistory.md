---
name: getChatHistory
cbbaseinfo:
  description: "Retrieves the chat history for the current project.

Returns an array of past chat sessions and their messages, providing a record of
all conversations that have occurred within the project context."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<unknown[]>"
    description: A promise that resolves to an array of chat history entries
data:
  name: getChatHistory
  category: projects
  link: getChatHistory.md
---
# getChatHistory

```typescript
client.projects.getChatHistory(): Promise<unknown[]>
```

Retrieves the chat history for the current project.

Returns an array of past chat sessions and their messages, providing a record of
all conversations that have occurred within the project context.

## Parameters

_None_

## Returns

**`Promise<unknown[]>`** — A promise that resolves to an array of chat history entries

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getChatHistory();
```
