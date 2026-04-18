---
name: list
cbbaseinfo:
  description: "Retrieves all registered capabilities.

Returns the complete list of capabilities available in the system,
representing the skills and actions that agents can perform."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<Capability[]>"
    description: A promise that resolves to an array of Capability objects
data:
  name: list
  category: capability
  link: list.md
---
# list

```typescript
client.capability.list(params?: Record<string, unknown>): Promise<Capability[]>
```

Retrieves all registered capabilities.

Returns the complete list of capabilities available in the system,
representing the skills and actions that agents can perform.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<Capability[]>`** — A promise that resolves to an array of Capability objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.list();
```
