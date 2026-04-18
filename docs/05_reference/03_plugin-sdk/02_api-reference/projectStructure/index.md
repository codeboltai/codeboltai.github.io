---
title: ProjectStructure API
---

# ProjectStructure API

The `projectStructure` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`addCommand`](./addCommand) | Add a run command to a package |
| [`addDependency`](./addDependency) | Add a dependency to a package |
| [`addDeployment`](./addDeployment) | Add a deployment config to a package |
| [`addRoute`](./addRoute) | Add an API route to a package |
| [`addTable`](./addTable) | Add a database table to a package |
| [`addUiRoute`](./addUiRoute) | Add a UI route to a package |
| [`createPackage`](./createPackage) | Create a new package |
| [`deleteCommand`](./deleteCommand) | Delete a run command |
| [`deleteDependency`](./deleteDependency) | Delete a dependency |
| [`deleteDeployment`](./deleteDeployment) | Delete a deployment config |
| [`deletePackage`](./deletePackage) | Delete a package |
| [`deleteRoute`](./deleteRoute) | Delete an API route |
| [`deleteTable`](./deleteTable) | Delete a database table |
| [`deleteUiRoute`](./deleteUiRoute) | Delete a UI route |
| [`getMetadata`](./getMetadata) | Get complete project metadata |
| [`getPackage`](./getPackage) | Get a specific package by ID |
| [`getPackages`](./getPackages) | Get all packages in the workspace |
| [`updateCommand`](./updateCommand) | Update a run command |
| [`updateDependency`](./updateDependency) | Update a dependency |
| [`updateDeployment`](./updateDeployment) | Update a deployment config |
| [`updateDesignGuidelines`](./updateDesignGuidelines) | Update design guidelines for a package |
| [`updateFrontendFramework`](./updateFrontendFramework) | Update frontend framework for a package |
| [`updateGit`](./updateGit) | Update git information |
| [`updateMetadata`](./updateMetadata) | Update workspace metadata |
| [`updatePackage`](./updatePackage) | Update a package |
| [`updateRoute`](./updateRoute) | Update an API route |
| [`updateSection`](./updateSection) | Update a specific section of a package |
| [`updateTable`](./updateTable) | Update a database table |
| [`updateUiRoute`](./updateUiRoute) | Update a UI route |

## Methods

---

### `addCommand`

```typescript
plugin.projectStructure.addCommand(packageId: string, command: Omit<RunCommand, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a run command to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `command` | `Omit<RunCommand, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addCommand)

---

### `addDependency`

```typescript
plugin.projectStructure.addDependency(packageId: string, dependency: Omit<Dependency, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a dependency to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependency` | `Omit<Dependency, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addDependency)

---

### `addDeployment`

```typescript
plugin.projectStructure.addDeployment(packageId: string, config: Omit<DeploymentConfig, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a deployment config to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `config` | `Omit<DeploymentConfig, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addDeployment)

---

### `addRoute`

```typescript
plugin.projectStructure.addRoute(packageId: string, route: Omit<ApiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add an API route to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `route` | `Omit<ApiRoute, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addRoute)

---

### `addTable`

```typescript
plugin.projectStructure.addTable(packageId: string, table: Omit<DatabaseTable, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a database table to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `table` | `Omit<DatabaseTable, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addTable)

---

### `addUiRoute`

```typescript
plugin.projectStructure.addUiRoute(packageId: string, route: Omit<UiRoute, "id">, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Add a UI route to a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `route` | `Omit<UiRoute, "id">` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./addUiRoute)

---

### `createPackage`

```typescript
plugin.projectStructure.createPackage(data: CreatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Create a new package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreatePackageData` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructurePackageResponse>`

[Full reference →](./createPackage)

---

### `deleteCommand`

```typescript
plugin.projectStructure.deleteCommand(packageId: string, commandId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a run command

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `commandId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteCommand)

---

### `deleteDependency`

```typescript
plugin.projectStructure.deleteDependency(packageId: string, dependencyId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a dependency

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependencyId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteDependency)

---

### `deleteDeployment`

```typescript
plugin.projectStructure.deleteDeployment(packageId: string, configId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a deployment config

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `configId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteDeployment)

---

### `deletePackage`

```typescript
plugin.projectStructure.deletePackage(packageId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deletePackage)

---

### `deleteRoute`

```typescript
plugin.projectStructure.deleteRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete an API route

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteRoute)

---

### `deleteTable`

```typescript
plugin.projectStructure.deleteTable(packageId: string, tableId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a database table

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `tableId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteTable)

---

### `deleteUiRoute`

```typescript
plugin.projectStructure.deleteUiRoute(packageId: string, routeId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a UI route

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureDeleteResponse>`

[Full reference →](./deleteUiRoute)

---

### `getMetadata`

```typescript
plugin.projectStructure.getMetadata(workspacePath?: string): Promise<ProjectStructureMetadataResponse>
```

Get complete project metadata

| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureMetadataResponse>`

[Full reference →](./getMetadata)

---

### `getPackage`

```typescript
plugin.projectStructure.getPackage(packageId: string, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Get a specific package by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructurePackageResponse>`

[Full reference →](./getPackage)

---

### `getPackages`

```typescript
plugin.projectStructure.getPackages(workspacePath?: string): Promise<ProjectStructurePackagesResponse>
```

Get all packages in the workspace

| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructurePackagesResponse>`

[Full reference →](./getPackages)

---

### `updateCommand`

```typescript
plugin.projectStructure.updateCommand(packageId: string, commandId: string, updates: Partial<RunCommand>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a run command

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `commandId` | `string` | Yes |  |
| `updates` | `Partial<RunCommand>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateCommand)

---

### `updateDependency`

```typescript
plugin.projectStructure.updateDependency(packageId: string, dependencyId: string, updates: Partial<Dependency>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a dependency

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `dependencyId` | `string` | Yes |  |
| `updates` | `Partial<Dependency>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateDependency)

---

### `updateDeployment`

```typescript
plugin.projectStructure.updateDeployment(packageId: string, configId: string, updates: Partial<DeploymentConfig>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a deployment config

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `configId` | `string` | Yes |  |
| `updates` | `Partial<DeploymentConfig>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateDeployment)

---

### `updateDesignGuidelines`

```typescript
plugin.projectStructure.updateDesignGuidelines(packageId: string, guidelines: DesignGuidelines, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update design guidelines for a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `guidelines` | `DesignGuidelines` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateDesignGuidelines)

---

### `updateFrontendFramework`

```typescript
plugin.projectStructure.updateFrontendFramework(packageId: string, framework: FrameworkInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update frontend framework for a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `framework` | `FrameworkInfo` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateFrontendFramework)

---

### `updateGit`

```typescript
plugin.projectStructure.updateGit(gitInfo: GitInfo, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update git information

| Parameter | Type | Required | Description |
|---|---|---|---|
| `gitInfo` | `GitInfo` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateGit)

---

### `updateMetadata`

```typescript
plugin.projectStructure.updateMetadata(updates: Record<string, any>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update workspace metadata

| Parameter | Type | Required | Description |
|---|---|---|---|
| `updates` | `Record<string, any>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateMetadata)

---

### `updatePackage`

```typescript
plugin.projectStructure.updatePackage(packageId: string, updates: UpdatePackageData, workspacePath?: string): Promise<ProjectStructurePackageResponse>
```

Update a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `updates` | `UpdatePackageData` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructurePackageResponse>`

[Full reference →](./updatePackage)

---

### `updateRoute`

```typescript
plugin.projectStructure.updateRoute(packageId: string, routeId: string, updates: Partial<ApiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update an API route

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `updates` | `Partial<ApiRoute>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateRoute)

---

### `updateSection`

```typescript
plugin.projectStructure.updateSection(packageId: string, section: string, sectionData: any, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a specific section of a package

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `section` | `string` | Yes |  |
| `sectionData` | `any` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateSection)

---

### `updateTable`

```typescript
plugin.projectStructure.updateTable(packageId: string, tableId: string, updates: Partial<DatabaseTable>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a database table

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `tableId` | `string` | Yes |  |
| `updates` | `Partial<DatabaseTable>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateTable)

---

### `updateUiRoute`

```typescript
plugin.projectStructure.updateUiRoute(packageId: string, routeId: string, updates: Partial<UiRoute>, workspacePath?: string): Promise<ProjectStructureUpdateResponse>
```

Update a UI route

| Parameter | Type | Required | Description |
|---|---|---|---|
| `packageId` | `string` | Yes |  |
| `routeId` | `string` | Yes |  |
| `updates` | `Partial<UiRoute>` | Yes |  |
| `workspacePath` | `string` | No |  |

**Returns:** `Promise<ProjectStructureUpdateResponse>`

[Full reference →](./updateUiRoute)

