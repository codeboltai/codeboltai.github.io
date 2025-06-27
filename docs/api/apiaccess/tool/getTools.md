---
name: getTools
cbbaseinfo:
  description: Retrieves detailed information about specific tools from their toolboxes, including schemas and parameters.
cbparameters:
  parameters:
    - name: tools
      typeName: "Array<{ toolbox: string, toolName: string }>"
      description: Array of tool identifiers specifying toolbox and tool name pairs
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of detailed tool configurations
    typeArgs:
      - type: array
data:
  name: getTools
  category: tool
  link: getTools.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
// Get details for specific tools
const toolsToGet = [
  { toolbox: 'filesystem', toolName: 'read_file' },
  { toolbox: 'sqlite', toolName: 'list_tables' },
  { toolbox: 'filesystem', toolName: 'write_file' }
];

const toolDetails = await codeboltMCP.getTools(toolsToGet);
console.log("Tool Details:", toolDetails);

// Process tool information
console.log("Tools requested:", toolsToGet.length);
console.log("Tool details received:", toolDetails?.length || 0);

```

### Single Tool Query
```js
// Get details for a single tool
const singleTool = await codeboltMCP.getTools([
  { toolbox: 'filesystem', toolName: 'read_file' }
]);

console.log(singleTool)

```


### Status 
comming soon....