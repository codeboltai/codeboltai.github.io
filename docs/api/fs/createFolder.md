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