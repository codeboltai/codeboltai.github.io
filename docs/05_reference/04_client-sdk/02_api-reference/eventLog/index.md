---
cbapicategory:
  - name: createEvent
    link: /docs/reference/client-sdk/api-reference/eventLog/createEvent
    description: "Creates a new event within an event log instance.

Records a single event with its type, payload, and timestamp. Events
are immutable once created."
  - name: createEventsBatch
    link: /docs/reference/client-sdk/api-reference/eventLog/createEventsBatch
    description: "Creates multiple events in a single batch operation.

More efficient than creating events one at a time when you have
multiple events to record simultaneously."
  - name: createInstance
    link: /docs/reference/client-sdk/api-reference/eventLog/createInstance
    description: "Creates a new event log instance.

An event log instance acts as a container that groups related events
together. Create one per logical context (e.g., per agent session or workflow)."
  - name: deleteInstance
    link: /docs/reference/client-sdk/api-reference/eventLog/deleteInstance
    description: "Deletes an event log instance and all its associated events.

Permanently removes the instance. This action cannot be undone."
  - name: getInstance
    link: /docs/reference/client-sdk/api-reference/eventLog/getInstance
    description: "Retrieves a specific event log instance by its ID.

Returns the full details of a single event log instance including
its metadata and configuration."
  - name: listInstances
    link: /docs/reference/client-sdk/api-reference/eventLog/listInstances
    description: "Lists all event log instances.

Returns every event log instance in the system. Use optional parameters
to filter or paginate the results."
  - name: query
    link: /docs/reference/client-sdk/api-reference/eventLog/query
    description: "Queries events using filter criteria.

Searches across event log instances to find events matching specific
types, time ranges, or other filter conditions."
  - name: updateInstance
    link: /docs/reference/client-sdk/api-reference/eventLog/updateInstance
    description: "Updates an existing event log instance.

Modifies the instance's properties such as name, description, or
configuration settings."
---
# EventLog API

Event Log API

<CBAPICategory />

## Methods

- [`createEvent()`](./createEvent) — Creates a new event within an event log instance.

Records a single event with its type, payload, and timestamp. Events
are immutable once created.
- [`createEventsBatch()`](./createEventsBatch) — Creates multiple events in a single batch operation.

More efficient than creating events one at a time when you have
multiple events to record simultaneously.
- [`createInstance()`](./createInstance) — Creates a new event log instance.

An event log instance acts as a container that groups related events
together. Create one per logical context (e.g., per agent session or workflow).
- [`deleteInstance()`](./deleteInstance) — Deletes an event log instance and all its associated events.

Permanently removes the instance. This action cannot be undone.
- [`getInstance()`](./getInstance) — Retrieves a specific event log instance by its ID.

Returns the full details of a single event log instance including
its metadata and configuration.
- [`listInstances()`](./listInstances) — Lists all event log instances.

Returns every event log instance in the system. Use optional parameters
to filter or paginate the results.
- [`query()`](./query) — Queries events using filter criteria.

Searches across event log instances to find events matching specific
types, time ranges, or other filter conditions.
- [`updateInstance()`](./updateInstance) — Updates an existing event log instance.

Modifies the instance's properties such as name, description, or
configuration settings.
