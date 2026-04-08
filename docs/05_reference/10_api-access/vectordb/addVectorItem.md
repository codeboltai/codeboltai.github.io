---
name: addVectorItem
cbbaseinfo:
  description: Adds a new vector item to the vector database.
cbparameters:
  parameters:
    - name: item
      typeName: any
      description: The item to add to the vector.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the item is successfully added.
    typeArgs:
      - type: reference
        name: AddVectorItemResponse
data:
  name: addVectorItem
  category: vectordb
  link: addVectorItem.md
---
# addVectorItem

```typescript
codebolt.vectordb.addVectorItem(item: any): Promise<AddVectorItemResponse>
```

Adds a new vector item to the vector database.
### Parameters

- **`item`** (any): The item to add to the vector.

### Returns

- **`Promise<AddVectorItemResponse>`**: A promise that resolves when the item is successfully added.

### Response Structure
```typescript
{
  type: 'addVectorItemResponse';
  message: string;  // 'success' when successful
}
```

### Simple Example
```javascript
// Add a text document to vector database
const addResult = await codebolt.vectordb.addVectorItem('This is a test document for vector database');
console.log('✅ Vector item addition result:', addResult);
```

### Detailed Example
```javascript
// Add vector item with error handling
try {
  const addResult = await codebolt.vectordb.addVectorItem('This is a test document for vector database');
  console.log('✅ Vector item addition result:', addResult);
  console.log('   - Type:', addResult.type);
  console.log('   - Message:', addResult.message);
} catch (error) {
  console.log('⚠️  Vector item addition failed:', error.message);
}
```

### Advanced Examples

#### Example 3: Add Structured Data

```javascript
async function addStructuredDocument() {
  const document = {
    type: 'article',
    title: 'Introduction to Vector Databases',
    content: 'Vector databases store embeddings for semantic search.',
    metadata: {
      author: 'John Doe',
      date: '2024-01-15',
      tags: ['vectordb', 'embeddings', 'search'],
      category: 'tutorial',
      readTime: 5
    }
  };

  const result = await codebolt.vectordb.addVectorItem(document);

  if (result.type === 'addVectorItemResponse') {
    console.log('Document added successfully');
    return document;
  }

  throw new Error('Failed to add document');
}
```

#### Example 4: Batch Add with Progress Tracking

```javascript
async function batchAddWithProgress(items) {
  const total = items.length;
  let succeeded = 0;
  let failed = 0;
  const errors = [];

  console.log(`Starting batch addition of ${total} items`);

  for (let i = 0; i < items.length; i++) {
    try {
      await codebolt.vectordb.addVectorItem(items[i]);
      succeeded++;

      // Log progress every 10% or on last item
      if ((i + 1) % Math.max(1, Math.floor(total / 10)) === 0 || i === total - 1) {
        const progress = ((i + 1) / total * 100).toFixed(1);
        console.log(`Progress: ${progress}% (${i + 1}/${total})`);
      }
    } catch (error) {
      failed++;
      errors.push({
        index: i,
        item: items[i],
        error: error.message
      });
      console.error(`Failed to add item ${i + 1}:`, error.message);
    }
  }

  const summary = {
    total,
    succeeded,
    failed,
    successRate: ((succeeded / total) * 100).toFixed(2) + '%',
    errors
  };

  console.log('Batch addition complete:', summary);
  return summary;
}

// Usage
const items = [
  { text: 'First document', id: 1 },
  { text: 'Second document', id: 2 },
  { text: 'Third document', id: 3 }
];
const result = await batchAddWithProgress(items);
```

#### Example 5: Add with Deduplication

```javascript
async function addWithDeduplication(item, keyField = 'id') {
  // Check if item already exists
  const existing = await codebolt.vectordb.queryVectorItem(
    JSON.stringify(item)
  );

  const exists = existing.item?.some(existingItem =>
    existingItem.item[keyField] === item[keyField]
  );

  if (exists) {
    console.log(`Item with ${keyField}="${item[keyField]}" already exists`);
    return { type: 'addVectorItemResponse', message: 'already exists' };
  }

  // Add new item
  const result = await codebolt.vectordb.addVectorItem(item);
  console.log(`Added new item with ${keyField}="${item[keyField]}"`);

  return result;
}
```

#### Example 6: Add with Automatic Timestamping

```javascript
async function addWithTimestamp(item) {
  const timestampedItem = {
    ...item,
    metadata: {
      ...item.metadata,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  };

  const result = await codebolt.vectordb.addVectorItem(timestampedItem);

  console.log('Item added with timestamps:', timestampedItem.metadata.createdAt);
  return result;
}
```

### Integration Examples

#### Example 7: Integration with File System

```javascript
async function indexFiles(directory) {
  const files = await codebolt.fs.listFiles(directory);

  let indexed = 0;
  for (const file of files) {
    if (file.name.endsWith('.md') || file.name.endsWith('.txt')) {
      const content = await codebolt.fs.readFile(`${directory}/${file.name}`);

      await codebolt.vectordb.addVectorItem({
        type: 'file',
        filename: file.name,
        filepath: `${directory}/${file.name}`,
        content,
        size: content.length,
        lastModified: file.lastModified
      });

      indexed++;
      console.log(`Indexed: ${file.name}`);
    }
  }

  console.log(`Successfully indexed ${indexed} files`);
  return indexed;
}
```

#### Example 8: Integration with LLM

```javascript
async function addLLMGeneratedEmbedding(prompt) {
  // Generate content with LLM
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'Generate a concise summary of the topic.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    llmrole: 'assistant',
    max_tokens: 300
  });

  // Add LLM-generated content to vector database
  const result = await codebolt.vectordb.addVectorItem({
    type: 'llm-generated',
    originalPrompt: prompt,
    generatedContent: response.content,
    model: response.model,
    tokensUsed: response.usage?.total_tokens,
    timestamp: new Date().toISOString()
  });

  return result;
}
```

### Error Handling Examples

#### Example 9: Comprehensive Error Handling

```javascript
async function safeAddVectorItem(item, retries = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Validate item
      if (!item || typeof item !== 'object') {
        throw new Error('Item must be an object');
      }

      // Add item
      const result = await codebolt.vectordb.addVectorItem(item);

      // Validate response
      if (result.type !== 'addVectorItemResponse') {
        throw new Error('Unexpected response type');
      }

      if (attempt > 1) {
        console.log(`Successfully added item after ${attempt} attempts`);
      }

      return result;

    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt < retries) {
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  console.error(`Failed to add item after ${retries} attempts`);
  throw lastError;
}
```

#### Example 10: Validation Before Adding

```javascript
async function validatedAdd(item, schema) {
  // Validate against schema
  const errors = [];

  for (const [field, rules] of Object.entries(schema)) {
    if (rules.required && !item[field]) {
      errors.push(`Missing required field: ${field}`);
    }

    if (rules.type && typeof item[field] !== rules.type) {
      errors.push(`Invalid type for ${field}: expected ${rules.type}`);
    }

    if (rules.validate && !rules.validate(item[field])) {
      errors.push(`Validation failed for ${field}`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Validation errors:\n${errors.join('\n')}`);
  }

  // Add validated item
  const result = await codebolt.vectordb.addVectorItem(item);

  console.log('Item validated and added successfully');
  return result;
}

// Usage
const schema = {
  title: { required: true, type: 'string' },
  content: { required: true, type: 'string' },
  category: { required: false, type: 'string' }
};

await validatedAdd(
  { title: 'Test', content: 'Content here', category: 'test' },
  schema
);
```

### Performance Optimization

#### Example 11: Parallel Batch Add

```javascript
async function parallelBatchAdd(items, concurrency = 10) {
  const results = [];
  const total = items.length;

  console.log(`Adding ${total} items with concurrency ${concurrency}`);

  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);

    const batchResults = await Promise.allSettled(
      batch.map(item => codebolt.vectordb.addVectorItem(item))
    );

    batchResults.forEach((result, index) => {
      const globalIndex = i + index;
      results.push({
        index: globalIndex,
        success: result.status === 'fulfilled',
        value: result.status === 'fulfilled' ? result.value : result.reason
      });
    });

    const progress = ((i + batch.length) / total * 100).toFixed(1);
    console.log(`Progress: ${progress}%`);
  }

  const succeeded = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`Batch complete: ${succeeded} succeeded, ${failed} failed`);

  return { results, succeeded, failed };
}
```

#### Example 12: Streaming Add

```javascript
async function streamingAdd(streamGenerator) {
  let count = 0;

  for await (const item of streamGenerator()) {
    try {
      await codebolt.vectordb.addVectorItem(item);
      count++;

      if (count % 100 === 0) {
        console.log(`Processed ${count} items`);
      }
    } catch (error) {
      console.error(`Failed to add item ${count}:`, error.message);
    }
  }

  console.log(`Streaming complete: ${count} items added`);
  return count;
}
```

### Best Practices

1. **Always validate data structure** before adding to vector database
2. **Use consistent schemas** for better query results
3. **Include rich metadata** for filtering and sorting
4. **Handle errors gracefully** with retry logic
5. **Batch operations** for better performance
6. **Add timestamps** for tracking and cleanup
7. **Use deduplication** to avoid redundant data
8. **Monitor performance** for large batches

### Common Pitfalls and Solutions

#### Pitfall 1: Missing Metadata

```javascript
// Problem: No metadata
await codebolt.vectordb.addVectorItem({ text: 'Some text' });

// Solution: Include metadata
await codebolt.vectordb.addVectorItem({
  text: 'Some text',
  type: 'document',
  timestamp: new Date().toISOString(),
  source: 'user-input'
});
```

#### Pitfall 2: No Error Handling

```javascript
// Problem: No try-catch
await codebolt.vectordb.addVectorItem(item); // May throw

// Solution: Always handle errors
try {
  await codebolt.vectordb.addVectorItem(item);
} catch (error) {
  console.error('Failed to add item:', error);
}
```

#### Pitfall 3: Inconsistent Data Types

```javascript
// Problem: Mixed data types
await codebolt.vectordb.addVectorItem({ text: 'doc1' });
await codebolt.vectordb.addVectorItem({ content: 'doc2' });

// Solution: Consistent field names
await codebolt.vectordb.addVectorItem({
  text: 'doc1',
  type: 'document'
});
await codebolt.vectordb.addVectorItem({
  text: 'doc2',
  type: 'document'
});
```

### Notes

- The `item` parameter can be any data structure that you want to store
- Vector embeddings are automatically generated from the item content
- Rich metadata improves search quality and filtering capabilities
- Consider implementing batch processing for large datasets
- Always handle errors appropriately in production code