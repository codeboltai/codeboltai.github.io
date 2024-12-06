---
name: branch
cbbaseinfo:
  description: Creates a new branch in the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
    - name: branch
      typeName: string
      description: The name of the new branch to create.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the branch event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: branch
  category: git
  link: branch.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Comming soon...

### Example 

```js

await git.branch('/path/to/repo', 'new-branch')

```

### Explaination

Creates a new branch in the local repository.It has two parameter.

path: A string specifying the local repository path.

branch: A string specifying the new branch name.