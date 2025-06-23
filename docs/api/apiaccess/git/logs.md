---
name: logs
cbbaseinfo:
  description: 'Retrieves the commit logs for the Git repository. Shows the commit history with details like hash, message, author, and date.'
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the logs event.
data:
  name: logs
  category: git
  link: logs.md
---
<CBBaseInfo/> 
<CBParameters/>

## Examples

### Basic Logs Retrieval

```js
// Get commit logs for current repository
const logsResult = await codebolt.git.logs();
console.log('✅ Git logs result:', logsResult);
```

### Logs at Specific Path

```js
// Get commit logs for repository at specific path
const logsResult = await codebolt.git.logs('/path/to/repo');
console.log('Repository logs:', logsResult);
```

### Complete Git Workflow with Logs

```js
// 1. Create and commit some changes
await codebolt.fs.createFile('README.md', '# Git Test Repository\n\nThis is a test repository.');
await codebolt.git.addAll();
await codebolt.git.commit('Initial commit from CodeboltJS test');

// 2. Get commit logs
const logsResult = await codebolt.git.logs();
console.log('✅ Git logs result:', logsResult);

// 3. Work on a branch
await codebolt.git.branch('test-branch');
await codebolt.git.checkout('test-branch');

await codebolt.fs.createFile('test-file.txt', 'This file was created in the test branch.');
await codebolt.git.addAll();
await codebolt.git.commit('Add test file in test branch');

// 4. Check logs on branch
const branchLogs = await codebolt.git.logs();
console.log('Branch logs:', branchLogs);

// 5. Switch back to main and check logs
await codebolt.git.checkout('main');
const mainLogsResult = await codebolt.git.logs();
console.log('✅ Main branch logs:', mainLogsResult);
```
