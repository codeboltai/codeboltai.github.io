---
name: init
cbbaseinfo:
  description: 'Initializes a new Git repository. Can be used in the current directory or at a specified path.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: 'Optional. The file system path where the Git repository should be initialized. If not provided, initializes in the current directory.'
      optional: true
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the init event.
data:
  name: init
  category: git
  link: init.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Initialize Repository in Current Directory

```js
// Initialize git repository in current directory
const initResult = await codebolt.git.init();
console.log('✅ Git init result:', initResult);
```

### Initialize Repository at Specific Path

```js
// Initialize git repository at specific path
const initResult = await codebolt.git.init('/path/to/new/repo');
console.log('Git repository initialized at:', initResult);
```

### Complete Git Setup Workflow

```js
// 1. Initialize repository
const initResult = await codebolt.git.init();
console.log('Repository initialized:', initResult);

// 2. Check initial status
const statusResult = await codebolt.git.status();
console.log('Initial status:', statusResult);

// 3. Create initial file
await codebolt.fs.createFile('README.md', '# My Project\n\nInitial project setup.');

// 4. Check status after file creation
const statusAfterFile = await codebolt.git.status();
console.log('Status after file creation:', statusAfterFile);
```