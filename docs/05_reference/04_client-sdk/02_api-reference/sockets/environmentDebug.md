---
title: environmentDebug
---

# `environmentDebug`

```typescript
client.sockets.environmentDebug(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.environmentDebug();
console.log(result);
```
