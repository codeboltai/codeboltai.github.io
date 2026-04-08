---
title: Required
---

[**@codebolt/codeboltjs**](../index)

***

# Type Alias: Required\<T, K\>

```ts
type Required<T, K> = T & { [P in K]-?: T[P] };
```

Defined in: packages/codeboltjs/src/types/commonTypes.ts:288

Make specific properties required

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `K` *extends* keyof `T` |
