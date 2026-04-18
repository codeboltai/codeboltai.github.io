---
cbapicategory:
  - name: cancel
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/cancel
    description: "Cancels a file update intent.

Aborts an in-progress intent and releases any held resources or locks.
Use this when an operation fails or needs to be terminated before
completion."
  - name: checkOverlap
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/checkOverlap
    description: "Checks for overlapping file update intents.

Evaluates whether proposed file operations would conflict with existing
intents from other agents or processes. Returns detailed conflict information
to help resolve concurrent modification issues."
  - name: complete
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/complete
    description: "Marks a file update intent as complete.

Finalizes an intent after all file modifications are finished.
This releases locks and records the successful completion of
the update operation."
  - name: create
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/create
    description: "Creates a new file update intent.

Registers an intent to modify specified files on behalf of an agent.
The intent coordinates access to prevent conflicts with other
concurrent modifications."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/delete
    description: "Deletes a file update intent.

Removes the specified intent and releases any file locks it held.
Other agents will then be able to create intents for those files."
  - name: get
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/get
    description: "Retrieves a specific file update intent by its ID.

Returns detailed information about a single intent including its
current status, files, agent, and metadata."
  - name: getBlockedFiles
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/getBlockedFiles
    description: "Retrieves a list of currently blocked files.

Returns files that have active update intents, meaning they are
locked or being modified by other agents. Use this to identify
unavailable files before attempting modifications."
  - name: getByAgent
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/getByAgent
    description: "Retrieves file update intents for a specific agent.

Returns all intents registered by a particular agent, including
their status, associated files, and metadata. Useful for monitoring
an agent's active operations."
  - name: getFilesWithIntents
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/getFilesWithIntents
    description: "Retrieves files that have active update intents.

Returns a list of file paths that currently have one or more
registered update intents. This is useful for quickly identifying
which files are in the process of being modified."
  - name: list
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/list
    description: "Lists all file update intents in the system.

Returns every intent regardless of status or owning agent. Use this
for comprehensive intent monitoring or debugging coordination issues."
  - name: update
    link: /docs/reference/client-sdk/api-reference/fileUpdateIntents/update
    description: "Updates an existing file update intent.

Modifies the properties, files, or status of an existing intent.
Use this to extend file ranges, update metadata, or change intent
configuration as operations progress."
---
# FileUpdateIntents API

File Update Intents API

<CBAPICategory />

## Methods

- [`cancel()`](./cancel) — Cancels a file update intent.

Aborts an in-progress intent and releases any held resources or locks.
Use this when an operation fails or needs to be terminated before
completion.
- [`checkOverlap()`](./checkOverlap) — Checks for overlapping file update intents.

Evaluates whether proposed file operations would conflict with existing
intents from other agents or processes. Returns detailed conflict information
to help resolve concurrent modification issues.
- [`complete()`](./complete) — Marks a file update intent as complete.

Finalizes an intent after all file modifications are finished.
This releases locks and records the successful completion of
the update operation.
- [`create()`](./create) — Creates a new file update intent.

Registers an intent to modify specified files on behalf of an agent.
The intent coordinates access to prevent conflicts with other
concurrent modifications.
- [`delete()`](./delete) — Deletes a file update intent.

Removes the specified intent and releases any file locks it held.
Other agents will then be able to create intents for those files.
- [`get()`](./get) — Retrieves a specific file update intent by its ID.

Returns detailed information about a single intent including its
current status, files, agent, and metadata.
- [`getBlockedFiles()`](./getBlockedFiles) — Retrieves a list of currently blocked files.

Returns files that have active update intents, meaning they are
locked or being modified by other agents. Use this to identify
unavailable files before attempting modifications.
- [`getByAgent()`](./getByAgent) — Retrieves file update intents for a specific agent.

Returns all intents registered by a particular agent, including
their status, associated files, and metadata. Useful for monitoring
an agent's active operations.
- [`getFilesWithIntents()`](./getFilesWithIntents) — Retrieves files that have active update intents.

Returns a list of file paths that currently have one or more
registered update intents. This is useful for quickly identifying
which files are in the process of being modified.
- [`list()`](./list) — Lists all file update intents in the system.

Returns every intent regardless of status or owning agent. Use this
for comprehensive intent monitoring or debugging coordination issues.
- [`update()`](./update) — Updates an existing file update intent.

Modifies the properties, files, or status of an existing intent.
Use this to extend file ranges, update metadata, or change intent
configuration as operations progress.
