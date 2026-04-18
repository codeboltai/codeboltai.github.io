---
cbapicategory:
  - name: createAndStartThread
    link: /docs/reference/plugin-sdk/api-reference/thread/createAndStartThread
    description: Creates and immediately starts a new thread.
  - name: createThread
    link: /docs/reference/plugin-sdk/api-reference/thread/createThread
    description: Creates a new thread with comprehensive options.
  - name: createThreadInBackground
    link: /docs/reference/plugin-sdk/api-reference/thread/createThreadInBackground
    description: Creates a thread in the background and resolves when the agent starts or fails.
  - name: deleteThread
    link: /docs/reference/plugin-sdk/api-reference/thread/deleteThread
    description: Deletes a thread.
  - name: getThreadDetail
    link: /docs/reference/plugin-sdk/api-reference/thread/getThreadDetail
    description: Retrieves detailed information about a specific thread.
  - name: getThreadFileChanges
    link: /docs/reference/plugin-sdk/api-reference/thread/getThreadFileChanges
    description: Retrieves file changes associated with a specific thread.
  - name: getThreadFileChangesSummary
    link: /docs/reference/plugin-sdk/api-reference/thread/getThreadFileChangesSummary
    description: "Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: { title, changes, files }"
  - name: getThreadList
    link: /docs/reference/plugin-sdk/api-reference/thread/getThreadList
    description: Retrieves a list of threads with optional filtering.
  - name: getThreadMessages
    link: /docs/reference/plugin-sdk/api-reference/thread/getThreadMessages
    description: Retrieves messages for a specific thread.
  - name: startThread
    link: /docs/reference/plugin-sdk/api-reference/thread/startThread
    description: Starts a thread.
  - name: updateThread
    link: /docs/reference/plugin-sdk/api-reference/thread/updateThread
    description: Updates an existing thread.
  - name: updateThreadStatus
    link: /docs/reference/plugin-sdk/api-reference/thread/updateThreadStatus
    description: Updates the status of a thread.
---
# Thread API

The `thread` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`createAndStartThread()`](./createAndStartThread) — Creates and immediately starts a new thread.
- [`createThread()`](./createThread) — Creates a new thread with comprehensive options.
- [`createThreadInBackground()`](./createThreadInBackground) — Creates a thread in the background and resolves when the agent starts or fails.
- [`deleteThread()`](./deleteThread) — Deletes a thread.
- [`getThreadDetail()`](./getThreadDetail) — Retrieves detailed information about a specific thread.
- [`getThreadFileChanges()`](./getThreadFileChanges) — Retrieves file changes associated with a specific thread.
- [`getThreadFileChangesSummary()`](./getThreadFileChangesSummary) — Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: { title, changes, files }
- [`getThreadList()`](./getThreadList) — Retrieves a list of threads with optional filtering.
- [`getThreadMessages()`](./getThreadMessages) — Retrieves messages for a specific thread.
- [`startThread()`](./startThread) — Starts a thread.
- [`updateThread()`](./updateThread) — Updates an existing thread.
- [`updateThreadStatus()`](./updateThreadStatus) — Updates the status of a thread.
