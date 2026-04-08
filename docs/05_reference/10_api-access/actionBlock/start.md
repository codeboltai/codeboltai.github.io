---
name: start
cbbaseinfo:
  description: Starts execution of an ActionBlock by name with optional parameters.
cbparameters:
  parameters:
    - name: actionBlockName
      typeName: string
      description: The name of the ActionBlock to start.
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters to pass to the ActionBlock.
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartActionBlockResponse>"
    description: A promise that resolves to the execution result.
    typeArgs: []
data:
  name: start
  category: actionBlock
  link: start.md
---
# start

```typescript
codebolt.actionBlock.start(actionBlockName: string, params: Record<string, any>): Promise<StartActionBlockResponse>
```

Starts execution of an ActionBlock by name with optional parameters.
### Parameters

- **`actionBlockName`** (string): The name of the ActionBlock to start.
- **`params`** (`Record<string, any>`, optional): Optional parameters to pass to the ActionBlock.

### Returns

- **`Promise<[StartActionBlockResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartActionBlockResponse)>`**: A promise that resolves to the execution result.

### Response Structure

Returns [`StartActionBlockResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartActionBlockResponse) with execution result.

**Response Properties:**
- `type` (string): Always "startActionBlockResponse"
- `success` (boolean): Operation success status
- `sideExecutionId` (string, optional): Execution ID for tracking
- `result` (any, optional): Execution result data
- `error` (string, optional): Error details if failed
- `requestId` (string, optional): Unique request identifier

### Examples

#### Example 1: Execute Simple ActionBlock

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.actionBlock.start('file-reader', {
  path: '/path/to/file.txt'
});

if (result.success) {
  console.log('File content:', result.result);
} else {
  console.error('Execution failed:', result.error);
}
```

#### Example 2: Execute with Multiple Parameters

```typescript
const result = await codebolt.actionBlock.start('data-processor', {
  input: 'raw-data.csv',
  output: 'processed-data.json',
  transformations: ['clean', 'normalize', 'validate'],
  options: {
    skipErrors: true,
    maxRows: 10000
  }
});

console.log('Processing complete:', result.sideExecutionId);
```

#### Example 3: Chain ActionBlocks

```typescript
// Execute a workflow using multiple ActionBlocks
const workflow = async (inputFile: string) => {
  // Step 1: Read file
  const step1 = await codebolt.actionBlock.start('file-reader', {
    path: inputFile
  });

  if (!step1.success) throw new Error('Failed to read file');

  // Step 2: Process data
  const step2 = await codebolt.actionBlock.start('data-transformer', {
    data: step1.result,
    transform: 'normalize'
  });

  if (!step2.success) throw new Error('Failed to transform data');

  // Step 3: Save result
  const step3 = await codebolt.actionBlock.start('file-writer', {
    path: 'output.json',
    data: step2.result
  });

  return step3;
};

const result = await workflow('input.csv');
```

#### Example 4: Error Handling

```typescript
const executeWithErrorHandling = async (
  actionBlockName: string,
  params: Record<string, any>
) => {
  try {
    const result = await codebolt.actionBlock.start(actionBlockName, params);

    if (!result.success) {
      console.error('Execution failed:', result.error);
      return null;
    }

    console.log('Execution ID:', result.sideExecutionId);
    return result.result;
  } catch (error) {
    console.error('Unexpected error:', error);
    return null;
  }
};

const result = await executeWithErrorHandling('file-reader', { path: 'data.txt' });
```

#### Example 5: Parallel Execution

```typescript
const processMultipleFiles = async (files: string[]) => {
  const results = await Promise.allSettled(
    files.map(file =>
      codebolt.actionBlock.start('file-reader', { path: file })
    )
  );

  results.forEach((result, index) => {
    if (result.status === 'fulfilled' && result.value.success) {
      console.log(`File ${index}: OK`);
    } else {
      console.error(`File ${index}: Failed`);
    }
  });

  return results;
};

const results = await processMultipleFiles(['file1.txt', 'file2.txt', 'file3.txt']);
```

#### Example 6: Conditional Execution

```typescript
const smartProcessor = async (file: string) => {
  // Detect file type
  const detect = await codebolt.actionBlock.start('file-type-detector', {
    path: file
  });

  const fileType = detect.result?.type;

  // Choose appropriate processor
  if (fileType === 'image') {
    return await codebolt.actionBlock.start('image-processor', { file });
  } else if (fileType === 'document') {
    return await codebolt.actionBlock.start('document-processor', { file });
  } else if (fileType === 'data') {
    return await codebolt.actionBlock.start('data-processor', { file });
  } else {
    throw new Error(`Unsupported file type: ${fileType}`);
  }
};
```

### Common Use Cases

#### File Operations

```typescript
// Read file
const content = await codebolt.actionBlock.start('file-reader', {
  path: 'data.json'
});

// Write file
await codebolt.actionBlock.start('file-writer', {
  path: 'output.json',
  data: { key: 'value' }
});

// Delete file
await codebolt.actionBlock.start('file-deleter', {
  path: 'temp.txt'
});
```

#### Data Processing

```typescript
// Process data
const result = await codebolt.actionBlock.start('data-processor', {
  input: rawData,
  operations: ['filter', 'sort', 'transform']
});

// Validate data
const validation = await codebolt.actionBlock.start('data-validator', {
  data: result,
  schema: 'user-schema'
});
```

#### Batch Operations

```typescript
const batchProcess = async (items: any[]) => {
  const batchSize = 10;

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    await codebolt.actionBlock.start('batch-processor', {
      items: batch,
      operation: 'transform'
    });

    console.log(`Processed batch ${i / batchSize + 1}`);
  }
};
```

### Notes

- ActionBlock names are case-sensitive
- Parameters must match the ActionBlock's expected input schema
- Use `getDetail()` to understand required parameters
- Execution returns immediately with an execution ID for async operations
- Some ActionBlocks may execute synchronously
- Consider error handling for robust workflows
- ActionBlocks can be chained together for complex workflows
- Multiple ActionBlocks can execute in parallel
- Use meaningful parameter names for better debugging
- Large data should use file references rather than inline values
- Execution IDs can be used for tracking and monitoring