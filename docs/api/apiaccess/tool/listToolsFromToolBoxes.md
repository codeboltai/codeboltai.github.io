---
name: listToolsFromToolBoxes
cbbaseinfo:
  description: Lists all tools contained within specified toolboxes.
cbparameters:
  parameters:
    - name: toolBoxes
      typeName: string[]
      description: Array of toolbox names to inspect
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an object mapping toolboxes to their tools
    typeArgs:
      - type: any
data:
  name: listToolsFromToolBoxes
  category: tool
  link: listToolsFromToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const toolsList = await codeboltMCP.listToolsFromToolBoxes([
  "analyticsTools",
  "dataProcessing"
]);
console.log("Toolbox Contents:", toolsList);