---
name: getStats
cbbaseinfo:
  description: "Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ActionBlockStats>"
    description: A promise that resolves to an ActionBlockStats object with summary metrics
data:
  name: getStats
  category: actionBlocks
  link: getStats.md
---
# getStats

```typescript
client.actionBlocks.getStats(): Promise<ActionBlockStats>
```

Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system.

## Parameters

_None_

## Returns

**`Promise<ActionBlockStats>`** — A promise that resolves to an ActionBlockStats object with summary metrics

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.getStats();
```
