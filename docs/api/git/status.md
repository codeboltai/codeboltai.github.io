---
name: status
cbbaseinfo:
  description: Retrieves the status of the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the status event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: status
  category: git
  link: status.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status

Work Progress...