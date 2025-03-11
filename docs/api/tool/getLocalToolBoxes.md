---
name: getLocalToolBoxes
cbbaseinfo:
  description: Retrieves toolboxes installed in the local development environment.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of locally available toolbox configurations
    typeArgs:
      - type: any
data:
  name: getLocalToolBoxes
  category: tool
  link: getLocalToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const localToolBoxes = await codebolt.codebolttools.getLocalToolBoxes();
console.log("Local ToolBoxes:", localToolBoxes);