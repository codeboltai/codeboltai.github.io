---
name: getExecutors
cbbaseinfo:
  description: "Retrieves all capability executors.

Returns the list of executor implementations that are registered
to handle capability invocations."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<CapabilityExecutor[]>"
    description: A promise that resolves to an array of CapabilityExecutor objects
data:
  name: getExecutors
  category: capability
  link: getExecutors.md
---
# getExecutors

```typescript
client.capability.getExecutors(params?: Record<string, unknown>): Promise<CapabilityExecutor[]>
```

Retrieves all capability executors.

Returns the list of executor implementations that are registered
to handle capability invocations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering |

## Returns

**`Promise<CapabilityExecutor[]>`** — A promise that resolves to an array of CapabilityExecutor objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.getExecutors();
```
