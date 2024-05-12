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
---
<CBBaseInfo/> 
 <CBParameters/>