---
name: getKnowledge
cbbaseinfo:
  description: Retrieves a value from the in-memory database by key.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key of the value to retrieve.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the memory get event.
    typeArgs:
      - type: reference
        name: MemoryGetResponse
data:
  name: getKnowledge
  category: dbmemory
  link: getKnowledge.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 

//set the userID and password 
const UserID = await codebolt.dbmemory.getKnowledge("UserID")
const Password = await codebolt.dbmemory.getKnowledge("Passowrd")

console.log("UserId------",UserID);
console.log("Password------",Password);

///output

///UserId------ admin
///Password----- Test@123

```

### Explaination

The getKnowledge method retrieves the value associated with a given key from the in-memory database, allowing you to access stored information using the unique identifier provided.

