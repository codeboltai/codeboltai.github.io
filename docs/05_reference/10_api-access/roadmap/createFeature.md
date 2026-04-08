---
name: createFeature
cbbaseinfo:
  description: Creates a new feature within a specific phase. Features represent specific functionality items or deliverables.
cbparameters:
  parameters:
    - name: phaseId
      typeName: string
      description: The ID of the phase to add the feature to
    - name: data
      typeName: CreateFeatureData
      description: Feature data including title, description, and optional metadata
    - name: projectPath
      typeName: string
      description: "Optional project path (uses active project if not provided)"
  returns:
    signatureTypeName: "Promise<RoadmapFeatureResponse>"
    description: A promise that resolves to the created feature
data:
  name: createFeature
  category: roadmap
  link: createFeature.md
---
# createFeature

```typescript
codebolt.roadmap.createFeature(phaseId: string, data: CreateFeatureData, projectPath: string): Promise<RoadmapFeatureResponse>
```

Creates a new feature within a specific phase. Features represent specific functionality items or deliverables.
### Parameters

- **`phaseId`** (string): The ID of the phase to add the feature to
- **`data`** ([CreateFeatureData](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreateFeatureData)): Feature data including title, description, and optional metadata
- **`projectPath`** (string): Optional project path (uses active project if not provided)

### Returns

- **`Promise<[RoadmapFeatureResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RoadmapFeatureResponse)>`**: A promise that resolves to the created feature

### Parameter Details

- **`phaseId`** (string, required): The ID of the phase to add the feature to
- **`data`** (CreateFeatureData, required): Feature data
  - **`title`** (string, required): Feature title
  - **`description`** (string, optional): Feature description
  - **`impact`** (ImpactLevel, optional): 'low' | 'medium' | 'high' | 'critical'
  - **`difficulty`** (DifficultyLevel, optional): 'easy' | 'medium' | 'hard' | 'very-hard'
  - **`priority`** (number, optional): Feature priority (lower number = higher priority)
  - **`tags`** (string[], optional): Feature tags for categorization
  - **`category`** (string, optional): Feature category
  - **`status`** (FeatureStatus, optional): 'pending' | 'in-progress' | 'completed' | 'cancelled' (default: 'pending')
  - **`createdBy`** (RoadmapCreator, optional): Creator information

### Response Structure

```typescript
interface RoadmapFeatureResponse {
  feature: Feature;
}

interface Feature {
  id: string;
  title: string;
  description?: string;
  impact?: ImpactLevel;
  difficulty?: DifficultyLevel;
  priority?: number;
  tags?: string[];
  category?: string;
  status: FeatureStatus;
  phaseId: string;
  createdBy?: RoadmapCreator;
  createdAt: string;
  updatedAt: string;
}
```

### Examples

#### 1. Create Basic Feature
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a simple feature
const result = await codebolt.roadmap.createFeature('phase_001', {
  title: 'User Login',
  description: 'Allow users to login with email and password'
});

console.log('Feature created:', result.feature.id);
console.log('Title:', result.feature.title);
console.log('Status:', result.feature.status); // 'pending'
```

#### 2. Create Feature with Impact and Difficulty
```typescript
// Create feature with impact and difficulty ratings
const result = await codebolt.roadmap.createFeature('phase_001', {
  title: 'Payment Processing',
  description: 'Integrate Stripe for credit card payments',
  impact: 'critical',
  difficulty: 'hard',
  priority: 1,
  category: 'payments'
});

console.log('High-priority critical feature created');
```

#### 3. Create Feature with Tags
```typescript
// Create feature with tags for categorization
const result = await codebolt.roadmap.createFeature('phase_001', {
  title: 'Search Functionality',
  description: 'Full-text search across all content',
  impact: 'high',
  difficulty: 'medium',
  priority: 5,
  tags: ['search', 'elastic', 'backend', 'api'],
  category: 'Core Features'
});

console.log('Feature with tags created');
```

#### 4. Create Feature with Creator Info
```typescript
// Create feature with creator attribution
const result = await codebolt.roadmap.createFeature('phase_002', {
  title: 'User Dashboard',
  description: 'Personalized dashboard for users',
  impact: 'high',
  difficulty: 'medium',
  createdBy: {
    id: 'user_123',
    name: 'John Doe',
    type: 'user'
  }
});

console.log('Feature created with creator info');
```

#### 5. Create Multiple Features
```typescript
// Add multiple features to a phase
const phaseId = 'phase_001';

const features = [
  { title: 'User Registration', impact: 'high', difficulty: 'easy', priority: 1 },
  { title: 'Email Verification', impact: 'medium', difficulty: 'easy', priority: 2 },
  { title: 'Password Reset', impact: 'medium', difficulty: 'medium', priority: 3 },
  { title: 'Profile Management', impact: 'high', difficulty: 'medium', priority: 4 },
  { title: 'Avatar Upload', impact: 'low', difficulty: 'easy', priority: 5 }
];

for (const feature of features) {
  const result = await codebolt.roadmap.createFeature(phaseId, {
    title: feature.title,
    impact: feature.impact,
    difficulty: feature.difficulty,
    priority: feature.priority
  });

  console.log(`✓ Created: ${result.feature.title}`);
}
```

#### 6. Create Feature with Initial Status
```typescript
// Create feature already in progress
const result = await codebolt.roadmap.createFeature('phase_001', {
  title: 'API Documentation',
  description: 'Generate API documentation from code',
  impact: 'medium',
  difficulty: 'easy',
  status: 'in-progress',
  tags: ['documentation', 'api']
});

console.log('Feature created with in-progress status');
```

#### 7. Create Feature for Specific Project
```typescript
// Create feature in specific project
const result = await codebolt.roadmap.createFeature(
  'phase_001',
  {
    title: 'Database Migration',
    description: 'Migrate to PostgreSQL',
    impact: 'critical',
    difficulty: 'very-hard'
  },
  '/path/to/project'
);

console.log('Feature created for specific project');
```

#### 8. Create Feature with Full Details
```typescript
// Create comprehensive feature
const result = await codebolt.roadmap.createFeature('phase_002', {
  title: 'Real-time Notifications',
  description: `
Implement real-time push notifications using WebSockets.

## Requirements
- Support for desktop and mobile browsers
- Configurable notification types
- User preferences management
- Delivery status tracking

## Technical Approach
- Use WebSocket for real-time communication
- Implement service workers for push notifications
- Store notification preferences in database
  `.trim(),
  impact: 'high',
  difficulty: 'hard',
  priority: 3,
  category: 'User Engagement',
  tags: ['websocket', 'notifications', 'real-time', 'frontend'],
  status: 'pending',
  createdBy: {
    id: 'agent_fe_001',
    name: 'Frontend Agent',
    type: 'agent'
  }
});

console.log('Comprehensive feature created');
```

#### 9. Batch Feature Creation
```typescript
// Create multiple features for a phase
async function populatePhaseWithFeatures(phaseId: string, featureList: any[]) {
  const created = [];

  for (const featureData of featureList) {
    const result = await codebolt.roadmap.createFeature(phaseId, featureData);

    if (result.feature) {
      created.push(result.feature);
      console.log(`✓ Created: ${featureData.title}`);
    }
  }

  console.log(`Created ${created.length} features`);
  return created;
}

// Usage
const features = [
  { title: 'Auth', impact: 'critical', difficulty: 'medium' },
  { title: 'Database', impact: 'critical', difficulty: 'hard' },
  { title: 'API', impact: 'high', difficulty: 'medium' }
];

await populatePhaseWithFeatures('phase_001', features);
```

#### 10. Create Feature and Track Progress
```typescript
// Create feature and set up progress tracking
async function createFeatureWithTracking(phaseId: string, title: string) {
  const result = await codebolt.roadmap.createFeature(phaseId, {
    title,
    description: `Implementation of ${title}`,
    impact: 'high',
    difficulty: 'medium',
    tags: ['tracked']
  });

  const featureId = result.feature.id;

  // Set up tracking (create associated task)
  await createTask({
    title: `Implement ${title}`,
    featureId: featureId,
    status: 'todo'
  });

  console.log('Feature created with tracking:', featureId);
  return featureId;
}
```

### Common Use Cases

**Feature Planning:**
```typescript
// Plan features for a sprint
async function planSprintFeatures(phaseId: string, stories: UserStory[]) {
  for (const story of stories) {
    await codebolt.roadmap.createFeature(phaseId, {
      title: story.title,
      description: story.description,
      impact: story.impact,
      difficulty: story.difficulty,
      priority: story.priority,
      tags: story.tags,
      category: 'Sprint ' + story.sprintNumber
    });
  }
}
```

**Backlog Management:**
```typescript
// Add items to backlog phase
async function addToBacklog(title: string, priority: number) {
  const phases = await codebolt.roadmap.getPhases();
  const backlog = phases.phases.find(p => p.name === 'Backlog');

  if (backlog) {
    await codebolt.roadmap.createFeature(backlog.id, {
      title,
      priority,
      status: 'pending'
    });
  }
}
```

**Milestone Breakdown:**
```typescript
// Break down milestone into features
async function breakDownMilestone(phaseId: string, milestone: string) {
  const features = [
    { title: `${milestone} - Research`, difficulty: 'easy' },
    { title: `${milestone} - Design`, difficulty: 'medium' },
    { title: `${milestone} - Implementation`, difficulty: 'hard' },
    { title: `${milestone} - Testing`, difficulty: 'medium' },
    { title: `${milestone} - Deployment`, difficulty: 'easy' }
  ];

  for (const feature of features) {
    await codebolt.roadmap.createFeature(phaseId, {
      title: feature.title,
      difficulty: feature.difficulty,
      tags: ['milestone', milestone]
    });
  }
}
```

### Notes

- Feature ID is auto-generated
- Default status is 'pending'
- Priority is optional but recommended for sorting
- Impact and difficulty help with planning
- Tags are useful for filtering and grouping
- Category helps organize features
- Features are linked to their parent phase
- Creator info tracks who suggested the feature
- Status can be updated later with updateFeature
- Features can be moved between phases with moveFeature