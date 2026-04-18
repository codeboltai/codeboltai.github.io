---
title: capability
---

# `capability`

```typescript
client.sockets.capability(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.capability();
console.log(result);
```
