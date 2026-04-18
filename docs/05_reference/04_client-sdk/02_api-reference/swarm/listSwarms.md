---
name: listSwarms
cbbaseinfo:
  description: "List all swarms.

Retrieves all swarms in the system, optionally filtered by query
parameters. Use this to discover available swarms or populate
swarm selection interfaces."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering swarms
      isOptional: true
  returns:
    signatureTypeName: "Promise<SwarmSummary[]>"
    description: A promise that resolves to an array of SwarmSummary objects
data:
  name: listSwarms
  category: swarm
  link: listSwarms.md
---
# listSwarms

```typescript
client.swarm.listSwarms(params?: Record<string, unknown>): Promise<SwarmSummary[]>
```

List all swarms.

Retrieves all swarms in the system, optionally filtered by query
parameters. Use this to discover available swarms or populate
swarm selection interfaces.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering swarms |

## Returns

**`Promise<SwarmSummary[]>`** — A promise that resolves to an array of SwarmSummary objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.listSwarms();
```
