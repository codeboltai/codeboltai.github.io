---
title: main
---

# `main`

```typescript
client.sockets.main(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.main();
console.log(result);
```
