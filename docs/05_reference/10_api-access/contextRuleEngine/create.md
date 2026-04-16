---
name: create
cbbaseinfo:
  description: Creates a new context rule engine with rules for memory inclusion/exclusion.
cbparameters:
  parameters:
    - name: config
      type: CreateContextRuleEngineParams
      required: true
      description: Rule engine configuration including name, description, rules, and enabled status.
  returns:
    signatureTypeName: "Promise<ContextRuleEngineResponse>"
    description: A promise that resolves with the created rule engine details.
data:
  name: create
  category: contextRuleEngine
  link: create.md
---
# create

```typescript
codebolt.contextRuleEngine.create(config: undefined): Promise<ContextRuleEngineResponse>
```

Creates a new context rule engine with rules for memory inclusion/exclusion.
### Parameters

- **`config`** (unknown): Rule engine configuration including name, description, rules, and enabled status.

### Returns

- **`Promise<[ContextRuleEngineResponse](/docs/reference/type-reference/codeboltjs/interfaces/ContextRuleEngineResponse)>`**: A promise that resolves with the created rule engine details.

### Examples

#### Example 1: Create Basic Rule Engine
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextRuleEngine.create({
  name: 'task-rules',
  description: 'Rules for task-based memory selection',
  rules: [
    {
      name: 'Debugging task',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' }
      ],
      action: 'include',
      action_config: {
        memory_ids: ['error_logs', 'recent_commits']
      }
    }
  ],
  enabled: true
});

console.log('Created:', result.data.ruleEngine.id);
```

#### Example 2: Create with Multiple Rules
```javascript
const result = await codebolt.contextRuleEngine.create({
  name: 'comprehensive-rules',
  description: 'Comprehensive rule set for context selection',
  rules: [
    {
      name: 'High priority',
      conditions: [
        { variable: 'priority', operator: 'eq', value: 'high' }
      ],
      action: 'force_include',
      action_config: { memory_ids: ['urgent_docs'] },
      order: 1
    },
    {
      name: 'Development task',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'development' }
      ],
      action: 'include',
      action_config: { memory_ids: ['codebase', 'api_docs'] },
      order: 2
    },
    {
      name: 'Exclude archived',
      conditions: [
        { variable: 'status', operator: 'eq', value: 'archived' }
      ],
      action: 'exclude',
      action_config: { memory_ids: ['archived_data'] },
      order: 3
    }
  ]
});
```

#### Example 3: Create with OR Logic
```javascript
const result = await codebolt.contextRuleEngine.create({
  name: 'flexible-rules',
  rules: [
    {
      name: 'Important tasks',
      conditions: [
        { variable: 'priority', operator: 'in', value: ['high', 'urgent'] }
      ],
      condition_logic: 'or',
      action: 'include',
      action_config: { memory_ids: ['priority_docs'] }
    }
  ]
});
```

#### Example 4: Create Priority Rule
```javascript
const result = await codebolt.contextRuleEngine.create({
  name: 'priority-engine',
  rules: [
    {
      name: 'Boost recent code',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' }
      ],
      action: 'set_priority',
      action_config: {
        memory_ids: ['recent_commits', 'recent_changes'],
        priority: 10
      }
    }
  ]
});
```

#### Example 5: Create with Complex Conditions
```javascript
const result = await codebolt.contextRuleEngine.create({
  name: 'advanced-rules',
  rules: [
    {
      name: 'Expert debugging',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' },
        { variable: 'user_level', operator: 'eq', value: 'expert' }
      ],
      action: 'include',
      action_config: {
        memory_ids: ['advanced_debugging', 'system_logs', 'performance_metrics']
      }
    },
    {
      name: 'Beginner debugging',
      conditions: [
        { variable: 'task_type', operator: 'eq', value: 'debugging' },
        { variable: 'user_level', operator: 'eq', value: 'beginner' }
      ],
      action: 'include',
      action_config: {
        memory_ids: ['tutorials', 'examples', 'basic_debugging']
      }
    }
  ]
});
```

#### Example 6: Create Disabled Engine
```javascript
const result = await codebolt.contextRuleEngine.create({
  name: 'experimental-rules',
  description: 'Experimental rules for testing',
  rules: [
    {
      name: 'Test rule',
      conditions: [
        { variable: 'test', operator: 'eq', value: 'true' }
      ],
      action: 'include',
      action_config: { memory_ids: ['test_memory'] }
    }
  ],
  enabled: false  // Disabled by default
});

console.log('Engine created but disabled');
```

### Common Use Cases
**Task Routing**: Include different memories based on task type.
**Priority Handling**: Force include critical memories for high-priority tasks.
**User Adaptation**: Adjust context based on user expertise level.
**Conditional Logic**: Apply complex business rules to memory selection.

### Notes
- Rules are evaluated in order (use order field)
- Multiple rules can match the same context
- Later rules can override earlier ones
- Use descriptive names for debugging
- Test rules with `evaluate` before production use
