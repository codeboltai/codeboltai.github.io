---
title: orchestrator
---

# `orchestrator`

```typescript
client.sockets.orchestrator(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.orchestrator();
console.log(result);
```
