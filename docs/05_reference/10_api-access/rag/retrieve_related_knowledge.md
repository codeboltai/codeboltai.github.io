---
name: retrieve_related_knowledge
cbbaseinfo:
  description: "Retrieves related knowledge for a given query from the indexed files in the RAG system, enabling semantic search and context-aware information retrieval."
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The query or question to retrieve related knowledge for. Can be natural language or specific keywords.
    - name: filename
      typeName: string
      description: The name of the file to search within for related knowledge. Must be a file previously added to the RAG system.
  returns:
    signatureTypeName: "Promise<any>"
    description: A promise that resolves with the retrieved knowledge or relevant information. The structure depends on the RAG implementation.
    typeArgs: []
data:
  name: retrieve_related_knowledge
  category: rag
  link: retrieve_related_knowledge.md
---
# retrieve_related_knowledge

```typescript
codebolt.rag.retrieve_related_knowledge(query: string, filename: string): Promise<any>
```

Retrieves related knowledge for a given query from the indexed files in the RAG system, enabling semantic search and context-aware information retrieval.
### Parameters

- **`query`** (string): The query or question to retrieve related knowledge for. Can be natural language or specific keywords.
- **`filename`** (string): The name of the file to search within for related knowledge. Must be a file previously added to the RAG system.

### Returns

- **`Promise<any>`**: A promise that resolves with the retrieved knowledge or relevant information. The structure depends on the RAG implementation.

### Response Structure

The method returns a Promise that resolves with the retrieved knowledge. The exact structure depends on the RAG system implementation, but typically includes:

- **`content`** (string, optional): The retrieved knowledge content
- **`relevance`** (number, optional): Relevance score of the result
- **`metadata`** (object, optional): Additional metadata about the source
- **`error`** (string, optional): Error details if the retrieval fails

### Examples

#### Basic Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

async function exampleRetrieveRelatedKnowledge() {
    const result = await codebolt.rag.retrieve_related_knowledge(
        "What is CodeBolt?",
        "example.txt"
    );
    console.log("Related knowledge:", result);
}

exampleRetrieveRelatedKnowledge();
```

#### Query with Context

```javascript
async function queryWithContext() {
    const query = "How do I authenticate users?";
    const contextFile = "authentication.md";

    const knowledge = await codebolt.rag.retrieve_related_knowledge(
        query,
        contextFile
    );

    if (knowledge) {
        console.log('Found relevant information about authentication');
        console.log('Knowledge:', knowledge);
    } else {
        console.log('No relevant information found');
    }
}

queryWithContext();
```

#### Error Handling for Retrieval

```javascript
async function safeKnowledgeRetrieval(query, filename) {
    try {
        const knowledge = await codebolt.rag.retrieve_related_knowledge(
            query,
            filename
        );

        return {
            success: true,
            query,
            filename,
            knowledge,
            timestamp: new Date().toISOString()
        };

    } catch (error) {
        console.error('Error retrieving knowledge:', error.message);

        return {
            success: false,
            query,
            filename,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

// Usage
const result = await safeKnowledgeRetrieval(
    "database connection setup",
    "database.md"
);
```

#### Multiple Query Strategies

```javascript
async function queryWithStrategies(mainQuery, filename) {
    const strategies = [
        mainQuery,
        `${mainQuery} tutorial`,
        `${mainQuery} example`,
        `how to ${mainQuery}`,
        `${mainQuery} best practices`
    ];

    const results = [];

    for (const strategy of strategies) {
        try {
            const result = await codebolt.rag.retrieve_related_knowledge(
                strategy,
                filename
            );

            if (result) {
                results.push({ query: strategy, result });
                console.log(`✅ Found results for: "${strategy}"`);
            }
        } catch (error) {
            console.log(`❌ No results for: "${strategy}"`);
        }
    }

    return results;
}

// Usage
const results = await queryWithStrategies("user authentication", "auth.md");
```

#### Retry Logic with Timeout

```javascript
async function retrieveWithRetry(query, filename, options = {}) {
    const {
        maxRetries = 3,
        timeout = 5000,
        delay = 1000
    } = options;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await Promise.race([
                codebolt.rag.retrieve_related_knowledge(query, filename),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Timeout')), timeout)
                )
            ]);

            console.log(`✅ Retrieved on attempt ${attempt}`);
            return { success: true, result, attempt };

        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error.message);

            if (attempt === maxRetries) {
                return {
                    success: false,
                    error: `All ${maxRetries} attempts failed`,
                    lastError: error.message
                };
            }

            // Exponential backoff
            await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
    }
}

// Usage
const result = await retrieveWithRetry(
    "API endpoint configuration",
    "api.md",
    { maxRetries: 5, timeout: 3000 }
);
```

#### Query Enhancement

```javascript
async function enhancedQuery(baseQuery, filename, context = {}) {
    // Build enhanced query with context
    const enhanced = `
Original Query: ${baseQuery}

Context:
${Object.entries(context)
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n')}
    `.trim();

    const knowledge = await codebolt.rag.retrieve_related_knowledge(
        enhanced,
        filename
    );

    return {
        originalQuery: baseQuery,
        enhancedQuery: enhanced,
        knowledge,
        context
    };
}

// Usage
const result = await enhancedQuery(
    "user permissions",
    "authorization.md",
    {
        role: "admin",
        resource: "database",
        action: "write"
    }
);
```

#### Batch Query Processing

```javascript
async function batchQuery(queries, filename) {
    const batchSize = 3;
    const allResults = [];

    for (let i = 0; i < queries.length; i += batchSize) {
        const batch = queries.slice(i, i + batchSize);

        const batchResults = await Promise.all(
            batch.map(query =>
                codebolt.rag.retrieve_related_knowledge(query, filename)
                    .then(result => ({ query, result, success: true }))
                    .catch(error => ({ query, error: error.message, success: false }))
            )
        );

        allResults.push(...batchResults);
        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}`);
    }

    return allResults;
}

// Usage
const results = await batchQuery([
    "authentication",
    "authorization",
    "user management",
    "role-based access",
    "session handling"
], "security.md");
```

#### Query Result Ranking

```javascript
async function rankedQuery(query, filenames) {
    const results = await Promise.all(
        filenames.map(async filename => {
            try {
                const knowledge = await codebolt.rag.retrieve_related_knowledge(
                    query,
                    filename
                );

                return {
                    filename,
                    knowledge,
                    success: true,
                    timestamp: new Date().toISOString()
                };
            } catch (error) {
                return {
                    filename,
                    error: error.message,
                    success: false
                };
            }
        })
    );

    // Filter successful results
    const successful = results.filter(r => r.success);

    // Sort by relevance (if relevance score is available)
    const ranked = successful.sort((a, b) => {
        const scoreA = a.knowledge?.relevance || 0;
        const scoreB = b.knowledge?.relevance || 0;
        return scoreB - scoreA;
    });

    return {
        query,
        total: filenames.length,
        successful: successful.length,
        ranked: ranked.map(r => ({
            filename: r.filename,
            knowledge: r.knowledge
        }))
    };
}

// Usage
const ranked = await rankedQuery(
    "error handling best practices",
    ["backend.md", "frontend.md", "testing.md", "deployment.md"]
);
```

#### Query Caching

```javascript
class QueryCache {
    constructor(ttl = 5 * 60 * 1000) { // 5 minutes default
        this.cache = new Map();
        this.ttl = ttl;
    }

    async retrieve(query, filename) {
        const cacheKey = `${query}:${filename}`;
        const cached = this.cache.get(cacheKey);

        // Check cache
        if (cached && Date.now() - cached.timestamp < this.ttl) {
            console.log('✅ Cache hit');
            return cached.data;
        }

        console.log('❌ Cache miss, fetching...');

        // Fetch from RAG
        const knowledge = await codebolt.rag.retrieve_related_knowledge(
            query,
            filename
        );

        // Store in cache
        this.cache.set(cacheKey, {
            data: knowledge,
            timestamp: Date.now()
        });

        return knowledge;
    }

    clear() {
        this.cache.clear();
        console.log('Cache cleared');
    }

    getStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }
}

// Usage
const cache = new QueryCache(10 * 60 * 1000); // 10 minutes TTL

const result1 = await cache.retrieve("API usage", "api.md");
const result2 = await cache.retrieve("API usage", "api.md"); // From cache
```

#### Fallback Strategy

```javascript
async function retrieveWithFallback(query, filename, fallbackQuery = null) {
    try {
        const knowledge = await codebolt.rag.retrieve_related_knowledge(
            query,
            filename
        );

        if (knowledge) {
            return {
                success: true,
                source: 'primary',
                query,
                knowledge
            };
        }

        // No results, try fallback
        if (fallbackQuery) {
            console.log('No results for primary query, trying fallback...');

            const fallbackResult = await codebolt.rag.retrieve_related_knowledge(
                fallbackQuery,
                filename
            );

            return {
                success: true,
                source: 'fallback',
                query: fallbackQuery,
                knowledge: fallbackResult
            };
        }

        return {
            success: false,
            query,
            message: 'No knowledge found'
        };

    } catch (error) {
        return {
            success: false,
            query,
            error: error.message
        };
    }
}

// Usage
const result = await retrieveWithFallback(
    "JWT token validation",
    "auth.md",
    "token authentication"
);
```

### Advanced Usage Patterns

#### Intelligent Query Expansion

```javascript
async function expandQuery(originalQuery, filename) {
    // Extract key terms from query
    const terms = originalQuery.toLowerCase().split(/\s+/);

    // Generate variations
    const variations = [
        originalQuery,
        ...terms,
        `${originalQuery} guide`,
        `${originalQuery} documentation`,
        `${originalQuery} tutorial`
    ];

    const results = [];

    for (const variation of variations) {
        try {
            const knowledge = await codebolt.rag.retrieve_related_knowledge(
                variation,
                filename
            );

            if (knowledge) {
                results.push({
                    query: variation,
                    knowledge,
                    relevance: knowledge?.relevance || 0
                });
            }
        } catch (error) {
            // Continue to next variation
        }
    }

    // Return best result
    results.sort((a, b) => b.relevance - a.relevance);

    return {
        originalQuery,
        bestMatch: results[0]?.knowledge,
        variations: results.length,
        allResults: results
    };
}
```

#### Context-Aware Retrieval

```javascript
class ContextAwareRetriever {
    constructor() {
        this.context = new Map();
    }

    setContext(key, value) {
        this.context.set(key, value);
    }

    async retrieve(query, filename) {
        // Build context-aware query
        const contextString = Array.from(this.context.entries())
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n');

        const enhancedQuery = `
${contextString}

Question: ${query}
        `.trim();

        return await codebolt.rag.retrieve_related_knowledge(
            enhancedQuery,
            filename
        );
    }

    clearContext() {
        this.context.clear();
    }
}

// Usage
const retriever = new ContextAwareRetriever();
retriever.setContext('project', 'e-commerce');
retriever.setContext('role', 'developer');

const knowledge = await retriever.retrieve(
    "payment processing",
    "payments.md"
);
```

### Integration Examples

#### With Chat Module

```javascript
async function chatWithKnowledge(userQuestion, contextFile) {
    // Retrieve relevant knowledge
    const knowledge = await codebolt.rag.retrieve_related_knowledge(
        userQuestion,
        contextFile
    );

    // Build enhanced prompt
    const enhancedPrompt = `
Based on the following knowledge:
${knowledge}

User question: ${userQuestion}

Please provide a helpful answer:
    `;

    // Get chat response
    const response = await codebolt.chat.sendMessage(enhancedPrompt);

    return {
        question: userQuestion,
        context: knowledge,
        answer: response
    };
}
```

#### With Project Module

```javascript
async function searchProjectDocumentation(query) {
    const projectPath = await codebolt.project.getProjectPath();

    if (!projectPath.success) {
        throw new Error('No project open');
    }

    // Common documentation files
    const docFiles = [
        'README.md',
        'CONTRIBUTING.md',
        'docs/api.md',
        'docs/guide.md'
    ];

    const results = [];

    for (const file of docFiles) {
        try {
            const knowledge = await codebolt.rag.retrieve_related_knowledge(
                query,
                file
            );

            if (knowledge) {
                results.push({
                    file,
                    knowledge
                });
            }
        } catch (error) {
            // File might not exist or be indexed
        }
    }

    return {
        project: projectPath.projectName,
        query,
        results
    };
}
```

### Common Pitfalls

#### Pitfall 1: Querying Non-Indexed Files

```javascript
// ❌ Wrong - file not indexed
await codebolt.rag.retrieve_related_knowledge("query", "non-indexed.md");

// ✅ Correct - add file first
await codebolt.rag.add_file("non-indexed.md", "/path/to/non-indexed.md");
await codebolt.rag.retrieve_related_knowledge("query", "non-indexed.md");
```

#### Pitfall 2: Vague Queries

```javascript
// ❌ Wrong - too vague
await codebolt.rag.retrieve_related_knowledge("help", "docs.md");

// ✅ Correct - specific query
await codebolt.rag.retrieve_related_knowledge(
    "how to reset user password",
    "docs.md"
);
```

#### Pitfall 3: No Error Handling

```javascript
// ❌ Wrong - no error handling
const result = await codebolt.rag.retrieve_related_knowledge(query, filename);

// ✅ Correct - with error handling
try {
    const result = await codebolt.rag.retrieve_related_knowledge(query, filename);
    if (result) {
        console.log('Knowledge retrieved');
    }
} catch (error) {
    console.error('Retrieval failed:', error);
}
```

### Performance Considerations

- **Query Complexity**: More complex queries may take longer to process
- **File Size**: Searching in larger files may be slower
- **Caching**: Implement caching for frequently asked queries
- **Batch Queries**: Use batch processing for multiple queries
- **Network**: Consider network latency if RAG system is remote

### Best Practices

1. **Initialize RAG**: Always initialize the RAG system before querying
2. **Validate Files**: Ensure files are indexed before querying them
3. **Specific Queries**: Use specific, well-formed queries for better results
4. **Error Handling**: Implement comprehensive error handling
5. **Caching**: Cache frequently accessed knowledge
6. **Query Enhancement**: Enhance queries with context when needed
7. **Fallback Strategies**: Implement fallback mechanisms for failed queries