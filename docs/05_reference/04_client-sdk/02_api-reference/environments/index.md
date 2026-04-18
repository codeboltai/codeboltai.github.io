---
cbapicategory:
  - name: createEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/createEnvironment
    description: "Creates a new development environment.

Provisions a new environment using the specified provider and configuration.
The environment can then be started, stopped, and managed through other methods."
  - name: createInstalledProvider
    link: /docs/reference/client-sdk/api-reference/environments/createInstalledProvider
    description: "Registers a new installed environment provider.

Creates a provider record from an already-installed provider on the system.
This makes the provider available for environment creation."
  - name: deleteEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/deleteEnvironment
    description: "Deletes an environment.

Permanently removes the environment and releases its resources. The
environment should be stopped before deletion."
  - name: deleteInstalledProvider
    link: /docs/reference/client-sdk/api-reference/environments/deleteInstalledProvider
    description: "Deletes an installed environment provider.

Removes the provider registration. Environments already created by this
provider are not automatically deleted."
  - name: getDiffFiles
    link: /docs/reference/client-sdk/api-reference/environments/getDiffFiles
    description: "Retrieves diff files for an environment.

Compares the environment's current file state against a baseline to
identify modified, added, or deleted files."
  - name: getEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/getEnvironment
    description: "Retrieves a specific environment by its ID.

Returns the full details of a single environment including its current
state, provider, and configuration."
  - name: getFullProject
    link: /docs/reference/client-sdk/api-reference/environments/getFullProject
    description: "Retrieves the complete project file structure from an environment.

Returns the full directory tree and file listing for the project
contained within the environment."
  - name: getInstalledProvider
    link: /docs/reference/client-sdk/api-reference/environments/getInstalledProvider
    description: "Retrieves a specific installed provider by its ID.

Returns the full details of a single provider including its configuration
and current state."
  - name: getLocalProviders
    link: /docs/reference/client-sdk/api-reference/environments/getLocalProviders
    description: "Retrieves the list of available local environment providers.

Discovers providers installed on the local machine that can be used
to create new environments. Useful for populating provider selection UIs."
  - name: getProviderStatus
    link: /docs/reference/client-sdk/api-reference/environments/getProviderStatus
    description: "Retrieves the current provider status for an environment.

Returns whether the backing provider is running, stopped, or in an
error state. Useful for health checks and monitoring."
  - name: getRunningProviders
    link: /docs/reference/client-sdk/api-reference/environments/getRunningProviders
    description: "Retrieves all currently running environment providers.

Returns only providers that are actively running and available to serve
environment requests."
  - name: installProvider
    link: /docs/reference/client-sdk/api-reference/environments/installProvider
    description: "Installs a new environment provider from a remote source.

Downloads and registers a provider, making it available for creating
environments. Use this when the provider is not yet present locally."
  - name: listEnvironments
    link: /docs/reference/client-sdk/api-reference/environments/listEnvironments
    description: "Lists all environments.

Returns every environment regardless of state. Use optional parameters
to filter or paginate the results."
  - name: listInstalledProviders
    link: /docs/reference/client-sdk/api-reference/environments/listInstalledProviders
    description: "Lists all installed environment providers.

Returns every provider that has been registered or installed in the system."
  - name: mergePatch
    link: /docs/reference/client-sdk/api-reference/environments/mergePatch
    description: "Merges a patch into the environment's project files.

Applies a set of file changes (additions, modifications, deletions) to
the environment in a single atomic operation."
  - name: readFile
    link: /docs/reference/client-sdk/api-reference/environments/readFile
    description: "Reads a file from within an environment.

Retrieves the contents of a specific file from the environment's
filesystem. Useful for inspecting files without SSH access."
  - name: restartEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/restartEnvironment
    description: "Restarts an environment.

Performs a stop followed by a start on the environment. Useful for
applying configuration changes that require a fresh boot."
  - name: sendPullRequest
    link: /docs/reference/client-sdk/api-reference/environments/sendPullRequest
    description: "Sends a pull request from the environment's current state.

Creates a pull request on the remote repository using the changes
present in the environment. The PR details are specified in the request."
  - name: setDefaultProvider
    link: /docs/reference/client-sdk/api-reference/environments/setDefaultProvider
    description: "Sets an installed provider as the system default.

New environments will use this provider unless another is explicitly
specified during creation."
  - name: startEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/startEnvironment
    description: "Starts an environment.

Boots up the environment so it becomes active and ready for use.
The environment's provider must be running first."
  - name: startProvider
    link: /docs/reference/client-sdk/api-reference/environments/startProvider
    description: "Starts the underlying provider for an environment.

Boots up the provider process that backs the environment, making it
ready to accept operations. This is distinct from starting the
environment itself."
  - name: stopEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/stopEnvironment
    description: "Stops a running environment.

Gracefully shuts down the environment, preserving its state for later
restart. Resources may be released depending on the provider."
  - name: stopProvider
    link: /docs/reference/client-sdk/api-reference/environments/stopProvider
    description: "Stops the underlying provider for an environment.

Shuts down the provider process without destroying the environment.
The provider can be restarted later."
  - name: updateEnvironment
    link: /docs/reference/client-sdk/api-reference/environments/updateEnvironment
    description: "Updates an existing environment's configuration.

Modifies environment settings such as name, resource allocations, or
other configurable properties."
  - name: updateInstalledProvider
    link: /docs/reference/client-sdk/api-reference/environments/updateInstalledProvider
    description: "Updates the configuration of an installed provider.

Modifies provider settings such as name, credentials, or resource limits."
  - name: writeFile
    link: /docs/reference/client-sdk/api-reference/environments/writeFile
    description: "Writes a file to an environment's filesystem.

Creates or overwrites a file at the specified path within the
environment. Useful for deploying configuration or code changes."
---
# Environments API

Environments API

<CBAPICategory />

## Methods

- [`createEnvironment()`](./createEnvironment) — Creates a new development environment.

Provisions a new environment using the specified provider and configuration.
The environment can then be started, stopped, and managed through other methods.
- [`createInstalledProvider()`](./createInstalledProvider) — Registers a new installed environment provider.

Creates a provider record from an already-installed provider on the system.
This makes the provider available for environment creation.
- [`deleteEnvironment()`](./deleteEnvironment) — Deletes an environment.

Permanently removes the environment and releases its resources. The
environment should be stopped before deletion.
- [`deleteInstalledProvider()`](./deleteInstalledProvider) — Deletes an installed environment provider.

Removes the provider registration. Environments already created by this
provider are not automatically deleted.
- [`getDiffFiles()`](./getDiffFiles) — Retrieves diff files for an environment.

Compares the environment's current file state against a baseline to
identify modified, added, or deleted files.
- [`getEnvironment()`](./getEnvironment) — Retrieves a specific environment by its ID.

Returns the full details of a single environment including its current
state, provider, and configuration.
- [`getFullProject()`](./getFullProject) — Retrieves the complete project file structure from an environment.

Returns the full directory tree and file listing for the project
contained within the environment.
- [`getInstalledProvider()`](./getInstalledProvider) — Retrieves a specific installed provider by its ID.

Returns the full details of a single provider including its configuration
and current state.
- [`getLocalProviders()`](./getLocalProviders) — Retrieves the list of available local environment providers.

Discovers providers installed on the local machine that can be used
to create new environments. Useful for populating provider selection UIs.
- [`getProviderStatus()`](./getProviderStatus) — Retrieves the current provider status for an environment.

Returns whether the backing provider is running, stopped, or in an
error state. Useful for health checks and monitoring.
- [`getRunningProviders()`](./getRunningProviders) — Retrieves all currently running environment providers.

Returns only providers that are actively running and available to serve
environment requests.
- [`installProvider()`](./installProvider) — Installs a new environment provider from a remote source.

Downloads and registers a provider, making it available for creating
environments. Use this when the provider is not yet present locally.
- [`listEnvironments()`](./listEnvironments) — Lists all environments.

Returns every environment regardless of state. Use optional parameters
to filter or paginate the results.
- [`listInstalledProviders()`](./listInstalledProviders) — Lists all installed environment providers.

Returns every provider that has been registered or installed in the system.
- [`mergePatch()`](./mergePatch) — Merges a patch into the environment's project files.

Applies a set of file changes (additions, modifications, deletions) to
the environment in a single atomic operation.
- [`readFile()`](./readFile) — Reads a file from within an environment.

Retrieves the contents of a specific file from the environment's
filesystem. Useful for inspecting files without SSH access.
- [`restartEnvironment()`](./restartEnvironment) — Restarts an environment.

Performs a stop followed by a start on the environment. Useful for
applying configuration changes that require a fresh boot.
- [`sendPullRequest()`](./sendPullRequest) — Sends a pull request from the environment's current state.

Creates a pull request on the remote repository using the changes
present in the environment. The PR details are specified in the request.
- [`setDefaultProvider()`](./setDefaultProvider) — Sets an installed provider as the system default.

New environments will use this provider unless another is explicitly
specified during creation.
- [`startEnvironment()`](./startEnvironment) — Starts an environment.

Boots up the environment so it becomes active and ready for use.
The environment's provider must be running first.
- [`startProvider()`](./startProvider) — Starts the underlying provider for an environment.

Boots up the provider process that backs the environment, making it
ready to accept operations. This is distinct from starting the
environment itself.
- [`stopEnvironment()`](./stopEnvironment) — Stops a running environment.

Gracefully shuts down the environment, preserving its state for later
restart. Resources may be released depending on the provider.
- [`stopProvider()`](./stopProvider) — Stops the underlying provider for an environment.

Shuts down the provider process without destroying the environment.
The provider can be restarted later.
- [`updateEnvironment()`](./updateEnvironment) — Updates an existing environment's configuration.

Modifies environment settings such as name, resource allocations, or
other configurable properties.
- [`updateInstalledProvider()`](./updateInstalledProvider) — Updates the configuration of an installed provider.

Modifies provider settings such as name, credentials, or resource limits.
- [`writeFile()`](./writeFile) — Writes a file to an environment's filesystem.

Creates or overwrites a file at the specified path within the
environment. Useful for deploying configuration or code changes.
