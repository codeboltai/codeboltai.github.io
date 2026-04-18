---
cbapicategory:
  - name: activateThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/activateThreadStep
    description: "Activates a step in a chat thread.

Marks the specified step as the currently active step, indicating
that work is in progress on this step."
  - name: addSteeringStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/addSteeringStep
    description: "Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints."
  - name: addStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/addStep
    description: "Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path."
  - name: addThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/addThreadStep
    description: "Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation."
  - name: autoUpdateThreadName
    link: /docs/reference/plugin-sdk/api-reference/chatApi/autoUpdateThreadName
    description: "Automatically generates and updates the thread name based on content.

Uses the user's message or conversation context to generate a
descriptive name for the thread, replacing any existing name."
  - name: clearThreadsMemory
    link: /docs/reference/plugin-sdk/api-reference/chatApi/clearThreadsMemory
    description: "Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state."
  - name: completeThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/completeThreadStep
    description: "Completes a step in a chat thread.

Marks the specified step as completed, optionally recording
completion details such as the outcome or output."
  - name: createRemoteTask
    link: /docs/reference/plugin-sdk/api-reference/chatApi/createRemoteTask
    description: "Creates a new remote task.

Registers a task that will be executed by a remote agent or service,
tracking it within the chat context."
  - name: createScheduledTask
    link: /docs/reference/plugin-sdk/api-reference/chatApi/createScheduledTask
    description: "Creates a new scheduled task.

Registers a task that will be executed at a future time, tracked
within the chat context."
  - name: createThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/createThread
    description: "Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread."
  - name: deleteSteeringStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/deleteSteeringStep
    description: "Deletes a steering step from a thread.

Removes the specified steering instruction from the thread."
  - name: deleteTaskStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/deleteTaskStep
    description: "Deletes a step from a thread via the task endpoint.

Removes a specific step from a thread's step sequence, accessed
through the task management API path."
  - name: deleteThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/deleteThread
    description: "Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps."
  - name: deleteThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/deleteThreadStep
    description: "Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence."
  - name: getActiveThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getActiveThreadStep
    description: "Retrieves the currently active step for a thread.

Returns the step that is currently in progress, or null if no
step is active."
  - name: getMessages
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getMessages
    description: "Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically."
  - name: getSteeringSteps
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getSteeringSteps
    description: "Retrieves all steering steps for a thread.

Returns the list of steering instructions that have been added
to guide agent behavior in the thread."
  - name: getTasks
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getTasks
    description: "Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system."
  - name: getTaskSteps
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getTaskSteps
    description: "Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path."
  - name: getThreadInitiated
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getThreadInitiated
    description: "Checks whether a thread has been initiated.

Returns a boolean indicating if the thread has gone through the
initiation process and is ready for interaction."
  - name: getThreadsInfo
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getThreadsInfo
    description: "Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar."
  - name: getThreadSteps
    link: /docs/reference/plugin-sdk/api-reference/chatApi/getThreadSteps
    description: "Retrieves all steps for a chat thread.

Returns the complete step sequence for the given thread, showing
the progression of work within the conversation."
  - name: hideThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/hideThread
    description: "Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later."
  - name: initiateNewThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/initiateNewThread
    description: "Initiates a new chat thread or retrieves an existing one.

Creates a new thread if one doesn't exist for the given context,
or returns the existing thread. This is the primary entry point
for starting a conversation."
  - name: initThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/initThread
    description: "Initializes a chat thread.

An alias for  that creates or retrieves
a thread based on the provided parameters."
  - name: removeThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/removeThread
    description: "Removes a thread.

Removes the specified thread from the chat system. This is a
soft-delete that marks the thread as removed."
  - name: setActiveThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/setActiveThread
    description: "Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations."
  - name: storeMessage
    link: /docs/reference/plugin-sdk/api-reference/chatApi/storeMessage
    description: "Stores a new message in a chat thread.

Persists a message to the thread's message history, recording
who sent it and its content."
  - name: switchThread
    link: /docs/reference/plugin-sdk/api-reference/chatApi/switchThread
    description: "Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates."
  - name: syncThreads
    link: /docs/reference/plugin-sdk/api-reference/chatApi/syncThreads
    description: "Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies."
  - name: updateSteeringStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateSteeringStep
    description: "Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step."
  - name: updateTask
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateTask
    description: "Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread."
  - name: updateTaskStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateTaskStep
    description: "Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path."
  - name: updateThreadLocation
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateThreadLocation
    description: "Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation."
  - name: updateThreadName
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateThreadName
    description: "Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list."
  - name: updateThreadStatus
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateThreadStatus
    description: "Updates the status of a chat thread.

Changes the thread's status (e.g., active, paused, completed),
which affects how it is displayed and processed."
  - name: updateThreadStep
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateThreadStep
    description: "Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata."
  - name: updateThreadType
    link: /docs/reference/plugin-sdk/api-reference/chatApi/updateThreadType
    description: "Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior."
---
# ChatApi API

The `chatApi` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`activateThreadStep()`](./activateThreadStep) — Activates a step in a chat thread.

Marks the specified step as the currently active step, indicating
that work is in progress on this step.
- [`addSteeringStep()`](./addSteeringStep) — Adds a steering step to a thread.

Creates a steering step that guides the agent's behavior during
execution, providing directional instructions or constraints.
- [`addStep()`](./addStep) — Adds a step to a thread via the add-step endpoint.

An alternative method for adding steps that accepts the thread ID
as part of the request body rather than the URL path.
- [`addThreadStep()`](./addThreadStep) — Adds a step to a chat thread.

Creates a new step within the thread's step sequence, representing
a discrete unit of work or progress in the conversation.
- [`autoUpdateThreadName()`](./autoUpdateThreadName) — Automatically generates and updates the thread name based on content.

Uses the user's message or conversation context to generate a
descriptive name for the thread, replacing any existing name.
- [`clearThreadsMemory()`](./clearThreadsMemory) — Clears all threads from memory.

Removes all thread data from the in-memory cache, typically used
when switching projects to ensure a clean state.
- [`completeThreadStep()`](./completeThreadStep) — Completes a step in a chat thread.

Marks the specified step as completed, optionally recording
completion details such as the outcome or output.
- [`createRemoteTask()`](./createRemoteTask) — Creates a new remote task.

Registers a task that will be executed by a remote agent or service,
tracking it within the chat context.
- [`createScheduledTask()`](./createScheduledTask) — Creates a new scheduled task.

Registers a task that will be executed at a future time, tracked
within the chat context.
- [`createThread()`](./createThread) — Creates a new chat thread.

Provisions a new thread with the specified configuration, without
the automatic lookup behavior of initiateNewThread.
- [`deleteSteeringStep()`](./deleteSteeringStep) — Deletes a steering step from a thread.

Removes the specified steering instruction from the thread.
- [`deleteTaskStep()`](./deleteTaskStep) — Deletes a step from a thread via the task endpoint.

Removes a specific step from a thread's step sequence, accessed
through the task management API path.
- [`deleteThread()`](./deleteThread) — Deletes a chat thread.

Permanently removes the specified thread and all its associated
messages and steps.
- [`deleteThreadStep()`](./deleteThreadStep) — Deletes a step from a chat thread.

Removes the specified step from the thread's step sequence.
- [`getActiveThreadStep()`](./getActiveThreadStep) — Retrieves the currently active step for a thread.

Returns the step that is currently in progress, or null if no
step is active.
- [`getMessages()`](./getMessages) — Retrieves all messages for a specific thread.

Returns the complete message history for the given thread,
ordered chronologically.
- [`getSteeringSteps()`](./getSteeringSteps) — Retrieves all steering steps for a thread.

Returns the list of steering instructions that have been added
to guide agent behavior in the thread.
- [`getTasks()`](./getTasks) — Retrieves all chat tasks.

Returns the list of tasks that have been created through the
chat system.
- [`getTaskSteps()`](./getTaskSteps) — Retrieves steps for a thread via the task endpoint.

Returns the step sequence for a thread, accessed through the
task management API path.
- [`getThreadInitiated()`](./getThreadInitiated) — Checks whether a thread has been initiated.

Returns a boolean indicating if the thread has gone through the
initiation process and is ready for interaction.
- [`getThreadsInfo()`](./getThreadsInfo) — Retrieves information for all chat threads.

Returns summary information for every thread in the system,
suitable for populating a thread list or sidebar.
- [`getThreadSteps()`](./getThreadSteps) — Retrieves all steps for a chat thread.

Returns the complete step sequence for the given thread, showing
the progression of work within the conversation.
- [`hideThread()`](./hideThread) — Hides a thread from the user interface.

Removes the thread from the visible thread list without deleting it.
The thread data is preserved and can be restored later.
- [`initiateNewThread()`](./initiateNewThread) — Initiates a new chat thread or retrieves an existing one.

Creates a new thread if one doesn't exist for the given context,
or returns the existing thread. This is the primary entry point
for starting a conversation.
- [`initThread()`](./initThread) — Initializes a chat thread.

An alias for  that creates or retrieves
a thread based on the provided parameters.
- [`removeThread()`](./removeThread) — Removes a thread.

Removes the specified thread from the chat system. This is a
soft-delete that marks the thread as removed.
- [`setActiveThread()`](./setActiveThread) — Sets the active chat thread.

Switches the current focus to the specified thread, making it the
primary conversation context for subsequent operations.
- [`storeMessage()`](./storeMessage) — Stores a new message in a chat thread.

Persists a message to the thread's message history, recording
who sent it and its content.
- [`switchThread()`](./switchThread) — Switches to a different chat thread.

Changes the active conversation context to the specified thread,
triggering any associated UI updates.
- [`syncThreads()`](./syncThreads) — Synchronizes threads from the thread store to the chat manager.

Ensures that the in-memory chat manager is up-to-date with the
persisted thread store, resolving any inconsistencies.
- [`updateSteeringStep()`](./updateSteeringStep) — Updates a steering step in a thread.

Modifies the instruction or metadata of an existing steering step.
- [`updateTask()`](./updateTask) — Updates task information for a thread.

Modifies the task metadata or configuration associated with
a chat thread.
- [`updateTaskStep()`](./updateTaskStep) — Updates a step in a thread via the task endpoint.

Modifies the properties of a thread step, accessed through the
task management API path.
- [`updateThreadLocation()`](./updateThreadLocation) — Updates the location context of a chat thread.

Associates the thread with a specific file path or project location,
providing context for the conversation.
- [`updateThreadName()`](./updateThreadName) — Updates the display name of a chat thread.

Changes the human-readable name shown in the thread list.
- [`updateThreadStatus()`](./updateThreadStatus) — Updates the status of a chat thread.

Changes the thread's status (e.g., active, paused, completed),
which affects how it is displayed and processed.
- [`updateThreadStep()`](./updateThreadStep) — Updates a step within a chat thread.

Modifies the properties of an existing step, such as its status,
content, or metadata.
- [`updateThreadType()`](./updateThreadType) — Updates the type of a chat thread.

Changes the thread's type classification, which can affect routing,
display, and agent behavior.
