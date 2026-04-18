---
name: list
cbbaseinfo:
  description: "Lists all available CodeBolt tools.

Returns every registered tool in the system regardless of category or
permission. Use this for comprehensive tool discovery or to populate
tool selection interfaces."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering tools
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodeboltTool[]>"
    description: A promise that resolves to an array of CodeboltTool objects
data:
  name: list
  category: codeboltTools
  link: list.md
---
# list

```typescript
client.codeboltTools.list(params?: Record<string, unknown>): Promise<CodeboltTool[]>
```

Lists all available CodeBolt tools.

Returns every registered tool in the system regardless of category or
permission. Use this for comprehensive tool discovery or to populate
tool selection interfaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering tools |

## Returns

**`Promise<CodeboltTool[]>`** — A promise that resolves to an array of CodeboltTool objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.list();
```
