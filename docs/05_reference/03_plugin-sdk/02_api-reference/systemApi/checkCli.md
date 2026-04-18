---
title: checkCli
---

# `checkCli`

```typescript
plugin.systemApi.checkCli(): Promise<CliStatus>
```



## Parameters

_No parameters._

## Returns

`Promise<CliStatus>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.systemApi.checkCli();
console.log(result);
```
