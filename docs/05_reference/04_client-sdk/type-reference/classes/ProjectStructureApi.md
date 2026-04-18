---
title: ProjectStructureApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: ProjectStructureApi

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:18

Provides API methods for managing the project's structural metadata and package definitions.

The project structure API maintains a high-level view of the workspace organization including
packages, modules, and their relationships. This metadata helps agents understand the
codebase layout and navigate between components effectively.

## Constructors

### Constructor

```ts
new ProjectStructureApi(http: HttpClient): ProjectStructureApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`ProjectStructureApi`

## Methods

### addItem()

```ts
addItem(
   packageId: string, 
   section: string, 
data: AddSectionItemRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:149

Adds an item to a specific section within a package.

Registers a new item (e.g., a file, class, or endpoint reference) under the specified
section of a package, enriching the structural metadata.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageId` | `string` | The unique identifier of the package |
| `section` | `string` | The name of the section to add the item to (e.g., 'routes', 'models') |
| `data` | `AddSectionItemRequest` | The item definition to add |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the item has been added

#### Example

```typescript
await client.projectStructure.addItem('pkg-auth', 'routes', {
  name: '/api/login',
  type: 'endpoint',
});
```

***

### createPackage()

```ts
createPackage(data: CreatePackageRequest): Promise<PackageDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:87

Creates a new package definition in the project structure.

Adds a logical package to the workspace structure with the given name and configuration.
Packages group related code sections and items together.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `CreatePackageRequest` | The package creation payload |

#### Returns

`Promise`\<`PackageDefinition`\>

A promise that resolves to the newly created package definition

#### Example

```typescript
const pkg = await client.projectStructure.createPackage({
  name: 'authentication',
});
```

***

### deleteItem()

```ts
deleteItem(
   packageId: string, 
   section: string, 
itemId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:164

Removes an item from a package section.

Deletes the structural reference to an item within a package section. This only removes
the metadata entry, not the actual underlying file or resource.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageId` | `string` | The unique identifier of the package |
| `section` | `string` | The name of the section containing the item |
| `itemId` | `string` | The unique identifier of the item to remove |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the item has been removed

***

### deletePackage()

```ts
deletePackage(packageId: string): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:126

Deletes a package and all its sections and items from the project structure.

Permanently removes the package definition. This does not delete actual source files,
only the structural metadata describing the package.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageId` | `string` | The unique identifier of the package to delete |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the package has been deleted

***

### getMetadata()

```ts
getMetadata(): Promise<WorkspaceMetadata>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:35

Retrieves the full workspace metadata including package definitions and structure.

Returns the complete structural representation of the workspace, which describes how
the project is organized into packages, modules, and sections.

#### Returns

`Promise`\<`WorkspaceMetadata`\>

A promise that resolves to the workspace metadata

#### Example

```typescript
const metadata = await client.projectStructure.getMetadata();
console.log(`Packages: ${metadata.packages?.length}`);
```

***

### getPackage()

```ts
getPackage(packageId: string): Promise<PackageDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:99

Retrieves a single package by its unique identifier.

Returns the full package definition including all its sections and items.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageId` | `string` | The unique identifier of the package to retrieve |

#### Returns

`Promise`\<`PackageDefinition`\>

A promise that resolves to the package definition

***

### getPackages()

```ts
getPackages(): Promise<PackageDefinition[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:66

Retrieves all package definitions in the workspace.

Returns the list of logical packages that make up the project, each containing
its sections, items, and metadata.

#### Returns

`Promise`\<`PackageDefinition`[]\>

A promise that resolves to an array of package definitions

#### Example

```typescript
const packages = await client.projectStructure.getPackages();
packages.forEach(pkg => console.log(`${pkg.name}: ${pkg.sections?.length} sections`));
```

***

### saveMetadata()

```ts
saveMetadata(data: SaveWorkspaceMetadataRequest): Promise<void>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:48

Saves the complete workspace metadata, replacing any existing structure.

Persists a full workspace metadata object. This is a wholesale replacement operation;
use the individual package endpoints for targeted updates.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `SaveWorkspaceMetadataRequest` | The complete workspace metadata to save |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the metadata has been saved

***

### updatePackage()

```ts
updatePackage(packageId: string, data: UpdatePackageRequest): Promise<PackageDefinition>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/project-structure.api.ts:113

Updates an existing package definition.

Modifies the metadata and configuration of a package. Does not affect the package's
sections or items; use [addItem](#additem) and [deleteItem](#deleteitem) for those operations.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `packageId` | `string` | The unique identifier of the package to update |
| `data` | `UpdatePackageRequest` | The fields to update on the package |

#### Returns

`Promise`\<`PackageDefinition`\>

A promise that resolves to the updated package definition
