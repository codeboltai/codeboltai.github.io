---
cbapicategory:
  - name: browserNavigate
    link: /docs/reference/client-sdk/api-reference/mcp/browserNavigate
    description: "Navigates to a URL using the browser MCP server.

Sends a navigation command to the browser automation MCP server, instructing it to
load a specific web page. Requires the browser MCP server to be installed and enabled."
  - name: configure
    link: /docs/reference/client-sdk/api-reference/mcp/configure
    description: "Applies global MCP configuration settings.

Updates the workspace-level MCP settings that affect how all MCP servers are managed,
including default timeout values, transport preferences, and security policies."
  - name: configureServer
    link: /docs/reference/client-sdk/api-reference/mcp/configureServer
    description: "Configures a specific MCP server's settings.

Updates the connection parameters, environment variables, and other settings for a
named MCP server. The server may need to be restarted for changes to take effect."
  - name: create
    link: /docs/reference/client-sdk/api-reference/mcp/create
    description: "Creates a new custom MCP server configuration.

Registers a custom MCP server that is not part of the standard catalog. This is useful
for connecting to proprietary or locally developed MCP-compatible services."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/mcp/getAll
    description: "Retrieves all MCP servers currently registered in the workspace.

Returns every MCP server regardless of its enabled/disabled status, including
connection details, available tools, and current health information."
  - name: getAvailableAll
    link: /docs/reference/client-sdk/api-reference/mcp/getAvailableAll
    description: "Retrieves all available MCP servers including both marketplace and community servers.

Returns the full unfiltered catalog of MCP servers from all sources. This includes
official, community-contributed, and locally developed servers."
  - name: getAvailableDetail
    link: /docs/reference/client-sdk/api-reference/mcp/getAvailableDetail
    description: "Retrieves detailed information about a specific available MCP server.

Returns comprehensive details about an MCP server from the catalog, including its
description, supported tools, configuration schema, and installation requirements."
  - name: getAvailableList
    link: /docs/reference/client-sdk/api-reference/mcp/getAvailableList
    description: "Retrieves the catalog of MCP servers available for installation.

Returns a curated list of MCP servers that can be installed from the marketplace or
registry. Use this to discover new capabilities to add to the workspace."
  - name: getByName
    link: /docs/reference/client-sdk/api-reference/mcp/getByName
    description: "Retrieves a specific MCP server by its registered name.

Returns the full configuration and status of a single MCP server, including its
tool definitions, resource list, and connection parameters."
  - name: getConfiguredMcps
    link: /docs/reference/client-sdk/api-reference/mcp/getConfiguredMcps
    description: "Retrieves all MCP servers that have been configured in the workspace.

Returns only servers that have been explicitly set up (installed and configured),
as opposed to all available servers in the catalog."
  - name: getLocalMcpList
    link: /docs/reference/client-sdk/api-reference/mcp/getLocalMcpList
    description: "Retrieves the list of locally defined MCP servers.

Returns MCP servers that are defined in the local workspace configuration rather than
installed from the marketplace. These are typically custom or development servers."
  - name: getMcpConfigPath
    link: /docs/reference/client-sdk/api-reference/mcp/getMcpConfigPath
    description: "Retrieves the filesystem path to the MCP configuration file.

Returns the absolute path where the MCP configuration is stored on disk. Useful for
manual editing or backup of MCP server configurations."
  - name: install
    link: /docs/reference/client-sdk/api-reference/mcp/install
    description: "Installs an MCP server from the available catalog.

Downloads and registers an MCP server, making it available for configuration and use.
The server may require additional configuration (e.g., API keys) before it can be started."
  - name: toggle
    link: /docs/reference/client-sdk/api-reference/mcp/toggle
    description: "Toggles an MCP server between enabled and disabled states.

Enables or disables a registered MCP server. Disabled servers will not be started
or connected to, and their tools will not be available to agents."
  - name: updateTools
    link: /docs/reference/client-sdk/api-reference/mcp/updateTools
    description: "Updates the tool configurations for MCP servers.

Modifies which tools are exposed or hidden from agents, and updates tool-specific
settings like descriptions, parameter defaults, or access permissions."
---
# Mcp API

MCP API

<CBAPICategory />

## Methods

- [`browserNavigate()`](./browserNavigate) — Navigates to a URL using the browser MCP server.

Sends a navigation command to the browser automation MCP server, instructing it to
load a specific web page. Requires the browser MCP server to be installed and enabled.
- [`configure()`](./configure) — Applies global MCP configuration settings.

Updates the workspace-level MCP settings that affect how all MCP servers are managed,
including default timeout values, transport preferences, and security policies.
- [`configureServer()`](./configureServer) — Configures a specific MCP server's settings.

Updates the connection parameters, environment variables, and other settings for a
named MCP server. The server may need to be restarted for changes to take effect.
- [`create()`](./create) — Creates a new custom MCP server configuration.

Registers a custom MCP server that is not part of the standard catalog. This is useful
for connecting to proprietary or locally developed MCP-compatible services.
- [`getAll()`](./getAll) — Retrieves all MCP servers currently registered in the workspace.

Returns every MCP server regardless of its enabled/disabled status, including
connection details, available tools, and current health information.
- [`getAvailableAll()`](./getAvailableAll) — Retrieves all available MCP servers including both marketplace and community servers.

Returns the full unfiltered catalog of MCP servers from all sources. This includes
official, community-contributed, and locally developed servers.
- [`getAvailableDetail()`](./getAvailableDetail) — Retrieves detailed information about a specific available MCP server.

Returns comprehensive details about an MCP server from the catalog, including its
description, supported tools, configuration schema, and installation requirements.
- [`getAvailableList()`](./getAvailableList) — Retrieves the catalog of MCP servers available for installation.

Returns a curated list of MCP servers that can be installed from the marketplace or
registry. Use this to discover new capabilities to add to the workspace.
- [`getByName()`](./getByName) — Retrieves a specific MCP server by its registered name.

Returns the full configuration and status of a single MCP server, including its
tool definitions, resource list, and connection parameters.
- [`getConfiguredMcps()`](./getConfiguredMcps) — Retrieves all MCP servers that have been configured in the workspace.

Returns only servers that have been explicitly set up (installed and configured),
as opposed to all available servers in the catalog.
- [`getLocalMcpList()`](./getLocalMcpList) — Retrieves the list of locally defined MCP servers.

Returns MCP servers that are defined in the local workspace configuration rather than
installed from the marketplace. These are typically custom or development servers.
- [`getMcpConfigPath()`](./getMcpConfigPath) — Retrieves the filesystem path to the MCP configuration file.

Returns the absolute path where the MCP configuration is stored on disk. Useful for
manual editing or backup of MCP server configurations.
- [`install()`](./install) — Installs an MCP server from the available catalog.

Downloads and registers an MCP server, making it available for configuration and use.
The server may require additional configuration (e.g., API keys) before it can be started.
- [`toggle()`](./toggle) — Toggles an MCP server between enabled and disabled states.

Enables or disables a registered MCP server. Disabled servers will not be started
or connected to, and their tools will not be available to agents.
- [`updateTools()`](./updateTools) — Updates the tool configurations for MCP servers.

Modifies which tools are exposed or hidden from agents, and updates tool-specific
settings like descriptions, parameter defaults, or access permissions.
