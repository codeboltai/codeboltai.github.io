---
name: GetTools
cbbaseinfo:
  description: Retrieves detailed information about specific tools from their toolboxes.
cbparameters:
  parameters:
    - name: tools
      typeName: "Array<{ toolbox: string, toolName: string }>"
      description: Array of tool identifiers to retrieve
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of tool configurations
    typeArgs:
      - type: any[]
data:
  name: GetTools
  category: tool
  link: getTools.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const toolInfo = await codebolt.codebolttools.getTools([
  { toolbox: "analyticsTools", toolName: "dataAnalyzer" },
  { toolbox: "dataProcessing", toolName: "csvParser" }
]);
console.log("Tool Details:", toolInfo);