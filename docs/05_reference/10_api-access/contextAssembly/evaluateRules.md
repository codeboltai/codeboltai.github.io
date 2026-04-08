---
name: evaluateRules
cbbaseinfo:
  description: Evaluates context rules without fetching memory content.
cbparameters:
  parameters:
    - name: request
      type: ContextAssemblyRequest
      required: true
      description: Context assembly request with scope variables.
    - name: ruleEngineIds
      type: string[]
      required: false
      description: Optional specific rule engine IDs to evaluate.
  returns:
    signatureTypeName: "Promise<RuleEvaluationResponse>"
    description: A promise that resolves with rule evaluation results.
data:
  name: evaluateRules
  category: contextAssembly
  link: evaluateRules.md
---
# evaluateRules

```typescript
codebolt.contextAssembly.evaluateRules(request: undefined, ruleEngineIds: undefined): Promise<RuleEvaluationResponse>
```

Evaluates context rules without fetching memory content.
### Parameters

- **`request`** (unknown): Context assembly request with scope variables.
- **`ruleEngineIds`** (unknown): Optional specific rule engine IDs to evaluate.

### Returns

- **`Promise<[RuleEvaluationResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RuleEvaluationResponse)>`**: A promise that resolves with rule evaluation results.

### Response Structure

```typescript
{
  type: 'contextAssembly.evaluateRules',
  success: boolean,
  data?: {
    matched_rules: string[];
    excluded_memories: string[];
    included_memories: string[];
    forced_memories: string[];
  }
}
```

### Examples

#### Example 1: Evaluate All Rules
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextAssembly.evaluateRules({
  scope_variables: {
    input: 'Debug the authentication bug',
    task_type: 'debugging',
    priority: 'high'
  }
});

console.log('Matched rules:', result.data.matched_rules);
console.log('Included memories:', result.data.included_memories);
console.log('Excluded memories:', result.data.excluded_memories);
console.log('Forced memories:', result.data.forced_memories);
```

#### Example 2: Evaluate Specific Rule Engines
```javascript
const result = await codebolt.contextAssembly.evaluateRules(
  {
    scope_variables: {
      input: 'Fix the API endpoint',
      task_type: 'development'
    }
  },
  ['debugging-rules', 'development-rules']
);

console.log('Applied rules:', result.data.matched_rules);
```

#### Example 3: Test Rule Logic
```javascript
async function testRuleLogic(taskType, priority) {
  const result = await codebolt.contextAssembly.evaluateRules({
    scope_variables: {
      input: 'Test',
      task_type: taskType,
      priority: priority
    }
  });

  return {
    taskType,
    priority,
    includedMemories: result.data.included_memories,
    excludedMemories: result.data.excluded_memories
  };
}

const test1 = await testRuleLogic('debugging', 'high');
const test2 = await testRuleLogic('development', 'normal');

console.log('Debugging includes:', test1.includedMemories);
console.log('Development includes:', test2.includedMemories);
```

#### Example 4: Decision Support
```javascript
async function whatMemoriesToUse(taskContext) {
  const result = await codebolt.contextAssembly.evaluateRules({
    scope_variables: taskContext
  });

  console.log(`For task "${taskContext.input}":`);
  console.log(`  Include: ${result.data.included_memories.join(', ')}`);
  console.log(`  Exclude: ${result.data.excluded_memories.join(', ')}`);

  if (result.data.forced_memories.length > 0) {
    console.log(`  Forced: ${result.data.forced_memories.join(', ')}`);
  }

  return result.data.included_memories;
}

const memories = await whatMemoriesToUse({
  input: 'Review the code changes',
  task_type: 'review'
});
```

#### Example 5: Compare Rule Results
```javascript
async function compareRuleContexts(context1, context2) {
  const [result1, result2] = await Promise.all([
    codebolt.contextAssembly.evaluateRules({ scope_variables: context1 }),
    codebolt.contextAssembly.evaluateRules({ scope_variables: context2 })
  ]);

  return {
    context1: {
      included: result1.data.included_memories,
      excluded: result1.data.excluded_memories
    },
    context2: {
      included: result2.data.included_memories,
      excluded: result2.data.excluded_memories
    },
    diff: {
      onlyIn1: result1.data.included_memories.filter(
        m => !result2.data.included_memories.includes(m)
      ),
      onlyIn2: result2.data.included_memories.filter(
        m => !result1.data.included_memories.includes(m)
      )
    }
  };
}
```

### Common Use Cases
**Rule Testing**: Test rule logic without fetching data.
**Decision Support**: Understand what memories will be included.
**Debugging**: Debug why certain memories are included/excluded.
**Rule Comparison**: Compare rule behavior across different contexts.

### Notes
- Doesn't fetch actual memory content
- Faster than full context assembly
- Use to understand rule behavior
- Helpful for debugging and testing