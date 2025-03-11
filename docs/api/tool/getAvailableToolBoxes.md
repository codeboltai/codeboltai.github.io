---
name: getAvailableToolBoxes
cbbaseinfo:
  description: Retrieves all available toolboxes from the CodeBolt registry.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of registry toolbox configurations
    typeArgs:
      - type: any
data:
  name: getAvailableToolBoxes
  category: tool
  link: getAvailableToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const availableToolBoxes = await codebolt.codebolttools.getAvailableToolBoxes();
console.log("Available ToolBoxes:", availableToolBoxes);