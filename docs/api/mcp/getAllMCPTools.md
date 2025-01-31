---
name: getAllMCPTools
cbbaseinfo:
  description: Retrieves all available MCP tools for a given MCP instance.
cbparameters:
  parameters:
    - name: mpcName
      typeName: string
      description: The name of the MCP instance.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with a list of all MCP tools.
    typeArgs:
      - type: reference
        name: any
data:
  name: getAllMCPTools
  category: mcp
  link: getAllMCPTools.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Retrieving all MCP tools
const allTools = await codebolt.mcp.getAllMCPTools("mainMCP");
console.log("All MCP Tools:", allTools);

```