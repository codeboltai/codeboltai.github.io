---
cbapicategory:
  - name: createInstance
    link: /docs/reference/client-sdk/api-reference/kvStore/createInstance
    description: "Creates a new KV store instance.

An instance is an isolated key-value store that can contain multiple
namespaces. Use separate instances to isolate data between different
agents or workflows."
  - name: deleteInstance
    link: /docs/reference/client-sdk/api-reference/kvStore/deleteInstance
    description: "Deletes a KV store instance and all its data.

Permanently removes the instance, all its namespaces, and all
stored key-value pairs. This action cannot be undone."
  - name: deleteNamespace
    link: /docs/reference/client-sdk/api-reference/kvStore/deleteNamespace
    description: "Deletes all key-value pairs within a namespace.

Clears the entire namespace, removing every key and its associated
value. Other namespaces in the instance are not affected."
  - name: deleteValue
    link: /docs/reference/client-sdk/api-reference/kvStore/deleteValue
    description: "Deletes a single key-value pair from the store.

Removes the specified key and its value from the namespace. Other
keys in the same namespace are not affected."
  - name: getInstance
    link: /docs/reference/client-sdk/api-reference/kvStore/getInstance
    description: "Retrieves a specific KV store instance by its ID.

Returns the full details of the instance including its configuration
and namespace listing."
  - name: getValue
    link: /docs/reference/client-sdk/api-reference/kvStore/getValue
    description: "Retrieves a value by its key within a specific namespace.

Looks up a single key-value pair in the specified instance and
namespace. Returns the value along with its metadata."
  - name: listInstances
    link: /docs/reference/client-sdk/api-reference/kvStore/listInstances
    description: "Lists all KV store instances.

Returns every instance in the system with their metadata and
namespace information."
  - name: query
    link: /docs/reference/client-sdk/api-reference/kvStore/query
    description: "Queries key-value data using filter criteria.

Searches across namespaces and keys using the provided filter
parameters. Useful for finding values that match specific patterns
or conditions."
  - name: setValue
    link: /docs/reference/client-sdk/api-reference/kvStore/setValue
    description: "Sets a key-value pair in the store.

Creates or overwrites a value at the specified key within a namespace
and instance. The value can be any JSON-serializable data."
  - name: updateInstance
    link: /docs/reference/client-sdk/api-reference/kvStore/updateInstance
    description: "Updates a KV store instance's configuration.

Modifies instance properties such as name or settings. The stored
data is not affected by instance updates."
---
# KvStore API

KV Store API

<CBAPICategory />

## Methods

- [`createInstance()`](./createInstance) — Creates a new KV store instance.

An instance is an isolated key-value store that can contain multiple
namespaces. Use separate instances to isolate data between different
agents or workflows.
- [`deleteInstance()`](./deleteInstance) — Deletes a KV store instance and all its data.

Permanently removes the instance, all its namespaces, and all
stored key-value pairs. This action cannot be undone.
- [`deleteNamespace()`](./deleteNamespace) — Deletes all key-value pairs within a namespace.

Clears the entire namespace, removing every key and its associated
value. Other namespaces in the instance are not affected.
- [`deleteValue()`](./deleteValue) — Deletes a single key-value pair from the store.

Removes the specified key and its value from the namespace. Other
keys in the same namespace are not affected.
- [`getInstance()`](./getInstance) — Retrieves a specific KV store instance by its ID.

Returns the full details of the instance including its configuration
and namespace listing.
- [`getValue()`](./getValue) — Retrieves a value by its key within a specific namespace.

Looks up a single key-value pair in the specified instance and
namespace. Returns the value along with its metadata.
- [`listInstances()`](./listInstances) — Lists all KV store instances.

Returns every instance in the system with their metadata and
namespace information.
- [`query()`](./query) — Queries key-value data using filter criteria.

Searches across namespaces and keys using the provided filter
parameters. Useful for finding values that match specific patterns
or conditions.
- [`setValue()`](./setValue) — Sets a key-value pair in the store.

Creates or overwrites a value at the specified key within a namespace
and instance. The value can be any JSON-serializable data.
- [`updateInstance()`](./updateInstance) — Updates a KV store instance's configuration.

Modifies instance properties such as name or settings. The stored
data is not affected by instance updates.
