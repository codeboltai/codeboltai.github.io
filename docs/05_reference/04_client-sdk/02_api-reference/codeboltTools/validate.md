---
name: validate
cbbaseinfo:
  description: "Validates tool input before execution.

Checks whether the provided parameters conform to the tool's schema
requirements. Returns validation results highlighting any errors or
warnings without actually executing the tool."
cbparameters:
  parameters:
    - name: data
      typeName: ValidateToolRequest
      description: Request containing validation data
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to validation results
data:
  name: validate
  category: codeboltTools
  link: validate.md
---
# validate

```typescript
client.codeboltTools.validate(data: ValidateToolRequest): Promise<unknown>
```

Validates tool input before execution.

Checks whether the provided parameters conform to the tool's schema
requirements. Returns validation results highlighting any errors or
warnings without actually executing the tool.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ValidateToolRequest` | Request containing validation data |

## Returns

**`Promise<unknown>`** — A promise that resolves to validation results

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.validate(/* ValidateToolRequest */);
```
