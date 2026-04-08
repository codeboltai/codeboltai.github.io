---
name: get
cbbaseinfo:
  description: Retrieves a requirement plan document by its file path, including all sections and metadata.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: Path to the plan file
  returns:
    signatureTypeName: "Promise<RequirementPlanGetResponse>"
    description: A promise that resolves to the plan document
data:
  name: get
  category: requirementPlan
  link: get.md
---
# get

```typescript
codebolt.requirementPlan.get(filePath: string): Promise<RequirementPlanGetResponse>
```

Retrieves a requirement plan document by its file path, including all sections and metadata.
### Parameters

- **`filePath`** (string): Path to the plan file

### Returns

- **`Promise<[RequirementPlanGetResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RequirementPlanGetResponse)>`**: A promise that resolves to the plan document

### Parameter Details

- **`filePath`** (string, required): Path to the requirement plan file

### Response Structure

```typescript
interface RequirementPlanGetResponse {
  type: 'requirementPlanGetResponse';
  success: boolean;
  data?: RequirementPlanDocument;
  filePath?: string;
  error?: string;
  requestId?: string;
}

interface RequirementPlanDocument {
  version: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  sections: RequirementPlanSection[];
}
```

### Examples

#### 1. Basic Retrieval
```typescript
import codebolt from '@codebolt/codeboltjs';

// Get a requirement plan
const result = await codebolt.requirementPlan.get('plans/project-requirements.plan');

if (result.success && result.data) {
  const plan = result.data;
  console.log('Title:', plan.title);
  console.log('Version:', plan.version);
  console.log('Sections:', plan.sections.length);
}
```

#### 2. Display Plan Details
```typescript
// Retrieve and display plan information
const result = await codebolt.requirementPlan.get('plans/api-requirements.plan');

if (result.success && result.data) {
  const plan = result.data;

  console.log('=== Requirement Plan ===');
  console.log('Title:', plan.title);
  console.log('Version:', plan.version);

  if (plan.description) {
    console.log('Description:', plan.description);
  }

  console.log('Created:', new Date(plan.createdAt).toLocaleString());
  console.log('Updated:', new Date(plan.updatedAt).toLocaleString());
  console.log('\nSections:');

  plan.sections.forEach((section, index) => {
    console.log(`${index + 1}. ${section.title || 'Untitled'} (${section.type})`);
  });
}
```

#### 3. Iterate Through Sections
```typescript
// Get plan and process each section
const result = await codebolt.requirementPlan.get('plans/project.plan');

if (result.success && result.data) {
  const plan = result.data;

  for (const section of plan.sections) {
    console.log(`\n## ${section.title || 'Untitled'}`);
    console.log(`Type: ${section.type}`);

    switch (section.type) {
      case 'markdown':
        if (section.content) {
          console.log('Content:', section.content.substring(0, 100) + '...');
        }
        break;

      case 'specs-link':
      case 'actionplan-link':
      case 'uiflow-link':
        if (section.linkedFile) {
          console.log('Linked File:', section.linkedFile);
        }
        break;

      case 'code-block':
        if (section.content) {
          console.log('Code:', section.content.substring(0, 50) + '...');
        }
        break;
    }
  }
}
```

#### 4. Find Specific Section
```typescript
// Get plan and find a specific section
const result = await codebolt.requirementPlan.get('plans/project.plan');

if (result.success && result.data) {
  const overviewSection = result.data.sections.find(
    section => section.title === 'Overview'
  );

  if (overviewSection) {
    console.log('Found Overview section:');
    console.log(overviewSection.content);
  } else {
    console.log('Overview section not found');
  }
}
```

#### 5. Get and Validate Plan
```typescript
// Get plan and validate its structure
async function getAndValidatePlan(filePath: string) {
  const result = await codebolt.requirementPlan.get(filePath);

  if (!result.success) {
    throw new Error(result.error || 'Failed to get plan');
  }

  const plan = result.data!;

  // Validate required fields
  if (!plan.title) {
    console.warn('Plan missing title');
  }

  if (plan.sections.length === 0) {
    console.warn('Plan has no sections');
  }

  // Validate sections
  for (const section of plan.sections) {
    if (!section.id) {
      console.warn(`Section missing ID: ${section.title}`);
    }

    if (section.type === 'specs-link' && !section.linkedFile) {
      console.warn(`Specs link missing file: ${section.title}`);
    }
  }

  return plan;
}
```

#### 6. Get and Transform Plan
```typescript
// Get plan and transform for display
const result = await codebolt.requirementPlan.get('plans/project.plan');

if (result.success && result.data) {
  const displayData = {
    title: result.data.title,
    sectionCount: result.data.sections.length,
    sections: result.data.sections.map(section => ({
      title: section.title || 'Untitled',
      type: section.type,
      hasContent: !!section.content,
      hasLink: !!section.linkedFile
    }))
  };

  console.log(JSON.stringify(displayData, null, 2));
}
```

#### 7. Get and Export Plan
```typescript
// Get plan and export as JSON
async function exportPlan(filePath: string) {
  const result = await codebolt.requirementPlan.get(filePath);

  if (result.success && result.data) {
    const exported = {
      meta: {
        title: result.data.title,
        version: result.data.version,
        exportedAt: new Date().toISOString()
      },
      sections: result.data.sections.map(section => ({
        id: section.id,
        title: section.title,
        type: section.type,
        content: section.content,
        linkedFile: section.linkedFile,
        order: section.order
      }))
    };

    return JSON.stringify(exported, null, 2);
  }

  throw new Error('Failed to export plan');
}
```

#### 8. Get and Compare Versions
```typescript
// Compare two plans
async function comparePlans(filePath1: string, filePath2: string) {
  const [plan1, plan2] = await Promise.all([
    codebolt.requirementPlan.get(filePath1),
    codebolt.requirementPlan.get(filePath2)
  ]);

  if (plan1.success && plan1.data && plan2.success && plan2.data) {
    console.log('Comparing plans:');
    console.log(`Plan 1 sections: ${plan1.data.sections.length}`);
    console.log(`Plan 2 sections: ${plan2.data.sections.length}`);

    const diff = {
      onlyInPlan1: plan1.data.sections.filter(s1 =>
        !plan2.data.sections.some(s2 => s2.id === s1.id)
      ),
      onlyInPlan2: plan2.data.sections.filter(s2 =>
        !plan1.data.sections.some(s1 => s1.id === s2.id)
      )
    };

    console.log('Only in Plan 1:', diff.onlyInPlan1.length);
    console.log('Only in Plan 2:', diff.onlyInPlan2.length);
  }
}
```

#### 9. Error Handling
```typescript
// Handle retrieval errors
const result = await codebolt.requirementPlan.get('nonexistent.plan');

if (!result.success) {
  console.error('Failed to get plan');

  if (result.error) {
    if (result.error.includes('file not found')) {
      console.error('Plan file does not exist');
    } else if (result.error.includes('invalid format')) {
      console.error('Plan file is corrupted or invalid');
    } else if (result.error.includes('access denied')) {
      console.error('No permission to read file');
    } else {
      console.error('Error:', result.error);
    }
  }
}
```

#### 10. Get with Retry
```typescript
// Get plan with retry logic
async function getPlanWithRetry(filePath: string, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const result = await codebolt.requirementPlan.get(filePath);

    if (result.success) {
      return result.data;
    }

    // Wait before retrying
    if (i < maxRetries - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }

  throw new Error('Failed to get plan after retries');
}
```

### Common Use Cases

**Display Plan Table of Contents:**
```typescript
// Generate table of contents
async function generateTOC(filePath: string) {
  const result = await codebolt.requirementPlan.get(filePath);

  if (result.success && result.data) {
    console.log(`# Table of Contents: ${result.data.title}\n`);

    result.data.sections.forEach((section, index) => {
      const indent = '  '.repeat(Math.floor(index / 10));
      console.log(`${indent}${index + 1}. ${section.title || 'Untitled'}`);
      console.log(`${indent}   [${section.type}]\n`);
    });
  }
}
```

**Validate Linked Files:**
```typescript
// Check if linked files exist
async function validateLinks(filePath: string) {
  const result = await codebolt.requirementPlan.get(filePath);

  if (result.success && result.data) {
    const linkSections = result.data.sections.filter(s =>
      ['specs-link', 'actionplan-link', 'uiflow-link'].includes(s.type)
    );

    console.log(`Checking ${linkSections.length} linked files...`);

    for (const section of linkSections) {
      if (section.linkedFile) {
        // Check if file exists (implementation depends on your file system access)
        console.log(`Checking: ${section.linkedFile}`);
      }
    }
  }
}
```

**Get Plan Statistics:**
```typescript
// Calculate plan statistics
async function getPlanStats(filePath: string) {
  const result = await codebolt.requirementPlan.get(filePath);

  if (result.success && result.data) {
    const stats = {
      totalSections: result.data.sections.length,
      byType: {} as Record<string, number>,
      withContent: 0,
      withLinks: 0
    };

    for (const section of result.data.sections) {
      stats.byType[section.type] = (stats.byType[section.type] || 0) + 1;
      if (section.content) stats.withContent++;
      if (section.linkedFile) stats.withLinks++;
    }

    return stats;
  }
}
```

### Notes

- Returns complete document with all sections
- Sections are ordered by their `order` property
- All section content is included in the response
- Use `list()` to get available plans without loading full content
- File path is case-sensitive on some systems
- Returns error if file doesn't exist or is invalid
- Large documents may take longer to load
- Consider caching results if accessed frequently
- Sections include both content and link types
- Created and updated timestamps are in ISO 8601 format