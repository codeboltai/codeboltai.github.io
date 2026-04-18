---
title: tasks
---

# `tasks`

```typescript
client.sockets.tasks(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.tasks();
console.log(result);
```
