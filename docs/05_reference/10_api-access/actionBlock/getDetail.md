---
name: getDetail
cbbaseinfo:
  description: Retrieves detailed information about a specific ActionBlock including metadata, input parameters, and output structure.
cbparameters:
  parameters:
    - name: actionBlockName
      typeName: string
      description: The name of the ActionBlock to retrieve details for.
  returns:
    signatureTypeName: "Promise<GetActionBlockDetailResponse>"
    description: A promise that resolves to ActionBlock details.
    typeArgs: []
data:
  name: getDetail
  category: actionBlock
  link: getDetail.md
---
# getDetail

```typescript
codebolt.actionBlock.getDetail(actionBlockName: string): Promise<GetActionBlockDetailResponse>
```

Retrieves detailed information about a specific ActionBlock including metadata, input parameters, and output structure.
### Parameters

- **`actionBlockName`** (string): The name of the ActionBlock to retrieve details for.

### Returns

- **`Promise<[GetActionBlockDetailResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetActionBlockDetailResponse)>`**: A promise that resolves to ActionBlock details.

### Response Structure

Returns [`GetActionBlockDetailResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetActionBlockDetailResponse) with detailed ActionBlock information.

**Response Properties:**
- `type` (string): Always "getActionBlockDetailResponse"
- `success` (boolean): Operation success status
- `actionBlock` (ActionBlock, optional): Detailed ActionBlock object
  - `id` (string): Unique identifier
  - `name` (string): ActionBlock name
  - `description` (string): Detailed description
  - `version` (string): Version number
  - `entryPoint` (string): Entry point file
  - `path` (string): File system path
  - `type` (ActionBlockType): Type of ActionBlock
  - `metadata` (ActionBlockMetadata): Complete metadata
    - `author` (string, optional): Author information
    - `tags` (string[], optional): Categorization tags
    - `dependencies` (string[], optional): Required dependencies
    - `inputs` (ActionBlockInput[], optional): Input parameter definitions
    - `outputs` (ActionBlockOutput[], optional): Output definitions
- `error` (string, optional): Error details if failed

### Examples

#### Example 1: Get ActionBlock Details

```typescript
import codebolt from '@codebolt/codeboltjs';

const detail = await codebolt.actionBlock.getDetail('file-reader');

if (detail.success && detail.actionBlock) {
  console.log('ActionBlock Details:');
  console.log(`Name: ${detail.actionBlock.name}`);
  console.log(`Type: ${detail.actionBlock.type}`);
  console.log(`Version: ${detail.actionBlock.version}`);
  console.log(`Description: ${detail.actionBlock.description}`);
}
```

#### Example 2: Inspect Input Parameters

```typescript
const detail = await codebolt.actionBlock.getDetail('data-processor');

if (detail.actionBlock?.metadata.inputs) {
  console.log('Required Parameters:');
  detail.actionBlock.metadata.inputs
    .filter(input => input.required)
    .forEach(input => {
      console.log(`- ${input.name} (${input.type}): ${input.description}`);
    });

  console.log('\nOptional Parameters:');
  detail.actionBlock.metadata.inputs
    .filter(input => !input.required)
    .forEach(input => {
      const defaultVal = input.default !== undefined ? ` (default: ${input.default})` : '';
      console.log(`- ${input.name} (${input.type}): ${input.description}${defaultVal}`);
    });
}
```

#### Example 3: Build Parameter Validation

```typescript
const validateParams = async (actionBlockName: string, params: Record<string, any>) => {
  const detail = await codebolt.actionBlock.getDetail(actionBlockName);

  if (!detail.success || !detail.actionBlock?.metadata.inputs) {
    throw new Error('Failed to get ActionBlock details');
  }

  // Check required parameters
  const required = detail.actionBlock.metadata.inputs
    .filter(input => input.required)
    .map(input => input.name);

  const missing = required.filter(name => !(name in params));

  if (missing.length > 0) {
    throw new Error(`Missing required parameters: ${missing.join(', ')}`);
  }

  // Validate types
  for (const input of detail.actionBlock.metadata.inputs) {
    if (input.name in params) {
      const value = params[input.name];
      const expectedType = input.type;

      // Add type validation logic here
      console.log(`Validating ${input.name}: ${typeof value} vs ${expectedType}`);
    }
  }

  return true;
};

// Usage
await validateParams('file-reader', { path: '/path/to/file' });
```

#### Example 4: Build Execution Wrapper

```typescript
const executeWithValidation = async (
  actionBlockName: string,
  userParams: Record<string, any>
) => {
  // Get details
  const detail = await codebolt.actionBlock.getDetail(actionBlockName);

  if (!detail.success) {
    throw new Error('ActionBlock not found');
  }

  // Build parameters with defaults
  const params: Record<string, any> = {};

  detail.actionBlock?.metadata.inputs?.forEach(input => {
    if (input.default !== undefined) {
      params[input.name] = input.default;
    }
  });

  // Override with user params
  Object.assign(params, userParams);

  // Execute
  return await codebolt.actionBlock.start(actionBlockName, params);
};

const result = await executeWithValidation('file-reader', { path: 'data.txt' });
```

### Common Use Cases

#### Dynamic Form Builder

```typescript
const buildFormSchema = async (actionBlockName: string) => {
  const detail = await codebolt.actionBlock.getDetail(actionBlockName);

  if (!detail.success || !detail.actionBlock) {
    return null;
  }

  return {
    name: detail.actionBlock.name,
    description: detail.actionBlock.description,
    fields: detail.actionBlock.metadata.inputs?.map(input => ({
      name: input.name,
      type: mapTypeToFormType(input.type),
      label: input.name,
      description: input.description,
      required: input.required || false,
      defaultValue: input.default
    })) || []
  };
};

function mapTypeToFormType(type: string): string {
  const mapping: Record<string, string> = {
    'string': 'text',
    'number': 'number',
    'boolean': 'checkbox',
    'array': 'multiselect',
    'object': 'json'
  };
  return mapping[type] || 'text';
}
```

### Notes

- Use details to understand required parameters before execution
- Input schemas help build dynamic forms
- Output schemas help process results
- Check dependencies before execution
- Version information helps track compatibility
- Author information can indicate trust level
- Tags help categorize ActionBlocks
- Path information shows where the ActionBlock is stored
- Entry point indicates the main execution file