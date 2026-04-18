---
title: browser
---

# `browser`

```typescript
client.sockets.browser(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.browser();
console.log(result);
```
