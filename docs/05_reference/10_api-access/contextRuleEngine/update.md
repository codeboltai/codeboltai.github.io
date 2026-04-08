---
name: update
cbbaseinfo:
  description: Updates an existing rule engine.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the rule engine.
    - name: updates
      type: UpdateContextRuleEngineParams
      required: true
      description: "Updated engine configuration (name, description, rules, enabled)."
  returns:
    signatureTypeName: "Promise<ContextRuleEngineResponse>"
    description: A promise that resolves with the updated rule engine.
data:
  name: update
  category: contextRuleEngine
  link: update.md
---
# update

```typescript
codebolt.contextRuleEngine.update(id: undefined, updates: undefined): Promise<ContextRuleEngineResponse>
```

Updates an existing rule engine.
### Parameters

- **`id`** (unknown): The unique identifier of the rule engine.
- **`updates`** (unknown): Updated engine configuration (name, description, rules, enabled).

### Returns

- **`Promise<[ContextRuleEngineResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ContextRuleEngineResponse)>`**: A promise that resolves with the updated rule engine.

### Examples

#### Example 1: Enable/Disable Engine
```javascript
// Disable engine
const result1 = await codebolt.contextRuleEngine.update(
  'engine-id-123',
  { enabled: false }
);

// Enable engine
const result2 = await codebolt.contextRuleEngine.update(
  'engine-id-123',
  { enabled: true }
);
```

#### Example 2: Update Rules
```javascript
const current = await codebolt.contextRuleEngine.get('engine-id-123');

const updated = await codebolt.contextRuleEngine.update(
  'engine-id-123',
  {
    rules: [
      ...current.data.ruleEngine.rules,
      {
        name: 'New rule',
        conditions: [
          { variable: 'new_var', operator: 'eq', value: 'test' }
        ],
        action: 'include',
        action_config: { memory_ids: ['new_memory'] }
      }
    ]
  }
);
```

#### Example 3: Update Description
```javascript
const result = await codebolt.contextRuleEngine.update(
  'engine-id-123',
  {
    description: 'Updated description reflecting new rules'
  }
);
```

### Notes
- Can update name, description, rules, or enabled status
- Replaces rules entirely with new rules array
- Use get() first to preserve existing rules when adding new ones