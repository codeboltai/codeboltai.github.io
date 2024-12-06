---
name: checkout
cbbaseinfo:
  description: Checks out a branch or commit in the local repository at the given path.
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The file system path of the local Git repository.
    - name: branch
      typeName: string
      description: The name of the branch or commit to check out.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the checkout event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: checkout
  category: git
  link: checkout.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Comming soon...


### Example 

```js 

await git.checkout('/path/to/repo', 'feature-branch')

```

### Explaination

Check out a specific branch in the local repository. It has two parameter.

path: A string specifying the local repository path.

branch: A string specifying the branch name to be checked out.