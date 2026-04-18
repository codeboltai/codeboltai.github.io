---
name: createExecutor
cbbaseinfo:
  description: "Creates a new capability executor.

Registers an executor implementation that can handle invocations
of a specific capability."
cbparameters:
  parameters:
    - name: data
      typeName: CreateCapabilityExecutorRequest
      description: The executor creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<CapabilityExecutor>"
    description: A promise that resolves to the created CapabilityExecutor
data:
  name: createExecutor
  category: capability
  link: createExecutor.md
---
# createExecutor

```typescript
client.capability.createExecutor(data: CreateCapabilityExecutorRequest): Promise<CapabilityExecutor>
```

Creates a new capability executor.

Registers an executor implementation that can handle invocations
of a specific capability.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCapabilityExecutorRequest` | The executor creation payload |

## Returns

**`Promise<CapabilityExecutor>`** — A promise that resolves to the created CapabilityExecutor

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.capability.createExecutor(/* CreateCapabilityExecutorRequest */);
```
