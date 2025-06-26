---
name: getRepoMap
cbbaseinfo:
  description: Retrieves the repository map for the current project.
cbparameters:
  parameters:
    - name: message
      typeName: any
      description: The message object containing parameters for retrieving the repository map.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the repository map response.
    typeArgs: []
data:
  name: getRepoMap
  category: project
  link: getRepoMap.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

Retrieves a map of the repository structure for the current project, providing an overview of the project's file and directory organization.

## Example

```javascript
const repoMapResult = await codebolt.project.getRepoMap({});
console.log(repoMapResult);

// Note: This method may not be fully implemented yet
// Check the response for availability status
```

### Status 

comming soon....