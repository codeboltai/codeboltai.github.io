---
name: add
cbbaseinfo:
  description: Adds changes in the local repository to the staging area at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: add
  category: git
  link: add.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Working Progress...

### Example 

```js

await git.add('/path/to/repo/file.txt')

```

### Explaination

Add changes in the specified directory to the staging area. It has one parameter.

path: A string specifying the path of the directory or files to be added.