---
name: getOpenAiFunctions
cbbaseinfo:
  description: "Retrieves all tools formatted as OpenAI functions.

Returns the entire tool catalog in OpenAI's functions schema format,
compatible with the legacy function calling API. Each function includes
its name, description, and parameter schema."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<OpenAiFunction[]>"
    description: A promise that resolves to an array of OpenAiFunction objects
data:
  name: getOpenAiFunctions
  category: codeboltTools
  link: getOpenAiFunctions.md
---
# getOpenAiFunctions

```typescript
client.codeboltTools.getOpenAiFunctions(): Promise<OpenAiFunction[]>
```

Retrieves all tools formatted as OpenAI functions.

Returns the entire tool catalog in OpenAI's functions schema format,
compatible with the legacy function calling API. Each function includes
its name, description, and parameter schema.

## Parameters

_None_

## Returns

**`Promise<OpenAiFunction[]>`** — A promise that resolves to an array of OpenAiFunction objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getOpenAiFunctions();
```
