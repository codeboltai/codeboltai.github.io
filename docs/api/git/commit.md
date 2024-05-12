---
name: commit
cbbaseinfo:
  description: >-
    Commits the staged changes in the local repository with the given commit
    message.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The commit message to use for the commit.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the commit event.
---
<CBBaseInfo/> 
 <CBParameters/>