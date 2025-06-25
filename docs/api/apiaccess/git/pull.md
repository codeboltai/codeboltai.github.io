---
name: pull
cbbaseinfo:
  description: >-
    Pulls the latest changes from the remote repository to the local repository
    at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the pull event.
data:
  name: pull
  category: git
  link: pull.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example 

```js 

await git.pull('/path/to/repo')

```

### Explaination 

Pulls the latest changes from the remote repository into the local repository.

path: A string specifying the local repository path.