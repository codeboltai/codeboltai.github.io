---
cbapicategory:
  - name: addVectorItem
    link: /docs/api/apiaccess/vectordb/addVectorItem
    description: Adds a new vector item to the vector database.
  - name: getVector
    link: /docs/api/apiaccess/vectordb/getVector
    description: Retrieves a vector from the vector database based on the provided key.
  - name: queryVectorItem
    link: /docs/api/apiaccess/vectordb/queryVectorItem
    description: Queries a vector item from the vector database based on the provided key.

---
# VectorDB

<CBAPICategory />

The VectorDB module provides vector database functionality for storing, retrieving, and querying vector embeddings. This enables semantic search, similarity matching, and knowledge retrieval for your AI-powered applications.

## Quick Start Guide

### Basic Vector Operations

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  // Add a document to the vector database
  await codebolt.vectordb.addVectorItem({
    text: 'JavaScript is a versatile programming language used for web development.',
    category: 'programming',
    tags: ['javascript', 'web', 'frontend']
  });

  // Query for similar documents
  const results = await codebolt.vectordb.queryVectorItem('web development languages');

  console.log('Found similar items:', results.item?.length || 0);
  results.item?.forEach(item => {
    console.log(`- Score: ${item.score}, Content: ${item.item.text}`);
  });
}
```

### Minimal Example

```javascript
// Add and query in one go
await codebolt.vectordb.addVectorItem('AI and machine learning are transforming technology');
const matches = await codebolt.vectordb.queryVectorItem('artificial intelligence');
console.log('Best match:', matches.item?.[0]);
```

## Common Workflows

### Workflow 1: Document Storage and Retrieval

```javascript
async function documentWorkflow() {
  // Store multiple documents
  const documents = [
    {
      id: 'doc1',
      title: 'Introduction to React',
      content: 'React is a JavaScript library for building user interfaces.',
      category: 'frontend'
    },
    {
      id: 'doc2',
      title: 'Node.js Guide',
      content: 'Node.js enables JavaScript to run outside the browser.',
      category: 'backend'
    },
    {
      id: 'doc3',
      title: 'TypeScript Basics',
      content: 'TypeScript adds static typing to JavaScript.',
      category: 'programming'
    }
  ];

  // Add all documents to vector database
  for (const doc of documents) {
    await codebolt.vectordb.addVectorItem({
      id: doc.id,
      title: doc.title,
      content: doc.content,
      category: doc.category
    });
    console.log(`Added: ${doc.title}`);
  }

  // Query for relevant documents
  const query = 'server-side JavaScript programming';
  const results = await codebolt.vectordb.queryVectorItem(query);

  console.log('\nQuery results for:', query);
  results.item?.forEach((item, index) => {
    console.log(`${index + 1}. ${item.item.title} (similarity: ${item.score.toFixed(3)})`);
    console.log(`   ${item.item.content}`);
  });
}
```

### Workflow 2: Semantic Code Search

```javascript
async function codeSearchWorkflow() {
  // Store code snippets with descriptions
  const codeSnippets = [
    {
      description: 'Fetch data from API',
      code: 'const data = await fetch(url).then(r => r.json());',
      language: 'javascript'
    },
    {
      description: 'Sort array of numbers',
      code: 'numbers.sort((a, b) => a - b);',
      language: 'javascript'
    },
    {
      description: 'Parse JSON string',
      code: 'const obj = JSON.parse(jsonString);',
      language: 'javascript'
    }
  ];

  // Add snippets to vector database
  for (const snippet of codeSnippets) {
    await codebolt.vectordb.addVectorItem({
      type: 'code-snippet',
      description: snippet.description,
      code: snippet.code,
      language: snippet.language
    });
  }

  // Search for relevant code
  const searchQuery = 'how to order an array';
  const results = await codebolt.vectordb.queryVectorItem(searchQuery);

  console.log('Code search results for:', searchQuery);
  results.item?.forEach((item, index) => {
    console.log(`${index + 1}. ${item.item.description} (${item.item.language})`);
    console.log(`   ${item.item.code}`);
    console.log(`   Similarity: ${(item.score * 100).toFixed(1)}%`);
  });
}
```

### Workflow 3: Knowledge Base with RAG

```javascript
async function ragWorkflow() {
  // Build knowledge base
  const knowledgeBase = [
    'React components are reusable pieces of UI.',
    'useState hook manages state in functional components.',
    'useEffect hook handles side effects in React.',
    'Props are used to pass data to components.'
  ];

  // Store knowledge in vector database
  for (const knowledge of knowledgeBase) {
    await codebolt.vectordb.addVectorItem({
      type: 'knowledge',
      content: knowledge,
      timestamp: new Date().toISOString()
    });
  }

  // Query relevant knowledge
  const question = 'How do I manage state in React?';
  const relevantKnowledge = await codebolt.vectordb.queryVectorItem(question);

  // Use retrieved knowledge to enhance LLM response
  const context = relevantKnowledge.item
    ?.map(item => item.item.content)
    .join('\n') || '';

  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `Answer the question using this context:\n${context}`
      },
      {
        role: 'user',
        content: question
      }
    ],
    llmrole: 'assistant',
    max_tokens: 500
  });

  console.log('Question:', question);
  console.log('Answer:', response.content);
}
```

### Workflow 4: Similarity-Based Recommendations

```javascript
async function recommendationWorkflow() {
  // Store user preferences
  const userProfiles = [
    {
      userId: 'user1',
      interests: 'machine learning, deep learning, neural networks',
      category: 'ai-enthusiast'
    },
    {
      userId: 'user2',
      interests: 'web development, react, node.js, javascript',
      category: 'web-developer'
    },
    {
      userId: 'user3',
      interests: 'data science, python, pandas, visualization',
      category: 'data-scientist'
    }
  ];

  // Add profiles to vector database
  for (const profile of userProfiles) {
    await codebolt.vectordb.addVectorItem({
      type: 'user-profile',
      userId: profile.userId,
      interests: profile.interests,
      category: profile.category
    });
  }

  // Find similar users for recommendations
  const targetUser = 'user1';
  const userProfile = await codebolt.vectordb.getVector(targetUser);

  const similarUsers = await codebolt.vectordb.queryVectorItem(
    userProfile.vector?.data?.toString() || 'machine learning'
  );

  console.log('Users similar to', targetUser);
  similarUsers.item?.forEach((item, index) => {
    if (item.item.userId !== targetUser) {
      console.log(`${index + 1}. ${item.item.userId} (${item.item.category})`);
      console.log(`   Interests: ${item.item.interests}`);
      console.log(`   Similarity: ${(item.score * 100).toFixed(1)}%`);
    }
  });
}
```

### Workflow 5: Batch Processing

```javascript
async function batchProcessingWorkflow() {
  // Prepare batch data
  const batchData = [
    { text: 'First document', metadata: { source: 'doc1' } },
    { text: 'Second document', metadata: { source: 'doc2' } },
    { text: 'Third document', metadata: { source: 'doc3' } },
    // ... thousands more
  ];

  console.log(`Processing ${batchData.length} documents...`);

  // Add all documents
  let added = 0;
  for (const item of batchData) {
    try {
      await codebolt.vectordb.addVectorItem({
        text: item.text,
        ...item.metadata,
        timestamp: new Date().toISOString()
      });
      added++;
    } catch (error) {
      console.error(`Failed to add item: ${error.message}`);
    }
  }

  console.log(`Successfully added ${added}/${batchData.length} documents`);

  // Query for multiple items
  const queries = ['first', 'second', 'third'];
  const queryResults = await Promise.all(
    queries.map(q => codebolt.vectordb.queryVectorItem(q))
  );

  queryResults.forEach((result, index) => {
    console.log(`Query "${queries[index]}":`, result.item?.length || 0, 'results');
  });
}
```

## Module Integration Examples

### Integration with Agent Module

```javascript
async function vectordbWithAgent() {
  // Store task templates in vector database
  const templates = [
    {
      name: 'API Development',
      template: 'Create a REST API with Express.js including routes, controllers, and error handling.',
      requirements: ['express', 'nodejs', 'rest']
    },
    {
      name: 'Testing Setup',
      template: 'Set up comprehensive testing with Jest including unit tests and integration tests.',
      requirements: ['jest', 'testing', 'unit-tests']
    }
  ];

  for (const template of templates) {
    await codebolt.vectordb.addVectorItem({
      type: 'task-template',
      ...template
    });
  }

  // Query for relevant template
  const task = 'I need to build an API server';
  const templateResults = await codebolt.vectordb.queryVectorItem(task);

  if (templateResults.item?.[0]) {
    const template = templateResults.item[0].item;

    // Use template to find and execute agent
    const agent = await codebolt.agent.findAgent(template.template, 1, [], 'all', 'use_vector_db');

    if (agent?.agents?.[0]) {
      const result = await codebolt.agent.startAgent(
        agent.agents[0].function.name,
        template.template
      );

      return result;
    }
  }
}
```

### Integration with LLM Module

```javascript
async function vectordbWithLLM() {
  // Store conversation history in vector database
  const conversations = [
    {
      topic: 'react-hooks',
      question: 'What are React hooks?',
      answer: 'React hooks are functions that let you use state and lifecycle features in functional components.'
    },
    {
      topic: 'async-await',
      question: 'How does async/await work?',
      answer: 'async/await is syntax for handling promises in a more synchronous-looking way.'
    }
  ];

  for (const conv of conversations) {
    await codebolt.vectordb.addVectorItem({
      type: 'conversation',
      topic: conv.topic,
      question: conv.question,
      answer: conv.answer
    });
  }

  // Query for relevant past conversations
  const newQuestion = 'Tell me about hooks in React';
  const relevantConvos = await codebolt.vectordb.queryVectorItem(newQuestion);

  // Build context from relevant conversations
  const context = relevantConvos.item
    ?.map(item => `Q: ${item.item.question}\nA: ${item.item.answer}`)
    .join('\n\n') || '';

  // Use context to generate enhanced response
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant. Use these past conversations for context:\n${context}`
      },
      {
        role: 'user',
        content: newQuestion
      }
    ],
    llmrole: 'assistant',
    max_tokens: 500
  });

  console.log('Enhanced Response:', response.content);
}
```

### Integration with File System

```javascript
async function vectordbWithFileSystem() {
  // Read documentation files
  const files = await codebolt.fs.listFiles('./docs');

  // Process and store each document
  for (const file of files) {
    if (file.name.endsWith('.md')) {
      const content = await codebolt.fs.readFile(`./docs/${file.name}`);

      await codebolt.vectordb.addVectorItem({
        type: 'documentation',
        filename: file.name,
        content: content,
        filepath: `./docs/${file.name}`
      });

      console.log(`Indexed: ${file.name}`);
    }
  }

  // Search documentation
  const query = 'authentication and authorization';
  const results = await codebolt.vectordb.queryVectorItem(query);

  console.log('\nSearch results for:', query);
  results.item?.forEach((item, index) => {
    console.log(`${index + 1}. ${item.item.filename}`);
    console.log(`   Score: ${(item.score * 100).toFixed(1)}%`);

    // Read and display relevant file
    if (item.score > 0.7) {
      console.log(`   Content preview: ${item.item.content.substring(0, 100)}...`);
    }
  });
}
```

## Best Practices

### 1. Data Structuring

```javascript
// Good: Structured data with metadata
await codebolt.vectordb.addVectorItem({
  type: 'article',
  title: 'Understanding Async/Await',
  content: 'Async/await is syntactic sugar for promises...',
  metadata: {
    author: 'John Doe',
    date: '2024-01-15',
    tags: ['javascript', 'async', 'promises'],
    category: 'tutorial'
  }
});

// Bad: Unstructured text
await codebolt.vectordb.addVectorItem('Async/await is syntactic sugar for promises...');
```

### 2. Batch Operations

```javascript
// Good: Batch processing with error handling
async function batchAdd(items) {
  let succeeded = 0;
  let failed = 0;

  for (const item of items) {
    try {
      await codebolt.vectordb.addVectorItem(item);
      succeeded++;
    } catch (error) {
      console.error(`Failed to add item: ${error.message}`);
      failed++;
    }
  }

  console.log(`Batch complete: ${succeeded} succeeded, ${failed} failed`);
  return { succeeded, failed };
}

// Bad: No error handling
items.forEach(item => {
  await codebolt.vectordb.addVectorItem(item); // May fail silently
});
```

### 3. Query Optimization

```javascript
// Good: Specific, focused queries
const results = await codebolt.vectordb.queryVectorItem('machine learning algorithms');

// Bad: Overly broad queries
const results = await codebolt.vectordb.queryVectorItem('what is');
```

### 4. Result Filtering

```javascript
// Good: Filter by relevance threshold
async function queryWithThreshold(query, threshold = 0.7) {
  const results = await codebolt.vectordb.queryVectorItem(query);

  const relevantResults = results.item?.filter(
    item => item.score >= threshold
  ) || [];

  console.log(`Found ${relevantResults.length} relevant results (threshold: ${threshold})`);

  return relevantResults;
}

// Usage
const relevant = await queryWithThreshold('python programming', 0.75);
```

### 5. Metadata Enrichment

```javascript
// Good: Rich metadata for better filtering
await codebolt.vectordb.addVectorItem({
  type: 'code-example',
  code: 'function hello() { console.log("Hello World"); }',
  metadata: {
    language: 'javascript',
    difficulty: 'beginner',
    topic: 'functions',
    tags: ['basic', 'console', 'output'],
    createdAt: new Date().toISOString(),
    author: 'codebolt',
    verified: true
  }
});
```

## Performance Considerations

1. **Batch Insertions**: Group multiple `addVectorItem` calls for better performance
2. **Query Specificity**: More specific queries yield better results and faster response times
3. **Threshold Filtering**: Filter results by similarity score to reduce noise
4. **Metadata Indexing**: Store relevant metadata for efficient filtering
5. **Regular Cleanup**: Remove outdated or irrelevant vectors periodically

## Common Pitfalls and Solutions

### Pitfall 1: Not Validating Results

```javascript
// Problem: Assuming results exist
const results = await codebolt.vectordb.queryVectorItem('query');
results.item.forEach(item => console.log(item)); // May fail

// Solution: Always validate
const results = await codebolt.vectordb.queryVectorItem('query');
if (results.item && results.item.length > 0) {
  results.item.forEach(item => console.log(item));
} else {
  console.log('No results found');
}
```

### Pitfall 2: Ignoring Similarity Scores

```javascript
// Problem: Using all results without filtering
const results = await codebolt.vectordb.queryVectorItem('query');
results.item.forEach(item => processResult(item)); // Low-quality results

// Solution: Filter by similarity
const results = await codebolt.vectordb.queryVectorItem('query');
const relevantResults = results.item?.filter(item => item.score > 0.7) || [];
relevantResults.forEach(item => processResult(item));
```

### Pitfall 3: Poor Data Quality

```javascript
// Problem: Inconsistent data
await codebolt.vectordb.addVectorItem({ text: 'Some data' });
await codebolt.vectordb.addVectorItem({ content: 'Some data' }); // Different field!

// Solution: Consistent schema
await codebolt.vectordb.addVectorItem({
  text: 'Some data',
  type: 'document',
  timestamp: new Date().toISOString()
});
```

## Advanced Patterns

### Pattern 1: Hybrid Search

```javascript
async function hybridSearch(query, filters = {}) {
  // Get semantic search results
  const semanticResults = await codebolt.vectordb.queryVectorItem(query);

  // Filter by metadata
  const filtered = semanticResults.item?.filter(item => {
    if (filters.type && item.item.type !== filters.type) return false;
    if (filters.category && item.item.category !== filters.category) return false;
    return true;
  }) || [];

  // Sort by combined score
  const ranked = filtered
    .map(item => ({
      ...item,
      combinedScore: item.score * 0.7 + (item.item.popularity || 0) * 0.3
    }))
    .sort((a, b) => b.combinedScore - a.combinedScore);

  return ranked;
}
```

### Pattern 2: Caching Layer

```javascript
class VectorDBCache {
  constructor(ttl = 10 * 60 * 1000) {
    this.cache = new Map();
    this.ttl = ttl;
  }

  async query(query) {
    const cacheKey = query.toLowerCase().trim();

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.ttl) {
        console.log('Cache hit');
        return cached.data;
      }
    }

    console.log('Cache miss, querying vector database');
    const data = await codebolt.vectordb.queryVectorItem(query);

    this.cache.set(cacheKey, {
      timestamp: Date.now(),
      data
    });

    return data;
  }
}
```

### Pattern 3: Incremental Updates

```javascript
async function incrementalUpdate(items, batchSize = 100) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    console.log(`Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(items.length / batchSize)}`);

    await Promise.all(
      batch.map(item => codebolt.vectordb.addVectorItem(item))
    );

    // Small delay between batches
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  console.log('All items processed');
}
```
