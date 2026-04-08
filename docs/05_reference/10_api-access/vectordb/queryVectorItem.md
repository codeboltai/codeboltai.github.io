---
name: queryVectorItem
cbbaseinfo:
  description: Queries a vector item from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to query the item from.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the queried vector item.
    typeArgs:
      - type: reference
        name: QueryVectorItemResponse
data:
  name: queryVectorItem
  category: vectordb
  link: queryVectorItem.md
---
# queryVectorItem

```typescript
codebolt.vectordb.queryVectorItem(key: string): Promise<QueryVectorItemResponse>
```

Queries a vector item from the vector database based on the provided key.
### Parameters

- **`key`** (string): The key of the vector to query the item from.

### Returns

- **`Promise<QueryVectorItemResponse>`**: A promise that resolves with the queried vector item.

### Response Structure
```typescript
// Single item query response
{
  type: 'qeryVectorItemResponse';
  item: Array<{
    item: any;      // The vector item data
    score: number;  // Similarity score (0-1)
  }>;
}

// Multiple items query response
{
  type: 'qeryVectorItemsResponse';
  items: Array<{
    icon: string;     // Query text
    retrieved: any[]; // Retrieved items array
  }>;
}
```

### Simple Example
```javascript
// Query a single vector item
const queryResult = await codebolt.vectordb.queryVectorItem('test document vector');
console.log('✅ Vector query result:', queryResult);
```

### Detailed Example
```javascript
// Query vector item with error handling
try {
  const queryResult = await codebolt.vectordb.queryVectorItem('test document vector');
  console.log('✅ Vector query result:', queryResult);
  console.log('   - Type:', queryResult?.type);
  console.log('   - Results count:', queryResult?.item?.length || 0);

  // Display similarity scores
  if (queryResult?.item) {
    queryResult.item.forEach((result, index) => {
      console.log(`   - Result ${index + 1}: Score ${result.score}`);
    });
  }
} catch (error) {
  console.log('⚠️  Vector query failed:', error.message);
}
```

### Advanced Examples

#### Example 3: Query with Relevance Filtering

```javascript
async function queryWithThreshold(key, minScore = 0.7) {
  const queryResult = await codebolt.vectordb.queryVectorItem(key);

  if (!queryResult?.item) {
    console.log('No results found');
    return [];
  }

  // Filter by minimum similarity score
  const relevantResults = queryResult.item.filter(
    result => result.score >= minScore
  );

  console.log(`Found ${relevantResults.length}/${queryResult.item.length} results above threshold ${minScore}`);

  // Sort by score (highest first)
  relevantResults.sort((a, b) => b.score - a.score);

  return relevantResults;
}

// Usage
const relevant = await queryWithThreshold('machine learning', 0.75);
relevant.forEach(result => {
  console.log(`Score: ${result.score.toFixed(3)} - ${result.item.text?.substring(0, 50)}...`);
});
```

#### Example 4: Semantic Search with Context

```javascript
async function semanticSearch(query, maxResults = 5) {
  const results = await codebolt.vectordb.queryVectorItem(query);

  if (!results?.item || results.item.length === 0) {
    console.log('No matching documents found');
    return [];
  }

  // Get top N results
  const topResults = results.item
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  console.log(`Top ${maxResults} results for "${query}":`);

  topResults.forEach((result, index) => {
    const percentage = (result.score * 100).toFixed(1);
    console.log(`\n${index + 1}. Similarity: ${percentage}%`);
    console.log(`   Content: ${result.item.content || result.item.text || JSON.stringify(result.item)}`);
  });

  return topResults;
}

// Usage
const matches = await semanticSearch('how to authenticate users in a web application', 3);
```

#### Example 5: Multi-Query Aggregation

```javascript
async function multiQuerySearch(queries, aggregation = 'max') {
  const results = await Promise.all(
    queries.map(q => codebolt.vectordb.queryVectorItem(q))
  );

  // Aggregate results by item
  const aggregatedScores = new Map();

  results.forEach(queryResult => {
    queryResult.item?.forEach(result => {
      const itemKey = JSON.stringify(result.item);
      const currentScore = aggregatedScores.get(itemKey) || 0;

      if (aggregation === 'max') {
        aggregatedScores.set(itemKey, Math.max(currentScore, result.score));
      } else if (aggregation === 'avg') {
        const count = (aggregatedScores.get(`${itemKey}_count`) || 0) + 1;
        aggregatedScores.set(itemKey, (currentScore * (count - 1) + result.score) / count);
        aggregatedScores.set(`${itemKey}_count`, count);
      }
    });
  });

  // Convert back to array and sort
  const finalResults = Array.from(aggregatedScores.entries())
    .filter(([key]) => !key.endsWith('_count'))
    .map(([key, score]) => ({
      item: JSON.parse(key),
      score
    }))
    .sort((a, b) => b.score - a.score);

  console.log(`Aggregated ${finalResults.length} unique results from ${queries.length} queries`);

  return finalResults;
}

// Usage
const aggregatedResults = await multiQuerySearch(
  ['javascript async', 'promises', 'await'],
  'max'
);
```

#### Example 6: Hybrid Search (Semantic + Metadata)

```javascript
async function hybridSearch(query, filters = {}) {
  const semanticResults = await codebolt.vectordb.queryVectorItem(query);

  if (!semanticResults?.item) {
    return [];
  }

  // Filter by metadata
  const filteredResults = semanticResults.item.filter(result => {
    const item = result.item;

    if (filters.type && item.type !== filters.type) return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.minDate && new Date(item.date) < new Date(filters.minDate)) return false;

    return true;
  });

  // Calculate combined score
  const scoredResults = filteredResults.map(result => {
    let combinedScore = result.score;

    // Boost score based on metadata
    if (result.item.featured) combinedScore *= 1.2;
    if (result.item.verified) combinedScore *= 1.1;
    if (filters.boostField && result.item[filters.boostField]) {
      combinedScore *= 1.05;
    }

    return { ...result, combinedScore };
  });

  // Sort by combined score
  scoredResults.sort((a, b) => b.combinedScore - a.combinedScore);

  console.log(`Hybrid search returned ${scoredResults.length} results`);

  return scoredResults;
}

// Usage
const hybridResults = await hybridSearch('machine learning tutorial', {
  type: 'article',
  category: 'tutorial',
  minDate: '2023-01-01',
  boostField: 'popular'
});
```

### Integration Examples

#### Example 7: RAG (Retrieval-Augmented Generation)

```javascript
async function ragWithQuery(question, maxContext = 3) {
  // Query for relevant documents
  const queryResult = await codebolt.vectordb.queryVectorItem(question);

  if (!queryResult?.item || queryResult.item.length === 0) {
    console.log('No relevant context found');
    return null;
  }

  // Get top results as context
  const contextDocs = queryResult.item
    .sort((a, b) => b.score - a.score)
    .slice(0, maxContext);

  console.log(`Using ${contextDocs.length} documents as context`);

  // Build context string
  const context = contextDocs
    .map((doc, index) => `[Doc ${index + 1}] ${doc.item.content || doc.item.text}`)
    .join('\n\n');

  // Generate answer with LLM using retrieved context
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `Answer the question using the provided context. If the context doesn't contain the answer, say so.`
      },
      {
        role: 'user',
        content: `Context:\n${context}\n\nQuestion: ${question}`
      }
    ],
    llmrole: 'assistant',
    max_tokens: 800
  });

  return {
    question,
    answer: response.content,
    contextDocs: contextDocs.map(d => ({
      content: d.item.content || d.item.text,
      score: d.score
    })),
    sources: contextDocs.map(d => d.item.source || d.item.title || d.item.id)
  };
}

// Usage
const ragResult = await ragWithQuery('How do I implement JWT authentication?');
console.log('Answer:', ragResult.answer);
console.log('Sources:', ragResult.sources);
```

#### Example 8: Query with Caching

```javascript
class QueryCache {
  constructor(ttl = 5 * 60 * 1000) { // 5 minutes TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  async query(key) {
    const cacheKey = key.toLowerCase().trim();

    // Check cache
    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.ttl) {
        console.log('Cache hit for query:', key);
        return cached.data;
      }
      this.cache.delete(cacheKey);
    }

    // Query vector database
    console.log('Cache miss, querying vector database:', key);
    const data = await codebolt.vectordb.queryVectorItem(key);

    // Store in cache
    this.cache.set(cacheKey, {
      timestamp: Date.now(),
      data
    });

    return data;
  }

  clear() {
    this.cache.clear();
    console.log('Query cache cleared');
  }

  getStats() {
    return {
      size: this.cache.size,
      entries: Array.from(this.cache.keys())
    };
  }
}

// Usage
const queryCache = new QueryCache();
const results = await queryCache.query('react hooks tutorial');
```

### Error Handling Examples

#### Example 9: Robust Query with Fallback

```javascript
async function robustQuery(key, retries = 3) {
  let lastError = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      if (!key || typeof key !== 'string') {
        throw new Error('Query key must be a non-empty string');
      }

      const result = await codebolt.vectordb.queryVectorItem(key);

      if (!result) {
        throw new Error('No response from vector database');
      }

      if (!result.item || result.item.length === 0) {
        console.log('No results found for query:', key);
        return { type: result.type || 'queryVectorItemResponse', item: [] };
      }

      if (attempt > 1) {
        console.log(`Query successful after ${attempt} attempts`);
      }

      return result;

    } catch (error) {
      lastError = error;
      console.error(`Query attempt ${attempt} failed:`, error.message);

      if (attempt < retries) {
        const delay = Math.min(Math.pow(2, attempt) * 1000, 10000); // Max 10s delay
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`Query failed after ${retries} attempts: ${lastError.message}`);
}
```

#### Example 10: Query with Validation

```javascript
async function validatedQuery(key, options = {}) {
  const {
    minResults = 0,
    maxResults = 100,
    minScore = 0,
    requireFields = []
  } = options;

  // Execute query
  const result = await codebolt.vectordb.queryVectorItem(key);

  // Validate response structure
  if (!result?.item) {
    throw new Error('Invalid response structure');
  }

  // Check minimum results
  if (result.item.length < minResults) {
    throw new Error(`Expected at least ${minResults} results, got ${result.item.length}`);
  }

  // Filter and validate
  const validResults = result.item
    .filter(item => item.score >= minScore)
    .filter(item => {
      return requireFields.every(field => field in item.item);
    })
    .slice(0, maxResults);

  console.log(`Validated query: ${validResults.length} results passed validation`);

  return {
    ...result,
    item: validResults
  };
}

// Usage
const validResults = await validatedQuery('machine learning', {
  minResults: 1,
  minScore: 0.5,
  requireFields: ['content', 'author'],
  maxResults: 10
});
```

### Performance Optimization

#### Example 11: Batch Query Processing

```javascript
async function batchQuery(keys, concurrency = 5) {
  const results = [];
  const total = keys.length;

  console.log(`Processing ${total} queries with concurrency ${concurrency}`);

  for (let i = 0; i < keys.length; i += concurrency) {
    const batch = keys.slice(i, i + concurrency);

    const batchResults = await Promise.allSettled(
      batch.map(key => codebolt.vectordb.queryVectorItem(key))
    );

    batchResults.forEach((result, index) => {
      const globalIndex = i + index;
      results.push({
        key: keys[globalIndex],
        success: result.status === 'fulfilled',
        data: result.status === 'fulfilled' ? result.value : null,
        error: result.status === 'rejected' ? result.reason : null
      });
    });

    const progress = ((i + batch.length) / total * 100).toFixed(1);
    console.log(`Progress: ${progress}%`);
  }

  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;

  console.log(`Batch query complete: ${successful} succeeded, ${failed} failed`);

  return { results, successful, failed };
}
```

#### Example 12: Query Result Ranking

```javascript
async function rankedQuery(key, ranking = 'combined') {
  const result = await codebolt.vectordb.queryVectorItem(key);

  if (!result?.item) {
    return result;
  }

  // Apply ranking strategy
  const ranked = result.item.map(item => {
    let rankScore = item.score;

    switch (ranking) {
      case 'recency':
        // Boost recent items
        const daysSinceCreation = (Date.now() - new Date(item.item.createdAt || 0)) / (1000 * 60 * 60 * 24);
        rankScore = item.score * Math.max(0.5, 1 - daysSinceCreation / 365);
        break;

      case 'popularity':
        // Boost popular items
        rankScore = item.score * (1 + (item.item.views || 0) / 1000);
        break;

      case 'combined':
        // Combine multiple factors
        const recencyBoost = item.item.createdAt ? Math.max(0.5, 1 - (Date.now() - new Date(item.item.createdAt)) / (1000 * 60 * 60 * 24 * 365)) : 1;
        const popularityBoost = 1 + (item.item.views || 0) / 1000;
        rankScore = item.score * recencyBoost * popularityBoost;
        break;
    }

    return { ...item, rankScore };
  });

  // Sort by rank score
  ranked.sort((a, b) => b.rankScore - a.rankScore);

  console.log(`Results ranked using '${ranking}' strategy`);

  return { ...result, item: ranked };
}
```

### Best Practices

1. **Always validate query results** before processing
2. **Use similarity thresholds** to filter low-quality matches
3. **Implement caching** for frequently executed queries
4. **Handle empty results** gracefully
5. **Use hybrid search** for better relevance (semantic + metadata)
6. **Batch queries** when possible for better performance
7. **Apply ranking strategies** based on your use case
8. **Monitor query performance** and optimize accordingly

### Common Pitfalls and Solutions

#### Pitfall 1: Not Checking Result Quality

```javascript
// Problem: Using all results without quality check
const results = await codebolt.vectordb.queryVectorItem('query');
results.item.forEach(item => process(item)); // May include low-quality matches

// Solution: Filter by similarity score
const results = await codebolt.vectordb.queryVectorItem('query');
const qualityResults = results.item?.filter(item => item.score > 0.7) || [];
qualityResults.forEach(item => process(item));
```

#### Pitfall 2: Ignoring Empty Results

```javascript
// Problem: Not handling empty results
const results = await codebolt.vectordb.queryVectorItem('query');
results.item.forEach(item => console.log(item)); // Will fail if empty

// Solution: Check for empty results
const results = await codebolt.vectordb.queryVectorItem('query');
if (results.item && results.item.length > 0) {
  results.item.forEach(item => console.log(item));
} else {
  console.log('No results found');
}
```

#### Pitfall 3: Overly Generic Queries

```javascript
// Problem: Too generic
const results = await codebolt.vectordb.queryVectorItem('what is');

// Solution: Be specific
const results = await codebolt.vectordb.queryVectorItem('what is machine learning in simple terms');
```

### Notes

- Query results are ranked by similarity score (0-1, where 1 is exact match)
- Always check the `item` array exists before accessing results
- Consider implementing caching for frequently executed queries
- Use metadata filters in combination with semantic search for better results
- Monitor query performance and optimize your queries accordingly