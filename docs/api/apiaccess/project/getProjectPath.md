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

## Response Structure

```javascript
{
  type: 'getProjectPathResponse',
  success: boolean,
  message: string,
  projectPath: string
}
```

## Example

```javascript
const pathResult = await codebolt.project.getProjectPath();
console.log(pathResult);
// Output: {
//   type: 'getProjectPathResponse',
//   success: true,
//   message: 'Project path retrieved successfully',
//   projectPath: 'C:\\btpl\\API_TEST\\convinced-beige'
// }
```