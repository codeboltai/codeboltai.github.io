---
title: Context MCP
sidebar_label: codebolt.context
sidebar_position: 27
---

# codebolt.context

Context rule engine operations for creating and evaluating conditional rules that determine memory inclusion, exclusion, and prioritization based on context variables.

## Available Tools

- `context_rule_create` - Creates a new context rule engine with conditional rules
- `context_rule_list` - Lists all context rule engines
- `context_rule_evaluate` - Evaluates context rules against provided variables
- `context_rule_get` - Gets a context rule engine by its ID
- `context_rule_delete` - Deletes a context rule engine by its ID

## Sample Usage

### Creating a Context Rule Engine

```javascript
// Create a rule engine with multiple rules
const createResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_create",
  {
    name: "User Session Rules",
    description: "Rules for managing user session memory inclusion",
    enabled: true,
    rules: [
      {
        name: "Include Admin Memories",
        description: "Always include admin-related memories for admin users",
        conditions: [
          {
            variable: "user_role",
            operator: "equals",
            value: "admin"
          }
        ],
        condition_logic: "and",
        action: "force_include",
        enabled: true,
        order: 1
      },
      {
        name: "Exclude Archived Content",
        description: "Exclude archived memories from regular queries",
        conditions: [
          {
            variable: "content_status",
            operator: "equals",
            value: "archived"
          },
          {
            variable: "include_archived",
            operator: "not_equals",
            value: true
          }
        ],
        condition_logic: "and",
        action: "exclude",
        enabled: true,
        order: 2
      },
      {
        name: "Prioritize Recent Content",
        description: "Set higher priority for content from the last 24 hours",
        conditions: [
          {
            variable: "content_age_hours",
            operator: "less_than",
            value: 24
          }
        ],
        condition_logic: "and",
        action: "set_priority",
        action_config: {
          priority: 10
        },
        enabled: true,
        order: 3
      }
    ]
  }
);
```

### Listing Context Rule Engines

```javascript
// List all context rule engines
const listResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_list",
  {}
);
```

### Getting a Specific Rule Engine

```javascript
// Get a rule engine by ID
const getResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_get",
  {
    id: "rule-engine-123"
  }
);
```

### Evaluating Context Rules

```javascript
// Evaluate rules against scope variables
const evalResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_evaluate",
  {
    scope_variables: {
      user_role: "admin",
      content_status: "active",
      content_age_hours: 12
    },
    additional_variables: {
      session_id: "sess-456",
      environment: "production"
    },
    input: "Searching for recent admin content"
  }
);

// Evaluate specific rule engines only
const evalSpecificResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_evaluate",
  {
    scope_variables: {
      user_role: "user",
      content_type: "documentation"
    },
    rule_engine_ids: ["rule-engine-123", "rule-engine-456"]
  }
);
```

### Deleting a Rule Engine

```javascript
// Delete a rule engine
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.context",
  "context_rule_delete",
  {
    id: "rule-engine-123"
  }
);
```

## Tool Parameters

### context_rule_create

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the context rule engine |
| description | string | No | Description of what this rule engine does |
| rules | array | Yes | Array of rule objects |
| enabled | boolean | No | Whether the rule engine is enabled (default: true) |

#### Rule Object Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Rule name |
| description | string | No | Rule description |
| conditions | array | Yes | Array of condition objects |
| condition_logic | string | No | Logic operator: 'and' or 'or' |
| action | string | Yes | Action: 'include', 'exclude', 'force_include', or 'set_priority' |
| action_config | object | No | Additional configuration for the action |
| enabled | boolean | No | Whether the rule is enabled |
| order | number | No | Execution order of the rule |

#### Condition Object Structure

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| variable | string | Yes | The variable name to evaluate |
| operator | string | Yes | Comparison operator (e.g., 'equals', 'not_equals', 'less_than', 'greater_than', 'contains') |
| value | any | Yes | The value to compare against |

### context_rule_list

No parameters required.

### context_rule_get

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The unique identifier of the rule engine |

### context_rule_evaluate

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| scope_variables | object | Yes | Key-value pairs of variables to evaluate rules against |
| additional_variables | object | No | Additional variables to include in evaluation |
| input | string | No | Optional input string for context |
| rule_engine_ids | string[] | No | Specific rule engine IDs to evaluate (evaluates all enabled if not provided) |

### context_rule_delete

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | The unique identifier of the rule engine to delete |

## Evaluation Results

When rules are evaluated, the response includes:

- **matched_rules** - List of rules that matched the provided variables
- **included_memories** - Memories that should be included based on rule evaluation
- **excluded_memories** - Memories that should be excluded based on rule evaluation
- **forced_memories** - Memories that must be included regardless of other rules

:::info
Context rule engines provide a powerful way to dynamically control memory inclusion and prioritization. Rules are evaluated in order, and multiple conditions within a rule can be combined using AND/OR logic. Actions can include, exclude, force include, or set priority for memories based on the context variables provided during evaluation.
:::
