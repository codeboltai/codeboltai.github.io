---
cbapicategory:
  - name: list
    link: /docs/api/apiaccess/actionblock/list
    description: "Lists all available ActionBlocks with optional filtering by type (filesystem, runtime, or builtin)."
  - name: getDetail
    link: /docs/api/apiaccess/actionblock/getDetail
    description: Retrieves detailed information about a specific ActionBlock including metadata, inputs, and outputs.
  - name: start
    link: /docs/api/apiaccess/actionblock/start
    description: Starts execution of an ActionBlock by name with optional parameters.
---

# ActionBlock API

The ActionBlock API provides functionality for managing and executing ActionBlocks, which are reusable, executable code blocks that can perform specific tasks within the Codebolt system.

## Overview

The ActionBlock module enables you to:
- **Discover**: List and search available ActionBlocks by type
- **Inspect**: Get detailed information about ActionBlock capabilities
- **Execute**: Run ActionBlocks with custom parameters
- **Integrate**: Use ActionBlocks as building blocks for complex workflows

## ActionBlock Types

The system supports three types of ActionBlocks:

- **Filesystem**: ActionBlocks that interact with the file system
- **Runtime**: ActionBlocks that perform runtime operations
- **Builtin**: Built-in system ActionBlocks for common tasks

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Initialize connection
await codebolt.waitForReady();

// List available ActionBlocks
const blocks = await codebolt.actionBlock.list();
console.log('Available ActionBlocks:', blocks.actionBlocks);

// Get details about a specific ActionBlock
const detail = await codebolt.actionBlock.getDetail('file-reader');
console.log('ActionBlock details:', detail.actionBlock);

// Execute an ActionBlock
const result = await codebolt.actionBlock.start('file-reader', {
  path: '/path/to/file.txt'
});

console.log('Execution result:', result);
```

## Response Structure

All ActionBlock API functions return responses with a consistent structure:

```typescript
{
  type: 'responseType',
  success: boolean,
  data?: any,
  error?: string,
  requestId?: string
}
```

## Common Use Cases

### 1. File Operations

```typescript
// List filesystem ActionBlocks
const fsBlocks = await codebolt.actionBlock.list({ type: 'filesystem' });

// Execute a file reader
const content = await codebolt.actionBlock.start('file-reader', {
  path: 'data.json'
});
```

### 2. Data Processing

```typescript
// Get ActionBlock details to understand parameters
const detail = await codebolt.actionBlock.getDetail('data-processor');

// Execute with parameters
const result = await codebolt.actionBlock.start('data-processor', {
  input: 'raw-data.csv',
  output: 'processed-data.json',
  transformations: ['clean', 'normalize', 'validate']
});
```

### 3. Workflow Automation

```typescript
// Chain multiple ActionBlocks
const step1 = await codebolt.actionBlock.start('data-fetcher', { url: 'api/data' });
const step2 = await codebolt.actionBlock.start('data-transformer', { input: step1.result });
const step3 = await codebolt.actionBlock.start('data-saver', { data: step2.result, path: 'output.json' });
```

### 4. Dynamic Execution

```typescript
// Build dynamic workflows based on available ActionBlocks
const blocks = await codebolt.actionBlock.list();
const processorBlocks = blocks.actionBlocks.filter(b =>
  b.name.includes('process') || b.name.includes('transform')
);

for (const block of processorBlocks) {
  console.log(`Executing ${block.name}...`);
  await codebolt.actionBlock.start(block.name, { data: 'input-data' });
}
```

## ActionBlock Metadata

ActionBlocks include metadata that helps you understand their capabilities:

- **Inputs**: Required and optional parameters
- **Outputs**: What the ActionBlock returns
- **Dependencies**: Other ActionBlocks or resources needed
- **Author**: Creator information
- **Tags**: Categorization tags for discovery

<CBAPICategory />
