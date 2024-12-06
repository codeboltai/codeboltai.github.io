---
name: push
cbbaseinfo:
  description: Pushes local repository changes to the remote repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the push event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: push
  category: git
  link: push.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Comming soon...

### Example 

```js 

await git.push('/path/to/repo')

```


### Explaination

Push local changes to the remote repository. It has one parameter.

path: A string specifying the local repository path.