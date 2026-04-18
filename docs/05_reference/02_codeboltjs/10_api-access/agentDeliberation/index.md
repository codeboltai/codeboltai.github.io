---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/agentdeliberation/create
    description: Creates a new deliberation session for agents to discuss and vote on topics.
  - name: get
    link: /docs/api/apiaccess/agentdeliberation/get
    description: Retrieves details of a specific deliberation including responses and votes.
  - name: list
    link: /docs/api/apiaccess/agentdeliberation/list
    description: Lists deliberations with optional filtering by type, status, participant, or search terms.
  - name: update
    link: /docs/api/apiaccess/agentdeliberation/update
    description: "Updates an existing deliberation's status or request message."
  - name: respond
    link: /docs/api/apiaccess/agentdeliberation/respond
    description: Submits a response to a deliberation from an agent or user.
  - name: vote
    link: /docs/api/apiaccess/agentdeliberation/vote
    description: Casts a vote for a specific response in a deliberation.
  - name: getWinner
    link: /docs/api/apiaccess/agentdeliberation/getWinner
    description: Gets the winning response of a completed deliberation.
  - name: summary
    link: /docs/api/apiaccess/agentdeliberation/summary
    description: Adds a summary to a deliberation, typically after completion.
---

# Agent Deliberation API

The Agent Deliberation API provides functionality for creating and managing structured discussions and decision-making processes among multiple agents. It supports voting-based deliberations, feedback collection, Q&A sessions, and shared lists.

## Overview

The agent deliberation module enables you to:
- **Create Discussions**: Start deliberations on any topic with multiple agents
- **Collect Responses**: Gather input from various agents and users
- **Voting System**: Allow participants to vote on the best responses
- **Track Progress**: Monitor deliberation status through various stages
- **Determine Winners**: Identify the most popular or best responses
- **Generate Summaries**: Create summaries of deliberation outcomes

## Deliberation Types

The system supports several deliberation types:

- **Voting**: Structured voting where participants vote on responses
- **Feedback**: Collection of feedback without formal voting
- **Q&A**: Question and answer sessions
- **Shared List**: Collaborative list creation and management

## Deliberation Status Flow

```
draft → collecting-responses → voting → completed → closed
```

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Initialize connection
await codebolt.waitForReady();

// Create a new deliberation
const deliberation = await codebolt.agentDeliberation.create({
  deliberationType: 'voting',
  title: 'Best approach for data migration',
  requestMessage: 'What is the best strategy for migrating our customer database?',
  creatorId: 'agent-1',
  creatorName: 'System Admin',
  participants: ['agent-2', 'agent-3', 'agent-4'],
  status: 'collecting-responses'
});

console.log('Deliberation created:', deliberation.payload.deliberation.id);

// Agents respond
await codebolt.agentDeliberation.respond({
  deliberationId: deliberation.payload.deliberation.id,
  responderId: 'agent-2',
  responderName: 'Database Expert',
  body: 'Use a phased migration approach with rollback capabilities.'
});

// Move to voting
await codebolt.agentDeliberation.update({
  deliberationId: deliberation.payload.deliberation.id,
  status: 'voting'
});

// Cast votes
await codebolt.agentDeliberation.vote({
  deliberationId: deliberation.payload.deliberation.id,
  responseId: 'response-123',
  voterId: 'agent-1',
  voterName: 'System Admin'
});

// Get the winner
const winner = await codebolt.agentDeliberation.getWinner({
  deliberationId: deliberation.payload.deliberation.id
});

console.log('Winning response:', winner.payload.winner);
```

## Common Use Cases

### 1. Decision Making

```typescript
// Create a deliberation for architectural decision
const decision = await codebolt.agentDeliberation.create({
  deliberationType: 'voting',
  title: 'Database technology choice',
  requestMessage: 'Should we use PostgreSQL or MongoDB for the new project?',
  creatorId: 'tech-lead',
  creatorName: 'Tech Lead',
  status: 'collecting-responses'
});
```

### 2. Feature Planning

```typescript
// Collect feedback on feature priorities
const feedback = await codebolt.agentDeliberation.create({
  deliberationType: 'feedback',
  title: 'Q1 Feature Priorities',
  requestMessage: 'What features should we prioritize for Q1?',
  creatorId: 'product-manager',
  creatorName: 'Product Manager',
  participants: ['dev-lead', 'design-lead', 'sales-lead']
});
```

### 3. Knowledge Sharing

```typescript
// Q&A session for technical questions
const qa = await codebolt.agentDeliberation.create({
  deliberationType: 'qa',
  title: 'Microservices Architecture Q&A',
  requestMessage: 'Ask questions about our microservices architecture',
  creatorId: 'architect',
  creatorName: 'System Architect',
  status: 'collecting-responses'
});
```

### 4. Collaborative Brainstorming

```typescript
// Shared list for brainstorming
const brainstorm = await codebolt.agentDeliberation.create({
  deliberationType: 'shared-list',
  title: 'Product Name Ideas',
  requestMessage: 'Add your name ideas for the new product',
  creatorId: 'marketing',
  creatorName: 'Marketing Team',
  status: 'collecting-responses'
});
```

<CBAPICategory />
