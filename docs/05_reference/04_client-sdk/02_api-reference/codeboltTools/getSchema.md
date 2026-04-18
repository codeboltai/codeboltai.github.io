---
name: getSchema
cbbaseinfo:
  description: "Retrieves the JSON schema for a specific tool.

Returns the schema definition that describes the tool's input structure,
required parameters, and validation rules. Useful for building dynamic
UI forms or validating tool inputs before execution."
cbparameters:
  parameters:
    - name: toolName
      typeName: string
      description: The name of the tool to get schema for
      isOptional: false
  returns:
    signatureTypeName: "Promise<CodeboltToolSchema>"
    description: A promise that resolves to the CodeboltToolSchema object
data:
  name: getSchema
  category: codeboltTools
  link: getSchema.md
---
# getSchema

```typescript
client.codeboltTools.getSchema(toolName: string): Promise<CodeboltToolSchema>
```

Retrieves the JSON schema for a specific tool.

Returns the schema definition that describes the tool's input structure,
required parameters, and validation rules. Useful for building dynamic
UI forms or validating tool inputs before execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `toolName` | `string` | The name of the tool to get schema for |

## Returns

**`Promise<CodeboltToolSchema>`** — A promise that resolves to the CodeboltToolSchema object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getSchema('toolName');
```
