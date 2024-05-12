---
name: checkout
cbbaseinfo:
  description: Checks out a branch or commit in the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
    - name: branch
      typeName: string
      description: The name of the branch or commit to check out.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the checkout event.
---
<CBBaseInfo/> 
 <CBParameters/>