---
title: HealthCheck
---

[**@codebolt/types**](../index)

***

# Interface: HealthCheck

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:529

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="interval"></a> `interval?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:533](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L533) |
| <a id="name"></a> `name` | `string` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:530](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L530) |
| <a id="timeout"></a> `timeout?` | `number` | [common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:532](common/types/src/codeboltjstypes/libFunctionTypes/internal.ts#L532) |

## Methods

### check()

```ts
check(): Promise<HealthStatus>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:531

#### Returns

`Promise`\<[`HealthStatus`](HealthStatus)\>
