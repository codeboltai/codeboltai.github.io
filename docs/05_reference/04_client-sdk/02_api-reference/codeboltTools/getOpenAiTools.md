---
name: getOpenAiTools
cbbaseinfo:
  description: "Retrieves all tools formatted as OpenAI tools.

Returns the entire tool catalog in OpenAI's tools schema format, suitable
for direct use with OpenAI's API function calling feature. Each tool
includes its type, function definition, and parameters."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<OpenAiTool[]>"
    description: A promise that resolves to an array of OpenAiTool objects
data:
  name: getOpenAiTools
  category: codeboltTools
  link: getOpenAiTools.md
---
# getOpenAiTools

```typescript
client.codeboltTools.getOpenAiTools(): Promise<OpenAiTool[]>
```

Retrieves all tools formatted as OpenAI tools.

Returns the entire tool catalog in OpenAI's tools schema format, suitable
for direct use with OpenAI's API function calling feature. Each tool
includes its type, function definition, and parameters.

## Parameters

_None_

## Returns

**`Promise<OpenAiTool[]>`** — A promise that resolves to an array of OpenAiTool objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getOpenAiTools();
```
