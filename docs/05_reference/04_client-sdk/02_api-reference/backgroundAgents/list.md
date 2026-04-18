---
name: list
cbbaseinfo:
  description: "Retrieves all background agent instances.

Returns every background agent instance that has been created,
including both active and terminated ones."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<BackgroundAgentInstance[]>"
    description: A promise that resolves to an array of BackgroundAgentInstance objects
data:
  name: list
  category: backgroundAgents
  link: list.md
---
# list

```typescript
client.backgroundAgents.list(params?: Record<string, unknown>): Promise<BackgroundAgentInstance[]>
```

Retrieves all background agent instances.

Returns every background agent instance that has been created,
including both active and terminated ones.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<BackgroundAgentInstance[]>`** — A promise that resolves to an array of BackgroundAgentInstance objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.backgroundAgents.list();
```
