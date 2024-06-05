---
name: deleteFile
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to delete.
    - name: filePath
      typeName: string
      description: The path of the file to delete.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: DeleteFileResponse
data:
  name: deleteFile
  category: fs
  link: deleteFile.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

The codebolt.fs.deleteFile method is used to delete a specified file from a given directory. It has two parameters:

filename (string): The name of the file to be deleted, including the file extension (e.g., "example.txt", "data.json").

filePath (string): The path to the directory where the file is located.