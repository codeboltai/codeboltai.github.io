---
name: getCapabilityDetail
cbbaseinfo:
  description: Retrieves detailed information about a specific capability including its metadata, input parameters, output structure, and execution requirements.
cbparameters:
  parameters:
    - name: capabilityName
      typeName: string
      description: The name of the capability to retrieve details for.
    - name: capabilityType
      typeName: CapabilityType
      description: Optional type to narrow the search and ensure correct capability retrieval.
      isOptional: true
  returns:
    signatureTypeName: "Promise<GetCapabilityDetailResponse>"
    description: A promise that resolves to detailed information about the specified capability.
    typeArgs: []
data:
  name: getCapabilityDetail
  category: capability
  link: getCapabilityDetail.md
---
# getCapabilityDetail

```typescript
codebolt.capability.getCapabilityDetail(capabilityName: string, capabilityType: CapabilityType): Promise<GetCapabilityDetailResponse>
```

Retrieves detailed information about a specific capability including its metadata, input parameters, output structure, and execution requirements.
### Parameters

- **`capabilityName`** (string): The name of the capability to retrieve details for.
- **`capabilityType`** ([CapabilityType](/docs/api/11_doc-type-ref/codeboltjs/type-aliases/CapabilityType), optional): Optional type to narrow the search and ensure correct capability retrieval.

### Returns

- **`Promise<[GetCapabilityDetailResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetCapabilityDetailResponse)>`**: A promise that resolves to detailed information about the specified capability.

### Response Structure

The method returns a Promise that resolves to a [`GetCapabilityDetailResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/GetCapabilityDetailResponse) object with the following properties:

**Response Properties:**
- `type` (string): Always "getCapabilityDetailResponse"
- `success` (boolean): Indicates if the operation was successful
- `capability` (Capability, optional): Detailed capability object
  - `id` (string): Unique identifier
  - `name` (string): Capability name
  - `type` (CapabilityType): Type of capability
  - `description` (string): Detailed description
  - `author` (string, optional): Author information
  - `version` (string, optional): Version number
  - `tags` (string[], optional): Associated tags
  - `metadata` (CapabilityMetadata, optional): Detailed metadata
    - `inputs` (CapabilityInput[], optional): Input parameters
      - `name` (string): Parameter name
      - `type` (string): Parameter type
      - `description` (string, optional): Parameter description
      - `required` (boolean, optional): Whether parameter is required
      - `default` (any, optional): Default value
    - `outputs` (CapabilityOutput[], optional): Output structure
      - `name` (string): Output name
      - `type` (string): Output type
      - `description` (string, optional): Output description
    - `dependencies` (string[], optional): Required dependencies
    - `timeout` (number, optional): Default timeout in milliseconds
- `error` (string, optional): Error details if the operation failed
- `requestId` (string, optional): Unique request identifier

### Examples

#### Example 1: Get Basic Capability Details

```typescript
import codebolt from '@codebolt/codeboltjs';

// Get details for a skill
const result = await codebolt.capability.getCapabilityDetail('data-processor', 'skill');

if (result.success && result.capability) {
  console.log('Capability Details:');
  console.log(`Name: ${result.capability.name}`);
  console.log(`Type: ${result.capability.type}`);
  console.log(`Description: ${result.capability.description}`);
  console.log(`Version: ${result.capability.version}`);
  console.log(`Author: ${result.capability.author}`);
} else {
  console.error('Failed to get capability details:', result.error);
}
```

#### Example 2: Inspect Input Parameters

```typescript
// Get capability details to understand required parameters
const detail = await codebolt.capability.getCapabilityDetail('image-resizer', 'skill');

if (detail.capability?.metadata?.inputs) {
  console.log('Required Parameters:');
  detail.capability.metadata.inputs
    .filter(input => input.required)
    .forEach(input => {
      console.log(`- ${input.name} (${input.type}): ${input.description || 'No description'}`);
    });

  console.log('\nOptional Parameters:');
  detail.capability.metadata.inputs
    .filter(input => !input.required)
    .forEach(input => {
      const defaultVal = input.default !== undefined ? ` (default: ${input.default})` : '';
      console.log(`- ${input.name} (${input.type}): ${input.description || 'No description'}${defaultVal}`);
    });
}
```

#### Example 3: Understand Output Structure

```typescript
// Get details to understand what the capability returns
const result = await codebolt.capability.getCapabilityDetail('csv-analyzer', 'skill');

if (result.capability?.metadata?.outputs) {
  console.log('Output Structure:');
  result.capability.metadata.outputs.forEach(output => {
    console.log(`- ${output.name} (${output.type}): ${output.description || 'No description'}`);
  });

  // Prepare output parsing logic
  const outputTypes = result.capability.metadata.outputs.map(o => o.type);
  console.log('Expected output types:', outputTypes);
}
```

#### Example 4: Check Dependencies and Requirements

```typescript
// Check if capability has dependencies
const detail = await codebolt.capability.getCapabilityDetail('advanced-processor', 'power');

if (detail.capability?.metadata?.dependencies) {
  console.log('Required Dependencies:');
  detail.capability.metadata.dependencies.forEach(dep => {
    console.log(`- ${dep}`);
  });

  // Verify dependencies are available
  const dependenciesAvailable = await checkDependencies(detail.capability.metadata.dependencies);
  if (!dependenciesAvailable) {
    console.error('Missing required dependencies');
  }
}

async function checkDependencies(dependencies: string[]): Promise<boolean> {
  // Implement dependency checking logic
  return true;
}
```

#### Example 5: Build Dynamic Execution Form

```typescript
// Create a dynamic form based on capability metadata
const buildExecutionForm = async (capabilityName: string, type: CapabilityType) => {
  const detail = await codebolt.capability.getCapabilityDetail(capabilityName, type);

  if (!detail.success || !detail.capability?.metadata?.inputs) {
    throw new Error('Failed to get capability details');
  }

  const form = {
    capabilityName: detail.capability.name,
    capabilityType: detail.capability.type,
    fields: detail.capability.metadata.inputs.map(input => ({
      name: input.name,
      type: input.type,
      label: input.name,
      description: input.description,
      required: input.required || false,
      defaultValue: input.default
    }))
  };

  return form;
};

// Usage
const form = await buildExecutionForm('image-converter', 'skill');
console.log('Dynamic form schema:', form);
```

#### Example 6: Validate Parameters Before Execution

```typescript
// Validate parameters against capability schema
const validateAndExecute = async (
  capabilityName: string,
  type: CapabilityType,
  params: Record<string, any>
) => {
  // Get capability details
  const detail = await codebolt.capability.getCapabilityDetail(capabilityName, type);

  if (!detail.success || !detail.capability?.metadata?.inputs) {
    throw new Error('Failed to get capability details');
  }

  // Validate required parameters
  const requiredParams = detail.capability.metadata.inputs
    .filter(input => input.required)
    .map(input => input.name);

  const missingParams = requiredParams.filter(param => !(param in params));

  if (missingParams.length > 0) {
    throw new Error(`Missing required parameters: ${missingParams.join(', ')}`);
  }

  // Validate parameter types
  for (const input of detail.capability.metadata.inputs) {
    if (input.name in params) {
      const paramValue = params[input.name];
      // Add type validation logic based on input.type
      console.log(`Validating ${input.name}: ${typeof paramValue} vs ${input.type}`);
    }
  }

  // Execute with validated parameters
  return await codebolt.capability.startCapability(capabilityName, type, params);
};

// Usage
try {
  const result = await validateAndExecute(
    'data-processor',
    'skill',
    { input: 'data.csv', format: 'json' }
  );
  console.log('Execution result:', result);
} catch (error) {
  console.error('Validation failed:', error);
}
```

### Common Use Cases

#### 1. Capability Discovery and Documentation

Generate documentation for capabilities:

```typescript
const generateCapabilityDocs = async (capabilityName: string, type: CapabilityType) => {
  const detail = await codebolt.capability.getCapabilityDetail(capabilityName, type);

  if (!detail.success || !detail.capability) {
    return null;
  }

  const docs = {
    name: detail.capability.name,
    type: detail.capability.type,
    description: detail.capability.description,
    version: detail.capability.version,
    author: detail.capability.author,
    tags: detail.capability.tags,
    inputs: detail.capability.metadata?.inputs || [],
    outputs: detail.capability.metadata?.outputs || [],
    dependencies: detail.capability.metadata?.dependencies || []
  };

  return docs;
};
```

#### 2. Dynamic Parameter Builder

Build parameter objects with defaults:

```typescript
const buildParameters = async (capabilityName: string, type: CapabilityType, userParams: Record<string, any>) => {
  const detail = await codebolt.capability.getCapabilityDetail(capabilityName, type);

  if (!detail.success || !detail.capability?.metadata?.inputs) {
    return userParams;
  }

  // Start with defaults
  const params: Record<string, any> = {};

  detail.capability.metadata.inputs.forEach(input => {
    if (input.default !== undefined) {
      params[input.name] = input.default;
    }
  });

  // Override with user-provided values
  return { ...params, ...userParams };
};

// Usage
const params = await buildParameters('image-resizer', 'skill', { width: 800 });
console.log('Built parameters:', params); // Includes defaults + user overrides
```

#### 3. Capability Compatibility Check

Check if capability meets requirements:

```typescript
const checkCapabilityCompatibility = async (
  capabilityName: string,
  type: CapabilityType,
  requirements: { tags?: string[]; maxTimeout?: number }
) => {
  const detail = await codebolt.capability.getCapabilityDetail(capabilityName, type);

  if (!detail.success || !detail.capability) {
    return { compatible: false, reason: 'Capability not found' };
  }

  // Check tag requirements
  if (requirements.tags) {
    const hasAllTags = requirements.tags.every(tag =>
      detail.capability?.tags?.includes(tag)
    );
    if (!hasAllTags) {
      return { compatible: false, reason: 'Missing required tags' };
    }
  }

  // Check timeout requirements
  if (requirements.maxTimeout) {
    const defaultTimeout = detail.capability.metadata?.timeout || 30000;
    if (defaultTimeout > requirements.maxTimeout) {
      return { compatible: false, reason: 'Timeout exceeds maximum allowed' };
    }
  }

  return { compatible: true, capability: detail.capability };
};
```

### Notes

- Providing `capabilityType` is recommended when capability names might be ambiguous
- If multiple capabilities share the same name, `capabilityType` helps identify the correct one
- The metadata field may be empty for simpler capabilities
- Input and output schemas provide type information but don't validate at runtime
- Dependencies indicate other capabilities or system requirements needed
- Version information helps track capability updates and changes
- Author information can be used for filtering or verification
- Tags are useful for categorization and discovery
- This operation is useful for building dynamic UIs or validation systems
- Use this information to prepare proper parameters before calling `startCapability()`
- Timeout values are in milliseconds
- Capability details may include execution hints or best practices in the description