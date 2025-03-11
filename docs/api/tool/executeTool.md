---
name: executeTool
cbbaseinfo:
  description: Executes a specific tool from a configured toolbox with provided parameters.
cbparameters:
  parameters:
    - name: toolbox
      typeName: string
      description: The name of the toolbox containing the tool
    - name: toolName
      typeName: string
      description: The name of the tool to execute
    - name: params
      typeName: object
      description: Parameters to pass to the tool execution
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the tool execution result
    typeArgs:
      - type: any
data:
  name: executeTool
  category: tool
  link: executeTool.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const result = await codebolt.codebolttools.executeTool(
  "myToolBox",
  "dataProcessor",
  { inputData: "test" }
);
console.log("Tool execution result:", result);