---
name: startPower
cbbaseinfo:
  description: Starts execution of a power with optional parameters and timeout settings. Powers are advanced capabilities with enhanced functionality.
cbparameters:
  parameters:
    - name: powerName
      typeName: string
      description: The name of the power to execute.
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the power execution.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Optional execution timeout in milliseconds. If not provided, uses the power's default timeout."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartCapabilityResponse>"
    description: A promise that resolves to the execution response containing the execution ID and initial status.
    typeArgs: []
data:
  name: startPower
  category: capability
  link: startPower.md
---
# startPower

```typescript
codebolt.capability.startPower(powerName: string, params: Record<string, any>, timeout: number): Promise<StartCapabilityResponse>
```

Starts execution of a power with optional parameters and timeout settings. Powers are advanced capabilities with enhanced functionality.
### Parameters

- **`powerName`** (string): The name of the power to execute.
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the power execution.
- **`timeout`** (number, optional): Optional execution timeout in milliseconds. If not provided, uses the power's default timeout.

### Returns

- **`Promise<[StartCapabilityResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse)>`**: A promise that resolves to the execution response containing the execution ID and initial status.

### Response Structure

The method returns a Promise that resolves to a [`StartCapabilityResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartCapabilityResponse) object.

**Response Properties:**
- `type` (string): Always "startCapabilityResponse"
- `success` (boolean): Indicates if the execution started successfully
- `executionId` (string, optional): Unique identifier for the execution instance
- `status` (string, optional): Initial execution status
- `result` (any, optional): Immediate result if execution completed synchronously
- `error` (string, optional): Error details if the operation failed

### Examples

#### Example 1: Execute a Power

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.capability.startPower('advanced-processor', {
  input: 'large-dataset.csv',
  mode: 'distributed'
});

if (result.success) {
  console.log('Power execution started:', result.executionId);
}
```

#### Example 2: Long-Running Power with Timeout

```typescript
const execution = await codebolt.capability.startPower(
  'ml-model-trainer',
  {
    dataset: 'training-data.csv',
    algorithm: 'neural-network',
    epochs: 100
  },
  600000 // 10 minutes
);

console.log('Training started:', execution.executionId);
```

#### Example 3: Monitor Power Execution

```typescript
const startPower = await codebolt.capability.startPower('data-miner', {
  source: 'database',
  depth: 5
});

// Monitor progress
while (true) {
  const status = await codebolt.capability.getExecutionStatus(startPower.executionId);

  console.log('Progress:', status.data?.progress, 'Status:', status.data?.status);

  if (status.data?.status === 'completed') {
    console.log('Result:', status.data?.result);
    break;
  } else if (status.data?.status === 'failed') {
    console.error('Failed:', status.data?.error);
    break;
  }

  await new Promise(resolve => setTimeout(resolve, 5000));
}
```

### Common Use Cases

#### Machine Learning Operations

```typescript
const trainModel = async (data: string) => {
  const training = await codebolt.capability.startPower('ml-trainer', {
    dataset: data,
    modelType: 'classification',
    validationSplit: 0.2
  });

  return training.executionId;
};
```

#### Advanced Data Processing

```typescript
const processBigData = async (source: string) => {
  const result = await codebolt.capability.startPower('distributed-processor', {
    source,
    nodes: 4,
    memory: '8GB'
  });

  return result;
};
```

### Notes

- Powers are more resource-intensive than skills
- Typically require longer timeouts
- May have higher memory and CPU requirements
- Use for complex, multi-step operations
- Monitor execution status regularly for long-running powers