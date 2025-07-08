---
name: status
cbbaseinfo:
  description: Retrieves the status of the Git repository. Shows working tree status including staged, unstaged, and untracked files along with branch information.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GitStatusResponse>
    description: A promise that resolves with a `GitStatusResponse` object containing the git status information and repository state.
data:
  name: status
  category: git
  link: status.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitStatusResponse` object with the following properties:

- **`type`** (string): Always "gitStatusResponse".
- **`data`** (StatusResult, optional): Object containing detailed status information with the following properties:
  - **`not_added`** (string[]): Array of files not added to staging (untracked files).
  - **`conflicted`** (string[]): Array of files with merge conflicts.
  - **`created`** (string[]): Array of newly created files.
  - **`deleted`** (string[]): Array of deleted files.
  - **`modified`** (string[]): Array of modified files.
  - **`renamed`** (string[]): Array of renamed files.
  - **`files`** (GitFileStatus[]): Array of file status objects with detailed information.
  - **`staged`** (string[]): Array of staged files ready for commit.
  - **`ahead`** (number): Number of commits ahead of remote branch.
  - **`behind`** (number): Number of commits behind remote branch.
  - **`current`** (string | null): Current branch name or null if detached.
  - **`tracking`** (string | null): Tracking branch name or null if not tracking.
  - **`detached`** (boolean): Boolean indicating if in detached HEAD state.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic status check
const statusResult = await codebolt.git.status();
console.log("Response type:", statusResult.type); // "gitStatusResponse"
console.log("Current branch:", statusResult.data?.current); // e.g., "main"
console.log("Untracked files:", statusResult.data?.not_added); // Array of untracked files
console.log("Modified files:", statusResult.data?.modified); // Array of modified files
console.log("Staged files:", statusResult.data?.staged); // Array of staged files

// Example 2: Comprehensive status analysis
const status = await codebolt.git.status();
if (status.success && status.data) {
    const data = status.data;
    
    console.log(`📍 Current branch: ${data.current}`);
    console.log(`🔗 Tracking: ${data.tracking || 'Not tracking any remote'}`);
    console.log(`⬆️  Ahead: ${data.ahead} commits`);
    console.log(`⬇️  Behind: ${data.behind} commits`);
    
    if (data.not_added.length > 0) {
        console.log(`📄 Untracked files (${data.not_added.length}):`);
        data.not_added.forEach(file => console.log(`  - ${file}`));
    }
    
    if (data.modified.length > 0) {
        console.log(`✏️  Modified files (${data.modified.length}):`);
        data.modified.forEach(file => console.log(`  - ${file}`));
    }
    
    if (data.staged.length > 0) {
        console.log(`✅ Staged files (${data.staged.length}):`);
        data.staged.forEach(file => console.log(`  - ${file}`));
    }
    
    if (data.conflicted.length > 0) {
        console.log(`⚠️  Conflicted files (${data.conflicted.length}):`);
        data.conflicted.forEach(file => console.log(`  - ${file}`));
    }
}

// Example 3: Status-based workflow decisions
const repoStatus = await codebolt.git.status();
if (repoStatus.data) {
    const hasChanges = repoStatus.data.modified.length > 0 || 
                      repoStatus.data.not_added.length > 0 || 
                      repoStatus.data.staged.length > 0;
    
    if (hasChanges) {
        console.log("📝 Repository has changes");
        
        if (repoStatus.data.staged.length > 0) {
            console.log("✅ Ready to commit staged changes");
        }
        
        if (repoStatus.data.modified.length > 0) {
            console.log("⚠️  Modified files need to be staged");
        }
        
        if (repoStatus.data.not_added.length > 0) {
            console.log("📄 New files need to be added");
        }
    } else {
        console.log("✨ Working tree is clean");
    }
}

// Example 4: Pre-commit status check
async function preCommitCheck() {
    const status = await codebolt.git.status();
    
    if (!status.success) {
        console.error("❌ Failed to get repository status:", status.error);
        return false;
    }
    
    if (!status.data?.staged || status.data.staged.length === 0) {
        console.log("⚠️  No staged changes to commit");
        return false;
    }
    
    if (status.data.conflicted.length > 0) {
        console.error("❌ Cannot commit with unresolved conflicts:");
        status.data.conflicted.forEach(file => console.log(`  - ${file}`));
        return false;
    }
    
    console.log(`✅ Ready to commit ${status.data.staged.length} staged files`);
    return true;
}

// Example 5: Repository synchronization check
const syncStatus = await codebolt.git.status();
if (syncStatus.data) {
    const { ahead, behind, current, tracking } = syncStatus.data;
    
    if (!tracking) {
        console.log("🔗 Branch is not tracking a remote");
    } else if (ahead > 0 && behind > 0) {
        console.log(`🔄 Branch diverged: ${ahead} ahead, ${behind} behind ${tracking}`);
    } else if (ahead > 0) {
        console.log(`⬆️  Branch is ${ahead} commits ahead of ${tracking}`);
    } else if (behind > 0) {
        console.log(`⬇️  Branch is ${behind} commits behind ${tracking}`);
    } else {
        console.log(`✅ Branch is up to date with ${tracking}`);
    }
}

// Example 6: Error handling
try {
    const statusResult = await codebolt.git.status();
    
    if (statusResult.success) {
        console.log('✅ Status retrieved successfully');
        // Process status data...
    } else {
        console.error('❌ Failed to get status:', statusResult.error);
    }
} catch (error) {
    console.error('Error getting Git status:', error);
}
```

### Common Use Cases

- **Pre-commit Checks**: Verify what changes are staged before committing
- **Repository State**: Check current branch and tracking information
- **Change Detection**: Identify modified, added, or deleted files
- **Conflict Resolution**: Find files with merge conflicts
- **Synchronization**: Check if local branch is ahead/behind remote
- **Workflow Automation**: Make decisions based on repository state

### Notes

- The function provides comprehensive information about the repository's current state.
- The `data` property contains detailed status information including file lists and branch info.
- Use `not_added` to find untracked files that need to be added to Git.
- Use `modified` to find files that have been changed but not staged.
- Use `staged` to find files ready for commit.
- The `ahead`/`behind` counters help determine synchronization with remote branches.
- The `current` property shows the active branch name.
- If the repository is in a detached HEAD state, `detached` will be true.
- This command is safe to run frequently as it only reads repository state.
