---
title: jobs
---

# `jobs`

```typescript
client.sockets.jobs(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.jobs();
console.log(result);
```
