---
title: backgroundAgent
---

# `backgroundAgent`

```typescript
client.sockets.backgroundAgent(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.backgroundAgent();
console.log(result);
```
