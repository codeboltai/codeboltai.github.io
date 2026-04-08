---
name: evaluate
cbbaseinfo:
  description: Evaluates rules against provided variables.
cbparameters:
  parameters:
    - name: params
      type: EvaluateRulesParams
      required: true
      description: Evaluation parameters with scope variables and optional rule engine IDs.
  returns:
    signatureTypeName: "Promise<EvaluateRulesResponse>"
    description: A promise that resolves with evaluation results.
data:
  name: evaluate
  category: contextRuleEngine
  link: evaluate.md
---
# evaluate

```typescript
codebolt.contextRuleEngine.evaluate(params: undefined): Promise<EvaluateRulesResponse>
```

Evaluates rules against provided variables.
### Parameters

- **`params`** (unknown): Evaluation parameters with scope variables and optional rule engine IDs.

### Returns

- **`Promise<[EvaluateRulesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/EvaluateRulesResponse)>`**: A promise that resolves with evaluation results.

### Examples

#### Example 1: Evaluate All Rules
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextRuleEngine.evaluate({
  scope_variables: {
    task_type: 'debugging',
    priority: 'high',
    user_level: 'expert'
  }
});

console.log('Matched rules:', result.data.matched_rules);
console.log('Included memories:', result.data.included_memories);
console.log('Excluded memories:', result.data.excluded_memories);
console.log('Forced memories:', result.data.forced_memories);
```

#### Example 2: Evaluate Specific Engines
```javascript
const result = await codebolt.contextRuleEngine.evaluate({
  scope_variables: {
    task_type: 'development'
  },
  rule_engine_ids: ['task-rules', 'priority-rules']
});

console.log('Results from specific engines:', result.data);
```

#### Example 3: Test Rule Behavior
```javascript
async function testRule(engineId, variables) {
  const result = await codebolt.contextRuleEngine.evaluate({
    scope_variables: variables,
    rule_engine_ids: [engineId]
  });

  return {
    matched: result.data.matched_rules,
    included: result.data.included_memories,
    excluded: result.data.excluded_memories
  };
}

const test1 = await testRule('engine-123', { task_type: 'debugging' });
const test2 = await testRule('engine-123', { task_type: 'development' });

console.log('Debugging includes:', test1.included);
console.log('Development includes:', test2.included);
```

#### Example 4: Compare Scenarios
```javascript
async function compareScenarios(scenarios) {
  const results = {};

  for (const [name, variables] of Object.entries(scenarios)) {
    const result = await codebolt.contextRuleEngine.evaluate({
      scope_variables: variables
    });

    results[name] = {
      included: result.data.included_memories,
      excluded: result.data.excluded_memories,
      forced: result.data.forced_memories
    };
  }

  return results;
}

const comparison = await compareScenarios({
  highPriorityDebug: {
    task_type: 'debugging',
    priority: 'high'
  },
  lowPriorityDev: {
    task_type: 'development',
    priority: 'low'
  }
});

console.log('Comparison:', comparison);
```

#### Example 5: Debug Rule Matching
```javascript
const result = await codebolt.contextRuleEngine.evaluate({
  scope_variables: {
    task_type: 'debugging',
    user_level: 'beginner'
  }
});

console.log('=== Rule Evaluation Results ===');
console.log('Matched rules:');
result.data.matched_rules.forEach(rule => {
  console.log(`  - ${rule}`);
});

console.log('\nIncluded memories:');
result.data.included_memories.forEach(mem => {
  console.log(`  - ${mem}`);
});

console.log('\nExcluded memories:');
result.data.excluded_memories.forEach(mem => {
  console.log(`  - ${mem}`);
});

if (result.data.forced_memories.length > 0) {
  console.log('\nForced memories:');
  result.data.forced_memories.forEach(mem => {
    console.log(`  - ${mem}`);
  });
}
```

#### Example 6: Decision Support
```javascript
async function whatMemoriesToUse(context) {
  const result = await codebolt.contextRuleEngine.evaluate({
    scope_variables: context
  });

  const report = {
    context,
    matchedRules: result.data.matched_rules,
    memoryDecision: {
      include: result.data.included_memories,
      exclude: result.data.excluded_memories,
      force: result.data.forced_memories
    },
    recommendation: []
  };

  // Build recommendation
  if (result.data.forced_memories.length > 0) {
    report.recommendation.push('Use forced memories for critical context');
  }

  if (result.data.included_memories.length > 5) {
    report.recommendation.push('Consider limiting context size');
  }

  return report;
}

const advice = await whatMemoriesToUse({
  task_type: 'debugging',
  priority: 'high'
});

console.log('Recommendation:', advice.recommendation);
```

### Common Use Cases
**Rule Testing**: Test rules before production use.
**Debugging**: Understand why certain memories are included/excluded.
**Scenario Analysis**: Compare behavior across different contexts.
**Decision Support**: Get recommendations based on rule evaluation.

### Notes
- Evaluates all enabled rule engines by default
- Use `rule_engine_ids` to evaluate specific engines
- Results are cumulative across all evaluated engines
- Use for testing and debugging rule logic