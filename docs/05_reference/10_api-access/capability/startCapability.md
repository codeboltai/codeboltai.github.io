---
name: startCapability
cbbaseinfo:
  description: Starts execution of a capability with optional parameters and custom timeout settings.
cbparameters:
  parameters:
    - name: capabilityName
      typeName: string
      description: The name of the capability to execute.
    - name: capabilityType
      typeName: CapabilityType
      description: "The type of capability (skill, power, talent, etc.)."
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the capability execution.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Optional execution timeout in milliseconds. If not provided, uses the capability's default timeout."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartCapabilityResponse>"
    description: A promise that resolves to the execution response containing the execution ID and initial status.
    typeArgs: []
data:
  name: startCapability
  category: capability
  link: startCapability.md
---
# startCapability

```typescript
codebolt.capability.startCapability(capabilityName: string, capabilityType: CapabilityType, params: Record<string, any>, timeout: number): Promise<StartCapabilityResponse>
```

Starts execution of a capability with optional parameters and custom timeout settings.
### Parameters

- **`capabilityName`** (string): The name of the capability to execute.
- **`capabilityType`** ([CapabilityType](/docs/api/11_doc-type-ref/codeboltjs/type-aliases/CapabilityType)): The type of capability (skill, power, talent, etc.).
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the capability execution.
- **`timeout`** (number, optional): Optional execution timeout in milliseconds. If not provided, uses the capability's default timeout.

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

#### Example 1: Basic Capability Execution

```typescript
import codebolt from '@codebolt/codeboltjs';

// Start a simple skill execution
const result = await codebolt.capability.startCapability(
  'data-processor',
  'skill'
);

if (result.success) {
  console.log('Execution started:', result.executionId);
  console.log('Initial status:', result.status);
} else {
  console.error('Failed to start capability:', result.error);
}
```

#### Example 2: Execute with Parameters

```typescript
// Execute with custom parameters
const execution = await codebolt.capability.startCapability(
  'image-resizer',
  'skill',
  {
    inputFile: 'image.png',
    width: 800,
    height: 600,
    quality: 90,
    format: 'jpeg'
  }
);

console.log('Processing image with ID:', execution.executionId);
```

#### Example 3: Execute with Custom Timeout

```typescript
// Start a long-running capability with extended timeout
const result = await codebolt.capability.startCapability(
  'video-processor',
  'power',
  {
    inputFile: 'video.mp4',
    outputFormat: 'webm',
    quality: 'high'
  },
  300000 // 5 minutes in milliseconds
);

console.log('Video processing started:', result.executionId);
```

#### Example 4: Execute and Monitor Status

```typescript
// Start execution and monitor progress
const startResult = await codebolt.capability.startCapability(
  'data-analyzer',
  'skill',
  { dataset: 'sales-data.csv' }
);

if (!startResult.success) {
  console.error('Failed to start:', startResult.error);
  return;
}

const executionId = startResult.executionId;
console.log('Monitoring execution:', executionId);

// Poll for completion
const monitorExecution = async (id: string) => {
  while (true) {
    const status = await codebolt.capability.getExecutionStatus(id);

    console.log('Status:', status.data?.status);

    if (status.data?.status === 'completed') {
      console.log('Execution completed:', status.data?.result);
      return status.data?.result;
    } else if (status.data?.status === 'failed') {
      console.error('Execution failed:', status.data?.error);
      throw new Error(status.data?.error);
    }

    // Wait before polling again
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

try {
  const result = await monitorExecution(executionId);
  console.log('Final result:', result);
} catch (error) {
  console.error('Execution error:', error);
}
```

#### Example 5: Batch Execution with Error Handling

```typescript
// Execute multiple capabilities in batch
const batch = [
  { name: 'processor1', type: 'skill' as const, params: { input: 'file1.csv' } },
  { name: 'processor2', type: 'skill' as const, params: { input: 'file2.csv' } },
  { name: 'analyzer', type: 'power' as const, params: { input: 'file3.csv' } }
];

const executions = await Promise.allSettled(
  batch.map(item =>
    codebolt.capability.startCapability(item.name, item.type, item.params)
  )
);

executions.forEach((result, index) => {
  if (result.status === 'fulfilled' && result.value.success) {
    console.log(`Batch ${index} started:`, result.value.executionId);
  } else {
    console.error(`Batch ${index} failed:`, result.reason);
  }
});
```

#### Example 6: Execute with Timeout and Cancellation

```typescript
// Start execution with ability to cancel on timeout
const executeWithTimeout = async (
  capabilityName: string,
  type: CapabilityType,
  params: Record<string, any>,
  timeout: number
) => {
  // Start the execution
  const result = await codebolt.capability.startCapability(
    capabilityName,
    type,
    params,
    timeout
  );

  if (!result.success) {
    throw new Error(result.error);
  }

  const executionId = result.executionId;

  // Set up timeout to stop execution if it takes too long
  const timeoutId = setTimeout(async () => {
    console.log('Timeout reached, stopping execution...');
    await codebolt.capability.stopCapability(executionId);
  }, timeout);

  // Monitor execution
  const status = await codebolt.capability.getExecutionStatus(executionId);

  if (status.data?.status === 'completed' || status.data?.status === 'failed') {
    clearTimeout(timeoutId);
  }

  return { executionId, status };
};

// Usage
const { executionId, status } = await executeWithTimeout(
  'long-running-task',
  'power',
  { dataset: 'huge-dataset.csv' },
  120000 // 2 minutes
);

console.log('Execution status:', status);
```

### Common Use Cases

#### 1. Data Processing Pipeline

Execute a sequence of capabilities:

```typescript
const runDataPipeline = async (inputFile: string) => {
  // Step 1: Validate input
  const validation = await codebolt.capability.startCapability(
    'data-validator',
    'skill',
    { inputFile }
  );

  if (!validation.success) {
    throw new Error('Validation failed');
  }

  // Step 2: Transform data
  const transform = await codebolt.capability.startCapability(
    'data-transformer',
    'skill',
    { inputFile, outputFormat: 'json' }
  );

  // Step 3: Analyze results
  const analysis = await codebolt.capability.startCapability(
    'data-analyzer',
    'power',
    { source: transform.executionId }
  );

  return analysis;
};
```

#### 2. Parallel Task Execution

Run multiple capabilities concurrently:

```typescript
const parallelProcessing = async (files: string[]) => {
  const executions = await Promise.all(
    files.map(file =>
      codebolt.capability.startCapability(
        'file-processor',
        'skill',
        { inputFile: file }
      )
    )
  );

  // Wait for all to complete
  const results = await Promise.all(
    executions.map(exec =>
      codebolt.capability.getExecutionStatus(exec.executionId)
    )
  );

  return results;
};
```

#### 3. Conditional Execution

Execute based on conditions:

```typescript
const smartProcessor = async (file: string) => {
  // Check file type
  const typeCheck = await codebolt.capability.startCapability(
    'file-type-detector',
    'skill',
    { file }
  );

  const fileType = typeCheck.result?.type;

  // Choose appropriate processor
  if (fileType === 'image') {
    return await codebolt.capability.startCapability(
      'image-processor',
      'skill',
      { file }
    );
  } else if (fileType === 'document') {
    return await codebolt.capability.startCapability(
      'document-processor',
      'skill',
      { file }
    );
  } else {
    throw new Error('Unsupported file type');
  }
};
```

### Notes

- The `executionId` is essential for monitoring and managing the execution
- Timeout is specified in milliseconds (1000ms = 1 second, 60000ms = 1 minute)
- If timeout is not provided, the capability's default timeout is used
- Parameters should match the capability's expected input schema
- Execution is asynchronous; use `getExecutionStatus()` to check progress
- Long-running capabilities may return immediately with an `executionId`
- Some capabilities may execute synchronously and return results immediately
- Use `stopCapability()` to cancel running executions if needed
- Multiple executions of the same capability can run concurrently
- Parameters are passed as-is; ensure proper type formatting
- The execution remains active until completion, timeout, or manual stop
- Monitor execution status to handle failures or timeouts appropriately
- Large parameter values may impact performance; consider using file references
- Execution timeouts are enforced on the server side
- Network issues may cause status checks to fail; implement retry logic
- Consider using shorter timeouts for user-facing operations