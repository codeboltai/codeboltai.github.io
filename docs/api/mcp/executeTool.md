---
name: executeTool
cbbaseinfo:
  description: Executes a specified tool with the provided parameters.
cbparameters:
  parameters:
    - name: toolName
      typeName: string
      description: The name of the tool to execute.
    - name: params
      typeName: any
      description: Parameters required for executing the tool.
    - name: mcpServer
      typeName: string (optional)
      description: The MCP server to use for execution.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the tool execution result.
    typeArgs:
      - type: reference
        name: any
data:
  name: executeTool
  category: mcp
  link: executeTool.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Executing a tool
const result = await codebolt.mcp.executeTool("imageProcessor", { imageUrl: "https://example.com/image.jpg" });
console.log("Tool Execution Result:", result);

```