---
cbapicategory:
  - name: change
    link: /docs/reference/client-sdk/api-reference/workspace/change
    description: "Changes the active workspace to the specified one.

Updates the active workspace context directly without requiring
a separate selection object. This is a simplified version of the
select operation for quick workspace switching."
  - name: getById
    link: /docs/reference/client-sdk/api-reference/workspace/getById
    description: "Retrieves a specific workspace by its unique identifier.

Returns detailed information about a single workspace including
its settings, members, projects, and configuration metadata."
  - name: list
    link: /docs/reference/client-sdk/api-reference/workspace/list
    description: "Lists all available workspaces for the current user.

Returns every workspace the user has access to, including their
personal workspaces and any shared workspaces. Useful for workspace
browsing and selection UIs."
  - name: listProjects
    link: /docs/reference/client-sdk/api-reference/workspace/listProjects
    description: "Lists all projects in the current workspace.

Returns an array of workspace projects with their metadata and status.
Use this to display available projects or navigate between them."
  - name: select
    link: /docs/reference/client-sdk/api-reference/workspace/select
    description: "Selects a workspace as the active context.

Switches the active workspace to the specified one, updating all
subsequent API calls to operate within that workspace context.
This affects project selection, file access, and other operations."
---
# Workspace API

Workspace API

<CBAPICategory />

## Methods

- [`change()`](./change) — Changes the active workspace to the specified one.

Updates the active workspace context directly without requiring
a separate selection object. This is a simplified version of the
select operation for quick workspace switching.
- [`getById()`](./getById) — Retrieves a specific workspace by its unique identifier.

Returns detailed information about a single workspace including
its settings, members, projects, and configuration metadata.
- [`list()`](./list) — Lists all available workspaces for the current user.

Returns every workspace the user has access to, including their
personal workspaces and any shared workspaces. Useful for workspace
browsing and selection UIs.
- [`listProjects()`](./listProjects) — Lists all projects in the current workspace.

Returns an array of workspace projects with their metadata and status.
Use this to display available projects or navigate between them.
- [`select()`](./select) — Selects a workspace as the active context.

Switches the active workspace to the specified one, updating all
subsequent API calls to operate within that workspace context.
This affects project selection, file access, and other operations.
