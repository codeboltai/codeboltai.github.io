---
title: Optional
---

[**@codebolt/types**](../index)

***

# Type Alias: Optional\<T, K\>

```ts
type Optional<T, K> = Omit<T, K> & Partial<Pick<T, K>>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/common.ts:222

Make specific properties optional

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |
