---
name: addVectorItem
cbbaseinfo:
  description: Adds a new vector item to the vector database.
cbparameters:
  parameters:
    - name: item
      typeName: any
      description: The item to add to the vector.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when the item is successfully added.
    typeArgs:
      - type: reference
        name: AddVectorItemResponse
data:
  name: addVectorItem
  category: vectordb
  link: addVectorItem.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 
```js


 const addResponse = await codebolt.vectordb.addVectorItem({ id: "123", vector: [0.1, 0.2, 0.3] });
        console.log("Add Vector Response:", addResponse);

```
