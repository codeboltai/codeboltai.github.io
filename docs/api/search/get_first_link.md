---
name: get_first_link
cbbaseinfo:
  description: Retrieves the first link from the search results for the given query.
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The search query.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the first link of the search results.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: get_first_link
  category: search
  link: get_first_link.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleGetFirstLink() {
    try {
        const firstLink = await codebolt.bsearch.get_first_link("JavaScript documentation");
        console.log("First link:", firstLink);
    } catch (error) {
        console.error("Failed to retrieve the first link:", error);
    }
}

exampleGetFirstLink();