---
name: create
cbbaseinfo:
  description: "Creates a new context rule.

Registers a new rule with the system using the provided configuration.
The rule can be configured with conditions, priority, and actions to
execute when the rule matches."
cbparameters:
  parameters:
    - name: data
      typeName: CreateContextRuleRequest
      description: Request containing the new rule configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<ContextRuleDefinition>"
    description: A promise that resolves to the created ContextRuleDefinition object
data:
  name: create
  category: contextRuleEngine
  link: create.md
---
# create

```typescript
client.contextRuleEngine.create(data: CreateContextRuleRequest): Promise<ContextRuleDefinition>
```

Creates a new context rule.

Registers a new rule with the system using the provided configuration.
The rule can be configured with conditions, priority, and actions to
execute when the rule matches.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateContextRuleRequest` | Request containing the new rule configuration |

## Returns

**`Promise<ContextRuleDefinition>`** — A promise that resolves to the created ContextRuleDefinition object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.create(/* CreateContextRuleRequest */);
```
