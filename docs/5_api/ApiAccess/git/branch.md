---
name: branch
cbbaseinfo:
  description: Creates a new branch in the Git repository. Creates a new branch pointer at the current commit, allowing parallel development without affecting the main branch.
cbparameters:
  parameters:
    - name: branch
      typeName: string
      description: The name of the new branch to create (e.g., "feature-login", "bugfix-auth", "release-v1.0").
  returns:
    signatureTypeName: Promise<GitBranchResponse>
    description: A promise that resolves with a `GitBranchResponse` object containing the branch creation results.
data:
  name: branch
  category: git
  link: branch.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GitBranchResponse` object with the following properties:

- **`type`** (string): Always "gitBranchResponse".
- **`branch`** (string, optional): The name of the branch that was created.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic branch creation
const branchResult = await codebolt.git.branch('feature-user-auth');
console.log("Response type:", branchResult.type); // "gitBranchResponse"
console.log("Success:", branchResult.success); // true (if successful)
console.log("Branch created:", branchResult.branch); // "feature-user-auth"

// Example 2: Create and switch to new branch
async function createAndSwitchBranch(branchName) {
    try {
        // Create new branch
        const branchResult = await codebolt.git.branch(branchName);
        
        if (branchResult.success) {
            console.log(`✅ Branch created: ${branchResult.branch}`);
            
            // Switch to the new branch
            const checkoutResult = await codebolt.git.checkout(branchName);
            
            if (checkoutResult.success) {
                console.log(`✅ Switched to branch: ${checkoutResult.branch}`);
                return true;
            } else {
                console.error("❌ Failed to switch to new branch:", checkoutResult.error);
                return false;
            }
        } else {
            console.error("❌ Failed to create branch:", branchResult.error);
            return false;
        }
    } catch (error) {
        console.error("Error in create and switch workflow:", error);
        return false;
    }
}

// Example 3: Feature branch workflow
async function createFeatureBranch(featureName) {
    try {
        // Ensure we're on main/develop branch
        const status = await codebolt.git.status();
        const currentBranch = status.data?.current;
        
        if (currentBranch !== 'main' && currentBranch !== 'develop') {
            console.log(`⚠️  Currently on ${currentBranch}, switching to main first...`);
            const mainCheckout = await codebolt.git.checkout('main');
            if (!mainCheckout.success) {
                console.error("❌ Failed to switch to main branch");
                return false;
            }
        }
        
        // Pull latest changes
        const pullResult = await codebolt.git.pull();
        if (pullResult.success) {
            console.log("✅ Pulled latest changes from main");
        }
        
        // Create feature branch
        const featureBranchName = `feature/${featureName}`;
        const branchResult = await codebolt.git.branch(featureBranchName);
        
        if (branchResult.success) {
            console.log(`✅ Feature branch created: ${branchResult.branch}`);
            
            // Switch to feature branch
            const checkoutResult = await codebolt.git.checkout(featureBranchName);
            if (checkoutResult.success) {
                console.log(`🚀 Ready to work on feature: ${featureName}`);
                return featureBranchName;
            }
        } else {
            console.error("❌ Failed to create feature branch:", branchResult.error);
        }
        
        return false;
    } catch (error) {
        console.error("Error in feature branch workflow:", error);
        return false;
    }
}

// Example 4: Release branch creation
async function createReleaseBranch(version) {
    try {
        // Switch to develop branch
        const developCheckout = await codebolt.git.checkout('develop');
        if (!developCheckout.success) {
            console.error("❌ Failed to switch to develop branch");
            return false;
        }
        
        // Pull latest changes
        const pullResult = await codebolt.git.pull();
        if (pullResult.success) {
            console.log("✅ Pulled latest changes from develop");
        }
        
        // Create release branch
        const releaseBranchName = `release/${version}`;
        const branchResult = await codebolt.git.branch(releaseBranchName);
        
        if (branchResult.success) {
            console.log(`✅ Release branch created: ${branchResult.branch}`);
            
            // Switch to release branch
            const checkoutResult = await codebolt.git.checkout(releaseBranchName);
            if (checkoutResult.success) {
                console.log(`🎯 Ready for release ${version} preparation`);
                return releaseBranchName;
            }
        } else {
            console.error("❌ Failed to create release branch:", branchResult.error);
        }
        
        return false;
    } catch (error) {
        console.error("Error in release branch workflow:", error);
        return false;
    }
}

// Example 5: Hotfix branch creation
async function createHotfixBranch(issueDescription) {
    try {
        // Switch to main/master branch
        const mainCheckout = await codebolt.git.checkout('main');
        if (!mainCheckout.success) {
            console.error("❌ Failed to switch to main branch");
            return false;
        }
        
        // Pull latest changes
        const pullResult = await codebolt.git.pull();
        if (pullResult.success) {
            console.log("✅ Pulled latest changes from main");
        }
        
        // Create hotfix branch
        const hotfixBranchName = `hotfix/${issueDescription.replace(/\s+/g, '-').toLowerCase()}`;
        const branchResult = await codebolt.git.branch(hotfixBranchName);
        
        if (branchResult.success) {
            console.log(`✅ Hotfix branch created: ${branchResult.branch}`);
            
            // Switch to hotfix branch
            const checkoutResult = await codebolt.git.checkout(hotfixBranchName);
            if (checkoutResult.success) {
                console.log(`🔥 Ready to fix: ${issueDescription}`);
                return hotfixBranchName;
            }
        } else {
            console.error("❌ Failed to create hotfix branch:", branchResult.error);
        }
        
        return false;
    } catch (error) {
        console.error("Error in hotfix branch workflow:", error);
        return false;
    }
}

// Example 6: Branch creation with validation
async function createBranchWithValidation(branchName) {
    try {
        // Validate branch name
        const validBranchName = /^[a-zA-Z0-9/_-]+$/.test(branchName);
        if (!validBranchName) {
            console.error("❌ Invalid branch name. Use only letters, numbers, hyphens, underscores, and forward slashes");
            return false;
        }
        
        // Check if branch already exists
        const status = await codebolt.git.status();
        if (!status.success) {
            console.error("❌ Unable to get repository status");
            return false;
        }
        
        // Check for uncommitted changes
        const hasUncommitted = status.data?.modified.length > 0 || 
                              status.data?.not_added.length > 0 || 
                              status.data?.staged.length > 0;
        
        if (hasUncommitted) {
            console.log("⚠️  Warning: You have uncommitted changes");
            console.log("💡 Consider committing changes before creating a new branch");
        }
        
        // Create branch
        const branchResult = await codebolt.git.branch(branchName);
        
        if (branchResult.success) {
            console.log(`✅ Branch created successfully: ${branchResult.branch}`);
            console.log(`💡 Use 'codebolt.git.checkout("${branchName}")' to switch to it`);
            return true;
        } else {
            if (branchResult.error?.includes('already exists')) {
                console.error(`❌ Branch '${branchName}' already exists`);
            } else {
                console.error("❌ Failed to create branch:", branchResult.error);
            }
            return false;
        }
    } catch (error) {
        console.error("Error in branch validation:", error);
        return false;
    }
}

// Example 7: Multiple branch creation
async function createMultipleBranches(branchNames) {
    const results = [];
    
    for (const branchName of branchNames) {
        try {
            const branchResult = await codebolt.git.branch(branchName);
            
            if (branchResult.success) {
                console.log(`✅ Created: ${branchName}`);
                results.push({ branch: branchName, success: true });
            } else {
                console.error(`❌ Failed to create ${branchName}:`, branchResult.error);
                results.push({ branch: branchName, success: false, error: branchResult.error });
            }
        } catch (error) {
            console.error(`Error creating ${branchName}:`, error);
            results.push({ branch: branchName, success: false, error: error.message });
        }
    }
    
    const successful = results.filter(r => r.success).length;
    console.log(`🎯 Created ${successful}/${branchNames.length} branches successfully`);
    
    return results;
}

// Usage: await createMultipleBranches(['feature/auth', 'feature/ui', 'bugfix/validation']);

// Example 8: Error handling
try {
    const branchResult = await codebolt.git.branch('new-feature');
    
    if (branchResult.success) {
        console.log('✅ Branch created successfully');
        console.log('Branch name:', branchResult.branch);
    } else {
        console.error('❌ Branch creation failed:', branchResult.error);
        console.error('Message:', branchResult.message);
    }
} catch (error) {
    console.error('Error creating branch:', error);
}

### Common Use Cases

- **Feature Development**: Create isolated branches for new features
- **Bug Fixes**: Create branches to fix specific issues without affecting main code
- **Release Preparation**: Create release branches for version preparation
- **Hotfix Development**: Create urgent fix branches from production code
- **Experimentation**: Create branches for testing new ideas or approaches
- **Parallel Development**: Allow multiple developers to work simultaneously

### Notes

- The new branch is created at the current commit (HEAD) position.
- Branch creation doesn't automatically switch to the new branch - use `checkout` to switch.
- Branch names should follow naming conventions (e.g., feature/, bugfix/, hotfix/).
- Avoid spaces and special characters in branch names for compatibility.
- The operation only creates the branch locally - push to share with remote repository.
- Creating a branch is a lightweight operation that doesn't copy files.
- Use descriptive names that clearly indicate the branch purpose.
- The branch inherits the complete history of the current branch.
