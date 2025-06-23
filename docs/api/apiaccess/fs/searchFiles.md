---
name: searchFiles
cbbaseinfo:
  description: 'Searches files in a given path using a regex pattern.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search within.
    - name: regex
      typeName: string
      description: The regex pattern to search for.
    - name: filePattern
      typeName: string
      description: The file pattern to match files.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
    typeArgs:
      - type: reference
        name: SearchFilesResponse
data:
  name: searchFiles
  category: fs
  link: searchFiles.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic File Search

```js
// Search for files matching a regex pattern with specific file extension
const result = await codebolt.fs.searchFiles('/home/user/documents', 'example', '*.txt');
console.log('Search results:', result);
```

### Search in Current Directory

```js
// Search for text files containing specific patterns in current directory
const searchResult = await codebolt.fs.searchFiles('.', '.*\\.txt', '*.txt');
console.log('✅ File search result:', searchResult);
```

### Different Search Patterns

```js
// Search for JavaScript files containing "function"
const jsSearch = await codebolt.fs.searchFiles('.', 'function', '*.js');
console.log('JavaScript files with functions:', jsSearch);

// Search for configuration files
const configSearch = await codebolt.fs.searchFiles('.', 'config', '*.json');
console.log('Configuration files:', configSearch);

// Search for all text files
const txtSearch = await codebolt.fs.searchFiles('.', '.*', '*.txt');
console.log('All text files:', txtSearch);
```

### Advanced Regex Patterns

```js
// Search for files containing email patterns
const emailSearch = await codebolt.fs.searchFiles(
    '.', 
    '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}', 
    '*.*'
);
console.log('Files containing email addresses:', emailSearch);

// Search for files containing function declarations
const functionSearch = await codebolt.fs.searchFiles(
    '.', 
    'function\\s+\\w+\\s*\\(', 
    '*.js'
);
console.log('Files with function declarations:', functionSearch);

// Search for class definitions
const classSearch = await codebolt.fs.searchFiles(
    '.', 
    'class\\s+\\w+', 
    '*.js'
);
console.log('Files with class definitions:', classSearch);
```
