---
name: searchFiles
cbbaseinfo:
  description: "'Searches for files matching a regex pattern within file contents in the specified directory. Supports advanced regex patterns and file type filtering for targeted searches.'"
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: "The directory path to search within (e.g., '.', './src', '/home/user/documents')."
    - name: regex
      typeName: string
      description: "The regex pattern to search for within file contents (e.g., 'function', 'class\\s+\\w+', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')."
    - name: filePattern
      typeName: string
      description: "The file pattern to filter which files to search (e.g., '*.js', '*.json', '*.*', '*.ts')."
  returns:
    signatureTypeName: "Promise<SearchFilesResponse>"
    description: A promise that resolves with search results containing matching files and their locations.
data:
  name: searchFiles
  category: fs
  link: searchFiles.md
---
# searchFiles

```typescript
codebolt.fs.searchFiles(path: string, regex: string, filePattern: string): Promise<SearchFilesResponse>
```

'Searches for files matching a regex pattern within file contents in the specified directory. Supports advanced regex patterns and file type filtering for targeted searches.'
### Parameters

- **`path`** (string): The directory path to search within (e.g., '.', './src', '/home/user/documents').
- **`regex`** (string): The regex pattern to search for within file contents (e.g., `'function'`, `'class\s+\w+'`, `'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'`).
- **`filePattern`** (string): The file pattern to filter which files to search (e.g., '*.js', '*.json', '*.*', '*.ts').

### Returns

- **`Promise<SearchFilesResponse>`**: A promise that resolves with search results containing matching files and their locations.

### Response Structure

The method returns a Promise that resolves to a [`SearchFilesResponse`](/docs/api/11_doc-type-ref/types/interfaces/SearchFilesResponse) object with the following properties:

- **`type`** (string): Always "searchFilesResponse" or similar response type identifier.
- **`results`** (array, optional): Array of search results with file paths and match information.
- **`matches`** (array, optional): Array of files containing matches with line numbers and context.
- **`count`** (number, optional): Total number of files with matches.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the search operation.
- **`error`** (string, optional): Error details if the search failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic file search
const result = await codebolt.fs.searchFiles('/home/user/documents', 'example', '*.txt');
console.log('Search results:', result);
console.log('Files found:', result.results?.length || 0);

// Example 2: Search in current directory
const searchResult = await codebolt.fs.searchFiles('.', '.*\\.txt', '*.txt');
console.log('✅ File search result:', searchResult);

// Example 3: Search for JavaScript files containing "function"
const jsSearch = await codebolt.fs.searchFiles('.', 'function', '*.js');
console.log('JavaScript files with functions:', jsSearch);
console.log('Match count:', jsSearch.count);

// Example 4: Search for configuration files
const configSearch = await codebolt.fs.searchFiles('.', 'config', '*.json');
console.log('Configuration files:', configSearch);

// Example 5: Search for all text files
const txtSearch = await codebolt.fs.searchFiles('.', '.*', '*.txt');
console.log('All text files:', txtSearch);

// Example 6: Search for email patterns
const emailSearch = await codebolt.fs.searchFiles(
    '.',
    '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}',
    '*.*'
);
console.log('Files containing email addresses:', emailSearch);
console.log('Email matches found:', emailSearch.matches?.length || 0);

// Example 7: Search for function declarations
const functionSearch = await codebolt.fs.searchFiles(
    '.',
    'function\\s+\\w+\\s*\\(',
    '*.js'
);
console.log('Files with function declarations:', functionSearch);

// Example 8: Search for class definitions
const classSearch = await codebolt.fs.searchFiles(
    '.',
    'class\\s+\\w+',
    '*.js'
);
console.log('Files with class definitions:', classSearch);

// Example 9: Search for TODO comments
const todoSearch = await codebolt.fs.searchFiles(
    './src',
    'TODO|FIXME|HACK',
    '*.{js,ts,jsx,tsx}'
);
console.log('Files with TODO comments:', todoSearch);
if (todoSearch.matches) {
    todoSearch.matches.forEach(match => {
        console.log(`Found in ${match.file}: ${match.line}`);
    });
}

// Example 10: Search for import statements
const importSearch = await codebolt.fs.searchFiles(
    '.',
    'import\\s+.*\\s+from\\s+[\'"].*[\'"]',
    '*.{js,ts,jsx,tsx}'
);
console.log('Files with imports:', importSearch);

// Example 11: Search for console.log statements
const consoleSearch = await codebolt.fs.searchFiles(
    './src',
    'console\\.(log|warn|error|debug)',
    '*.js'
);
console.log('Files with console statements:', consoleSearch);

// Example 12: Search for API endpoints
const endpointSearch = await codebolt.fs.searchFiles(
    './src',
    '(app\\.(get|post|put|delete|patch)|router\\.(get|post|put|delete|patch))',
    '*.{js,ts}'
);
console.log('Files with API endpoints:', endpointSearch);

// Example 13: Search for SQL queries
const sqlSearch = await codebolt.fs.searchFiles(
    './src',
    '(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER)\\s+',
    '*.{js,ts,sql}'
);
console.log('Files with SQL queries:', sqlSearch);

// Example 14: Search for environment variable usage
const envSearch = await codebolt.fs.searchFiles(
    './src',
    'process\\.env\\.[A-Z_]+',
    '*.{js,ts}'
);
console.log('Files using environment variables:', envSearch);

// Example 15: Search with error handling
async function safeSearch(path, pattern, filePattern) {
    try {
        const result = await codebolt.fs.searchFiles(path, pattern, filePattern);

        if (result.success) {
            console.log(`✅ Search completed successfully`);
            console.log(`📊 Files found: ${result.count || 0}`);

            if (result.matches && result.matches.length > 0) {
                console.log(`🔍 Match details:`);
                result.matches.forEach((match, index) => {
                    console.log(`   ${index + 1}. ${match.file} (line ${match.line || 'unknown'})`);
                });
            }

            return result;
        } else {
            console.error('❌ Search failed:', result.error);
            return null;
        }
    } catch (error) {
        console.error('❌ Search error:', error.message);
        throw error;
    }
}

// Usage
await safeSearch('.', 'function', '*.js');

// Example 16: Batch search with multiple patterns
async function multiPatternSearch(path, patterns, filePattern) {
    const results = {};

    for (const pattern of patterns) {
        console.log(`🔍 Searching for pattern: ${pattern}`);
        const result = await codebolt.fs.searchFiles(path, pattern, filePattern);
        results[pattern] = result;
        console.log(`   Found: ${result.count || 0} files`);
    }

    return results;
}

// Usage
const patterns = ['TODO', 'FIXME', 'HACK', 'BUG'];
const searchResults = await multiPatternSearch('./src', patterns, '*.{js,ts}');

// Example 17: Search and report generator
async function searchAndReport(path, regex, filePattern, reportPath) {
    const result = await codebolt.fs.searchFiles(path, regex, filePattern);

    if (!result.success) {
        console.error('Search failed:', result.error);
        return;
    }

    // Generate report
    let report = `# Search Report\n\n`;
    report += `**Pattern:** ${regex}\n`;
    report += `**Path:** ${path}\n`;
    report += `**Files Pattern:** ${filePattern}\n`;
    report += `**Total Matches:** ${result.count || 0}\n\n`;

    if (result.matches && result.matches.length > 0) {
        report += `## Matches\n\n`;
        result.matches.forEach((match, index) => {
            report += `${index + 1}. **${match.file}**`;
            if (match.line) report += ` (line ${match.line})`;
            if (match.context) report += `\n   Context: \`${match.context}\``;
            report += `\n\n`;
        });
    }

    // Save report
    await codebolt.fs.createFile('search-report.md', report, reportPath);
    console.log(`✅ Report saved to ${reportPath}/search-report.md`);

    return result;
}

// Usage
await searchAndReport('./src', 'async function', '*.js', './reports');

// Example 18: Search with exclusions
async function searchWithExclusions(path, pattern, filePattern, excludePatterns = []) {
    const result = await codebolt.fs.searchFiles(path, pattern, filePattern);

    if (!result.success || !result.matches) {
        return result;
    }

    // Filter out excluded patterns
    const filtered = result.matches.filter(match => {
        return !excludePatterns.some(exclude =>
            match.file.includes(exclude) ||
            (match.context && match.context.includes(exclude))
        );
    });

    return {
        ...result,
        matches: filtered,
        count: filtered.length
    };
}

// Usage - exclude node_modules and test files
const filteredResults = await searchWithExclusions(
    '.',
    'import',
    '*.js',
    ['node_modules', '.test.', '.spec.']
);

// Example 19: Search for security vulnerabilities
async function securityScan(path) {
    const securityPatterns = [
        { name: 'Hardcoded passwords', pattern: '(password|passwd|pwd)\\s*[=:]\\s*["\'][^"\']+["\']' },
        { name: 'API keys', pattern: '(api[_-]?key|apikey)\\s*[=:]\\s*["\'][^"\']+["\']' },
        { name: 'SQL injection risks', pattern: '(SELECT|INSERT|UPDATE|DELETE)\\s+.*\\+.*\\s*(FROM|INTO|UPDATE|DELETE)' },
        { name: 'Eval usage', pattern: 'eval\\s*\\(' },
        { name: 'InnerHTML usage', pattern: 'innerHTML\\s*=' }
    ];

    const securityReport = {};

    for (const { name, pattern } of securityPatterns) {
        console.log(`🔒 Scanning for ${name}...`);
        const result = await codebolt.fs.searchFiles(path, pattern, '*.{js,ts,jsx,tsx}');

        if (result.success && result.count > 0) {
            securityReport[name] = {
                found: true,
                count: result.count,
                matches: result.matches
            };
            console.log(`   ⚠️  Found ${result.count} potential issues`);
        } else {
            securityReport[name] = { found: false, count: 0 };
            console.log(`   ✅ No issues found`);
        }
    }

    return securityReport;
}

// Usage
const securityResults = await securityScan('./src');

// Example 20: Search for deprecated APIs
async function findDeprecatedAPIs(path) {
    const deprecatedPatterns = [
        'require\\s*\\(', // CommonJS instead of ES6 imports
        '__dirname', // Node.js legacy globals
        '__filename',
        'util\\.inspect', // Deprecated util methods
        'Buffer\\s*\\(', // Legacy Buffer constructor
    ];

    const deprecatedResults = {};

    for (const pattern of deprecatedPatterns) {
        const result = await codebolt.fs.searchFiles(path, pattern, '*.{js,ts}');
        if (result.success && result.count > 0) {
            deprecatedResults[pattern] = result.matches;
        }
    }

    return deprecatedResults;
}

// Usage
const deprecatedResults = await findDeprecatedAPIs('./src');
```

### Common Use Cases

- **Code Analysis**: Find specific patterns, functions, or classes across your codebase
- **Security Auditing**: Search for hardcoded credentials, API keys, or vulnerable code patterns
- **Code Quality**: Find TODO comments, console statements, or deprecated APIs
- **Refactoring**: Locate all instances of a function or variable before refactoring
- **Documentation**: Find import statements, API endpoints, or database queries
- **Debugging**: Search for error handling patterns or specific error messages
- **Code Review**: Identify potential issues or anti-patterns in the codebase
- **Migration Planning**: Find all uses of a deprecated API or pattern

### Advanced Usage Patterns

### Case-Insensitive Search
```javascript
// Search for pattern regardless of case
const caseInsensitiveResult = await codebolt.fs.searchFiles(
    './src',
    '(?i)error', // Case-insensitive flag
    '*.js'
);
```

### Multiple File Extensions
```javascript
// Search in multiple file types
const multiExtResult = await codebolt.fs.searchFiles(
    './src',
    'interface\\s+\\w+',
    '*.{ts,tsx,js,jsx}'
);
```

### Complex Regex Patterns
```javascript
// Search for React components
const componentSearch = await codebolt.fs.searchFiles(
    './src',
    '(?:class\\s+\\w+\\s+extends\\s+(?:React\\.)?Component|const\\s+\\w+\\s*=\\s*(?:\\([^)]*\\))?\\s*=>)',
    '*.{jsx,tsx}'
);

// Search for async/await patterns
const asyncSearch = await codebolt.fs.searchFiles(
    './src',
    '(?:async\\s+function\\s+\\w+|const\\s+\\w+\\s*=\\s*async\\s*\\()',
    '*.js'
);
```

### Performance Considerations

- **Specific Paths**: Search in specific directories rather than root to improve speed
- **File Patterns**: Use specific file patterns (e.g., '*.js' instead of '*.*') to reduce search scope
- **Optimized Regex**: Use efficient regex patterns and avoid overly complex expressions
- **Batch Searches**: When searching for multiple patterns, consider batching searches for better performance

```javascript
// ❌ Slow: Broad search
const slow = await codebolt.fs.searchFiles('/', '.*', '*.*');

// ✅ Fast: Targeted search
const fast = await codebolt.fs.searchFiles('./src', 'specificPattern', '*.js');
```

### Error Handling

Always implement proper error handling for search operations:

```javascript
async function robustSearch(path, pattern, filePattern) {
    try {
        const result = await codebolt.fs.searchFiles(path, pattern, filePattern);

        if (!result.success) {
            console.error('Search failed:', result.error);
            return null;
        }

        // Validate results
        if (!result.matches || result.matches.length === 0) {
            console.log('No matches found');
            return { ...result, matches: [], count: 0 };
        }

        return result;
    } catch (error) {
        console.error('Search error:', error.message);

        // Handle specific errors
        if (error.message.includes('ENOENT')) {
            console.error('Path does not exist:', path);
        } else if (error.message.includes('EACCES')) {
            console.error('Permission denied for path:', path);
        }

        throw error;
    }
}
```

### Common Pitfalls and Solutions

**Pitfall 1**: Using invalid regex patterns
```javascript
// ❌ Bad: Unclosed parenthesis
await codebolt.fs.searchFiles('.', '(function', '*.js');

// ✅ Good: Properly escaped regex
await codebolt.fs.searchFiles('.', '\\(function', '*.js');
```

**Pitfall 2**: Searching too broadly
```javascript
// ❌ Bad: Search entire filesystem
await codebolt.fs.searchFiles('/', 'test', '*.*');

// ✅ Good: Search specific directory
await codebolt.fs.searchFiles('./src', 'test', '*.js');
```

**Pitfall 3**: Not escaping special characters
```javascript
// ❌ Bad: Unescaped dot matches any character
await codebolt.fs.searchFiles('.', 'test.js', '*.*');

// ✅ Good: Escaped dot for literal match
await codebolt.fs.searchFiles('.', 'test\\.js', '*.*');
```

### Integration Examples

**With Git Module**
```javascript
// Search for TODOs and create an issue
const todos = await codebolt.fs.searchFiles('./src', 'TODO|FIXME', '*.{js,ts}');
if (todos.count > 0) {
    console.log(`Found ${todos.count} TODOs - consider creating GitHub issues`);
}
```

**With Terminal Module**
```javascript
// Search and count results with wc
const results = await codebolt.fs.searchFiles('.', 'import', '*.js');
console.log(`Total imports: ${results.count}`);
```

### Best Practices

1. **Use Specific File Patterns**: Limit searches to relevant file types
2. **Optimize Regex Patterns**: Use efficient and specific regex patterns
3. **Handle Edge Cases**: Always handle cases where no matches are found
4. **Validate Results**: Check the success flag and validate results before processing
5. **Use Error Handling**: Implement comprehensive error handling for search operations
6. **Consider Performance**: Avoid searching in very large directories without specific patterns
7. **Combine with Other Operations**: Use search results to trigger other file operations
8. **Document Patterns**: Keep a library of useful search patterns for common tasks