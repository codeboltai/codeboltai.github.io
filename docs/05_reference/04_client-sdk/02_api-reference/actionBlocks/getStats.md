---
title: getStats
---

# `getStats`

```typescript
client.actionBlocks.getStats(): Promise<ActionBlockStats>
```

Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system.

## Parameters

_No parameters._

## Returns

`Promise<ActionBlockStats>` — A promise that resolves to an ActionBlockStats object with summary metrics

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.actionBlocks.getStats();
console.log(result);
```
