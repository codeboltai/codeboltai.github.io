---
name: runProject
cbbaseinfo:
  description: Runs the current project.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: This function does not return a value.
    typeArgs: []
data:
  name: runProject
  category: project
  link: runProject.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

Initiates the execution of the current project. This function sends a command to run the project but does not return any response data.

## Example

```javascript
codebolt.project.runProject();
console.log('✅ Project run command sent');

// Note: This function doesn't return a promise or value
// Monitor project execution through terminal or other modules
``` 