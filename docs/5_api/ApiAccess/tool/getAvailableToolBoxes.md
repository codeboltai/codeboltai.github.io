---
name: getAvailableToolBoxes
cbbaseinfo:
  description: Retrieves all available toolboxes from the CodeBolt registry.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of registry toolbox configurations
    typeArgs:
      - type: array
data:
  name: getAvailableToolBoxes
  category: tool
  link: getAvailableToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>


### Example
```js
const codebolt = require('@codebolt/codeboltjs');


  try {
        const  getTools= await codebolt.tools.getEnabledToolBoxes();
        console.log('✅ Toolbox configuration result:', JSON.stringify(getTools, null, 2));
    } catch (error) {
        console.log('⚠️  Toolbox configuration failed:', error.message);
    }
```

### Status 
Comming Soon....