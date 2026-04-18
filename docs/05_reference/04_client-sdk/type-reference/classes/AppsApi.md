---
title: AppsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: AppsApi

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:11

Provides methods for managing applications in the CodeBolt runtime.

Apps are installable extensions that add functionality to the CodeBolt platform.
This API supports installing, starting, forking, editing, uninstalling, and
caching applications.

## Constructors

### Constructor

```ts
new AppsApi(http: HttpClient): AppsApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`AppsApi`

## Methods

### edit()

```ts
edit(data: EditAppRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:71

Opens an application for editing.

Launches the app's source code or configuration in an editable mode,
allowing modifications to its behavior.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `EditAppRequest` | The edit configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the app is ready for editing

***

### fork()

```ts
fork(data: ForkAppRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:57

Forks an existing application.

Creates a copy of an app that can be independently modified and
customized. Useful for creating variants of existing apps.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `ForkAppRequest` | The fork configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the app has been forked

***

### getAll()

```ts
getAll(): Promise<App[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:102

Retrieves all registered applications.

Returns the complete list of apps available in the system, both
installed and available for installation.

#### Returns

`Promise`\<`App`[]\>

A promise that resolves to an array of App objects

#### Example

```typescript
const apps = await client.apps.getAll();
apps.forEach(app => console.log(app.name, app.version));
```

***

### getAppFromCache()

```ts
getAppFromCache(params?: AppCacheParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:128

Retrieves an app's data from the cache.

Returns the cached representation of an app for fast access,
avoiding a full database or filesystem lookup.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AppCacheParams` | Optional cache parameters identifying the app |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the cached app data

***

### getById()

```ts
getById(appId: string): Promise<App>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:147

Retrieves a specific application by its ID.

Returns the full App object including its metadata, configuration,
and current status.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `appId` | `string` | The unique identifier of the app |

#### Returns

`Promise`\<`App`\>

A promise that resolves to the App object

#### Example

```typescript
const app = await client.apps.getById('my-app-id');
console.log(app.name, app.description);
```

***

### install()

```ts
install(data: InstallAppRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:29

Installs an application.

Downloads and registers an app, making it available in the CodeBolt
environment for use.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InstallAppRequest` | The installation configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the app has been installed

#### Example

```typescript
await client.apps.install({ appId: 'my-app' });
```

***

### start()

```ts
start(data: StartAppRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:43

Starts an installed application.

Launches an app that has been previously installed, making its
functionality active in the runtime.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `StartAppRequest` | The start configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the app has been started

***

### uninstall()

```ts
uninstall(data: UninstallAppRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:84

Uninstalls an application.

Removes an installed app and cleans up its associated resources.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `UninstallAppRequest` | The uninstall configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the app has been uninstalled

***

### updateAppToCache()

```ts
updateAppToCache(params?: AppCacheParams): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/apps.api.ts:115

Updates an app's data in the cache.

Refreshes the cached representation of an app, ensuring that the
latest metadata is available without a full reload.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `AppCacheParams` | Optional cache parameters identifying the app |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the cache has been updated
