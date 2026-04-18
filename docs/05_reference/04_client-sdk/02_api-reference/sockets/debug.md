---
title: debug
---

# `debug`

```typescript
client.sockets.debug(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.debug();
console.log(result);
```
