---
name: getLayout
cbbaseinfo:
  description: "Get the swarm layout.

Retrieves the current layout configuration for swarms in the system.
The layout defines how swarms, teams, and agents are organized and
displayed in user interfaces."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<SwarmLayout>"
    description: A promise that resolves to the SwarmLayout object
data:
  name: getLayout
  category: swarm
  link: getLayout.md
---
# getLayout

```typescript
client.swarm.getLayout(): Promise<SwarmLayout>
```

Get the swarm layout.

Retrieves the current layout configuration for swarms in the system.
The layout defines how swarms, teams, and agents are organized and
displayed in user interfaces.

## Parameters

_None_

## Returns

**`Promise<SwarmLayout>`** — A promise that resolves to the SwarmLayout object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.swarm.getLayout();
```
