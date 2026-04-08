---
name: createPhase
cbbaseinfo:
  description: Creates a new phase in the project roadmap. Phases represent major milestones or stages of project development.
cbparameters:
  parameters:
    - name: data
      typeName: CreatePhaseData
      description: Phase data including name, description, and order
    - name: projectPath
      typeName: string
      description: "Optional project path (uses active project if not provided)"
  returns:
    signatureTypeName: "Promise<RoadmapPhaseResponse>"
    description: A promise that resolves to the created phase
data:
  name: createPhase
  category: roadmap
  link: createPhase.md
---
# createPhase

```typescript
codebolt.roadmap.createPhase(data: CreatePhaseData, projectPath: string): Promise<RoadmapPhaseResponse>
```

Creates a new phase in the project roadmap. Phases represent major milestones or stages of project development.
### Parameters

- **`data`** ([CreatePhaseData](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreatePhaseData)): Phase data including name, description, and order
- **`projectPath`** (string): Optional project path (uses active project if not provided)

### Returns

- **`Promise<[RoadmapPhaseResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RoadmapPhaseResponse)>`**: A promise that resolves to the created phase

### Parameter Details

The [`CreatePhaseData`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/CreatePhaseData) interface includes:
- **`name`** (string, required): Phase name
- **`description`** (string, optional): Phase description
- **`order`** (number, optional): Phase order in the roadmap (default: appended to end)

### Response Structure

```typescript
interface RoadmapPhaseResponse {
  phase: Phase;
}

interface Phase {
  id: string;
  name: string;
  description?: string;
  order: number;
  features: Feature[];
  createdAt: string;
  updatedAt: string;
}
```

### Examples

#### 1. Create Basic Phase
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a new phase
const result = await codebolt.roadmap.createPhase({
  name: 'Phase 1: Foundation',
  description: 'Core infrastructure and setup'
});

console.log('Phase created:', result.phase.id);
console.log('Name:', result.phase.name);
console.log('Order:', result.phase.order);
```

#### 2. Create Multiple Phases
```typescript
// Create project phases in order
const phases = [
  { name: 'Discovery', description: 'Research and planning' },
  { name: 'Design', description: 'Architecture and UI/UX design' },
  { name: 'Development', description: 'Core implementation' },
  { name: 'Testing', description: 'QA and bug fixes' },
  { name: 'Launch', description: 'Deployment and release' }
];

for (let i = 0; i < phases.length; i++) {
  const result = await codebolt.roadmap.createPhase({
    name: phases[i].name,
    description: phases[i].description,
    order: i + 1
  });

  console.log(`✓ Created: ${result.phase.name}`);
}
```

#### 3. Create Phase for Specific Project
```typescript
// Create phase in a specific project
const result = await codebolt.roadmap.createPhase({
  name: 'Q1 2026 Sprint',
  description: 'Features planned for Q1'
}, '/path/to/project');

console.log('Phase created for project');
```

#### 4. Create Phase with Explicit Order
```typescript
// Insert phase at specific position
const result = await codebolt.roadmap.createPhase({
  name: 'Phase 2.5: Additional Features',
  description: 'Extra features added to scope',
  order: 3  // Will be inserted as the 3rd phase
});
```

#### 5. Create Minimal Phase
```typescript
// Create phase with just a name
const result = await codebolt.roadmap.createPhase({
  name: 'Backlog'
});

console.log('Backlog phase created');
```

#### 6. Create Phase and Add Features
```typescript
// Create phase and immediately add features
const phase = await codebolt.roadmap.createPhase({
  name: 'Authentication',
  description: 'User authentication and authorization'
});

// Add features to the phase
await codebolt.roadmap.createFeature(phase.phase.id, {
  title: 'User Registration',
  description: 'Allow users to register with email',
  impact: 'high',
  difficulty: 'easy'
});

await codebolt.roadmap.createFeature(phase.phase.id, {
  title: 'User Login',
  description: 'Login with email and password',
  impact: 'high',
  difficulty: 'easy'
});

await codebolt.roadmap.createFeature(phase.phase.id, {
  title: 'Password Reset',
  description: 'Forgot password flow',
  impact: 'medium',
  difficulty: 'medium'
});

console.log('Phase created with 3 features');
```

#### 7. Create Phase for Time-Based Planning
```typescript
// Create time-based phases
const quarters = [
  { name: 'Q1 2026', order: 1 },
  { name: 'Q2 2026', order: 2 },
  { name: 'Q3 2026', order: 3 },
  { name: 'Q4 2026', order: 4 }
];

for (const quarter of quarters) {
  await codebolt.roadmap.createPhase({
    name: quarter.name,
    description: `Features planned for ${quarter.name}`,
    order: quarter.order
  });

  console.log(`Created ${quarter.name} phase`);
}
```

#### 8. Error Handling
```typescript
// Handle creation errors
try {
  const result = await codebolt.roadmap.createPhase({
    name: 'Test Phase'
  });

  if (result.phase) {
    console.log('Phase created successfully');
  }
} catch (error) {
  console.error('Failed to create phase:', error);

  if (error.message.includes('validation')) {
    console.error('Invalid phase data');
  } else if (error.message.includes('permission')) {
    console.error('No permission to create phase');
  }
}
```

### Common Use Cases

**Project Setup:**
```typescript
// Initialize project with standard phases
async function initializeProjectPhases(projectPath: string) {
  const standardPhases = [
    'Planning',
    'Design',
    'Development',
    'Testing',
    'Deployment'
  ];

  for (let i = 0; i < standardPhases.length; i++) {
    await codebolt.roadmap.createPhase({
      name: standardPhases[i],
      order: i + 1
    }, projectPath);
  }
}
```

**Sprint Planning:**
```typescript
// Create phases for sprints
async function createSprintPhases(numSprints: number) {
  for (let i = 1; i <= numSprints; i++) {
    await codebolt.roadmap.createPhase({
      name: `Sprint ${i}`,
      description: `2-week sprint ${i}`,
      order: i
    });
  }
}
```

### Notes

- Phase ID is auto-generated
- If order is not specified, phase is appended to end
- Order determines display sequence
- Features array is initialized empty
- Timestamps are automatically set
- Phase names should be unique within a project
- Description supports markdown formatting
- Order can be updated later with updatePhase
- Phases can be reordered after creation