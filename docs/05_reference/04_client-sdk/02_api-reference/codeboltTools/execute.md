---
name: execute
cbbaseinfo:
  description: "Executes a CodeBolt tool with the provided input.

Runs the specified tool with the given parameters and returns the
execution result. Tool execution may involve file operations, API calls,
or other platform-specific actions."
cbparameters:
  parameters:
    - name: data
      typeName: ExecuteToolRequest
      description: Request containing tool execution details
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the tool execution result
data:
  name: execute
  category: codeboltTools
  link: execute.md
---
# execute

```typescript
client.codeboltTools.execute(data: ExecuteToolRequest): Promise<unknown>
```

Executes a CodeBolt tool with the provided input.

Runs the specified tool with the given parameters and returns the
execution result. Tool execution may involve file operations, API calls,
or other platform-specific actions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ExecuteToolRequest` | Request containing tool execution details |

## Returns

**`Promise<unknown>`** — A promise that resolves to the tool execution result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.execute(/* ExecuteToolRequest */);
```
