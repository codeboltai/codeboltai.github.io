---
title: stopProcess
---

# `stopProcess`

```typescript
plugin.chat.stopProcess(): void
```

Stops the ongoing process.
Sends a specific message to the server to stop the process.

## Parameters

_No parameters._

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.stopProcess();
console.log(result);
```
