---
name: get
cbbaseinfo:
  description: Gets details of a specific rule engine.
cbparameters:
  parameters:
    - name: id
      type: string
      required: true
      description: The unique identifier of the rule engine.
  returns:
    signatureTypeName: "Promise<ContextRuleEngineResponse>"
    description: A promise that resolves with the rule engine details.
data:
  name: get
  category: contextRuleEngine
  link: get.md
---
# get

```typescript
codebolt.contextRuleEngine.get(id: undefined): Promise<ContextRuleEngineResponse>
```

Gets details of a specific rule engine.
### Parameters

- **`id`** (unknown): The unique identifier of the rule engine.

### Returns

- **`Promise<[ContextRuleEngineResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ContextRuleEngineResponse)>`**: A promise that resolves with the rule engine details.

### Examples

#### Example 1: Get Rule Engine
```javascript
const result = await codebolt.contextRuleEngine.get('engine-id-123');

const engine = result.data.ruleEngine;
console.log('Engine:', engine.name);
console.log('Description:', engine.description);
console.log('Enabled:', engine.enabled);
console.log('Rules:', engine.rules.length);
```

#### Example 2: Display Rule Details
```javascript
const result = await codebolt.contextRuleEngine.get('engine-id-123');

result.data.ruleEngine.rules.forEach(rule => {
  console.log(`Rule: ${rule.name}`);
  console.log(`  Conditions: ${rule.conditions.length}`);
  console.log(`  Action: ${rule.action}`);
  console.log(`  Logic: ${rule.condition_logic || 'and'}`);
  if (rule.action_config) {
    console.log(`  Config:`, rule.action_config);
  }
});
```

#### Example 3: Check Engine Status
```javascript
async function isEngineEnabled(engineId) {
  const result = await codebolt.contextRuleEngine.get(engineId);
  return result.data.ruleEngine.enabled;
}

const enabled = await isEngineEnabled('engine-id-123');

if (enabled) {
  console.log('Engine is active');
} else {
  console.log('Engine is disabled');
}
```

### Notes
- Returns complete rule engine configuration
- Use to inspect rules before evaluation