---
cbapicategory:
  - name: edit
    link: /docs/reference/client-sdk/api-reference/apps/edit
    description: "Opens an application for editing.

Launches the app's source code or configuration in an editable mode,
allowing modifications to its behavior."
  - name: fork
    link: /docs/reference/client-sdk/api-reference/apps/fork
    description: "Forks an existing application.

Creates a copy of an app that can be independently modified and
customized. Useful for creating variants of existing apps."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/apps/getAll
    description: "Retrieves all registered applications.

Returns the complete list of apps available in the system, both
installed and available for installation."
  - name: getAppFromCache
    link: /docs/reference/client-sdk/api-reference/apps/getAppFromCache
    description: "Retrieves an app's data from the cache.

Returns the cached representation of an app for fast access,
avoiding a full database or filesystem lookup."
  - name: getById
    link: /docs/reference/client-sdk/api-reference/apps/getById
    description: "Retrieves a specific application by its ID.

Returns the full App object including its metadata, configuration,
and current status."
  - name: install
    link: /docs/reference/client-sdk/api-reference/apps/install
    description: "Installs an application.

Downloads and registers an app, making it available in the CodeBolt
environment for use."
  - name: start
    link: /docs/reference/client-sdk/api-reference/apps/start
    description: "Starts an installed application.

Launches an app that has been previously installed, making its
functionality active in the runtime."
  - name: uninstall
    link: /docs/reference/client-sdk/api-reference/apps/uninstall
    description: "Uninstalls an application.

Removes an installed app and cleans up its associated resources."
  - name: updateAppToCache
    link: /docs/reference/client-sdk/api-reference/apps/updateAppToCache
    description: "Updates an app's data in the cache.

Refreshes the cached representation of an app, ensuring that the
latest metadata is available without a full reload."
---
# Apps API

Apps API

<CBAPICategory />

## Methods

- [`edit()`](./edit) — Opens an application for editing.

Launches the app's source code or configuration in an editable mode,
allowing modifications to its behavior.
- [`fork()`](./fork) — Forks an existing application.

Creates a copy of an app that can be independently modified and
customized. Useful for creating variants of existing apps.
- [`getAll()`](./getAll) — Retrieves all registered applications.

Returns the complete list of apps available in the system, both
installed and available for installation.
- [`getAppFromCache()`](./getAppFromCache) — Retrieves an app's data from the cache.

Returns the cached representation of an app for fast access,
avoiding a full database or filesystem lookup.
- [`getById()`](./getById) — Retrieves a specific application by its ID.

Returns the full App object including its metadata, configuration,
and current status.
- [`install()`](./install) — Installs an application.

Downloads and registers an app, making it available in the CodeBolt
environment for use.
- [`start()`](./start) — Starts an installed application.

Launches an app that has been previously installed, making its
functionality active in the runtime.
- [`uninstall()`](./uninstall) — Uninstalls an application.

Removes an installed app and cleans up its associated resources.
- [`updateAppToCache()`](./updateAppToCache) — Updates an app's data in the cache.

Refreshes the cached representation of an app, ensuring that the
latest metadata is available without a full reload.
