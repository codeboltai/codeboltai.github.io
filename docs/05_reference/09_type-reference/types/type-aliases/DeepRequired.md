---
title: DeepRequired
---

[**@codebolt/types**](../index)

***

# Type Alias: DeepRequired\<T\>

```ts
type DeepRequired<T> = { [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P] };
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:208

Makes all properties of T required recursively

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
