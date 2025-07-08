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
    signatureTypeName: Promise<GitStatusResponse>
    description: A promise that resolves with the git status information.
    typeArgs:
      - type: reference
        name: GitStatusResponse
data:
  name: status
  category: git
  link: status.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitStatusResponse` object with the following properties:

**Response Properties:**
- `type`: Always "gitStatusResponse"
- `data`: Optional object containing detailed status information
  - `not_added`: Array of files not added to staging
  - `conflicted`: Array of files with conflicts
  - `created`: Array of newly created files
  - `deleted`: Array of deleted files
  - `modified`: Array of modified files
  - `renamed`: Array of renamed files
  - `files`: Array of file status objects
  - `staged`: Array of staged files
  - `ahead`: Number of commits ahead of remote
  - `behind`: Number of commits behind remote
  - `current`: Current branch name or null
  - `tracking`: Tracking branch name or null
  - `detached`: Boolean indicating if in detached HEAD state
- `success`: Optional boolean indicating if the operation was successful
- `message`: Optional string with additional information
- `error`: Optional string containing error details if the operation failed
- `messageId`: Optional unique identifier for the message
- `threadId`: Optional thread identifier

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
