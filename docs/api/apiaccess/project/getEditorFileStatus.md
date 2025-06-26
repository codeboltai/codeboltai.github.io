---
name: getEditorFileStatus
cbbaseinfo:
  description: Retrieves the current status of files in the editor.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the editor file status response.
    typeArgs: []
data:
  name: getEditorFileStatus
  category: project
  link: getEditorFileStatus.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

```javascript
{
  type: 'getEditorFileStatusResponse',
  success: boolean,
  message: string,
  editorStatus: string
}
```

## Example

```javascript
const fileStatusResult = await codebolt.project.getEditorFileStatus();
console.log(fileStatusResult);
// Output: {
//   type: 'getEditorFileStatusResponse',
//   success: true,
//   message: 'Default editor status retrieved',
//   editorStatus: '\n\n# Codebolt Visible Files\n(Currently not available - using default values)\n\n# Codebolt Open Tabs\n(Currently not available - using default values)'
// }

// Access editor information
console.log('Editor Status:', fileStatusResult.editorStatus);
``` 