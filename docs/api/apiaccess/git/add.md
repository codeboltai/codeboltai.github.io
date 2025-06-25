---
name: add
cbbaseinfo:
  description: 'Adds changes in the local repository to the staging area. Can add specific files or all changes.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: 'Optional. The file system path of the file or directory to add. If not provided, some implementations may add all changes.'
      optional: true
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add event.
    typeArgs:
      - type: intrinsic
        name: any
data:
  name: add
  category: git
  link: add.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Add All Changes (Most Common)

```js
// Add all changes to staging area (equivalent to git add .)
const addResult = await codebolt.git.addAll();
console.log('✅ Git add result:', addResult);
```

### Add Specific File

```js
// Add a specific file to staging area
const addResult = await codebolt.git.add('README.md');
console.log('File added to staging:', addResult);
```

### Complete Git Workflow with Add

```js
// 1. Create a test file
await codebolt.fs.createFile('README.md', '# Git Test Repository\n\nThis is a test repository created by CodeboltJS git tests.');
console.log('✅ Test file created');

// 2. Check status before adding
const statusBefore = await codebolt.git.status();
console.log('Status before add:', statusBefore);

// 3. Add all changes to staging area
const addResult = await codebolt.git.addAll();
console.log('✅ Git add result:', addResult);

// 4. Check status after adding
const statusAfter = await codebolt.git.status();
console.log('✅ Git status after add:', statusAfter);

// 5. Commit the staged changes
const commitResult = await codebolt.git.commit('Initial commit from CodeboltJS test');
console.log('✅ Git commit result:', commitResult);
```