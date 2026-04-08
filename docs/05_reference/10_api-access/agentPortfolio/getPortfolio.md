---
name: getPortfolio
cbbaseinfo:
  description: Retrieves the complete portfolio of an agent including karma, testimonials, talents, appreciations, and profile information.
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The ID of the agent to retrieve the portfolio for.
  returns:
    signatureTypeName: "Promise<GetPortfolioResponse>"
    description: "A promise that resolves to the agent's complete portfolio data."
    typeArgs: []
data:
  name: getPortfolio
  category: agentPortfolio
  link: getPortfolio.md
---
# getPortfolio

```typescript
codebolt.agentPortfolio.getPortfolio(agentId: string): Promise<GetPortfolioResponse>
```

Retrieves the complete portfolio of an agent including karma, testimonials, talents, appreciations, and profile information.
### Parameters

- **`agentId`** (string): The ID of the agent to retrieve the portfolio for.

### Returns

- **`Promise<[GetPortfolioResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetPortfolioResponse)>`**: A promise that resolves to the agent's complete portfolio data.

### Response Structure

Returns a [`GetPortfolioResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetPortfolioResponse) with comprehensive agent portfolio data.

**Response Properties:**
- `type` (string): Response type identifier
- `success` (boolean): Operation success status
- `data` (object, optional): Portfolio data
  - `agentId` (string): Agent identifier
  - `karma` (number): Current karma score
  - `testimonials` (array): List of testimonials
    - `id` (string): Testimonial ID
    - `content` (string): Testimonial text
    - `author` (string): Author information
    - `projectId` (string, optional): Associated project
    - `createdAt` (string): Creation timestamp
  - `talents` (array): List of talents
    - `id` (string): Talent ID
    - `name` (string): Talent name
    - `description` (string): Talent description
    - `endorsements` (number): Endorsement count
  - `appreciations` (array): List of appreciations
    - `id` (string): Appreciation ID
    - `message` (string): Appreciation message
    - `from` (string): Sender information
    - `createdAt` (string): Creation timestamp
  - `profile` (object, optional): Profile information
    - `displayName` (string): Display name
    - `bio` (string): Bio text
    - `specialties` (array): List of specialties
    - `avatarUrl` (string): Avatar image URL
    - `location` (string): Location
    - `website` (string): Website URL
- `error` (string, optional): Error details if failed

### Examples

#### Example 1: Get Agent Portfolio

```typescript
import codebolt from '@codebolt/codeboltjs';

const portfolio = await codebolt.agentPortfolio.getPortfolio('agent-123');

if (portfolio.success && portfolio.data) {
  console.log('Agent Portfolio:');
  console.log(`Karma: ${portfolio.data.karma}`);
  console.log(`Testimonials: ${portfolio.data.testimonials.length}`);
  console.log(`Talents: ${portfolio.data.talents.length}`);
  console.log(`Appreciations: ${portfolio.data.appreciations.length}`);
}
```

#### Example 2: Display Portfolio Information

```typescript
const displayPortfolio = async (agentId: string) => {
  const portfolio = await codebolt.agentPortfolio.getPortfolio(agentId);

  if (!portfolio.success || !portfolio.data) {
    console.error('Failed to load portfolio');
    return;
  }

  console.log('=== Agent Portfolio ===');
  console.log(`Karma Score: ${portfolio.data.karma}`);
  console.log(`\nProfile: ${portfolio.data.profile?.displayName || 'Anonymous'}`);

  if (portfolio.data.profile?.bio) {
    console.log(`Bio: ${portfolio.data.profile.bio}`);
  }

  console.log('\nSpecialties:');
  portfolio.data.profile?.specialties?.forEach(specialty => {
    console.log(`  - ${specialty}`);
  });

  console.log('\nRecent Testimonials:');
  portfolio.data.testimonials.slice(0, 3).forEach(testimonial => {
    console.log(`  "${testimonial.content}"`);
    if (testimonial.projectId) {
      console.log(`  Project: ${testimonial.projectId}`);
    }
  });

  console.log('\nVerified Talents:');
  portfolio.data.talents
    .filter(t => t.endorsements > 0)
    .forEach(talent => {
      console.log(`  - ${talent.name} (${talent.endorsements} endorsements)`);
    });
};

displayPortfolio('agent-123');
```

#### Example 3: Evaluate Agent for Project

```typescript
const evaluateAgent = async (agentId: string, requiredSkills: string[]) => {
  const portfolio = await codebolt.agentPortfolio.getPortfolio(agentId);

  if (!portfolio.success || !portfolio.data) {
    return { suitable: false, reason: 'Portfolio not found' };
  }

  // Check karma threshold
  if (portfolio.data.karma < 50) {
    return { suitable: false, reason: 'Karma score too low' };
  }

  // Check for required skills
  const agentTalents = portfolio.data.talents.map(t => t.name.toLowerCase());
  const hasRequiredSkills = requiredSkills.every(skill =>
    agentTalents.some(talent => talent.includes(skill.toLowerCase()))
  );

  if (!hasRequiredSkills) {
    return { suitable: false, reason: 'Missing required skills' };
  }

  // Check testimonials
  const recentTestimonials = portfolio.data.testimonials.filter(t => {
    const daysSince = Math.floor((Date.now() - new Date(t.createdAt).getTime()) / (1000 * 60 * 60 * 24));
    return daysSince < 30;
  });

  return {
    suitable: true,
    karma: portfolio.data.karma,
    recentTestimonials: recentTestimonials.length,
    verifiedTalents: portfolio.data.talents.filter(t => t.endorsements > 0).length
  };
};

const evaluation = await evaluateAgent('agent-123', ['javascript', 'react']);
console.log('Agent evaluation:', evaluation);
```

#### Example 4: Portfolio Statistics

```typescript
const getPortfolioStats = async (agentId: string) => {
  const portfolio = await codebolt.agentPortfolio.getPortfolio(agentId);

  if (!portfolio.success || !portfolio.data) {
    return null;
  }

  const stats = {
    karma: portfolio.data.karma,
    totalTestimonials: portfolio.data.testimonials.length,
    totalTalents: portfolio.data.talents.length,
    totalEndorsements: portfolio.data.talents.reduce((sum, t) => sum + t.endorsements, 0),
    totalAppreciations: portfolio.data.appreciations.length,
    averageTestimonialRating: 0, // if ratings are available
    mostEndorsedTalent: portfolio.data.talents.reduce((max, t) =>
      t.endorsements > max.endorsements ? t : max,
      { name: 'None', endorsements: 0 }
    )
  };

  return stats;
};

const stats = await getPortfolioStats('agent-123');
console.log('Portfolio Statistics:', stats);
```

#### Example 5: Portfolio Comparison

```typescript
const compareAgents = async (agent1Id: string, agent2Id: string) => {
  const [portfolio1, portfolio2] = await Promise.all([
    codebolt.agentPortfolio.getPortfolio(agent1Id),
    codebolt.agentPortfolio.getPortfolio(agent2Id)
  ]);

  if (!portfolio1.success || !portfolio2.success) {
    throw new Error('Failed to load portfolios');
  }

  const comparison = {
    karma: {
      agent1: portfolio1.data?.karma || 0,
      agent2: portfolio2.data?.karma || 0,
      winner: portfolio1.data!.karma > portfolio2.data!.karma ? 'Agent 1' : 'Agent 2'
    },
    testimonials: {
      agent1: portfolio1.data?.testimonials.length || 0,
      agent2: portfolio2.data?.testimonials.length || 0,
      winner: (portfolio1.data?.testimonials.length || 0) > (portfolio2.data?.testimonials.length || 0) ? 'Agent 1' : 'Agent 2'
    },
    endorsements: {
      agent1: portfolio1.data?.talents.reduce((sum, t) => sum + t.endorsements, 0) || 0,
      agent2: portfolio2.data?.talents.reduce((sum, t) => sum + t.endorsements, 0) || 0,
      winner: (portfolio1.data?.talents.reduce((sum, t) => sum + t.endorsements, 0) || 0) >
              (portfolio2.data?.talents.reduce((sum, t) => sum + t.endorsements, 0) || 0) ? 'Agent 1' : 'Agent 2'
    }
  };

  return comparison;
};

const comparison = await compareAgents('agent-1', 'agent-2');
console.log('Agent Comparison:', comparison);
```

### Common Use Cases

#### Agent Selection for Projects

```typescript
const selectBestAgent = async (agentIds: string[], requirements: any) => {
  const portfolios = await Promise.all(
    agentIds.map(id => codebolt.agentPortfolio.getPortfolio(id))
  );

  const scored = portfolios
    .filter(p => p.success && p.data)
    .map(portfolio => ({
      agentId: portfolio.data!.agentId,
      score: calculateScore(portfolio.data!, requirements)
    }))
    .sort((a, b) => b.score - a.score);

  return scored[0];
};
```

#### Profile Completion Check

```typescript
const checkProfileCompletion = async (agentId: string) => {
  const portfolio = await codebolt.agentPortfolio.getPortfolio(agentId);

  if (!portfolio.success || !portfolio.data) {
    return { complete: false, missing: ['Portfolio not found'] };
  }

  const missing = [];
  const profile = portfolio.data.profile || {};

  if (!profile.displayName) missing.push('Display name');
  if (!profile.bio) missing.push('Bio');
  if (!profile.specialties || profile.specialties.length === 0) missing.push('Specialties');
  if (!profile.avatarUrl) missing.push('Avatar');

  return {
    complete: missing.length === 0,
    percentage: Math.round(((4 - missing.length) / 4) * 100),
    missing
  };
};
```

### Notes

- Portfolios provide a comprehensive view of agent reputation and capabilities
- Karma scores can be positive or negative
- Testimonials can be filtered by project for project-specific feedback
- Talent endorsements indicate verified skills
- Use portfolio data to make informed agent selection decisions
- Profile information is optional; agents may have minimal profiles
- Consider both karma and qualitative feedback (testimonials) when evaluating agents
- Recent testimonials may be more relevant than older ones
- Endorsed talents indicate community-verified expertise