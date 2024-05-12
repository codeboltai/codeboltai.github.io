---
name: add
cbbaseinfo:
  description: Adds changes in the local repository to the staging area at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add event.
---
<CBBaseInfo/> 
 <CBParameters/>