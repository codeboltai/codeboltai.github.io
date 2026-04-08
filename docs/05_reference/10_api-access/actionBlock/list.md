---
name: list
cbbaseinfo:
  description: Lists all available ActionBlocks with optional filtering by type.
cbparameters:
  parameters:
    - name: filter
      typeName: ActionBlockFilter
      description: "Optional filter to narrow results by type (filesystem, runtime, or builtin)."
      isOptional: true
  returns:
    signatureTypeName: "Promise<ListActionBlocksResponse>"
    description: A promise that resolves to the list of ActionBlocks.
    typeArgs: []
data:
  name: list
  category: actionBlock
  link: list.md
---
# list

```typescript
codebolt.actionBlock.list(filter: ActionBlockFilter): Promise<ListActionBlocksResponse>
```

Lists all available ActionBlocks with optional filtering by type.
### Parameters

- **`filter`** ([ActionBlockFilter](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ActionBlockFilter), optional): Optional filter to narrow results by type (filesystem, runtime, or builtin).

### Returns

- **`Promise<[ListActionBlocksResponse](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListActionBlocksResponse)>`**: A promise that resolves to the list of ActionBlocks.

### Response Structure

Returns [`ListActionBlocksResponse`](/docs/api/11_doc-type-ref/codeboltjs/interfaces/ListActionBlocksResponse) with array of ActionBlocks.

**Response Properties:**
- `type` (string): Always "listActionBlocksResponse"
- `success` (boolean): Operation success status
- `actionBlocks` (ActionBlock[]): Array of ActionBlock objects
  - `id` (string): Unique identifier
  - `name` (string): ActionBlock name
  - `description` (string): Description of functionality
  - `version` (string): Version number
  - `type` (ActionBlockType): Type (filesystem, runtime, builtin)
  - `metadata` (ActionBlockMetadata): Additional metadata
    - `author` (string, optional): Author information
    - `tags` (string[], optional): Categorization tags
    - `dependencies` (string[], optional): Required dependencies
    - `inputs` (ActionBlockInput[], optional): Input parameters
    - `outputs` (ActionBlockOutput[], optional): Output structure
- `error` (string, optional): Error details if failed

### Examples

#### Example 1: List All ActionBlocks

```typescript
import codebolt from '@codebolt/codeboltjs';

const result = await codebolt.actionBlock.list();

if (result.success) {
  console.log('Available ActionBlocks:');
  result.actionBlocks.forEach(block => {
    console.log(`- ${block.name} (${block.type}): ${block.description}`);
  });
}
```

#### Example 2: Filter by Type

```typescript
// List only filesystem ActionBlocks
const fsBlocks = await codebolt.actionBlock.list({ type: 'filesystem' });
console.log('Filesystem ActionBlocks:', fsBlocks.actionBlocks);

// List only runtime ActionBlocks
const runtimeBlocks = await codebolt.actionBlock.list({ type: 'runtime' });
console.log('Runtime ActionBlocks:', runtimeBlocks.actionBlocks);

// List only builtin ActionBlocks
const builtinBlocks = await codebolt.actionBlock.list({ type: 'builtin' });
console.log('Builtin ActionBlocks:', builtinBlocks.actionBlocks);
```

#### Example 3: Build ActionBlock Registry

```typescript
const buildRegistry = async () => {
  const result = await codebolt.actionBlock.list();

  const registry = result.actionBlocks.reduce((acc, block) => {
    if (!acc[block.type]) acc[block.type] = [];

    acc[block.type].push({
      name: block.name,
      description: block.description,
      version: block.version,
      inputs: block.metadata.inputs || [],
      outputs: block.metadata.outputs || []
    });

    return acc;
  }, {} as Record<string, any>);

  return registry;
};

const registry = await buildRegistry();
console.log('ActionBlock Registry:', registry);
```

#### Example 4: Find ActionBlocks by Tag

```typescript
const findByTag = async (tag: string) => {
  const result = await codebolt.actionBlock.list();

  const matched = result.actionBlocks.filter(block =>
    block.metadata.tags?.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  return matched;
};

const dataBlocks = await findByTag('data');
console.log('Data-related ActionBlocks:', dataBlocks);
```

#### Example 5: Search ActionBlocks

```typescript
const searchActionBlocks = async (searchTerm: string) => {
  const result = await codebolt.actionBlock.list();

  const matched = result.actionBlocks.filter(block =>
    block.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    block.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    block.metadata.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return matched;
};

const results = await searchActionBlocks('file');
console.log('File-related ActionBlocks:', results);
```

### Common Use Cases

#### ActionBlock Discovery

```typescript
const discoverActionBlocks = async () => {
  const result = await codebolt.actionBlock.list();

  const categorized = result.actionBlocks.reduce((acc, block) => {
    const category = block.type;
    if (!acc[category]) acc[category] = [];

    acc[category].push({
      name: block.name,
      description: block.description,
      canExecute: canExecuteBlock(block)
    });

    return acc;
  }, {} as Record<string, any[]>);

  return categorized;
};

function canExecuteBlock(block: any): boolean {
  // Check if we have required dependencies
  return true;
}
```

#### Build Workflow Catalog

```typescript
const buildWorkflowCatalog = async () => {
  const result = await codebolt.actionBlock.list();

  const catalog = {
    dataProcessing: result.actionBlocks.filter(b => b.metadata.tags?.includes('data')),
    fileOperations: result.actionBlocks.filter(b => b.type === 'filesystem'),
    system: result.actionBlocks.filter(b => b.type === 'builtin'),
    custom: result.actionBlocks.filter(b => b.metadata.author !== 'system')
  };

  return catalog;
};
```

### Notes

- Use filtering to reduce results to relevant ActionBlocks
- ActionBlock types determine their execution environment
- Metadata provides information about inputs, outputs, and dependencies
- Tags help categorize and discover ActionBlocks
- Use this information to plan workflows before execution
- ActionBlock names are used when starting execution
- Version information helps track changes
- Consider dependencies when chaining ActionBlocks together