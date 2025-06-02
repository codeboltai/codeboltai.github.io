---
name: diff
cbbaseinfo:
  description: Retrieves the diff of changes for a specific commit in the local repository.
cbparameters:
  parameters:
    - name: commitHash
      typeName: string
      description: The hash of the commit to retrieve the diff for.
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the diff event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: diff
  category: git
  link: diff.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Comming soon...

### Example 

```js

await git.diff('abc123', '/path/to/repo')

```

### Explaination

Shows the difference between the specified commit and the current state of the repository. It has two parameter.

commitHash: A string specifying the commit hash to compare against.

path: A string specifying the local repository path.