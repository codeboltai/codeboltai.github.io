---
name: add
cbbaseinfo:
  description: Adds changes in the local repository to the staging area. This command stages all changes (modified, deleted, and new files) for the next commit.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<AddResponse>
    description: A promise that resolves with an `AddResponse` object containing the response from the add operation.
data:
  name: add
  category: git
  link: add.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AddResponse` object with the following properties:

- **`type`** (string): Always "AddResponse".
- **`content`** (string, optional): Content or message about the add operation.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Add all changes to staging area
const addResult = await codebolt.git.addAll();
console.log("Response type:", addResult.type); // "AddResponse"
console.log("Success:", addResult.success); // true (if successful)
console.log("Content:", addResult.content); // Information about added files

// Example 2: Complete workflow with status checks
async function stageAllChanges() {
    // Check status before adding
    const statusBefore = await codebolt.git.status();
    console.log("Files to stage:", statusBefore.data?.modified?.length || 0);
    console.log("Untracked files:", statusBefore.data?.not_added?.length || 0);
    
    // Add all changes
    const addResult = await codebolt.git.addAll();
    
    if (addResult.success) {
        console.log("✅ All changes staged successfully");
        console.log("Add result:", addResult.content);
        
        // Check status after adding
        const statusAfter = await codebolt.git.status();
        console.log("Staged files:", statusAfter.data?.staged?.length || 0);
        
        return true;
    } else {
        console.error("❌ Failed to stage changes:", addResult.error);
        return false;
    }
}

// Example 3: Pre-commit preparation
async function prepareForCommit() {
    try {
        // Check if there are any changes to stage
        const status = await codebolt.git.status();
        
        if (!status.data) {
            console.log("⚠️  Unable to get repository status");
            return false;
        }
        
        const hasChanges = status.data.modified.length > 0 || 
                          status.data.not_added.length > 0 || 
                          status.data.deleted.length > 0;
        
        if (!hasChanges) {
            console.log("✨ No changes to stage");
            return false;
        }
        
        console.log(`📝 Found changes to stage:`);
        console.log(`  - Modified: ${status.data.modified.length}`);
        console.log(`  - New files: ${status.data.not_added.length}`);
        console.log(`  - Deleted: ${status.data.deleted.length}`);
        
        // Stage all changes
        const addResult = await codebolt.git.addAll();
        
        if (addResult.success) {
            console.log("✅ All changes staged for commit");
            return true;
        } else {
            console.error("❌ Failed to stage changes:", addResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error preparing for commit:", error);
        return false;
    }
}

// Example 4: Git workflow with file creation
async function createAndStageFiles() {
    try {
        // Create test files
        await codebolt.fs.createFile('README.md', '# My Project\n\nThis is a new project.');
        await codebolt.fs.createFile('index.js', 'console.log("Hello, World!");');
        console.log("✅ Files created");
        
        // Check what needs to be staged
        const statusBefore = await codebolt.git.status();
        console.log("New files to add:", statusBefore.data?.not_added);
        
        // Stage all changes
        const addResult = await codebolt.git.addAll();
        
        if (addResult.success) {
            console.log("✅ Files staged:", addResult.content);
            
            // Verify staging
            const statusAfter = await codebolt.git.status();
            console.log("Staged files:", statusAfter.data?.staged);
            
            return true;
        } else {
            console.error("❌ Failed to stage files:", addResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in file creation workflow:", error);
        return false;
    }
}

// Example 5: Error handling and validation
async function safeAddAll() {
    try {
        // First, ensure we're in a git repository
        const status = await codebolt.git.status();
        
        if (!status.success) {
            console.error("❌ Not in a git repository or git error:", status.error);
            return false;
        }
        
        // Check if there are any conflicted files
        if (status.data?.conflicted && status.data.conflicted.length > 0) {
            console.error("❌ Cannot stage files with unresolved conflicts:");
            status.data.conflicted.forEach(file => console.log(`  - ${file}`));
            return false;
        }
        
        // Proceed with adding
        const addResult = await codebolt.git.addAll();
        
        if (addResult.success) {
            console.log("✅ Successfully staged all changes");
            if (addResult.content) {
                console.log("Details:", addResult.content);
            }
            return true;
        } else {
            console.error("❌ Failed to stage changes:", addResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error during safe add operation:", error);
        return false;
    }
}

// Example 6: Automated workflow
async function automatedGitWorkflow() {
    console.log("🚀 Starting automated Git workflow...");
    
    // Step 1: Check repository status
    const initialStatus = await codebolt.git.status();
    if (!initialStatus.success) {
        console.error("❌ Failed to get repository status");
        return;
    }
    
    // Step 2: Stage all changes
    const addResult = await codebolt.git.addAll();
    if (!addResult.success) {
        console.error("❌ Failed to stage changes:", addResult.error);
        return;
    }
    
    console.log("✅ Changes staged successfully");
    
    // Step 3: Commit changes
    const commitResult = await codebolt.git.commit('Automated commit: staged all changes');
    if (commitResult.success) {
        console.log("✅ Changes committed successfully");
        console.log("Commit hash:", commitResult.hash);
    } else {
        console.error("❌ Failed to commit:", commitResult.error);
    }
}

### Common Use Cases

- **Pre-commit Staging**: Stage all changes before creating a commit
- **Workflow Automation**: Automatically stage files as part of build processes
- **Development Workflow**: Stage changes after completing a feature
- **File Management**: Add newly created files to version control
- **Batch Operations**: Stage multiple files at once efficiently

### Notes

- This function is equivalent to running `git add .` in the terminal.
- It stages all changes including modified files, new files, and deleted files.
- Files in the staging area are ready to be committed with `codebolt.git.commit()`.
- The operation only affects the staging area, not the actual commit history.
- If there are conflicted files, resolve conflicts before staging.
- Use `codebolt.git.status()` to verify what was staged after the operation.
- This is a safe operation that doesn't modify the working directory.
- The function stages changes in the current repository's working directory.