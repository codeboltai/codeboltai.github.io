---
name: readFile
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to read.
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

### Example 

```js

// Let's assume you want to read the content of a file named example.txt in the /home/user/documents directory.

codebolt.fs.readFile('example.txt', '/home/user/documents');

```

### Explaination

The codebolt.fs.readFile method is used to read the content of a specified file from a given directory. It has two parameters:

filename (string): The name of the file to be read, including the file extension (e.g., "example.txt", "data.json").

filePath (string): The path to the directory where the file is located. It should be a valid path in the filesystem where you have read permissions.