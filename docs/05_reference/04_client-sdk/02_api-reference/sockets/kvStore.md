---
title: kvStore
---

# `kvStore`

```typescript
client.sockets.kvStore(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.kvStore();
console.log(result);
```
