---
cbapicategory:
  - name: cleanupExecutions
    link: /docs/reference/client-sdk/api-reference/agentExecution/cleanupExecutions
    description: "Cleans up old execution records.

Removes execution records older than the specified threshold to free
up storage and keep the system performant."
  - name: getExecution
    link: /docs/reference/client-sdk/api-reference/agentExecution/getExecution
    description: "Retrieves the execution record for a specific thread.

Returns detailed execution information including timing, status,
agent configuration, and outcome for the given thread."
  - name: getExecutions
    link: /docs/reference/client-sdk/api-reference/agentExecution/getExecutions
    description: "Retrieves all agent execution records.

Returns the complete history of agent executions, useful for auditing
and monitoring agent activity over time."
  - name: getExecutionTree
    link: /docs/reference/client-sdk/api-reference/agentExecution/getExecutionTree
    description: "Retrieves the execution tree for a specific thread.

Returns a hierarchical view of the execution, showing parent-child
relationships between agents in multi-agent workflows. Useful for
visualizing how agents spawned sub-agents during execution."
  - name: getFilteredExecutions
    link: /docs/reference/client-sdk/api-reference/agentExecution/getFilteredExecutions
    description: "Retrieves agent executions matching specific filter criteria.

Supports filtering by status, swarm ID, start source, thread ID,
and whether the execution ran in the background."
  - name: getSwarmIds
    link: /docs/reference/client-sdk/api-reference/agentExecution/getSwarmIds
    description: "Retrieves all known swarm IDs from execution history.

Returns a list of unique swarm identifiers that appear in the execution
records, useful for populating filter dropdowns or discovering swarms."
---
# AgentExecution API

Agent Execution API

<CBAPICategory />

## Methods

- [`cleanupExecutions()`](./cleanupExecutions) — Cleans up old execution records.

Removes execution records older than the specified threshold to free
up storage and keep the system performant.
- [`getExecution()`](./getExecution) — Retrieves the execution record for a specific thread.

Returns detailed execution information including timing, status,
agent configuration, and outcome for the given thread.
- [`getExecutions()`](./getExecutions) — Retrieves all agent execution records.

Returns the complete history of agent executions, useful for auditing
and monitoring agent activity over time.
- [`getExecutionTree()`](./getExecutionTree) — Retrieves the execution tree for a specific thread.

Returns a hierarchical view of the execution, showing parent-child
relationships between agents in multi-agent workflows. Useful for
visualizing how agents spawned sub-agents during execution.
- [`getFilteredExecutions()`](./getFilteredExecutions) — Retrieves agent executions matching specific filter criteria.

Supports filtering by status, swarm ID, start source, thread ID,
and whether the execution ran in the background.
- [`getSwarmIds()`](./getSwarmIds) — Retrieves all known swarm IDs from execution history.

Returns a list of unique swarm identifiers that appear in the execution
records, useful for populating filter dropdowns or discovering swarms.
