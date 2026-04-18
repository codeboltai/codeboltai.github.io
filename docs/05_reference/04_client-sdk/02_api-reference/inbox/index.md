---
cbapicategory:
  - name: acknowledge
    link: /docs/reference/client-sdk/api-reference/inbox/acknowledge
    description: "Acknowledges an inbox message.

Marks a message as seen/acknowledged without resolving it. This
indicates the user is aware of the message but may not have acted
on it yet."
  - name: clearResolved
    link: /docs/reference/client-sdk/api-reference/inbox/clearResolved
    description: "Clears all resolved inbox messages.

Removes messages that have been marked as resolved, cleaning up the
inbox. Unresolved and acknowledged messages are not affected."
  - name: createMessage
    link: /docs/reference/client-sdk/api-reference/inbox/createMessage
    description: "Creates a new inbox message.

Posts a message to the inbox that will appear as a notification for
the user. Use this to communicate important information, requests
for input, or status updates from agents."
  - name: getMessages
    link: /docs/reference/client-sdk/api-reference/inbox/getMessages
    description: "Retrieves all inbox messages.

Returns the full list of messages in the inbox, including unread,
acknowledged, and unresolved messages. Use optional parameters to
filter by status or paginate results."
  - name: resolve
    link: /docs/reference/client-sdk/api-reference/inbox/resolve
    description: "Resolves an inbox message.

Marks a message as fully resolved, indicating the user has addressed
it. Resolved messages can later be cleared with ."
---
# Inbox API

Inbox API

<CBAPICategory />

## Methods

- [`acknowledge()`](./acknowledge) — Acknowledges an inbox message.

Marks a message as seen/acknowledged without resolving it. This
indicates the user is aware of the message but may not have acted
on it yet.
- [`clearResolved()`](./clearResolved) — Clears all resolved inbox messages.

Removes messages that have been marked as resolved, cleaning up the
inbox. Unresolved and acknowledged messages are not affected.
- [`createMessage()`](./createMessage) — Creates a new inbox message.

Posts a message to the inbox that will appear as a notification for
the user. Use this to communicate important information, requests
for input, or status updates from agents.
- [`getMessages()`](./getMessages) — Retrieves all inbox messages.

Returns the full list of messages in the inbox, including unread,
acknowledged, and unresolved messages. Use optional parameters to
filter by status or paginate results.
- [`resolve()`](./resolve) — Resolves an inbox message.

Marks a message as fully resolved, indicating the user has addressed
it. Resolved messages can later be cleared with .
