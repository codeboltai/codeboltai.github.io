---
name: createFile
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: fileName
      typeName: string
      description: The name of the file to create.
    - name: source
      typeName: string
      description: The source content to write into the file.
    - name: filePath
      typeName: string
      description: The path where the file should be created.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: CreateFileResponse
data:
  name: createFile
  category: fs
  link: createFile.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js
// Let's assume you want to create a text file named hello.txt in the /home/user/documents directory with the content "Hello, world!" 

codebolt.fs.createFile('hello.txt', 'Hello, world!', '/home/user/documents');

```

### Explaination

The codebolt.fs.createFile method is used to create a new file in a specified directory, with content provided as a string. It has three parameters:

fileName (string): This parameter specifies the name of the file to be created. The name should include the file extension (e.g., "example.txt", "data.json").

source (string): This parameter contains the content that will be written into the newly created file. It can be any string data that you want to save in the file.

filePath (string): This parameter defines the path where the file will be created. It should be a valid path in the filesystem where you have write permissions.