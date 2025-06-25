---
name: diff
cbbaseinfo:
  description: 'Retrieves the diff of changes for a specific commit in the Git repository. Shows the differences between the specified commit and the current state.'
cbparameters:
  parameters:
    - name: commitHash
      typeName: string
      description: 'The hash of the commit to retrieve the diff for.'
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
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

## Examples

### Basic Diff Operation

```js
// Get diff for a specific commit hash
const diffResult = await codebolt.git.diff('abc123def456');
console.log('✅ Git diff result:', diffResult);
```