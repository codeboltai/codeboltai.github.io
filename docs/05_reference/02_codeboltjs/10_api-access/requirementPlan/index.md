---
sidebar_position: 1
title: Requirement Plan Module
---

# Requirement Plan Module

The Requirement Plan module provides comprehensive functionality for managing requirement plan documents. These documents organize project requirements into structured sections with support for various content types including markdown, specifications, action plans, UI flows, and code blocks.

## Overview

The requirement plan module supports:
- **Document Management** - Create, read, update, and list requirement plan files
- **Section Types** - markdown, specs-link, actionplan-link, uiflow-link, code-block
- **Section Organization** - Add, update, remove, and reorder sections
- **Structured Content** - Versioned documents with titles, descriptions, and ordered sections

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Create a new requirement plan
const plan = await codebolt.requirementPlan.create('project-requirements');

// Add sections to the plan
await codebolt.requirementPlan.addSection(
  plan.filePath,
  {
    type: 'markdown',
    title: 'Overview',
    content: '# Project Overview\n\nThis document outlines the key requirements...'
  }
);

// Add a linked specification
await codebolt.requirementPlan.addSection(
  plan.filePath,
  {
    type: 'specs-link',
    title: 'API Specifications',
    linkedFile: 'specs/api-specs.md'
  }
);

// Get the complete plan
const completePlan = await codebolt.requirementPlan.get(plan.filePath);
console.log('Plan:', completePlan.data.title);
console.log('Sections:', completePlan.data.sections.length);
```

## Available Methods

### Document Operations
| Method | Description |
|--------|-------------|
| `create(fileName)` | Create a new requirement plan file |
| `get(filePath)` | Get a requirement plan by file path |
| `update(filePath, content)` | Update a requirement plan |
| `list()` | List all requirement plans in the project |

### Section Operations
| Method | Description |
|--------|-------------|
| `addSection(filePath, section, afterIndex)` | Add a section to a plan |
| `updateSection(filePath, sectionId, updates)` | Update a section in a plan |
| `removeSection(filePath, sectionId)` | Remove a section from a plan |
| `reorderSections(filePath, sectionIds)` | Reorder sections in a plan |

### Review Operations
| Method | Description |
|--------|-------------|
| `review(filePath)` | Request a review for a requirement plan |

## Document Structure

A requirement plan document contains:

```typescript
interface RequirementPlanDocument {
  version: string;              // Document version
  title: string;                // Plan title
  description?: string;         // Optional description
  createdAt: string;            // Creation timestamp
  updatedAt: string;            // Last update timestamp
  sections: RequirementPlanSection[];  // Ordered sections
}
```

## Section Types

### Markdown Section
```typescript
await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'markdown',
    title: 'Introduction',
    content: '# Introduction\n\nThis is the introduction...'
  }
);
```

### Specification Link
```typescript
await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'specs-link',
    title: 'API Specifications',
    linkedFile: 'specs/api-specs.md'
  }
);
```

### Action Plan Link
```typescript
await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'actionplan-link',
    title: 'Implementation Plan',
    linkedFile: 'plans/implementation.plan'
  }
);
```

### UI Flow Link
```typescript
await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'uiflow-link',
    title: 'User Authentication Flow',
    linkedFile: 'flows/auth-flow.md'
  }
);
```

### Code Block Section
```typescript
await codebolt.requirementPlan.addSection(
  'plans/project-requirements.plan',
  {
    type: 'code-block',
    title: 'Example Implementation',
    content: '```typescript\nconst example = "code";\n```'
  }
);
```

## Common Use Cases

### 1. Create Comprehensive Requirements Document
```typescript
// Create a new plan
const plan = await codebolt.requirementPlan.create('ecommerce-requirements');

// Add overview section
await codebolt.requirementPlan.addSection(
  plan.filePath,
  {
    type: 'markdown',
    title: 'Project Overview',
    content: `
# E-Commerce Platform

Build a modern e-commerce platform with the following features:
- User authentication
- Product catalog
- Shopping cart
- Payment processing
- Order management
    `.trim()
  }
);

// Add functional requirements
await codebolt.requirementPlan.addSection(
  plan.filePath,
  {
    type: 'markdown',
    title: 'Functional Requirements',
    content: '## FR-001: User Registration\nUsers must be able to register...'
  }
);

// Link to detailed specs
await codebolt.requirementPlan.addSection(
  plan.filePath,
  {
    type: 'specs-link',
    title: 'Technical Specifications',
    linkedFile: 'specs/technical-specs.md'
  }
);
```

### 2. Organize by Section Types
```typescript
const planPath = 'plans/mobile-app.plan';

// Start with markdown overview
await codebolt.requirementPlan.addSection(
  planPath,
  { type: 'markdown', title: 'Overview', content: '...' },
  -1  // Insert at beginning
);

// Add code examples
await codebolt.requirementPlan.addSection(
  planPath,
  { type: 'code-block', title: 'Code Example', content: '...' }
);

// Link to external documents
await codebolt.requirementPlan.addSection(
  planPath,
  { type: 'specs-link', title: 'API Docs', linkedFile: 'docs/api.md' }
);

// Link to action plans
await codebolt.requirementPlan.addSection(
  planPath,
  { type: 'actionplan-link', title: 'Sprint Plan', linkedFile: 'sprint1.plan' }
);
```

### 3. Update Section Content
```typescript
// Update a section's content
await codebolt.requirementPlan.updateSection(
  'plans/project-requirements.plan',
  'section-123',
  {
    content: '# Updated Content\n\nThis is the new content...'
  }
);

// Update section title and content
await codebolt.requirementPlan.updateSection(
  'plans/project-requirements.plan',
  'section-123',
  {
    title: 'Revised Requirements',
    content: 'New content here...'
  }
);
```

### 4. Reorder Sections
```typescript
// Reorder sections for better flow
await codebolt.requirementPlan.reorderSections(
  'plans/project-requirements.plan',
  ['section-001', 'section-003', 'section-002', 'section-004']
);
```

### 5. Remove Outdated Sections
```typescript
// Remove a section that's no longer needed
await codebolt.requirementPlan.removeSection(
  'plans/project-requirements.plan',
  'section-old-requirements'
);
```

### 6. List and Browse Plans
```typescript
// Get all requirement plans
const plans = await codebolt.requirementPlan.list();

if (plans.success) {
  console.log(`Found ${plans.plans.length} requirement plans:`);

  for (const plan of plans.plans) {
    console.log(`- ${plan.fileName} (${plan.filePath})`);

    // Load and display plan details
    const planDetails = await codebolt.requirementPlan.get(plan.filePath);
    if (planDetails.success && planDetails.data) {
      console.log(`  Sections: ${planDetails.data.sections.length}`);
      console.log(`  Last Updated: ${planDetails.data.updatedAt}`);
    }
  }
}
```

### 7. Update Entire Document
```typescript
// Update plan with new content
const updatedPlan = {
  version: '2.0',
  title: 'Updated Requirements',
  description: 'Revised project requirements',
  sections: [
    {
      id: 'section-1',
      type: 'markdown',
      title: 'Introduction',
      content: '# Introduction\n\n...',
      order: 0
    }
  ]
};

await codebolt.requirementPlan.update(
  'plans/project-requirements.plan',
  updatedPlan
);
```

### 8. Request Review
```typescript
// Submit plan for review
const reviewResult = await codebolt.requirementPlan.review(
  'plans/project-requirements.plan'
);

if (reviewResult.success) {
  console.log('Plan submitted for review');
  console.log('Status:', reviewResult.status);
}
```

## Section Order Management

Sections are ordered by their `order` property:

```typescript
// Add section at specific position
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'markdown',
    title: 'New Section',
    content: '...'
  },
  2  // Insert after index 2
);

// Reorder all sections
await codebolt.requirementPlan.reorderSections(
  'plan.plan',
  ['sec-1', 'sec-3', 'sec-2']  // New order
);
```

## Content Linking

Link to other project documents:

```typescript
// Link to specification files
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'specs-link',
    title: 'Database Schema',
    linkedFile: 'specs/database-schema.md'
  }
);

// Link to action plans
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'actionplan-link',
    title: 'Phase 1 Implementation',
    linkedFile: 'plans/phase1.plan'
  }
);

// Link to UI flow diagrams
await codebolt.requirementPlan.addSection(
  'plan.plan',
  {
    type: 'uiflow-link',
    title: 'Checkout Flow',
    linkedFile: 'flows/checkout.flow.md'
  }
);
```

## Error Handling

```typescript
try {
  const plan = await codebolt.requirementPlan.create('new-plan');

  if (plan.success) {
    console.log('Plan created:', plan.filePath);
  } else {
    console.error('Failed to create plan:', plan.error);
  }
} catch (error) {
  console.error('Exception:', error);
}
```

## Notes

- Plan files are stored with `.plan` extension
- Each section has a unique ID generated automatically
- Section order determines display sequence
- Linked files must exist in the project
- Version field tracks document iterations
- All timestamps in ISO 8601 format
- Sections can be any of the supported types
- Empty sections are allowed
- Review workflow is separate from CRUD operations
