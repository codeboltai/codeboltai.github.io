---
title: getBlocked
---

# `getBlocked`

```typescript
client.jobs.getBlocked(): Promise<Job[]>
```

Retrieves all currently blocked jobs.

Returns jobs that have unresolved dependencies preventing them from
being executed. Useful for identifying bottlenecks in the job graph.

## Parameters

_No parameters._

## Returns

`Promise<Job[]>` — A promise that resolves to an array of blocked  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.jobs.getBlocked();
console.log(result);
```
