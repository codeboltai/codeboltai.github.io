---
title: Roadmap MCP
sidebar_label: codebolt.roadmap
sidebar_position: 56
---

# codebolt.roadmap

Roadmap management tools for creating and managing project roadmaps with phases, features, and ideas. Note: This is different from planning.md which covers detailed planning tools.

## Available Tools

- `roadmap_get` - Gets the project roadmap with all phases, features, and ideas
- `roadmap_create_phase` - Creates a new phase in the roadmap
- `roadmap_create_idea` - Creates a new idea in the roadmap backlog

## Tool Parameters

### `roadmap_get`

Gets the project roadmap with all phases, features, and ideas. Returns the complete roadmap data structure including counts and details.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| projectPath | string | No | The project path to retrieve the roadmap from. If not provided, uses the active project |
| explanation | string | No | Additional explanation or context for the roadmap request |

### `roadmap_create_phase`

Creates a new phase in the roadmap. A phase represents a major milestone or stage in the project timeline.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the phase (e.g., 'Phase 1: Foundation', 'MVP Release') |
| description | string | No | Detailed description of the phase explaining its goals and scope |
| startDate | string | No | The start date of the phase (ISO 8601 format or date string) |
| endDate | string | No | The end date of the phase (ISO 8601 format or date string) |
| status | string | No | Current status of the phase (e.g., 'pending', 'in-progress', 'completed') |
| order | number | No | The order/position of the phase in the roadmap sequence (lower numbers appear first) |
| projectPath | string | No | The project path where the phase should be created. If not provided, uses the active project |
| explanation | string | No | Additional explanation or context for the phase creation |

### `roadmap_create_idea`

Creates a new idea in the roadmap backlog. Ideas are pre-roadmap suggestions that can be reviewed and later promoted to features.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| title | string | Yes | The title of the idea (short, descriptive name) |
| description | string | No | Detailed description of the idea explaining the feature or enhancement |
| priority | string | No | Priority level of the idea (e.g., 'high', 'medium', 'low') |
| category | string | No | Category for grouping and organizing ideas (e.g., 'enhancement', 'bug-fix', 'feature') |
| estimatedEffort | string | No | Estimated effort to implement the idea (e.g., '1-2 days', '1 week', '2-3 weeks') |
| projectPath | string | No | The project path where the idea should be created. If not provided, uses the active project |
| explanation | string | No | Additional explanation or context for the idea creation |

## Sample Usage

```javascript
// Get the complete roadmap
const roadmap = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_get",
  {}
);

// Get roadmap with specific project path
const projectRoadmap = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_get",
  {
    projectPath: "/path/to/project",
    explanation: "Need to review current roadmap status"
  }
);

// Create a new phase
const phaseResult = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_create_phase",
  {
    name: "Phase 1: Foundation",
    description: "Core infrastructure setup and basic features implementation",
    startDate: "2024-01-01",
    endDate: "2024-02-28",
    status: "pending",
    order: 1
  }
);

// Create a phase with minimal parameters
const simplePhase = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_create_phase",
  {
    name: "MVP Release"
  }
);

// Create a new idea
const ideaResult = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_create_idea",
  {
    title: "User Authentication",
    description: "Add login, registration, and password reset functionality",
    priority: "high",
    category: "feature",
    estimatedEffort: "1-2 weeks"
  }
);

// Create an idea for future consideration
const backlogIdea = await codebolt.tools.executeTool(
  "codebolt.roadmap",
  "roadmap_create_idea",
  {
    title: "Dark Mode Support",
    description: "Implement dark/light theme toggle for better accessibility",
    priority: "medium",
    category: "enhancement"
  }
);
```

:::info
Roadmap tools provide high-level project timeline management. Phases represent major milestones with start/end dates and status tracking. Ideas serve as a backlog for potential features before they are formally added to roadmap phases. For detailed action planning with tasks and sprints, see the planning.md documentation. Phases are ordered numerically, and each can contain multiple features. Ideas can be reviewed and promoted to features in appropriate phases.
:::
