---
title: SystemApi
---

[**@codebolt/plugin-sdk**](../index)

***

# Class: SystemApi

Defined in: CodeBolt/packages/pluginSdk/src/api/system.api.ts:17

Manages system-level operations and CLI integration.

This API provides functionality for installing and managing the CodeBolt
CLI tool, checking installation status, and interacting with the system's
file manager for folder operations.

## Constructors

### Constructor

```ts
new SystemApi(http: HttpClient): SystemApi;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/system.api.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`SystemApi`

## Methods

### checkCli()

```ts
checkCli(): Promise<CliStatus>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/system.api.ts:24

#### Returns

`Promise`\<`CliStatus`\>

***

### installCli()

```ts
installCli(data?: InstallCliRequest): Promise<InstallCliResponse>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/system.api.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `InstallCliRequest` |

#### Returns

`Promise`\<`InstallCliResponse`\>

***

### openFolder()

```ts
openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>;
```

Defined in: CodeBolt/packages/pluginSdk/src/api/system.api.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `OpenFolderRequest` |

#### Returns

`Promise`\<`OpenFolderResponse`\>
