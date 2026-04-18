---
cbapicategory:
  - name: changeAgent
    link: /docs/reference/client-sdk/api-reference/agents/changeAgent
    description: "Changes the currently active agent.

Switches the runtime to use a different agent, stopping the current
one if necessary. Use this when transitioning between different agent
types during a workflow."
  - name: createCustomLocalAgent
    link: /docs/reference/client-sdk/api-reference/agents/createCustomLocalAgent
    description: "Creates a custom local agent.

Defines a new agent from scratch on the local filesystem with custom
configuration, making it available for use in the runtime."
  - name: createFlowAgent
    link: /docs/reference/client-sdk/api-reference/agents/createFlowAgent
    description: "Creates a flow-based agent.

Defines a new agent that operates based on a visual flow definition,
where behavior is determined by connected nodes in a flow graph."
  - name: createRemoteAgent
    link: /docs/reference/client-sdk/api-reference/agents/createRemoteAgent
    description: "Creates a remote agent.

Registers a new agent that runs on a remote server, allowing
CodeBolt to delegate tasks to external agent services."
  - name: deleteRemixAgent
    link: /docs/reference/client-sdk/api-reference/agents/deleteRemixAgent
    description: "Deletes a remix agent.

Permanently removes the specified remix agent from the system."
  - name: getAgentConfig
    link: /docs/reference/client-sdk/api-reference/agents/getAgentConfig
    description: "Retrieves the configuration for a specific agent by name.

Returns the full configuration object for the named agent, including
its capabilities, settings, and metadata."
  - name: getAgentConfigs
    link: /docs/reference/client-sdk/api-reference/agents/getAgentConfigs
    description: "Retrieves all agent configurations.

Returns configuration objects for every registered agent in the system."
  - name: getAgentFromLocal
    link: /docs/reference/client-sdk/api-reference/agents/getAgentFromLocal
    description: "Retrieves the agent stored in local storage.

Returns the agent configuration that has been persisted locally,
typically the last-used or default agent for the current workspace."
  - name: getAgentProperties
    link: /docs/reference/client-sdk/api-reference/agents/getAgentProperties
    description: "Retrieves the global agent properties.

Returns system-wide properties that apply to all agents, such as
default timeouts, resource limits, and shared configuration."
  - name: getAllRemixAgents
    link: /docs/reference/client-sdk/api-reference/agents/getAllRemixAgents
    description: "Retrieves all remix agents.

Returns every remix agent that has been created in the system."
  - name: getFeaturedAgents
    link: /docs/reference/client-sdk/api-reference/agents/getFeaturedAgents
    description: "Retrieves featured agents from the agent registry.

Returns a curated list of agents that are highlighted or promoted
in the CodeBolt marketplace."
  - name: getInstalled
    link: /docs/reference/client-sdk/api-reference/agents/getInstalled
    description: "Retrieves all installed agents.

Returns every agent that has been installed in the current CodeBolt
environment, whether from the registry or locally."
  - name: getInstalledAgentsAction
    link: /docs/reference/client-sdk/api-reference/agents/getInstalledAgentsAction
    description: "Retrieves action configurations for all installed agents.

Returns the action capability definitions for each installed agent,
describing what actions they can perform."
  - name: getLocalAgents
    link: /docs/reference/client-sdk/api-reference/agents/getLocalAgents
    description: "Retrieves agents installed from local sources.

Returns only agents that were installed from the local filesystem,
excluding those from the remote registry."
  - name: getRecommendedAgents
    link: /docs/reference/client-sdk/api-reference/agents/getRecommendedAgents
    description: "Retrieves recommended agents based on the current context.

Returns agents that are suggested based on the current project type,
user preferences, or usage patterns."
  - name: getRemixAgent
    link: /docs/reference/client-sdk/api-reference/agents/getRemixAgent
    description: "Retrieves a specific remix agent by name.

Returns the full definition of a remix agent, including its
base agent reference and customizations."
  - name: getRunningAgents
    link: /docs/reference/client-sdk/api-reference/agents/getRunningAgents
    description: "Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime."
  - name: install
    link: /docs/reference/client-sdk/api-reference/agents/install
    description: "Installs an agent from the remote registry.

Downloads and registers an agent from the CodeBolt agent marketplace,
making it available for local use."
  - name: installLocal
    link: /docs/reference/client-sdk/api-reference/agents/installLocal
    description: "Installs an agent from a local file path.

Loads and registers an agent from the local filesystem, making it
available for use in the runtime."
  - name: saveRemixAgent
    link: /docs/reference/client-sdk/api-reference/agents/saveRemixAgent
    description: "Saves a remix agent.

Creates or saves a remix agent, which is a customized variant of an
existing agent with modified prompts, settings, or capabilities."
  - name: startAgent
    link: /docs/reference/client-sdk/api-reference/agents/startAgent
    description: "Starts a new agent instance with the specified configuration.

Initializes and launches an agent process in the CodeBolt runtime.
The agent will be configured based on the provided request parameters
including its type, capabilities, and execution context."
  - name: stopAgent
    link: /docs/reference/client-sdk/api-reference/agents/stopAgent
    description: "Stops a running agent.

Sends a stop signal to the specified agent, causing it to terminate
gracefully."
  - name: updateAgent
    link: /docs/reference/client-sdk/api-reference/agents/updateAgent
    description: "Updates an installed agent to a newer version.

Applies updates to an already-installed agent, pulling the latest
version from the registry or local source."
  - name: updateAgentIndex
    link: /docs/reference/client-sdk/api-reference/agents/updateAgentIndex
    description: "Updates the agent router index.

Forces a rebuild of the internal routing index that maps tasks to
appropriate agents. Call this after installing or removing agents."
  - name: updateAgentProperties
    link: /docs/reference/client-sdk/api-reference/agents/updateAgentProperties
    description: "Updates the global agent properties.

Modifies system-wide agent settings that apply to all agent instances."
  - name: updateRemixAgent
    link: /docs/reference/client-sdk/api-reference/agents/updateRemixAgent
    description: "Updates a remix agent.

Modifies the configuration of an existing remix agent."
---
# Agents API

Agents API - agent management

<CBAPICategory />

## Methods

- [`changeAgent()`](./changeAgent) — Changes the currently active agent.

Switches the runtime to use a different agent, stopping the current
one if necessary. Use this when transitioning between different agent
types during a workflow.
- [`createCustomLocalAgent()`](./createCustomLocalAgent) — Creates a custom local agent.

Defines a new agent from scratch on the local filesystem with custom
configuration, making it available for use in the runtime.
- [`createFlowAgent()`](./createFlowAgent) — Creates a flow-based agent.

Defines a new agent that operates based on a visual flow definition,
where behavior is determined by connected nodes in a flow graph.
- [`createRemoteAgent()`](./createRemoteAgent) — Creates a remote agent.

Registers a new agent that runs on a remote server, allowing
CodeBolt to delegate tasks to external agent services.
- [`deleteRemixAgent()`](./deleteRemixAgent) — Deletes a remix agent.

Permanently removes the specified remix agent from the system.
- [`getAgentConfig()`](./getAgentConfig) — Retrieves the configuration for a specific agent by name.

Returns the full configuration object for the named agent, including
its capabilities, settings, and metadata.
- [`getAgentConfigs()`](./getAgentConfigs) — Retrieves all agent configurations.

Returns configuration objects for every registered agent in the system.
- [`getAgentFromLocal()`](./getAgentFromLocal) — Retrieves the agent stored in local storage.

Returns the agent configuration that has been persisted locally,
typically the last-used or default agent for the current workspace.
- [`getAgentProperties()`](./getAgentProperties) — Retrieves the global agent properties.

Returns system-wide properties that apply to all agents, such as
default timeouts, resource limits, and shared configuration.
- [`getAllRemixAgents()`](./getAllRemixAgents) — Retrieves all remix agents.

Returns every remix agent that has been created in the system.
- [`getFeaturedAgents()`](./getFeaturedAgents) — Retrieves featured agents from the agent registry.

Returns a curated list of agents that are highlighted or promoted
in the CodeBolt marketplace.
- [`getInstalled()`](./getInstalled) — Retrieves all installed agents.

Returns every agent that has been installed in the current CodeBolt
environment, whether from the registry or locally.
- [`getInstalledAgentsAction()`](./getInstalledAgentsAction) — Retrieves action configurations for all installed agents.

Returns the action capability definitions for each installed agent,
describing what actions they can perform.
- [`getLocalAgents()`](./getLocalAgents) — Retrieves agents installed from local sources.

Returns only agents that were installed from the local filesystem,
excluding those from the remote registry.
- [`getRecommendedAgents()`](./getRecommendedAgents) — Retrieves recommended agents based on the current context.

Returns agents that are suggested based on the current project type,
user preferences, or usage patterns.
- [`getRemixAgent()`](./getRemixAgent) — Retrieves a specific remix agent by name.

Returns the full definition of a remix agent, including its
base agent reference and customizations.
- [`getRunningAgents()`](./getRunningAgents) — Retrieves all currently running agents.

Returns a list of agents that are actively executing in the runtime.
- [`install()`](./install) — Installs an agent from the remote registry.

Downloads and registers an agent from the CodeBolt agent marketplace,
making it available for local use.
- [`installLocal()`](./installLocal) — Installs an agent from a local file path.

Loads and registers an agent from the local filesystem, making it
available for use in the runtime.
- [`saveRemixAgent()`](./saveRemixAgent) — Saves a remix agent.

Creates or saves a remix agent, which is a customized variant of an
existing agent with modified prompts, settings, or capabilities.
- [`startAgent()`](./startAgent) — Starts a new agent instance with the specified configuration.

Initializes and launches an agent process in the CodeBolt runtime.
The agent will be configured based on the provided request parameters
including its type, capabilities, and execution context.
- [`stopAgent()`](./stopAgent) — Stops a running agent.

Sends a stop signal to the specified agent, causing it to terminate
gracefully.
- [`updateAgent()`](./updateAgent) — Updates an installed agent to a newer version.

Applies updates to an already-installed agent, pulling the latest
version from the registry or local source.
- [`updateAgentIndex()`](./updateAgentIndex) — Updates the agent router index.

Forces a rebuild of the internal routing index that maps tasks to
appropriate agents. Call this after installing or removing agents.
- [`updateAgentProperties()`](./updateAgentProperties) — Updates the global agent properties.

Modifies system-wide agent settings that apply to all agent instances.
- [`updateRemixAgent()`](./updateRemixAgent) — Updates a remix agent.

Modifies the configuration of an existing remix agent.
