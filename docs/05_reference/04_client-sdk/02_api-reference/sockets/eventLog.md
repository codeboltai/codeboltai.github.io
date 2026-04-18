---
title: eventLog
---

# `eventLog`

```typescript
client.sockets.eventLog(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.eventLog();
console.log(result);
```
