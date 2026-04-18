---
cbapicategory:
  - name: addResponse
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/addResponse
    description: "Adds a response to a deliberation.

Submits a new proposal or answer from an agent as part of the
deliberation process."
  - name: addVote
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/addVote
    description: "Casts a vote on a deliberation.

Records an agent's vote for a specific response within the deliberation."
  - name: create
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/create
    description: "Creates a new deliberation.

Initiates a deliberation session where multiple agents can propose
solutions and vote on the best approach."
  - name: delete
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/delete
    description: "Deletes a deliberation.

Permanently removes the specified deliberation and all its associated
responses and votes."
  - name: get
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/get
    description: "Retrieves a specific deliberation by ID.

Returns the full deliberation record including its topic, status,
participants, and summary."
  - name: getAll
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/getAll
    description: "Retrieves all deliberations.

Returns every deliberation in the system, optionally filtered by
the provided query parameters."
  - name: getResponses
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/getResponses
    description: "Retrieves all responses submitted to a deliberation.

Returns the proposals or answers that agents have submitted as part
of the deliberation process."
  - name: getVotes
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/getVotes
    description: "Retrieves all votes cast in a deliberation.

Returns the voting records showing which agents voted for which
responses."
  - name: getWinner
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/getWinner
    description: "Retrieves the winning response of a deliberation.

Returns the response that received the most votes or was otherwise
selected as the winner of the deliberation process."
  - name: startAgents
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/startAgents
    description: "Starts agents for a deliberation.

Launches the participant agents so they can begin generating responses
for the deliberation topic."
  - name: startVotingAgents
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/startVotingAgents
    description: "Starts voting agents for a deliberation.

Launches the voting agents so they can evaluate the submitted responses
and cast their votes."
  - name: update
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/update
    description: "Partially updates a deliberation.

Applies a patch to the deliberation record, updating only the
fields provided in the request."
  - name: updateSummary
    link: /docs/reference/client-sdk/api-reference/agentDeliberation/updateSummary
    description: "Updates the summary of a deliberation.

Sets or modifies the summary text that describes the outcome or
current state of the deliberation."
---
# AgentDeliberation API

Agent Deliberation API

<CBAPICategory />

## Methods

- [`addResponse()`](./addResponse) — Adds a response to a deliberation.

Submits a new proposal or answer from an agent as part of the
deliberation process.
- [`addVote()`](./addVote) — Casts a vote on a deliberation.

Records an agent's vote for a specific response within the deliberation.
- [`create()`](./create) — Creates a new deliberation.

Initiates a deliberation session where multiple agents can propose
solutions and vote on the best approach.
- [`delete()`](./delete) — Deletes a deliberation.

Permanently removes the specified deliberation and all its associated
responses and votes.
- [`get()`](./get) — Retrieves a specific deliberation by ID.

Returns the full deliberation record including its topic, status,
participants, and summary.
- [`getAll()`](./getAll) — Retrieves all deliberations.

Returns every deliberation in the system, optionally filtered by
the provided query parameters.
- [`getResponses()`](./getResponses) — Retrieves all responses submitted to a deliberation.

Returns the proposals or answers that agents have submitted as part
of the deliberation process.
- [`getVotes()`](./getVotes) — Retrieves all votes cast in a deliberation.

Returns the voting records showing which agents voted for which
responses.
- [`getWinner()`](./getWinner) — Retrieves the winning response of a deliberation.

Returns the response that received the most votes or was otherwise
selected as the winner of the deliberation process.
- [`startAgents()`](./startAgents) — Starts agents for a deliberation.

Launches the participant agents so they can begin generating responses
for the deliberation topic.
- [`startVotingAgents()`](./startVotingAgents) — Starts voting agents for a deliberation.

Launches the voting agents so they can evaluate the submitted responses
and cast their votes.
- [`update()`](./update) — Partially updates a deliberation.

Applies a patch to the deliberation record, updating only the
fields provided in the request.
- [`updateSummary()`](./updateSummary) — Updates the summary of a deliberation.

Sets or modifies the summary text that describes the outcome or
current state of the deliberation.
