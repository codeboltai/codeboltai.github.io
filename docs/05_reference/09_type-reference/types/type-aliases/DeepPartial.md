---
title: DeepPartial
---

[**@codebolt/types**](../index)

***

# Type Alias: DeepPartial\<T\>

```ts
type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P] };
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:201

Makes all properties of T optional recursively

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
