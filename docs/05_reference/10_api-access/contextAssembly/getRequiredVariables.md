---
name: getRequiredVariables
cbbaseinfo:
  description: Gets required variables for specific memory types.
cbparameters:
  parameters:
    - name: memoryNames
      type: string[]
      required: true
      description: Array of memory type names to get variables for.
  returns:
    signatureTypeName: "Promise<RequiredVariablesResponse>"
    description: A promise that resolves with required variable information.
data:
  name: getRequiredVariables
  category: contextAssembly
  link: getRequiredVariables.md
---
# getRequiredVariables

```typescript
codebolt.contextAssembly.getRequiredVariables(memoryNames: undefined): Promise<RequiredVariablesResponse>
```

Gets required variables for specific memory types.
### Parameters

- **`memoryNames`** (unknown): Array of memory type names to get variables for.

### Returns

- **`Promise<[RequiredVariablesResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/RequiredVariablesResponse)>`**: A promise that resolves with required variable information.

### Response Structure

```typescript
{
  type: 'contextAssembly.getRequiredVariables',
  success: boolean,
  data?: {
    scope_variables: string[];
    additional_variables: Record<string, {
      type: string;
      required: boolean;
      from_memory: string;
    }>;
  }
}
```

### Examples

#### Example 1: Get Variables for Memory Types
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextAssembly.getRequiredVariables([
  'episodic',
  'semantic',
  'procedural'
]);

console.log('Scope variables required:', result.data.scope_variables);
console.log('Additional variables:', result.data.additional_variables);
```

#### Example 2: Validate Variable Availability
```javascript
async function haveAllVariables(memoryIds, availableVars) {
  const result = await codebolt.contextAssembly.getRequiredVariables(memoryIds);

  const requiredScope = result.data.scope_variables;
  const missing = requiredScope.filter(v => !availableVars[v]);

  if (missing.length > 0) {
    console.error('Missing required scope variables:', missing);
    return false;
  }

  return true;
}

const ready = await haveAllVariables(
  ['episodic', 'semantic'],
  { input: 'test', userId: 'user-123' }
);

if (!ready) {
  console.log('Cannot assemble context - missing variables');
}
```

#### Example 3: Build Variable Requirements
```javascript
async function getVariableRequirements(memoryIds) {
  const result = await codebolt.contextAssembly.getRequiredVariables(memoryIds);

  const requirements = {
    required: result.data.scope_variables,
    optional: {}
  };

  // Group additional variables by memory
  Object.entries(result.data.additional_variables).forEach(([varName, info]) => {
    requirements.optional[varName] = {
      type: info.type,
      required: info.required,
      from: info.from_memory
    };
  });

  return requirements;
}

const reqs = await getVariableRequirements(['episodic', 'semantic']);
console.log('Required:', reqs.required);
console.log('Optional:', reqs.optional);
```

#### Example 4: Generate Variable Template
```javascript
async function generateVariableTemplate(memoryIds) {
  const result = await codebolt.contextAssembly.getRequiredVariables(memoryIds);

  const template = {
    scope_variables: {},
    additional_variables: {}
  };

  // Create template for scope variables
  result.data.scope_variables.forEach(varName => {
    template.scope_variables[varName] = `<${varName}>`;
  });

  // Create template for additional variables
  Object.entries(result.data.additional_variables).forEach(([varName, info]) => {
    template.additional_variables[varName] = {
      type: info.type,
      value: info.required ? `<${varName}>` : undefined,
      optional: !info.required
    };
  });

  return template;
}

const template = await generateVariableTemplate(['episodic']);
console.log('Variable template:', JSON.stringify(template, null, 2));
```

#### Example 5: Check Before Assembly
```javascript
async function prepareContextAssembly(memoryIds, availableVars) {
  // Get requirements
  const result = await codebolt.contextAssembly.getRequiredVariables(memoryIds);

  // Check scope variables
  const missingScope = result.data.scope_variables.filter(
    v => !availableVars[v]
  );

  if (missingScope.length > 0) {
    throw new Error(`Missing required variables: ${missingScope.join(', ')}`);
  }

  // Check optional variables
  const optionalVars = Object.entries(result.data.additional_variables)
    .filter(([_, info]) => info.required)
    .map(([varName, _]) => varName);

  const missingOptional = optionalVars.filter(
    v => !availableVars[v]
  );

  if (missingOptional.length > 0) {
    console.warn('Missing optional variables:', missingOptional);
  }

  // Return prepared request
  return {
    scope_variables: availableVars,
    explicit_memory: memoryIds
  };
}

const request = await prepareContextAssembly(
  ['episodic', 'semantic'],
  { input: 'test', userId: 'user-123' }
);

// Now use the request
const context = await codebolt.contextAssembly.getContext(request);
```

### Common Use Cases
**Preparation**: Gather required variables before assembly.
**Validation**: Check if all required variables are available.
**Documentation**: Understand what variables each memory type needs.
**Template Generation**: Create variable templates for requests.

### Notes
- Returns variables for all specified memory types combined
- `scope_variables` are required in the main scope
- `additional_variables` may be specific to certain memory types
- Use to prepare requests before calling `getContext`