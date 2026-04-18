---
cbapicategory:
  - name: create
    link: /docs/api/apiaccess/contextruleengine/create
    description: Creates a new context rule engine with rules for memory inclusion/exclusion.
  - name: get
    link: /docs/api/apiaccess/contextruleengine/get
    description: Gets details of a specific rule engine.
  - name: list
    link: /docs/api/apiaccess/contextruleengine/list
    description: Lists all available rule engines.
  - name: update
    link: /docs/api/apiaccess/contextruleengine/update
    description: Updates an existing rule engine.
  - name: delete
    link: /docs/api/apiaccess/contextruleengine/delete
    description: Deletes a rule engine.
  - name: evaluate
    link: /docs/api/apiaccess/contextruleengine/evaluate
    description: Evaluates rules against provided variables.
  - name: getPossibleVariables
    link: /docs/api/apiaccess/contextruleengine/getpossiblevariables
    description: Gets all possible variables for rule configuration.

---
# Context Rule Engine API

The Context Rule Engine API provides a flexible rules system for controlling which memory sources are included in context assembly. It enables conditional logic, prioritization, and dynamic memory selection.

## Overview

The Context Rule Engine module enables you to:
- **Define Rules**: Create conditions for memory inclusion/exclusion
- **Conditional Logic**: Include memories based on variable values
- **Prioritization**: Control memory priority dynamically
- **Dynamic Selection**: Adapt context based on current state

## Key Concepts

### Rule Actions

Rules can perform different actions:
- **include**: Always include specified memory types
- **exclude**: Exclude specified memory types
- **force_include**: Force include regardless of other rules
- **set_priority**: Set priority for memory types

### Rule Conditions

Conditions use operators to match variable values:
- **Comparison**: eq, neq, gt, gte, lt, lte
- **String**: contains, not_contains, starts_with, ends_with
- **Collection**: in, not_in
- **Existence**: exists, not_exists
- **Pattern**: matches (regex)

### Rule Logic

- **AND**: All conditions must be true (default)
- **OR**: Any condition can be true

## Quick Start Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Create a rule engine
const engine = await codebolt.contextRuleEngine.create({
  name: 'debugging-rules',
  description: 'Rules for debugging tasks',
  rules: [
    {
      name: 'Include error logs',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' }
      ],
      action: 'include',
      action_config: {
        memory_ids: ['error_logs', 'system_logs']
      }
    },
    {
      name: 'Prioritize recent code',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' },
        { variable: 'priority', operator: 'eq', value: 'high' }
      ],
      action: 'set_priority',
      action_config: {
        memory_ids: ['recent_commits'],
        priority: 10
      }
    }
  ],
  enabled: true
});

console.log('Created rule engine:', engine.data.ruleEngine.id);

// Evaluate rules
const result = await codebolt.contextRuleEngine.evaluate({
  scope_variables: {
    task_type: 'debugging',
    priority: 'high'
  }
});

console.log('Included memories:', result.data.included_memories);
console.log('Forced memories:', result.data.forced_memories);
```

## Response Structure

All Context Rule Engine API functions return responses with a consistent structure:

```javascript
{
  type: 'contextRuleEngine.operationName',
  success: true,
  data: {
    // Operation-specific data
  },
  message: 'Optional message',
  error: 'Error details if failed',
  timestamp: '2024-01-19T10:00:00Z',
  requestId: 'unique-request-id'
}
```

## Common Use Cases

### Task-Based Memory Selection
```javascript
const engine = await codebolt.contextRuleEngine.create({
  name: 'task-based-selection',
  rules: [
    {
      name: 'Development task',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'development' }
      ],
      action: 'include',
      action_config: { memory_ids: ['codebase', 'documentation'] }
    },
    {
      name: 'Debugging task',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' }
      ],
      action: 'include',
      action_config: { memory_ids: ['error_logs', 'recent_commits'] }
    }
  ]
});
```

### Priority-Based Selection
```javascript
const engine = await codebolt.contextRuleEngine.create({
  name: 'priority-rules',
  rules: [
    {
      name: 'High priority task',
      conditions: [
        { variable: 'priority', operator: 'eq', value: 'high' }
      ],
      action: 'force_include',
      action_config: { memory_ids: ['urgent_fixes', 'critical_docs'] }
    }
  ]
});
```

### User-Context Rules
```javascript
const engine = await codebolt.contextRuleEngine.create({
  name: 'user-context-rules',
  rules: [
    {
      name: 'New user',
      conditions: [
        { variable: 'user_level', operator: 'eq', value: 'beginner' }
      ],
      action: 'include',
      action_config: { memory_ids: ['tutorials', 'examples'] }
    },
    {
      name: 'Expert user',
      conditions: [
        { variable: 'user_level', operator: 'eq', value: 'expert' }
      ],
      action: 'include',
      action_config: { memory_ids: ['advanced_docs', 'api_reference'] }
    }
  ]
});
```

## Rule Operators Reference

### Comparison Operators
```javascript
{ variable: 'count', operator: 'gt', value: 10 }        // Greater than
{ variable: 'score', operator: 'gte', value: 100 }     // Greater or equal
{ variable: 'level', operator: 'lt', value: 5 }        // Less than
{ variable: 'rating', operator: 'lte', value: 5 }      // Less or equal
{ variable: 'status', operator: 'eq', value: 'active' } // Equal
{ variable: 'type', operator: 'neq', value: 'deleted' } // Not equal
```

### String Operators
```javascript
{ variable: 'name', operator: 'contains', value: 'test' }
{ variable: 'email', operator: 'starts_with', value: 'admin' }
{ variable: 'domain', operator: 'ends_with', value: '.com' }
```

### Collection Operators
```javascript
{ variable: 'tags', operator: 'in', value: ['important', 'urgent'] }
{ variable: 'status', operator: 'not_in', value: ['deleted', 'archived'] }
```

### Existence Operators
```javascript
{ variable: 'user_id', operator: 'exists' }
{ variable: 'error', operator: 'not_exists' }
```

### Pattern Matching
```javascript
{ variable: 'email', operator: 'matches', value: '^[a-z]+@[a-z]+\\.com$' }
```

## Notes and Best Practices

### Rule Design
- Give rules descriptive names for debugging
- Use specific conditions to avoid false positives
- Consider rule order when multiple rules might match
- Test rules with `evaluate` before using in production

### Performance
- Keep rule conditions simple
- Avoid complex regex patterns
- Use indexed variables when possible
- Disable unused rules

### Testing
```javascript
// Test rules before deployment
const result = await codebolt.contextRuleEngine.evaluate({
  scope_variables: {
    task_type: 'debugging',
    priority: 'high'
  }
});

console.log('Test result:', result.data);
```

### Error Handling
- Always check `success` in responses
- Validate rule conditions before creating
- Handle cases where no rules match

<CBAPICategory />
