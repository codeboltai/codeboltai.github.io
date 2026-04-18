---
title: search
---

# `search`

```typescript
plugin.mail.search(params: ISearchParams): Promise<ISearchResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISearchParams` | Yes |  |

## Returns

`Promise<ISearchResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.search(/* ISearchParams */);
console.log(result);
```
