---
name: listMemoryTypes
cbbaseinfo:
  description: Lists all available memory types for context assembly.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<MemoryTypesResponse>"
    description: A promise that resolves with available memory types.
data:
  name: listMemoryTypes
  category: contextAssembly
  link: listMemoryTypes.md
---
# listMemoryTypes

```typescript
codebolt.contextAssembly.listMemoryTypes(): Promise<MemoryTypesResponse>
```

Lists all available memory types for context assembly.
### Returns

- **`Promise<[MemoryTypesResponse](/docs/reference/type-reference/codeboltjs/interfaces/MemoryTypesResponse)>`**: A promise that resolves with available memory types.

### Response Structure

```typescript
{
  type: 'contextAssembly.listMemoryTypes',
  success: boolean,
  data?: {
    memoryTypes: Array<{
      id: string;
      label: string;
      description?: string;
      inputs_scope: string[];
      additional_variables?: Record<string, {
        type: string;
        required?: boolean;
        default?: any;
      }>;
      contribution: {
        format: string;
        max_tokens?: number;
      };
    }>
  }
}
```

### Examples

#### Example 1: List All Memory Types
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextAssembly.listMemoryTypes();

result.data.memoryTypes.forEach(type => {
  console.log(`- ${type.label} (${type.id})`);
  console.log(`  ${type.description || 'No description'}`);
  console.log(`  Format: ${type.contribution.format}`);
  console.log(`  Required: ${type.inputs_scope.join(', ')}`);
  console.log('');
});
```

#### Example 2: Find Memory Types by ID
```javascript
const result = await codebolt.contextAssembly.listMemoryTypes();

const episodic = result.data.memoryTypes.find(t => t.id === 'episodic');

if (episodic) {
  console.log('Episodic Memory:');
  console.log('  Description:', episodic.description);
  console.log('  Required variables:', episodic.inputs_scope);
  console.log('  Additional variables:', episodic.additional_variables);
}
```

#### Example 3: Build Memory Type Selector
```javascript
async function getMemoryTypeSelector() {
  const result = await codebolt.contextAssembly.listMemoryTypes();

  return result.data.memoryTypes.map(type => ({
    value: type.id,
    label: type.label,
    description: type.description,
    requiredVars: type.inputs_scope
  }));
}

const selector = await getMemoryTypeSelector();
console.log('Available memory types:', selector);
```

#### Example 4: Validate Memory Type Requirements
```javascript
async function checkMemoryRequirements(memoryIds, providedVars) {
  const result = await codebolt.contextAssembly.listMemoryTypes();

  const missing = {};

  for (const id of memoryIds) {
    const type = result.data.memoryTypes.find(t => t.id === id);

    if (!type) {
      missing[id] = ['Memory type not found'];
      continue;
    }

    const required = type.inputs_scope.filter(v => !providedVars[v]);

    if (required.length > 0) {
      missing[id] = [`Missing variables: ${required.join(', ')}`];
    }
  }

  return Object.keys(missing).length === 0 ? null : missing;
}

const issues = await checkMemoryRequirements(
  ['episodic', 'semantic'],
  { input: 'test', userId: 'user-123' }
);

if (issues) {
  console.error('Memory requirement issues:', issues);
}
```

### Common Use Cases
**Discovery**: Find available memory types.
**Documentation**: Understand what each memory type provides.
**Validation**: Check if required variables are available.
**UI Building**: Create selectors for memory type configuration.

### Notes
- Returns all available memory types
- Use to understand requirements before assembly
- Check `inputs_scope` for required variables
- Check `additional_variables` for optional parameters