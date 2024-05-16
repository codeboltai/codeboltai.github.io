---
name: logs
cbbaseinfo:
  description: Retrieves the commit logs for the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the logs event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: logs
  category: git
  link: logs.md
---
<CBBaseInfo/> 
 <CBParameters/>