---
name: update
cbbaseinfo:
  description: "Updates an existing context rule.

Modifies the properties, conditions, or actions of a rule identified
by its ID. Use this to make incremental changes to a rule without
recreating it from scratch."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the rule to update
      isOptional: false
    - name: data
      typeName: UpdateContextRuleRequest
      description: Request containing the rule updates to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<ContextRuleDefinition>"
    description: A promise that resolves to the updated ContextRuleDefinition object
data:
  name: update
  category: contextRuleEngine
  link: update.md
---
# update

```typescript
client.contextRuleEngine.update(id: string, data: UpdateContextRuleRequest): Promise<ContextRuleDefinition>
```

Updates an existing context rule.

Modifies the properties, conditions, or actions of a rule identified
by its ID. Use this to make incremental changes to a rule without
recreating it from scratch.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the rule to update |
| `data` | `UpdateContextRuleRequest` | Request containing the rule updates to apply |

## Returns

**`Promise<ContextRuleDefinition>`** — A promise that resolves to the updated ContextRuleDefinition object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.update('id', /* UpdateContextRuleRequest */);
```
