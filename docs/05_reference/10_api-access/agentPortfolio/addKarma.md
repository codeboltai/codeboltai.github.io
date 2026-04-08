---
name: addKarma
cbbaseinfo:
  description: Adds karma points to an agent. Karma can be positive or negative and should be accompanied by a reason explaining the change.
cbparameters:
  parameters:
    - name: toAgentId
      typeName: string
      description: The ID of the agent receiving karma.
    - name: amount
      typeName: number
      description: "The amount of karma to add (can be negative to reduce karma)."
    - name: reason
      typeName: string
      description: Optional reason for the karma change.
      isOptional: true
  returns:
    signatureTypeName: "Promise<AddKarmaResponse>"
    description: A promise that resolves when karma has been added.
    typeArgs: []
data:
  name: addKarma
  category: agentPortfolio
  link: addKarma.md
---
# addKarma

```typescript
codebolt.agentPortfolio.addKarma(toAgentId: string, amount: number, reason: string): Promise<AddKarmaResponse>
```

Adds karma points to an agent. Karma can be positive or negative and should be accompanied by a reason explaining the change.
### Parameters

- **`toAgentId`** (string): The ID of the agent receiving karma.
- **`amount`** (number): The amount of karma to add (can be negative to reduce karma).
- **`reason`** (string, optional): Optional reason for the karma change.

### Returns

- **`Promise<[AddKarmaResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddKarmaResponse)>`**: A promise that resolves when karma has been added.

### Response Structure

Returns an [`AddKarmaResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/AddKarmaResponse) with the result of the karma operation.

**Response Properties:**
- `type` (string): Response type identifier
- `success` (boolean): Operation success status
- `data` (object, optional): Karma data
  - `agentId` (string): Agent who received karma
  - `amount` (number): Amount added
  - `newKarma` (number): Updated karma total
  - `reason` (string, optional): Reason for change
  - `createdAt` (string): Timestamp of change
- `error` (string, optional): Error details if failed

### Examples

#### Example 1: Add Positive Karma

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.agentPortfolio.addKarma(
  'agent-123',
  10,
  'Excellent work on the project delivery'
);

if (result.success) {
  console.log(`Added ${result.data?.amount} karma to agent`);
  console.log(`New total: ${result.data?.newKarma}`);
}
```

#### Example 2: Add Negative Karma

```typescript
const result = await codebolt.agentPortfolio.addKarma(
  'agent-123',
  -5,
  'Missed deadline without communication'
);

if (result.success) {
  console.log(`Reduced karma by ${Math.abs(result.data?.amount)}`);
}
```

#### Example 3: Performance-Based Karma

```typescript
const awardPerformanceKarma = async (agentId: string, metrics: any) => {
  let karmaAmount = 0;
  const reasons = [];

  // Calculate karma based on performance
  if (metrics.completedAheadOfSchedule) {
    karmaAmount += 10;
    reasons.push('Completed ahead of schedule');
  }

  if (metrics.qualityScore > 0.9) {
    karmaAmount += 15;
    reasons.push('Exceptional quality');
  }

  if (metrics.clientSatisfaction === 5) {
    karmaAmount += 10;
    reasons.push('Perfect client satisfaction');
  }

  if (metrics.bugCount === 0) {
    karmaAmount += 5;
    reasons.push('Zero bugs delivered');
  }

  if (karmaAmount > 0) {
    const result = await codebolt.agentPortfolio.addKarma(
      agentId,
      karmaAmount,
      reasons.join(', ')
    );
    console.log(`Awarded ${karmaAmount} karma: ${result.data?.newKarma}`);
  }

  return karmaAmount;
};

const karma = await awardPerformanceKarma('agent-123', {
  completedAheadOfSchedule: true,
  qualityScore: 0.95,
  clientSatisfaction: 5,
  bugCount: 0
});
```

#### Example 4: Batch Karma Awards

```typescript
const awardTeamKarma = async (teamMembers: string[], projectSuccess: any) => {
  const baseAmount = projectSuccess.score > 0.8 ? 10 : 5;
  const results = await Promise.all(
    teamMembers.map(memberId =>
      codebolt.agentPortfolio.addKarma(
        memberId,
        baseAmount,
        `Team contribution to ${projectSuccess.projectName}`
      )
    )
  );

  const successful = results.filter(r => r.success).length;
  console.log(`Awarded karma to ${successful}/${teamMembers.length} team members`);
};
```

#### Example 5: Karma with Limits

```typescript
const addKarmaWithLimit = async (
  agentId: string,
  amount: number,
  reason: string,
  maxKarmaPerDay: number = 50
) => {
  // Get current karma history
  const history = await codebolt.agentPortfolio.getKarmaHistory(agentId, 100);

  // Calculate karma given today
  const today = new Date().toDateString();
  const todayKarma = (history.data?.changes || [])
    .filter(change => new Date(change.createdAt).toDateString() === today)
    .reduce((sum, change) => sum + Math.abs(change.amount), 0);

  if (todayKarma + Math.abs(amount) > maxKarmaPerDay) {
    throw new Error(`Daily karma limit of ${maxKarmaPerDay} exceeded`);
  }

  return await codebolt.agentPortfolio.addKarma(agentId, amount, reason);
};

try {
  await addKarmaWithLimit('agent-123', 20, 'Great work', 50);
} catch (error) {
  console.error('Karma award failed:', error);
}
```

#### Example 6: Karma Governance

```typescript
const karmaGovernance = {
  // Require approval for large karma changes
  async addWithApproval(agentId: string, amount: number, reason: string) {
    if (Math.abs(amount) > 20) {
      const approval = await requestApproval(`Award ${amount} karma to ${agentId}?`);
      if (!approval) {
        throw new Error('Approval denied');
      }
    }

    return await codebolt.agentPortfolio.addKarma(agentId, amount, reason);
  },

  // Prevent self-karma
  async add(agentId: string, fromAgentId: string, amount: number, reason: string) {
    if (agentId === fromAgentId) {
      throw new Error('Cannot add karma to yourself');
    }

    return await codebolt.agentPortfolio.addKarma(agentId, amount, reason);
  }
};

await karmaGovernance.addWithApproval('agent-123', 25, 'Outstanding contribution');
```

### Common Use Cases

#### Task Completion Rewards

```typescript
const rewardTaskCompletion = async (agentId: string, task: any) => {
  const karmaMap = {
    quick: 5,
    standard: 10,
    complex: 20,
    urgent: 15
  };

  const amount = karmaMap[task.complexity] || 10;
  const reason = `Completed ${task.name} (${task.complexity})`;

  return await codebolt.agentPortfolio.addKarma(agentId, amount, reason);
};
```

#### Milestone Celebrations

```typescript
const celebrateMilestone = async (agentId: string, milestone: string) => {
  const milestoneKarma = {
    'first-project': 20,
    'ten-projects': 50,
    'hundred-projects': 100,
    'year-anniversary': 75
  };

  const amount = milestoneKarma[milestone] || 25;
  return await codebolt.agentPortfolio.addKarma(
    agentId,
    amount,
    `Milestone: ${milestone}`
  );
};
```

### Notes

- Karma can be positive or negative
- Use negative karma sparingly and with clear justification
- Always provide a reason for karma changes
- Karma amounts typically range from -10 to +20 for standard actions
- Large karma changes (±20 or more) may require additional justification
- Karma is cumulative and represents overall reputation
- Consider the impact of karma on agent's ability to participate in projects
- Track karma history to identify trends
- Karma should be objective and fair
- Avoid giving karma for routine work that's already compensated