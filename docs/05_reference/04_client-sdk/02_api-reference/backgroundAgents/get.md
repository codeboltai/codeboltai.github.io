---
name: get
cbbaseinfo:
  description: "Retrieves a specific background agent instance by ID.

Returns the full details of a single background agent including
its configuration, status, and runtime metrics."
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The unique identifier of the background agent instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<BackgroundAgentInstance>"
    description: A promise that resolves to the BackgroundAgentInstance object
data:
  name: get
  category: backgroundAgents
  link: get.md
---
# get

```typescript
client.backgroundAgents.get(instanceId: string): Promise<BackgroundAgentInstance>
```

Retrieves a specific background agent instance by ID.

Returns the full details of a single background agent including
its configuration, status, and runtime metrics.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The unique identifier of the background agent instance |

## Returns

**`Promise<BackgroundAgentInstance>`** — A promise that resolves to the BackgroundAgentInstance object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.backgroundAgents.get('instanceId');
```
