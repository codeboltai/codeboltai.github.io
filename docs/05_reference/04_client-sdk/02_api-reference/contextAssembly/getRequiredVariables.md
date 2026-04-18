---
name: getRequiredVariables
cbbaseinfo:
  description: "Retrieves required variables for a context assembly configuration.

Returns the list of variable names that must be provided when
assembling context with the given configuration."
cbparameters:
  parameters:
    - name: data
      typeName: GetRequiredVariablesRequest
      description: The configuration to inspect for required variables
      isOptional: false
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of variable name strings
data:
  name: getRequiredVariables
  category: contextAssembly
  link: getRequiredVariables.md
---
# getRequiredVariables

```typescript
client.contextAssembly.getRequiredVariables(data: GetRequiredVariablesRequest): Promise<string[]>
```

Retrieves required variables for a context assembly configuration.

Returns the list of variable names that must be provided when
assembling context with the given configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GetRequiredVariablesRequest` | The configuration to inspect for required variables |

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of variable name strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextAssembly.getRequiredVariables(/* GetRequiredVariablesRequest */);
```
