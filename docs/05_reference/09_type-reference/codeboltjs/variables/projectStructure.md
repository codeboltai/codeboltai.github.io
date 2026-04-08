---
title: projectStructure
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: projectStructure

```ts
const projectStructure: {
  addCommand: (packageId: string, command: Omit<RunCommand, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  addDependency: (packageId: string, dependency: Omit<Dependency, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  addDeployment: (packageId: string, config: Omit<DeploymentConfig, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  addRoute: (packageId: string, route: Omit<ApiRoute, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  addTable: (packageId: string, table: Omit<DatabaseTable, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  addUiRoute: (packageId: string, route: Omit<UiRoute, "id">, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  createPackage: (data: CreatePackageData, workspacePath?: string) => Promise<ProjectStructurePackageResponse>;
  deleteCommand: (packageId: string, commandId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deleteDependency: (packageId: string, dependencyId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deleteDeployment: (packageId: string, configId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deletePackage: (packageId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deleteRoute: (packageId: string, routeId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deleteTable: (packageId: string, tableId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  deleteUiRoute: (packageId: string, routeId: string, workspacePath?: string) => Promise<ProjectStructureDeleteResponse>;
  getMetadata: (workspacePath?: string) => Promise<ProjectStructureMetadataResponse>;
  getPackage: (packageId: string, workspacePath?: string) => Promise<ProjectStructurePackageResponse>;
  getPackages: (workspacePath?: string) => Promise<ProjectStructurePackagesResponse>;
  updateCommand: (packageId: string, commandId: string, updates: Partial<RunCommand>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateDependency: (packageId: string, dependencyId: string, updates: Partial<Dependency>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateDeployment: (packageId: string, configId: string, updates: Partial<DeploymentConfig>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateDesignGuidelines: (packageId: string, guidelines: DesignGuidelines, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateFrontendFramework: (packageId: string, framework: FrameworkInfo, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateGit: (gitInfo: GitInfo, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateMetadata: (updates: Record<string, any>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updatePackage: (packageId: string, updates: UpdatePackageData, workspacePath?: string) => Promise<ProjectStructurePackageResponse>;
  updateRoute: (packageId: string, routeId: string, updates: Partial<ApiRoute>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateSection: (packageId: string, section: string, sectionData: any, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateTable: (packageId: string, tableId: string, updates: Partial<DatabaseTable>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
  updateUiRoute: (packageId: string, routeId: string, updates: Partial<UiRoute>, workspacePath?: string) => Promise<ProjectStructureUpdateResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/projectStructure.ts:28

Project Structure Module for codeboltjs
Provides functionality for managing project metadata, packages, routes, dependencies, etc.
Mirrors the projectStructureService.cli.ts operations via WebSocket.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addcommand"></a> `addCommand()` | (`packageId`: `string`, `command`: `Omit`\<[`RunCommand`](../interfaces/RunCommand), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add a run command to a package | [packages/codeboltjs/src/modules/projectStructure.ts:312](packages/codeboltjs/src/modules/projectStructure.ts#L312) |
| <a id="adddependency"></a> `addDependency()` | (`packageId`: `string`, `dependency`: `Omit`\<[`Dependency`](../interfaces/Dependency), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add a dependency to a package | [packages/codeboltjs/src/modules/projectStructure.ts:260](packages/codeboltjs/src/modules/projectStructure.ts#L260) |
| <a id="adddeployment"></a> `addDeployment()` | (`packageId`: `string`, `config`: `Omit`\<[`DeploymentConfig`](../interfaces/DeploymentConfig), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add a deployment config to a package | [packages/codeboltjs/src/modules/projectStructure.ts:416](packages/codeboltjs/src/modules/projectStructure.ts#L416) |
| <a id="addroute"></a> `addRoute()` | (`packageId`: `string`, `route`: `Omit`\<[`ApiRoute`](../interfaces/ApiRoute), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add an API route to a package | [packages/codeboltjs/src/modules/projectStructure.ts:156](packages/codeboltjs/src/modules/projectStructure.ts#L156) |
| <a id="addtable"></a> `addTable()` | (`packageId`: `string`, `table`: `Omit`\<[`DatabaseTable`](../interfaces/DatabaseTable), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add a database table to a package | [packages/codeboltjs/src/modules/projectStructure.ts:208](packages/codeboltjs/src/modules/projectStructure.ts#L208) |
| <a id="adduiroute"></a> `addUiRoute()` | (`packageId`: `string`, `route`: `Omit`\<[`UiRoute`](../interfaces/UiRoute), `"id"`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Add a UI route to a package | [packages/codeboltjs/src/modules/projectStructure.ts:364](packages/codeboltjs/src/modules/projectStructure.ts#L364) |
| <a id="createpackage"></a> `createPackage()` | (`data`: [`CreatePackageData`](../interfaces/CreatePackageData), `workspacePath?`: `string`) => `Promise`\<[`ProjectStructurePackageResponse`](../interfaces/ProjectStructurePackageResponse)\> | Create a new package | [packages/codeboltjs/src/modules/projectStructure.ts:104](packages/codeboltjs/src/modules/projectStructure.ts#L104) |
| <a id="deletecommand"></a> `deleteCommand()` | (`packageId`: `string`, `commandId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a run command | [packages/codeboltjs/src/modules/projectStructure.ts:344](packages/codeboltjs/src/modules/projectStructure.ts#L344) |
| <a id="deletedependency"></a> `deleteDependency()` | (`packageId`: `string`, `dependencyId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a dependency | [packages/codeboltjs/src/modules/projectStructure.ts:292](packages/codeboltjs/src/modules/projectStructure.ts#L292) |
| <a id="deletedeployment"></a> `deleteDeployment()` | (`packageId`: `string`, `configId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a deployment config | [packages/codeboltjs/src/modules/projectStructure.ts:448](packages/codeboltjs/src/modules/projectStructure.ts#L448) |
| <a id="deletepackage"></a> `deletePackage()` | (`packageId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a package | [packages/codeboltjs/src/modules/projectStructure.ts:136](packages/codeboltjs/src/modules/projectStructure.ts#L136) |
| <a id="deleteroute"></a> `deleteRoute()` | (`packageId`: `string`, `routeId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete an API route | [packages/codeboltjs/src/modules/projectStructure.ts:188](packages/codeboltjs/src/modules/projectStructure.ts#L188) |
| <a id="deletetable"></a> `deleteTable()` | (`packageId`: `string`, `tableId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a database table | [packages/codeboltjs/src/modules/projectStructure.ts:240](packages/codeboltjs/src/modules/projectStructure.ts#L240) |
| <a id="deleteuiroute"></a> `deleteUiRoute()` | (`packageId`: `string`, `routeId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureDeleteResponse`](../interfaces/ProjectStructureDeleteResponse)\> | Delete a UI route | [packages/codeboltjs/src/modules/projectStructure.ts:396](packages/codeboltjs/src/modules/projectStructure.ts#L396) |
| <a id="getmetadata"></a> `getMetadata()` | (`workspacePath?`: `string`) => `Promise`\<[`ProjectStructureMetadataResponse`](../interfaces/ProjectStructureMetadataResponse)\> | Get complete project metadata | [packages/codeboltjs/src/modules/projectStructure.ts:36](packages/codeboltjs/src/modules/projectStructure.ts#L36) |
| <a id="getpackage"></a> `getPackage()` | (`packageId`: `string`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructurePackageResponse`](../interfaces/ProjectStructurePackageResponse)\> | Get a specific package by ID | [packages/codeboltjs/src/modules/projectStructure.ts:88](packages/codeboltjs/src/modules/projectStructure.ts#L88) |
| <a id="getpackages"></a> `getPackages()` | (`workspacePath?`: `string`) => `Promise`\<[`ProjectStructurePackagesResponse`](../interfaces/ProjectStructurePackagesResponse)\> | Get all packages in the workspace | [packages/codeboltjs/src/modules/projectStructure.ts:72](packages/codeboltjs/src/modules/projectStructure.ts#L72) |
| <a id="updatecommand"></a> `updateCommand()` | (`packageId`: `string`, `commandId`: `string`, `updates`: `Partial`\<[`RunCommand`](../interfaces/RunCommand)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a run command | [packages/codeboltjs/src/modules/projectStructure.ts:328](packages/codeboltjs/src/modules/projectStructure.ts#L328) |
| <a id="updatedependency"></a> `updateDependency()` | (`packageId`: `string`, `dependencyId`: `string`, `updates`: `Partial`\<[`Dependency`](../interfaces/Dependency)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a dependency | [packages/codeboltjs/src/modules/projectStructure.ts:276](packages/codeboltjs/src/modules/projectStructure.ts#L276) |
| <a id="updatedeployment"></a> `updateDeployment()` | (`packageId`: `string`, `configId`: `string`, `updates`: `Partial`\<[`DeploymentConfig`](../interfaces/DeploymentConfig)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a deployment config | [packages/codeboltjs/src/modules/projectStructure.ts:432](packages/codeboltjs/src/modules/projectStructure.ts#L432) |
| <a id="updatedesignguidelines"></a> `updateDesignGuidelines()` | (`packageId`: `string`, `guidelines`: [`DesignGuidelines`](../interfaces/DesignGuidelines), `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update design guidelines for a package | [packages/codeboltjs/src/modules/projectStructure.ts:484](packages/codeboltjs/src/modules/projectStructure.ts#L484) |
| <a id="updatefrontendframework"></a> `updateFrontendFramework()` | (`packageId`: `string`, `framework`: [`FrameworkInfo`](../interfaces/FrameworkInfo), `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update frontend framework for a package | [packages/codeboltjs/src/modules/projectStructure.ts:500](packages/codeboltjs/src/modules/projectStructure.ts#L500) |
| <a id="updategit"></a> `updateGit()` | (`gitInfo`: [`GitInfo`](../interfaces/GitInfo), `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update git information | [packages/codeboltjs/src/modules/projectStructure.ts:468](packages/codeboltjs/src/modules/projectStructure.ts#L468) |
| <a id="updatemetadata"></a> `updateMetadata()` | (`updates`: `Record`\<`string`, `any`\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update workspace metadata | [packages/codeboltjs/src/modules/projectStructure.ts:52](packages/codeboltjs/src/modules/projectStructure.ts#L52) |
| <a id="updatepackage"></a> `updatePackage()` | (`packageId`: `string`, `updates`: [`UpdatePackageData`](../interfaces/UpdatePackageData), `workspacePath?`: `string`) => `Promise`\<[`ProjectStructurePackageResponse`](../interfaces/ProjectStructurePackageResponse)\> | Update a package | [packages/codeboltjs/src/modules/projectStructure.ts:120](packages/codeboltjs/src/modules/projectStructure.ts#L120) |
| <a id="updateroute"></a> `updateRoute()` | (`packageId`: `string`, `routeId`: `string`, `updates`: `Partial`\<[`ApiRoute`](../interfaces/ApiRoute)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update an API route | [packages/codeboltjs/src/modules/projectStructure.ts:172](packages/codeboltjs/src/modules/projectStructure.ts#L172) |
| <a id="updatesection"></a> `updateSection()` | (`packageId`: `string`, `section`: `string`, `sectionData`: `any`, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a specific section of a package | [packages/codeboltjs/src/modules/projectStructure.ts:516](packages/codeboltjs/src/modules/projectStructure.ts#L516) |
| <a id="updatetable"></a> `updateTable()` | (`packageId`: `string`, `tableId`: `string`, `updates`: `Partial`\<[`DatabaseTable`](../interfaces/DatabaseTable)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a database table | [packages/codeboltjs/src/modules/projectStructure.ts:224](packages/codeboltjs/src/modules/projectStructure.ts#L224) |
| <a id="updateuiroute"></a> `updateUiRoute()` | (`packageId`: `string`, `routeId`: `string`, `updates`: `Partial`\<[`UiRoute`](../interfaces/UiRoute)\>, `workspacePath?`: `string`) => `Promise`\<[`ProjectStructureUpdateResponse`](../interfaces/ProjectStructureUpdateResponse)\> | Update a UI route | [packages/codeboltjs/src/modules/projectStructure.ts:380](packages/codeboltjs/src/modules/projectStructure.ts#L380) |
