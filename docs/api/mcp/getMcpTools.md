---
name: getMcpTools
cbbaseinfo:
  description: Retrieves a list of specified MCP tools.
cbparameters:
  parameters:
    - name: tools
      typeName: string[]
      description: An array of tool names to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of requested MCP tools.
    typeArgs:
      - type: reference
        name: any
data:
  name: getMcpTools
  category: mcp
  link: getMcpTools.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js

// Example: Retrieving a list of specific MCP tools
const tools = await codebolt.mcp.getMcpTools(["imageProcessor", "dataAnalyzer"]);
console.log("MCP Tools:", tools);

```