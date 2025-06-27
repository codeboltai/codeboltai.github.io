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

### Response Structure
```typescript
{
  type: 'addVectorItemResponse';
  message: string;  // 'success' when successful
}
```

### Simple Example
```js
// Add a text document to vector database
const addResult = await codebolt.vectordb.addVectorItem('This is a test document for vector database');
console.log('✅ Vector item addition result:', addResult);
```

### Detailed Example
```js
// Add vector item with error handling
try {
  const addResult = await codebolt.vectordb.addVectorItem('This is a test document for vector database');
  console.log('✅ Vector item addition result:', addResult);
  console.log('   - Type:', addResult.type);
  console.log('   - Message:', addResult.message);
} catch (error) {
  console.log('⚠️  Vector item addition failed:', error.message);
}
```
