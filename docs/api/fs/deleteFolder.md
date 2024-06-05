---
name: deleteFolder
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: foldername
      typeName: string
      description: The name of the folder to delete.
    - name: folderpath
      typeName: string
      description: The path of the folder to delete.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: DeleteFolderResponse
data:
  name: deleteFolder
  category: fs
  link: deleteFolder.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 
//Let's assume you want to delete a folder named oldFolder in the /home/user/documents directory.

codebolt.fs.deleteFolder('oldFolder', '/home/user/documents');

```


### Explaination

The codebolt.fs.deleteFolder method is used to delete a specified folder from a given directory. It has two parameters:

foldername (string): The name of the folder to be deleted.

folderpath (string): The path to the directory where the folder is located.