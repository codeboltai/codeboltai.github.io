---
title: EnvironmentsApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: EnvironmentsApi

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:12

Manages development environments and their providers.

This API handles the full lifecycle of environments -- from discovering and
installing providers, to creating, starting, stopping, and managing
environments. It also supports file operations, diff inspection, and
pull request submission within environments.

## Constructors

### Constructor

```ts
new EnvironmentsApi(http: HttpClient): EnvironmentsApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`EnvironmentsApi`

## Methods

### createEnvironment()

```ts
createEnvironment(data: CreateEnvironmentRequest): Promise<Environment>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:51

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateEnvironmentRequest` |

#### Returns

`Promise`\<`Environment`\>

***

### createInstalledProvider()

```ts
createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `CreateInstalledProviderRequest` |

#### Returns

`Promise`\<`InstalledProvider`\>

***

### deleteEnvironment()

```ts
deleteEnvironment(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:67

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### deleteInstalledProvider()

```ts
deleteInstalledProvider(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### getDiffFiles()

```ts
getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:83

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `GetDiffFilesRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### getEnvironment()

```ts
getEnvironment(id: string): Promise<Environment>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`Environment`\>

***

### getFullProject()

```ts
getFullProject(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:95

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`unknown`\>

***

### getInstalledProvider()

```ts
getInstalledProvider(id: string): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`InstalledProvider`\>

***

### getLocalProviders()

```ts
getLocalProviders(): Promise<ProviderData[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:15

#### Returns

`Promise`\<`ProviderData`[]\>

***

### getProviderStatus()

```ts
getProviderStatus(id: string): Promise<EnvironmentProviderStatus>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:79

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |

#### Returns

`Promise`\<`EnvironmentProviderStatus`\>

***

### getRunningProviders()

```ts
getRunningProviders(): Promise<InstalledProvider[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:47

#### Returns

`Promise`\<`InstalledProvider`[]\>

***

### installProvider()

```ts
installProvider(data: InstallProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:23

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `InstallProviderRequest` |

#### Returns

`Promise`\<`InstalledProvider`\>

***

### listEnvironments()

```ts
listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:55

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`Environment`[]\>

***

### listInstalledProviders()

```ts
listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:27

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`InstalledProvider`[]\>

***

### mergePatch()

```ts
mergePatch(id: string, data: MergePatchRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:99

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `MergePatchRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### readFile()

```ts
readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:87

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `ReadEnvironmentFileRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### restartEnvironment()

```ts
restartEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:115

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### sendPullRequest()

```ts
sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:103

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `SendPullRequestRequest` |

#### Returns

`Promise`\<`unknown`\>

***

### setDefaultProvider()

```ts
setDefaultProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:43

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### startEnvironment()

```ts
startEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:107

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### startProvider()

```ts
startProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:71

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### stopEnvironment()

```ts
stopEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:111

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### stopProvider()

```ts
stopProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:75

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data?` | `Record`\<`string`, `unknown`\> |

#### Returns

`Promise`\<`unknown`\>

***

### updateEnvironment()

```ts
updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:63

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateEnvironmentRequest` |

#### Returns

`Promise`\<`Environment`\>

***

### updateInstalledProvider()

```ts
updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `UpdateInstalledProviderRequest` |

#### Returns

`Promise`\<`InstalledProvider`\>

***

### writeFile()

```ts
writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/environments.api.ts:91

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `string` |
| `data` | `WriteEnvironmentFileRequest` |

#### Returns

`Promise`\<`unknown`\>
