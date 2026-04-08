---
name: add_file
cbbaseinfo:
  description: Adds a file to the CodeBolt File System for indexing and retrieval in RAG operations.
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to add to the knowledge base.
    - name: file_path
      typeName: string
      description: The absolute path where the file is located on the system.
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the file has been successfully added to the RAG system.
    typeArgs: []
data:
  name: add_file
  category: rag
  link: add_file.md
---
# add_file

```typescript
codebolt.rag.add_file(filename: string, file_path: string): Promise<void>
```

Adds a file to the CodeBolt File System for indexing and retrieval in RAG operations.
### Parameters

- **`filename`** (string): The name of the file to add to the knowledge base.
- **`file_path`** (string): The absolute path where the file is located on the system.

### Returns

- **`Promise<void>`**: A promise that resolves when the file has been successfully added to the RAG system.

### Response Structure

The method returns a Promise that resolves when the file is successfully added to the RAG knowledge base. No data is returned on success, but the operation may throw an error if the file cannot be added.

### Examples

#### Basic Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

async function exampleAddFile() {
    await codebolt.rag.add_file("example.txt", "/path/to/file");
    console.log("File added successfully.");
}

exampleAddFile();
```

#### Adding Documentation Files

```javascript
async function indexDocumentation() {
    const docs = [
        { name: "api.md", path: "/docs/api.md" },
        { name: "setup.md", path: "/docs/setup.md" },
        { name: "troubleshooting.md", path: "/docs/troubleshooting.md" }
    ];

    for (const doc of docs) {
        await codebolt.rag.add_file(doc.name, doc.path);
        console.log(`✅ Indexed: ${doc.name}`);
    }
}

indexDocumentation();
```

#### Batch Processing with Error Handling

```javascript
async function batchAddFiles(files) {
    const results = [];

    for (const file of files) {
        try {
            await codebolt.rag.add_file(file.name, file.path);
            results.push({ success: true, file: file.name });
            console.log(`✅ Added: ${file.name}`);
        } catch (error) {
            results.push({ success: false, file: file.name, error: error.message });
            console.error(`❌ Failed to add ${file.name}:`, error.message);
        }
    }

    return results;
}

// Usage
const files = [
    { name: "readme.md", path: "/project/README.md" },
    { name: "changelog.md", path: "/project/CHANGELOG.md" }
];

const results = await batchAddFiles(files);
console.log('Batch results:', results);
```

#### Adding Files from a Directory

```javascript
async function indexDirectory(directoryPath) {
    const fs = require('fs').promises;

    try {
        const files = await fs.readdir(directoryPath);

        for (const file of files) {
            const filePath = `${directoryPath}/${file}`;

            // Only add markdown and text files
            if (file.endsWith('.md') || file.endsWith('.txt')) {
                await codebolt.rag.add_file(file, filePath);
                console.log(`Indexed: ${file}`);
            }
        }
    } catch (error) {
        console.error('Error reading directory:', error);
    }
}

indexDirectory('/project/docs');
```

#### Parallel File Addition

```javascript
async function parallelAddFiles(files) {
    const batchSize = 5;

    for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);

        await Promise.all(
            batch.map(file =>
                codebolt.rag.add_file(file.name, file.path)
                    .then(() => console.log(`✅ ${file.name}`))
                    .catch(error => console.error(`❌ ${file.name}:`, error.message))
            )
        );

        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}`);
    }
}

parallelAddFiles([
    { name: "doc1.md", path: "/docs/doc1.md" },
    { name: "doc2.md", path: "/docs/doc2.md" },
    { name: "doc3.md", path: "/docs/doc3.md" }
]);
```

#### Validation Before Adding

```javascript
async function safeAddFile(filename, filepath) {
    const fs = require('fs').promises;

    // Validate file exists
    try {
        await fs.access(filepath);
    } catch (error) {
        throw new Error(`File does not exist: ${filepath}`);
    }

    // Validate file size (limit to 10MB)
    const stats = await fs.stat(filepath);
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (stats.size > maxSize) {
        throw new Error(`File too large: ${stats.size} bytes (max: ${maxSize})`);
    }

    // Add the file
    await codebolt.rag.add_file(filename, filepath);
    console.log(`✅ File added: ${filename} (${stats.size} bytes)`);
}

safeAddFile("large-doc.md", "/docs/large-doc.md");
```

#### File Type Filtering

```javascript
const ALLOWED_EXTENSIONS = ['.md', '.txt', '.json', '.yaml', '.yml'];

async function addFileByType(filename, filepath) {
    const extension = filename.substring(filename.lastIndexOf('.'));

    if (!ALLOWED_EXTENSIONS.includes(extension)) {
        throw new Error(`Unsupported file type: ${extension}`);
    }

    await codebolt.rag.add_file(filename, filepath);
    console.log(`✅ Added ${extension} file: ${filename}`);
}

// Usage
await addFileByType("config.json", "/project/config.json");
await addFileByType("README.md", "/project/README.md");
```

#### Retry Logic for Failed Adds

```javascript
async function addFileWithRetry(filename, filepath, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            await codebolt.rag.add_file(filename, filepath);
            console.log(`✅ File added on attempt ${attempt}: ${filename}`);
            return { success: true, attempt };
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error.message);

            if (attempt === maxRetries) {
                console.error(`❌ All ${maxRetries} attempts failed for ${filename}`);
                return { success: false, error: error.message };
            }

            // Wait before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
    }
}

addFileWithRetry("important.md", "/docs/important.md");
```

#### Progress Tracking

```javascript
async function addFilesWithProgress(files) {
    let completed = 0;
    let failed = 0;
    const total = files.length;

    console.log(`Starting to add ${total} files...`);

    for (const file of files) {
        try {
            await codebolt.rag.add_file(file.name, file.path);
            completed++;
            console.log(`[${completed}/${total}] ✅ ${file.name}`);
        } catch (error) {
            failed++;
            console.error(`[${completed + failed}/${total}] ❌ ${file.name}: ${error.message}`);
        }
    }

    console.log(`\n📊 Summary:`);
    console.log(`   ✅ Completed: ${completed}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   📁 Total: ${total}`);

    return { completed, failed, total };
}

addFilesWithProgress([
    { name: "doc1.md", path: "/docs/doc1.md" },
    { name: "doc2.md", path: "/docs/doc2.md" }
]);
```

### Advanced Usage Patterns

#### Automatic Project Documentation Indexing

```javascript
async function indexProjectDocs() {
    const projectPath = await codebolt.project.getProjectPath();

    if (!projectPath.success) {
        throw new Error('No project open');
    }

    const docLocations = [
        `${projectPath.path}/README.md`,
        `${projectPath.path}/docs`,
        `${projectPath.path}/documentation`,
        `${projectPath.path}/CONTRIBUTING.md`
    ];

    let indexedCount = 0;

    for (const location of docLocations) {
        try {
            const fs = require('fs').promises;
            const stats = await fs.stat(location);

            if (stats.isFile()) {
                const filename = location.split('/').pop();
                await codebolt.rag.add_file(filename, location);
                indexedCount++;
                console.log(`✅ Indexed: ${filename}`);
            } else if (stats.isDirectory()) {
                const files = await fs.readdir(location);
                for (const file of files) {
                    if (file.endsWith('.md')) {
                        await codebolt.rag.add_file(file, `${location}/${file}`);
                        indexedCount++;
                    }
                }
            }
        } catch (error) {
            console.log(`Skipping ${location}: ${error.message}`);
        }
    }

    console.log(`\n📚 Total files indexed: ${indexedCount}`);
    return indexedCount;
}

indexProjectDocs();
```

#### File Deduplication

```javascript
class FileIndexer {
    constructor() {
        this.indexedFiles = new Set();
    }

    async addFileIfNotIndexed(filename, filepath) {
        const fileKey = `${filename}:${filepath}`;

        if (this.indexedFiles.has(fileKey)) {
            console.log(`⏭️  Skipping already indexed: ${filename}`);
            return { success: true, cached: true };
        }

        await codebolt.rag.add_file(filename, filepath);
        this.indexedFiles.add(fileKey);
        console.log(`✅ Indexed: ${filename}`);

        return { success: true, cached: false };
    }

    getStats() {
        return {
            totalIndexed: this.indexedFiles.size,
            files: Array.from(this.indexedFiles)
        };
    }
}

// Usage
const indexer = new FileIndexer();
await indexer.addFileIfNotIndexed("doc.md", "/docs/doc.md");
await indexer.addFileIfNotIndexed("doc.md", "/docs/doc.md"); // Will be skipped
console.log('Stats:', indexer.getStats());
```

### Error Handling Examples

#### Comprehensive Error Handling

```javascript
async function addFileWithErrorHandling(filename, filepath) {
    try {
        // Validate inputs
        if (!filename || typeof filename !== 'string') {
            throw new Error('Invalid filename provided');
        }

        if (!filepath || typeof filepath !== 'string') {
            throw new Error('Invalid filepath provided');
        }

        // Check if path is absolute
        if (!filepath.startsWith('/')) {
            throw new Error('Filepath must be absolute');
        }

        // Add the file
        await codebolt.rag.add_file(filename, filepath);

        return {
            success: true,
            filename,
            filepath,
            timestamp: new Date().toISOString()
        };

    } catch (error) {
        console.error('Error adding file:', error.message);

        return {
            success: false,
            filename,
            filepath,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}
```

### Common Pitfalls

#### Pitfall 1: Using Relative Paths

```javascript
// ❌ Wrong - relative path
await codebolt.rag.add_file("doc.md", "./docs/doc.md");

// ✅ Correct - absolute path
await codebolt.rag.add_file("doc.md", "/absolute/path/to/docs/doc.md");
```

#### Pitfall 2: Not Initializing RAG First

```javascript
// ❌ Wrong - forgot to initialize
await codebolt.rag.add_file("doc.md", "/docs/doc.md");

// ✅ Correct - initialize first
await codebolt.rag.init();
await codebolt.rag.add_file("doc.md", "/docs/doc.md");
```

#### Pitfall 3: Ignoring Errors

```javascript
// ❌ Wrong - no error handling
await codebolt.rag.add_file(filename, filepath);

// ✅ Correct - with error handling
try {
    await codebolt.rag.add_file(filename, filepath);
} catch (error) {
    console.error('Failed to add file:', error);
    // Handle error appropriately
}
```

### Performance Considerations

- **Batch Size**: When adding multiple files, process them in batches of 5-10 to avoid overwhelming the system
- **File Size**: Large files (>10MB) may take longer to process and could impact performance
- **Network Latency**: If using remote file storage, consider network latency when adding files
- **Indexing Time**: Allow time for files to be indexed after adding before querying

### Integration Examples

#### With File System Module

```javascript
async function indexProjectFiles() {
    const projectPath = await codebolt.project.getProjectPath();

    if (!projectPath.success) {
        throw new Error('No project open');
    }

    const files = await codebolt.fs.listFiles(projectPath.path);
    const textFiles = files.filter(f =>
        f.name.endsWith('.md') ||
        f.name.endsWith('.txt') ||
        f.name.endsWith('.json')
    );

    for (const file of textFiles) {
        await codebolt.rag.add_file(file.name, file.path);
    }

    console.log(`Indexed ${textFiles.length} files`);
}
```