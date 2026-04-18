---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/specs/create
    description: "Creates a new specification document.

Registers a new spec with the system using the provided content.
The spec can include technical details, API definitions, architecture
descriptions, and other structured specification information."
  - name: ensureFolder
    link: /docs/reference/client-sdk/api-reference/specs/ensureFolder
    description: "Ensures the specs folder exists in the workspace.

Creates the specification directory if it doesn't already exist,
establishing a location for storing spec files and related documentation.
This operation is idempotent and safe to call multiple times."
  - name: get
    link: /docs/reference/client-sdk/api-reference/specs/get
    description: "Retrieves a specific specification document.

Returns the spec matching the provided query parameters, typically
by spec ID or project. The document includes all sections, metadata,
and version information."
  - name: list
    link: /docs/reference/client-sdk/api-reference/specs/list
    description: "Lists all specification documents.

Returns every spec document in the system, optionally filtered by
project, type, or other criteria. Use this for browsing specs or
populating specification management UIs."
  - name: update
    link: /docs/reference/client-sdk/api-reference/specs/update
    description: "Updates an existing specification document.

Modifies the content, metadata, or structure of a spec. Use this to
add new sections, update information, change versions, or make other
modifications as specifications evolve."
---
# Specs API

Specs API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new specification document.

Registers a new spec with the system using the provided content.
The spec can include technical details, API definitions, architecture
descriptions, and other structured specification information.
- [`ensureFolder()`](./ensureFolder) — Ensures the specs folder exists in the workspace.

Creates the specification directory if it doesn't already exist,
establishing a location for storing spec files and related documentation.
This operation is idempotent and safe to call multiple times.
- [`get()`](./get) — Retrieves a specific specification document.

Returns the spec matching the provided query parameters, typically
by spec ID or project. The document includes all sections, metadata,
and version information.
- [`list()`](./list) — Lists all specification documents.

Returns every spec document in the system, optionally filtered by
project, type, or other criteria. Use this for browsing specs or
populating specification management UIs.
- [`update()`](./update) — Updates an existing specification document.

Modifies the content, metadata, or structure of a spec. Use this to
add new sections, update information, change versions, or make other
modifications as specifications evolve.
