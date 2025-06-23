---
name: commit
cbbaseinfo:
  description: 'Commits the staged changes in the local repository with the given commit message.'
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The commit message to use for the commit.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the commit event.
data:
  name: commit
  category: git
  link: commit.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic Commit

```js
// Commit staged changes with a message
const commitResult = await codebolt.git.commit('Initial commit from CodeboltJS test');
console.log('✅ Git commit result:', commitResult);
```

### Complete Commit Workflow

```js
// 1. Create a test file
await codebolt.fs.createFile('README.md', '# Git Test Repository\n\nThis is a test repository created by CodeboltJS git tests.');
console.log('✅ Test file created');

// 2. Add files to staging area
const addResult = await codebolt.git.addAll();
console.log('✅ Git add result:', addResult);

// 3. Commit the staged changes
const commitResult = await codebolt.git.commit('Initial commit from CodeboltJS test');
console.log('✅ Git commit result:', commitResult);

```