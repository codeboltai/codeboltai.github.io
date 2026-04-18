---
cbapicategory:
  - name: addTalent
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/addTalent
    description: "Adds a talent to an agent's portfolio.

Records a specific skill or capability that the agent possesses,
building out their talent profile."
  - name: awardKarma
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/awardKarma
    description: "Awards karma points to an agent.

Increases an agent's karma score as recognition for good work.
Karma contributes to the agent's overall portfolio ranking."
  - name: createTestimonial
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/createTestimonial
    description: "Creates a new testimonial for an agent.

Adds a testimonial or review to an agent's portfolio, recording
feedback about their performance."
  - name: deleteTestimonial
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/deleteTestimonial
    description: "Deletes a testimonial.

Permanently removes the specified testimonial from an agent's portfolio."
  - name: endorseTalent
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/endorseTalent
    description: "Endorses a talent on an agent's portfolio.

Adds an endorsement to a specific talent, increasing its credibility.
Similar to LinkedIn skill endorsements."
  - name: getAgentConversations
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getAgentConversations
    description: "Retrieves conversation history for an agent's portfolio.

Returns the list of conversations the agent has participated in,
providing context for their portfolio activity."
  - name: getAgentKarma
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getAgentKarma
    description: "Retrieves karma details for a specific agent.

Returns the agent's karma score breakdown including total karma,
recent awards, and karma history."
  - name: getAgentPortfolio
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getAgentPortfolio
    description: "Retrieves a specific agent's portfolio.

Returns the full portfolio for a single agent, including their profile,
karma, talents, testimonials, and performance metrics."
  - name: getAgentTalents
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getAgentTalents
    description: "Retrieves all talents for a specific agent.

Returns the list of skills and capabilities registered in the
agent's portfolio, along with endorsement counts."
  - name: getByProject
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getByProject
    description: "Retrieves agent portfolios filtered by project.

Returns portfolios for agents that have contributed to a specific project,
useful for understanding which agents are active in a project context."
  - name: getRanking
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/getRanking
    description: "Retrieves agent portfolio rankings.

Returns agents sorted by their portfolio score, karma, or other
ranking criteria. Useful for discovering top-performing agents."
  - name: sendAppreciation
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/sendAppreciation
    description: "Sends an appreciation to an agent.

Records a lightweight positive feedback signal for an agent,
similar to a \"like\" or \"thumbs up\" on their work."
  - name: updateAgentProfile
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/updateAgentProfile
    description: "Updates an agent's profile information.

Modifies the profile section of an agent's portfolio, such as their
display name, description, or avatar."
  - name: updateTestimonial
    link: /docs/reference/client-sdk/api-reference/agentPortfolioApi/updateTestimonial
    description: "Updates an existing testimonial.

Modifies the content or metadata of a previously submitted testimonial."
---
# AgentPortfolioApi API

Agent Portfolio API

<CBAPICategory />

## Methods

- [`addTalent()`](./addTalent) — Adds a talent to an agent's portfolio.

Records a specific skill or capability that the agent possesses,
building out their talent profile.
- [`awardKarma()`](./awardKarma) — Awards karma points to an agent.

Increases an agent's karma score as recognition for good work.
Karma contributes to the agent's overall portfolio ranking.
- [`createTestimonial()`](./createTestimonial) — Creates a new testimonial for an agent.

Adds a testimonial or review to an agent's portfolio, recording
feedback about their performance.
- [`deleteTestimonial()`](./deleteTestimonial) — Deletes a testimonial.

Permanently removes the specified testimonial from an agent's portfolio.
- [`endorseTalent()`](./endorseTalent) — Endorses a talent on an agent's portfolio.

Adds an endorsement to a specific talent, increasing its credibility.
Similar to LinkedIn skill endorsements.
- [`getAgentConversations()`](./getAgentConversations) — Retrieves conversation history for an agent's portfolio.

Returns the list of conversations the agent has participated in,
providing context for their portfolio activity.
- [`getAgentKarma()`](./getAgentKarma) — Retrieves karma details for a specific agent.

Returns the agent's karma score breakdown including total karma,
recent awards, and karma history.
- [`getAgentPortfolio()`](./getAgentPortfolio) — Retrieves a specific agent's portfolio.

Returns the full portfolio for a single agent, including their profile,
karma, talents, testimonials, and performance metrics.
- [`getAgentTalents()`](./getAgentTalents) — Retrieves all talents for a specific agent.

Returns the list of skills and capabilities registered in the
agent's portfolio, along with endorsement counts.
- [`getByProject()`](./getByProject) — Retrieves agent portfolios filtered by project.

Returns portfolios for agents that have contributed to a specific project,
useful for understanding which agents are active in a project context.
- [`getRanking()`](./getRanking) — Retrieves agent portfolio rankings.

Returns agents sorted by their portfolio score, karma, or other
ranking criteria. Useful for discovering top-performing agents.
- [`sendAppreciation()`](./sendAppreciation) — Sends an appreciation to an agent.

Records a lightweight positive feedback signal for an agent,
similar to a "like" or "thumbs up" on their work.
- [`updateAgentProfile()`](./updateAgentProfile) — Updates an agent's profile information.

Modifies the profile section of an agent's portfolio, such as their
display name, description, or avatar.
- [`updateTestimonial()`](./updateTestimonial) — Updates an existing testimonial.

Modifies the content or metadata of a previously submitted testimonial.
