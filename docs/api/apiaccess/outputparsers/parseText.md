---
name: parseText
cbbaseinfo:
  description: Parses text string and returns a result object with success flag and parsed lines array.
cbparameters:
  parameters:
    - name: text
      typeName: string
      description: The text string to parse into lines.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed array of lines.
    typeArgs: []
data:
  name: parseText
  category: outputparsers
  link: parseText.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: ["line1", "line2", "line3", ...]
}
```

## Examples

### Multi-line Text Parsing
```javascript
const textData = 'Line 1\nLine 2\nLine 3\nLine 4';
const result = await codebolt.outputparsers.parseText(textData);
console.log(result);
// Output: { success: true, parsed: ['Line 1', 'Line 2', 'Line 3', 'Line 4'] }
```

### Empty String Parsing
```javascript
const emptyText = '';
const result = await codebolt.outputparsers.parseText(emptyText);
console.log(result);
// Output: { success: true, parsed: [] }
```

### Single Line Text
```javascript
const singleLine = 'Hello World';
const result = await codebolt.outputparsers.parseText(singleLine);
console.log(result);
// Output: { success: true, parsed: ['Hello World'] }
```

### Text with Various Content
```javascript
const logData = 'INFO: Application started\nWARNING: Low memory\nERROR: Database connection failed\nINFO: Retrying connection';
const result = await codebolt.outputparsers.parseText(logData);
console.log(result);
// Output: { 
//   success: true, 
//   parsed: [
//     'INFO: Application started',
//     'WARNING: Low memory', 
//     'ERROR: Database connection failed',
//     'INFO: Retrying connection'
//   ] 
// }
``` 