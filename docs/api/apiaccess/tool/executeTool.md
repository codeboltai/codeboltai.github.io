---
name: executeTool
cbbaseinfo:
  description: Executes a specific tool from a configured toolbox with provided parameters.
cbparameters:
  parameters:
    - name: toolbox
      typeName: string
      description: The name of the toolbox containing the tool
    - name: toolName
      typeName: string
      description: The name of the tool to execute
    - name: params
      typeName: object
      description: Parameters to pass to the tool execution (must match tool's input schema)
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the tool execution result
    typeArgs:
      - type: object
data:
  name: executeTool
  category: tool
  link: executeTool.md
---
<CBBaseInfo/>
<CBParameters/>

### Simple Example
```js
// Read a file using filesystem toolbox
const fsResult = await codebolt.tools.executeTool('filesystem', 'read_file', {
  path: './index.js'
});

console.log('✅ Tool execution result:', JSON.stringify(fsResult, null, 2));
```

```js
// Different tools require different parameters

// Filesystem tools
await codebolt.tools.executeTool('filesystem', 'read_file', {
  path: './file.txt'
});

await codebolt.tools.executeTool('filesystem', 'write_file', {
  path: './output.txt',
  content: 'Hello World'
});

// SQLite tools
await codebolt.tools.executeTool('sqlite', 'list_tables', {
  random_string: 'test'
});

await codebolt.tools.executeTool('sqlite', 'read_query', {
  query: 'SELECT * FROM users LIMIT 5'
});