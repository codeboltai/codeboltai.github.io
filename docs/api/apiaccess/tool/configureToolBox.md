---
name: configureToolBox
cbbaseinfo:
  description: Configures a toolbox with specified settings and parameters.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the toolbox to configure
    - name: config
      typeName: any
      description: Configuration object for the toolbox
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when configuration is complete
    typeArgs:
      - type: any
data:
  name: configureToolBox
  category: tool
  link: configureToolBox.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
await codeboltMCP.configureToolBox("analyticsTools", {
  apiKey: "12345",
  logging: true
});
console.log("Toolbox configured successfully");