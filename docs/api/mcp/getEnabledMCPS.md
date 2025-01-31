---
name: getEnabledMCPS
cbbaseinfo:
  description: Retrieves a list of enabled MCP instances.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of enabled MCP instances.
    typeArgs:
      - type: reference
        name: any
data:
  name: getEnabledMCPS
  category: mcp
  link: getEnabledMCPS.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
// Example: Retrieving enabled MCP instances
const enabledMCPS = await codebolt.mcp.getEnabledMCPS();
console.log("Enabled MCPs:", enabledMCPS);

```