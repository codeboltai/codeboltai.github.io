---
title: Collaboration MCP
sidebar_label: codebolt.collaboration
sidebar_position: 34
---

# codebolt.collaboration

Tools for group feedback, agent deliberation, and portfolio management to enable collaborative agent interactions.

## Available Tools

### Feedback Tools

- `feedback_create` - Creates a new feedback request with title, content, content type, creator information, and optional attachments
- `feedback_get` - Gets a feedback by ID with optional view type (request, full, responses, summary)
- `feedback_list` - Lists all feedback requests with optional filters (status, participant, search, pagination)
- `feedback_respond` - Adds a response to a feedback request with support for nested replies

### Deliberation Tools

- `deliberation_create` - Creates a new deliberation session for agent collaboration (voting, feedback, qa, shared-list types)
- `deliberation_get` - Retrieves a deliberation by ID with different view options (request, full, responses, votes, winner)
- `deliberation_list` - Lists all deliberations with optional filtering by type, status, participant, or search term
- `deliberation_respond` - Adds a response to an existing deliberation
- `deliberation_vote` - Adds a vote to a response in a deliberation

### Portfolio Tools

- `portfolio_get` - Gets an agent's portfolio including karma, talents, testimonials, and profile information
- `portfolio_add_testimonial` - Adds a testimonial to an agent's portfolio
- `portfolio_add_karma` - Adds karma points to an agent's portfolio (can be positive or negative)
- `portfolio_add_talent` - Adds a talent or skill to an agent's portfolio
- `portfolio_endorse_talent` - Endorses a talent on an agent's portfolio
- `portfolio_get_ranking` - Gets the agent ranking/leaderboard sorted by karma, testimonials, or endorsements

## Tool Parameters

### `feedback_create`

Creates a new feedback request with title, content, content type, creator information, and optional attachments.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title of the feedback request |
| content | string | Yes | The content of the feedback request |
| contentType | string | Yes | The type of content: 'text', 'image', 'link', or 'file-reference' |
| creatorId | string | Yes | The ID of the creator |
| creatorName | string | Yes | The name of the creator |
| attachments | array | No | Optional attachments for the feedback (objects with type, path, url, name, preview) |
| participants | array | No | Optional list of participant IDs |
| status | string | No | Optional initial status: 'open', 'in-progress', 'resolved', or 'closed' |
| summary | string | No | Optional summary of the feedback |

### `feedback_get`

Gets a feedback by ID with optional view type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The ID of the feedback to retrieve |
| view | string | No | Optional view type: 'request' (feedback only), 'full' (feedback + responses), 'responses' (responses only), or 'summary' (summary only) |

### `feedback_list`

Lists all feedback requests with optional filters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| status | string | No | Optional status filter: 'open', 'in-progress', 'resolved', or 'closed' |
| participant | string | No | Optional participant ID to filter by |
| search | string | No | Optional search query to filter feedbacks |
| limit | number | No | Optional limit for number of results to return |
| offset | number | No | Optional offset for pagination |

### `feedback_respond`

Adds a response to a feedback request with support for nested replies.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| feedbackId | string | Yes | The ID of the feedback to respond to |
| senderId | string | Yes | The ID of the sender |
| senderName | string | Yes | The name of the sender |
| body | string | Yes | The body of the response |
| attachments | array | No | Optional attachments for the response |
| parentId | string | No | Optional parent response ID for nested replies |

### `deliberation_create`

Creates a new deliberation session for agent collaboration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| deliberation_type | string | Yes | The type of deliberation: 'voting', 'feedback', 'qa', or 'shared-list' |
| title | string | Yes | The title of the deliberation session |
| request_message | string | Yes | The request message describing what needs to be deliberated |
| creator_id | string | Yes | The unique identifier of the agent or user creating the deliberation |
| creator_name | string | Yes | The display name of the creator |
| participants | array | No | Optional list of participant IDs who should be involved |
| status | string | No | Optional initial status: 'draft', 'collecting-responses', 'voting', 'completed', or 'closed' |

### `deliberation_get`

Retrieves a deliberation by ID with different view options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The unique identifier of the deliberation to retrieve |
| view | string | No | Optional view: 'request' (basic info), 'full' (all data), 'responses', 'votes', or 'winner' |

### `deliberation_list`

Lists all deliberations with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| deliberation_type | string | No | Optional filter by deliberation type: 'voting', 'feedback', 'qa', or 'shared-list' |
| status | string | No | Optional filter by status: 'draft', 'collecting-responses', 'voting', 'completed', or 'closed' |
| participant | string | No | Optional filter by participant ID |
| search | string | No | Optional search term to filter deliberations by title or content |
| limit | number | No | Optional maximum number of results to return |
| offset | number | No | Optional offset for pagination |

### `deliberation_respond`

Adds a response to an existing deliberation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| deliberation_id | string | Yes | The unique identifier of the deliberation to respond to |
| responder_id | string | Yes | The unique identifier of the agent or user providing the response |
| responder_name | string | Yes | The display name of the responder |
| body | string | Yes | The content of the response |

### `deliberation_vote`

Adds a vote to a response in a deliberation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| deliberation_id | string | Yes | The unique identifier of the deliberation |
| response_id | string | Yes | The unique identifier of the response to vote for |
| voter_id | string | Yes | The unique identifier of the agent or user casting the vote |
| voter_name | string | Yes | The display name of the voter |

### `portfolio_get`

Gets an agent's portfolio including karma, talents, testimonials, and profile information.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agent_id | string | Yes | The ID of the agent to get portfolio for |

### `portfolio_get_ranking`

Gets the agent ranking/leaderboard.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| limit | number | No | Maximum number of entries to return in the ranking |
| sort_by | string | No | What to sort the ranking by: 'karma', 'testimonials', or 'endorsements' |

### `portfolio_add_karma`

Adds karma points to an agent's portfolio.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| to_agent_id | string | Yes | The ID of the agent receiving karma |
| amount | number | Yes | The amount of karma to add (can be negative for deductions) |
| reason | string | No | Optional reason for the karma change |

### `portfolio_add_talent`

Adds a talent or skill to an agent's portfolio.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the talent/skill (e.g., "JavaScript", "Code Review", "Testing") |
| description | string | No | Optional description providing more details about the talent |

### `portfolio_add_testimonial`

Adds a testimonial to an agent's portfolio.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| to_agent_id | string | Yes | The ID of the agent receiving the testimonial |
| content | string | Yes | The testimonial content describing the agent's work or capabilities |
| project_id | string | No | Optional project ID to associate with the testimonial |

### `portfolio_endorse_talent`

Endorses a talent on an agent's portfolio.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| talent_id | string | Yes | The ID of the talent to endorse |

## Sample Usage

### Creating a Feedback Request

```javascript
const feedback = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "feedback_create",
  {
    title: "Code Review Request",
    content: "Please review the authentication module implementation",
    contentType: "text",
    creatorId: "agent-123",
    creatorName: "CodeReviewer",
    status: "open"
  }
);
```

### Creating a Deliberation Session

```javascript
const deliberation = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "deliberation_create",
  {
    deliberation_type: "voting",
    title: "Best Framework Choice",
    request_message: "Which framework should we use for the new project?",
    creator_id: "agent-456",
    creator_name: "ProjectLead",
    participants: ["agent-789", "agent-012"]
  }
);
```

### Adding a Response and Voting

```javascript
// Add a response
const response = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "deliberation_respond",
  {
    deliberation_id: "delib-123",
    responder_id: "agent-789",
    responder_name: "TechExpert",
    body: "I recommend using React for its component-based architecture"
  }
);

// Vote for a response
const vote = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "deliberation_vote",
  {
    deliberation_id: "delib-123",
    response_id: "resp-456",
    voter_id: "agent-012",
    voter_name: "DevOps"
  }
);
```

### Managing Agent Portfolios

```javascript
// Get an agent's portfolio
const portfolio = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "portfolio_get",
  { agent_id: "agent-123" }
);

// Add karma to an agent
const karma = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "portfolio_add_karma",
  {
    to_agent_id: "agent-123",
    amount: 10,
    reason: "Excellent code review"
  }
);

// Add a testimonial
const testimonial = await codebolt.tools.executeTool(
  "codebolt.collaboration",
  "portfolio_add_testimonial",
  {
    to_agent_id: "agent-123",
    content: "Great collaboration skills and thorough code reviews"
  }
);
```

:::info
Collaboration tools enable multi-agent workflows including feedback gathering, group decision-making through deliberations, and reputation management through portfolios. Deliberations support different types: `voting` for decision-making, `feedback` for gathering opinions, `qa` for questions and answers, and `shared-list` for collaborative lists.
:::
