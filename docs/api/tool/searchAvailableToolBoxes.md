---
name: SearchAvailableToolBoxes
cbbaseinfo:
  description: Searches available toolboxes by name or description.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: Search string to match against toolbox metadata
  returns:
    signatureTypeName: Promise
    description: A promise resolving to an array of matching toolbox configurations
    typeArgs:
      - type: any
data:
  name: SearchAvailableToolBoxes
  category: tool
  link: searchAvailableToolBoxes.md
---
<CBBaseInfo/>
<CBParameters/>

### Example
```js
const results = await codebolt.codebolttools.searchAvailableToolBoxes("data");
console.log("Search Results:", results);