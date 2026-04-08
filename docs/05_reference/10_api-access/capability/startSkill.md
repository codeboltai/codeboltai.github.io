---
name: startSkill
cbbaseinfo:
  description: "Starts execution of a skill with optional parameters and timeout settings. This is a convenience method for startCapability with type 'skill'."
cbparameters:
  parameters:
    - name: skillName
      typeName: string
      description: The name of the skill to execute.
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the skill execution.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Optional execution timeout in milliseconds. If not provided, uses the skill's default timeout."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartCapabilityResponse>"
    description: A promise that resolves to the execution response containing the execution ID and initial status.
    typeArgs: []
data:
  name: startSkill
  category: capability
  link: startSkill.md
---
# startSkill

```typescript
codebolt.capability.startSkill(skillName: string, params: Record<string, any>, timeout: number): Promise<StartCapabilityResponse>
```

Starts execution of a skill with optional parameters and timeout settings. This is a convenience method for startCapability with type 'skill'.
### Parameters

- **`skillName`** (string): The name of the skill to execute.
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the skill execution.
- **`timeout`** (number, optional): Optional execution timeout in milliseconds. If not provided, uses the skill's default timeout.

### Returns

- **`Promise<[StartCapabilityResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse)>`**: A promise that resolves to the execution response containing the execution ID and initial status.

### Response Structure

The method returns a Promise that resolves to a [`StartCapabilityResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse) object with the following properties:

**Response Properties:**
- `type` (string): Always "startCapabilityResponse"
- `success` (boolean): Indicates if the execution started successfully
- `executionId` (string, optional): Unique identifier for the execution instance
- `status` (string, optional): Initial execution status (pending, running, etc.)
- `result` (any, optional): Immediate result if execution completed synchronously
- `error` (string, optional): Error details if the operation failed
- `requestId` (string, optional): Unique request identifier

### Examples

#### Example 1: Basic Skill Execution

```typescript
import codebolt from '@codebolt/codeboltjs';

// Execute a simple skill
const result = await codebolt.capability.startSkill('text-analyzer');

if (result.success) {
  console.log('Skill execution started:', result.executionId);
  console.log('Status:', result.status);
} else {
  console.error('Failed to start skill:', result.error);
}
```

#### Example 2: Execute with Parameters

```typescript
// Run a skill with custom parameters
const execution = await codebolt.capability.startSkill(
  'file-converter',
  {
    inputFile: 'document.pdf',
    outputFormat: 'docx',
    preserveFormatting: true
  }
);

console.log('Conversion started with ID:', execution.executionId);
```

#### Example 3: Execute with Timeout

```typescript
// Run a skill with custom timeout
const result = await codebolt.capability.startSkill(
  'data-processor',
  {
    dataset: 'large-dataset.csv',
    operations: ['clean', 'transform', 'validate']
  },
  60000 // 60 seconds
);

console.log('Processing started:', result.executionId);
```

#### Example 4: Process Text with Skill

```typescript
// Use a text processing skill
const textResult = await codebolt.capability.startSkill(
  'text-summarizer',
  {
    text: 'Long text content to summarize...',
    maxLength: 200,
    style: 'concise'
  }
);

if (textResult.success) {
  console.log('Summary:', textResult.result);
}
```

#### Example 5: Image Processing Workflow

```typescript
// Chain multiple skills for image processing
const workflow = async (imagePath: string) => {
  // Step 1: Resize image
  const resize = await codebolt.capability.startSkill(
    'image-resizer',
    {
      input: imagePath,
      width: 800,
      height: 600,
      maintainAspectRatio: true
    }
  );

  if (!resize.success) {
    throw new Error('Resize failed');
  }

  // Step 2: Apply filters
  const filter = await codebolt.capability.startSkill(
    'image-filter',
    {
      input: resize.result?.outputPath,
      filter: 'grayscale',
      intensity: 0.8
    }
  );

  if (!filter.success) {
    throw new Error('Filter failed');
  }

  // Step 3: Optimize
  const optimize = await codebolt.capability.startSkill(
    'image-optimizer',
    {
      input: filter.result?.outputPath,
      quality: 85,
      format: 'webp'
    }
  );

  return optimize;
};

const result = await workflow('input.jpg');
console.log('Workflow completed:', result.executionId);
```

#### Example 6: Error Handling and Retry Logic

```typescript
// Execute skill with retry logic
const executeWithRetry = async (
  skillName: string,
  params: Record<string, any>,
  maxRetries = 3
) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await codebolt.capability.startSkill(skillName, params);

      if (result.success) {
        console.log(`Attempt ${attempt} succeeded`);

        // Monitor execution
        const status = await codebolt.capability.getExecutionStatus(result.executionId);

        if (status.data?.status === 'completed') {
          return status.data.result;
        } else if (status.data?.status === 'failed') {
          throw new Error(status.data?.error || 'Execution failed');
        }
      } else {
        throw new Error(result.error || 'Unknown error');
      }
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);

      if (attempt === maxRetries) {
        throw error;
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
};

// Usage
try {
  const result = await executeWithRetry(
    'unreliable-skill',
    { input: 'data.csv' }
  );
  console.log('Final result:', result);
} catch (error) {
  console.error('All attempts failed:', error);
}
```

### Common Use Cases

#### 1. Data Validation

Validate data using a skill:

```typescript
const validateData = async (data: any) => {
  const result = await codebolt.capability.startSkill(
    'json-validator',
    {
      data: JSON.stringify(data),
      schema: 'user-schema'
    }
  );

  return result.success && result.result?.valid === true;
};

const isValid = await validateData({ name: 'John', age: 30 });
console.log('Data valid:', isValid);
```

#### 2. Format Conversion

Convert between different formats:

```typescript
const convertFormat = async (input: string, fromFormat: string, toFormat: string) => {
  const result = await codebolt.capability.startSkill(
    'format-converter',
    {
      input,
      fromFormat,
      toFormat,
      preserveStructure: true
    }
  );

  if (result.success) {
    return result.result?.output;
  } else {
    throw new Error(result.error);
  }
};

const json = await convertFormat('data.xml', 'xml', 'json');
console.log('Converted data:', json);
```

#### 3. Content Analysis

Analyze content using skills:

```typescript
const analyzeContent = async (content: string) => {
  const sentiment = await codebolt.capability.startSkill(
    'sentiment-analyzer',
    { text: content }
  );

  const keywords = await codebolt.capability.startSkill(
    'keyword-extractor',
    { text: content, limit: 10 }
  );

  return {
    sentiment: sentiment.result?.score,
    keywords: keywords.result?.keywords
  };
};

const analysis = await analyzeContent('Great product, highly recommended!');
console.log('Analysis:', analysis);
```

#### 4. File Operations

Process files using skills:

```typescript
const processFile = async (filePath: string) => {
  // Get file info
  const info = await codebolt.capability.startSkill(
    'file-info',
    { path: filePath }
  );

  console.log('File info:', info.result);

  // Extract metadata
  const metadata = await codebolt.capability.startSkill(
    'metadata-extractor',
    { file: filePath }
  );

  console.log('Metadata:', metadata.result);

  return { info: info.result, metadata: metadata.result };
};
```

### Notes

- `startSkill()` is equivalent to `startCapability(skillName, 'skill', params, timeout)`
- Skills are typically lighter-weight operations compared to powers
- Default timeout is usually 30 seconds if not specified
- Skill names are case-sensitive
- Parameters must match the skill's expected input schema
- Use `getCapabilityDetail()` to understand required parameters
- Execution is asynchronous; monitor with `getExecutionStatus()`
- Skills can be chained together for complex workflows
- Multiple skill executions can run in parallel
- Consider the skill's execution time when setting timeouts
- Skills may have rate limits or concurrency restrictions
- Use meaningful parameter names for better debugging
- Large parameter values should use file references instead of inline data
- Skill results can be used as inputs to other skills
- Always check `success` property before accessing `result`
- Handle timeouts gracefully with appropriate error messages
- Skills may return partial results even on failure
- Consider implementing a timeout wrapper for additional safety