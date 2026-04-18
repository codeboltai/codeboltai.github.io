---
cbapicategory:
  - name: checkIfUserExistsLocally
    link: /docs/reference/client-sdk/api-reference/users/checkIfUserExistsLocally
    description: "Checks if a user exists locally in the system.

Verifies whether a user with the specified credentials or identifier
is already present in the local user store. Useful for preventing
duplicate registrations during setup."
  - name: createUser
    link: /docs/reference/client-sdk/api-reference/users/createUser
    description: "Creates a new user account in the system.

Registers a new local user with the provided credentials and profile
information. The user will be available for authentication immediately
after creation."
  - name: getMessages
    link: /docs/reference/client-sdk/api-reference/users/getMessages
    description: "Retrieves saved messages from conversation history.

Returns previously saved message history, optionally filtered by agent
or other criteria. Useful for restoring conversation context or
displaying chat history in the UI."
  - name: logout
    link: /docs/reference/client-sdk/api-reference/users/logout
    description: "Logs out the current authenticated user.

Ends the current user session and invalidates authentication tokens.
Optionally accepts logout request data for additional session handling."
  - name: saveMessages
    link: /docs/reference/client-sdk/api-reference/users/saveMessages
    description: "Saves message history for a specific agent.

Persists a batch of messages associated with an agent's conversation.
This maintains conversation history across sessions and enables
context retention for continued interactions."
---
# Users API

Users API

<CBAPICategory />

## Methods

- [`checkIfUserExistsLocally()`](./checkIfUserExistsLocally) — Checks if a user exists locally in the system.

Verifies whether a user with the specified credentials or identifier
is already present in the local user store. Useful for preventing
duplicate registrations during setup.
- [`createUser()`](./createUser) — Creates a new user account in the system.

Registers a new local user with the provided credentials and profile
information. The user will be available for authentication immediately
after creation.
- [`getMessages()`](./getMessages) — Retrieves saved messages from conversation history.

Returns previously saved message history, optionally filtered by agent
or other criteria. Useful for restoring conversation context or
displaying chat history in the UI.
- [`logout()`](./logout) — Logs out the current authenticated user.

Ends the current user session and invalidates authentication tokens.
Optionally accepts logout request data for additional session handling.
- [`saveMessages()`](./saveMessages) — Saves message history for a specific agent.

Persists a batch of messages associated with an agent's conversation.
This maintains conversation history across sessions and enables
context retention for continued interactions.
