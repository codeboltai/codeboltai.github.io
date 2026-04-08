---
name: create
cbbaseinfo:
  description: Creates a new requirement plan file with the specified filename. The file is initialized with an empty document structure.
cbparameters:
  parameters:
    - name: fileName
      typeName: string
      description: "Name for the new plan file (without .plan extension)"
  returns:
    signatureTypeName: "Promise<RequirementPlanCreateResponse>"
    description: A promise that resolves to creation result with file path
data:
  name: create
  category: requirementPlan
  link: create.md
---
# create

```typescript
codebolt.requirementPlan.create(fileName: string): Promise<RequirementPlanCreateResponse>
```

Creates a new requirement plan file with the specified filename. The file is initialized with an empty document structure.
### Parameters

- **`fileName`** (string): Name for the new plan file (without .plan extension)

### Returns

- **`Promise<[RequirementPlanCreateResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RequirementPlanCreateResponse)>`**: A promise that resolves to creation result with file path

### Parameter Details

- **`fileName`** (string, required): Name for the new plan file. The `.plan` extension is added automatically. Should not include path or extension.

### Response Structure

```typescript
interface RequirementPlanCreateResponse {
  type: 'requirementPlanCreateResponse';
  success: boolean;
  filePath?: string;          // Full path to created file
  error?: string;             // Error message if creation failed
  requestId?: string;         // Request identifier for tracking
}
```

### Examples

#### 1. Create Basic Plan
```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a new requirement plan
const result = await codebolt.requirementPlan.create('project-requirements');

if (result.success) {
  console.log('Plan created at:', result.filePath);
  // Output: Plan created at: /path/to/project-requirements.plan
} else {
  console.error('Failed to create plan:', result.error);
}
```

#### 2. Create Plan with Descriptive Name
```typescript
// Create plan with descriptive filename
const result = await codebolt.requirementPlan.create('ecommerce-platform-requirements-v1');

if (result.success) {
  console.log('Requirements document created');
  console.log('File:', result.filePath);

  // Now add sections to the plan
  await codebolt.requirementPlan.addSection(
    result.filePath,
    {
      type: 'markdown',
      title: 'Overview',
      content: '# E-Commerce Platform Requirements\n\n...'
    }
  );
}
```

#### 3. Create Multiple Plans
```typescript
// Create separate plans for different components
const plans = [
  'frontend-requirements',
  'backend-requirements',
  'api-requirements',
  'database-requirements'
];

for (const planName of plans) {
  const result = await codebolt.requirementPlan.create(planName);

  if (result.success) {
    console.log(`✓ Created: ${planName}`);
  } else {
    console.error(`✗ Failed: ${planName} - ${result.error}`);
  }
}
```

#### 4. Create and Initialize Plan
```typescript
// Create plan and immediately add initial sections
async function createInitializedPlan(fileName: string, title: string, overview: string) {
  // Create the plan
  const createResult = await codebolt.requirementPlan.create(fileName);

  if (!createResult.success) {
    throw new Error(`Failed to create plan: ${createResult.error}`);
  }

  const planPath = createResult.filePath!;

  // Add overview section
  await codebolt.requirementPlan.addSection(
    planPath,
    {
      type: 'markdown',
      title: 'Overview',
      content: `# ${title}\n\n${overview}`
    }
  );

  console.log(`Plan created and initialized: ${planPath}`);
  return planPath;
}

// Usage
const planPath = await createInitializedPlan(
  'user-auth-requirements',
  'User Authentication Requirements',
  'This document outlines the requirements for user authentication and authorization.'
);
```

#### 5. Create Plan for Project Phase
```typescript
// Create requirement plans for each project phase
const phases = [
  { name: 'phase1-discovery', title: 'Phase 1: Discovery' },
  { name: 'phase2-design', title: 'Phase 2: Design' },
  { name: 'phase3-development', title: 'Phase 3: Development' },
  { name: 'phase4-testing', title: 'Phase 4: Testing' }
];

for (const phase of phases) {
  const result = await codebolt.requirementPlan.create(phase.name);

  if (result.success) {
    // Add phase-specific sections
    await codebolt.requirementPlan.addSection(
      result.filePath!,
      {
        type: 'markdown',
        title: 'Phase Overview',
        content: `# ${phase.title}\n\nRequirements for this phase...`
      }
    );

    console.log(`Created plan for ${phase.title}`);
  }
}
```

#### 6. Error Handling
```typescript
// Handle creation errors
const result = await codebolt.requirementPlan.create('existing-plan');

if (!result.success) {
  console.error('Creation failed');

  if (result.error) {
    if (result.error.includes('already exists')) {
      console.error('A plan with this name already exists');
      // Handle by loading existing or using a different name
    } else if (result.error.includes('invalid filename')) {
      console.error('Invalid filename format');
    } else if (result.error.includes('permission denied')) {
      console.error('No permission to create file');
    } else {
      console.error('Error:', result.error);
    }
  }
}
```

#### 7. Create with Validation
```typescript
// Validate filename before creating
async function createValidPlan(fileName: string) {
  // Validate filename
  const validName = fileName
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')  // Replace invalid chars with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .replace(/^-|-$/g, '');        // Remove leading/trailing hyphens

  if (validName.length === 0) {
    throw new Error('Invalid filename');
  }

  console.log(`Creating plan: ${validName}`);

  const result = await codebolt.requirementPlan.create(validName);

  if (result.success) {
    return result.filePath;
  }

  throw new Error(result.error);
}

// Usage
try {
  const path = await createValidPlan('My Project Requirements!');
  console.log('Created:', path);
} catch (error) {
  console.error('Error:', error.message);
}
```

#### 8. Create Plan with Metadata
```typescript
// Create plan and store metadata
async function createTrackedPlan(fileName: string, metadata: any) {
  const result = await codebolt.requirementPlan.create(fileName);

  if (result.success) {
    // Add metadata section
    await codebolt.requirementPlan.addSection(
      result.filePath!,
      {
        type: 'markdown',
        title: 'Metadata',
        content: `
## Document Information

- Created: ${new Date().toISOString()}
- Author: ${metadata.author}
- Version: ${metadata.version}
- Status: ${metadata.status}
- Tags: ${metadata.tags?.join(', ') || 'none'}
        `.trim()
      }
    );

    return result.filePath;
  }

  throw new Error(result.error);
}

// Usage
const planPath = await createTrackedPlan('api-requirements', {
  author: 'John Doe',
  version: '1.0.0',
  status: 'draft',
  tags: ['api', 'backend', 'priority']
});
```

### Common Use Cases

**Project Initialization:**
```typescript
// Create requirement plans when initializing a project
async function initializeProjectRequirements(projectName: string) {
  const plans = [
    `${projectName}-overview`,
    `${projectName}-functional`,
    `${projectName}-technical`,
    `${projectName}-ui-ux`
  ];

  const createdPaths: string[] = [];

  for (const planName of plans) {
    const result = await codebolt.requirementPlan.create(planName);
    if (result.success && result.filePath) {
      createdPaths.push(result.filePath);
    }
  }

  return createdPaths;
}
```

**Template Creation:**
```typescript
// Create a plan from template
async function createFromTemplate(templateName: string, targetName: string) {
  // Create new plan
  const result = await codebolt.requirementPlan.create(targetName);

  if (result.success && result.filePath) {
    // Copy template content
    const template = await codebolt.requirementPlan.get(
      `templates/${templateName}.plan`
    );

    if (template.success && template.data) {
      await codebolt.requirementPlan.update(
        result.filePath,
        template.data
      );
    }

    return result.filePath;
  }

  throw new Error('Failed to create from template');
}
```

### Notes

- The `.plan` extension is added automatically
- Filename should be simple (no special characters except hyphens)
- File is created with empty structure (no sections initially)
- Returns full path to the created file
- Use the returned path for subsequent operations
- Plan files are typically stored in project root or plans directory
- Duplicate filenames will result in an error
- Initial document has empty sections array
- Version field defaults to "1.0.0"
- Created and updated timestamps are set automatically