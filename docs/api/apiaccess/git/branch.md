---
name: branch
cbbaseinfo:
  description: 'Creates a new branch in the Git repository. Can create branches in the current repository or at a specified path.'
cbparameters:
  parameters:
    - name: branchName
      typeName: string
      description: 'The name of the new branch to create.'
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
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

## Examples

### Basic Branch Creation

```js
// Create a new branch in current repository
const branchResult = await codebolt.git.branch('test-branch');
console.log('✅ Git branch creation result:', branchResult);
```

### Branch Creation at Specific Path

```js
// Create a new branch in repository at specific path
const branchResult = await codebolt.git.branch('feature-branch', '/path/to/repo');
console.log('Branch created:', branchResult);
```
