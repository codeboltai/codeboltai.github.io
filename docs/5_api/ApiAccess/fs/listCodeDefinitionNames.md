---
name: listCodeDefinitionNames
cbbaseinfo:
  description: 'Lists all code definition names in a given path. Extracts function names, class names, method names, and other code definitions from source files.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search for code definitions.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the list of code definition names.
    typeArgs:
      - type: reference
        name: ListCodeDefinitionNamesResponse
data:
  name: listCodeDefinitionNames
  category: fs
  link: listCodeDefinitionNames.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic Code Definition Extraction

```js
// Extract code definitions from current directory
const result = await codebolt.fs.listCodeDefinitionNames('/home/user/projects');
console.log('Code definitions found:', result);
```

### Extract from Current Directory

```js
// List all code definitions in current directory
const codeDefResult = await codebolt.fs.listCodeDefinitionNames('.');
console.log('✅ Code definitions in current directory:', codeDefResult);

// Process the results
if (codeDefResult.success && codeDefResult.result) {
    console.log('Found code definitions:');
    if (Array.isArray(codeDefResult.result)) {
        codeDefResult.result.forEach((def, index) => {
            console.log(`${index + 1}. ${def}`);
        });
    } else {
        console.log('Result:', codeDefResult.result);
    }
}
```
