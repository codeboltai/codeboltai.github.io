---
name: parseCSV
cbbaseinfo:
  description: Parses CSV string and returns a result object with success flag and parsed array of objects.
cbparameters:
  parameters:
    - name: csvString
      typeName: string
      description: The CSV string to parse.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed array of objects or error information.
    typeArgs: []
data:
  name: parseCSV
  category: outputparsers
  link: parseCSV.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: [
    { column1: "value1", column2: "value2", ... },
    { column1: "value3", column2: "value4", ... },
    ...
  ]
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

### Valid CSV Parsing
```javascript
const csvData = 'name,age,city\nJohn,25,New York\nJane,30,Los Angeles\nBob,35,Chicago';
const result = await codebolt.outputparsers.parseCSV(csvData);
console.log(result);
// Output: {
//   success: true,
//   parsed: [
//     { name: 'John', age: '25', city: 'New York' },
//     { name: 'Jane', age: '30', city: 'Los Angeles' },
//     { name: 'Bob', age: '35', city: 'Chicago' }
//   ]
// }
```

### Simple CSV with Headers
```javascript
const csvData = 'product,price\nLaptop,999\nMouse,29';
const result = await codebolt.outputparsers.parseCSV(csvData);
console.log(result);
// Output: {
//   success: true,
//   parsed: [
//     { product: 'Laptop', price: '999' },
//     { product: 'Mouse', price: '29' }
//   ]
// }
``` 