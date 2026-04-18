---
cbapicategory:
  - name: cleanup
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/cleanup
    description: "Cleans up old agent debug data.

Removes debug records that are older than the specified threshold.
Use this to free up storage and keep the debug system performant."
  - name: getBySwarm
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getBySwarm
    description: "Retrieves agent instances associated with a specific swarm.

Returns all debug instances that belong to the given swarm, useful for
inspecting multi-agent coordination."
  - name: getByThread
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getByThread
    description: "Retrieves agent instances associated with a specific thread.

Returns all debug instances that were spawned within or are linked to
the given thread ID."
  - name: getFilteredInstances
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getFilteredInstances
    description: "Retrieves agent instances matching specific filter criteria.

Supports filtering by status, agent type, thread ID, swarm ID, and
whether the agent is running in the background."
  - name: getInstance
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getInstance
    description: "Retrieves details for a specific agent debug instance.

Returns the full debug record for a single agent instance including
its configuration, status, timing, and metadata."
  - name: getInstanceLogs
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getInstanceLogs
    description: "Retrieves parsed and structured logs for a specific agent instance.

Returns logs that have been parsed into structured AgentDebugLog objects,
making them easier to analyze programmatically. Supports pagination
through offset and limit parameters."
  - name: getInstanceRawLogs
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getInstanceRawLogs
    description: "Retrieves raw, unprocessed logs for a specific agent instance.

Returns the raw log output as produced by the agent, without any
parsing or structuring. Useful for debugging issues not captured
by the structured log parser."
  - name: getInstances
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getInstances
    description: "Retrieves all agent debug instances.

Returns every agent instance that has been tracked by the debug system,
regardless of its current status."
  - name: getRunning
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/getRunning
    description: "Retrieves all currently running agent instances.

A convenience method that returns only instances with an active/running status,
useful for real-time monitoring dashboards."
  - name: rebuildIndex
    link: /docs/reference/client-sdk/api-reference/agentDebugApi/rebuildIndex
    description: "Rebuilds the agent debug index.

Forces a full re-index of all agent debug data. This can resolve
issues with missing or inconsistent search results in the debug interface."
---
# AgentDebugApi API

Agent Debug API

<CBAPICategory />

## Methods

- [`cleanup()`](./cleanup) — Cleans up old agent debug data.

Removes debug records that are older than the specified threshold.
Use this to free up storage and keep the debug system performant.
- [`getBySwarm()`](./getBySwarm) — Retrieves agent instances associated with a specific swarm.

Returns all debug instances that belong to the given swarm, useful for
inspecting multi-agent coordination.
- [`getByThread()`](./getByThread) — Retrieves agent instances associated with a specific thread.

Returns all debug instances that were spawned within or are linked to
the given thread ID.
- [`getFilteredInstances()`](./getFilteredInstances) — Retrieves agent instances matching specific filter criteria.

Supports filtering by status, agent type, thread ID, swarm ID, and
whether the agent is running in the background.
- [`getInstance()`](./getInstance) — Retrieves details for a specific agent debug instance.

Returns the full debug record for a single agent instance including
its configuration, status, timing, and metadata.
- [`getInstanceLogs()`](./getInstanceLogs) — Retrieves parsed and structured logs for a specific agent instance.

Returns logs that have been parsed into structured AgentDebugLog objects,
making them easier to analyze programmatically. Supports pagination
through offset and limit parameters.
- [`getInstanceRawLogs()`](./getInstanceRawLogs) — Retrieves raw, unprocessed logs for a specific agent instance.

Returns the raw log output as produced by the agent, without any
parsing or structuring. Useful for debugging issues not captured
by the structured log parser.
- [`getInstances()`](./getInstances) — Retrieves all agent debug instances.

Returns every agent instance that has been tracked by the debug system,
regardless of its current status.
- [`getRunning()`](./getRunning) — Retrieves all currently running agent instances.

A convenience method that returns only instances with an active/running status,
useful for real-time monitoring dashboards.
- [`rebuildIndex()`](./rebuildIndex) — Rebuilds the agent debug index.

Forces a full re-index of all agent debug data. This can resolve
issues with missing or inconsistent search results in the debug interface.
