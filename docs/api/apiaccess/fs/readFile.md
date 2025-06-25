---
name: readFile
cbbaseinfo:
  description: 'Reads the content of a file from the specified path.'
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to read.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: ReadFileResponse
data:
  name: readFile
  category: fs
  link: readFile.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic File Reading

```js
// Read a file from absolute path
const content = await codebolt.fs.readFile('/home/user/documents/example.txt');
console.log('File content:', content);
```

### Reading Files from Current Directory

```js
// Read a file from current directory using relative path
const readResult = await codebolt.fs.readFile('./fs-test-file.txt');
console.log('✅ File read:', readResult);
```