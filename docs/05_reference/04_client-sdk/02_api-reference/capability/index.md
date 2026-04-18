---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/capability/create
    description: "Creates a new capability.

Registers a new capability in the system, defining a skill or action
that agents can use."
  - name: createExecutor
    link: /docs/reference/client-sdk/api-reference/capability/createExecutor
    description: "Creates a new capability executor.

Registers an executor implementation that can handle invocations
of a specific capability."
  - name: getDetail
    link: /docs/reference/client-sdk/api-reference/capability/getDetail
    description: "Retrieves detailed information for a specific capability.

Returns the full definition of a capability including its
configuration, executors, and usage documentation."
  - name: getExecutors
    link: /docs/reference/client-sdk/api-reference/capability/getExecutors
    description: "Retrieves all capability executors.

Returns the list of executor implementations that are registered
to handle capability invocations."
  - name: getStats
    link: /docs/reference/client-sdk/api-reference/capability/getStats
    description: "Retrieves aggregate statistics about capabilities.

Returns summary metrics about the capability system including
total counts, usage rates, and executor distribution."
  - name: getTypes
    link: /docs/reference/client-sdk/api-reference/capability/getTypes
    description: "Retrieves the list of available capability types.

Returns the distinct type identifiers that capabilities can belong to,
useful for categorizing or filtering capabilities."
  - name: list
    link: /docs/reference/client-sdk/api-reference/capability/list
    description: "Retrieves all registered capabilities.

Returns the complete list of capabilities available in the system,
representing the skills and actions that agents can perform."
  - name: refresh
    link: /docs/reference/client-sdk/api-reference/capability/refresh
    description: "Refreshes the capability registry.

Forces a re-scan and reload of all registered capabilities, picking
up any newly added or modified capability definitions."
---
# Capability API

Capability API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new capability.

Registers a new capability in the system, defining a skill or action
that agents can use.
- [`createExecutor()`](./createExecutor) — Creates a new capability executor.

Registers an executor implementation that can handle invocations
of a specific capability.
- [`getDetail()`](./getDetail) — Retrieves detailed information for a specific capability.

Returns the full definition of a capability including its
configuration, executors, and usage documentation.
- [`getExecutors()`](./getExecutors) — Retrieves all capability executors.

Returns the list of executor implementations that are registered
to handle capability invocations.
- [`getStats()`](./getStats) — Retrieves aggregate statistics about capabilities.

Returns summary metrics about the capability system including
total counts, usage rates, and executor distribution.
- [`getTypes()`](./getTypes) — Retrieves the list of available capability types.

Returns the distinct type identifiers that capabilities can belong to,
useful for categorizing or filtering capabilities.
- [`list()`](./list) — Retrieves all registered capabilities.

Returns the complete list of capabilities available in the system,
representing the skills and actions that agents can perform.
- [`refresh()`](./refresh) — Refreshes the capability registry.

Forces a re-scan and reload of all registered capabilities, picking
up any newly added or modified capability definitions.
