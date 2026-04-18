---
name: listActionBlocks
cbbaseinfo:
  description: Lists all available ActionBlocks in the project or at a specified path.
cbparameters:
  parameters:
    - name: projectPath
      typeName: string
      description: Optional project path to search for ActionBlocks.
      isOptional: true
  returns:
    signatureTypeName: "Promise<ListActionBlocksResponse>"
    description: A promise that resolves with a list of available ActionBlocks.
    typeArgs: []
data:
  name: listActionBlocks
  category: sideExecution
  link: listActionBlocks.md
---
# listActionBlocks

```typescript
codebolt.sideExecution.listActionBlocks(projectPath: string): Promise<ListActionBlocksResponse>
```

Lists all available ActionBlocks in the project or at a specified path.
### Parameters

- **`projectPath`** (string, optional): Optional project path to search for ActionBlocks.

### Returns

- **`Promise<[ListActionBlocksResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ListActionBlocksResponse)>`**: A promise that resolves with a list of available ActionBlocks.

### Response Structure

The method returns a Promise that resolves to a [`ListActionBlocksResponse`](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ListActionBlocksResponse) object with the following properties:

**Response Properties:**
- `type`: Always "listActionBlocksResponse"
- `data`: Object containing the ActionBlocks list
  - `actionBlocks`: Array of ActionBlock objects, each containing:
    - `name`: The name of the ActionBlock
    - `path`: Full file system path to the ActionBlock
    - `description`: Optional description of what the ActionBlock does
    - `version`: Optional version string
    - `author`: Optional author information
    - `dependencies`: Array of dependencies (if specified in package.json)
    - `createdAt`: Timestamp when the ActionBlock was created
    - `updatedAt`: Timestamp of last modification
  - `count`: Total number of ActionBlocks found
  - `searchPath`: The path that was searched
- `success`: Boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

### Examples

#### Example 1: List All ActionBlocks

```js
// Wait for connection
await codebolt.waitForReady();

// Get all available ActionBlocks
const result = await codebolt.sideExecution.listActionBlocks();
console.log('✅ Found', result.data.count, 'ActionBlocks');

// Display each ActionBlock
result.data.actionBlocks.forEach(block => {
  console.log(`  • ${block.name}`);
  console.log(`    Path: ${block.path}`);
  if (block.description) {
    console.log(`    Description: ${block.description}`);
  }
});
```

**Explanation**: This example retrieves all ActionBlocks available in the current project. Each ActionBlock includes its name, path, and metadata.

#### Example 2: List ActionBlocks in Specific Path

```js
// List ActionBlocks in a specific directory
const result = await codebolt.sideExecution.listActionBlocks('/my-project/actionblocks');

console.log('✅ ActionBlocks in specified path:');
result.data.actionBlocks.forEach(block => {
  console.log(`  • ${block.name}`);
  console.log(`    ${block.path}`);
});
```

**Explanation**: This example searches for ActionBlocks in a specific directory path, useful when you have multiple ActionBlock directories.

#### Example 3: Filter and Search ActionBlocks

```js
// Get all ActionBlocks and filter them
const result = await codebolt.sideExecution.listActionBlocks();
const blocks = result.data.actionBlocks;

// Find ActionBlocks by name pattern
const dataProcessingBlocks = blocks.filter(block =>
  block.name.toLowerCase().includes('data') ||
  block.name.toLowerCase().includes('process')
);

console.log('📊 Data processing ActionBlocks:');
dataProcessingBlocks.forEach(block => {
  console.log(`  • ${block.name}`);
});

// Find ActionBlocks by dependency
const blocksWithDep = blocks.filter(block =>
  block.dependencies && block.dependencies.includes('lodash')
);

console.log('\\n📦 ActionBlocks using lodash:');
blocksWithDep.forEach(block => {
  console.log(`  • ${block.name}`);
});
```

**Explanation**: This example demonstrates how to filter ActionBlocks after retrieving them. You can search by name, dependencies, or other metadata.

#### Example 4: ActionBlock Discovery Interface

```js
// Create an interactive ActionBlock browser
async function browseActionBlocks() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  console.log('🔍 Available ActionBlocks:');
  console.log('═'.repeat(60));

  blocks.forEach((block, index) => {
    console.log(`\n${index + 1}. ${block.name}`);
    console.log(`   Path: ${block.path}`);
    if (block.description) {
      console.log(`   📝 ${block.description}`);
    }
    if (block.version) {
      console.log(`   Version: ${block.version}`);
    }
    if (block.author) {
      console.log(`   Author: ${block.author}`);
    }
    if (block.dependencies && block.dependencies.length > 0) {
      console.log(`   Dependencies: ${block.dependencies.join(', ')}`);
    }
  });

  console.log('\n' + '═'.repeat(60));
  console.log(`Total: ${blocks.length} ActionBlocks found`);

  return blocks;
}

// Usage
await browseActionBlocks();
```

**Explanation**: This example creates a formatted display of all ActionBlocks with their metadata, useful for documentation or interactive selection interfaces.

#### Example 5: Validate ActionBlocks Before Execution

```js
// Check if an ActionBlock exists before executing
async function executeActionBlockSafely(blockName) {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  // Find the ActionBlock
  const targetBlock = blocks.find(block => block.name === blockName);

  if (!targetBlock) {
    console.error(`❌ ActionBlock "${blockName}" not found`);
    console.log('Available ActionBlocks:');
    blocks.forEach(block => console.log(`  • ${block.name}`));
    return null;
  }

  console.log(`✅ Found ActionBlock: ${targetBlock.name}`);
  console.log(`   Path: ${targetBlock.path}`);

  // Check dependencies
  if (targetBlock.dependencies && targetBlock.dependencies.length > 0) {
    console.log(`   Dependencies: ${targetBlock.dependencies.join(', ')}`);
  }

  // Execute the ActionBlock
  try {
    const execution = await codebolt.sideExecution.startWithActionBlock(targetBlock.path);
    console.log(`✅ Started execution: ${execution.data.sideExecutionId}`);
    return execution;
  } catch (error) {
    console.error(`❌ Failed to start execution:`, error.message);
    return null;
  }
}

// Usage
await executeActionBlockSafely('my-actionblock');
```

**Explanation**: This example validates that an ActionBlock exists before attempting to execute it, providing helpful error messages if not found.

#### Example 6: Categorize ActionBlocks by Type

```js
// Organize ActionBlocks by functionality
async function categorizeActionBlocks() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  const categories = {
    'Data Processing': [],
    'API Integration': [],
    'Utilities': [],
    'Testing': [],
    'Other': []
  };

  // Categorize based on name patterns
  blocks.forEach(block => {
    const name = block.name.toLowerCase();

    if (name.includes('data') || name.includes('process') || name.includes('transform')) {
      categories['Data Processing'].push(block);
    } else if (name.includes('api') || name.includes('http') || name.includes('fetch')) {
      categories['API Integration'].push(block);
    } else if (name.includes('util') || name.includes('helper') || name.includes('tool')) {
      categories['Utilities'].push(block);
    } else if (name.includes('test') || name.includes('spec')) {
      categories['Testing'].push(block);
    } else {
      categories['Other'].push(block);
    }
  });

  // Display by category
  for (const [category, items] of Object.entries(categories)) {
    if (items.length > 0) {
      console.log(`\n📂 ${category} (${items.length}):`);
      items.forEach(block => {
        console.log(`  • ${block.name}`);
      });
    }
  }

  return categories;
}

// Usage
await categorizeActionBlocks();
```

**Explanation**: This example categorizes ActionBlocks based on their names and functionality, making it easier to find the right ActionBlock for a task.

### Common Use Cases

**1. ActionBlock Registry**: Create a registry of available ActionBlocks.

```js
async function buildActionBlockRegistry() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const registry = {};

  result.data.actionBlocks.forEach(block => {
    registry[block.name] = {
      path: block.path,
      description: block.description,
      version: block.version,
      dependencies: block.dependencies,
      lastModified: block.updatedAt
    };
  });

  return registry;
}

// Usage
const registry = await buildActionBlockRegistry();
console.log('Registry:', Object.keys(registry));
```

**2. Dependency Analysis**: Analyze ActionBlock dependencies.

```js
async function analyzeDependencies() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  const dependencyMap = new Map();

  blocks.forEach(block => {
    if (block.dependencies && block.dependencies.length > 0) {
      block.dependencies.forEach(dep => {
        if (!dependencyMap.has(dep)) {
          dependencyMap.set(dep, []);
        }
        dependencyMap.get(dep).push(block.name);
      });
    }
  });

  console.log('📦 Dependency Usage:');
  for (const [dep, users] of dependencyMap.entries()) {
    console.log(`  ${dep}: used by ${users.length} ActionBlocks`);
    users.forEach(name => console.log(`    • ${name}`));
  }

  return dependencyMap;
}
```

**3. ActionBlock Documentation Generator**: Generate documentation from ActionBlocks.

```js
async function generateActionBlockDocs() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  let markdown = '# Available ActionBlocks\n\n';

  blocks.forEach(block => {
    markdown += `## ${block.name}\n\n`;

    if (block.description) {
      markdown += `${block.description}\n\n`;
    }

    markdown += `**Path:** \`${block.path}\`\n\n`;

    if (block.version) {
      markdown += `**Version:** ${block.version}\n\n`;
    }

    if (block.dependencies && block.dependencies.length > 0) {
      markdown += `**Dependencies:**\n`;
      block.dependencies.forEach(dep => {
        markdown += `- ${dep}\n`;
      });
      markdown += '\n';
    }

    markdown += '---\n\n';
  });

  console.log(markdown);
  return markdown;
}
```

**4. ActionBlock Selection Menu**: Interactive selection interface.

```js
async function selectActionBlock() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  console.log('Select an ActionBlock:');
  blocks.forEach((block, index) => {
    console.log(`${index + 1}. ${block.name}`);
    if (block.description) {
      console.log(`   ${block.description}`);
    }
  });

  // In a real scenario, you would prompt for user input here
  // const selection = await prompt('Enter number: ');
  // return blocks[selection - 1];

  return blocks;
}
```

**5. Find Conflicting ActionBlocks**: Check for naming conflicts.

```js
async function findConflicts() {
  const result = await codebolt.sideExecution.listActionBlocks();
  const blocks = result.data.actionBlocks;

  const nameMap = new Map();
  const conflicts = [];

  blocks.forEach(block => {
    if (nameMap.has(block.name)) {
      conflicts.push({
        name: block.name,
        paths: [nameMap.get(block.name), block.path]
      });
    } else {
      nameMap.set(block.name, block.path);
    }
  });

  if (conflicts.length > 0) {
    console.log('⚠️ Found naming conflicts:');
    conflicts.forEach(conflict => {
      console.log(`  ${conflict.name}:`);
      conflict.paths.forEach(path => console.log(`    • ${path}`));
    });
  } else {
    console.log('✅ No naming conflicts found');
  }

  return conflicts;
}
```

### Notes

- If `projectPath` is not specified, the default project directory is searched
- ActionBlocks must have an `index.js` file to be recognized
- The `package.json` file in the ActionBlock directory provides metadata
- Empty arrays are returned if no ActionBlocks are found
- The search is recursive - ActionBlocks in subdirectories are included
- The `count` field reflects the total number of ActionBlocks found
- ActionBlocks are returned in no particular order
- The search path must be accessible to the Codebolt server
- Symbolic links are followed during the search
- Hidden directories (starting with .) are ignored
- The operation may take time for large directory structures
- ActionBlock names are derived from the directory name
- Duplicate ActionBlock names from different paths are all included
- The `createdAt` and `updatedAt` timestamps are from the filesystem
- Dependencies are read from the ActionBlock's package.json
- Invalid ActionBlocks (missing index.js, etc.) are filtered out
- The result includes both metadata and full paths for execution
- Large numbers of ActionBlocks may impact performance
- Consider implementing client-side caching for frequent queries
