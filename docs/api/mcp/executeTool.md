---
name: executeTool
cbbaseinfo:
  description: Executes a specified tool with the provided parameters via WebSocket connection.
cbparameters:
  parameters:
    - name: toolName
      typeName: string
      description: The name of the tool to execute
    - name: params
      typeName: any
      description: Parameters to pass to the tool
    - name: mcpServer
      typeName: string (optional)
      description: Target MCP server URL (uses default connection if not specified)
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with execution result or rejects with error
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

```javascript
// Execute a data processing tool
try {
  const result = await codeboltMCP.executeTool(
    "dataProcessor",
    { 
      operation: "encrypt",
      payload: "sensitive-data-123"
    },
    "wss://production-mcp.example.com"
  );
  
  console.log("Execution Result:", result);
} catch (error) {
  console.error("Execution Failed:", error);
}