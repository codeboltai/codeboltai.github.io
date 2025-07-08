---
name: readFile
cbbaseinfo:
  description: Reads the content of a file from the specified path. Returns the file content along with metadata about the read operation.
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to read. Can be absolute (e.g., '/home/user/file.txt') or relative (e.g., './file.txt').
  returns:
    signatureTypeName: Promise<ReadFileResponse>
    description: A promise that resolves with a `ReadFileResponse` object containing the file content and read operation metadata.
data:
  name: readFile
  category: fs
  link: readFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `ReadFileResponse` object with the following properties:

- **`type`** (string): Always "readFileResponse".
- **`content`** (string, optional): The content of the file that was read.
- **`path`** (string, optional): The path of the file that was read.
- **`encoding`** (string, optional): The encoding used to read the file (e.g., 'utf8').
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Read a text file
const result = await codebolt.fs.readFile('./example.txt');
console.log("Response type:", result.type); // "readFileResponse"
console.log("File content:", result.content); // The actual file content
console.log("File path:", result.path); // "./example.txt"
console.log("Encoding:", result.encoding); // "utf8" (typically)

// Example 2: Read a configuration file
const configResult = await codebolt.fs.readFile('./package.json');
if (configResult.success && configResult.content) {
    const config = JSON.parse(configResult.content);
    console.log("Package name:", config.name);
    console.log("Version:", config.version);
}

// Example 3: Read a source code file
const codeResult = await codebolt.fs.readFile('./src/index.js');
console.log("JavaScript code content:", codeResult.content);
console.log("File size:", codeResult.content?.length, "characters");

// Example 4: Error handling
try {
    const fileResult = await codebolt.fs.readFile('./non-existent-file.txt');
    
    if (fileResult.success && fileResult.content) {
        console.log('✅ File read successfully');
        console.log('Content length:', fileResult.content.length);
        console.log('File path:', fileResult.path);
    } else {
        console.error('❌ File read failed:', fileResult.error);
    }
} catch (error) {
    console.error('Error reading file:', error);
}

// Example 5: Read multiple files
const filesToRead = [
    './README.md',
    './package.json',
    './src/index.js',
    './docs/api.md'
];

for (const filePath of filesToRead) {
    const result = await codebolt.fs.readFile(filePath);
    if (result.success && result.content) {
        console.log(`${filePath}: ${result.content.length} characters`);
    } else {
        console.log(`${filePath}: failed to read`);
    }
}

// Example 6: Process file content
const markdownResult = await codebolt.fs.readFile('./README.md');
if (markdownResult.content) {
    const lines = markdownResult.content.split('\n');
    const headings = lines.filter(line => line.startsWith('#'));
    console.log("Markdown headings found:", headings);
}
```

### Common Use Cases

- **Configuration Reading**: Read config files, environment files, and settings
- **Source Code Analysis**: Read and analyze source code files
- **Documentation Processing**: Read README files, documentation, and guides
- **Data Import**: Read JSON, CSV, XML, and other data files
- **Template Processing**: Read template files for code generation

### Notes

- The function reads the entire file content into memory as a string.
- The `content` property contains the actual file content if the read operation was successful.
- The `path` property confirms which file was read.
- The `encoding` property indicates how the file was decoded (usually 'utf8' for text files).
- For binary files, the content may not be readable as text.
- If the file doesn't exist or cannot be read, the `error` property will contain details.
- Use error handling to gracefully handle cases where files don't exist or are inaccessible.
- Large files may take longer to read and consume more memory.