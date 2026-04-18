---
title: EditorApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: EditorApi

Defined in: CodeBolt/packages/clientsdk/src/api/editor.api.ts:10

Provides access to the CodeBolt editor subsystem.

Use this API to retrieve file tree structures for workspace projects
and to read editor configuration settings.

## Constructors

### Constructor

```ts
new EditorApi(http: HttpClient): EditorApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/editor.api.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`EditorApi`

## Methods

### getEditorConfig()

```ts
getEditorConfig(): Promise<EditorConfig>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/editor.api.ts:49

Retrieves the current editor configuration.

Returns settings that control editor behavior such as theme, font size,
tab width, and other preferences. Useful for synchronizing editor state
across components or persisting user preferences.

#### Returns

`Promise`\<`EditorConfig`\>

A promise that resolves to the current EditorConfig

#### Example

```typescript
const config = await client.editor.getEditorConfig();
console.log(config); // editor settings object
```

***

### getTree()

```ts
getTree(workspaceId: string, projectName: string): Promise<EditorTreeNode>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/editor.api.ts:30

Retrieves the hierarchical file tree for a workspace project.

Returns a nested tree structure representing all files and directories
within the specified project. Useful for rendering file explorers or
programmatically traversing project contents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `workspaceId` | `string` | The unique identifier of the workspace containing the project |
| `projectName` | `string` | The name of the project whose file tree to retrieve |

#### Returns

`Promise`\<`EditorTreeNode`\>

A promise that resolves to the root EditorTreeNode with nested children

#### Example

```typescript
const tree = await client.editor.getTree('ws-123', 'my-app');
console.log(tree.children); // list of files/directories
```
