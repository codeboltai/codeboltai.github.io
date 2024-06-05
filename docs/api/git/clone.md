---
name: clone
cbbaseinfo:
  description: Clones a Git repository from the given URL to the specified path.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL of the Git repository to clone.
    - name: path
      typeName: string
      description: The file system path where the repository should be cloned to.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the clone event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: clone
  category: git
  link: clone.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Working Progress...