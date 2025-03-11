---
name: getEnabledToolBoxes
cbbaseinfo:
  description: Retrieves the list of currently enabled toolboxes that are available for use.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves to an array of enabled toolbox configurations.
    typeArgs:
      - type: any
data:
  name: getEnabledToolBoxes
  category: tool
  link: getEnabledToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const enabledToolBoxes = await codebolt.codebolttools.getEnabledToolBoxes();
console.log("Enabled ToolBoxes:", enabledToolBoxes);