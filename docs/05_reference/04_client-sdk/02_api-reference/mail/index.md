---
cbapicategory:
  - name: acknowledgeMessage
    link: /docs/reference/client-sdk/api-reference/mail/acknowledgeMessage
    description: "Acknowledges receipt and processing of a message.

Signals that the receiving agent has processed the message content and taken
any required action. This is distinct from marking as read and indicates explicit
acknowledgment of the message's intent."
  - name: checkReservationConflicts
    link: /docs/reference/client-sdk/api-reference/mail/checkReservationConflicts
    description: "Checks whether a proposed reservation would conflict with existing ones.

Validates that a resource is available before attempting to reserve it. Use this to
implement optimistic locking patterns where agents check availability before acting."
  - name: createAgent
    link: /docs/reference/client-sdk/api-reference/mail/createAgent
    description: "Registers a new agent in the mail system.

Creates a mail identity for an agent, enabling it to send messages, receive mail in
its inbox, and participate in threaded conversations with other agents."
  - name: createReservation
    link: /docs/reference/client-sdk/api-reference/mail/createReservation
    description: "Creates a resource reservation for an agent.

Reserves exclusive access to a shared resource (e.g., a file, tool, or service) for
the requesting agent. Other agents can check for conflicts before attempting to access
the same resource."
  - name: createThread
    link: /docs/reference/client-sdk/api-reference/mail/createThread
    description: "Creates a new mail thread for agent-to-agent communication.

Initiates a new conversation thread that messages can be posted to. Threads provide
a structured way to organize multi-message exchanges between agents on a specific topic."
  - name: createThreadMessage
    link: /docs/reference/client-sdk/api-reference/mail/createThreadMessage
    description: "Adds a new message to an existing mail thread.

Posts a message to the specified thread, making it visible to all thread participants.
This is the primary way agents communicate within an established conversation."
  - name: deleteThread
    link: /docs/reference/client-sdk/api-reference/mail/deleteThread
    description: "Permanently deletes a mail thread and all its messages.

Removes the thread and its entire message history. This action cannot be undone.
Consider archiving threads instead if you may need to reference them later."
  - name: forceReservation
    link: /docs/reference/client-sdk/api-reference/mail/forceReservation
    description: "Force-releases a reservation, overriding the owning agent's hold.

Forcefully frees a resource reservation regardless of the current owner. Use this as
an administrative override when an agent has become unresponsive or the reservation
is stale."
  - name: getAgent
    link: /docs/reference/client-sdk/api-reference/mail/getAgent
    description: "Retrieves a specific mail agent by its unique identifier.

Returns the agent's registration details including name, capabilities, and
configuration metadata."
  - name: getAgentInbox
    link: /docs/reference/client-sdk/api-reference/mail/getAgentInbox
    description: "Retrieves the inbox messages for a specific agent.

Returns all unread and pending messages directed to the specified agent. This is the
primary way an agent checks for new incoming communications."
  - name: getAgents
    link: /docs/reference/client-sdk/api-reference/mail/getAgents
    description: "Lists all registered mail agents in the system.

Returns the complete list of agents that are registered to send and receive mail.
Each agent has a unique identity and inbox for receiving messages."
  - name: getReservations
    link: /docs/reference/client-sdk/api-reference/mail/getReservations
    description: "Lists all currently active resource reservations.

Returns all reservations that have not been released, providing visibility into which
resources are currently claimed by which agents."
  - name: getThread
    link: /docs/reference/client-sdk/api-reference/mail/getThread
    description: "Retrieves a specific mail thread by its unique identifier.

Returns the full thread metadata including subject, participants, timestamps, and status.
Use  to fetch the actual messages within the thread."
  - name: getThreadMessages
    link: /docs/reference/client-sdk/api-reference/mail/getThreadMessages
    description: "Retrieves all messages within a specific mail thread.

Returns the complete ordered list of messages in a thread, useful for displaying
the full conversation history between agents."
  - name: getThreads
    link: /docs/reference/client-sdk/api-reference/mail/getThreads
    description: "Lists all mail threads with optional filtering and pagination.

Returns conversation threads that group related messages together. Threads can be
filtered by participants, status, or other criteria using the params argument."
  - name: markMessageRead
    link: /docs/reference/client-sdk/api-reference/mail/markMessageRead
    description: "Marks a specific message as read by the current agent.

Updates the read status of a message, which can be used to track which messages
have been processed by each agent in a conversation."
  - name: releaseReservation
    link: /docs/reference/client-sdk/api-reference/mail/releaseReservation
    description: "Releases a previously held resource reservation.

Frees the reserved resource so other agents can access it. Agents should release
reservations promptly when they no longer need exclusive access."
  - name: replyToMessage
    link: /docs/reference/client-sdk/api-reference/mail/replyToMessage
    description: "Sends a reply to an existing message.

Creates a response that is linked to a specific parent message, maintaining the
conversation thread structure. The reply is posted to the same thread as the
original message."
  - name: searchMessages
    link: /docs/reference/client-sdk/api-reference/mail/searchMessages
    description: "Searches messages across all threads using the provided query parameters.

Performs a full-text or filtered search across the mail system, returning messages
that match the specified criteria such as keywords, sender, date range, or thread."
  - name: send
    link: /docs/reference/client-sdk/api-reference/mail/send
    description: "Sends a new standalone mail message.

Delivers a message directly without requiring an existing thread. This is useful for
one-off notifications or messages that do not belong to an ongoing conversation."
  - name: summarizeThread
    link: /docs/reference/client-sdk/api-reference/mail/summarizeThread
    description: "Generates a summarized view of a mail thread's conversation.

Produces a concise summary of the thread's messages, useful for quickly understanding
the key points of a long conversation without reading every message."
  - name: updateThread
    link: /docs/reference/client-sdk/api-reference/mail/updateThread
    description: "Partially updates a mail thread's metadata.

Applies a partial update (PATCH) to the thread, allowing you to modify specific fields
such as the subject, status, or participants without affecting other properties."
---
# Mail API

Mail API

<CBAPICategory />

## Methods

- [`acknowledgeMessage()`](./acknowledgeMessage) — Acknowledges receipt and processing of a message.

Signals that the receiving agent has processed the message content and taken
any required action. This is distinct from marking as read and indicates explicit
acknowledgment of the message's intent.
- [`checkReservationConflicts()`](./checkReservationConflicts) — Checks whether a proposed reservation would conflict with existing ones.

Validates that a resource is available before attempting to reserve it. Use this to
implement optimistic locking patterns where agents check availability before acting.
- [`createAgent()`](./createAgent) — Registers a new agent in the mail system.

Creates a mail identity for an agent, enabling it to send messages, receive mail in
its inbox, and participate in threaded conversations with other agents.
- [`createReservation()`](./createReservation) — Creates a resource reservation for an agent.

Reserves exclusive access to a shared resource (e.g., a file, tool, or service) for
the requesting agent. Other agents can check for conflicts before attempting to access
the same resource.
- [`createThread()`](./createThread) — Creates a new mail thread for agent-to-agent communication.

Initiates a new conversation thread that messages can be posted to. Threads provide
a structured way to organize multi-message exchanges between agents on a specific topic.
- [`createThreadMessage()`](./createThreadMessage) — Adds a new message to an existing mail thread.

Posts a message to the specified thread, making it visible to all thread participants.
This is the primary way agents communicate within an established conversation.
- [`deleteThread()`](./deleteThread) — Permanently deletes a mail thread and all its messages.

Removes the thread and its entire message history. This action cannot be undone.
Consider archiving threads instead if you may need to reference them later.
- [`forceReservation()`](./forceReservation) — Force-releases a reservation, overriding the owning agent's hold.

Forcefully frees a resource reservation regardless of the current owner. Use this as
an administrative override when an agent has become unresponsive or the reservation
is stale.
- [`getAgent()`](./getAgent) — Retrieves a specific mail agent by its unique identifier.

Returns the agent's registration details including name, capabilities, and
configuration metadata.
- [`getAgentInbox()`](./getAgentInbox) — Retrieves the inbox messages for a specific agent.

Returns all unread and pending messages directed to the specified agent. This is the
primary way an agent checks for new incoming communications.
- [`getAgents()`](./getAgents) — Lists all registered mail agents in the system.

Returns the complete list of agents that are registered to send and receive mail.
Each agent has a unique identity and inbox for receiving messages.
- [`getReservations()`](./getReservations) — Lists all currently active resource reservations.

Returns all reservations that have not been released, providing visibility into which
resources are currently claimed by which agents.
- [`getThread()`](./getThread) — Retrieves a specific mail thread by its unique identifier.

Returns the full thread metadata including subject, participants, timestamps, and status.
Use  to fetch the actual messages within the thread.
- [`getThreadMessages()`](./getThreadMessages) — Retrieves all messages within a specific mail thread.

Returns the complete ordered list of messages in a thread, useful for displaying
the full conversation history between agents.
- [`getThreads()`](./getThreads) — Lists all mail threads with optional filtering and pagination.

Returns conversation threads that group related messages together. Threads can be
filtered by participants, status, or other criteria using the params argument.
- [`markMessageRead()`](./markMessageRead) — Marks a specific message as read by the current agent.

Updates the read status of a message, which can be used to track which messages
have been processed by each agent in a conversation.
- [`releaseReservation()`](./releaseReservation) — Releases a previously held resource reservation.

Frees the reserved resource so other agents can access it. Agents should release
reservations promptly when they no longer need exclusive access.
- [`replyToMessage()`](./replyToMessage) — Sends a reply to an existing message.

Creates a response that is linked to a specific parent message, maintaining the
conversation thread structure. The reply is posted to the same thread as the
original message.
- [`searchMessages()`](./searchMessages) — Searches messages across all threads using the provided query parameters.

Performs a full-text or filtered search across the mail system, returning messages
that match the specified criteria such as keywords, sender, date range, or thread.
- [`send()`](./send) — Sends a new standalone mail message.

Delivers a message directly without requiring an existing thread. This is useful for
one-off notifications or messages that do not belong to an ongoing conversation.
- [`summarizeThread()`](./summarizeThread) — Generates a summarized view of a mail thread's conversation.

Produces a concise summary of the thread's messages, useful for quickly understanding
the key points of a long conversation without reading every message.
- [`updateThread()`](./updateThread) — Partially updates a mail thread's metadata.

Applies a partial update (PATCH) to the thread, allowing you to modify specific fields
such as the subject, status, or participants without affecting other properties.
