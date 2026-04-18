---
title: listAgents
---

# `listAgents`

```typescript
plugin.mail.listAgents(): Promise<IListAgentsResponse>
```



## Parameters

_No parameters._

## Returns

`Promise<IListAgentsResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.listAgents();
console.log(result);
```
