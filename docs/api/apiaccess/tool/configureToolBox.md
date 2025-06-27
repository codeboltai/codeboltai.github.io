---
name: configureToolBox
cbbaseinfo:
  description: Configures a toolbox with specified settings and parameters.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the toolbox to configure
    - name: config
      typeName: object
      description: Configuration object containing toolbox-specific settings
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with configuration result status
    typeArgs:
      - type: object
data:
  name: configureToolBox
  category: tool
  link: configureToolBox.md
---
<CBBaseInfo/>
<CBParameters/>

### Simple Example
```js
// Basic SQLite toolbox configuration
const result = await codebolt.tools.configureToolBox('sqlite', {
  database_path: './my-database.db',
  read_only: true
});

console.log('Configuration successful:', result?.success);
```

