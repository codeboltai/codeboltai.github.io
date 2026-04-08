---
name: getAllFilesAsMarkDown
cbbaseinfo:
  description: Retrieves all files in the current project as formatted Markdown content with syntax highlighting.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<GetAllFilesMarkdownResponse>"
    description: A promise that resolves with a `GetAllFilesMarkdownResponse` object containing the Markdown content of all files in the project.
data:
  name: getAllFilesAsMarkDown
  category: codeutils
  link: getAllFilesAsMarkDown.md
---
# getAllFilesAsMarkDown

```typescript
codebolt.codeutils.getAllFilesAsMarkDown(): Promise<GetAllFilesMarkdownResponse>
```

Retrieves all files in the current project as formatted Markdown content with syntax highlighting. 
### Returns

- **`Promise<GetAllFilesMarkdownResponse>`**: A promise that resolves with a [`GetAllFilesMarkdownResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetAllFilesMarkdownResponse) object containing the Markdown content of all files in the project.

### Response Structure

The method returns a Promise that resolves to a [`GetAllFilesMarkdownResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetAllFilesMarkdownResponse) object with the following properties:

- **`type`** (string): Always "getAllFilesMarkdownResponse".
- **`markdown`** (string, optional): Complete markdown content of all files in the project.
- **`files`** (array, optional): An array of file objects with the following structure:
  - **`path`** (string): The file path.
  - **`content`** (string): The file content.
  - **`language`** (string, optional): The programming language of the file.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Get all files as markdown
const markdownResult = await codebolt.codeutils.getAllFilesAsMarkDown();
console.log("Markdown Content:", markdownResult.markdown);
console.log("Files Array:", markdownResult.files);

// Example 2: Error handling
try {
  const result = await codebolt.codeutils.getAllFilesAsMarkDown();
  if (result.success) {
    console.log("Generated markdown successfully");
    console.log("Content length:", result.markdown?.length);
  } else {
    console.error("Failed to generate markdown:", result.error);
  }
} catch (error) {
  console.error("Error:", error);
}

// Example 3: Processing individual files
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.files) {
  result.files.forEach(file => {
    console.log(`File: ${file.path}`);
    console.log(`Language: ${file.language || 'unknown'}`);
    console.log(`Content length: ${file.content.length} characters`);
  });
}

// Example 4: Filter files by language
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.files) {
  const typescriptFiles = result.files.filter(
    file => file.language === 'typescript'
  );
  console.log(`Found ${typescriptFiles.length} TypeScript files`);
  typescriptFiles.forEach(file => {
    console.log(`  - ${file.path}`);
  });
}

// Example 5: Export markdown to file
const fs = require('fs').promises;
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.markdown) {
  await fs.writeFile('project-documentation.md', result.markdown);
  console.log('Markdown exported successfully');
}

// Example 6: Analyze project composition
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.files) {
  const languageStats = result.files.reduce((acc, file) => {
    const lang = file.language || 'unknown';
    acc[lang] = (acc[lang] || 0) + 1;
    return acc;
  }, {});
  console.log('Project composition:', languageStats);
}

// Example 7: Find large files
const result = await codebolt.codeutils.getAllFilesAsMarkDown();
if (result.files) {
  const largeFiles = result.files
    .filter(file => file.content.length > 5000)
    .sort((a, b) => b.content.length - a.content.length)
    .slice(0, 10);

  console.log('Top 10 largest files:');
  largeFiles.forEach(file => {
    console.log(`  ${file.path}: ${file.content.length} chars`);
  });
}

// Example 8: Integrate with codebase search
const codebolt = require('@codebolt/codeboltjs');

async function analyzeProject() {
  const [markdown, searchResults] = await Promise.all([
    codebolt.codeutils.getAllFilesAsMarkDown(),
    codebolt.codebaseSearch.search('authentication')
  ]);

  console.log('Total files:', markdown.files?.length || 0);
  console.log('Auth-related matches:', searchResults.results?.length || 0);

  return {
    totalFiles: markdown.files?.length || 0,
    authFiles: searchResults.results?.length || 0,
    markdown: markdown.markdown
  };
}
```

### Advanced Usage Patterns

#### Pattern 1: Comprehensive Project Analysis
```javascript
async function generateProjectReport() {
  const result = await codebolt.codeutils.getAllFilesAsMarkDown();

  if (!result.files) {
    throw new Error('Failed to retrieve files');
  }

  const report = {
    totalFiles: result.files.length,
    languages: {},
    averageFileSize: 0,
    largestFile: null,
    fileExtensions: {}
  };

  let totalSize = 0;

  for (const file of result.files) {
    const lang = file.language || 'unknown';
    report.languages[lang] = (report.languages[lang] || 0) + 1;

    const ext = file.path.split('.').pop();
    report.fileExtensions[ext] = (report.fileExtensions[ext] || 0) + 1;

    const size = file.content.length;
    totalSize += size;

    if (!report.largestFile || size > report.largestFile.size) {
      report.largestFile = { path: file.path, size };
    }
  }

  report.averageFileSize = totalSize / result.files.length;

  return report;
}
```

#### Pattern 2: Selective Documentation Generation
```javascript
async function generateTargetedDocumentation(includePatterns, excludePatterns) {
  const result = await codebolt.codeutils.getAllFilesAsMarkDown();

  if (!result.files) return null;

  const filteredFiles = result.files.filter(file => {
    const included = includePatterns.some(pattern =>
      file.path.includes(pattern)
    );
    const excluded = excludePatterns.some(pattern =>
      file.path.includes(pattern)
    );
    return included && !excluded;
  });

  return {
    ...result,
    files: filteredFiles,
    markdown: filteredFiles.map(file =>
      `### ${file.path}\n\n\`\`\`${file.language}\n${file.content}\n\`\`\`\n\n---\n\n`
    ).join('\n')
  };
}

// Usage
const docs = await generateTargetedDocumentation(
  ['src/', 'lib/'],  // Include these paths
  ['test/', 'spec/', '.test.']  // Exclude test files
);
```

#### Pattern 3: Change Detection Integration
```javascript
async function detectCodeChanges(previousMarkdown) {
  const currentResult = await codebolt.codeutils.getAllFilesAsMarkDown();

  if (!currentResult.files) return null;

  const changes = {
    added: [],
    modified: [],
    deleted: []
  };

  const currentFiles = new Set(currentResult.files.map(f => f.path));
  const previousFiles = new Set(
    previousMarkdown.files.map(f => f.path)
  );

  // Find new files
  for (const path of currentFiles) {
    if (!previousFiles.has(path)) {
      changes.added.push(path);
    }
  }

  // Find deleted files
  for (const path of previousFiles) {
    if (!currentFiles.has(path)) {
      changes.deleted.push(path);
    }
  }

  // Find modified files (compare content hash)
  for (const currentFile of currentResult.files) {
    const previousFile = previousMarkdown.files.find(
      f => f.path === currentFile.path
    );
    if (previousFile && previousFile.content !== currentFile.content) {
      changes.modified.push(currentFile.path);
    }
  }

  return changes;
}
```

### Error Handling Examples

#### Handle Empty Projects
```javascript
const result = await codebolt.codeutils.getAllFilesAsMarkDown();

if (!result.files || result.files.length === 0) {
  console.warn('No files found in project');
  // Handle empty project scenario
  return;
}
```

#### Handle Malformed Files
```javascript
const result = await codebolt.codeutils.getAllFilesAsMarkDown();

if (result.files) {
  const validFiles = result.files.filter(file => {
    const isValid = file.path && file.content && file.content.length > 0;
    if (!isValid) {
      console.warn(`Skipping malformed file: ${file.path}`);
    }
    return isValid;
  });

  console.log(`Processed ${validFiles.length} valid files`);
}
```

#### Handle Memory Constraints
```javascript
async function getMarkdownSafely() {
  try {
    const result = await codebolt.codeutils.getAllFilesAsMarkDown();

    // Check markdown size
    if (result.markdown && result.markdown.length > 10_000_000) {
      console.warn('Large markdown output (>10MB), consider filtering');
      // Return files array instead for processing
      return { ...result, markdown: null };
    }

    return result;
  } catch (error) {
    if (error.message.includes('memory')) {
      console.error('Memory limit exceeded. Try processing files individually.');
      throw new Error('Project too large for single operation');
    }
    throw error;
  }
}
```

### Performance Considerations

1. **Large Projects**: For projects with thousands of files, consider:
   - Processing files in batches
   - Filtering by directory or language before processing
   - Using the `files` array instead of the full markdown string

2. **Memory Usage**:
   - The complete markdown string can be memory-intensive
   - Prefer using the `files` array for programmatic processing
   - Clear references to large markdown strings when no longer needed

3. **Caching**:
   - Cache results for frequently accessed projects
   - Implement file change detection to avoid regeneration
   - Use incremental updates for large projects

4. **Network Optimization**:
   - The operation completes in ~3ms for typical projects
   - Larger projects may take longer; implement progress indicators

### Common Pitfalls

#### Pitfall 1: Assuming All Files Have Languages
```javascript
// ❌ Incorrect
result.files.forEach(file => {
  console.log(file.language.toUpperCase()); // May throw error
});

// ✅ Correct
result.files.forEach(file => {
  console.log((file.language || 'unknown').toUpperCase());
});
```

#### Pitfall 2: Not Handling Empty Results
```javascript
// ❌ Incorrect
const files = result.files.map(f => f.path); // Fails if result.files is undefined

// ✅ Correct
const files = result.files?.map(f => f.path) || [];
```

#### Pitfall 3: Processing All Files Without Filtering
```javascript
// ❌ Incorrect - processes node_modules, build artifacts, etc.
result.files.forEach(file => {
  processFile(file);
});

// ✅ Correct - filter before processing
const sourceFiles = result.files.filter(file =>
  !file.path.includes('node_modules') &&
  !file.path.includes('.git') &&
  !file.path.includes('dist')
);
sourceFiles.forEach(file => processFile(file));
```

### Integration Examples

#### With Codebase Search
```javascript
async function searchAndDocument(query) {
  const [markdown, searchResults] = await Promise.all([
    codebolt.codeutils.getAllFilesAsMarkDown(),
    codebolt.codebaseSearch.search(query)
  ]);

  // Correlate search results with full file context
  const enrichedResults = searchResults.results.map(result => {
    const fullFile = markdown.files.find(f => f.path === result.file);
    return {
      ...result,
      fullContent: fullFile?.content || result.content
    };
  });

  return enrichedResults;
}
```

#### With Project Structure
```javascript
async function analyzeProjectStructure() {
  const [markdown, structure] = await Promise.all([
    codebolt.codeutils.getAllFilesAsMarkDown(),
    codebolt.projectStructure.getMetadata()
  ]);

  const actualFiles = new Set(markdown.files.map(f => f.path));
  const documentedPackages = structure.metadata.packages;

  const analysis = {
    totalFiles: actualFiles.size,
    packages: documentedPackages.map(pkg => ({
      ...pkg,
      fileCount: markdown.files.filter(f =>
        f.path.startsWith(pkg.path)
      ).length
    }))
  };

  return analysis;
}
```

#### With Codemap
```javascript
async function generateCodemapFromFiles() {
  const markdownResult = await codebolt.codeutils.getAllFilesAsMarkDown();

  if (!markdownResult.files) return null;

  // Group files by directory
  const structure = {};
  markdownResult.files.forEach(file => {
    const parts = file.path.split('/');
    let current = structure;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = { type: 'file', language: file.language };
      } else {
        current[part] = current[part] || { type: 'directory', children: {} };
        current = current[part].children;
      }
    });
  });

  // Create codemap
  const codemap = await codebolt.codemap.create({
    title: 'Project Structure Analysis',
    query: 'What is the project structure?'
  });

  await codebolt.codemap.save(codemap.codemap.id, {
    id: codemap.codemap.id,
    title: 'Project Structure Analysis',
    structure
  });

  return codemap;
}
```

### Sample Output

The function returns markdown content in the following format:

```markdown
### C:\path\to\project\.codeboltconfig.yaml:

```js
// File content here
```

---

### C:\path\to\project\index.js:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

---

### C:\path\to\project\package.json:

```js
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {},
  "devDependencies": {},
  "author": "",
  "license": "ISC"
}
```

### Notes

- The function scans the current project directory and converts all files into a single formatted Markdown document.
- Each file is presented with its full path as a header followed by its content in appropriate code blocks with syntax highlighting.
- The function is optimized for performance and typically completes in ~3ms.
- Files are separated with headers and dividers for easy navigation.
- The `files` array provides structured access to individual file information.
- If the operation fails, check the `error` property for details.