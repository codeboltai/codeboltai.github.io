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

### Response Structure
```typescript
// Single item query response
{
  type: 'qeryVectorItemResponse';
  item: Array<{
    item: any;      // The vector item data
    score: number;  // Similarity score (0-1)
  }>;
}

// Multiple items query response  
{
  type: 'qeryVectorItemsResponse';
  items: Array<{
    icon: string;     // Query text
    retrieved: any[]; // Retrieved items array
  }>;
}
```

### Simple Example
```js
// Query a single vector item
const queryResult = await codebolt.vectordb.queryVectorItem('test document vector');
console.log('✅ Vector query result:', queryResult);
```

### Detailed Example
```js
// Query vector item with error handling
try {
  const queryResult = await codebolt.vectordb.queryVectorItem('test document vector');
  console.log('✅ Vector query result:', queryResult);
  console.log('   - Type:', queryResult?.type);
  console.log('   - Results count:', queryResult?.item?.length || 0);
  
  // Display similarity scores
  if (queryResult?.item) {
    queryResult.item.forEach((result, index) => {
      console.log(`   - Result ${index + 1}: Score ${result.score}`);
    });
  }
} catch (error) {
  console.log('⚠️  Vector query failed:', error.message);
}
```

### Multiple Items Query
```js
// Query multiple vector items
const queryItems = [
  'test document',
  'vector database', 
  'machine learning',
  'artificial intelligence'
];
const dbPath = './vector_db';

try {
  const multiQueryResult = await codebolt.vectordb.queryVectorItems(queryItems, dbPath);
  console.log('✅ Multiple vector query result:', multiQueryResult);
  console.log('   - Type:', multiQueryResult?.type);
  console.log('   - Query items count:', queryItems.length);
} catch (error) {
  console.log('⚠️  Multiple vector query failed:', error.message);
}
```