---
name: parseJSON
cbbaseinfo:
  description: Parses JSON string and returns a result object with success flag and parsed data or error.
cbparameters:
  parameters:
    - name: jsonString
      typeName: string
      description: The JSON string to parse.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed data or error information.
    typeArgs: []
data:
  name: parseJSON
  category: outputparsers
  link: parseJSON.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: <parsed_json_object>
}
```

### Error Response
```javascript
{
  success: false,
  error: <Error_object>
}
```

## Examples

### Valid JSON Parsing
```javascript
const validJson = '{"name": "test", "value": 123, "active": true}';
const result = await codebolt.outputparsers.parseJSON(validJson);
console.log(result);
// Output: { success: true, parsed: { name: 'test', value: 123, active: true } }
```

### Invalid JSON Parsing
```javascript
const invalidJson = '{"name": "test", "value": 123, "active":}';
const result = await codebolt.outputparsers.parseJSON(invalidJson);
console.log(result);
// Output: { success: false, error: SyntaxError... }
```

### Complex JSON Object
```javascript
const complexJson = JSON.stringify({
    users: [
        { id: 1, name: 'Alice', roles: ['admin', 'user'] },
        { id: 2, name: 'Bob', roles: ['user'] }
    ],
    metadata: {
        total: 2,
        timestamp: new Date().toISOString()
    }
});
const result = await codebolt.outputparsers.parseJSON(complexJson);
console.log(result);
// Output: { success: true, parsed: { users: [...], metadata: {...} } }
``` 