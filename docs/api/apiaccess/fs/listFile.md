---
name: listFile
cbbaseinfo:
  description: 'Lists all files in a specified directory.'
cbparameters:
  parameters:
    - name: folderPath
      typeName: string
      description: The path of the directory to list files from.
    - name: isRecursive
      typeName: boolean
      description: Whether to list files recursively.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of files.
    typeArgs:
      - type: reference
        name: FileListResponse
data:
  name: listFile
  category: fs
  link: listFile.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Let's assume you want to list all files in the /home/user/documents directory.

codebolt.fs.listFile('/home/user/documents');