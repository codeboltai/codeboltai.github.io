---
name: getClassesInFile
cbbaseinfo:
  description: Retrieves all classes found in a given file. Supports JavaScript, TypeScript, and Python files.
cbparameters:
  parameters:
    - name: file
      typeName: string
      description: The file path to parse for classes.
  returns:
    signatureTypeName: Array<ClassInfo>
    description: 'An array of objects containing class information with name and location properties.'
    typeArgs: []
data:
  name: getClassesInFile
  category: codeparsers
  link: getClassesInFile.md
---
<CBBaseInfo/> 
<CBParameters/>

## Description

The `getClassesInFile` function parses a source code file and extracts information about all classes defined within it. This function supports multiple programming languages including JavaScript, TypeScript, and Python.

## Usage

```javascript
const result = await codebolt.codeparsers.getClassesInFile(filePath);
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
// For a JavaScript file containing:
// class Calculator {
//     add(a, b) { return a + b; }
//     multiply(a, b) { return a * b; }
// }

const jsResult = await codebolt.codeparsers.getClassesInFile('test.js');
console.log(jsResult);
// Output:
// [
//   {
//     name: 'Calculator',
//     location: 'C:\\path\\to\\file\\test.js'
//   }
// ]
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```javascript
// For a TypeScript file containing:
// class UserService {
//     private users: User[] = [];
//     addUser(user: User): void { ... }
//     getUser(id: number): User | undefined { ... }
// }

const tsResult = await codebolt.codeparsers.getClassesInFile('test.ts');
console.log(tsResult);
// Output:
// [
//   {
//     name: 'UserService',
//     location: 'C:\\path\\to\\file\\test.ts'
//   }
// ]
```

</TabItem>
<TabItem value="python" label="Python">

```javascript
// For a Python file containing:
// class Calculator:
//     def __init__(self): ...
//     def add(self, a, b): ...
//     def get_history(self): ...

const pyResult = await codebolt.codeparsers.getClassesInFile('test.py');
console.log(pyResult);
// Output:
// [
//   {
//     name: 'Calculator',
//     location: 'C:\\path\\to\\file\\test.py'
//   }
// ]
```

</TabItem>
</Tabs>

## Response Format

The function returns an array of objects, where each object represents a class found in the file:

```javascript
[
  {
    name: 'Calculator',
    location: 'C:\\path\\to\\file\\test.js'
  },
  {
    name: 'UserService', 
    location: 'C:\\path\\to\\file\\test.ts'
  }
]
```

### Response Properties

- **name** (string): The name of the class
- **location** (string): The absolute file path where the class is defined

## Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)
- Python (`.py`)

## Error Handling

If the file doesn't exist or is not supported, the function will return an appropriate error response. Always handle potential errors when using this function.