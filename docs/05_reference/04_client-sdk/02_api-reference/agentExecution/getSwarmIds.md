---
name: getSwarmIds
cbbaseinfo:
  description: "Retrieves all known swarm IDs from execution history.

Returns a list of unique swarm identifiers that appear in the execution
records, useful for populating filter dropdowns or discovering swarms."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<string[]>"
    description: A promise that resolves to an array of swarm ID strings
data:
  name: getSwarmIds
  category: agentExecution
  link: getSwarmIds.md
---
# getSwarmIds

```typescript
client.agentExecution.getSwarmIds(): Promise<string[]>
```

Retrieves all known swarm IDs from execution history.

Returns a list of unique swarm identifiers that appear in the execution
records, useful for populating filter dropdowns or discovering swarms.

## Parameters

_None_

## Returns

**`Promise<string[]>`** — A promise that resolves to an array of swarm ID strings

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.getSwarmIds();
```
