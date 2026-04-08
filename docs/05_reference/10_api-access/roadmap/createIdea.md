---
name: createIdea
cbbaseinfo:
  description: "Creates a new idea as a pre-roadmap suggestion. Ideas can be reviewed and potentially promoted to features."
cbparameters:
  parameters:
    - name: data
      typeName: CreateIdeaData
      description: Idea data including title, description, and optional metadata
    - name: projectPath
      typeName: string
      description: "Optional project path (uses active project if not provided)"
  returns:
    signatureTypeName: "Promise<RoadmapIdeaResponse>"
    description: A promise that resolves to the created idea
data:
  name: createIdea
  category: roadmap
  link: createIdea.md
---
# createIdea

```typescript
codebolt.roadmap.createIdea(data: CreateIdeaData, projectPath: string): Promise<RoadmapIdeaResponse>
```

Creates a new idea as a pre-roadmap suggestion. Ideas can be reviewed and potentially promoted to features.
### Parameters

- **`data`** ([CreateIdeaData](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateIdeaData)): Idea data including title, description, and optional metadata
- **`projectPath`** (string): Optional project path (uses active project if not provided)

### Returns

- **`Promise<[RoadmapIdeaResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RoadmapIdeaResponse)>`**: A promise that resolves to the created idea

### Parameter Details

The [`CreateIdeaData`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateIdeaData) interface includes:
- **`title`** (string, required): Idea title
- **`description`** (string, optional): Detailed idea description
- **`category`** (string, optional): Idea category
- **`suggestedImpact`** (ImpactLevel, optional): 'low' | 'medium' | 'high' | 'critical'
- **`suggestedDifficulty`** (DifficultyLevel, optional): 'easy' | 'medium' | 'hard' | 'very-hard'
- **`tags`** (string[], optional): Tags for categorization
- **`createdBy`** (RoadmapCreator, optional): Creator information

### Response Structure

```typescript
interface RoadmapIdeaResponse {
  idea: Idea;
}

interface Idea {
  id: string;
  title: string;
  description?: string;
  category?: string;
  suggestedImpact?: ImpactLevel;
  suggestedDifficulty?: DifficultyLevel;
  tags?: string[];
  status: IdeaStatus;  // 'pending' | 'accepted' | 'rejected'
  createdBy?: RoadmapCreator;
  reviewedBy?: RoadmapCreator;
  reviewNotes?: string;
  createdAt: string;
  updatedAt: string;
}
```

### Examples

#### 1. Create Basic Idea
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a simple idea
const result = await codebolt.roadmap.createIdea({
  title: 'Dark Mode Support'
});

console.log('Idea created:', result.idea.id);
console.log('Title:', result.idea.title);
console.log('Status:', result.idea.status); // 'pending'
```

#### 2. Create Detailed Idea
```typescript
// Create idea with full details
const result = await codebolt.roadmap.createIdea({
  title: 'AI-Powered Search Suggestions',
  description: 'Implement machine learning-based search suggestions that learn from user behavior and provide intelligent autocomplete.',
  category: 'Search',
  suggestedImpact: 'high',
  suggestedDifficulty: 'hard',
  tags: ['ai', 'search', 'machine-learning', 'innovation'],
  createdBy: {
    id: 'user_123',
    name: 'Product Manager',
    type: 'user'
  }
});

console.log('Idea created with full details');
```

#### 3. Create Idea from User Feedback
```typescript
// Create idea based on user feedback
async function createIdeaFromFeedback(feedback: UserFeedback) {
  const result = await codebolt.roadmap.createIdea({
    title: feedback.title,
    description: feedback.description,
    category: feedback.category,
    suggestedImpact: estimateImpact(feedback.votes),
    suggestedDifficulty: estimateDifficulty(feedback.complexity),
    tags: ['user-feedback', feedback.category],
    createdBy: {
      id: feedback.userId,
      name: feedback.userName,
      type: 'user'
    }
  });

  return result.idea;
}

// Usage
const idea = await createIdeaFromFeedback({
  title: 'Export to PDF',
  description: 'Allow users to export reports as PDF',
  votes: 156,
  complexity: 'medium',
  category: 'Reports'
});
```

#### 4. Create Multiple Ideas
```typescript
// Create multiple ideas for review
const ideas = [
  {
    title: 'Mobile App',
    description: 'Native mobile application for iOS and Android',
    category: 'Platform',
    suggestedImpact: 'high',
    suggestedDifficulty: 'very-hard'
  },
  {
    title: 'API Rate Limiting',
    description: 'Implement rate limiting to prevent abuse',
    category: 'Infrastructure',
    suggestedImpact: 'critical',
    suggestedDifficulty: 'medium'
  },
  {
    title: 'Custom Themes',
    description: 'Allow users to customize the UI theme',
    category: 'UI/UX',
    suggestedImpact: 'medium',
    suggestedDifficulty: 'medium'
  }
];

for (const ideaData of ideas) {
  const result = await codebolt.roadmap.createIdea(ideaData);
  console.log(`✓ Idea created: ${result.idea.title}`);
}
```

#### 5. Create Idea from Team Brainstorming
```typescript
// Capture ideas from brainstorming session
async function captureBrainstormIdeas(sessionId: string) {
  const session = await getBrainstormSession(sessionId);

  for (const idea of session.ideas) {
    await codebolt.roadmap.createIdea({
      title: idea.title,
      description: idea.description,
      category: session.category,
      suggestedImpact: idea.impact,
      suggestedDifficulty: idea.difficulty,
      tags: [...session.tags, 'brainstorm'],
      createdBy: {
        id: idea.authorId,
        name: idea.authorName,
        type: 'user'
      }
    });
  }

  console.log(`Captured ${session.ideas.length} ideas from session`);
}
```

#### 6. Create Low-Effort Ideas
```typescript
// Create quick wins / low-hanging fruit
const quickWins = [
  { title: 'Add tooltips', difficulty: 'easy', impact: 'low' },
  { title: 'Improve error messages', difficulty: 'easy', impact: 'medium' },
  { title: 'Add keyboard shortcuts', difficulty: 'easy', impact: 'medium' },
  { title: 'Optimize images', difficulty: 'easy', impact: 'low' }
];

for (const win of quickWins) {
  await codebolt.roadmap.createIdea({
    title: win.title,
    suggestedDifficulty: win.difficulty,
    suggestedImpact: win.impact,
    tags: ['quick-win', 'low-effort']
  });
}
```

#### 7. Create Innovation Ideas
```typescript
// Create innovative, high-risk high-reward ideas
const innovations = [
  {
    title: 'Voice Interface',
    description: 'Complete voice-controlled interface using NLP',
    category: 'Innovation',
    suggestedDifficulty: 'very-hard',
    suggestedImpact: 'critical',
    tags: ['voice', 'nlp', 'experimental']
  },
  {
    title: 'AR Visualization',
    description: 'Augmented reality data visualization',
    category: 'Innovation',
    suggestedDifficulty: 'very-hard',
    suggestedImpact: 'high',
    tags: ['ar', 'visualization', 'experimental']
  }
];

for (const innovation of innovations) {
  await codebolt.roadmap.createIdea(innovation);
}
```

#### 8. Create Idea for Specific Project
```typescript
// Create idea in specific project
const result = await codebolt.roadmap.createIdea({
  title: 'Plugin System',
  description: 'Allow third-party plugins to extend functionality',
  category: 'Architecture',
  suggestedImpact: 'high',
  suggestedDifficulty: 'hard'
}, '/path/to/project');

console.log('Idea created for specific project');
```

#### 9. Create Idea with Agent Attribution
```typescript
// Agent suggests an idea
const result = await codebolt.roadmap.createIdea({
  title: 'Automated Testing Pipeline',
  description: 'AI-powered test generation and execution',
  category: 'Testing',
  suggestedImpact: 'high',
  suggestedDifficulty: 'hard',
  createdBy: {
    id: 'agent_qa_001',
    name: 'QA Agent',
    type: 'agent'
  }
});

console.log('Idea suggested by agent');
```

#### 10. Create Idea from Competitor Analysis
```typescript
// Create ideas based on competitor features
async function analyzeCompetitorsAndCreateIdeas(competitors: string[]) {
  for (const competitor of competitors) {
    const features = await getCompetitorFeatures(competitor);

    for (const feature of features) {
      // Only create ideas for features we don't have
      const hasFeature = await checkIfFeatureExists(feature.name);

      if (!hasFeature) {
        await codebolt.roadmap.createIdea({
          title: feature.name,
          description: `Similar to ${competitor}: ${feature.description}`,
          category: 'Competitive',
          suggestedImpact: 'medium',
          suggestedDifficulty: feature.difficulty,
          tags: ['competitor-analysis', competitor]
        });
      }
    }
  }
}
```

### Common Use Cases

**Feedback Collection:**
```typescript
// Convert user feedback to ideas
async function feedbackToIdeas(feedbackItems: Feedback[]) {
  for (const item of feedbackItems) {
    await codebolt.roadmap.createIdea({
      title: item.title,
      description: item.details,
      category: 'User Feedback',
      suggestedImpact: item.upvotes > 100 ? 'high' : 'medium',
      tags: ['user-request', item.category]
    });
  }
}
```

**Innovation Pipeline:**
```typescript
// Maintain innovation pipeline
async function addToInnovationPipeline(idea: string) {
  await codebolt.roadmap.createIdea({
    title: idea,
    category: 'Innovation',
    suggestedImpact: 'unknown',
    suggestedDifficulty: 'unknown',
    tags: ['innovation', 'exploration']
  });
}
```

**Technical Debt Ideas:**
```typescript
// Create ideas for technical debt items
async function logTechnicalDebt(debtItems: TechDebt[]) {
  for (const item of debtItems) {
    await codebolt.roadmap.createIdea({
      title: `Refactor: ${item.component}`,
      description: item.description,
      category: 'Technical Debt',
      suggestedImpact: item.impactOnPerformance,
      suggestedDifficulty: item.complexity,
      tags: ['refactor', 'tech-debt', item.component]
    });
  }
}
```

### Notes

- Idea ID is auto-generated
- Default status is 'pending'
- Ideas are separate from features until reviewed
- Suggested impact and difficulty are proposals, not final
- Review process can accept or reject ideas
- Accepted ideas can be moved to roadmap as features
- Creator info tracks who suggested the idea
- Tags help organize and filter ideas
- Category groups related ideas
- Review notes added during review process
- Timestamps automatically track when created