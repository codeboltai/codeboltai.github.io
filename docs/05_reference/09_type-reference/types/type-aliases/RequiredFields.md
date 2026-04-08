---
title: RequiredFields
---

[**@codebolt/types**](../index)

***

# Type Alias: RequiredFields\<T, K\>

```ts
type RequiredFields<T, K> = T & { [P in K]-?: T[P] };
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:227

Make specific properties required

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |
