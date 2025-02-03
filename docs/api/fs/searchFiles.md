---
name: searchFiles
cbbaseinfo:
  description: 'Searches files in a given path using a regex pattern.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search within.
    - name: regex
      typeName: string
      description: The regex pattern to search for.
    - name: filePattern
      typeName: string
      description: The file pattern to match files.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the search results.
    typeArgs:
      - type: reference
        name: SearchFilesResponse
data:
  name: searchFiles
  category: fs
  link: searchFiles.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```js
// Let's assume you want to search for files in the /home/user/documents directory that match the regex pattern "example" and have a .txt extension.

codebolt.fs.searchFiles('/home/user/documents', 'example', '*.txt');