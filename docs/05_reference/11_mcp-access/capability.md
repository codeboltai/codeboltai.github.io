---
title: Capability MCP
sidebar_label: codebolt.capability
sidebar_position: 35
---

# codebolt.capability

Tools for managing and executing capabilities including skills, powers, and talents.

## Available Tools

- `capability_list` - Lists all available capabilities with optional filtering by type, tags, or author
- `capability_list_skills` - Lists all available skills with optional filtering by tags or author
- `capability_list_powers` - Lists all available powers with optional filtering by tags or author
- `capability_get_detail` - Gets detailed information about a specific capability including configuration and parameters
- `capability_start` - Starts a capability execution (skill, power, or talent) with optional parameters
- `capability_start_skill` - Convenience method to start a skill execution with optional parameters
- `capability_stop` - Stops a running capability execution using its execution ID
- `capability_get_status` - Gets the current status of a capability execution

## Tool Parameters

### `capability_list`

Lists all available capabilities (skills, powers, talents) with optional filtering.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| type | string | No | Optional: Filter by capability type (e.g., 'skill', 'power', 'talent') |
| tags | array | No | Optional: Filter by tags. Only capabilities with matching tags will be returned. |
| author | string | No | Optional: Filter by author name. |

### `capability_list_skills`

Lists all available skills with optional filtering by tags or author.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| tags | array | No | Optional: Filter by tags. Only skills with matching tags will be returned. |
| author | string | No | Optional: Filter by author name. |

### `capability_list_powers`

Lists all available powers with optional filtering by tags or author.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| tags | array | No | Optional: Filter by tags. Only powers with matching tags will be returned. |
| author | string | No | Optional: Filter by author name. |

### `capability_get_detail`

Gets detailed information about a specific capability including its full configuration, parameters, and metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| capabilityId | string | Yes | The name/identifier of the capability to get details for. |
| capabilityType | string | No | Optional: The type of the capability ('skill', 'power', 'talent') to narrow the search. |

### `capability_start`

Starts a capability execution. Returns an execution ID that can be used to track status or stop the capability.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| capabilityId | string | Yes | The name/identifier of the capability to start. |
| capabilityType | string | Yes | The type of the capability: 'skill', 'power', or 'talent'. |
| params | object | No | Optional: Parameters to pass to the capability as a key-value object. |
| timeout | number | No | Optional: Execution timeout in milliseconds. |

### `capability_start_skill`

Starts a skill execution. This is a convenience method specifically for skills.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| skillId | string | Yes | The name/identifier of the skill to start. |
| params | object | No | Optional: Parameters to pass to the skill as a key-value object. |
| timeout | number | No | Optional: Execution timeout in milliseconds. |

### `capability_stop`

Stops a running capability execution.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| capabilityId | string | Yes | The execution ID of the capability to stop (returned from capability_start or capability_start_skill). |

### `capability_get_status`

Gets the current status of a capability execution.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| executionId | string | Yes | The execution ID to get status for (returned from capability_start or capability_start_skill). |

## Sample Usage

### Listing Capabilities

```javascript
// List all capabilities
const allCapabilities = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_list",
  {}
);

// List capabilities filtered by type
const skills = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_list",
  { type: "skill" }
);

// List skills filtered by tags
const taggedSkills = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_list_skills",
  { tags: ["code-generation", "testing"] }
);

// List all powers
const powers = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_list_powers",
  {}
);
```

### Getting Capability Details

```javascript
const details = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_get_detail",
  {
    capabilityId: "code-analyzer",
    capabilityType: "skill"
  }
);
```

### Starting and Managing Capabilities

```javascript
// Start a capability
const execution = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_start",
  {
    capabilityId: "code-analyzer",
    capabilityType: "skill",
    params: {
      filePath: "/src/index.ts",
      analysisType: "deep"
    },
    timeout: 30000
  }
);

// Start a skill (convenience method)
const skillExecution = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_start_skill",
  {
    skillId: "test-runner",
    params: { testSuite: "unit" }
  }
);

// Check execution status
const status = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_get_status",
  { executionId: "exec-12345" }
);

// Stop a running capability
const stopped = await codebolt.tools.executeTool(
  "codebolt.capability",
  "capability_stop",
  { capabilityId: "exec-12345" }
);
```

:::info
Capabilities are organized into three types: `skills` (executable tasks), `powers` (enhanced functionality), and `talents` (agent-specific abilities). When starting a capability, you receive an execution ID that can be used to monitor status or stop the execution.
:::
