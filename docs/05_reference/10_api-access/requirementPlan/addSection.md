---
name: addSection
cbbaseinfo:
  description: Adds a new section to a requirement plan document. Sections can contain various content types including markdown, links to other files, and code blocks.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: Path to the plan file
    - name: section
      typeName: "Omit<RequirementPlanSection, 'id' | 'order'>"
      description: "Section data to add (id and order are auto-generated)"
    - name: afterIndex
      typeName: number
      description: "Optional index to insert section after (-1 for beginning)"
  returns:
    signatureTypeName: "Promise<RequirementPlanSectionResponse>"
    description: A promise that resolves to the updated document
data:
  name: addSection
  category: requirementPlan
  link: addSection.md
---
# addSection

```typescript
codebolt.requirementPlan.addSection(filePath: string, section: Omit<RequirementPlanSection, 'id' | 'order'>, afterIndex: number): Promise<RequirementPlanSectionResponse>
```

Adds a new section to a requirement plan document. Sections can contain various content types including markdown, links to other files, and code blocks.
### Parameters

- **`filePath`** (string): Path to the plan file
- **`section`** (`Omit<RequirementPlanSection, 'id' | 'order'>`): Section data to add (id and order are auto-generated). See [RequirementPlanSection](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RequirementPlanSection)
- **`afterIndex`** (number): Optional index to insert section after (-1 for beginning)

### Returns

- **`Promise<[RequirementPlanSectionResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RequirementPlanSectionResponse)>`**: A promise that resolves to the updated document

### Parameter Details

- **`filePath`** (string, required): Path to the requirement plan file
- **`section`** (object, required): Section data without `id` and `order` fields (auto-generated)
  - **`type`** (SectionType): Section type - 'markdown' | 'specs-link' | 'actionplan-link' | 'uiflow-link' | 'code-block'
  - **`title`** (string, optional): Section title
  - **`content`** (string, optional): Section content (for markdown and code-block types)
  - **`linkedFile`** (string, optional): Linked file path (for link types)
- **`afterIndex`** (number, optional): Index to insert section after. Default is -1 (beginning).

### Section Types

#### Markdown Section
```typescript
{
  type: 'markdown',
  title: 'Section Title',
  content: '# Markdown content here...'
}
```

#### Specs Link
```typescript
{
  type: 'specs-link',
  title: 'Specifications',
  linkedFile: 'specs/api-specs.md'
}
```

#### Action Plan Link
```typescript
{
  type: 'actionplan-link',
  title: 'Implementation Plan',
  linkedFile: 'plans/implementation.plan'
}
```

#### UI Flow Link
```typescript
{
  type: 'uiflow-link',
  title: 'User Flow',
  linkedFile: 'flows/checkout.flow.md'
}
```

#### Code Block
```typescript
{
  type: 'code-block',
  title: 'Example Code',
  content: '```typescript\nconst code = "here";\n```'
}
```

### Response Structure

```typescript
interface RequirementPlanSectionResponse {
  type: string;  // Response type based on operation
  success: boolean;
  document?: RequirementPlanDocument;  // Updated document with new section
  error?: string;
  requestId?: string;
}
```

### Examples

#### 1. Add Markdown Section
```typescript
import codebolt from '@codebolt/codeboltjs';

// Add a markdown overview section
const result = await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'markdown',
    title: 'Project Overview',
    content: `
# Project Overview

This document outlines the requirements for the new project.

## Objectives
- Improve user experience
- Increase performance
- Add new features

## Scope
This project covers the frontend application and API integration.
    `.trim()
  }
);

if (result.success && result.document) {
  console.log('Section added successfully');
  console.log('Total sections:', result.document.sections.length);
}
```

#### 2. Add Linked Specification
```typescript
// Link to an external specification file
const result = await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'specs-link',
    title: 'API Specifications',
    linkedFile: 'specs/api-v2-specs.md'
  }
);

if (result.success) {
  console.log('Specification link added');
}
```

#### 3. Add Code Example Section
```typescript
// Add a code example section
const result = await codebolt.requirementPlan.addSection(
  'plans/api-requirements.plan',
  {
    type: 'code-block',
    title: 'Authentication Example',
    content: `
\`\`\`typescript
import { authenticate } from './auth';

// Authenticate user
const token = await authenticate({
  username: 'user@example.com',
  password: 'securepassword'
});

console.log('Token:', token);
\`\`\`
    `.trim()
  }
);
```

#### 4. Add Section at Specific Position
```typescript
// Add section at the beginning
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'markdown',
    title: 'Introduction',
    content: 'Welcome to the requirements...'
  },
  -1  // Insert at beginning
);

// Add section after index 1 (second position)
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'markdown',
    title: 'Section 2',
    content: 'Content here...'
  },
  1  // Insert after section at index 1
);
```

#### 5. Build Complete Document
```typescript
// Create a comprehensive requirements document
const planPath = 'plans/ecommerce-requirements.plan';

// 1. Overview
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'markdown',
    title: 'Overview',
    content: '# E-Commerce Platform Requirements\n\n...'
  }
);

// 2. Functional Requirements
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'markdown',
    title: 'Functional Requirements',
    content: '## User Management\n\n### FR-001: User Registration...'
  }
);

// 3. Technical Specifications
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'specs-link',
    title: 'Technical Specifications',
    linkedFile: 'specs/technical-specs.md'
  }
);

// 4. API Documentation
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'specs-link',
    title: 'API Documentation',
    linkedFile: 'docs/api-reference.md'
  }
);

// 5. Implementation Plan
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'actionplan-link',
    title: 'Phase 1 Implementation',
    linkedFile: 'plans/phase1.plan'
  }
);

// 6. User Flows
await codebolt.requirementPlan.addSection(
  planPath,
  {
    type: 'uiflow-link',
    title: 'Checkout Flow',
    linkedFile: 'flows/checkout.flow.md'
  }
);

console.log('Document structure created');
```

#### 6. Add Multiple Related Sections
```typescript
// Add sections for different requirement categories
const categories = [
  {
    type: 'markdown',
    title: 'Functional Requirements',
    content: '## FR-001: User can register\n## FR-002: User can login...'
  },
  {
    type: 'markdown',
    title: 'Non-Functional Requirements',
    content: '## NFR-001: Performance\n## NFR-002: Security...'
  },
  {
    type: 'markdown',
    title: 'Constraints',
    content: '## Technical Constraints\n## Business Constraints...'
  }
];

for (const category of categories) {
  await codebolt.requirementPlan.addSection(
    'plans/project-requirements.plan',
    category
  );
  console.log(`Added: ${category.title}`);
}
```

#### 7. Add Section with UI Flow
```typescript
// Link to UI flow diagram
await codebolt.requirementPlan.addSection(
  'plans/mobile-app.plan',
  {
    type: 'uiflow-link',
    title: 'Authentication Flow',
    linkedFile: 'flows/auth-flow.md',
    // Note: linkedFile is used, not content
  }
);
```

#### 8. Error Handling
```typescript
// Handle errors when adding sections
const result = await codebolt.requirementPlan.addSection(
  'nonexistent.plan',
  {
    type: 'markdown',
    title: 'Test',
    content: 'Content'
  }
);

if (!result.success) {
  console.error('Failed to add section');

  if (result.error) {
    if (result.error.includes('file not found')) {
      console.error('Plan file does not exist');
    } else if (result.error.includes('invalid section type')) {
      console.error('Invalid section type specified');
    } else {
      console.error('Error:', result.error);
    }
  }
}
```

#### 9. Add Section and Verify
```typescript
// Add section and verify it was added correctly
async function addAndVerifySection(
  filePath: string,
  section: any,
  afterIndex?: number
) {
  // Get current section count
  const before = await codebolt.requirementPlan.get(filePath);
  const beforeCount = before.success ? before.data?.sections.length || 0 : 0;

  // Add section
  const result = await codebolt.requirementPlan.addSection(
    filePath,
    section,
    afterIndex
  );

  if (result.success && result.document) {
    const afterCount = result.document.sections.length;

    if (afterCount === beforeCount + 1) {
      console.log('✓ Section added successfully');
      return result.document;
    } else {
      console.error('✗ Section count mismatch');
    }
  }

  throw new Error('Failed to add section');
}
```

#### 10. Dynamic Section Content
```typescript
// Generate section content dynamically
async function addRequirementsList(
  filePath: string,
  requirements: string[]
) {
  const content = requirements.map((req, index) => {
    const num = String(index + 1).padStart(3, '0');
    return `### REQ-${num}: ${req}`;
  }).join('\n\n');

  await codebolt.requirementPlan.addSection(
    filePath,
    {
      type: 'markdown',
      title: 'Requirements List',
      content: `# Requirements\n\n${content}`
    }
  );
}

// Usage
await addRequirementsList(
  'plans/project.plan',
  [
    'User shall be able to login',
    'User shall be able to reset password',
    'User shall be able to update profile',
    'User shall be able to logout'
  ]
);
```

### Common Use Cases

**Document Template:**
```typescript
// Create standard document structure
async function createStandardDocument(filePath: string) {
  const sections = [
    { type: 'markdown', title: 'Overview', content: '# Overview\n\n...' },
    { type: 'markdown', title: 'Requirements', content: '## Requirements\n\n...' },
    { type: 'specs-link', title: 'Technical Specs', linkedFile: 'specs/tech.md' },
    { type: 'actionplan-link', title: 'Implementation', linkedFile: 'plan.plan' }
  ];

  for (const section of sections) {
    await codebolt.requirementPlan.addSection(filePath, section);
  }
}
```

**Add Code Examples:**
```typescript
// Add multiple code examples
const examples = [
  { title: 'Authentication', language: 'typescript', code: '...' },
  { title: 'Database', language: 'sql', code: '...' },
  { title: 'API', language: 'javascript', code: '...' }
];

for (const example of examples) {
  await codebolt.requirementPlan.addSection(
    'plan.plan',
    {
      type: 'code-block',
      title: example.title,
      content: `\`\`\`${example.language}\n${example.code}\n\`\`\``
    }
  );
}
```

### Notes

- Section ID is auto-generated (UUID)
- Section order is auto-assigned based on insertion position
- Default insertion position is the beginning (afterIndex: -1)
- Use `afterIndex` to insert at specific positions
- `linkedFile` is required for link types (specs-link, actionplan-link, uiflow-link)
- `content` is required for content types (markdown, code-block)
- Sections maintain their order when retrieved
- Can add sections to documents with existing sections
- Returns the updated document with all sections
- Section titles are optional but recommended
- Linked files must exist in the project