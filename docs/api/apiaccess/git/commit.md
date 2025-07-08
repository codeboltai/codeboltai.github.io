---
name: commit
cbbaseinfo:
  description: Commits the staged changes in the local repository with the given commit message. Creates a new commit with all files currently in the staging area.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The commit message to use for the commit (e.g., "Initial commit", "Fix bug in authentication", "Add new feature").
  returns:
    signatureTypeName: Promise<GitCommitResponse>
    description: A promise that resolves with a `GitCommitResponse` object containing the commit information and metadata.
data:
  name: commit
  category: git
  link: commit.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitCommitResponse` object with the following properties:

- **`type`** (string): Always "gitCommitResponse".
- **`content`** (string, optional): Content or message about the commit operation.
- **`hash`** (string, optional): The SHA hash of the created commit.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic commit
const commitResult = await codebolt.git.commit('Initial commit from CodeboltJS');
console.log("Response type:", commitResult.type); // "gitCommitResponse"
console.log("Success:", commitResult.success); // true (if successful)
console.log("Commit hash:", commitResult.hash); // SHA hash of the commit
console.log("Content:", commitResult.content); // Commit details

// Example 2: Complete commit workflow
async function completeCommitWorkflow() {
    try {
        // 1. Check repository status
        const status = await codebolt.git.status();
        console.log("Staged files:", status.data?.staged?.length || 0);
        
        if (!status.data?.staged || status.data.staged.length === 0) {
            console.log("⚠️  No staged changes to commit");
            return false;
        }
        
        // 2. Create commit with descriptive message
        const commitResult = await codebolt.git.commit('Add new features and bug fixes');
        
        if (commitResult.success) {
            console.log("✅ Commit created successfully");
            console.log("Commit hash:", commitResult.hash);
            console.log("Commit details:", commitResult.content);
            return true;
        } else {
            console.error("❌ Failed to create commit:", commitResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in commit workflow:", error);
        return false;
    }
}

// Example 3: File creation and commit workflow
async function createFileAndCommit() {
    try {
        // Create new files
        await codebolt.fs.createFile('README.md', '# My Project\n\nThis is a new project.');
        await codebolt.fs.createFile('index.js', 'console.log("Hello, World!");');
        console.log("✅ Files created");
        
        // Stage all changes
        const addResult = await codebolt.git.addAll();
        if (!addResult.success) {
            console.error("❌ Failed to stage files:", addResult.error);
            return false;
        }
        
        // Commit with descriptive message
        const commitResult = await codebolt.git.commit('Initial project setup with README and main file');
        
        if (commitResult.success) {
            console.log("✅ Initial commit created");
            console.log("Commit hash:", commitResult.hash);
            return commitResult.hash;
        } else {
            console.error("❌ Failed to commit:", commitResult.error);
            return null;
        }
    } catch (error) {
        console.error("Error in file creation and commit:", error);
        return null;
    }
}

// Example 4: Pre-commit validation
async function validateAndCommit(message) {
    try {
        // Check repository status
        const status = await codebolt.git.status();
        
        if (!status.success) {
            console.error("❌ Failed to get repository status:", status.error);
            return false;
        }
        
        // Validate there are staged changes
        if (!status.data?.staged || status.data.staged.length === 0) {
            console.error("❌ No staged changes to commit");
            console.log("💡 Use codebolt.git.addAll() to stage changes first");
            return false;
        }
        
        // Check for conflicts
        if (status.data.conflicted && status.data.conflicted.length > 0) {
            console.error("❌ Cannot commit with unresolved conflicts:");
            status.data.conflicted.forEach(file => console.log(`  - ${file}`));
            return false;
        }
        
        // Validate commit message
        if (!message || message.trim().length === 0) {
            console.error("❌ Commit message cannot be empty");
            return false;
        }
        
        console.log(`📝 Committing ${status.data.staged.length} staged files...`);
        
        // Create commit
        const commitResult = await codebolt.git.commit(message);
        
        if (commitResult.success) {
            console.log("✅ Commit created successfully");
            console.log("Hash:", commitResult.hash);
            console.log("Files committed:", status.data.staged.length);
            return commitResult.hash;
        } else {
            console.error("❌ Failed to create commit:", commitResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in commit validation:", error);
        return false;
    }
}

// Example 5: Conventional commit messages
async function conventionalCommit(type, scope, description) {
    const commitTypes = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'];
    
    if (!commitTypes.includes(type)) {
        console.error(`❌ Invalid commit type. Use one of: ${commitTypes.join(', ')}`);
        return false;
    }
    
    // Build conventional commit message
    const message = scope ? `${type}(${scope}): ${description}` : `${type}: ${description}`;
    
    const commitResult = await codebolt.git.commit(message);
    
    if (commitResult.success) {
        console.log(`✅ Conventional commit created: ${message}`);
        console.log("Commit hash:", commitResult.hash);
        return commitResult.hash;
    } else {
        console.error("❌ Failed to create conventional commit:", commitResult.error);
        return false;
    }
}

// Usage examples:
// await conventionalCommit('feat', 'auth', 'add user authentication system');
// await conventionalCommit('fix', 'ui', 'resolve button alignment issue');
// await conventionalCommit('docs', null, 'update API documentation');

// Example 6: Batch commit workflow
async function batchCommitWorkflow() {
    const commits = [
        { files: ['README.md'], message: 'docs: add project README' },
        { files: ['src/index.js'], message: 'feat: add main application entry point' },
        { files: ['package.json'], message: 'chore: add project dependencies' }
    ];
    
    const commitHashes = [];
    
    for (const { files, message } of commits) {
        try {
            // Create files (example)
            for (const file of files) {
                await codebolt.fs.createFile(file, `// Content for ${file}`);
            }
            
            // Stage and commit
            await codebolt.git.addAll();
            const commitResult = await codebolt.git.commit(message);
            
            if (commitResult.success) {
                console.log(`✅ Committed: ${message}`);
                commitHashes.push(commitResult.hash);
            } else {
                console.error(`❌ Failed to commit: ${message}`, commitResult.error);
            }
        } catch (error) {
            console.error(`Error processing commit "${message}":`, error);
        }
    }
    
    console.log(`🎉 Created ${commitHashes.length} commits`);
    return commitHashes;
}

// Example 7: Error handling
try {
    const commitResult = await codebolt.git.commit('Fix critical bug in user authentication');
    
    if (commitResult.success) {
        console.log('✅ Commit created successfully');
        console.log('Commit hash:', commitResult.hash);
        console.log('Commit content:', commitResult.content);
    } else {
        console.error('❌ Failed to create commit:', commitResult.error);
        console.error('Message:', commitResult.message);
    }
} catch (error) {
    console.error('Error creating commit:', error);
}
```

### Common Use Cases

- **Feature Commits**: Save completed features with descriptive messages
- **Bug Fixes**: Commit fixes with clear descriptions of resolved issues
- **Documentation**: Commit documentation updates and improvements
- **Refactoring**: Save code improvements and restructuring
- **Initial Setup**: Create first commit when starting a new project
- **Milestone Commits**: Save significant progress points

### Notes

- The commit message should be clear and descriptive of the changes made.
- Only staged files (added with `codebolt.git.addAll()`) will be included in the commit.
- The commit creates a permanent record in the repository history.
- Use conventional commit format for better project organization (e.g., "feat:", "fix:", "docs:").
- The `hash` property in the response is the unique identifier for the commit.
- Commits cannot be created if there are unresolved merge conflicts.
- Empty commits (no staged changes) will typically fail.
- The commit operation is atomic - it either succeeds completely or fails.
- After committing, the staging area is cleared and ready for new changes.