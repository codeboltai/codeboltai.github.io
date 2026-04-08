---
title: Validator
---

[**@codebolt/types**](../index)

***

# Interface: Validator

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:470

## Methods

### addRule()

```ts
addRule(rule: ValidationRule): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:472

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rule` | [`ValidationRule`](ValidationRule) |

#### Returns

`void`

***

### hasRule()

```ts
hasRule(field: string): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:474

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | `string` |

#### Returns

`boolean`

***

### removeRule()

```ts
removeRule(field: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:473

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `field` | `string` |

#### Returns

`void`

***

### validate()

```ts
validate(data: any, rules: ValidationRule[]): InternalValidationResult;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:471

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `any` |
| `rules` | [`ValidationRule`](ValidationRule)[] |

#### Returns

[`InternalValidationResult`](InternalValidationResult)
