---
cbapicategory:
  - name: cleanup
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/cleanup
    description: "Cleans up stale or orphaned environment instances.

Removes environment instances that are no longer active or have been
orphaned due to provider failures. This is a maintenance operation that
should be run periodically to keep the debug index clean."
  - name: getByProvider
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/getByProvider
    description: "Retrieves environment instances associated with a specific provider.

Filters instances by the provider that created or manages them, useful
for diagnosing issues with a particular environment provider."
  - name: getInstance
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/getInstance
    description: "Retrieves a specific environment debug instance by its ID.

Returns the full detail of a single environment instance including
its current state, provider information, and metadata."
  - name: getInstanceLogs
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/getInstanceLogs
    description: "Retrieves parsed logs for an environment debug instance.

Returns structured log entries that have been parsed from raw output,
making them easier to filter, search, and display in a UI."
  - name: getInstanceRawLogs
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/getInstanceRawLogs
    description: "Retrieves raw, unprocessed logs for an environment debug instance.

Returns the original log output without parsing or structuring. Useful
for debugging cases where parsed logs may lose important context."
  - name: getRunningInstances
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/getRunningInstances
    description: "Retrieves all currently running environment instances.

Returns only instances that are in an active/running state, which is
useful for monitoring dashboards and health checks."
  - name: listFilteredInstances
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/listFilteredInstances
    description: "Lists environment debug instances matching specific filter criteria.

Similar to  but applies additional server-side
filtering such as status, date range, or provider constraints."
  - name: listInstances
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/listInstances
    description: "Lists all environment debug instances.

Returns every known environment instance regardless of state. Use the
optional parameters to paginate or filter results server-side."
  - name: rebuildIndex
    link: /docs/reference/client-sdk/api-reference/environmentDebugApi/rebuildIndex
    description: "Rebuilds the environment debug index from scratch.

Triggers a full re-indexing of all environment instances. Use this when
the index becomes inconsistent or after bulk data migrations."
---
# EnvironmentDebugApi API

Environment Debug API

<CBAPICategory />

## Methods

- [`cleanup()`](./cleanup) — Cleans up stale or orphaned environment instances.

Removes environment instances that are no longer active or have been
orphaned due to provider failures. This is a maintenance operation that
should be run periodically to keep the debug index clean.
- [`getByProvider()`](./getByProvider) — Retrieves environment instances associated with a specific provider.

Filters instances by the provider that created or manages them, useful
for diagnosing issues with a particular environment provider.
- [`getInstance()`](./getInstance) — Retrieves a specific environment debug instance by its ID.

Returns the full detail of a single environment instance including
its current state, provider information, and metadata.
- [`getInstanceLogs()`](./getInstanceLogs) — Retrieves parsed logs for an environment debug instance.

Returns structured log entries that have been parsed from raw output,
making them easier to filter, search, and display in a UI.
- [`getInstanceRawLogs()`](./getInstanceRawLogs) — Retrieves raw, unprocessed logs for an environment debug instance.

Returns the original log output without parsing or structuring. Useful
for debugging cases where parsed logs may lose important context.
- [`getRunningInstances()`](./getRunningInstances) — Retrieves all currently running environment instances.

Returns only instances that are in an active/running state, which is
useful for monitoring dashboards and health checks.
- [`listFilteredInstances()`](./listFilteredInstances) — Lists environment debug instances matching specific filter criteria.

Similar to  but applies additional server-side
filtering such as status, date range, or provider constraints.
- [`listInstances()`](./listInstances) — Lists all environment debug instances.

Returns every known environment instance regardless of state. Use the
optional parameters to paginate or filter results server-side.
- [`rebuildIndex()`](./rebuildIndex) — Rebuilds the environment debug index from scratch.

Triggers a full re-indexing of all environment instances. Use this when
the index becomes inconsistent or after bulk data migrations.
