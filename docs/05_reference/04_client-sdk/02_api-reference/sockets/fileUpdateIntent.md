---
title: fileUpdateIntent
---

# `fileUpdateIntent`

```typescript
client.sockets.fileUpdateIntent(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.fileUpdateIntent();
console.log(result);
```
