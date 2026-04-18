---
title: create
---

# `create`

```typescript
plugin.hooksApi.create(data: CreateHookRequest): Promise<Hook>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateHookRequest` | Yes |  |

## Returns

`Promise<Hook>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.create(/* CreateHookRequest */);
console.log(result);
```
