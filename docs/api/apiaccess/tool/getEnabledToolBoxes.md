---
name: getEnabledToolBoxes
cbbaseinfo:
  description: Retrieves the list of currently enabled toolboxes that are available for use.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves to an object containing enabled toolbox configurations with their details.
    typeArgs:
      - type: object
data:
  name: getEnabledToolBoxes
  category: tool
  link: getEnabledToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure
```typescript
{
  data: {
    [toolboxName: string]: {
      name: string;
      version?: string;
      description?: string;
      enabled: boolean;
      // Additional toolbox configuration properties
    }
  }
}
```

### Example
```js
const codebolt = require('@codebolt/codeboltjs');


const enabledToolBoxes = await codebolt.tools.getEnabledToolBoxes();
console.log("Enabled ToolBoxes:", enabledToolBoxes);

```