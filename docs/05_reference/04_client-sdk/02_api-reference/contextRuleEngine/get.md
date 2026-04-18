---
name: get
cbbaseinfo:
  description: "Retrieves a specific context rule by its unique identifier.

Returns detailed information about a single rule including its
conditions, actions, metadata, and evaluation configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the context rule
      isOptional: false
  returns:
    signatureTypeName: "Promise<ContextRuleDefinition>"
    description: A promise that resolves to the ContextRuleDefinition object
data:
  name: get
  category: contextRuleEngine
  link: get.md
---
# get

```typescript
client.contextRuleEngine.get(id: string): Promise<ContextRuleDefinition>
```

Retrieves a specific context rule by its unique identifier.

Returns detailed information about a single rule including its
conditions, actions, metadata, and evaluation configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the context rule |

## Returns

**`Promise<ContextRuleDefinition>`** — A promise that resolves to the ContextRuleDefinition object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.contextRuleEngine.get('id');
```
