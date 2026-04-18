---
title: RequirementPlan MCP
sidebar_label: codebolt.requirementPlan
sidebar_position: 80
---

# codebolt.requirementPlan

RequirementPlan management tools for creating and managing requirement plan documents. RequirementPlans are structured documents that organize project requirements into sections, supporting various content types including markdown, linked specifications, action plans, UI flows, and code blocks.

## Available Tools

- `requirement_plan_create` - Creates a new requirement plan file
- `requirement_plan_get` - Retrieves a requirement plan by file path
- `requirement_plan_update` - Updates a requirement plan with new content
- `requirement_plan_list` - Lists all requirement plans in the project
- `requirement_plan_add_section` - Adds a section to a requirement plan
- `requirement_plan_update_section` - Updates a section in a requirement plan
- `requirement_plan_remove_section` - Removes a section from a requirement plan
- `requirement_plan_reorder_sections` - Reorders sections in a requirement plan
- `requirement_plan_review` - Requests a review for a requirement plan

## Tool Parameters

### `requirement_plan_create`

Creates a new requirement plan file with the specified name.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| fileName | string | Yes | Name for the new plan file (without .plan extension) |

### `requirement_plan_get`

Retrieves a requirement plan by its file path, returning the complete document structure including all sections.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file to retrieve |

### `requirement_plan_update`

Updates an existing requirement plan with new content. The content can be provided as a string or a full RequirementPlanDocument object.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file to update |
| content | string \| object | Yes | New content (string or RequirementPlanDocument object) |

### `requirement_plan_list`

Lists all requirement plans currently in the project, returning an array of plan metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | - | - | No parameters required |

### `requirement_plan_add_section`

Adds a new section to an existing requirement plan. Sections can be inserted at specific positions or appended to the end.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file |
| section | object | Yes | Section data to add |
| section.type | string | Yes | Section type: 'markdown', 'specs-link', 'actionplan-link', 'uiflow-link', or 'code-block' |
| section.title | string | No | Section title |
| section.content | string | No | Section content |
| section.linkedFile | string | No | Linked file path (for link types: specs-link, actionplan-link, uiflow-link) |
| afterIndex | number | No | Optional index to insert after (-1 for beginning, or omit to append) |

### `requirement_plan_update_section`

Updates an existing section in a requirement plan with new properties.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file |
| sectionId | string | Yes | ID of the section to update |
| updates | object | Yes | Partial section data to update |
| updates.type | string | No | New section type |
| updates.title | string | No | New section title |
| updates.content | string | No | New section content |
| updates.linkedFile | string | No | New linked file path |

### `requirement_plan_remove_section`

Removes a section from a requirement plan by its ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file |
| sectionId | string | Yes | ID of the section to remove |

### `requirement_plan_reorder_sections`

Reorders all sections in a requirement plan based on the provided array of section IDs.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file |
| sectionIds | string[] | Yes | Array of section IDs in the desired new order |

### `requirement_plan_review`

Requests a review for a requirement plan and retrieves its current review status.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| filePath | string | Yes | Path to the plan file to review |

## Sample Usage

```javascript
// Create a new requirement plan
const createResult = await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_create",
  {
    fileName: "ecommerce-requirements"
  }
);

// List all requirement plans
const allPlans = await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_list",
  {}
);

// Get a specific requirement plan
const plan = await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_get",
  {
    filePath: "/path/to/ecommerce-requirements.plan"
  }
);

// Add various sections to a requirement plan
await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_add_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    section: {
      type: "markdown",
      title: "Overview",
      content: "This document outlines the requirements for the e-commerce platform."
    }
  }
);

await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_add_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    section: {
      type: "specs-link",
      title: "Technical Specifications",
      linkedFile: "/specs/technical-specs.md"
    }
  }
);

await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_add_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    section: {
      type: "actionplan-link",
      title: "Implementation Plan",
      linkedFile: "/plans/implementation.plan"
    }
  }
);

await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_add_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    section: {
      type: "uiflow-link",
      title: "User Flow Diagram",
      linkedFile: "/flows/checkout-flow.json"
    }
  }
);

await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_add_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    section: {
      type: "code-block",
      title: "Example API Response",
      content: '{\n  "status": "success",\n  "data": { "orderId": "12345" }\n}'
    }
  }
);

// Update a section
await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_update_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    sectionId: "section-id-123",
    updates: {
      title: "Updated Overview",
      content: "Updated content for the overview section."
    }
  }
);

// Reorder sections
await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_reorder_sections",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    sectionIds: ["section-id-003", "section-id-001", "section-id-002", "section-id-004", "section-id-005"]
  }
);

// Remove a section
await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_remove_section",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    sectionId: "section-id-005"
  }
);

// Update entire plan with new content
await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_update",
  {
    filePath: "/path/to/ecommerce-requirements.plan",
    content: {
      title: "E-commerce Platform Requirements",
      sections: [
        {
          id: "section-001",
          type: "markdown",
          title: "Introduction",
          content: "Comprehensive requirements document..."
        }
      ]
    }
  }
);

// Request review for a requirement plan
const reviewStatus = await codebolt.tools.executeTool(
  "codebolt.requirementPlan",
  "requirement_plan_review",
  {
    filePath: "/path/to/ecommerce-requirements.plan"
  }
);
```

:::info
**Section Types:**

RequirementPlan supports the following section types:

- **markdown**: Standard markdown content for text, headings, lists, and formatted documentation. Use the `content` field to provide markdown text.

- **specs-link**: Links to a technical specification document. Use the `linkedFile` field to provide the file path to the specification file (e.g., `/specs/api-specs.md`).

- **actionplan-link**: Links to an action plan document. Use the `linkedFile` field to provide the file path to the action plan file (e.g., `/plans/implementation.plan`).

- **uiflow-link**: Links to a UI flow diagram or user journey map. Use the `linkedFile` field to provide the file path to the UI flow file (e.g., `/flows/checkout.json`).

- **code-block**: Displays formatted code snippets or examples. Use the `content` field to provide the code text. The code will be rendered with syntax highlighting based on the file extension.
:::
