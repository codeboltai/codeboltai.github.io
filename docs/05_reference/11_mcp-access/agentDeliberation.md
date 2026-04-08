---
title: Agent Deliberation MCP
sidebar_label: codebolt.agentDeliberation
sidebar_position: 50
---

# codebolt.agentDeliberation

Tools for multi-agent collaboration and decision-making through deliberations. Deliberations allow multiple agents to discuss topics, provide responses, and vote on decisions.

## Available Tools

- `deliberation_create` - Creates a new deliberation session for agent collaboration
- `deliberation_get` - Retrieves a specific deliberation by ID with all details
- `deliberation_list` - Lists all deliberations with optional filtering
- `deliberation_update` - Updates an existing deliberation's properties
- `deliberation_respond` - Adds a response to a deliberation from an agent
- `deliberation_vote` - Casts a vote for a response in a deliberation
- `deliberation_get_winner` - Gets the winner of a voting-based deliberation
- `deliberation_summary` - Generates a summary of the deliberation

## Tool Parameters

### deliberation_create

Creates a new deliberation session for agent collaboration. Supports multiple deliberation types including voting, feedback, Q&A, and shared-list.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationType` | enum | Yes | The type of deliberation: `voting`, `feedback`, `qa`, or `shared-list` |
| `title` | string | Yes | The title of the deliberation session |
| `requestMessage` | string | Yes | The request message describing what needs to be deliberated |
| `creatorId` | string | Yes | The unique ID of the creator |
| `creatorName` | string | Yes | The name of the creator |
| `participants` | string[] | No | Optional list of participant IDs to include in the deliberation |
| `status` | enum | No | Optional initial status: `draft`, `collecting-responses`, `voting`, `completed`, or `closed` |

### deliberation_get

Retrieves a specific deliberation by ID with optional view filtering for different data subsets.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | string | Yes | The unique ID of the deliberation to retrieve |
| `view` | enum | No | Optional view filter: `request` (basic info), `full` (all data), `responses` (responses only), `votes` (votes only), or `winner` (winner only) |

### deliberation_list

Lists all deliberations with optional filtering by type, status, participant, or search query.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationType` | enum | No | Optional filter by deliberation type: `voting`, `feedback`, `qa`, or `shared-list` |
| `status` | enum | No | Optional filter by status: `draft`, `collecting-responses`, `voting`, `completed`, or `closed` |
| `participant` | string | No | Optional filter by participant ID |
| `search` | string | No | Optional search query to match against deliberation titles or content |
| `limit` | number | No | Optional maximum number of results to return |
| `offset` | number | No | Optional offset for pagination (skip first N results) |

### deliberation_update

Updates an existing deliberation's status or request message.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationId` | string | Yes | The unique ID of the deliberation to update |
| `status` | enum | No | Optional new status: `draft`, `collecting-responses`, `voting`, `completed`, or `closed` |
| `requestMessage` | string | No | Optional new request message to update the deliberation topic |

### deliberation_respond

Adds a response to a deliberation from an agent or user.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationId` | string | Yes | The unique ID of the deliberation to respond to |
| `responderId` | string | Yes | The unique ID of the responder (agent or user) |
| `responderName` | string | Yes | The name of the responder |
| `body` | string | Yes | The response body containing the actual response content |

### deliberation_vote

Casts a vote for a specific response in a deliberation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationId` | string | Yes | The unique ID of the deliberation |
| `responseId` | string | Yes | The unique ID of the response to vote for |
| `voterId` | string | Yes | The unique ID of the voter |
| `voterName` | string | Yes | The name of the voter |

### deliberation_get_winner

Retrieves the winning response from a voting-based deliberation based on the highest number of votes.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationId` | string | Yes | The unique ID of the deliberation |

### deliberation_summary

Adds or updates a summary for a deliberation, typically after responses and voting are complete.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `deliberationId` | string | Yes | The unique ID of the deliberation |
| `summary` | string | Yes | The summary text capturing key insights and outcomes |
| `authorId` | string | Yes | The unique ID of the summary author |
| `authorName` | string | Yes | The name of the summary author |

## Sample Usage

### Creating a voting deliberation

```javascript
const result = await codebolt.tools.deliberation_create({
  deliberationType: 'voting',
  title: 'Select Best Architecture Approach',
  requestMessage: 'Please vote on the best architecture approach for our microservices system. Options: 1) Event-driven, 2) API Gateway, 3) Service Mesh',
  creatorId: 'agent-001',
  creatorName: 'Lead Architect',
  participants: ['agent-002', 'agent-003', 'agent-004'],
  status: 'collecting-responses'
});
```

### Responding to a deliberation and voting

```javascript
// First, add a response
const responseResult = await codebolt.tools.deliberation_respond({
  deliberationId: 'delib-abc123',
  responderId: 'agent-002',
  responderName: 'Backend Engineer',
  body: 'I recommend the Event-driven approach because it provides better scalability and decoupling between services.'
});

// Then vote on that response
const voteResult = await codebolt.tools.deliberation_vote({
  deliberationId: 'delib-abc123',
  responseId: 'resp-def456',
  voterId: 'agent-003',
  voterName: 'DevOps Engineer'
});
```

### Listing and retrieving deliberations

```javascript
// List all active deliberations
const activeDeliberations = await codebolt.tools.deliberation_list({
  status: 'voting',
  limit: 10
});

// Get full details including responses and votes
const fullDetails = await codebolt.tools.deliberation_get({
  id: 'delib-abc123',
  view: 'full'
});

// Get only the winner
const winner = await codebolt.tools.deliberation_get_winner({
  deliberationId: 'delib-abc123'
});
```

### Updating and summarizing a deliberation

```javascript
// Update status to completed
const updateResult = await codebolt.tools.deliberation_update({
  deliberationId: 'delib-abc123',
  status: 'completed'
});

// Add a summary after completion
const summaryResult = await codebolt.tools.deliberation_summary({
  deliberationId: 'delib-abc123',
  summary: 'The team voted 3-1 in favor of the Event-driven architecture approach. Key concerns about complexity were addressed with documentation and training plans.',
  authorId: 'agent-001',
  authorName: 'Lead Architect'
});
```

:::info
**Deliberation Types:**
- `voting` - Agents provide responses and vote on the best option
- `feedback` - Agents provide feedback on a topic without voting
- `qa` - Question and answer format for information gathering
- `shared-list` - Collaborative list building and refinement

**Status Values:**
- `draft` - Deliberation is being prepared
- `collecting-responses` - Accepting responses from participants
- `voting` - Responses collected, now accepting votes
- `completed` - Voting finished, deliberation complete
- `closed` - Deliberation archived and no longer active

**View Options for deliberation_get:**
- `request` - Returns basic deliberation info and request message
- `full` - Returns complete deliberation with all responses, votes, and metadata
- `responses` - Returns only the response list
- `votes` - Returns only the voting data
- `winner` - Returns only the winning response (for voting-type deliberations)
:::
