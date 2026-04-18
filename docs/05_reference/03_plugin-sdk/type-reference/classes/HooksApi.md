---
title: HooksApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: HooksApi

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:12

Manages lifecycle hooks that execute in response to system events.

Hooks allow you to register callback actions that fire automatically
when specific events occur (e.g., file changes, builds, deployments).
This API supports the full CRUD lifecycle as well as enabling and
disabling individual hooks.

## Constructors

### Constructor

```ts
new HooksApi(http: HttpClient): HooksApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`HooksApi`

## Methods

### create()

```ts
create(data: CreateHookRequest): Promise<Hook>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateHookRequest` |

#### Returns

`Promise`\<`Hook`\>

***

### delete()

```ts
delete(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### disable()

```ts
disable(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### enable()

```ts
enable(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### get()

```ts
get(id: string): Promise<Hook>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`Hook`\>

***

### initialize()

```ts
initialize(data?: InitializeHooksRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `InitializeHooksRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### list()

```ts
list(params?: Record<string, unknown>): Promise<Hook[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`Hook`[]\>

***

### update()

```ts
update(id: string, data: UpdateHookRequest): Promise<Hook>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/hooks.api.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateHookRequest` |

#### Returns

`Promise`\<`Hook`\>
