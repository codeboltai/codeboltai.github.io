---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/agentFlow/create
    description: "Creates a new agent flow.

Defines a new node-based workflow that agents can execute. The flow
consists of interconnected plugin nodes that define the processing pipeline."
  - name: get
    link: /docs/reference/client-sdk/api-reference/agentFlow/get
    description: "Retrieves agent flow(s).

Returns one or more agent flows based on the provided query parameters.
Use this to look up flows by name, ID, or other criteria."
  - name: getPlugins
    link: /docs/reference/client-sdk/api-reference/agentFlow/getPlugins
    description: "Retrieves available agent flow plugins.

Returns the list of plugin types that can be used as nodes within
agent flows, each defining a specific processing capability."
  - name: getPluginUi
    link: /docs/reference/client-sdk/api-reference/agentFlow/getPluginUi
    description: "Retrieves the UI definition for a specific flow plugin.

Returns the schema and layout information needed to render the
plugin's configuration interface in the flow editor."
  - name: update
    link: /docs/reference/client-sdk/api-reference/agentFlow/update
    description: "Updates an existing agent flow.

Modifies the node configuration, connections, or metadata of an
existing flow."
---
# AgentFlow API

Agent Flow API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new agent flow.

Defines a new node-based workflow that agents can execute. The flow
consists of interconnected plugin nodes that define the processing pipeline.
- [`get()`](./get) — Retrieves agent flow(s).

Returns one or more agent flows based on the provided query parameters.
Use this to look up flows by name, ID, or other criteria.
- [`getPlugins()`](./getPlugins) — Retrieves available agent flow plugins.

Returns the list of plugin types that can be used as nodes within
agent flows, each defining a specific processing capability.
- [`getPluginUi()`](./getPluginUi) — Retrieves the UI definition for a specific flow plugin.

Returns the schema and layout information needed to render the
plugin's configuration interface in the flow editor.
- [`update()`](./update) — Updates an existing agent flow.

Modifies the node configuration, connections, or metadata of an
existing flow.
