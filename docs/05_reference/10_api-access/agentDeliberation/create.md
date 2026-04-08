---
name: create
cbbaseinfo:
  description: Creates a new deliberation session for agents to discuss, respond to, and vote on topics.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateDeliberationParams
      description: Parameters for creating the deliberation including type, title, message, creator, and participants.
  returns:
    signatureTypeName: "Promise<ICreateDeliberationResponse>"
    description: A promise that resolves to the created deliberation.
    typeArgs: []
data:
  name: create
  category: agentDeliberation
  link: create.md
---
# create

```typescript
codebolt.agentDeliberation.create(params: ICreateDeliberationParams): Promise<ICreateDeliberationResponse>
```

Creates a new deliberation session for agents to discuss, respond to, and vote on topics.
### Parameters

- **`params`** ([ICreateDeliberationParams](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateDeliberationParams)): Parameters for creating the deliberation including type, title, message, creator, and participants.

### Returns

- **`Promise<[ICreateDeliberationResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateDeliberationResponse)>`**: A promise that resolves to the created deliberation.

### Response Structure

Returns [`ICreateDeliberationResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ICreateDeliberationResponse) with the created deliberation.

**Parameters:**
- `deliberationType` ('voting' | 'feedback' | 'qa' | 'shared-list'): Type of deliberation
- `title` (string): Title of the deliberation
- `requestMessage` (string): The main question or topic
- `creatorId` (string): ID of the creator
- `creatorName` (string): Name of the creator
- `participants` (string[], optional): List of participant IDs
- `status` (DeliberationStatus, optional): Initial status (default: 'draft')

### Examples

#### Example 1: Create Voting Deliberation

```typescript
import codebolt from '@codebolt/codeboltjs';

const deliberation = await codebolt.agentDeliberation.create({
  deliberationType: 'voting',
  title: 'Best UI Framework',
  requestMessage: 'Which UI framework should we use for the new project?',
  creatorId: 'tech-lead',
  creatorName: 'Tech Lead',
  participants: ['dev-1', 'dev-2', 'dev-3'],
  status: 'collecting-responses'
});

console.log('Deliberation ID:', deliberation.payload.deliberation.id);
```

#### Example 2: Create Feedback Session

```typescript
const feedback = await codebolt.agentDeliberation.create({
  deliberationType: 'feedback',
  title: 'Project Retrospective',
  requestMessage: 'What went well and what can be improved?',
  creatorId: 'scrum-master',
  creatorName: 'Scrum Master'
});
```

#### Example 3: Create Q&A Session

```typescript
const qa = await codebolt.agentDeliberation.create({
  deliberationType: 'qa',
  title: 'Architecture Q&A',
  requestMessage: 'Ask questions about the new microservices architecture',
  creatorId: 'architect',
  creatorName: 'System Architect',
  participants: ['team-1', 'team-2', 'team-3'],
  status: 'collecting-responses'
});
```

#### Example 4: Decision Making Workflow

```typescript
const makeDecision = async (topic: string, options: string[]) => {
  const deliberation = await codebolt.agentDeliberation.create({
    deliberationType: 'voting',
    title: `Decision: ${topic}`,
    requestMessage: `Which option should we choose: ${options.join(', ')}?`,
    creatorId: 'decision-maker',
    creatorName: 'Project Lead',
    participants: ['stakeholder-1', 'stakeholder-2', 'stakeholder-3'],
    status: 'collecting-responses'
  });

  // Wait for responses
  await new Promise(resolve => setTimeout(resolve, 3600000)); // 1 hour

  // Move to voting
  await codebolt.agentDeliberation.update({
    deliberationId: deliberation.payload.deliberation.id,
    status: 'voting'
  });

  return deliberation.payload.deliberation.id;
};
```

### Common Use Cases

#### Consensus Building

```typescript
const buildConsensus = async (topic: string, teamMembers: string[]) => {
  const deliberation = await codebolt.agentDeliberation.create({
    deliberationType: 'voting',
    title: topic,
    requestMessage: `Let's reach consensus on: ${topic}`,
    creatorId: 'facilitator',
    creatorName: 'Team Facilitator',
    participants: teamMembers,
    status: 'collecting-responses'
  });

  return deliberation;
};
```

### Notes

- Choose the appropriate deliberation type for your use case
- Participants can be added after creation
- Status controls the workflow (draft → collecting-responses → voting → completed)
- Each deliberation type has slightly different behaviors