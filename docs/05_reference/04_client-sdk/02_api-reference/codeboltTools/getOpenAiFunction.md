---
name: getOpenAiFunction
cbbaseinfo:
  description: "Retrieves a specific tool formatted as an OpenAI function.

Returns a single tool in OpenAI's functions schema format for targeted
integration with the legacy function calling API."
cbparameters:
  parameters:
    - name: toolName
      typeName: string
      description: The name of the tool to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<OpenAiFunction>"
    description: A promise that resolves to the OpenAiFunction object
data:
  name: getOpenAiFunction
  category: codeboltTools
  link: getOpenAiFunction.md
---
# getOpenAiFunction

```typescript
client.codeboltTools.getOpenAiFunction(toolName: string): Promise<OpenAiFunction>
```

Retrieves a specific tool formatted as an OpenAI function.

Returns a single tool in OpenAI's functions schema format for targeted
integration with the legacy function calling API.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolName` | `string` | The name of the tool to retrieve |

## Returns

**`Promise<OpenAiFunction>`** — A promise that resolves to the OpenAiFunction object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getOpenAiFunction('toolName');
```
