---
name: writeToFile
cbbaseinfo:
  description: "'Writes content to a file at the specified path. Creates the file if it doesn''t exist or overwrites if it does.'"
cbparameters:
  parameters:
    - name: relPath
      typeName: string
      description: The relative path of the file to write to.
    - name: newContent
      typeName: string
      description: The new content to write into the file.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the write operation result.
    typeArgs:
      - type: reference
        name: WriteToFileResponse
data:
  name: writeToFile
  category: fs
  link: writeToFile.md
---
# writeToFile

```typescript
codebolt.fs.writeToFile(relPath: string, newContent: string): Promise<WriteToFileResponse>
```

'Writes content to a file at the specified path. Creates the file if it doesn''t exist or overwrites if it does.' 
### Parameters

- **`relPath`** (string): The relative path of the file to write to.
- **`newContent`** (string): The new content to write into the file.

### Returns

- **`Promise<WriteToFileResponse>`**: A promise that resolves with the write operation result.

## Examples

### Basic File Writing

```js
// Write content to a file (creates if doesn't exist, overwrites if exists)
const result = await codebolt.fs.writeToFile(
    '/home/user/documents/example.txt', 
    'This is the new content.'
);
console.log('Write result:', result);
```

### Write to File in Current Directory

```js
// Write content to a file in current directory
const writeResult = await codebolt.fs.writeToFile(
    './fs-test-file.txt',
    'This is content written using writeToFile method'
);
console.log('✅ Write to file:', writeResult);
```