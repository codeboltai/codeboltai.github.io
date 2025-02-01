---
name: init
cbbaseinfo:
  description: Initializes the search module with the specified search engine.
cbparameters:
  parameters:
    - name: engine
      typeName: string
      description: The search engine to use for initializing the module. Defaults to "bing".
  returns:
    signatureTypeName: void
    description: This function does not return any value.
data:
  name: init
  category: cbsearch
  link: init.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
import codebolt from '@codebolt/codeboltjs';

function exampleInit() {
    codebolt.search.init("google");
    console.log("Search module initialized.");
}

exampleInit();