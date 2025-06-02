---
name: queryVectorItem
cbbaseinfo:
  description: Queries a vector item from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to query the item from.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the queried vector item.
    typeArgs:
      - type: reference
        name: QueryVectorItemResponse
data:
  name: queryVectorItem
  category: vectordb
  link: queryVectorItem.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example
```js

 // Example: Querying a single vector item
  const queryResponse = await codebolt.vectordb.queryVectorItem("123");
        console.log("Query Vector Item Response:", queryResponse);

      // Example: Querying multiple vector items
  const queryItemsResponse = await codebolt.vectordb.queryVectorItems(["123", "456"], "/database/path");
  console.log("Query Vector Items Response:", queryItemsResponse);

```