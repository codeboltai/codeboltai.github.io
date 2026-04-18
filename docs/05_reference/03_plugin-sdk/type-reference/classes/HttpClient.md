---
title: HttpClient
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: HttpClient

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:15

## Constructors

### Constructor

```ts
new HttpClient(baseURL: string, timeout: number): HttpClient;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:18

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `baseURL` | `string` | `undefined` |
| `timeout` | `number` | `30000` |

#### Returns

`HttpClient`

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="axios"></a> `axios` | `readonly` | `AxiosInstance` | [CodeBolt/packages/pluginSdk/src/core/httpClient.ts:16](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/core/httpClient.ts#L16) |

## Methods

### delete()

```ts
delete<T>(url: string, config?: AxiosRequestConfig<any>): Promise<T>;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:63

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

***

### get()

```ts
get<T>(url: string, config?: AxiosRequestConfig<any>): Promise<T>;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:43

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

***

### patch()

```ts
patch<T>(
   url: string, 
   data?: unknown, 
config?: AxiosRequestConfig<any>): Promise<T>;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:58

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data?` | `unknown` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

***

### post()

```ts
post<T>(
   url: string, 
   data?: unknown, 
config?: AxiosRequestConfig<any>): Promise<T>;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:48

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data?` | `unknown` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>

***

### put()

```ts
put<T>(
   url: string, 
   data?: unknown, 
config?: AxiosRequestConfig<any>): Promise<T>;
```

Defined in: CodeBolt/packages/pluginSdk/src/core/httpClient.ts:53

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `data?` | `unknown` |
| `config?` | `AxiosRequestConfig`\<`any`\> |

#### Returns

`Promise`\<`T`\>
