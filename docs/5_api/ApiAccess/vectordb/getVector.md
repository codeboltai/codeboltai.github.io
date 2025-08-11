---
name: getVector
cbbaseinfo:
  description: Retrieves a vector from the vector database based on the provided key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the vector to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the retrieved vector.
    typeArgs:
      - type: reference
        name: GetVectorResponse
data:
  name: getVector
  category: vectordb
  link: getVector.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure
```typescript
{
  type: 'getVectorResponse';
  vector: {
    object: string;           // 'list'
    data: any[];             // Array of vector data
    model: string;           // 'text-embedding-3-small'
    usage: {
      prompt_tokens: number;
      total_tokens: number;
    };
  };
}
```

### Simple Example
```js
// Get vector by key
const getResult = await codebolt.vectordb.getVector('test-vector-001');
console.log('✅ Vector retrieval result:', getResult);
```

### Detailed Example
```js
// Get vector with error handling
try {
  const getResult = await codebolt.vectordb.getVector('test-vector-001');
  console.log('✅ Vector retrieval result:', getResult);
  console.log('   - Type:', getResult?.type);
  console.log('   - Data available:', !!getResult?.data);
  console.log('   - Model:', getResult?.vector?.model);
} catch (error) {
  console.log('⚠️  Vector retrieval failed:', error.message);
}
```