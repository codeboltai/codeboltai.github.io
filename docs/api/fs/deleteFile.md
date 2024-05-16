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