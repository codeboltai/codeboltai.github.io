---
cbapicategory:
  - name: addEpisodicEvents
    link: /docs/reference/client-sdk/api-reference/memory/addEpisodicEvents
    description: "Appends new events to an episodic memory.

Adds one or more event records to the episodic memory's timeline. Events capture
discrete actions, observations, or state changes that occurred during an operation."
  - name: archiveContextThread
    link: /docs/reference/client-sdk/api-reference/memory/archiveContextThread
    description: Archives a context thread to remove it from active listings.
  - name: archiveEpisodicMemory
    link: /docs/reference/client-sdk/api-reference/memory/archiveEpisodicMemory
    description: Archives an episodic memory to remove it from active listings.
  - name: archiveJsonThread
    link: /docs/reference/client-sdk/api-reference/memory/archiveJsonThread
    description: Archives a JSON thread to remove it from active listings.
  - name: archiveMarkdownThread
    link: /docs/reference/client-sdk/api-reference/memory/archiveMarkdownThread
    description: Archives a markdown thread to remove it from active listings.
  - name: archiveThread
    link: /docs/reference/client-sdk/api-reference/memory/archiveThread
    description: "Archives a generic memory thread to remove it from active listings.

Moves the thread to an archived state where it is preserved but hidden from default
queries. Archived threads can be restored later."
  - name: createContextThread
    link: /docs/reference/client-sdk/api-reference/memory/createContextThread
    description: "Creates a new context memory thread.

Initializes a thread designed to capture and store conversational context. Context
threads preserve the state and knowledge gathered during chat interactions for later
recall and summarization."
  - name: createEpisodicMemory
    link: /docs/reference/client-sdk/api-reference/memory/createEpisodicMemory
    description: "Creates a new episodic memory for tracking temporal events and experiences.

Episodic memories store sequences of events that occurred during agent operations,
similar to how human episodic memory records experiences. They are useful for
learning from past actions and debugging agent behavior."
  - name: createJsonThread
    link: /docs/reference/client-sdk/api-reference/memory/createJsonThread
    description: "Creates a new JSON-formatted memory thread.

Initializes a thread optimized for storing structured JSON data. JSON threads are
ideal for configuration, structured records, and data that needs programmatic access."
  - name: createMarkdownThread
    link: /docs/reference/client-sdk/api-reference/memory/createMarkdownThread
    description: "Creates a new markdown-formatted memory thread.

Initializes a thread optimized for storing and rendering markdown content. Markdown
threads are ideal for notes, documentation, and free-form text with formatting."
  - name: createThread
    link: /docs/reference/client-sdk/api-reference/memory/createThread
    description: "Creates a new generic memory thread.

Initializes a memory thread that can store arbitrary content. Generic threads are the
base type from which specialized thread types (markdown, JSON, context) derive."
  - name: getContextThread
    link: /docs/reference/client-sdk/api-reference/memory/getContextThread
    description: "Retrieves a specific context thread by its unique identifier.

Returns the full context thread including captured conversation data and metadata."
  - name: getEpisodicAgents
    link: /docs/reference/client-sdk/api-reference/memory/getEpisodicAgents
    description: "Retrieves the distinct agents that have contributed events to an episodic memory.

Returns the unique set of agent identifiers that recorded events in this memory."
  - name: getEpisodicEvents
    link: /docs/reference/client-sdk/api-reference/memory/getEpisodicEvents
    description: "Retrieves events from an episodic memory with optional filtering.

Returns the sequence of events stored in the episodic memory, optionally filtered
by event type, date range, or agent."
  - name: getEpisodicEventTypes
    link: /docs/reference/client-sdk/api-reference/memory/getEpisodicEventTypes
    description: "Retrieves the distinct event types used in an episodic memory.

Returns the unique set of event type strings present in the memory, useful for
building filter UIs or understanding the kinds of events that were recorded."
  - name: getEpisodicMemory
    link: /docs/reference/client-sdk/api-reference/memory/getEpisodicMemory
    description: "Retrieves a specific episodic memory by its unique identifier.

Returns the episodic memory metadata. Use  to access
the individual events stored within the memory."
  - name: getEpisodicTags
    link: /docs/reference/client-sdk/api-reference/memory/getEpisodicTags
    description: "Retrieves the distinct tags applied to events in an episodic memory.

Returns the unique set of tag strings used across all events in the memory."
  - name: getJsonThread
    link: /docs/reference/client-sdk/api-reference/memory/getJsonThread
    description: "Retrieves a specific JSON thread by its unique identifier.

Returns the full JSON thread including its stored data payload and metadata."
  - name: getMarkdownThread
    link: /docs/reference/client-sdk/api-reference/memory/getMarkdownThread
    description: "Retrieves a specific markdown thread by its unique identifier.

Returns the full markdown thread including its rendered content and metadata."
  - name: getThread
    link: /docs/reference/client-sdk/api-reference/memory/getThread
    description: "Retrieves a specific memory thread by its unique identifier.

Returns the full thread object including metadata, content references, and status."
  - name: listContextThreads
    link: /docs/reference/client-sdk/api-reference/memory/listContextThreads
    description: "Lists all context memory threads with optional filtering.

Returns only threads of the context type, filtered by the provided parameters."
  - name: listEpisodicMemories
    link: /docs/reference/client-sdk/api-reference/memory/listEpisodicMemories
    description: "Lists all episodic memories with optional filtering.

Returns episodic memory records that match the provided criteria."
  - name: listJsonThreads
    link: /docs/reference/client-sdk/api-reference/memory/listJsonThreads
    description: "Lists all JSON memory threads with optional filtering.

Returns only threads of the JSON type, filtered by the provided parameters."
  - name: listMarkdownThreads
    link: /docs/reference/client-sdk/api-reference/memory/listMarkdownThreads
    description: "Lists all markdown memory threads with optional filtering.

Returns only threads of the markdown type, filtered by the provided parameters."
  - name: listThreads
    link: /docs/reference/client-sdk/api-reference/memory/listThreads
    description: "Lists all generic memory threads with optional filtering.

Returns memory threads that match the provided filter criteria. Use this to browse
or search through stored memory threads."
  - name: saveContextFromChat
    link: /docs/reference/client-sdk/api-reference/memory/saveContextFromChat
    description: "Saves context extracted from a chat conversation into a context thread.

Captures relevant information, decisions, and knowledge from an ongoing or completed
chat session and persists it in the specified context thread for future reference."
  - name: summarizeContextThread
    link: /docs/reference/client-sdk/api-reference/memory/summarizeContextThread
    description: "Generates a summary of the context stored in a thread.

Uses LLM processing to create a concise summary of all the context captured in the
thread. Useful for creating condensed knowledge bases from lengthy conversations."
  - name: unarchiveEpisodicMemory
    link: /docs/reference/client-sdk/api-reference/memory/unarchiveEpisodicMemory
    description: Restores an archived episodic memory back to active status.
  - name: unarchiveJsonThread
    link: /docs/reference/client-sdk/api-reference/memory/unarchiveJsonThread
    description: Restores an archived JSON thread back to active status.
  - name: unarchiveMarkdownThread
    link: /docs/reference/client-sdk/api-reference/memory/unarchiveMarkdownThread
    description: Restores an archived markdown thread back to active status.
  - name: updateContextThread
    link: /docs/reference/client-sdk/api-reference/memory/updateContextThread
    description: "Updates the metadata of a context thread.

Modifies thread-level properties such as name and tags without affecting the stored
conversational context."
  - name: updateEpisodicMemory
    link: /docs/reference/client-sdk/api-reference/memory/updateEpisodicMemory
    description: Updates the metadata of an episodic memory.
  - name: updateJsonThread
    link: /docs/reference/client-sdk/api-reference/memory/updateJsonThread
    description: "Updates the metadata of a JSON thread (name, tags, etc.).

Modifies thread-level properties without changing the stored JSON data.
Use  to change the actual data payload."
  - name: updateJsonThreadData
    link: /docs/reference/client-sdk/api-reference/memory/updateJsonThreadData
    description: "Replaces the JSON data payload of a thread.

Updates the structured data stored in the JSON thread. This is separate from metadata
updates to allow efficient data-only writes."
  - name: updateMarkdownThread
    link: /docs/reference/client-sdk/api-reference/memory/updateMarkdownThread
    description: "Updates the metadata of a markdown thread (name, tags, etc.).

Modifies thread-level properties without changing the markdown content itself.
Use  to change the actual markdown text."
  - name: updateMarkdownThreadContent
    link: /docs/reference/client-sdk/api-reference/memory/updateMarkdownThreadContent
    description: "Replaces the markdown content of a thread.

Updates the actual markdown text content stored in the thread. This is separate from
metadata updates to allow efficient content-only writes."
  - name: updateThread
    link: /docs/reference/client-sdk/api-reference/memory/updateThread
    description: "Updates the metadata or content of a generic memory thread.

Modifies an existing thread's properties such as name, tags, or stored data."
---
# Memory API

Memory API

<CBAPICategory />

## Methods

- [`addEpisodicEvents()`](./addEpisodicEvents) — Appends new events to an episodic memory.

Adds one or more event records to the episodic memory's timeline. Events capture
discrete actions, observations, or state changes that occurred during an operation.
- [`archiveContextThread()`](./archiveContextThread) — Archives a context thread to remove it from active listings.
- [`archiveEpisodicMemory()`](./archiveEpisodicMemory) — Archives an episodic memory to remove it from active listings.
- [`archiveJsonThread()`](./archiveJsonThread) — Archives a JSON thread to remove it from active listings.
- [`archiveMarkdownThread()`](./archiveMarkdownThread) — Archives a markdown thread to remove it from active listings.
- [`archiveThread()`](./archiveThread) — Archives a generic memory thread to remove it from active listings.

Moves the thread to an archived state where it is preserved but hidden from default
queries. Archived threads can be restored later.
- [`createContextThread()`](./createContextThread) — Creates a new context memory thread.

Initializes a thread designed to capture and store conversational context. Context
threads preserve the state and knowledge gathered during chat interactions for later
recall and summarization.
- [`createEpisodicMemory()`](./createEpisodicMemory) — Creates a new episodic memory for tracking temporal events and experiences.

Episodic memories store sequences of events that occurred during agent operations,
similar to how human episodic memory records experiences. They are useful for
learning from past actions and debugging agent behavior.
- [`createJsonThread()`](./createJsonThread) — Creates a new JSON-formatted memory thread.

Initializes a thread optimized for storing structured JSON data. JSON threads are
ideal for configuration, structured records, and data that needs programmatic access.
- [`createMarkdownThread()`](./createMarkdownThread) — Creates a new markdown-formatted memory thread.

Initializes a thread optimized for storing and rendering markdown content. Markdown
threads are ideal for notes, documentation, and free-form text with formatting.
- [`createThread()`](./createThread) — Creates a new generic memory thread.

Initializes a memory thread that can store arbitrary content. Generic threads are the
base type from which specialized thread types (markdown, JSON, context) derive.
- [`getContextThread()`](./getContextThread) — Retrieves a specific context thread by its unique identifier.

Returns the full context thread including captured conversation data and metadata.
- [`getEpisodicAgents()`](./getEpisodicAgents) — Retrieves the distinct agents that have contributed events to an episodic memory.

Returns the unique set of agent identifiers that recorded events in this memory.
- [`getEpisodicEvents()`](./getEpisodicEvents) — Retrieves events from an episodic memory with optional filtering.

Returns the sequence of events stored in the episodic memory, optionally filtered
by event type, date range, or agent.
- [`getEpisodicEventTypes()`](./getEpisodicEventTypes) — Retrieves the distinct event types used in an episodic memory.

Returns the unique set of event type strings present in the memory, useful for
building filter UIs or understanding the kinds of events that were recorded.
- [`getEpisodicMemory()`](./getEpisodicMemory) — Retrieves a specific episodic memory by its unique identifier.

Returns the episodic memory metadata. Use  to access
the individual events stored within the memory.
- [`getEpisodicTags()`](./getEpisodicTags) — Retrieves the distinct tags applied to events in an episodic memory.

Returns the unique set of tag strings used across all events in the memory.
- [`getJsonThread()`](./getJsonThread) — Retrieves a specific JSON thread by its unique identifier.

Returns the full JSON thread including its stored data payload and metadata.
- [`getMarkdownThread()`](./getMarkdownThread) — Retrieves a specific markdown thread by its unique identifier.

Returns the full markdown thread including its rendered content and metadata.
- [`getThread()`](./getThread) — Retrieves a specific memory thread by its unique identifier.

Returns the full thread object including metadata, content references, and status.
- [`listContextThreads()`](./listContextThreads) — Lists all context memory threads with optional filtering.

Returns only threads of the context type, filtered by the provided parameters.
- [`listEpisodicMemories()`](./listEpisodicMemories) — Lists all episodic memories with optional filtering.

Returns episodic memory records that match the provided criteria.
- [`listJsonThreads()`](./listJsonThreads) — Lists all JSON memory threads with optional filtering.

Returns only threads of the JSON type, filtered by the provided parameters.
- [`listMarkdownThreads()`](./listMarkdownThreads) — Lists all markdown memory threads with optional filtering.

Returns only threads of the markdown type, filtered by the provided parameters.
- [`listThreads()`](./listThreads) — Lists all generic memory threads with optional filtering.

Returns memory threads that match the provided filter criteria. Use this to browse
or search through stored memory threads.
- [`saveContextFromChat()`](./saveContextFromChat) — Saves context extracted from a chat conversation into a context thread.

Captures relevant information, decisions, and knowledge from an ongoing or completed
chat session and persists it in the specified context thread for future reference.
- [`summarizeContextThread()`](./summarizeContextThread) — Generates a summary of the context stored in a thread.

Uses LLM processing to create a concise summary of all the context captured in the
thread. Useful for creating condensed knowledge bases from lengthy conversations.
- [`unarchiveEpisodicMemory()`](./unarchiveEpisodicMemory) — Restores an archived episodic memory back to active status.
- [`unarchiveJsonThread()`](./unarchiveJsonThread) — Restores an archived JSON thread back to active status.
- [`unarchiveMarkdownThread()`](./unarchiveMarkdownThread) — Restores an archived markdown thread back to active status.
- [`updateContextThread()`](./updateContextThread) — Updates the metadata of a context thread.

Modifies thread-level properties such as name and tags without affecting the stored
conversational context.
- [`updateEpisodicMemory()`](./updateEpisodicMemory) — Updates the metadata of an episodic memory.
- [`updateJsonThread()`](./updateJsonThread) — Updates the metadata of a JSON thread (name, tags, etc.).

Modifies thread-level properties without changing the stored JSON data.
Use  to change the actual data payload.
- [`updateJsonThreadData()`](./updateJsonThreadData) — Replaces the JSON data payload of a thread.

Updates the structured data stored in the JSON thread. This is separate from metadata
updates to allow efficient data-only writes.
- [`updateMarkdownThread()`](./updateMarkdownThread) — Updates the metadata of a markdown thread (name, tags, etc.).

Modifies thread-level properties without changing the markdown content itself.
Use  to change the actual markdown text.
- [`updateMarkdownThreadContent()`](./updateMarkdownThreadContent) — Replaces the markdown content of a thread.

Updates the actual markdown text content stored in the thread. This is separate from
metadata updates to allow efficient content-only writes.
- [`updateThread()`](./updateThread) — Updates the metadata or content of a generic memory thread.

Modifies an existing thread's properties such as name, tags, or stored data.
