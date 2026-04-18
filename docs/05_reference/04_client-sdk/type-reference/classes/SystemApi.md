---
title: SystemApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: SystemApi

Defined in: CodeBolt/packages/clientsdk/src/api/system.api.ts:17

Manages system-level operations and CLI integration.

This API provides functionality for installing and managing the CodeBolt
CLI tool, checking installation status, and interacting with the system's
file manager for folder operations.

## Constructors

### Constructor

```ts
new SystemApi(http: HttpClient): SystemApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/system.api.ts:18

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

Defined in: CodeBolt/packages/clientsdk/src/api/system.api.ts:61

Checks the current CLI installation status.

Returns information about whether the CLI tool is installed, which
version is present, and if it's properly configured. Use this to
verify CLI availability before attempting to use it.

#### Returns

`Promise`\<`CliStatus`\>

A promise that resolves to CLI status information

#### Example

```typescript
const status = await client.system.checkCli();
if (status.installed) {
  console.log('CLI version:', status.version);
} else {
  console.log('CLI not installed');
}
```

***

### installCli()

```ts
installCli(data?: InstallCliRequest): Promise<InstallCliResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/system.api.ts:38

Installs the CodeBolt CLI tool on the system.

Downloads and configures the command-line interface tool for CodeBolt,
enabling terminal-based operations and command execution. The installation
process includes setting up necessary binaries and configuration files.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `InstallCliRequest` | Optional parameters for CLI installation |

#### Returns

`Promise`\<`InstallCliResponse`\>

A promise that resolves to installation status and details

#### Example

```typescript
const result = await client.system.installCli();
console.log('CLI installed at:', result.installPath);
```

***

### openFolder()

```ts
openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/system.api.ts:82

Opens a folder in the system's native file manager.

Launches the default file explorer or Finder window for the specified
folder path. This provides convenient access to project directories
and workspace locations directly from the application.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `OpenFolderRequest` | Request containing folder information |

#### Returns

`Promise`\<`OpenFolderResponse`\>

A promise that resolves when the folder has been opened

#### Example

```typescript
await client.system.openFolder({ path: '/Users/dev/projects' });
console.log('Folder opened');
```
