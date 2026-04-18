---
name: getVariables
cbbaseinfo:
  description: "Retrieves all available variables for rule evaluation.

Returns the list of context variables that can be referenced in rule
conditions. Each variable includes its type, description, and available
values, helping developers construct valid rule expressions."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering variables
      isOptional: true
  returns:
    signatureTypeName: "Promise<ContextRuleVariable[]>"
    description: A promise that resolves to an array of ContextRuleVariable objects
data:
  name: getVariables
  category: contextRuleEngine
  link: getVariables.md
---
# getVariables

```typescript
client.contextRuleEngine.getVariables(params?: Record<string, unknown>): Promise<ContextRuleVariable[]>
```

Retrieves all available variables for rule evaluation.

Returns the list of context variables that can be referenced in rule
conditions. Each variable includes its type, description, and available
values, helping developers construct valid rule expressions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering variables |

## Returns

**`Promise<ContextRuleVariable[]>`** — A promise that resolves to an array of ContextRuleVariable objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.getVariables();
```
