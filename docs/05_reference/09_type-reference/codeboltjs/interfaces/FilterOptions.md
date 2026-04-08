---
title: FilterOptions
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: FilterOptions

Defined in: packages/codeboltjs/src/types/libFunctionTypes.ts:1746

Filtering options for list operations

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="daterange"></a> `dateRange?` | \{ `from?`: `string` \| `Date`; `to?`: `string` \| `Date`; \} | Date range | [packages/codeboltjs/src/types/libFunctionTypes.ts:1752](packages/codeboltjs/src/types/libFunctionTypes.ts#L1752) |
| `dateRange.from?` | `string` \| `Date` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:1753](packages/codeboltjs/src/types/libFunctionTypes.ts#L1753) |
| `dateRange.to?` | `string` \| `Date` | - | [packages/codeboltjs/src/types/libFunctionTypes.ts:1754](packages/codeboltjs/src/types/libFunctionTypes.ts#L1754) |
| <a id="filters"></a> `filters?` | `Record`\<`string`, `unknown`\> | Field filters | [packages/codeboltjs/src/types/libFunctionTypes.ts:1750](packages/codeboltjs/src/types/libFunctionTypes.ts#L1750) |
| <a id="query"></a> `query?` | `string` | Search query | [packages/codeboltjs/src/types/libFunctionTypes.ts:1748](packages/codeboltjs/src/types/libFunctionTypes.ts#L1748) |
