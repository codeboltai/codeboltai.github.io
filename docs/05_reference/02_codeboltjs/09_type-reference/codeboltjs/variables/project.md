---
title: project
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: project

```ts
const project: {
  getEditorFileStatus: () => Promise<any>;
  getProjectPath: () => Promise<GetProjectPathResponse>;
  getProjectSettings: () => Promise<GetProjectSettingsResponse>;
  getRepoMap: (message: any) => Promise<GetProjectPathResponse>;
  runProject: () => void;
};
```

Defined in: packages/codeboltjs/src/modules/project.ts:8

A module for interacting with project settings and paths.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="geteditorfilestatus"></a> `getEditorFileStatus()` | () => `Promise`\<`any`\> | - | packages/codeboltjs/src/modules/project.ts:51 |
| <a id="getprojectpath"></a> `getProjectPath()` | () => `Promise`\<`GetProjectPathResponse`\> | Retrieves the path of the current project. | packages/codeboltjs/src/modules/project.ts:26 |
| <a id="getprojectsettings"></a> `getProjectSettings()` | () => `Promise`\<`GetProjectSettingsResponse`\> | Retrieves the project settings from the server. | packages/codeboltjs/src/modules/project.ts:13 |
| <a id="getrepomap"></a> `getRepoMap()` | (`message`: `any`) => `Promise`\<`GetProjectPathResponse`\> | - | packages/codeboltjs/src/modules/project.ts:35 |
| <a id="runproject"></a> `runProject()` | () => `void` | - | packages/codeboltjs/src/modules/project.ts:45 |
