---
name: addKnowledge
cbbaseinfo:
  description: Adds a key-value pair to the in-memory database.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key under which to store the value.
    - name: value
      typeName: any
      description: The value to be stored.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the memory set event.
    typeArgs:
      - type: reference
        name: MemorySetResponse
data:
  name: addKnowledge
  category: dbmemory
  link: addKnowledge.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js 

// Add a key-value pair to the in-memory database with the key "UserID" and the value "admin"
await codebolt.dbmemory.addKnowledge("UserID", "admin")

// Add a key-value pair to the in-memory database with the key "Password" and the value "Test@123"
await codebolt.dbmemory.addKnowledge("Password", "Test@123")

```


### Explaination 

Adding a key-value pair to an in-memory database involves storing a specific piece of information (value) that can be retrieved later using a unique identifier (key).

Key: A unique identifier, typically a string, that is used to reference the data.

Value: The actual data or information that you want to store. This can be any type of data, such as a number, a string, an object, etc.