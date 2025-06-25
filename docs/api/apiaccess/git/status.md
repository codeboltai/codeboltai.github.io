---
name: status
cbbaseinfo:
  description: 'Retrieves the status of the Git repository. Shows working tree status including staged, unstaged, and untracked files.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the status event.
data:
  name: status
  category: git
  link: status.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic Status Check

```js
// Check status of current repository
const statusResult = await codebolt.git.status();
console.log('✅ Git status result:', statusResult);
```

### Status Check at Specific Path

```js
// Check status of repository at specific path
const statusResult = await codebolt.git.status('/path/to/repo');
console.log('Repository status:', statusResult);
```
