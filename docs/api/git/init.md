---
name: init
cbbaseinfo:
  description: Initializes a new Git repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path where the Git repository should be initialized.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the init event.
---
<CBBaseInfo/> 
 <CBParameters/>