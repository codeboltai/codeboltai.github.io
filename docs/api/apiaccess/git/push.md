---
name: push
cbbaseinfo:
  description: Pushes local repository changes to the remote repository. Uploads committed changes from the local branch to the corresponding remote branch.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<GitPushResponse>
    description: A promise that resolves with a `GitPushResponse` object containing the push operation results.
data:
  name: push
  category: git
  link: push.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitPushResponse` object with the following properties:

- **`type`** (string): Always "gitPushResponse".
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic push operation
const pushResult = await codebolt.git.push();
console.log("Response type:", pushResult.type); // "gitPushResponse"
console.log("Success:", pushResult.success); // true (if successful)
console.log("Message:", pushResult.message); // Push details

// Example 2: Push with pre-push validation
async function pushWithValidation() {
    try {
        // Check repository status before push
        const status = await codebolt.git.status();
        
        if (!status.success) {
            console.error("❌ Unable to get repository status");
            return false;
        }
        
        // Check if there are commits to push
        if (status.data?.ahead === 0) {
            console.log("✅ Repository is up to date with remote");
            return true;
        }
        
        console.log(`⬆️  ${status.data?.ahead} commits ahead of remote`);
        
        // Check for uncommitted changes
        const hasUncommitted = status.data?.modified.length > 0 || 
                              status.data?.not_added.length > 0 || 
                              status.data?.staged.length > 0;
        
        if (hasUncommitted) {
            console.log("⚠️  Warning: You have uncommitted changes");
            console.log("💡 Consider committing changes before pushing");
        }
        
        // Perform push
        const pushResult = await codebolt.git.push();
        
        if (pushResult.success) {
            console.log("✅ Push successful");
            console.log("Push details:", pushResult.message);
            return true;
        } else {
            console.error("❌ Push failed:", pushResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error during push validation:", error);
        return false;
    }
}

// Example 3: Safe push with conflict detection
async function safePush() {
    try {
        // Check if we're behind remote (need to pull first)
        const status = await codebolt.git.status();
        
        if (status.data?.behind > 0) {
            console.log(`⬇️  ${status.data.behind} commits behind remote`);
            console.log("💡 Pull remote changes before pushing");
            
            // Attempt to pull first
            const pullResult = await codebolt.git.pull();
            if (!pullResult.success) {
                console.error("❌ Failed to pull before push:", pullResult.error);
                return false;
            }
            
            console.log("✅ Pulled remote changes successfully");
        }
        
        // Now attempt push
        const pushResult = await codebolt.git.push();
        
        if (pushResult.success) {
            console.log("✅ Push completed successfully");
            console.log("Details:", pushResult.message);
            return true;
        } else {
            console.error("❌ Push failed:", pushResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in safe push:", error);
        return false;
    }
}

// Example 4: Complete commit and push workflow
async function commitAndPush(commitMessage) {
    try {
        // Stage all changes
        const addResult = await codebolt.git.addAll();
        if (!addResult.success) {
            console.error("❌ Failed to stage changes:", addResult.error);
            return false;
        }
        
        console.log("✅ Changes staged");
        
        // Commit changes
        const commitResult = await codebolt.git.commit(commitMessage);
        if (!commitResult.success) {
            console.error("❌ Failed to commit:", commitResult.error);
            return false;
        }
        
        console.log("✅ Changes committed");
        console.log("Commit hash:", commitResult.hash);
        
        // Push to remote
        const pushResult = await codebolt.git.push();
        if (pushResult.success) {
            console.log("✅ Changes pushed to remote");
            console.log("Push details:", pushResult.message);
            return true;
        } else {
            console.error("❌ Failed to push:", pushResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in commit and push workflow:", error);
        return false;
    }
}

// Example 5: Push with retry logic
async function pushWithRetry(maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`🔄 Push attempt ${attempt}/${maxRetries}`);
            
            const pushResult = await codebolt.git.push();
            
            if (pushResult.success) {
                console.log("✅ Push successful");
                return true;
            } else {
                console.log(`❌ Push attempt ${attempt} failed:`, pushResult.error);
                
                // If we're behind remote, try to pull and retry
                if (pushResult.error?.includes('rejected') || pushResult.error?.includes('non-fast-forward')) {
                    console.log("🔄 Attempting to pull remote changes...");
                    
                    const pullResult = await codebolt.git.pull();
                    if (pullResult.success) {
                        console.log("✅ Pulled remote changes");
                        // Continue to next retry attempt
                    } else {
                        console.error("❌ Failed to pull:", pullResult.error);
                        break;
                    }
                } else {
                    // For other errors, don't retry
                    break;
                }
            }
        } catch (error) {
            console.error(`Error in push attempt ${attempt}:`, error);
        }
        
        // Wait before retry (except on last attempt)
        if (attempt < maxRetries) {
            console.log("⏳ Waiting before retry...");
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    
    console.error("❌ All push attempts failed");
    return false;
}

// Example 6: Push with branch tracking setup
async function pushWithTracking() {
    try {
        // Check current branch
        const status = await codebolt.git.status();
        const currentBranch = status.data?.current;
        
        if (!currentBranch) {
            console.error("❌ Unable to determine current branch");
            return false;
        }
        
        console.log(`📍 Current branch: ${currentBranch}`);
        
        // Check if branch is tracking a remote
        if (!status.data?.tracking) {
            console.log("🔗 Branch is not tracking a remote");
            console.log("💡 First push will set up tracking");
        }
        
        // Perform push
        const pushResult = await codebolt.git.push();
        
        if (pushResult.success) {
            console.log("✅ Push successful");
            
            // Verify tracking is set up
            const newStatus = await codebolt.git.status();
            if (newStatus.data?.tracking) {
                console.log(`🔗 Branch now tracking: ${newStatus.data.tracking}`);
            }
            
            return true;
        } else {
            console.error("❌ Push failed:", pushResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in push with tracking:", error);
        return false;
    }
}

// Example 7: Automated deployment push
async function deploymentPush(version) {
    try {
        console.log(`🚀 Starting deployment push for version ${version}`);
        
        // Create deployment commit
        const commitResult = await codebolt.git.commit(`Deploy version ${version}`);
        if (!commitResult.success) {
            console.error("❌ Failed to create deployment commit:", commitResult.error);
            return false;
        }
        
        // Push to remote
        const pushResult = await codebolt.git.push();
        if (pushResult.success) {
            console.log("✅ Deployment pushed successfully");
            console.log("🎉 Version", version, "deployed");
            return true;
        } else {
            console.error("❌ Deployment push failed:", pushResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in deployment push:", error);
        return false;
    }
}

// Example 8: Error handling
try {
    const pushResult = await codebolt.git.push();
    
    if (pushResult.success) {
        console.log('✅ Push completed successfully');
        console.log('Push details:', pushResult.message);
    } else {
        console.error('❌ Push failed:', pushResult.error);
        console.error('Message:', pushResult.message);
    }
} catch (error) {
    console.error('Error during push operation:', error);
}

### Common Use Cases

- **Sharing Changes**: Upload local commits to remote repository for team collaboration
- **Deployment**: Push changes to production or staging environments
- **Backup**: Ensure local changes are backed up to remote repository
- **Continuous Integration**: Trigger CI/CD pipelines with pushed changes
- **Release Management**: Push tagged releases to remote repository
- **Feature Sharing**: Share feature branches with team members

### Notes

- The push operation uploads committed changes from local branch to remote repository.
- Only committed changes are pushed - staged or modified files are not included.
- The operation requires network connectivity to the remote repository.
- If the remote branch has newer commits, the push will be rejected (use pull first).
- The first push of a new branch may set up tracking with the remote.
- Push operations are atomic - they either succeed completely or fail.
- Use `codebolt.git.status()` to check if you have commits to push (ahead count).
- Authentication may be required depending on the remote repository configuration.
- The operation will fail if there are no commits to push and the branch is up to date.