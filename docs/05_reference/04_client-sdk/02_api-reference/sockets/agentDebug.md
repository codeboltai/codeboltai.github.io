---
title: agentDebug
---

# `agentDebug`

```typescript
client.sockets.agentDebug(): void
```



## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.sockets.agentDebug();
console.log(result);
```
