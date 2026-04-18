---
cbapicategory:
  - name: addItem
    link: /docs/reference/client-sdk/api-reference/projectStructure/addItem
    description: "Adds an item to a specific section within a package.

Registers a new item (e.g., a file, class, or endpoint reference) under the specified
section of a package, enriching the structural metadata."
  - name: createPackage
    link: /docs/reference/client-sdk/api-reference/projectStructure/createPackage
    description: "Creates a new package definition in the project structure.

Adds a logical package to the workspace structure with the given name and configuration.
Packages group related code sections and items together."
  - name: deleteItem
    link: /docs/reference/client-sdk/api-reference/projectStructure/deleteItem
    description: "Removes an item from a package section.

Deletes the structural reference to an item within a package section. This only removes
the metadata entry, not the actual underlying file or resource."
  - name: deletePackage
    link: /docs/reference/client-sdk/api-reference/projectStructure/deletePackage
    description: "Deletes a package and all its sections and items from the project structure.

Permanently removes the package definition. This does not delete actual source files,
only the structural metadata describing the package."
  - name: getMetadata
    link: /docs/reference/client-sdk/api-reference/projectStructure/getMetadata
    description: "Retrieves the full workspace metadata including package definitions and structure.

Returns the complete structural representation of the workspace, which describes how
the project is organized into packages, modules, and sections."
  - name: getPackage
    link: /docs/reference/client-sdk/api-reference/projectStructure/getPackage
    description: "Retrieves a single package by its unique identifier.

Returns the full package definition including all its sections and items."
  - name: getPackages
    link: /docs/reference/client-sdk/api-reference/projectStructure/getPackages
    description: "Retrieves all package definitions in the workspace.

Returns the list of logical packages that make up the project, each containing
its sections, items, and metadata."
  - name: saveMetadata
    link: /docs/reference/client-sdk/api-reference/projectStructure/saveMetadata
    description: "Saves the complete workspace metadata, replacing any existing structure.

Persists a full workspace metadata object. This is a wholesale replacement operation;
use the individual package endpoints for targeted updates."
  - name: updatePackage
    link: /docs/reference/client-sdk/api-reference/projectStructure/updatePackage
    description: "Updates an existing package definition.

Modifies the metadata and configuration of a package. Does not affect the package's
sections or items; use  and  for those operations."
---
# ProjectStructure API

Project Structure API

<CBAPICategory />

## Methods

- [`addItem()`](./addItem) — Adds an item to a specific section within a package.

Registers a new item (e.g., a file, class, or endpoint reference) under the specified
section of a package, enriching the structural metadata.
- [`createPackage()`](./createPackage) — Creates a new package definition in the project structure.

Adds a logical package to the workspace structure with the given name and configuration.
Packages group related code sections and items together.
- [`deleteItem()`](./deleteItem) — Removes an item from a package section.

Deletes the structural reference to an item within a package section. This only removes
the metadata entry, not the actual underlying file or resource.
- [`deletePackage()`](./deletePackage) — Deletes a package and all its sections and items from the project structure.

Permanently removes the package definition. This does not delete actual source files,
only the structural metadata describing the package.
- [`getMetadata()`](./getMetadata) — Retrieves the full workspace metadata including package definitions and structure.

Returns the complete structural representation of the workspace, which describes how
the project is organized into packages, modules, and sections.
- [`getPackage()`](./getPackage) — Retrieves a single package by its unique identifier.

Returns the full package definition including all its sections and items.
- [`getPackages()`](./getPackages) — Retrieves all package definitions in the workspace.

Returns the list of logical packages that make up the project, each containing
its sections, items, and metadata.
- [`saveMetadata()`](./saveMetadata) — Saves the complete workspace metadata, replacing any existing structure.

Persists a full workspace metadata object. This is a wholesale replacement operation;
use the individual package endpoints for targeted updates.
- [`updatePackage()`](./updatePackage) — Updates an existing package definition.

Modifies the metadata and configuration of a package. Does not affect the package's
sections or items; use  and  for those operations.
