---
name: checkout
cbbaseinfo:
  description: 'Checks out a branch or commit in the Git repository. Switches the working directory to the specified branch.'
cbparameters:
  parameters:
    - name: branchName
      typeName: string
      description: 'The name of the branch or commit to check out.'
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
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

## Examples

### Basic Branch Checkout

```js
// Switch to a specific branch
const checkoutResult = await codebolt.git.checkout('test-branch');
console.log('✅ Git checkout result:', checkoutResult);
```

### Checkout at Specific Path

```js
// Checkout branch in repository at specific path
const checkoutResult = await codebolt.git.checkout('feature-branch', '/path/to/repo');
console.log('Checkout result:', checkoutResult);
```
