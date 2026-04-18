---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/orchestrator/create
    description: "Creates a new orchestrator instance with the specified configuration.

Sets up a new orchestrator that will coordinate agent interactions according to the
provided rules and workflow definitions. The orchestrator can be started immediately
or configured further before activation."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/orchestrator/delete
    description: "Deletes an orchestrator instance permanently.

Removes the orchestrator and its configuration. Any active workflows managed by this
orchestrator should be stopped before deletion."
  - name: get
    link: /docs/reference/client-sdk/api-reference/orchestrator/get
    description: "Retrieves a specific orchestrator instance by its unique identifier.

Returns the full configuration and current state of an orchestrator, including its
assigned agents, coordination rules, and execution history."
  - name: list
    link: /docs/reference/client-sdk/api-reference/orchestrator/list
    description: "Lists all orchestrator instances with optional filtering.

Returns the collection of configured orchestrators, which can be filtered by status,
type, or other criteria. Each orchestrator defines a coordination strategy for
multi-agent workflows."
  - name: update
    link: /docs/reference/client-sdk/api-reference/orchestrator/update
    description: "Updates an existing orchestrator instance's configuration.

Modifies the settings, rules, or agent assignments of an orchestrator. Changes take
effect for subsequent workflow executions."
---
# Orchestrator API

Orchestrator API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new orchestrator instance with the specified configuration.

Sets up a new orchestrator that will coordinate agent interactions according to the
provided rules and workflow definitions. The orchestrator can be started immediately
or configured further before activation.
- [`delete()`](./delete) — Deletes an orchestrator instance permanently.

Removes the orchestrator and its configuration. Any active workflows managed by this
orchestrator should be stopped before deletion.
- [`get()`](./get) — Retrieves a specific orchestrator instance by its unique identifier.

Returns the full configuration and current state of an orchestrator, including its
assigned agents, coordination rules, and execution history.
- [`list()`](./list) — Lists all orchestrator instances with optional filtering.

Returns the collection of configured orchestrators, which can be filtered by status,
type, or other criteria. Each orchestrator defines a coordination strategy for
multi-agent workflows.
- [`update()`](./update) — Updates an existing orchestrator instance's configuration.

Modifies the settings, rules, or agent assignments of an orchestrator. Changes take
effect for subsequent workflow executions.
