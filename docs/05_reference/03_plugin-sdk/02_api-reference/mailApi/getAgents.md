---
title: getAgents
---

# `getAgents`

```typescript
plugin.mailApi.getAgents(): Promise<MailAgent[]>
```



## Parameters

_No parameters._

## Returns

`Promise<MailAgent[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.getAgents();
console.log(result);
```
