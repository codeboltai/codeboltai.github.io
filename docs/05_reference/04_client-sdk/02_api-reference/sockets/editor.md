---
title: editor
---

# `editor`

```typescript
client.sockets.editor(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.editor();
console.log(result);
```
