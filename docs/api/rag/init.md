---
name: init
cbbaseinfo:
  description: Initializes the CodeBolt File System Module.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: init
  category: rag
  link: init.md
---
<CBBaseInfo/> 
 <CBParameters/>  

### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleInit() {
    await codebolt.rag.init();
    console.log("CodeBolt File System Module initialized.");
}

exampleInit();

```