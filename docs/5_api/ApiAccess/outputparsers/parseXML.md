---
name: parseXML
cbbaseinfo:
  description: Parses XML string and returns a result object with success flag and parsed data.
cbparameters:
  parameters:
    - name: xmlString
      typeName: string
      description: The XML string to parse.
  returns:
    signatureTypeName: Object
    description: An object with success flag and parsed XML data.
    typeArgs: []
data:
  name: parseXML
  category: outputparsers
  link: parseXML.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

The method returns an object with the following structure:

### Success Response
```javascript
{
  success: true,
  parsed: {
    rootElement: "<xml_content>"
  }
}
```

### Error Response
```javascript
{
  success: false,
  parsed: undefined
}
```

## Examples

### Valid XML Parsing
```javascript
const xmlData = '<root><item id="1">Test Item</item><item id="2">Another Item</item></root>';
const result = await codebolt.outputparsers.parseXML(xmlData);
console.log(result);
// Output: {
//   success: true,
//   parsed: {
//     rootElement: '<root><item id="1">Test Item</item><item id="2">Another Item</item></root>'
//   }
// }
```

### Invalid XML Parsing
```javascript
const invalidXml = 'not valid xml';
const result = await codebolt.outputparsers.parseXML(invalidXml);
console.log(result);
// Output: { success: false, parsed: undefined }
``` 