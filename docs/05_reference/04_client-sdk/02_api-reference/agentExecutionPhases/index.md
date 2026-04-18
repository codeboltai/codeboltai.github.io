---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/create
    description: "Creates a new execution phase.

Defines a new phase in the agent execution lifecycle. The phase will
be available for agents to transition through during their execution."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/delete
    description: "Deletes an execution phase.

Permanently removes the specified execution phase from the system.
Agents will no longer transition through this phase."
  - name: get
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/get
    description: "Retrieves a specific execution phase by its name.

Returns the full definition of a single phase including its
configuration, order, and associated behavior."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/getAll
    description: "Retrieves all defined agent execution phases.

Returns the complete list of execution phases that have been configured
in the system."
  - name: reset
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/reset
    description: "Resets all agent execution phases to their default configuration.

Restores the built-in phase definitions, removing any custom phases
and reverting modified ones to their original state."
  - name: update
    link: /docs/reference/client-sdk/api-reference/agentExecutionPhases/update
    description: "Updates an existing execution phase.

Modifies the configuration of an execution phase. Use this to change
the phase description, ordering, or other properties."
---
# AgentExecutionPhases API

Agent Execution Phases API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new execution phase.

Defines a new phase in the agent execution lifecycle. The phase will
be available for agents to transition through during their execution.
- [`delete()`](./delete) — Deletes an execution phase.

Permanently removes the specified execution phase from the system.
Agents will no longer transition through this phase.
- [`get()`](./get) — Retrieves a specific execution phase by its name.

Returns the full definition of a single phase including its
configuration, order, and associated behavior.
- [`getAll()`](./getAll) — Retrieves all defined agent execution phases.

Returns the complete list of execution phases that have been configured
in the system.
- [`reset()`](./reset) — Resets all agent execution phases to their default configuration.

Restores the built-in phase definitions, removing any custom phases
and reverting modified ones to their original state.
- [`update()`](./update) — Updates an existing execution phase.

Modifies the configuration of an execution phase. Use this to change
the phase description, ordering, or other properties.
