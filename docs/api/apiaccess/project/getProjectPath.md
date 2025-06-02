---
name: getProjectPath
cbbaseinfo:
  description: Retrieves the path of the current project.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the project path response.
    typeArgs:
      - type: reference
        name: GetProjectPathResponse
data:
  name: getProjectPath
  category: project
  link: getProjectPath.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Example 

```js 

const getpath = await codebolt.project.getProjectPath();

```
### Explaination

The codebolt.project.getProjectPath() function is likely used to retrieve the path of the current project.