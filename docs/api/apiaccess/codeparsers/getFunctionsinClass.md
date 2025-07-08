---
name: getFunctionsinClass
cbbaseinfo:
  description: Retrieves all functions/methods within a specified class in a given file. Supports JavaScript, TypeScript, and Python files.
cbparameters:
  parameters:
    - name: file
      typeName: string
      description: The file path containing the class to parse.
    - name: className
      typeName: string
      description: The name of the class to parse for functions/methods.
  returns:
    signatureTypeName: Array<FunctionInfo>
    description: 'An array of objects containing function information with name, class, and location properties.'
    typeArgs: []
data:
  name: getFunctionsinClass
  category: codeparsers
  link: getFunctionsinClass.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an array of function information objects. Each object in the array has the following properties:

- **`name`** (string): The name of the function/method found in the class.
- **`class`** (string): The name of the class containing the function (matches the `className` parameter).
- **`location`** (string): The absolute file path where the function is defined.

**Success Response**: Array of function objects:
```typescript
Array<{
  name: string;
  class: string;
  location: string;
}>
```

**Error Response**: If the file doesn't exist or is not supported, the method returns an object with:
- **`error`** (string): Description of the error that occurred (e.g., "File does not exist or is not accessible: /path/to/file").

**Note**: Constructor methods (like `constructor` in JavaScript/TypeScript or `__init__` in Python) are typically excluded from the results.

## Description

The `getFunctionsinClass` function parses a source code file and extracts information about all functions/methods defined within a specified class. This function supports multiple programming languages including JavaScript, TypeScript, and Python.

## Usage

```javascript
const result = await codebolt.codeparsers.getFunctionsinClass(filePath, className);
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
// For a JavaScript file containing:
// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     multiply(a, b) {
//         return a * b;
//     }
// }

const jsResult = await codebolt.codeparsers.getFunctionsinClass('test.js', 'Calculator');
console.log(jsResult);
// Output:
// [
//   {
//     name: 'add',
//     class: 'Calculator',
//     location: 'C:\\path\\to\\file\\test.js'
//   },
//   {
//     name: 'multiply',
//     class: 'Calculator',
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
//     addUser(user: User): void {
//         this.users.push(user);
//     }
//     getUser(id: number): User | undefined {
//         return this.users.find(u => u.id === id);
//     }
// }

const tsResult = await codebolt.codeparsers.getFunctionsinClass('test.ts', 'UserService');
console.log(tsResult);
// Output:
// [
//   {
//     name: 'addUser',
//     class: 'UserService',
//     location: 'C:\\path\\to\\file\\test.ts'
//   },
//   {
//     name: 'getUser',
//     class: 'UserService',
//     location: 'C:\\path\\to\\file\\test.ts'
//   }
// ]
```

</TabItem>
<TabItem value="python" label="Python">

```javascript
// For a Python file containing:
// class Calculator:
//     def __init__(self):
//         self.history = []
//     def add(self, a, b):
//         result = a + b
//         self.history.append(f"{a} + {b} = {result}")
//         return result
//     def get_history(self):
//         return self.history

const pyResult = await codebolt.codeparsers.getFunctionsinClass('test.py', 'Calculator');
console.log(pyResult);
// Output:
// [
//   {
//     name: 'add',
//     class: 'Calculator',
//     location: 'C:\\path\\to\\file\\test.py'
//   },
//   {
//     name: 'get_history',
//     class: 'Calculator',
//     location: 'C:\\path\\to\\file\\test.py'
//   }
// ]
// Note: __init__ constructor methods are typically excluded from the results
```

</TabItem>
</Tabs>

## Response Format

The function returns an array of objects, where each object represents a function/method found in the specified class:

```javascript
[
  {
    name: 'functionName',
    class: 'ClassName',
    location: 'C:\\path\\to\\file\\filename.ext'
  }
]
```

### Response Properties

- **name** (string): The name of the function/method
- **class** (string): The name of the class containing the function
- **location** (string): The absolute file path where the function is defined

## Supported File Types

- JavaScript (`.js`)
- TypeScript (`.ts`)
- Python (`.py`)

## Notes

- Constructor methods (like `__init__` in Python) are typically excluded from the results
- Private methods and public methods are both included in the results
- The function analyzes only the specified class, not the entire file

## Error Handling

If the file doesn't exist, the class is not found, or the file type is not supported, the function will return an appropriate error response. Always handle potential errors when using this function.