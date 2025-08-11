---
name: clone
cbbaseinfo:
  description: Clones a Git repository from the given URL to the specified path.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL of the Git repository to clone.
    - name: path
      typeName: string
      description: The file system path where the repository should be cloned to.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the clone event.
   
data:
  name: clone
  category: git
  link: clone.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Example

```js

await git.clone('https://github.com/user/repo.git', '/path/to/local/repo')

```

### Explaination 

Clone an existing Git repository from a given URL to a local directory. It has two parameter.

**url:** A string specifying the remote repository URL.

**path:** A string specifying the local directory path where the repository should be cloned.