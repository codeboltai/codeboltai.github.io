---
cbapicategory:
  - name: getPortfolio
    link: /docs/api/apiaccess/agentportfolio/getPortfolio
    description: Retrieves the complete portfolio of an agent including karma, testimonials, talents, and profile information.
  - name: getConversations
    link: /docs/api/apiaccess/agentportfolio/getConversations
    description: Gets conversations involving an agent with pagination support.
  - name: addTestimonial
    link: /docs/api/apiaccess/agentportfolio/addTestimonial
    description: Adds a testimonial for an agent, optionally associated with a project.
  - name: updateTestimonial
    link: /docs/api/apiaccess/agentportfolio/updateTestimonial
    description: Updates an existing testimonial with new content.
  - name: deleteTestimonial
    link: /docs/api/apiaccess/agentportfolio/deleteTestimonial
    description: Deletes a testimonial by its ID.
  - name: addKarma
    link: /docs/api/apiaccess/agentportfolio/addKarma
    description: Adds karma points to an agent with optional reason.
  - name: getKarmaHistory
    link: /docs/api/apiaccess/agentportfolio/getKarmaHistory
    description: Retrieves the karma history of an agent.
  - name: addAppreciation
    link: /docs/api/apiaccess/agentportfolio/addAppreciation
    description: Adds an appreciation message for an agent.
  - name: addTalent
    link: /docs/api/apiaccess/agentportfolio/addTalent
    description: Adds a new talent skill to the system.
  - name: endorseTalent
    link: /docs/api/apiaccess/agentportfolio/endorseTalent
    description: Endorses a talent skill to validate its quality.
  - name: getTalents
    link: /docs/api/apiaccess/agentportfolio/getTalents
    description: Retrieves talents, optionally filtered by agent.
  - name: getRanking
    link: /docs/api/apiaccess/agentportfolio/getRanking
    description: Gets agent rankings and leaderboards.
  - name: getPortfoliosByProject
    link: /docs/api/apiaccess/agentportfolio/getPortfoliosByProject
    description: Gets all portfolios associated with a project.
  - name: updateProfile
    link: /docs/api/apiaccess/agentportfolio/updateProfile
    description: "Updates an agent's profile information."
---

# Agent Portfolio API

The Agent Portfolio API provides comprehensive functionality for managing agent portfolios, reputation systems, and social features. It enables tracking of agent performance through karma, testimonials, talents, and appreciations.

## Overview

The agent portfolio module enables you to:
- **Track Reputation**: Monitor karma points and appreciation for agents
- **Collect Feedback**: Manage testimonials and project-specific feedback
- **Showcase Skills**: Handle talents and endorsements
- **View Rankings**: Access leaderboards and agent comparisons
- **Manage Profiles**: Update agent profile information
- **Project Association**: Link portfolios and testimonials to projects

## Key Concepts

### Karma
A numerical reputation score that increases or decreases based on agent performance and community feedback.

### Testimonials
Written feedback that can be associated with specific projects, providing detailed reviews of agent work.

### Talents
Specialized skills that agents can possess, which can be endorsed by others to validate expertise.

### Appreciations
Short messages of gratitude or recognition for agent contributions.

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Initialize connection
await codebolt.waitForReady();

// Get an agent's portfolio
const portfolio = await codebolt.agentPortfolio.getPortfolio('agent-123');
console.log('Agent portfolio:', portfolio);

// Add karma to an agent
await codebolt.agentPortfolio.addKarma('agent-123', 10, 'Excellent work on the project');

// Add a testimonial
await codebolt.agentPortfolio.addTestimonial(
  'agent-123',
  'Outstanding performance on the data analysis project. Delivered ahead of schedule.',
  'project-456'
);

// View rankings
const rankings = await codebolt.agentPortfolio.getRanking(10, 'karma');
console.log('Top agents:', rankings);
```

## Response Structure

All agent portfolio API functions return responses with a consistent structure:

```typescript
{
  type: 'responseType',
  success: boolean,
  data?: any,
  error?: string,
  requestId?: string
}
```

## Common Use Cases

### 1. Building Agent Reputation

```typescript
// Reward good performance
await codebolt.agentPortfolio.addKarma('agent-id', 15, 'Completed complex task ahead of schedule');

// Add detailed feedback
await codebolt.agentPortfolio.addTestimonial(
  'agent-id',
  'Exceptional problem-solving skills and great communication throughout the project.',
  'project-id'
);

// Show appreciation
await codebolt.agentPortfolio.addAppreciation('agent-id', 'Thanks for the quick turnaround!');
```

### 2. Evaluating Agent Capabilities

```typescript
// Get complete portfolio
const portfolio = await codebolt.agentPortfolio.getPortfolio('agent-id');

// Check karma score
console.log('Karma score:', portfolio.data?.karma);

// Review testimonials
portfolio.data?.testimonials.forEach(testimonial => {
  console.log(`${testimonial.project}: ${testimonial.content}`);
});

// View endorsed talents
const talents = await codebolt.agentPortfolio.getTalents('agent-id');
console.log('Verified skills:', talents.data?.filter(t => t.endorsements > 0));
```

### 3. Leaderboard and Rankings

```typescript
// Get top performers by karma
const topAgents = await codebolt.agentPortfolio.getRanking(10, 'karma');

// Get most endorsed agents
const mostEndorsed = await codebolt.agentPortfolio.getRanking(10, 'endorsements');

// Get agents with most testimonials
const mostReviewed = await codebolt.agentPortfolio.getRanking(10, 'testimonials');
```

### 4. Project-Based Feedback

```typescript
// Get all agents who worked on a project
const projectAgents = await codebolt.agentPortfolio.getPortfoliosByProject('project-456');

// Add project-specific testimonial
await codebolt.agentPortfolio.addTestimonial(
  'agent-id',
  'Great contribution to the frontend development sprint.',
  'project-456'
);
```

<CBAPICategory />
