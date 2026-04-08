---
title: UpdateRequestChange
---

[**@codebolt/types**](../index)

***

# Interface: UpdateRequestChange

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:89

Represents all changes to a single package
Mirrors PackageMetadata structure with ChangeWrapper for each section

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="apiroutes"></a> `apiRoutes?` | [`ChangeWrapper`](ChangeWrapper)\<[`ApiRoute`](ApiRoute)\>[] | API routes changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:105](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L105) |
| <a id="database"></a> `database?` | [`DatabaseChange`](DatabaseChange) | Database changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:111](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L111) |
| <a id="dependencies"></a> `dependencies?` | [`ChangeWrapper`](ChangeWrapper)\<[`Dependency`](Dependency)\>[] | Dependency changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:114](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L114) |
| <a id="deploymentconfigs"></a> `deploymentConfigs?` | [`ChangeWrapper`](ChangeWrapper)\<[`DeploymentConfig`](DeploymentConfig)\>[] | Deployment config changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:120](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L120) |
| <a id="designguidelines"></a> `designGuidelines?` | [`ChangeWrapper`](ChangeWrapper)\<[`DesignGuidelines`](DesignGuidelines)\> | Design guidelines change | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:126](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L126) |
| <a id="frontendframework"></a> `frontendFramework?` | [`ChangeWrapper`](ChangeWrapper)\<[`FrameworkInfo`](FrameworkInfo)\> | Frontend framework change | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:123](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L123) |
| <a id="packageaction"></a> `packageAction` | [`ChangeAction`](../type-aliases/ChangeAction) | Action for the package itself | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:93](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L93) |
| <a id="packageid"></a> `packageId` | `string` | Target package ID (existing or new) | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:91](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L91) |
| <a id="packageinfo"></a> `packageInfo?` | [`ChangeWrapper`](ChangeWrapper)\<[`PackageInfoChange`](PackageInfoChange)\> | Package-level info changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L100) |
| <a id="packagename"></a> `packageName?` | `string` | Package name (for display and create) | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:95](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L95) |
| <a id="packagepath"></a> `packagePath?` | `string` | Package path (for create) | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:97](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L97) |
| <a id="runcommands"></a> `runCommands?` | [`ChangeWrapper`](ChangeWrapper)\<[`RunCommand`](RunCommand)\>[] | Run command changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:117](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L117) |
| <a id="uiroutes"></a> `uiRoutes?` | [`ChangeWrapper`](ChangeWrapper)\<[`UiRoute`](UiRoute)\>[] | UI routes changes | [common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts:108](common/types/src/codeboltjstypes/libFunctionTypes/projectStructureUpdateRequest.ts#L108) |
