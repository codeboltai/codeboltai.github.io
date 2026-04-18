---
title: chat
---

# `chat`

```typescript
client.sockets.chat(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.chat();
console.log(result);
```
