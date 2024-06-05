---
name: branch
cbbaseinfo:
  description: Creates a new branch in the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
    - name: branch
      typeName: string
      description: The name of the new branch to create.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the branch event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: branch
  category: git
  link: branch.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Working Progress...