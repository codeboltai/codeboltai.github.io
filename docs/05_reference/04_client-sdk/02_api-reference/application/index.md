---
cbapicategory:
  - name: addEnvAndServices
    link: /docs/reference/client-sdk/api-reference/application/addEnvAndServices
    description: "Triggers the addition of environment variables and services.

Initiates the process of detecting and adding environment variables
and service configurations to the current workspace."
  - name: getAppState
    link: /docs/reference/client-sdk/api-reference/application/getAppState
    description: "Retrieves the current application state.

Returns the full application state object containing the active
configuration, user preferences, and runtime status."
  - name: getAppStateLayout
    link: /docs/reference/client-sdk/api-reference/application/getAppStateLayout
    description: "Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions."
  - name: getCurrentLayout
    link: /docs/reference/client-sdk/api-reference/application/getCurrentLayout
    description: "Retrieves the current active layout.

Returns the layout configuration that is currently being displayed
in the application UI."
  - name: getEnvAndServices
    link: /docs/reference/client-sdk/api-reference/application/getEnvAndServices
    description: "Retrieves environment variables and service configurations.

Returns the environment variables and external service connection
details configured for the current workspace."
  - name: getPinnedAgent
    link: /docs/reference/client-sdk/api-reference/application/getPinnedAgent
    description: "Retrieves the currently pinned agent.

Returns the agent that is currently pinned to the UI, or null if
no agent is pinned."
  - name: getRootAppState
    link: /docs/reference/client-sdk/api-reference/application/getRootAppState
    description: "Retrieves the root application state.

Returns the top-level state object that encompasses all workspace
and global application settings."
  - name: getThreadToken
    link: /docs/reference/client-sdk/api-reference/application/getThreadToken
    description: "Retrieves the current thread token.

Returns the authentication token associated with the current thread,
used for securing inter-process communication."
  - name: getTreeView
    link: /docs/reference/client-sdk/api-reference/application/getTreeView
    description: "Retrieves the saved tree view state.

Returns the previously persisted tree view configuration so the UI
can restore the user's preferred view."
  - name: saveTreeView
    link: /docs/reference/client-sdk/api-reference/application/saveTreeView
    description: "Saves the tree view state.

Persists the current state of the file/project tree view, including
expanded nodes, scroll position, and selection."
  - name: setCurrentLayout
    link: /docs/reference/client-sdk/api-reference/application/setCurrentLayout
    description: "Sets the current active layout.

Switches the application to use a specific layout configuration,
rearranging panels and views accordingly."
  - name: setModeLayout
    link: /docs/reference/client-sdk/api-reference/application/setModeLayout
    description: "Sets the mode layout configuration.

Configures how the application layout behaves in a specific mode
(e.g., coding, debugging, reviewing)."
  - name: setPinnedAgent
    link: /docs/reference/client-sdk/api-reference/application/setPinnedAgent
    description: "Sets the pinned agent for the application.

Pins a specific agent to the UI, making it the default or always-visible
agent for quick access."
  - name: stopAllProcess
    link: /docs/reference/client-sdk/api-reference/application/stopAllProcess
    description: "Stops all running processes.

Terminates every active process in the CodeBolt runtime, including
agents, terminals, and background tasks. Use with caution."
  - name: unpinAgent
    link: /docs/reference/client-sdk/api-reference/application/unpinAgent
    description: "Unpins the currently pinned agent.

Removes the pinned agent from the UI, reverting to the default
agent selection behavior."
  - name: updateAppState
    link: /docs/reference/client-sdk/api-reference/application/updateAppState
    description: "Updates the application state.

Applies changes to the application state, persisting the updated
configuration across sessions."
  - name: updateRootAppState
    link: /docs/reference/client-sdk/api-reference/application/updateRootAppState
    description: "Updates the root application state.

Applies changes to the top-level application state, affecting
global settings across all workspaces."
---
# Application API

Application API

<CBAPICategory />

## Methods

- [`addEnvAndServices()`](./addEnvAndServices) — Triggers the addition of environment variables and services.

Initiates the process of detecting and adding environment variables
and service configurations to the current workspace.
- [`getAppState()`](./getAppState) — Retrieves the current application state.

Returns the full application state object containing the active
configuration, user preferences, and runtime status.
- [`getAppStateLayout()`](./getAppStateLayout) — Retrieves the application state layout.

Returns the full layout configuration for the application, including
all mode-specific layout definitions.
- [`getCurrentLayout()`](./getCurrentLayout) — Retrieves the current active layout.

Returns the layout configuration that is currently being displayed
in the application UI.
- [`getEnvAndServices()`](./getEnvAndServices) — Retrieves environment variables and service configurations.

Returns the environment variables and external service connection
details configured for the current workspace.
- [`getPinnedAgent()`](./getPinnedAgent) — Retrieves the currently pinned agent.

Returns the agent that is currently pinned to the UI, or null if
no agent is pinned.
- [`getRootAppState()`](./getRootAppState) — Retrieves the root application state.

Returns the top-level state object that encompasses all workspace
and global application settings.
- [`getThreadToken()`](./getThreadToken) — Retrieves the current thread token.

Returns the authentication token associated with the current thread,
used for securing inter-process communication.
- [`getTreeView()`](./getTreeView) — Retrieves the saved tree view state.

Returns the previously persisted tree view configuration so the UI
can restore the user's preferred view.
- [`saveTreeView()`](./saveTreeView) — Saves the tree view state.

Persists the current state of the file/project tree view, including
expanded nodes, scroll position, and selection.
- [`setCurrentLayout()`](./setCurrentLayout) — Sets the current active layout.

Switches the application to use a specific layout configuration,
rearranging panels and views accordingly.
- [`setModeLayout()`](./setModeLayout) — Sets the mode layout configuration.

Configures how the application layout behaves in a specific mode
(e.g., coding, debugging, reviewing).
- [`setPinnedAgent()`](./setPinnedAgent) — Sets the pinned agent for the application.

Pins a specific agent to the UI, making it the default or always-visible
agent for quick access.
- [`stopAllProcess()`](./stopAllProcess) — Stops all running processes.

Terminates every active process in the CodeBolt runtime, including
agents, terminals, and background tasks. Use with caution.
- [`unpinAgent()`](./unpinAgent) — Unpins the currently pinned agent.

Removes the pinned agent from the UI, reverting to the default
agent selection behavior.
- [`updateAppState()`](./updateAppState) — Updates the application state.

Applies changes to the application state, persisting the updated
configuration across sessions.
- [`updateRootAppState()`](./updateRootAppState) — Updates the root application state.

Applies changes to the top-level application state, affecting
global settings across all workspaces.
