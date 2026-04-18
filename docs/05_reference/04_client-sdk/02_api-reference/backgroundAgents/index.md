---
cbapicategory:
  - name: get
    link: /docs/reference/client-sdk/api-reference/backgroundAgents/get
    description: "Retrieves a specific background agent instance by ID.

Returns the full details of a single background agent including
its configuration, status, and runtime metrics."
  - name: getActive
    link: /docs/reference/client-sdk/api-reference/backgroundAgents/getActive
    description: "Retrieves currently active background agents.

Returns only the background agents that are currently running,
excluding terminated or stopped instances."
  - name: list
    link: /docs/reference/client-sdk/api-reference/backgroundAgents/list
    description: "Retrieves all background agent instances.

Returns every background agent instance that has been created,
including both active and terminated ones."
  - name: start
    link: /docs/reference/client-sdk/api-reference/backgroundAgents/start
    description: "Starts a new background agent.

Launches a background agent that will run continuously until explicitly
stopped. Background agents are suitable for long-running monitoring,
indexing, or maintenance tasks."
  - name: stop
    link: /docs/reference/client-sdk/api-reference/backgroundAgents/stop
    description: "Stops a running background agent instance.

Sends a stop signal to the specified background agent, causing it
to terminate gracefully."
---
# BackgroundAgents API

Background Agents API

<CBAPICategory />

## Methods

- [`get()`](./get) — Retrieves a specific background agent instance by ID.

Returns the full details of a single background agent including
its configuration, status, and runtime metrics.
- [`getActive()`](./getActive) — Retrieves currently active background agents.

Returns only the background agents that are currently running,
excluding terminated or stopped instances.
- [`list()`](./list) — Retrieves all background agent instances.

Returns every background agent instance that has been created,
including both active and terminated ones.
- [`start()`](./start) — Starts a new background agent.

Launches a background agent that will run continuously until explicitly
stopped. Background agents are suitable for long-running monitoring,
indexing, or maintenance tasks.
- [`stop()`](./stop) — Stops a running background agent instance.

Sends a stop signal to the specified background agent, causing it
to terminate gracefully.
