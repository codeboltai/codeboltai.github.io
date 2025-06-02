---
name: add_file
cbbaseinfo:
  description: Adds a file to the CodeBolt File System.
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to add.
    - name: file_path
      typeName: string
      description: The path where the file should be added.
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: add_file
  category: rag
  link: add_file.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Example

```js
import codebolt from '@codebolt/codeboltjs';

async function exampleAddFile() {
    await codebolt.rag.add_file("example.txt", "/path/to/file");
    console.log("File added successfully.");
}

exampleAddFile();