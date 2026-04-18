---
cbapicategory:
  - name: getDetail
    link: /docs/reference/client-sdk/api-reference/actionBlocks/getDetail
    description: "Retrieves detailed information for a specific action block.

Returns the full configuration, metadata, and current state of the
action block identified by the given identifier string."
  - name: getExecutions
    link: /docs/reference/client-sdk/api-reference/actionBlocks/getExecutions
    description: "Retrieves execution records for action blocks.

Returns a list of past and current executions, useful for monitoring
which action blocks have run and their outcomes."
  - name: getStats
    link: /docs/reference/client-sdk/api-reference/actionBlocks/getStats
    description: "Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system."
  - name: getTypes
    link: /docs/reference/client-sdk/api-reference/actionBlocks/getTypes
    description: "Retrieves the list of available action block types.

Returns the distinct type identifiers that can be used when creating
or filtering action blocks."
  - name: list
    link: /docs/reference/client-sdk/api-reference/actionBlocks/list
    description: "Retrieves all registered action blocks.

Returns the full list of action blocks available in the current workspace.
Use optional query parameters to paginate or filter the results."
  - name: refresh
    link: /docs/reference/client-sdk/api-reference/actionBlocks/refresh
    description: "Refreshes the action block registry.

Forces a re-scan and reload of all registered action blocks, picking up
any newly added or modified block definitions."
  - name: stop
    link: /docs/reference/client-sdk/api-reference/actionBlocks/stop
    description: "Stops a currently running action block execution.

Sends a stop signal to the specified action block execution, causing it
to terminate gracefully. Use this to cancel long-running or stuck executions."
---
# ActionBlocks API

Action Blocks API

<CBAPICategory />

## Methods

- [`getDetail()`](./getDetail) — Retrieves detailed information for a specific action block.

Returns the full configuration, metadata, and current state of the
action block identified by the given identifier string.
- [`getExecutions()`](./getExecutions) — Retrieves execution records for action blocks.

Returns a list of past and current executions, useful for monitoring
which action blocks have run and their outcomes.
- [`getStats()`](./getStats) — Retrieves aggregate statistics about action blocks.

Returns counts, success rates, and other summary metrics for all
action blocks in the system.
- [`getTypes()`](./getTypes) — Retrieves the list of available action block types.

Returns the distinct type identifiers that can be used when creating
or filtering action blocks.
- [`list()`](./list) — Retrieves all registered action blocks.

Returns the full list of action blocks available in the current workspace.
Use optional query parameters to paginate or filter the results.
- [`refresh()`](./refresh) — Refreshes the action block registry.

Forces a re-scan and reload of all registered action blocks, picking up
any newly added or modified block definitions.
- [`stop()`](./stop) — Stops a currently running action block execution.

Sends a stop signal to the specified action block execution, causing it
to terminate gracefully. Use this to cancel long-running or stuck executions.
