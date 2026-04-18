---
cbapicategory:
  - name: delete
    link: /docs/reference/client-sdk/api-reference/codemap/delete
    description: "Deletes a codemap by its ID.

Permanently removes the codemap from the system. The underlying
source files are not affected."
  - name: generate
    link: /docs/reference/client-sdk/api-reference/codemap/generate
    description: "Generates a new codemap for specified files.

Parses the target files and produces a structural representation
capturing symbols, dependencies, and relationships."
  - name: get
    link: /docs/reference/client-sdk/api-reference/codemap/get
    description: "Retrieves a specific codemap by its ID.

Returns the full structural representation including all symbols,
relationships, and metadata."
  - name: getByPath
    link: /docs/reference/client-sdk/api-reference/codemap/getByPath
    description: "Retrieves codemap entries by file path.

Looks up codemaps associated with a specific file path, returning
all structural information for that file."
  - name: list
    link: /docs/reference/client-sdk/api-reference/codemap/list
    description: "Lists all codemaps.

Returns every codemap that has been generated in the current workspace."
---
# Codemap API

Codemap API

<CBAPICategory />

## Methods

- [`delete()`](./delete) — Deletes a codemap by its ID.

Permanently removes the codemap from the system. The underlying
source files are not affected.
- [`generate()`](./generate) — Generates a new codemap for specified files.

Parses the target files and produces a structural representation
capturing symbols, dependencies, and relationships.
- [`get()`](./get) — Retrieves a specific codemap by its ID.

Returns the full structural representation including all symbols,
relationships, and metadata.
- [`getByPath()`](./getByPath) — Retrieves codemap entries by file path.

Looks up codemaps associated with a specific file path, returning
all structural information for that file.
- [`list()`](./list) — Lists all codemaps.

Returns every codemap that has been generated in the current workspace.
