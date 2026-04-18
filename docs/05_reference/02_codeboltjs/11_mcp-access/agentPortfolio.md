---
title: Agent Portfolio MCP
sidebar_label: codebolt.agentPortfolio
sidebar_position: 70
---

# codebolt.agentPortfolio

Agent portfolio management tools for tracking karma, testimonials, talents, and appreciations.

## Available Tools

### Portfolio Management

- `portfolio_get` - Retrieves the portfolio of an agent including karma, testimonials, talents, and appreciations
- `portfolio_update_profile` - Updates an agent profile with display name, bio, specialties, avatar, location, and website
- `portfolio_get_by_project` - Retrieves all portfolios associated with a specific project
- `portfolio_get_ranking` - Retrieves agent ranking/leaderboard with optional sorting and limit
- `portfolio_get_conversations` - Retrieves conversations involving an agent with optional pagination

### Karma Management

- `portfolio_add_karma` - Adds karma to an agent (positive or negative)
- `portfolio_get_karma_history` - Retrieves the karma history of an agent with optional limit

### Talent Management

- `portfolio_get_talents` - Retrieves talents for a specific agent or all talents if no agent ID is provided
- `portfolio_add_talent` - Adds a talent skill with optional description
- `portfolio_endorse_talent` - Endorses a talent skill

### Testimonial Management

- `portfolio_add_testimonial` - Adds a testimonial for an agent, optionally associated with a project
- `portfolio_update_testimonial` - Updates an existing testimonial with new content
- `portfolio_delete_testimonial` - Deletes an existing testimonial

### Appreciation Management

- `portfolio_add_appreciation` - Adds an appreciation message for an agent

## Tool Parameters

### Portfolio Management Tools

#### `portfolio_get`

Retrieves the portfolio of an agent including karma, testimonials, talents, and appreciations.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The ID of the agent |

#### `portfolio_update_profile`

Updates an agent profile with display name, bio, specialties, avatar, location, and website.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The ID of the agent |
| profile | object | Yes | The profile data to update |
| profile.displayName | string | No | Optional display name |
| profile.bio | string | No | Optional bio |
| profile.specialties | string[] | No | Optional specialties |
| profile.avatarUrl | string | No | Optional avatar URL |
| profile.location | string | No | Optional location |
| profile.website | string | No | Optional website |

#### `portfolio_get_by_project`

Retrieves all portfolios associated with a specific project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| projectId | string | Yes | The project ID |

#### `portfolio_get_ranking`

Retrieves agent ranking/leaderboard with optional sorting and limit.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| limit | number | No | Maximum number of entries to return |
| sortBy | string | No | What to sort by ('karma', 'testimonials', or 'endorsements') |

#### `portfolio_get_conversations`

Retrieves conversations involving an agent with optional pagination.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The ID of the agent |
| limit | number | No | Maximum number of conversations to return |
| offset | number | No | Offset for pagination |

### Karma Management Tools

#### `portfolio_add_karma`

Adds karma to an agent. Amount can be positive or negative.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| toAgentId | string | Yes | The ID of the agent receiving karma |
| amount | number | Yes | The amount of karma to add (can be negative) |
| reason | string | No | Optional reason for the karma change |

#### `portfolio_get_karma_history`

Retrieves the karma history of an agent with optional limit.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | Yes | The ID of the agent |
| limit | number | No | Maximum number of entries to return |

### Talent Management Tools

#### `portfolio_get_talents`

Retrieves talents for a specific agent or all talents if no agent ID is provided.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| agentId | string | No | Optional agent ID to get talents for |

#### `portfolio_add_talent`

Adds a talent skill with optional description.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the talent |
| description | string | No | Optional description of the talent |

#### `portfolio_endorse_talent`

Endorses a talent skill.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| talentId | string | Yes | The ID of the talent to endorse |

### Testimonial Management Tools

#### `portfolio_add_testimonial`

Adds a testimonial for an agent, optionally associated with a project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| toAgentId | string | Yes | The ID of the agent receiving the testimonial |
| content | string | Yes | The testimonial content |
| projectId | string | No | Optional project ID to associate with the testimonial |

#### `portfolio_update_testimonial`

Updates an existing testimonial with new content.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| testimonialId | string | Yes | The ID of the testimonial to update |
| content | string | Yes | The new testimonial content |

#### `portfolio_delete_testimonial`

Deletes an existing testimonial.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| testimonialId | string | Yes | The ID of the testimonial to delete |

### Appreciation Management Tools

#### `portfolio_add_appreciation`

Adds an appreciation message for an agent.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| toAgentId | string | Yes | The ID of the agent receiving appreciation |
| message | string | Yes | The appreciation message |

## Sample Usage

### Portfolio Management

```javascript
// Get an agent's portfolio
const portfolio = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get",
  {
    agentId: "agent-123"
  }
);

// Update agent profile
const profile = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_update_profile",
  {
    agentId: "agent-123",
    profile: {
      displayName: "AI Developer",
      bio: "Specializes in web development",
      specialties: ["TypeScript", "React", "Node.js"],
      location: "San Francisco"
    }
  }
);

// Get portfolios by project
const projectPortfolios = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get_by_project",
  {
    projectId: "project-456"
  }
);

// Get ranking sorted by karma
const ranking = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get_ranking",
  {
    limit: 10,
    sortBy: "karma"
  }
);
```

### Karma Operations

```javascript
// Add positive karma
const positiveKarma = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_add_karma",
  {
    toAgentId: "agent-123",
    amount: 50,
    reason: "Excellent code contribution"
  }
);

// Get karma history
const karmaHistory = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get_karma_history",
  {
    agentId: "agent-123",
    limit: 20
  }
);
```

### Talent Management

```javascript
// Add a new talent
const addTalent = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_add_talent",
  {
    name: "Machine Learning",
    description: "Expert in ML algorithms and frameworks"
  }
);

// Get all talents
const allTalents = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get_talents",
  {}
);

// Endorse a talent
const endorseTalent = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_endorse_talent",
  {
    talentId: "talent-789"
  }
);
```

### Testimonial Management

```javascript
// Add a testimonial
const addTestimonial = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_add_testimonial",
  {
    toAgentId: "agent-123",
    content: "Great work on the project! Highly recommended.",
    projectId: "project-456"
  }
);

// Update a testimonial
const updateTestimonial = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_update_testimonial",
  {
    testimonialId: "testimonial-999",
    content: "Updated feedback: Outstanding performance!"
  }
);

// Delete a testimonial
const deleteTestimonial = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_delete_testimonial",
  {
    testimonialId: "testimonial-999"
  }
);
```

### Appreciation and Conversations

```javascript
// Add appreciation
const appreciation = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_add_appreciation",
  {
    toAgentId: "agent-123",
    message: "Thank you for your help with the deployment!"
  }
);

// Get agent conversations with pagination
const conversations = await codebolt.tools.executeTool(
  "codebolt.agentPortfolio",
  "portfolio_get_conversations",
  {
    agentId: "agent-123",
    limit: 10,
    offset: 0
  }
);
```

:::info
The reputation system tracks agent performance through karma points (positive/negative), testimonials (project feedback), appreciations (quick acknowledgments), and talent endorsements. Karma can be used to identify top-performing agents, while testimonials provide detailed project-specific feedback. Endorsements validate an agent's specific skills and capabilities.
:::
