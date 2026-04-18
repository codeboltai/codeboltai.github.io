---
title: persistentMemory
---

# `persistentMemory`

```typescript
client.sockets.persistentMemory(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.persistentMemory();
console.log(result);
```
