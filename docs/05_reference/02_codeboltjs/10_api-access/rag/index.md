---
cbapicategory:
  - name: add_file
    link: /docs/api/ApiAccess/rag/add_file
    description: Adds a file to the CodeBolt File System.
  - name: init
    link: /docs/api/ApiAccess/rag/init
    description: Initializes the CodeBolt File System Module.
  - name: retrieve_related_knowledge
    link: /docs/api/ApiAccess/rag/retrieve_related_knowledge
    description: Retrieves related knowledge for a given query and filename.

---
# rag
<CBAPICategory />

## Overview

The RAG (Retrieval-Augmented Generation) module provides powerful functionality for managing and querying knowledge within your CodeBolt projects. It enables intelligent file indexing and semantic search capabilities.

## Quick Start

```javascript
import codebolt from '@codebolt/codeboltjs';

// Initialize RAG system
await codebolt.rag.init();

// Add files to the knowledge base
await codebolt.rag.add_file("documentation.md", "/path/to/docs");

// Query the knowledge base
const results = await codebolt.rag.retrieve_related_knowledge(
    "How do I set up authentication?",
    "documentation.md"
);
```

## Common Workflows

### 1. Building a Knowledge Base

```javascript
async function buildKnowledgeBase(files) {
    // Initialize RAG system
    await codebolt.rag.init();

    // Add multiple files
    for (const file of files) {
        try {
            await codebolt.rag.add_file(file.name, file.path);
            console.log(`✅ Added: ${file.name}`);
        } catch (error) {
            console.error(`❌ Failed to add ${file.name}:`, error);
        }
    }
}

// Usage
const docs = [
    { name: "api.md", path: "/docs/api.md" },
    { name: "setup.md", path: "/docs/setup.md" },
    { name: "troubleshooting.md", path: "/docs/troubleshooting.md" }
];

await buildKnowledgeBase(docs);
```

### 2. Intelligent Code Search

```javascript
async function searchCodebase(query, contextFile) {
    const results = await codebolt.rag.retrieve_related_knowledge(
        query,
        contextFile
    );

    // Process and display results
    if (results) {
        console.log(`Found relevant information for: "${query}"`);
        return results;
    }
}

// Usage
await searchCodebase("authentication middleware", "auth.js");
await searchCodebase("database connection setup", "database.js");
```

### 3. Documentation Assistant

```javascript
class DocumentationAssistant {
    async initialize(docFiles) {
        await codebolt.rag.init();

        for (const file of docFiles) {
            await codebolt.rag.add_file(file.name, file.path);
        }
    }

    async answerQuestion(question, contextFile) {
        const knowledge = await codebolt.rag.retrieve_related_knowledge(
            question,
            contextFile
        );

        return {
            question,
            context: contextFile,
            knowledge: knowledge || "No relevant information found"
        };
    }
}

// Usage
const assistant = new DocumentationAssistant();
await assistant.initialize([
    { name: "user-guide.md", path: "/docs/user-guide.md" },
    { name: "api-reference.md", path: "/docs/api-reference.md" }
]);

const answer = await assistant.answerQuestion(
    "How do I reset my password?",
    "user-guide.md"
);
```

## Best Practices

### File Organization

```javascript
// Best practice: Organize files by category
const categorizedFiles = {
    api: [
        { name: "endpoints.md", path: "/docs/api/endpoints.md" },
        { name: "authentication.md", path: "/docs/api/authentication.md" }
    ],
    guides: [
        { name: "getting-started.md", path: "/docs/guides/getting-started.md" },
        { name: "advanced-usage.md", path: "/docs/guides/advanced-usage.md" }
    ]
};

// Add files by category
async function indexByCategory(category, files) {
    console.log(`Indexing ${category} files...`);
    for (const file of files) {
        await codebolt.rag.add_file(file.name, file.path);
    }
}

await indexByCategory('api', categorizedFiles.api);
await indexByCategory('guides', categorizedFiles.guides);
```

### Error Handling

```javascript
async function safeFileAdd(filename, filepath) {
    try {
        await codebolt.rag.add_file(filename, filepath);
        return { success: true, filename };
    } catch (error) {
        console.error(`Error adding ${filename}:`, error.message);

        // Implement retry logic
        if (error.message.includes('temporary')) {
            console.log('Retrying...');
            await new Promise(resolve => setTimeout(resolve, 1000));
            return await safeFileAdd(filename, filepath);
        }

        return { success: false, filename, error: error.message };
    }
}
```

### Query Optimization

```javascript
async function optimizedQuery(query, filename, options = {}) {
    const {
        maxRetries = 3,
        timeout = 5000,
        fallback = true
    } = options;

    for (let i = 0; i < maxRetries; i++) {
        try {
            const result = await Promise.race([
                codebolt.rag.retrieve_related_knowledge(query, filename),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Timeout')), timeout)
                )
            ]);

            return { success: true, data: result };
        } catch (error) {
            if (i === maxRetries - 1) {
                if (fallback) {
                    console.log('Query failed, using fallback strategy');
                    return { success: false, fallback: true };
                }
                return { success: false, error: error.message };
            }
        }
    }
}
```

## Performance Considerations

### Batch Processing

```javascript
// Process files in batches to avoid overwhelming the system
async function batchAddFiles(files, batchSize = 5) {
    for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);

        await Promise.all(
            batch.map(file =>
                codebolt.rag.add_file(file.name, file.path)
                    .catch(error => ({
                        file: file.name,
                        error: error.message
                    }))
            )
        );

        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}`);
    }
}
```

### Caching Strategy

```javascript
class RAGCache {
    constructor() {
        this.cache = new Map();
        this.ttl = 5 * 60 * 1000; // 5 minutes
    }

    async retrieve(query, filename) {
        const cacheKey = `${query}:${filename}`;
        const cached = this.cache.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < this.ttl) {
            console.log('Cache hit');
            return cached.data;
        }

        console.log('Cache miss, fetching...');
        const data = await codebolt.rag.retrieve_related_knowledge(
            query,
            filename
        );

        this.cache.set(cacheKey, {
            data,
            timestamp: Date.now()
        });

        return data;
    }

    clear() {
        this.cache.clear();
    }
}
```

## Integration Examples

### With Chat Module

```javascript
async function chatWithRAG(userMessage, contextFile) {
    // Retrieve relevant knowledge
    const context = await codebolt.rag.retrieve_related_knowledge(
        userMessage,
        contextFile
    );

    // Enhance chat message with context
    const enhancedMessage = `
Context from documentation:
${context}

User question: ${userMessage}
    `;

    // Send to chat
    const response = await codebolt.chat.sendMessage(enhancedMessage);
    return response;
}
```

### With File System

```javascript
async function indexProjectDocumentation(projectPath) {
    const docs = await codebolt.fs.listFiles(projectPath);
    const markdownFiles = docs.filter(file =>
        file.name.endsWith('.md') || file.name.endsWith('.txt')
    );

    console.log(`Found ${markdownFiles.length} documentation files`);

    for (const file of markdownFiles) {
        await codebolt.rag.add_file(
            file.name,
            file.path
        );
        console.log(`Indexed: ${file.name}`);
    }
}
```

### With Project Module

```javascript
async function setupProjectKnowledgeBase() {
    // Get project path
    const projectInfo = await codebolt.project.getProjectPath();

    if (!projectInfo.success) {
        throw new Error('No project open');
    }

    // Initialize RAG
    await codebolt.rag.init();

    // Index common documentation locations
    const docPaths = [
        `${projectInfo.path}/README.md`,
        `${projectInfo.path}/docs`,
        `${projectInfo.path}/documentation`
    ];

    for (const path of docPaths) {
        try {
            const files = await codebolt.fs.listFiles(path);
            for (const file of files) {
                await codebolt.rag.add_file(file.name, file.path);
            }
        } catch (error) {
            console.log(`No docs found at ${path}`);
        }
    }
}
```

## Common Pitfalls and Solutions

### Pitfall 1: Not Initializing RAG

```javascript
// ❌ Wrong - forgot to initialize
await codebolt.rag.add_file("doc.md", "/path/to/doc");

// ✅ Correct - initialize first
await codebolt.rag.init();
await codebolt.rag.add_file("doc.md", "/path/to/doc");
```

### Pitfall 2: Incorrect File Paths

```javascript
// ❌ Wrong - relative path
await codebolt.rag.add_file("doc.md", "./docs/doc.md");

// ✅ Correct - absolute path
await codebolt.rag.add_file("doc.md", "/absolute/path/to/docs/doc.md");
```

### Pitfall 3: No Error Handling

```javascript
// ❌ Wrong - no error handling
await codebolt.rag.add_file(filename, filepath);

// ✅ Correct - with error handling
try {
    await codebolt.rag.add_file(filename, filepath);
} catch (error) {
    console.error('Failed to add file:', error);
    // Implement fallback or retry logic
}
```

## Advanced Patterns

### Multi-File Query

```javascript
async function queryMultipleFiles(query, filenames) {
    const results = await Promise.all(
        filenames.map(filename =>
            codebolt.rag.retrieve_related_knowledge(query, filename)
        )
    );

    // Aggregate and rank results
    return results
        .filter(result => result !== null && result !== undefined)
        .map((result, index) => ({
            source: filenames[index],
            knowledge: result
        }));
}
```

### Contextual Search

```javascript
async function contextualSearch(baseQuery, context, filename) {
    // Enhance query with context
    const enhancedQuery = `
Context: ${context}
Query: ${baseQuery}
    `.trim();

    return await codebolt.rag.retrieve_related_knowledge(
        enhancedQuery,
        filename
    );
}
```
