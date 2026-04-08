---
title: Context Rule Engine MCP
sidebar_label: codebolt.contextRuleEngine
sidebar_position: 75
---

# codebolt.contextRuleEngine

Context Rule Engine tools for conditional memory inclusion. These tools enable you to create, manage, and evaluate rules that determine which memories should be included or excluded based on context variables.

## Available Tools

### Rule Management

- `rule_create` - Creates a new context rule engine
- `rule_get` - Retrieves a rule engine by ID
- `rule_list` - Lists all rule engines
- `rule_update` - Updates a rule engine
- `rule_delete` - Deletes a rule engine

### Rule Evaluation

- `rule_evaluate` - Evaluates rules against provided variables
- `rule_get_possible_variables` - Gets all possible variables for UI configuration

## Tool Parameters

### Rule Management Tools

#### `rule_create`

Creates a new context rule engine for conditional memory inclusion.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| name | string | Yes | The name of the rule engine |
| rules | array | Yes | Array of rules (see Rule Object Structure below) |
| id | string | No | Optional unique identifier (auto-generated if not provided) |
| description | string | No | Optional description of the rule engine |
| enabled | boolean | No | Whether the rule engine is enabled (default: true) |

**Rule Object Structure:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | The name of the rule |
| description | string | No | Optional description of what the rule does |
| conditions | array | Yes | Array of condition objects |
| condition_logic | string | No | Logic for combining conditions: 'and' or 'or' (default: 'and') |
| action | string | Yes | Action to take when conditions match: 'include', 'exclude', 'force_include', or 'set_priority' |
| action_config | object | No | Configuration for the action |
| enabled | boolean | No | Whether this rule is enabled (default: true) |
| order | number | No | Execution order of the rule (lower numbers execute first) |

**Condition Object Structure:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| variable | string | Yes | The variable name to evaluate |
| operator | string | Yes | Comparison operator (see Operators section below) |
| value | any | Yes | The value to compare against |

**Action Configuration:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| memory_ids | string[] | No | Array of memory IDs to include/exclude |
| priority | number | No | Priority value for set_priority action |

#### `rule_get`

Retrieves a context rule engine by ID.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Rule engine ID |

#### `rule_list`

Lists all context rule engines.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | - | - | No parameters required |

#### `rule_update`

Updates a context rule engine.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Rule engine ID |
| updates | object | Yes | Update parameters (can include name, description, rules, enabled) |

**Update Parameters:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | No | New name for the rule engine |
| description | string | No | New description |
| rules | array | No | Updated array of rules |
| enabled | boolean | No | Enable or disable the rule engine |

#### `rule_delete`

Deletes a context rule engine.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| id | string | Yes | Rule engine ID |

### Rule Evaluation Tools

#### `rule_evaluate`

Evaluates context rules against provided variables.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| rule_engine_id | string | Yes | Rule engine ID |
| variables | object | Yes | Variables to evaluate against |

**Variables Object:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| scope_variables | object | No | Variables from the current scope |
| additional_variables | object | No | Additional variables for evaluation |
| input | string | No | Input string to process |
| rule_engine_ids | string[] | No | Array of rule engine IDs to evaluate |

#### `rule_get_possible_variables`

Gets all possible variables that can be used in rule conditions for UI configuration.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | - | - | No parameters required |

**Possible Variable Structure:**

| Field | Type | Description |
|-------|------|-------------|
| name | string | The variable name |
| type | string | Variable type: 'string', 'number', 'boolean', 'array', or 'object' |
| source | string | Variable source: 'scope', 'memory', or 'system' |
| description | string | Optional description of the variable |
| examples | array | Optional example values |

## Sample Usage

### Creating a Rule Engine

```javascript
// Create a new rule engine with conditional rules
const createResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_create",
  {
    name: "User Context Filter",
    description: "Filters memories based on user context",
    enabled: true,
    rules: [
      {
        name: "Include Admin Memories",
        description: "Include admin-related memories for admin users",
        conditions: [
          {
            variable: "user.role",
            operator: "eq",
            value: "admin"
          }
        ],
        condition_logic: "and",
        action: "include",
        action_config: {
          memory_ids: ["admin-memories-1", "admin-memories-2"]
        },
        enabled: true,
        order: 1
      },
      {
        name: "Exclude Deprecated Content",
        description: "Exclude deprecated memories",
        conditions: [
          {
            variable: "memory.status",
            operator: "eq",
            value: "deprecated"
          }
        ],
        action: "exclude",
        action_config: {
          memory_ids: ["deprecated-memories"]
        },
        enabled: true,
        order: 2
      }
    ]
  }
);
```

### Listing and Retrieving Rule Engines

```javascript
// List all rule engines
const listResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_list",
  {}
);

// Get a specific rule engine
const getResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_get",
  {
    id: "your-rule-engine-id"
  }
);
```

### Updating and Deleting Rule Engines

```javascript
// Update an existing rule engine
const updateResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_update",
  {
    id: "your-rule-engine-id",
    updates: {
      name: "Updated User Context Filter",
      description: "Updated description",
      enabled: false,
      rules: [
        {
          name: "New Rule",
          description: "A new rule",
          conditions: [
            {
              variable: "user.type",
              operator: "in",
              value: ["premium", "enterprise"]
            }
          ],
          action: "force_include",
          action_config: {
            memory_ids: ["premium-content"],
            priority: 10
          },
          enabled: true
        }
      ]
    }
  }
);

// Delete a rule engine
const deleteResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_delete",
  {
    id: "your-rule-engine-id"
  }
);
```

### Evaluating Rules

```javascript
// Evaluate rules against context variables
const evaluateResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_evaluate",
  {
    rule_engine_id: "your-rule-engine-id",
    variables: {
      scope_variables: {
        user: {
          role: "admin",
          type: "enterprise",
          permissions: ["read", "write", "delete"]
        },
        session: {
          id: "session-123",
          startTime: "2024-01-01T00:00:00Z"
        }
      },
      additional_variables: {
        environment: "production",
        featureFlags: ["new-ui", "beta-features"]
      },
      input: "User is requesting access to admin panel",
      rule_engine_ids: ["rule-engine-1", "rule-engine-2"]
    }
  }
);
```

### Getting Possible Variables

```javascript
// Get all possible variables for rule configuration
const variablesResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_get_possible_variables",
  {}
);
```

### Complex Rule Example

```javascript
// Create a rule engine with complex conditions
const complexRuleResult = await codebolt.tools.executeTool(
  "codebolt.contextRuleEngine",
  "rule_create",
  {
    name: "Complex Context Filter",
    description: "Advanced filtering with multiple conditions",
    enabled: true,
    rules: [
      {
        name: "Include for Premium Users",
        conditions: [
          {
            variable: "user.subscription",
            operator: "in",
            value: ["premium", "enterprise"]
          },
          {
            variable: "user.status",
            operator: "neq",
            value: "suspended"
          }
        ],
        condition_logic: "and",
        action: "force_include",
        action_config: {
          memory_ids: ["premium-features"],
          priority: 5
        },
        enabled: true,
        order: 1
      },
      {
        name: "Exclude Low Priority",
        conditions: [
          {
            variable: "context.priority",
            operator: "lt",
            value: 5
          }
        ],
        action: "exclude",
        action_config: {
          memory_ids: ["low-priority-content"]
        },
        enabled: true,
        order: 2
      },
      {
        name: "Include Recent Activity",
        conditions: [
          {
            variable: "activity.last_active",
            operator: "gte",
            value: "2024-01-01T00:00:00Z"
          }
        ],
        action: "include",
        action_config: {
          memory_ids: ["recent-memories"]
        },
        enabled: true,
        order: 3
      }
    ]
  }
);
```

:::info
**Rule Operators and Conditions**

The Context Rule Engine supports a variety of comparison operators for building conditional rules:

**Equality Operators:**
- `eq` - Equal to
- `neq` - Not equal to

**Numeric Operators:**
- `gt` - Greater than
- `gte` - Greater than or equal to
- `lt` - Less than
- `lte` - Less than or equal to

**String Operators:**
- `contains` - String contains substring
- `not_contains` - String does not contain substring
- `starts_with` - String starts with prefix
- `ends_with` - String ends with suffix
- `matches` - Matches regex pattern

**Collection Operators:**
- `in` - Value is in array
- `not_in` - Value is not in array

**Existence Operators:**
- `exists` - Variable exists and is not null/undefined
- `not_exists` - Variable does not exist or is null/undefined

**Condition Logic:**
- `and` - All conditions must be true (default)
- `or` - At least one condition must be true

**Actions:**
- `include` - Include specified memories in context
- `exclude` - Exclude specified memories from context
- `force_include` - Force inclusion regardless of other rules
- `set_priority` - Set priority level for memories
:::
