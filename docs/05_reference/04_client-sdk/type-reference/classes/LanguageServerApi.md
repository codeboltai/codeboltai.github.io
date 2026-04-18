---
title: LanguageServerApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: LanguageServerApi

Defined in: CodeBolt/packages/clientsdk/src/api/language-server.api.ts:11

Provides API methods for managing language servers within the CodeBolt workspace.

Language servers implement the Language Server Protocol (LSP) to provide IDE features
such as autocompletion, diagnostics, go-to-definition, and hover information for
various programming languages.

## Constructors

### Constructor

```ts
new LanguageServerApi(http: HttpClient): LanguageServerApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/language-server.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`LanguageServerApi`

## Methods

### add()

```ts
add(data: AddLanguageServerRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/language-server.api.ts:72

Adds a custom language server configuration to the workspace.

Registers a new language server entry with custom settings, allowing you to configure
language servers that are not in the default catalog or to override default settings
for existing servers.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `AddLanguageServerRequest` | The language server configuration to add |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the configuration has been saved

#### Example

```typescript
await client.languageServer.add({
  name: 'custom-python-lsp',
  command: 'pylsp',
  languages: ['python'],
});
```

***

### getInstalled()

```ts
getInstalled(): Promise<LanguageServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/language-server.api.ts:29

Retrieves the list of language servers currently installed in the workspace.

Returns metadata for each installed language server including its name, supported
languages, and current status. Use this to check which LSP capabilities are available
before performing language-specific operations.

#### Returns

`Promise`\<`LanguageServer`[]\>

A promise that resolves to an array of installed language server configurations

#### Example

```typescript
const servers = await client.languageServer.getInstalled();
const tsServer = servers.find(s => s.languages?.includes('typescript'));
```

***

### install()

```ts
install(data: InstallLanguageServerRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/language-server.api.ts:48

Installs a language server by downloading and configuring it for use in the workspace.

Triggers the installation process for a specified language server. The server will be
downloaded and set up so it can provide LSP features for its supported languages.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `InstallLanguageServerRequest` | The installation request configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the installation request has been accepted

#### Example

```typescript
await client.languageServer.install({ name: 'typescript-language-server' });
```
