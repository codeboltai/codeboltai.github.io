---
name: list
cbbaseinfo:
  description: "Lists all available context rules in the system.

Returns every context rule regardless of status or category. Use this
for comprehensive rule browsing or to populate rule management UIs."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering rules
      isOptional: true
  returns:
    signatureTypeName: "Promise<ContextRuleDefinition[]>"
    description: A promise that resolves to an array of ContextRuleDefinition objects
data:
  name: list
  category: contextRuleEngine
  link: list.md
---
# list

```typescript
client.contextRuleEngine.list(params?: Record<string, unknown>): Promise<ContextRuleDefinition[]>
```

Lists all available context rules in the system.

Returns every context rule regardless of status or category. Use this
for comprehensive rule browsing or to populate rule management UIs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering rules |

## Returns

**`Promise<ContextRuleDefinition[]>`** — A promise that resolves to an array of ContextRuleDefinition objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.list();
```
