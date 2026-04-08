---
title: UnifiedMessageModifier
---

[**@codebolt/agent**](../../index)

***

# Interface: UnifiedMessageModifier

Defined in: packages/agent/src/unified/types/types.ts:174

Unified message modifier interface

## Methods

### addProcessor()

```ts
addProcessor(processor: Processor): void;
```

Defined in: packages/agent/src/unified/types/types.ts:178

Add a processor to the modifier

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `processor` | `Processor` |

#### Returns

`void`

***

### clearContext()

```ts
clearContext(): void;
```

Defined in: packages/agent/src/unified/types/types.ts:184

Clear all context

#### Returns

`void`

***

### getContext()

```ts
getContext(key: string): any;
```

Defined in: packages/agent/src/unified/types/types.ts:182

Get context value

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`any`

***

### processMessage()

```ts
processMessage(input: any): Promise<UnifiedMessageOutput>;
```

Defined in: packages/agent/src/unified/types/types.ts:176

Process and modify input messages

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `any` |

#### Returns

`Promise`\<[`UnifiedMessageOutput`](UnifiedMessageOutput)\>

***

### setContext()

```ts
setContext(key: string, value: any): void;
```

Defined in: packages/agent/src/unified/types/types.ts:180

Set context value

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`
