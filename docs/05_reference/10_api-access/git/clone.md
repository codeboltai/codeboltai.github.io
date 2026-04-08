---
name: clone
cbbaseinfo:
  description: Clones a Git repository from a given URL to a specified local directory. Downloads the complete repository history including all files, branches, and commit history to the specified path.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: "The URL of the Git repository to clone (e.g., 'https://github.com/user/repo.git', 'git@github.com:user/repo.git')."
    - name: path
      typeName: string
      description: "The file system path where the repository should be cloned to (e.g., './my-project', '/home/user/projects/repo', '.')."
  returns:
    signatureTypeName: "Promise<GitCloneResponse>"
    description: A promise that resolves with information about the cloned repository including success status and details.
data:
  name: clone
  category: git
  link: clone.md
---
# clone

```typescript
codebolt.git.clone(url: string, path: string): Promise<GitCloneResponse>
```

Clones a Git repository from a given URL to a specified local directory. Downloads the complete repository history including all files, branches, and commit history to the specified path.
### Parameters

- **`url`** (string): The URL of the Git repository to clone (e.g., 'https://github.com/user/repo.git', 'git@github.com:user/repo.git').
- **`path`** (string): The file system path where the repository should be cloned to (e.g., './my-project', '/home/user/projects/repo', '.').

### Returns

- **`Promise<GitCloneResponse>`**: A promise that resolves with information about the cloned repository including success status and details.

### Response Structure

The method returns a Promise that resolves to a [`GitCloneResponse`](/docs/api/11_doc-type-ref/types/interfaces/GitCloneResponse) object with the following properties:

- **`type`** (string): Always "gitCloneResponse" or similar response type identifier.
- **`success`** (boolean, optional): Indicates if the clone operation was successful.
- **`path`** (string, optional): The local path where the repository was cloned.
- **`url`** (string, optional): The URL of the cloned repository.
- **`message`** (string, optional): Additional information about the clone operation.
- **`error`** (string, optional): Error details if the clone operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic repository cloning
const result = await codebolt.git.clone('https://github.com/user/repo.git', './my-project');
console.log('✅ Repository cloned successfully');
console.log('Clone path:', result.path);
console.log('Repository URL:', result.url);

// Example 2: Clone to current directory
const cloneResult = await codebolt.git.clone('https://github.com/user/repo.git', '.');
if (cloneResult.success) {
    console.log('✅ Repository cloned to current directory');
    console.log('Files:', cloneResult.message);
} else {
    console.error('❌ Clone failed:', cloneResult.error);
}

// Example 3: Clone with error handling
async function safeClone(url, path) {
    try {
        const result = await codebolt.git.clone(url, path);

        if (result.success) {
            console.log(`✅ Successfully cloned repository to ${path}`);
            return result;
        } else {
            console.error('❌ Clone operation failed:', result.error);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('❌ Clone error:', error.message);

        // Handle specific errors
        if (error.message.includes('Repository not found')) {
            console.error('💡 Check if the repository URL is correct');
        } else if (error.message.includes('Permission denied')) {
            console.error('💡 Check if you have access to the repository');
        } else if (error.message.includes('already exists')) {
            console.error('💡 Directory already exists - choose a different path');
        }

        throw error;
    }
}

// Usage
await safeClone('https://github.com/user/repo.git', './project');

// Example 4: Clone and verify
async function cloneAndVerify(url, path) {
    console.log(`🔄 Cloning repository from ${url}...`);

    const cloneResult = await codebolt.git.clone(url, path);

    if (!cloneResult.success) {
        throw new Error(cloneResult.error);
    }

    console.log('✅ Clone successful');

    // Navigate to cloned directory
    process.chdir(path);

    // Verify it's a git repository
    const status = await codebolt.git.status();
    console.log('✅ Repository verified:', status.data?.head);

    // Get repository info
    const logs = await codebolt.git.logs();
    console.log(`📊 Total commits: ${logs.logs?.length || 0}`);

    if (logs.logs && logs.logs.length > 0) {
        console.log(`📝 Latest commit: ${logs.logs[0].message}`);
        console.log(`👤 Author: ${logs.logs[0].author}`);
        console.log(`📅 Date: ${logs.logs[0].date}`);
    }

    return cloneResult;
}

// Usage
await cloneAndVerify('https://github.com/user/repo.git', './my-project');

// Example 5: Clone multiple repositories
async function cloneMultipleRepositories(repos) {
    const results = [];
    let successCount = 0;
    let failureCount = 0;

    for (const repo of repos) {
        console.log(`🔄 Cloning ${repo.name}...`);

        try {
            const result = await codebolt.git.clone(repo.url, repo.path);

            if (result.success) {
                successCount++;
                console.log(`✅ ${repo.name} cloned successfully`);
                results.push({ name: repo.name, success: true, path: repo.path });
            } else {
                failureCount++;
                console.error(`❌ ${repo.name} clone failed:`, result.error);
                results.push({ name: repo.name, success: false, error: result.error });
            }
        } catch (error) {
            failureCount++;
            console.error(`❌ ${repo.name} clone error:`, error.message);
            results.push({ name: repo.name, success: false, error: error.message });
        }
    }

    console.log(`\n📊 Clone Summary:`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failureCount}`);
    console.log(`   📈 Success Rate: ${Math.round(successCount / repos.length * 100)}%`);

    return results;
}

// Usage
const repositories = [
    { name: 'React App', url: 'https://github.com/user/react-app.git', path: './projects/react-app' },
    { name: 'API Server', url: 'https://github.com/user/api-server.git', path: './projects/api-server' },
    { name: 'UI Library', url: 'https://github.com/user/ui-library.git', path: './projects/ui-library' }
];

await cloneMultipleRepositories(repositories);

// Example 6: Clone with post-clone setup
async function cloneAndSetup(url, path, setupFunction) {
    console.log(`🔄 Cloning repository to ${path}...`);

    // Clone the repository
    const cloneResult = await codebolt.git.clone(url, path);

    if (!cloneResult.success) {
        throw new Error(cloneResult.error);
    }

    console.log('✅ Repository cloned');

    // Navigate to cloned directory
    // (Note: In actual implementation, you'd handle path navigation appropriately)

    // Run setup function
    if (setupFunction) {
        console.log('🔧 Running post-clone setup...');
        await setupFunction(path);
    }

    return cloneResult;
}

// Usage with setup function
async function setupNodeProject(path) {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    const installResult = await codebolt.terminal.executeCommand('npm install');

    if (installResult.exitCode === 0) {
        console.log('✅ Dependencies installed');
    } else {
        console.error('❌ Failed to install dependencies');
    }

    // Create .env file
    await codebolt.fs.createFile('.env', 'NODE_ENV=development\nPORT=3000', path);
    console.log('✅ Environment file created');
}

await cloneAndSetup(
    'https://github.com/user/node-project.git',
    './my-project',
    setupNodeProject
);

// Example 7: Clone specific branch (if supported)
async function cloneBranch(url, path, branch) {
    console.log(`🔄 Cloning ${branch} branch from ${url}...`);

    // Note: This might require using terminal for specific branch cloning
    const cloneResult = await codebolt.git.clone(url, path);

    if (!cloneResult.success) {
        throw new Error(cloneResult.error);
    }

    // Checkout specific branch after cloning
    await codebolt.git.checkout(branch);
    console.log(`✅ Checked out ${branch} branch`);

    return cloneResult;
}

// Usage
await cloneBranch('https://github.com/user/repo.git', './my-project', 'develop');

// Example 8: Clone and analyze repository
async function cloneAndAnalyze(url, path) {
    console.log(`🔄 Cloning and analyzing repository...`);

    // Clone repository
    const cloneResult = await codebolt.git.clone(url, path);

    if (!cloneResult.success) {
        throw new Error(cloneResult.error);
    }

    console.log('✅ Repository cloned');

    // Analyze repository structure
    const files = await codebolt.fs.listFile(path, true);
    console.log(`📁 Total files: ${files.files?.length || 0}`);

    // Count file types
    const fileTypes = {};
    files.files?.forEach(file => {
        const ext = file.name.split('.').pop() || 'no-extension';
        fileTypes[ext] = (fileTypes[ext] || 0) + 1;
    });

    console.log('📊 File type distribution:');
    Object.entries(fileTypes).forEach(([ext, count]) => {
        console.log(`   .${ext}: ${count}`);
    });

    // Get commit history
    const logs = await codebolt.git.logs();
    console.log(`📝 Total commits: ${logs.logs?.length || 0}`);

    // Get recent activity
    if (logs.logs && logs.logs.length > 0) {
        const recentCommits = logs.logs.slice(0, 5);
        console.log('📅 Recent commits:');
        recentCommits.forEach((commit, index) => {
            console.log(`   ${index + 1}. ${commit.message} (${commit.date})`);
        });
    }

    return {
        cloneResult,
        fileCount: files.files?.length || 0,
        fileTypes,
        commitCount: logs.logs?.length || 0
    };
}

// Usage
const analysis = await cloneAndAnalyze('https://github.com/user/repo.git', './my-project');

// Example 9: Clone with progress monitoring (via terminal)
async function cloneWithProgress(url, path) {
    console.log(`🔄 Starting clone operation...`);

    // Use terminal for clone to capture progress
    const streamEmitter = codebolt.terminal.executeCommandWithStream(`git clone ${url} ${path}`);

    return new Promise((resolve, reject) => {
        streamEmitter.on('commandOutput', (data) => {
            console.log(`📡 ${data.output}`);

            // Parse progress
            if (data.output.includes('Receiving objects')) {
                const progressMatch = data.output.match(/(\d+)%/);
                if (progressMatch) {
                    console.log(`📊 Clone progress: ${progressMatch[1]}%`);
                }
            }
        });

        streamEmitter.on('commandError', (error) => {
            console.error('❌ Clone error:', error.error);
            reject(new Error(error.error));
        });

        streamEmitter.on('commandFinish', (finish) => {
            if (finish.exitCode === 0) {
                console.log('✅ Repository cloned successfully');
                resolve({ success: true, path });
            } else {
                console.error('❌ Clone failed with exit code:', finish.exitCode);
                reject(new Error('Clone operation failed'));
            }

            if (streamEmitter.cleanup) {
                streamEmitter.cleanup();
            }
        });
    });
}

// Usage
await cloneWithProgress('https://github.com/user/repo.git', './my-project');

// Example 10: Clone with backup strategy
async function cloneWithBackup(url, primaryPath, backupPath) {
    let cloneResult;

    // Try primary path first
    try {
        console.log(`🔄 Attempting to clone to ${primaryPath}...`);
        cloneResult = await codebolt.git.clone(url, primaryPath);

        if (cloneResult.success) {
            console.log(`✅ Successfully cloned to ${primaryPath}`);
            return cloneResult;
        }
    } catch (error) {
        console.warn(`⚠️ Primary path failed: ${error.message}`);
    }

    // Try backup path
    try {
        console.log(`🔄 Trying backup path ${backupPath}...`);
        cloneResult = await codebolt.git.clone(url, backupPath);

        if (cloneResult.success) {
            console.log(`✅ Successfully cloned to ${backupPath}`);
            return cloneResult;
        }
    } catch (error) {
        console.error(`❌ Backup path also failed: ${error.message}`);
    }

    throw new Error('Failed to clone repository to both paths');
}

// Usage
await cloneWithBackup(
    'https://github.com/user/repo.git',
    './primary-project',
    './backup-project'
);

// Example 11: Clone shallow clone (latest commit only)
async function shallowClone(url, path) {
    console.log(`🔄 Creating shallow clone...`);

    // Use terminal for shallow clone
    const result = await codebolt.terminal.executeCommand(`git clone --depth 1 ${url} ${path}`);

    if (result.exitCode === 0) {
        console.log('✅ Shallow clone created (latest commit only)');
        return { success: true, path };
    } else {
        throw new Error('Shallow clone failed');
    }
}

// Usage
await shallowClone('https://github.com/user/large-repo.git', './large-repo');

// Example 12: Clone and initialize submodules
async function cloneWithSubmodules(url, path) {
    console.log(`🔄 Cloning repository with submodules...`);

    // Clone main repository
    const cloneResult = await codebolt.git.clone(url, path);

    if (!cloneResult.success) {
        throw new Error(cloneResult.error);
    }

    console.log('✅ Main repository cloned');

    // Initialize submodules
    console.log('🔄 Initializing submodules...');
    const submoduleResult = await codebolt.terminal.executeCommand(`cd ${path} && git submodule update --init --recursive`);

    if (submoduleResult.exitCode === 0) {
        console.log('✅ Submodules initialized');
    } else {
        console.warn('⚠️ Failed to initialize submodules');
    }

    return cloneResult;
}

// Usage
await cloneWithSubmodules('https://github.com/user/repo-with-submodules.git', './my-project');
```

### Common Use Cases

- **Project Setup**: Clone new projects to start development
- **Template Repositories**: Clone project templates and scaffolding
- **Library Integration**: Clone third-party libraries for customization
- **Code Review**: Clone repositories for review and analysis
- **Backup**: Clone repositories for local backup
- **CI/CD**: Clone repositories in automated pipelines
- **Multi-Repo Management**: Clone multiple related repositories
- **Testing**: Clone repositories for testing and experimentation

### Advanced Usage Patterns

### Clone Repository Authentication
```javascript
// Clone with SSH key (if configured)
await codebolt.git.clone('git@github.com:user/repo.git', './project');

// Clone with HTTPS (may require credentials)
await codebolt.git.clone('https://github.com/user/repo.git', './project');
```

### Repository Verification After Clone
```javascript
async function verifyClonedRepository(path) {
    // Check if .git directory exists
    const gitDir = await codebolt.fs.listFile(`${path}/.git`);

    if (!gitDir.success) {
        throw new Error('Not a valid git repository');
    }

    // Verify remote origin
    const remoteResult = await codebolt.terminal.executeCommand(`cd ${path} && git remote -v`);

    if (remoteResult.exitCode === 0) {
        console.log('✅ Remote origin configured');
        console.log(remoteResult.stdout);
    }

    return true;
}
```

### Performance Considerations

- **Repository Size**: Large repositories take longer to clone and use more disk space
- **Network Speed**: Clone speed depends on network connection and repository size
- **Shallow Clones**: Use shallow clones (`--depth 1`) for faster cloning when full history isn't needed
- **Disk Space**: Ensure sufficient disk space before cloning large repositories

```javascript
// ❌ Slow: Clone entire history
await codebolt.git.clone('https://github.com/user/large-repo.git', './project');

// ✅ Fast: Shallow clone for latest code only
await codebolt.terminal.executeCommand('git clone --depth 1 https://github.com/user/large-repo.git ./project');
```

### Error Handling

Always implement proper error handling for clone operations:

```javascript
async function robustClone(url, path, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await codebolt.git.clone(url, path);

            if (result.success) {
                console.log(`✅ Repository cloned successfully`);
                return result;
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error(`❌ Clone attempt ${i + 1} failed:`, error.message);

            if (i === retries - 1) {
                throw new Error(`Failed to clone after ${retries} attempts`);
            }

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
}
```

### Common Pitfalls and Solutions

**Pitfall 1**: Cloning to existing directory
```javascript
// ❌ Bad: Directory already exists
await codebolt.git.clone(url, './existing-dir');

// ✅ Good: Check directory exists first
const dirExists = await codebolt.fs.listFile('./existing-dir');
if (!dirExists.success) {
    await codebolt.git.clone(url, './new-dir');
} else {
    console.log('Directory already exists');
}
```

**Pitfall 2**: Not handling authentication
```javascript
// ❌ Bad: Fails on private repos
await codebolt.git.clone('https://github.com/user/private-repo.git', './project');

// ✅ Good: Use SSH or handle authentication
await codebolt.git.clone('git@github.com:user/private-repo.git', './project');
```

**Pitfall 3**: Cloning without verification
```javascript
// ❌ Bad: Assume clone succeeded
await codebolt.git.clone(url, path);

// ✅ Good: Verify clone success
const result = await codebolt.git.clone(url, path);
if (result.success) {
    console.log('Clone successful');
} else {
    console.error('Clone failed:', result.error);
}
```

### Integration Examples

**With File System Module**
```javascript
// Clone and analyze structure
await codebolt.git.clone('https://github.com/user/repo.git', './project');
const files = await codebolt.fs.listFile('./project', true);
console.log('Repository structure:', files);
```

**With Terminal Module**
```javascript
// Clone and run setup script
await codebolt.git.clone('https://github.com/user/repo.git', './project');
await codebolt.terminal.executeCommand('cd ./project && npm run setup');
```

### Best Practices

1. **Always Verify Clone Success**: Check the success flag before proceeding
2. **Handle Authentication**: Use appropriate authentication method for private repos
3. **Check Disk Space**: Ensure sufficient space before cloning large repositories
4. **Use Meaningful Paths**: Organize cloned repositories in a logical directory structure
5. **Implement Error Handling**: Handle network failures, authentication errors, and disk space issues
6. **Consider Shallow Clones**: Use shallow clones when full history isn't needed
7. **Clean Up on Failure**: Remove partially cloned directories on clone failure
8. **Document Repository Sources**: Keep track of where repositories were cloned from