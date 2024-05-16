---
name: diff
cbbaseinfo:
  description: Retrieves the diff of changes for a specific commit in the local repository.
cbparameters:
  parameters:
    - name: commitHash
      typeName: string
      description: The hash of the commit to retrieve the diff for.
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the diff event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: diff
  category: git
  link: diff.md
---
<CBBaseInfo/> 
 <CBParameters/>