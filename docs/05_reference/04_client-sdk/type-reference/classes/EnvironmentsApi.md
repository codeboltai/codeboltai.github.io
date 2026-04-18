---
title: EnvironmentsApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: EnvironmentsApi

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:12

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

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:13

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

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:200

Creates a new development environment.

Provisions a new environment using the specified provider and configuration.
The environment can then be started, stopped, and managed through other methods.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateEnvironmentRequest` | Environment creation parameters including name, provider, and settings |

#### Returns

`Promise`\<`Environment`\>

A promise that resolves to the newly created [Environment](../interfaces/Environment)

#### Example

```typescript
const env = await client.environments.createEnvironment({
  name: 'dev-env',
  providerId: 'prov-123',
});
```

***

### createInstalledProvider()

```ts
createInstalledProvider(data: CreateInstalledProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:49

Registers a new installed environment provider.

Creates a provider record from an already-installed provider on the system.
This makes the provider available for environment creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreateInstalledProviderRequest` | The provider registration details |

#### Returns

`Promise`\<`InstalledProvider`\>

A promise that resolves to the newly created [InstalledProvider](../interfaces/InstalledProvider)

#### Example

```typescript
const provider = await client.environments.createInstalledProvider({
  name: 'docker-local',
  type: 'docker',
});
```

***

### deleteEnvironment()

```ts
deleteEnvironment(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:275

Deletes an environment.

Permanently removes the environment and releases its resources. The
environment should be stopped before deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.environments.deleteEnvironment('env-789');
```

***

### deleteInstalledProvider()

```ts
deleteInstalledProvider(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:143

Deletes an installed environment provider.

Removes the provider registration. Environments already created by this
provider are not automatically deleted.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the installed provider to delete |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when deletion is complete

#### Example

```typescript
await client.environments.deleteInstalledProvider('prov-123');
```

***

### getDiffFiles()

```ts
getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:352

Retrieves diff files for an environment.

Compares the environment's current file state against a baseline to
identify modified, added, or deleted files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data` | `GetDiffFilesRequest` | Parameters specifying the diff comparison (e.g., base commit or branch) |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the diff file information

#### Example

```typescript
const diffs = await client.environments.getDiffFiles('env-789', { base: 'main' });
```

***

### getEnvironment()

```ts
getEnvironment(id: string): Promise<Environment>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:236

Retrieves a specific environment by its ID.

Returns the full details of a single environment including its current
state, provider, and configuration.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |

#### Returns

`Promise`\<`Environment`\>

A promise that resolves to the [Environment](../interfaces/Environment)

#### Example

```typescript
const env = await client.environments.getEnvironment('env-789');
```

***

### getFullProject()

```ts
getFullProject(id: string): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:411

Retrieves the complete project file structure from an environment.

Returns the full directory tree and file listing for the project
contained within the environment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the project structure data

#### Example

```typescript
const project = await client.environments.getFullProject('env-789');
```

***

### getInstalledProvider()

```ts
getInstalledProvider(id: string): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:105

Retrieves a specific installed provider by its ID.

Returns the full details of a single provider including its configuration
and current state.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the installed provider |

#### Returns

`Promise`\<`InstalledProvider`\>

A promise that resolves to the [InstalledProvider](../interfaces/InstalledProvider)

#### Example

```typescript
const provider = await client.environments.getInstalledProvider('prov-123');
```

***

### getLocalProviders()

```ts
getLocalProviders(): Promise<ProviderData[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:28

Retrieves the list of available local environment providers.

Discovers providers installed on the local machine that can be used
to create new environments. Useful for populating provider selection UIs.

#### Returns

`Promise`\<`ProviderData`[]\>

A promise that resolves to an array of [ProviderData](../interfaces/ProviderData) descriptors

#### Example

```typescript
const providers = await client.environments.getLocalProviders();
```

***

### getProviderStatus()

```ts
getProviderStatus(id: string): Promise<EnvironmentProviderStatus>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:333

Retrieves the current provider status for an environment.

Returns whether the backing provider is running, stopped, or in an
error state. Useful for health checks and monitoring.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |

#### Returns

`Promise`\<`EnvironmentProviderStatus`\>

A promise that resolves to the EnvironmentProviderStatus

#### Example

```typescript
const status = await client.environments.getProviderStatus('env-789');
console.log(status);
```

***

### getRunningProviders()

```ts
getRunningProviders(): Promise<InstalledProvider[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:179

Retrieves all currently running environment providers.

Returns only providers that are actively running and available to serve
environment requests.

#### Returns

`Promise`\<`InstalledProvider`[]\>

A promise that resolves to an array of running [InstalledProvider](../interfaces/InstalledProvider) objects

#### Example

```typescript
const running = await client.environments.getRunningProviders();
```

***

### installProvider()

```ts
installProvider(data: InstallProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:70

Installs a new environment provider from a remote source.

Downloads and registers a provider, making it available for creating
environments. Use this when the provider is not yet present locally.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InstallProviderRequest` | Installation parameters including provider source and configuration |

#### Returns

`Promise`\<`InstalledProvider`\>

A promise that resolves to the newly installed [InstalledProvider](../interfaces/InstalledProvider)

#### Example

```typescript
const provider = await client.environments.installProvider({
  source: 'registry',
  name: 'cloud-provider',
});
```

***

### listEnvironments()

```ts
listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:218

Lists all environments.

Returns every environment regardless of state. Use optional parameters
to filter or paginate the results.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`Environment`[]\>

A promise that resolves to an array of [Environment](../interfaces/Environment) objects

#### Example

```typescript
const envs = await client.environments.listEnvironments();
```

***

### listInstalledProviders()

```ts
listInstalledProviders(params?: Record<string, unknown>): Promise<InstalledProvider[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:87

Lists all installed environment providers.

Returns every provider that has been registered or installed in the system.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params?` | `Record`\<`string`, `unknown`\> | Optional query parameters for filtering or pagination |

#### Returns

`Promise`\<`InstalledProvider`[]\>

A promise that resolves to an array of [InstalledProvider](../interfaces/InstalledProvider) objects

#### Example

```typescript
const providers = await client.environments.listInstalledProviders();
```

***

### mergePatch()

```ts
mergePatch(id: string, data: MergePatchRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:432

Merges a patch into the environment's project files.

Applies a set of file changes (additions, modifications, deletions) to
the environment in a single atomic operation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data` | `MergePatchRequest` | The patch payload describing file changes to apply |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the patch has been applied

#### Example

```typescript
await client.environments.mergePatch('env-789', {
  files: [{ path: 'src/app.ts', content: 'updated content' }],
});
```

***

### readFile()

```ts
readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:371

Reads a file from within an environment.

Retrieves the contents of a specific file from the environment's
filesystem. Useful for inspecting files without SSH access.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data` | `ReadEnvironmentFileRequest` | The file read request specifying the file path |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves to the file contents

#### Example

```typescript
const content = await client.environments.readFile('env-789', { path: 'src/index.ts' });
```

***

### restartEnvironment()

```ts
restartEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:512

Restarts an environment.

Performs a stop followed by a start on the environment. Useful for
applying configuration changes that require a fresh boot.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment to restart |
| `data?` | `Record`\<`string`, `unknown`\> | Optional restart configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the environment has restarted

#### Example

```typescript
await client.environments.restartEnvironment('env-789');
```

***

### sendPullRequest()

```ts
sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:455

Sends a pull request from the environment's current state.

Creates a pull request on the remote repository using the changes
present in the environment. The PR details are specified in the request.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data` | `SendPullRequestRequest` | Pull request details including title, description, and target branch |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the pull request has been created

#### Example

```typescript
await client.environments.sendPullRequest('env-789', {
  title: 'Fix login bug',
  description: 'Resolved null pointer in auth flow',
  targetBranch: 'main',
});
```

***

### setDefaultProvider()

```ts
setDefaultProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:162

Sets an installed provider as the system default.

New environments will use this provider unless another is explicitly
specified during creation.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the provider to set as default |
| `data?` | `Record`\<`string`, `unknown`\> | Optional additional configuration for the default setting |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the default is updated

#### Example

```typescript
await client.environments.setDefaultProvider('prov-123');
```

***

### startEnvironment()

```ts
startEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:474

Starts an environment.

Boots up the environment so it becomes active and ready for use.
The environment's provider must be running first.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment to start |
| `data?` | `Record`\<`string`, `unknown`\> | Optional start configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the environment has started

#### Example

```typescript
await client.environments.startEnvironment('env-789');
```

***

### startProvider()

```ts
startProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:295

Starts the underlying provider for an environment.

Boots up the provider process that backs the environment, making it
ready to accept operations. This is distinct from starting the
environment itself.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data?` | `Record`\<`string`, `unknown`\> | Optional start configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the provider has started

#### Example

```typescript
await client.environments.startProvider('env-789');
```

***

### stopEnvironment()

```ts
stopEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:493

Stops a running environment.

Gracefully shuts down the environment, preserving its state for later
restart. Resources may be released depending on the provider.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment to stop |
| `data?` | `Record`\<`string`, `unknown`\> | Optional stop configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the environment has stopped

#### Example

```typescript
await client.environments.stopEnvironment('env-789');
```

***

### stopProvider()

```ts
stopProvider(id: string, data?: Record<string, unknown>): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:314

Stops the underlying provider for an environment.

Shuts down the provider process without destroying the environment.
The provider can be restarted later.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data?` | `Record`\<`string`, `unknown`\> | Optional stop configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the provider has stopped

#### Example

```typescript
await client.environments.stopProvider('env-789');
```

***

### updateEnvironment()

```ts
updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:257

Updates an existing environment's configuration.

Modifies environment settings such as name, resource allocations, or
other configurable properties.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment to update |
| `data` | `UpdateEnvironmentRequest` | The fields to update on the environment |

#### Returns

`Promise`\<`Environment`\>

A promise that resolves to the updated [Environment](../interfaces/Environment)

#### Example

```typescript
const updated = await client.environments.updateEnvironment('env-789', {
  name: 'staging-env',
});
```

***

### updateInstalledProvider()

```ts
updateInstalledProvider(id: string, data: UpdateInstalledProviderRequest): Promise<InstalledProvider>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:125

Updates the configuration of an installed provider.

Modifies provider settings such as name, credentials, or resource limits.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the installed provider to update |
| `data` | `UpdateInstalledProviderRequest` | The fields to update on the provider |

#### Returns

`Promise`\<`InstalledProvider`\>

A promise that resolves to the updated [InstalledProvider](../interfaces/InstalledProvider)

#### Example

```typescript
const updated = await client.environments.updateInstalledProvider('prov-123', {
  name: 'renamed-provider',
});
```

***

### writeFile()

```ts
writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/environments.api.ts:393

Writes a file to an environment's filesystem.

Creates or overwrites a file at the specified path within the
environment. Useful for deploying configuration or code changes.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The unique identifier of the environment |
| `data` | `WriteEnvironmentFileRequest` | The file write request specifying path and content |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the file has been written

#### Example

```typescript
await client.environments.writeFile('env-789', {
  path: 'config.json',
  content: '{ "debug": true }',
});
```
