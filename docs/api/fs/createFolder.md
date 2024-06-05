---
name: createFolder
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: folderName
      typeName: string
      description: The name of the folder to create.
    - name: folderPath
      typeName: string
      description: The path where the folder should be created.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: CreateFolderResponse
data:
  name: createFolder
  category: fs
  link: createFolder.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js

//Let's assume you want to create a folder named newFolder in the /home/user/documents directory.

codebolt.fs.createFolder('newFolder', '/home/user/documents');

```

### Explaination

The codebolt.fs.createFolder method is used to create a new folder in a specified directory. It has two parameters:

folderName (string): The name of the folder to be created.

folderPath (string): The path where the folder will be created.