---
name: pull
cbbaseinfo:
  description: Pulls the latest changes from the remote repository to the local repository. Fetches and merges changes from the remote branch into the current local branch.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GitPullResponse>
    description: A promise that resolves with a `GitPullResponse` object containing the pull operation results and change statistics.
data:
  name: pull
  category: git
  link: pull.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitPullResponse` object with the following properties:

- **`type`** (string): Always "gitPullResponse".
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`changes`** (number, optional): Total number of changes pulled from remote.
- **`insertions`** (number, optional): Number of lines inserted.
- **`deletions`** (number, optional): Number of lines deleted.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic pull operation
const pullResult = await codebolt.git.pull();
console.log("Response type:", pullResult.type); // "gitPullResponse"
console.log("Success:", pullResult.success); // true (if successful)
console.log("Changes:", pullResult.changes); // Number of changes pulled
console.log("Insertions:", pullResult.insertions); // Lines added
console.log("Deletions:", pullResult.deletions); // Lines removed

// Example 2: Pull with status check
async function pullWithStatusCheck() {
    try {
        // Check status before pull
        const statusBefore = await codebolt.git.status();
        console.log("Current branch:", statusBefore.data?.current);
        console.log("Behind remote:", statusBefore.data?.behind);
        
        // Pull latest changes
        const pullResult = await codebolt.git.pull();
        
        if (pullResult.success) {
            console.log("✅ Pull successful");
            console.log(`📊 Changes: ${pullResult.changes || 0}`);
            console.log(`➕ Insertions: ${pullResult.insertions || 0}`);
            console.log(`➖ Deletions: ${pullResult.deletions || 0}`);
            
            // Check status after pull
            const statusAfter = await codebolt.git.status();
            console.log("Now behind remote:", statusAfter.data?.behind);
            
            return true;
        } else {
            console.error("❌ Pull failed:", pullResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error during pull operation:", error);
        return false;
    }
}

// Example 3: Safe pull with conflict detection
async function safePull() {
    try {
        // Check for uncommitted changes
        const status = await codebolt.git.status();
        
        if (!status.data) {
            console.error("❌ Unable to get repository status");
            return false;
        }
        
        // Warn about uncommitted changes
        const hasUncommitted = status.data.modified.length > 0 || 
                              status.data.not_added.length > 0 || 
                              status.data.staged.length > 0;
        
        if (hasUncommitted) {
            console.log("⚠️  Warning: You have uncommitted changes");
            console.log("Modified files:", status.data.modified.length);
            console.log("Untracked files:", status.data.not_added.length);
            console.log("Staged files:", status.data.staged.length);
        }
        
        // Check for conflicts
        if (status.data.conflicted.length > 0) {
            console.error("❌ Cannot pull with unresolved conflicts:");
            status.data.conflicted.forEach(file => console.log(`  - ${file}`));
            return false;
        }
        
        // Perform pull
        const pullResult = await codebolt.git.pull();
        
        if (pullResult.success) {
            console.log("✅ Pull completed successfully");
            
            if (pullResult.changes && pullResult.changes > 0) {
                console.log(`📦 Pulled ${pullResult.changes} changes`);
                console.log(`📝 ${pullResult.insertions || 0} insertions, ${pullResult.deletions || 0} deletions`);
            } else {
                console.log("📋 Repository is already up to date");
            }
            
            return true;
        } else {
            console.error("❌ Pull failed:", pullResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in safe pull:", error);
        return false;
    }
}

// Example 4: Pull with automatic conflict resolution workflow
async function pullWithConflictHandling() {
    const pullResult = await codebolt.git.pull();
    
    if (pullResult.success) {
        console.log("✅ Pull successful");
        return true;
    } else {
        // Check if it's a conflict error
        if (pullResult.error?.includes('conflict') || pullResult.error?.includes('merge')) {
            console.log("⚠️  Pull resulted in conflicts");
            
            // Check status to see conflicted files
            const status = await codebolt.git.status();
            if (status.data?.conflicted && status.data.conflicted.length > 0) {
                console.log("📋 Conflicted files:");
                status.data.conflicted.forEach(file => console.log(`  - ${file}`));
                console.log("💡 Resolve conflicts manually and then commit");
                return false;
            }
        }
        
        console.error("❌ Pull failed:", pullResult.error);
        return false;
    }
}

// Example 5: Synchronization check before pull
async function syncCheck() {
    try {
        const status = await codebolt.git.status();
        
        if (!status.data) {
            console.error("❌ Unable to get repository status");
            return false;
        }
        
        const { ahead, behind, current, tracking } = status.data;
        
        console.log(`📍 Current branch: ${current}`);
        console.log(`🔗 Tracking: ${tracking || 'Not tracking any remote'}`);
        
        if (behind === 0) {
            console.log("✅ Repository is up to date");
            return true;
        }
        
        console.log(`⬇️  ${behind} commits behind remote`);
        
        // Pull to sync
        const pullResult = await codebolt.git.pull();
        
        if (pullResult.success) {
            console.log(`✅ Synchronized with remote (${pullResult.changes || 0} changes)`);
            return true;
        } else {
            console.error("❌ Failed to synchronize:", pullResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in sync check:", error);
        return false;
    }
}

// Example 6: Error handling
try {
    const pullResult = await codebolt.git.pull();
    
    if (pullResult.success) {
        console.log('✅ Pull completed successfully');
        console.log('Changes pulled:', pullResult.changes || 0);
        console.log('Insertions:', pullResult.insertions || 0);
        console.log('Deletions:', pullResult.deletions || 0);
    } else {
        console.error('❌ Pull failed:', pullResult.error);
        console.error('Message:', pullResult.message);
    }
} catch (error) {
    console.error('Error during pull operation:', error);
}
```

### Common Use Cases

- **Synchronization**: Keep local repository up to date with remote changes
- **Collaboration**: Pull changes made by team members
- **Branch Updates**: Get latest changes from remote branch
- **Conflict Resolution**: Handle merge conflicts during pull operations
- **Automated Workflows**: Pull changes as part of CI/CD processes

### Notes

- The pull operation fetches changes from the remote repository and merges them into the current branch.
- If there are conflicts, the pull will fail and you'll need to resolve them manually.
- Uncommitted changes may cause conflicts during pull - consider committing or stashing first.
- The operation requires a remote repository to be configured and accessible.
- Use `codebolt.git.status()` to check if you're behind the remote before pulling.
- The `changes`, `insertions`, and `deletions` properties provide statistics about the pulled changes.
- If the repository is already up to date, the operation succeeds but may have zero changes.
- Network connectivity is required to communicate with the remote repository.

### Example 

```js 

await git.pull('/path/to/repo')

```

### Explaination 

Pulls the latest changes from the remote repository into the local repository.

path: A string specifying the local repository path.