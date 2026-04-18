---
name: saveLayout
cbbaseinfo:
  description: "Save or update the swarm layout.

Persists a new layout configuration for swarms. The layout defines
how swarms, teams, and agents are organized and displayed. Use
this to save custom arrangements or update the structure."
cbparameters:
  parameters:
    - name: data
      typeName: SaveLayoutRequest
      description: The layout configuration to save
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the layout is saved
data:
  name: saveLayout
  category: swarm
  link: saveLayout.md
---
# saveLayout

```typescript
client.swarm.saveLayout(data: SaveLayoutRequest): Promise<void>
```

Save or update the swarm layout.

Persists a new layout configuration for swarms. The layout defines
how swarms, teams, and agents are organized and displayed. Use
this to save custom arrangements or update the structure.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SaveLayoutRequest` | The layout configuration to save |

## Returns

**`Promise<void>`** — A promise that resolves when the layout is saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.saveLayout(/* SaveLayoutRequest */);
```
