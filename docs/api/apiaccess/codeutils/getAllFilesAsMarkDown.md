---
name: getAllFilesAsMarkDown
cbbaseinfo:
  description: Retrieves all files in the current project as formatted Markdown content with syntax highlighting.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<MarkdownResponse>
    description: A promise that resolves with the Markdown content of all files in the project.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: getAllFilesAsMarkDown
  category: codeutils
  link: getAllFilesAsMarkDown.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `getAllFilesAsMarkDown` function scans the current project directory and converts all files into a single formatted Markdown document. Each file is presented with its full path as a header followed by its content in appropriate code blocks with syntax highlighting.

## Usage

```javascript
const markdownResult = await codebolt.codeutils.getAllFilesAsMarkDown();
```

## Example

```javascript
const markdownResult = await codebolt.codeutils.getAllFilesAsMarkDown();
console.log(markdownResult);
```

## Response Format

```javascript
{
  type: 'getAllFilesMarkdownResponse',
  markdown: 'string'  // Complete markdown content of all files
}
```

## Sample Output

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

## Performance

The function is optimized for performance:

```javascript
// Performance testing example
const startTime = Date.now();
const perfMarkdownResult = await codebolt.codeutils.getAllFilesAsMarkDown();
const endTime = Date.now();

console.log('Performance:', {
  duration: `${endTime - startTime}ms`,  // Typically ~3ms
  success: !!perfMarkdownResult
});
```

## Features

- **Complete Project Overview**: Includes all files in the project
- **Syntax Highlighting**: Proper code block formatting for different file types
- **File Separation**: Clear separation between files with headers and dividers
- **Fast Processing**: Optimized for quick generation (typically 3ms)
- **Full Path Display**: Shows complete file paths for easy navigation
