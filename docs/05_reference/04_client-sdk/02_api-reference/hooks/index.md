---
cbapicategory:
  - name: create
    link: /docs/reference/client-sdk/api-reference/hooks/create
    description: "Creates a new hook.

Registers a hook that will fire when the specified event occurs.
The hook is enabled by default upon creation."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/hooks/delete
    description: "Deletes a hook.

Permanently removes a hook registration. The hook will no longer
fire for any events after deletion."
  - name: disable
    link: /docs/reference/client-sdk/api-reference/hooks/disable
    description: "Disables a hook without deleting it.

Prevents the hook from firing while preserving its configuration.
The hook can be re-enabled later with ."
  - name: enable
    link: /docs/reference/client-sdk/api-reference/hooks/enable
    description: "Enables a previously disabled hook.

Re-activates the hook so it will fire again when its event occurs.
Has no effect if the hook is already enabled."
  - name: get
    link: /docs/reference/client-sdk/api-reference/hooks/get
    description: "Retrieves a specific hook by its ID.

Returns the full configuration and state of a single hook."
  - name: initialize
    link: /docs/reference/client-sdk/api-reference/hooks/initialize
    description: "Initializes the hooks subsystem.

Sets up the hooks infrastructure, loading any persisted hooks and
preparing event listeners. Should be called once during application
bootstrap before registering or triggering hooks."
  - name: list
    link: /docs/reference/client-sdk/api-reference/hooks/list
    description: "Lists all registered hooks.

Returns every hook in the system, including both enabled and disabled
hooks. Use optional parameters to filter or paginate the results."
  - name: update
    link: /docs/reference/client-sdk/api-reference/hooks/update
    description: "Updates an existing hook's configuration.

Modifies hook properties such as its name, event trigger, or action.
Only the fields provided in the request body are updated."
---
# Hooks API

Hooks API

<CBAPICategory />

## Methods

- [`create()`](./create) — Creates a new hook.

Registers a hook that will fire when the specified event occurs.
The hook is enabled by default upon creation.
- [`delete()`](./delete) — Deletes a hook.

Permanently removes a hook registration. The hook will no longer
fire for any events after deletion.
- [`disable()`](./disable) — Disables a hook without deleting it.

Prevents the hook from firing while preserving its configuration.
The hook can be re-enabled later with .
- [`enable()`](./enable) — Enables a previously disabled hook.

Re-activates the hook so it will fire again when its event occurs.
Has no effect if the hook is already enabled.
- [`get()`](./get) — Retrieves a specific hook by its ID.

Returns the full configuration and state of a single hook.
- [`initialize()`](./initialize) — Initializes the hooks subsystem.

Sets up the hooks infrastructure, loading any persisted hooks and
preparing event listeners. Should be called once during application
bootstrap before registering or triggering hooks.
- [`list()`](./list) — Lists all registered hooks.

Returns every hook in the system, including both enabled and disabled
hooks. Use optional parameters to filter or paginate the results.
- [`update()`](./update) — Updates an existing hook's configuration.

Modifies hook properties such as its name, event trigger, or action.
Only the fields provided in the request body are updated.
