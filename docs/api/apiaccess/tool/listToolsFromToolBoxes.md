---
name: listToolsFromToolBoxes
cbbaseinfo:
  description: Lists all tools contained within specified toolboxes.
cbparameters:
  parameters:
    - name: toolBoxes
      typeName: string[]
      description: Array of toolbox names to inspect for their available tools
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an object containing tools from the specified toolboxes
    typeArgs:
      - type: object
data:
  name: listToolsFromToolBoxes
  category: tool
  link: listToolsFromToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
// List tools from specific toolboxes
const toolBoxesToQuery = ["filesystem", "sqlite"];
const toolsList = await codebolt.tools.listToolsFromToolBoxes(toolBoxesToQuery);

console.log("Toolbox Contents:", toolsList);
console.log("Toolboxes queried:", toolsList?.toolboxes || []);
console.log("Total tools found:", toolsList?.tools?.length || 0);

// Display tool information
toolsList?.tools?.forEach(tool => {
  console.log(`\nTool: ${tool.name}`);
  console.log(`  Toolbox: ${tool.toolbox}`);
  if (tool.description) console.log(`  Description: ${tool.description}`);
});

// Get tool names by toolbox
const toolsByToolbox = {};
toolsList?.tools?.forEach(tool => {
  if (!toolsByToolbox[tool.toolbox]) {
    toolsByToolbox[tool.toolbox] = [];
  }
  toolsByToolbox[tool.toolbox].push(tool.name);
});

console.log("Tools by toolbox:", toolsByToolbox);
```

### Single Toolbox Query
```js
// Query tools from a single toolbox
const singleToolboxTools = await codeboltMCP.listToolsFromToolBoxes(["filesystem"]);
console.log("Filesystem tools:", singleToolboxTools?.tools?.map(t => t.name) || []);

// Check if specific tool exists
const hasReadFile = singleToolboxTools?.tools?.some(tool => 
  tool.name === "read_file" && tool.toolbox === "filesystem"
);
console.log("Has read_file tool:", hasReadFile);
```
