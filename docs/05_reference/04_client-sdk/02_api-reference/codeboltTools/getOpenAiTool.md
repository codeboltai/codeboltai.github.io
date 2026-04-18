---
name: getOpenAiTool
cbbaseinfo:
  description: "Retrieves a specific tool formatted as an OpenAI tool.

Returns a single tool in OpenAI's tools schema format for targeted
integration when only specific tools are needed for function calling."
cbparameters:
  parameters:
    - name: toolName
      typeName: string
      description: The name of the tool to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<OpenAiTool>"
    description: A promise that resolves to the OpenAiTool object
data:
  name: getOpenAiTool
  category: codeboltTools
  link: getOpenAiTool.md
---
# getOpenAiTool

```typescript
client.codeboltTools.getOpenAiTool(toolName: string): Promise<OpenAiTool>
```

Retrieves a specific tool formatted as an OpenAI tool.

Returns a single tool in OpenAI's tools schema format for targeted
integration when only specific tools are needed for function calling.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolName` | `string` | The name of the tool to retrieve |

## Returns

**`Promise<OpenAiTool>`** — A promise that resolves to the OpenAiTool object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getOpenAiTool('toolName');
```
