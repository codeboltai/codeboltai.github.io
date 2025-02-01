---
name: search
cbbaseinfo:
  description: Performs a search operation for the given query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: search
  category: search
  link: search.md
---
<CBBaseInfo/> 
 <CBParameters/>
 
### Example

### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleSearch() {
    try {
        const results = await codebolt.search.search("JavaScript documentation");
        console.log("Search results:", results);
    } catch (error) {
        console.error("Failed to perform search:", error);
    }
}

exampleSearch();
```