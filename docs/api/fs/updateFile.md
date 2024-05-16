---
name: updateFile
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to update.
    - name: filePath
      typeName: string
      description: The path of the file to update.
    - name: newContent
      typeName: string
      description: The new content to write into the file.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
    typeArgs:
      - type: reference
        name: UpdateFileResponse
---
<CBBaseInfo/> 
 <CBParameters/>