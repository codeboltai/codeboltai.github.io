---
title: DeepRequired
---

[**@codebolt/codeboltjs**](../index)

***

# Type Alias: DeepRequired\<T\>

```ts
type DeepRequired<T> = { [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P] };
```

Defined in: packages/codeboltjs/src/types/commonTypes.ts:269

Makes all properties of T required recursively

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
