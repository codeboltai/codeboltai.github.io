---
name: getAllFilesAsMarkDown
cbbaseinfo:
  description: Retrieves all files in the current project as formatted Markdown content with syntax highlighting.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GetAllFilesMarkdownResponse>
    description: A promise that resolves with a `GetAllFilesMarkdownResponse` object containing the Markdown content of all files in the project.
data:
  name: getAllFilesAsMarkDown
  category: codeutils
  link: getAllFilesAsMarkDown.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetAllFilesMarkdownResponse` object with the following properties:

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
