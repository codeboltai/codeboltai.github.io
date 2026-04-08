---
name: startWithCode
cbbaseinfo:
  description: Starts a side execution process using inline JavaScript code.
cbparameters:
  parameters:
    - name: inlineCode
      typeName: string
      description: JavaScript code to execute in the side process.
      isOptional: false
    - name: params
      typeName: "Record<string, any>"
      description: Optional parameters available in the execution context.
      isOptional: true
    - name: timeout
      typeName: number
      description: "Execution timeout in milliseconds (default: 5 minutes)."
      isOptional: true
  returns:
    signatureTypeName: "Promise<StartSideExecutionResponse>"
    description: A promise that resolves with the side execution ID and initial status.
    typeArgs: []
data:
  name: startWithCode
  category: sideExecution
  link: startWithCode.md
---
# startWithCode

```typescript
codebolt.sideExecution.startWithCode(inlineCode: string, params: Record<string, any>, timeout: number): Promise<StartSideExecutionResponse>
```

Starts a side execution process using inline JavaScript code.
### Parameters

- **`inlineCode`** (string): JavaScript code to execute in the side process.
- **`params`** (`Record<string, any>`, optional): Optional parameters available in the execution context.
- **`timeout`** (number, optional): Execution timeout in milliseconds (default: 5 minutes).

### Returns

- **`Promise<[StartSideExecutionResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartSideExecutionResponse)>`**: A promise that resolves with the side execution ID and initial status.

### Response Structure

The method returns a Promise that resolves to a [`StartSideExecutionResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/StartSideExecutionResponse) object with the following properties:

**Response Properties:**
- `type`: Always "startSideExecutionResponse"
- `data`: Object containing the execution details
  - `sideExecutionId`: Unique identifier for the execution
  - `code`: The inline code that was executed
  - `status`: Current status ('running', 'completed', 'failed', etc.)
  - `startTime`: Timestamp when execution started
  - `params`: Parameters passed to the execution
  - `timeout`: Timeout in milliseconds
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: Basic Inline Code Execution

```js
// Wait for connection
await codebolt.waitForReady();

// Execute simple inline code
const result = await codebolt.sideExecution.startWithCode(`
  console.log('Hello from side execution!');
  return { message: 'Execution completed' };
`);
console.log('✅ Execution started:', result.data.sideExecutionId);
```

**Explanation**: This example executes a simple JavaScript code snippet in a side process. The code can include any valid JavaScript and return a result.

#### Example 2: Execute with Parameters

```js
// Execute code with parameters
const result = await codebolt.sideExecution.startWithCode(
  `
  const { name, count } = params;
  const items = [];

  for (let i = 0; i < count; i++) {
    items.push({ id: i, name: \`\${name}-\${i}\` });
  }

  return { items, total: items.length };
  `,
  { name: 'item', count: 10 }
);
console.log('✅ Generated items:', result.data.sideExecutionId);
```

**Explanation**: This example shows how to pass parameters to inline code. The `params` object is available in the execution context.

#### Example 3: Data Processing

```js
// Process data in isolation
const rawData = [1, 2, 3, 4, 5];

const result = await codebolt.sideExecution.startWithCode(
  `
  const data = params.input;

  const processed = data.map(item => ({
    original: item,
    squared: item * item,
    cubed: item * item * item
  }));

  const sum = processed.reduce((acc, item) => acc + item.original, 0);

  return { processed, sum, count: processed.length };
  `,
  { input: rawData }
);
console.log('✅ Data processing started');
```

**Explanation**: This example demonstrates data processing using inline code. The data is transformed in the isolated side process.

#### Example 4: Async Operations

```js
// Execute async code with delays
const result = await codebolt.sideExecution.startWithCode(
  `
  async function processTask() {
    const steps = [];

    for (let i = 1; i <= 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      steps.push({ step: i, status: 'completed', timestamp: Date.now() });
    }

    return { steps, message: 'All steps completed' };
  }

  return await processTask();
  `,
  {},
  300000 // 5 minute timeout
);
console.log('✅ Async execution started');
```

**Explanation**: This example shows how to execute asynchronous code with delays. The side execution waits for async operations to complete.

#### Example 5: Error Handling in Inline Code

```js
// Execute code with error handling
const result = await codebolt.sideExecution.startWithCode(
  `
  try {
    const data = params.input;

    if (!data || data.length === 0) {
      throw new Error('Input data is empty');
    }

    const result = data.map(item => {
      if (item.value < 0) {
        throw new Error(\`Invalid value: \${item.value}\`);
      }
      return item.value * 2;
    });

    return { success: true, result };

  } catch (error) {
    return {
      success: false,
      error: error.message,
      stack: error.stack
    };
  }
  `,
  { input: [{ value: 1 }, { value: 2 }, { value: 3 }] }
);
console.log('✅ Code execution with error handling started');
```

**Explanation**: This example demonstrates proper error handling within inline code. Errors are caught and returned as part of the result.

#### Example 6: Complex Computation

```js
// Perform complex calculation without blocking main thread
const result = await codebolt.sideExecution.startWithCode(
  `
  const { iterations } = params;

  // Fibonacci calculation
  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const results = [];

  for (let i = 0; i < iterations; i++) {
    const start = Date.now();
    const fib = fibonacci(i + 30);
    const duration = Date.now() - start;

    results.push({
      n: i + 30,
      fibonacci: fib,
      duration: duration
    });
  }

  return {
    iterations: results.length,
    results: results,
    totalDuration: results.reduce((acc, r) => acc + r.duration, 0)
  };
  `,
  { iterations: 5 },
  600000 // 10 minute timeout for heavy computation
);
console.log('✅ Heavy computation started in side process');
```

**Explanation**: This example offloads a CPU-intensive computation to a side process, preventing it from blocking the main thread.

### Common Use Cases

**1. Data Transformation**: Quick data transformations.

```js
async function transformData(data, transformation) {
  const result = await codebolt.sideExecution.startWithCode(
    `
    const { input, transform } = params;

    const transformed = input.map(item => {
      switch (transform) {
        case 'uppercase':
          return item.toUpperCase();
        case 'lowercase':
          return item.toLowerCase();
        case 'reverse':
          return item.split('').reverse().join('');
        default:
          return item;
      }
    });

    return { transformed };
    `,
    { input: data, transform: transformation }
  );

  // Wait for completion and return result
  let status = await codebolt.sideExecution.getStatus(result.data.sideExecutionId);
  while (status.data.status === 'running') {
    await new Promise(resolve => setTimeout(resolve, 500));
    status = await codebolt.sideExecution.getStatus(result.data.sideExecutionId);
  }

  return status.data.result;
}

// Usage
const result = await transformData(['Hello', 'World'], 'uppercase');
```

**2. Validation**: Validate data against rules.

```js
async function validateData(data, rules) {
  const result = await codebolt.sideExecution.startWithCode(
    `
    const { data, rules } = params;

    const errors = [];

    for (const [key, rule] of Object.entries(rules)) {
      const value = data[key];

      if (rule.required && !value) {
        errors.push({ key, error: 'Required field is missing' });
        continue;
      }

      if (rule.type && typeof value !== rule.type) {
        errors.push({ key, error: \`Expected \${rule.type}, got \${typeof value}\` });
      }

      if (rule.min && value < rule.min) {
        errors.push({ key, error: \`Value below minimum \${rule.min}\` });
      }

      if (rule.max && value > rule.max) {
        errors.push({ key, error: \`Value above maximum \${rule.max}\` });
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
    `,
    { data, rules }
  );

  return result;
}

// Usage
const validation = await validateData(
  { age: 25, name: 'John' },
  { age: { required: true, type: 'number', min: 0, max: 150 } }
);
```

**3. Report Generation**: Generate reports from data.

```js
async function generateReport(data) {
  const result = await codebolt.sideExecution.startWithCode(
    `
    const { data } = params;

    const report = {
      generatedAt: new Date().toISOString(),
      summary: {
        total: data.length,
        processed: data.filter(i => i.status === 'processed').length,
        pending: data.filter(i => i.status === 'pending').length,
        failed: data.filter(i => i.status === 'failed').length
      },
      details: data
    };

    return report;
    `,
    { data }
  );

  return result;
}
```

**4. API Aggregation**: Call multiple APIs and aggregate results.

```js
async function aggregateAPIRequests(endpoints) {
  const result = await codebolt.sideExecution.startWithCode(
    `
    const { endpoints } = params;

    async function fetchAll() {
      const results = await Promise.all(
        endpoints.map(async endpoint => {
          try {
            const response = await fetch(endpoint);
            const data = await response.json();
            return { endpoint, success: true, data };
          } catch (error) {
            return { endpoint, success: false, error: error.message };
          }
        })
      );

      return results;
    }

    return await fetchAll();
    `,
    { endpoints }
  );

  return result;
}
```

**5. File Processing**: Process file contents.

```js
async function processFileContent(content, operations) {
  const result = await codebolt.sideExecution.startWithCode(
    `
    const { content, operations } = params;

    let lines = content.split('\\n');

    for (const op of operations) {
      switch (op.type) {
        case 'filter':
          lines = lines.filter(line => line.includes(op.keyword));
          break;
        case 'transform':
          lines = lines.map(line => line.replace(op.pattern, op.replacement));
          break;
        case 'sort':
          lines.sort();
          break;
        case 'reverse':
          lines.reverse();
          break;
        case 'deduplicate':
          lines = [...new Set(lines)];
          break;
      }
    }

    return {
      originalLines: content.split('\\n').length,
      processedLines: lines.length,
      content: lines.join('\\n')
    };
    `,
    { content, operations }
  );

  return result;
}
```

### Notes

- The `inlineCode` parameter must be a valid JavaScript string
- The code is executed in an isolated child process (Node.js environment)
- Parameters passed via `params` are available in the execution context
- The default timeout is 300000 milliseconds (5 minutes)
- The code can be synchronous or asynchronous (async/await supported)
- Return values from the code are available in the execution result
- Console.log statements in the code are captured and available via getStatus
- Errors in the code will cause the execution to fail with error details
- The code has access to standard Node.js APIs but not to the main process's memory
- Complex objects can be passed as parameters but must be serializable
- The execution environment is isolated; changes to global state don't affect the main process
- For long-running operations, implement progress reporting via console.log or returns
- The code cannot access files or network resources unless explicitly allowed
- Memory limits apply to the side execution process
- Use try-catch blocks within the code for graceful error handling
- The code string should be properly escaped when containing quotes or special characters
- Template literals can be used within the inline code for string interpolation