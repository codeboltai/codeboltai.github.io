---
name: getLocalToolBoxes
cbbaseinfo:
  description: Retrieves toolboxes installed in the local development environment.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of locally available toolbox configurations
    typeArgs:
      - type: array
data:
  name: getLocalToolBoxes
  category: tool
  link: getLocalToolBoxes.md
---
# getLocalToolBoxes

```typescript
codebolt.tool.getLocalToolBoxes(): Promise
```

Retrieves toolboxes installed in the local development environment.
### Returns

- **`Promise`**: A promise resolving to an array of locally available toolbox configurations

### Response Structure
```typescript
Array<{
  name: string;
  version?: string;
  description?: string;
  path?: string;
  // Additional local toolbox properties
}>
```

### Example
```js
const codebolt = require('@codebolt/codeboltjs');


const localToolBoxes = await codebolt.mcp.getLocalToolBoxes();
console.log("Local ToolBoxes:", localToolBoxes);


```