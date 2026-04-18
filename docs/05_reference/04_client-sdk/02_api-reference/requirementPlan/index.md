---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/requirementPlan/create
    description: "Creates a new requirement plan.

Registers a new requirement plan with the system using the provided
specification. The plan can include project goals, feature lists,
acceptance criteria, and other requirement documentation."
  - name: ensureFolder
    link: /docs/reference/client-sdk/api-reference/requirementPlan/ensureFolder
    description: "Ensures the requirement plan folder exists in the workspace.

Creates the requirement plan directory if it doesn't already exist,
establishing a location for storing plan files and related documents.
This operation is idempotent and safe to call multiple times."
  - name: get
    link: /docs/reference/client-sdk/api-reference/requirementPlan/get
    description: "Retrieves a requirement plan based on query parameters.

Returns the plan matching the specified criteria, typically by project
ID or plan name. If multiple plans match, the most relevant one is returned."
  - name: update
    link: /docs/reference/client-sdk/api-reference/requirementPlan/update
    description: "Updates an existing requirement plan.

Modifies the content, status, or structure of a requirement plan.
Use this to add new requirements, update priorities, change status,
or make other modifications as the project evolves."
---
# RequirementPlan API

Requirement Plan API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new requirement plan.

Registers a new requirement plan with the system using the provided
specification. The plan can include project goals, feature lists,
acceptance criteria, and other requirement documentation.
- [`ensureFolder()`](./ensureFolder) — Ensures the requirement plan folder exists in the workspace.

Creates the requirement plan directory if it doesn't already exist,
establishing a location for storing plan files and related documents.
This operation is idempotent and safe to call multiple times.
- [`get()`](./get) — Retrieves a requirement plan based on query parameters.

Returns the plan matching the specified criteria, typically by project
ID or plan name. If multiple plans match, the most relevant one is returned.
- [`update()`](./update) — Updates an existing requirement plan.

Modifies the content, status, or structure of a requirement plan.
Use this to add new requirements, update priorities, change status,
or make other modifications as the project evolves.
