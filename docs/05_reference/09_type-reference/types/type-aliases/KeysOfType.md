---
title: KeysOfType
---

[**@codebolt/types**](../index)

***

# Type Alias: KeysOfType\<T, U\>

```ts
type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:215

Extract keys from T that have values assignable to U

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |
