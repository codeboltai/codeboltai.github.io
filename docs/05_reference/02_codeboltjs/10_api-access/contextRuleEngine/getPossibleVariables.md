---
name: getPossibleVariables
cbbaseinfo:
  description: Gets all possible variables for rule configuration.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<PossibleVariablesResponse>"
    description: A promise that resolves with available variables.
data:
  name: getPossibleVariables
  category: contextRuleEngine
  link: getPossibleVariables.md
---
# getPossibleVariables

```typescript
codebolt.contextRuleEngine.getPossibleVariables(): Promise<PossibleVariablesResponse>
```

Gets all possible variables for rule configuration.
### Returns

- **`Promise<[PossibleVariablesResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/PossibleVariablesResponse)>`**: A promise that resolves with available variables.

### Examples

#### Example 1: List All Variables
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextRuleEngine.getPossibleVariables();

result.data.variables.forEach(variable => {
  console.log(`- ${variable.name} (${variable.type})`);
  console.log(`  Source: ${variable.source}`);
  if (variable.description) {
    console.log(`  Description: ${variable.description}`);
  }
  if (variable.examples) {
    console.log(`  Examples:`, variable.examples);
  }
});
```

#### Example 2: Filter by Source
```javascript
const result = await codebolt.contextRuleEngine.getPossibleVariables();

const scopeVars = result.data.variables.filter(v => v.source === 'scope');
const memoryVars = result.data.variables.filter(v => v.source === 'memory');
const systemVars = result.data.variables.filter(v => v.source === 'system');

console.log('Scope variables:', scopeVars.map(v => v.name));
console.log('Memory variables:', memoryVars.map(v => v.name));
console.log('System variables:', systemVars.map(v => v.name));
```

#### Example 3: Find Variables by Type
```javascript
const result = await codebolt.contextRuleEngine.getPossibleVariables();

const stringVars = result.data.variables.filter(v => v.type === 'string');
const boolVars = result.data.variables.filter(v => v.type === 'boolean');
const numberVars = result.data.variables.filter(v => v.type === 'number');

console.log('String variables:', stringVars.map(v => v.name));
console.log('Boolean variables:', boolVars.map(v => v.name));
console.log('Number variables:', numberVars.map(v => v.name));
```

#### Example 4: Build Variable Reference
```javascript
async function buildVariableReference() {
  const result = await codebolt.contextRuleEngine.getPossibleVariables();

  const reference = {
    scope: {},
    memory: {},
    system: {}
  };

  result.data.variables.forEach(variable => {
    const info = {
      type: variable.type,
      description: variable.description,
      examples: variable.examples
    };

    if (variable.source === 'scope') {
      reference.scope[variable.name] = info;
    } else if (variable.source === 'memory') {
      reference.memory[variable.name] = info;
    } else {
      reference.system[variable.name] = info;
    }
  });

  return reference;
}

const reference = await buildVariableReference();
console.log('Variable reference:', JSON.stringify(reference, null, 2));
```

#### Example 5: Help UI Construction
```javascript
async function getVariableOptions() {
  const result = await codebolt.contextRuleEngine.getPossibleVariables();

  return result.data.variables.map(variable => ({
    value: variable.name,
    label: variable.name,
    type: variable.type,
    source: variable.source,
    description: variable.description,
    hint: variable.examples ? `Examples: ${variable.examples.join(', ')}` : undefined
  }));
}

const options = await getVariableOptions();
// Use in UI dropdown for rule condition builder
```

#### Example 6: Validate Variables in Rules
```javascript
async function validateRuleVariables(rule) {
  const result = await codebolt.contextRuleEngine.getPossibleVariables();

  const validVars = new Set(result.data.variables.map(v => v.name));
  const invalidVars = [];

  rule.conditions.forEach(condition => {
    if (!validVars.has(condition.variable)) {
      invalidVars.push(condition.variable);
    }
  });

  if (invalidVars.length > 0) {
    console.warn('Invalid variables in rule:', invalidVars);
    return false;
  }

  return true;
}

const isValid = await validateRuleVariables({
  name: 'Test rule',
  conditions: [
    { variable: 'task_type', operator: 'eq', value: 'debugging' },
    { variable: 'invalid_var', operator: 'eq', value: 'test' }
  ],
  action: 'include',
  action_config: { memory_ids: ['test'] }
});
```

### Common Use Cases
**Rule Builder**: Build UI for creating rules with variable suggestions.
**Documentation**: Understand available variables for rule conditions.
**Validation**: Validate that rule variables exist.
**Reference**: Provide reference information for rule authors.

### Notes
- Returns all variables that can be used in rule conditions
- Variables are organized by source (scope, memory, system)
- Use examples to understand expected values
- Helpful for building rule configuration UIs
