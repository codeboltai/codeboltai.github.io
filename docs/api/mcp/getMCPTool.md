---
name: getMCPTool
cbbaseinfo:
  description: Retrieves details of a specific MCP tool.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the MCP tool to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the MCP tool details.
    typeArgs:
      - type: reference
        name: any
data:
  name: getMCPTool
  category: mcp
  link: getMCPTool.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Retrieving a specific MCP tool
const toolDetails = await codebolt.mcp.getMCPTool("imageProcessor");
console.log("MCP Tool Details:", toolDetails);

```