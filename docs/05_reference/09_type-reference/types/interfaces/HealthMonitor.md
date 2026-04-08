---
title: HealthMonitor
---

[**@codebolt/types**](../index)

***

# Interface: HealthMonitor

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:543

## Methods

### checkAll()

```ts
checkAll(): Promise<Map<string, HealthStatus>>;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:546

#### Returns

`Promise`\<`Map`\<`string`, [`HealthStatus`](HealthStatus)\>\>

***

### getStatus()

```ts
getStatus(name: string): HealthStatus;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:547

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`HealthStatus`](HealthStatus)

***

### isHealthy()

```ts
isHealthy(): boolean;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:548

#### Returns

`boolean`

***

### register()

```ts
register(check: HealthCheck): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:544

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `check` | [`HealthCheck`](HealthCheck) |

#### Returns

`void`

***

### unregister()

```ts
unregister(name: string): void;
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/internal.ts:545

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`
