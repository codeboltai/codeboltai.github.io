---
name: searchFiles
cbbaseinfo:
  description: ' '
cbparameters:
  parameters:
    - name: folderpath
      typeName: string
      description: The path of the folder to search within.
    - name: regex
      typeName: RegExp
      description: The regular expression pattern to match file contents.
    - name: filePattern
      typeName: string
      description: The pattern to match file names.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server response.
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
let { success, result } = await codebolt.fs.searchFiles(path, regex, filePattern);
                    return [success, result]

```


### Explaination

The codebolt.fs.searchFiles method is used to search for files within a specified directory that match a given pattern. It has three parameters:

folderpath (string): The path of the folder to search within.

regex (RegExp): The regular expression pattern to match file contents.

filePattern (string): The pattern to match file names.