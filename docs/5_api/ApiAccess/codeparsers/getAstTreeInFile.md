---
name: getAstTreeInFile
cbbaseinfo:
  description: Generates an Abstract Syntax Tree (AST) for a given file.
cbparameters:
  parameters:
    - name: file
      typeName: string
      description: The file path to generate an AST for.
    - name: className
      typeName: string
      description: (Optional) The name of the class to focus the AST generation on. If not provided, returns the full file AST.
  returns:
    signatureTypeName: object
    description: Returns an AST object with type, text, startPosition, endPosition, and children properties.
    typeArgs: []
data:
  name: getAstTreeInFile
  category: codeparsers
  link: getAstTreeInFile.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `ASTNode` object with the following properties:

- **`type`** (string): The node type (varies by programming language, e.g., "class_declaration", "function_declaration", "program").
- **`text`** (string): The source code text for this node.
- **`startPosition`** (object): Object containing the starting position with:
  - **`row`** (number): The starting row number
  - **`column`** (number): The starting column number
- **`endPosition`** (object): Object containing the ending position with:
  - **`row`** (number): The ending row number
  - **`column`** (number): The ending column number
- **`children`** (array): Array of child `ASTNode` objects representing nested code structures.

**Error Response**: If the file doesn't exist, is not supported, or the specified class is not found, the method returns an object with:
- **`error`** (string): Description of the error that occurred.

## Examples

The `getAstTreeInFile` function generates Abstract Syntax Trees for various programming languages. The output structure varies by language but consistently includes `type`, `text`, `startPosition`, `endPosition`, and `children` properties.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

### JavaScript Class AST

```javascript
const astResult = await codebolt.codeparsers.getAstTreeInFile('path/to/file.js', 'Calculator');
```

**Output:**
```json
{
  "type": "class_declaration",
  "text": "class Calculator {\n    add(a, b) {\n        return a + b;\n    }\n    \n    multiply(a, b) {\n        return a * b;\n    }\n}",
  "startPosition": { "row": 5, "column": 16 },
  "endPosition": { "row": 13, "column": 17 },
  "children": [
    {
      "type": "class",
      "text": "class",
      "startPosition": { "row": 5, "column": 16 },
      "endPosition": { "row": 5, "column": 21 },
      "children": []
    },
    {
      "type": "identifier",
      "text": "Calculator",
      "startPosition": { "row": 5, "column": 22 },
      "endPosition": { "row": 5, "column": 32 },
      "children": []
    },
    {
      "type": "class_body",
      "text": "{\n    add(a, b) {\n        return a + b;\n    }\n    \n    multiply(a, b) {\n        return a * b;\n    }\n}",
      "startPosition": { "row": 5, "column": 33 },
      "endPosition": { "row": 13, "column": 17 },
      "children": [
        // Method declarations...
      ]
    }
  ]
}
```

### JavaScript Full File AST

```javascript
const fullAstResult = await codebolt.codeparsers.getAstTreeInFile('path/to/file.js');
```

**Output:**
```json
{
  "type": "program",
  "text": "function greet(name) {\n    return \"Hello, \" + name + \"!\";\n}\n\nclass Calculator {\n    add(a, b) {\n        return a + b;\n    }\n    \n    multiply(a, b) {\n        return a * b;\n    }\n}",
  "startPosition": { "row": 1, "column": 16 },
  "endPosition": { "row": 14, "column": 8 },
  "children": [
    {
      "type": "function_declaration",
      "text": "function greet(name) {\n    return \"Hello, \" + name + \"!\";\n}",
      "startPosition": { "row": 1, "column": 16 },
      "endPosition": { "row": 3, "column": 17 },
      "children": []
    },
    {
      "type": "class_declaration",
      "text": "class Calculator {\n    add(a, b) {\n        return a + b;\n    }\n    \n    multiply(a, b) {\n        return a * b;\n    }\n}",
      "startPosition": { "row": 5, "column": 16 },
      "endPosition": { "row": 13, "column": 17 },
      "children": []
    }
  ]
}
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

### TypeScript Class AST

```typescript
const astResult = await codebolt.codeparsers.getAstTreeInFile('path/to/file.ts', 'UserService');
```

**Output:**
```json
{
  "type": "class_declaration",
  "text": "class UserService {\n    private users: User[] = [];\n    \n    addUser(user: User): void {\n        this.users.push(user);\n    }\n    \n    getUser(id: number): User | undefined {\n        return this.users.find(u => u.id === id);\n    }\n}",
  "startPosition": { "row": 7, "column": 16 },
  "endPosition": { "row": 17, "column": 17 },
  "children": [
    {
      "type": "class",
      "text": "class",
      "startPosition": { "row": 7, "column": 16 },
      "endPosition": { "row": 7, "column": 21 },
      "children": []
    },
    {
      "type": "type_identifier",
      "text": "UserService",
      "startPosition": { "row": 7, "column": 22 },
      "endPosition": { "row": 7, "column": 33 },
      "children": []
    },
    {
      "type": "class_body",
      "text": "{\n    private users: User[] = [];\n    \n    addUser(user: User): void {\n        this.users.push(user);\n    }\n    \n    getUser(id: number): User | undefined {\n        return this.users.find(u => u.id === id);\n    }\n}",
      "startPosition": { "row": 7, "column": 34 },
      "endPosition": { "row": 17, "column": 17 },
      "children": [
        // Property and method declarations...
      ]
    }
  ]
}
```

</TabItem>
<TabItem value="python" label="Python">

### Python Class AST

```python
const astResult = await codebolt.codeparsers.getAstTreeInFile('path/to/file.py', 'Calculator');
```

**Output:**
```json
{
  "type": "class_definition",
  "text": "class Calculator:\n    def __init__(self):\n        self.history = []\n    \n    def add(self, a, b):\n        result = a + b\n        self.history.append(f\"{a} + {b} = {result}\")\n        return result\n    \n    def get_history(self):\n        return self.history",
  "startPosition": { "row": 1, "column": 16 },
  "endPosition": { "row": 11, "column": 43 },
  "children": [
    {
      "type": "class",
      "text": "class",
      "startPosition": { "row": 1, "column": 16 },
      "endPosition": { "row": 1, "column": 21 },
      "children": []
    },
    {
      "type": "identifier",
      "text": "Calculator",
      "startPosition": { "row": 1, "column": 22 },
      "endPosition": { "row": 1, "column": 32 },
      "children": []
    },
    {
      "type": ":",
      "text": ":",
      "startPosition": { "row": 1, "column": 32 },
      "endPosition": { "row": 1, "column": 33 },
      "children": []
    },
    {
      "type": "block",
      "text": "def __init__(self):\n        self.history = []\n    \n    def add(self, a, b):\n        result = a + b\n        self.history.append(f\"{a} + {b} = {result}\")\n        return result\n    \n    def get_history(self):\n        return self.history",
      "startPosition": { "row": 2, "column": 20 },
      "endPosition": { "row": 11, "column": 43 },
      "children": [
        // Method definitions...
      ]
    }
  ]
}
```

</TabItem>
</Tabs>

## Usage Notes

- **File Parameter**: Provide the full path to the source code file
- **ClassName Parameter**: Optional. When specified, returns the AST for that specific class. When omitted, returns the complete file AST
- **Language Support**: Supports JavaScript, TypeScript, Python, and other languages with tree-sitter parsers
- **Return Structure**: All AST nodes include:
  - `type`: The node type (varies by language)
  - `text`: The source code text for this node
  - `startPosition`: Object with `row` and `column` properties
  - `endPosition`: Object with `row` and `column` properties  
  - `children`: Array of child AST nodes

## Error Handling

The function handles various error cases gracefully:
- Non-existent files
- Unsupported file types
- Invalid class names
- Malformed source code