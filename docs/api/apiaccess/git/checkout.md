---
name: checkout
cbbaseinfo:
  description: Checks out a branch or commit in the Git repository. Switches the working directory to the specified branch or commit, updating all files to match that state.
cbparameters:
  parameters:
    - name: branch
      typeName: string
      description: The name of the branch or commit hash to check out (e.g., "main", "feature-branch", "develop", "abc123def").
    - name: path
      typeName: string
      description: 'Optional. The file system path of the local Git repository. If not provided, uses the current directory.'
      optional: true
  returns:
    signatureTypeName: Promise<GitCheckoutResponse>
    description: A promise that resolves with a `GitCheckoutResponse` object containing the checkout operation results.
data:
  name: checkout
  category: git
  link: checkout.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitCheckoutResponse` object with the following properties:

- **`type`** (string): Always "gitCheckoutResponse".
- **`branch`** (string, optional): The name of the branch that was checked out.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic branch checkout
const checkoutResult = await codebolt.git.checkout('main');
console.log("Response type:", checkoutResult.type); // "gitCheckoutResponse"
console.log("Success:", checkoutResult.success); // true (if successful)
console.log("Branch:", checkoutResult.branch); // "main"

// Example 2: Switch to feature branch
const featureBranch = await codebolt.git.checkout('feature-authentication');
if (featureBranch.success) {
    console.log(`✅ Switched to branch: ${featureBranch.branch}`);
} else {
    console.error("❌ Failed to checkout branch:", featureBranch.error);
}

// Example 3: Safe checkout with validation
async function safeCheckout(branchName) {
    try {
        // Check current status
        const status = await codebolt.git.status();
        
        if (!status.success) {
            console.error("❌ Unable to get repository status");
            return false;
        }
        
        // Warn about uncommitted changes
        const hasUncommitted = status.data?.modified.length > 0 || 
                              status.data?.not_added.length > 0 || 
                              status.data?.staged.length > 0;
        
        if (hasUncommitted) {
            console.log("⚠️  Warning: You have uncommitted changes");
            console.log("Modified files:", status.data.modified.length);
            console.log("Untracked files:", status.data.not_added.length);
            console.log("Staged files:", status.data.staged.length);
            console.log("💡 Consider committing or stashing changes first");
        }
        
        // Check for conflicts
        if (status.data?.conflicted && status.data.conflicted.length > 0) {
            console.error("❌ Cannot checkout with unresolved conflicts:");
            status.data.conflicted.forEach(file => console.log(`  - ${file}`));
            return false;
        }
        
        console.log(`🔄 Switching from ${status.data?.current} to ${branchName}...`);
        
        // Perform checkout
        const checkoutResult = await codebolt.git.checkout(branchName);
        
        if (checkoutResult.success) {
            console.log(`✅ Successfully checked out: ${checkoutResult.branch}`);
            return true;
        } else {
            console.error("❌ Checkout failed:", checkoutResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error during checkout:", error);
        return false;
    }
}

// Example 4: Checkout with branch creation workflow
async function checkoutOrCreateBranch(branchName) {
    try {
        // Try to checkout existing branch
        const checkoutResult = await codebolt.git.checkout(branchName);
        
        if (checkoutResult.success) {
            console.log(`✅ Checked out existing branch: ${branchName}`);
            return true;
        } else {
            // If branch doesn't exist, create it
            if (checkoutResult.error?.includes('not found') || checkoutResult.error?.includes('does not exist')) {
                console.log(`🔧 Branch ${branchName} doesn't exist, creating it...`);
                
                const createResult = await codebolt.git.branch(branchName);
                if (createResult.success) {
                    const newCheckout = await codebolt.git.checkout(branchName);
                    if (newCheckout.success) {
                        console.log(`✅ Created and checked out new branch: ${branchName}`);
                        return true;
                    }
                }
            }
            
            console.error("❌ Failed to checkout or create branch:", checkoutResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in checkout/create workflow:", error);
        return false;
    }
}

// Example 5: Checkout specific commit
async function checkoutCommit(commitHash) {
    try {
        const checkoutResult = await codebolt.git.checkout(commitHash);
        
        if (checkoutResult.success) {
            console.log(`✅ Checked out commit: ${commitHash}`);
            console.log("⚠️  You are now in 'detached HEAD' state");
            console.log("💡 Create a new branch if you want to make changes");
            return true;
        } else {
            console.error("❌ Failed to checkout commit:", checkoutResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error checking out commit:", error);
        return false;
    }
}

// Example 6: Branch switching workflow
async function branchSwitchingWorkflow() {
    try {
        // Get current status
        const initialStatus = await codebolt.git.status();
        console.log(`📍 Currently on branch: ${initialStatus.data?.current}`);
        
        // Switch to development branch
        const devCheckout = await codebolt.git.checkout('develop');
        if (devCheckout.success) {
            console.log("✅ Switched to develop branch");
            
            // Pull latest changes
            const pullResult = await codebolt.git.pull();
            if (pullResult.success) {
                console.log("✅ Pulled latest changes");
                console.log(`📊 Changes: ${pullResult.changes || 0}`);
            }
            
            // Switch to feature branch
            const featureCheckout = await codebolt.git.checkout('feature-new-ui');
            if (featureCheckout.success) {
                console.log("✅ Switched to feature branch");
                
                // Verify final state
                const finalStatus = await codebolt.git.status();
                console.log(`🎯 Final branch: ${finalStatus.data?.current}`);
                
                return true;
            }
        }
        
        return false;
    } catch (error) {
        console.error("Error in branch switching workflow:", error);
        return false;
    }
}

// Example 7: Checkout with file restoration
async function checkoutWithRestore(branchName) {
    try {
        // Check current branch
        const status = await codebolt.git.status();
        const currentBranch = status.data?.current;
        
        // Checkout target branch
        const checkoutResult = await codebolt.git.checkout(branchName);
        
        if (checkoutResult.success) {
            console.log(`✅ Checked out ${branchName} from ${currentBranch}`);
            
            // Verify working directory is clean
            const newStatus = await codebolt.git.status();
            const isClean = newStatus.data?.modified.length === 0 && 
                           newStatus.data?.not_added.length === 0 && 
                           newStatus.data?.staged.length === 0;
            
            if (isClean) {
                console.log("✨ Working directory is clean");
            } else {
                console.log("📝 Working directory has changes");
            }
            
            return true;
        } else {
            console.error("❌ Checkout failed:", checkoutResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in checkout with restore:", error);
        return false;
    }
}

// Example 8: Error handling
try {
    const checkoutResult = await codebolt.git.checkout('feature-branch');
    
    if (checkoutResult.success) {
        console.log('✅ Checkout successful');
        console.log('Current branch:', checkoutResult.branch);
    } else {
        console.error('❌ Checkout failed:', checkoutResult.error);
        console.error('Message:', checkoutResult.message);
    }
} catch (error) {
    console.error('Error during checkout operation:', error);
}

### Common Use Cases

- **Branch Switching**: Switch between different branches for feature development
- **Release Management**: Checkout specific branches for releases or hotfixes
- **Code Review**: Switch to branches for reviewing pull requests
- **Commit Inspection**: Checkout specific commits to examine historical states
- **Rollback**: Switch to previous stable versions when issues occur
- **Parallel Development**: Work on multiple features by switching branches

### Notes

- The checkout operation switches the working directory to match the specified branch or commit.
- Uncommitted changes may be lost during checkout - commit or stash them first.
- Checking out a commit puts you in "detached HEAD" state - create a branch if making changes.
- The operation will fail if there are uncommitted changes that would be overwritten.
- Use `codebolt.git.status()` to check your current branch before switching.
- The `branch` parameter can be a branch name or commit hash.
- Files in your working directory will be updated to match the checked-out branch/commit.
- If the branch doesn't exist locally, the operation will fail.
- Network access may be required if checking out remote branches.
