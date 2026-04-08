---
sidebar_position: 1
title: Codebase Search Module
---

# Codebase Search Module

The Codebase Search module provides semantic code search capabilities, allowing agents to find relevant code snippets by natural language queries.

## Overview

This module uses AI-powered semantic search to find code based on intent and meaning rather than exact text matches. It's ideal for:
- Finding implementations of specific features
- Locating related code patterns
- Understanding how functionality is implemented
- Discovering code examples

## Quick Start

```typescript
import codebolt from '@codebolt/codeboltjs';

// Search for authentication-related code
const results = await codebolt.codebaseSearch.search(
  'user authentication login flow'
);

// Display results
for (const result of results.results) {
  console.log(`File: ${result.file}`);
  console.log(`Content: ${result.content}`);
  console.log('---');
}
```

## Available Methods

| Method | Description |
|--------|-------------|
| `search(query, targetDirectories?)` | Perform semantic code search |
| `searchMcpTool(query, tags?)` | Search for MCP tools by query |

## Method Details

### search

Performs a semantic search across the codebase.

```typescript
const results = await codebolt.codebaseSearch.search(
  'database connection handling',
  ['src/db', 'src/services']  // Optional: limit to specific directories
);
```

**Parameters:**
- `query` (string) - Natural language search query
- `targetDirectories` (string[], optional) - Directories to limit the search

**Returns:**
```typescript
{
  success: boolean;
  results: CodeSearchResult[];
  message?: string;
}
```

**Result item:**
```typescript
{
  file: string;       // Path to the file
  content: string;    // Matching code snippet
  language: string;   // Programming language
  startLine?: number; // Starting line number
  endLine?: number;   // Ending line number
  score?: number;     // Relevance score
}
```

### searchMcpTool

Search for MCP tools by query and optional tags.

```typescript
const tools = await codebolt.codebaseSearch.searchMcpTool(
  'file operations',
  ['filesystem', 'io']
);
```

## Advanced Examples

### Example 1: Search with Result Ranking
```typescript
const results = await codebolt.codebaseSearch.search('API endpoint validation');

// Rank results by relevance and file type
const ranked = results.results
  .sort((a, b) => (b.score || 0) - (a.score || 0))
  .map(result => ({
    file: result.file,
    score: result.score,
    type: result.file.endsWith('.test.js') ? 'test' : 'source',
    snippet: result.content.substring(0, 100)
  }));

console.table(ranked);
```

### Example 2: Multi-Query Search
```typescript
async function searchWithVariations(query) {
  const variations = [
    query,
    `${query} implementation`,
    `how to ${query}`,
    `${query} example`
  ];

  const allResults = await Promise.all(
    variations.map(q => codebolt.codebaseSearch.search(q))
  );

  // Deduplicate and merge results
  const uniqueResults = new Map();
  allResults.forEach(result => {
    result.results.forEach(r => {
      const key = `${r.file}:${r.startLine}`;
      if (!uniqueResults.has(key)) {
        uniqueResults.set(key, r);
      }
    });
  });

  return Array.from(uniqueResults.values());
}

// Usage
const results = await searchWithVariations('authenticate user');
```

### Example 3: Search and Annotate
```typescript
async function searchAndAnnotate(query) {
  const results = await codebolt.codebaseSearch.search(query);

  const annotated = results.results.map(result => {
    // Get file structure for context
    const jsTree = await codebolt.codeutils.getJsTree(result.file);

    // Find containing function/class
    let context = null;
    if (jsTree.payload) {
      const enclosing = jsTree.payload.structure.find(el =>
        el.startLine <= result.startLine && el.endLine >= result.endLine
      );
      if (enclosing) {
        context = {
          type: enclosing.type,
          name: enclosing.name,
          line: enclosing.startLine
        };
      }
    }

    return {
      ...result,
      context
    };
  });

  return annotated;
}
```

### Example 4: Fuzzy Search with Suggestions
```typescript
async function smartSearch(query, threshold = 0.5) {
  let results = await codebolt.codebaseSearch.search(query);

  // If no results, try alternative queries
  if (results.results.length === 0) {
    console.log('No exact matches. Trying alternatives...');

    const alternatives = [
      query.split(' ').slice(0, -1).join(' '), // Remove last word
      query.split(' ').slice(1).join(' '),     // Remove first word
      query.replace(/ing$/, ''),               // Remove -ing suffix
    ];

    for (const alt of alternatives) {
      if (alt.length > 3) {
        const altResults = await codebolt.codebaseSearch.search(alt);
        if (altResults.results.length > 0) {
          results = altResults;
          console.log(`Found results using alternative query: "${alt}"`);
          break;
        }
      }
    }
  }

  return results;
}
```

### Example 5: Search with Language Filtering
```typescript
async function searchByLanguage(query, languages) {
  const results = await codebolt.codebaseSearch.search(query);

  const filtered = results.results.filter(result =>
    languages.some(lang => {
      const ext = result.file.split('.').pop();
      return lang === ext || result.language === lang;
    })
  );

  return {
    success: true,
    results: filtered,
    totalResults: results.results.length,
    filteredResults: filtered.length
  };
}

// Usage
const typescriptResults = await searchByLanguage('authentication', ['ts', 'tsx']);
```

### Example 6: Search with Pattern Matching
```typescript
async function searchWithPattern(query, pattern) {
  const results = await codebolt.codebaseSearch.search(query);

  const patternMatches = results.results.filter(result => {
    return result.content.match(pattern);
  });

  return {
    success: true,
    results: patternMatches,
    metadata: {
      totalMatches: results.results.length,
      patternMatches: patternMatches.length,
      pattern: pattern.toString()
    }
  };
}

// Usage: Find async functions that handle errors
const results = await searchWithPattern(
  'error handling',
  /async.*catch|try.*catch/g
);
```

### Example 7: Incremental Search
```typescript
async function incrementalSearch(baseQuery, additions) {
  let currentResults = await codebolt.codebaseSearch.search(baseQuery);
  const evolution = [{ query: baseQuery, count: currentResults.results.length }];

  for (const addition of additions) {
    const refinedQuery = `${baseQuery} ${addition}`;
    const refinedResults = await codebolt.codebaseSearch.search(refinedQuery);

    evolution.push({
      query: refinedQuery,
      count: refinedResults.results.length
    });

    currentResults = refinedResults;
  }

  return {
    finalResults: currentResults,
    evolution
  };
}

// Usage
const results = await incrementalSearch('database', [
  'connection',
  'pool',
  'retry logic'
]);
```

### Example 8: Search with File Metadata
```typescript
async function enrichedSearch(query) {
  const [searchResults, markdown] = await Promise.all([
    codebolt.codebaseSearch.search(query),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  const enriched = searchResults.results.map(result => {
    const fileMeta = markdown.files.find(f => f.path === result.file);

    return {
      ...result,
      metadata: {
        totalLines: fileMeta?.content.split('\n').length || 0,
        language: fileMeta?.language || result.language,
        size: fileMeta?.content.length || 0
      }
    };
  });

  return enriched;
}
```

## Advanced Usage Patterns

### Pattern 1: Context-Aware Search
```typescript
async function contextAwareSearch(query, contextFile) {
  // Get context from current file
  const contextResult = await codebolt.codebaseSearch.search(
    `in ${contextFile}: ${query}`
  );

  // Also search globally
  const globalResult = await codebolt.codebaseSearch.search(query);

  // Combine and prioritize local results
  return {
    local: contextResult.results.filter(r =>
      r.file === contextFile || r.file.startsWith(path.dirname(contextFile))
    ),
    global: globalResult.results.filter(r =>
      !contextResult.results.some(cr => cr.file === r.file)
    )
  };
}
```

### Pattern 2: Refinement Loop
```typescript
async function refinementLoop(initialQuery) {
  let query = initialQuery;
  let results = await codebolt.codebaseSearch.search(query);
  let iterations = 0;
  const maxIterations = 5;

  while (results.results.length > 20 && iterations < maxIterations) {
    console.log(`Iteration ${iterations + 1}: ${results.results.length} results`);

    // Analyze results to suggest refinements
    const commonWords = extractCommonWords(results.results.map(r => r.content));
    const refinement = commonWords[0]; // Most common word

    query = `${query} ${refinement}`;
    results = await codebolt.codebaseSearch.search(query);
    iterations++;
  }

  return {
    finalQuery: query,
    results: results.results,
    iterations
  };
}

function extractCommonWords(texts) {
  const words = texts.flatMap(t =>
    t.toLowerCase().match(/\b\w{4,}\b/g) || []
  );
  const frequency = {};
  words.forEach(w => frequency[w] = (frequency[w] || 0) + 1);
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .map(e => e[0]);
}
```

### Pattern 3: Cross-Reference Search
```typescript
async function crossReferenceSearch(query) {
  // Find implementations
  const implResults = await codebolt.codebaseSearch.search(
    `${query} implementation`
  );

  // Find tests
  const testResults = await codebolt.codebaseSearch.search(
    `${query} test`
  );

  // Find documentation
  const docResults = await codebolt.codebaseSearch.search(
    `${query} documentation comment`
  );

  return {
    implementations: implResults.results,
    tests: testResults.results,
    documentation: docResults.results,
    summary: {
      hasImpl: implResults.results.length > 0,
      hasTests: testResults.results.length > 0,
      hasDocs: docResults.results.length > 0,
      coverage: testResults.results.length / Math.max(implResults.results.length, 1)
    }
  };
}
```

### Pattern 4: Semantic Code Navigation
```typescript
async function semanticNavigation(startQuery) {
  const visited = new Set();
  const queue = [startQuery];
  const graph = {};

  while (queue.length > 0 && visited.size < 20) {
    const query = queue.shift();
    if (visited.has(query)) continue;

    visited.add(query);
    const results = await codebolt.codebaseSearch.search(query);

    graph[query] = results.results;

    // Extract related concepts from results
    const related = extractRelatedConcepts(results.results);
    related.forEach(r => {
      if (!visited.has(r)) queue.push(r);
    });
  }

  return graph;
}

function extractRelatedConcepts(results) {
  // Simple concept extraction based on file names and content
  const concepts = new Set();
  results.forEach(r => {
    const words = r.content.match(/\b[A-Z][a-z]+\b/g) || [];
    words.forEach(w => concepts.add(w));
  });
  return Array.from(concepts).slice(0, 5);
}
```

## Error Handling Examples

### Handle No Results
```typescript
async function searchWithFallback(query) {
  const results = await codebolt.codebaseSearch.search(query);

  if (results.results.length === 0) {
    console.warn('No results found. Trying broader search...');

    // Try splitting query into keywords
    const keywords = query.split(' ').filter(w => w.length > 3);
    if (keywords.length > 0) {
      const fallbackResults = await codebolt.codebaseSearch.search(
        keywords[0]
      );

      if (fallbackResults.results.length > 0) {
        return {
          ...fallbackResults,
          fallback: true,
          originalQuery: query,
          fallbackQuery: keywords[0]
        };
      }
    }

    return {
      success: false,
      results: [],
      message: `No results found for "${query}" or alternatives`
    };
  }

  return results;
}
```

### Handle Invalid Queries
```typescript
async function validateAndSearch(query) {
  if (!query || typeof query !== 'string') {
    throw new Error('Query must be a non-empty string');
  }

  if (query.length < 3) {
    throw new Error('Query must be at least 3 characters long');
  }

  // Remove special characters that might cause issues
  const sanitized = query.replace(/[^\w\s]/g, '').trim();

  if (sanitized.length === 0) {
    throw new Error('Query contains no valid search terms');
  }

  return await codebolt.codebaseSearch.search(sanitized);
}
```

### Handle Network Errors
```typescript
async function resilientSearch(query, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await codebolt.codebaseSearch.search(query);
    } catch (error) {
      if (i === maxRetries - 1) {
        throw new Error(`Search failed after ${maxRetries} attempts: ${error.message}`);
      }

      console.warn(`Search attempt ${i + 1} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

## Performance Considerations

1. **Query Complexity**:
   - Longer, more specific queries often yield better results
   - Avoid overly generic terms (e.g., "function", "variable")
   - Use domain-specific terminology when possible

2. **Result Caching**:
   ```typescript
   class SearchCache {
     constructor() {
       this.cache = new Map();
       this.ttl = 60000; // 1 minute
     }

     async search(query) {
       const key = query.toLowerCase();
       const cached = this.cache.get(key);

       if (cached && Date.now() - cached.timestamp < this.ttl) {
         return cached.results;
       }

       const results = await codebolt.codebaseSearch.search(query);
       this.cache.set(key, { results, timestamp: Date.now() });
       return results;
     }
   }
   ```

3. **Batch Searches**:
   ```typescript
   async function batchSearch(queries) {
     const results = await Promise.all(
       queries.map(q => codebolt.codebaseSearch.search(q))
     );

     return results;
   }
   ```

4. **Scoped Searches**:
   - Use `targetDirectories` to limit search scope
   - Reduces processing time and improves result relevance
   - Particularly useful in large codebases

## Common Pitfalls

### Pitfall 1: Too Generic Queries
```typescript
// ❌ Incorrect - too generic
const results = await codebolt.codebaseSearch.search('function');

// ✅ Correct - specific and descriptive
const results = await codebolt.codebaseSearch.search('authenticate user with JWT token');
```

### Pitfall 2: Ignoring Result Scores
```typescript
// ❌ Incorrect - treats all results equally
const results = await codebolt.codebaseSearch.search('API');
results.results.forEach(r => processResult(r));

// ✅ Correct - prioritizes high-score results
const results = await codebolt.codebaseSearch.search('API');
const sorted = results.results.sort((a, b) => (b.score || 0) - (a.score || 0));
sorted.slice(0, 10).forEach(r => processResult(r));
```

### Pitfall 3: Not Validating Results
```typescript
// ❌ Incorrect - assumes results are valid
const results = await codebolt.codebaseSearch.search('database');
const fileContent = await readFile(results.results[0].file);

// ✅ Correct - validates results
const results = await codebolt.codebaseSearch.search('database');

if (results.results.length > 0) {
  const firstResult = results.results[0];

  if (firstResult.file && firstResult.content) {
    const fileContent = await readFile(firstResult.file);
    // Process file content
  } else {
    console.error('Invalid result format');
  }
} else {
  console.error('No results found');
}
```

### Pitfall 4: Over-Refining Queries
```typescript
// ❌ Incorrect - adds too many constraints
const results = await codebolt.codebaseSearch.search(
  'database connection pool retry logic timeout error handling async await typescript'
); // May return no results

// ✅ Correct - starts broad, refines gradually
let results = await codebolt.codebaseSearch.search('database connection');
if (results.results.length > 50) {
  results = await codebolt.codebaseSearch.search('database connection pool');
}
```

## Module Integration Examples

### Integration 1: CodebaseSearch + Codeutils
```typescript
async function searchAndAnalyze(query) {
  const [searchResults, markdown] = await Promise.all([
    codebolt.codebaseSearch.search(query),
    codebolt.codeutils.getAllFilesAsMarkDown()
  ]);

  const analyzed = searchResults.results.map(result => {
    const fileMeta = markdown.files.find(f => f.path === result.file);

    return {
      ...result,
      fileContext: {
        totalLines: fileMeta?.content.split('\n').length || 0,
        language: fileMeta?.language,
        containsTests: fileMeta?.path.includes('test') || false
      }
    };
  });

  return analyzed;
}
```

### Integration 2: CodebaseSearch + Codemap
```typescript
async function searchAndMap(query) {
  const searchResults = await codebolt.codebaseSearch.search(query);

  // Create a codemap showing related files
  const codemap = await codebolt.codemap.create({
    title: `Search Results: ${query}`,
    query: `Files related to "${query}"`
  });

  const structure = {
    query,
    files: searchResults.results.map(r => ({
      path: r.file,
      relevance: r.score,
      snippet: r.content.substring(0, 200)
    }))
  };

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: `Search Results: ${query}`,
    structure
  });

  return codemap;
}
```

### Integration 3: CodebaseSearch + ProjectStructure
```typescript
async function searchInPackage(query, packageName) {
  const [searchResults, structure] = await Promise.all([
    codebolt.codebaseSearch.search(query),
    codebolt.projectStructure.getMetadata()
  ]);

  const pkg = structure.metadata.packages.find(p => p.name === packageName);

  if (!pkg) {
    throw new Error(`Package ${packageName} not found`);
  }

  const packageResults = searchResults.results.filter(r =>
    r.file.startsWith(pkg.path)
  );

  return {
    package: pkg.name,
    query,
    results: packageResults,
    totalResults: searchResults.results.length,
    packageResults: packageResults.length
  };
}
```

## Common Use Cases

### Find Implementation
```typescript
// Find how error handling is implemented
const results = await codebolt.codebaseSearch.search(
  'global error handler middleware exception'
);
```

### Explore Patterns
```typescript
// Find validation patterns
const validation = await codebolt.codebaseSearch.search(
  'input validation sanitize user data'
);
```

### Scoped Search
```typescript
// Search only in test files
const tests = await codebolt.codebaseSearch.search(
  'user registration test',
  ['tests', '__tests__', 'spec']
);
```
```
