---
title: Optional
---

[**@codebolt/codeboltjs**](../index)

***

# Type Alias: Optional\<T, K\>

```ts
type Optional<T, K> = Omit<T, K> & Partial<Pick<T, K>>;
```

Defined in: packages/codeboltjs/src/types/commonTypes.ts:283

Make specific properties optional

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |
