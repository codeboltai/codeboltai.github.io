---
cbapicategory:
  - name: init
    link: /docs/api/apiaccess/git/init
    description: "'Initializes a new Git repository. Can be used in the current directory or at a specified path.'"
  - name: status
    link: /docs/api/apiaccess/git/status
    description: "'Retrieves the status of the Git repository. Shows working tree status including staged, unstaged, and untracked files.'"
  - name: add
    link: /docs/api/apiaccess/git/add
    description: "'Adds changes in the local repository to the staging area. Can add specific files or all changes using addAll().'"
  - name: commit
    link: /docs/api/apiaccess/git/commit
    description: "'Commits the staged changes in the local repository with the given commit message.'"
  - name: branch
    link: /docs/api/apiaccess/git/branch
    description: "'Creates a new branch in the Git repository. Essential for feature development and parallel work streams.'"
  - name: checkout
    link: /docs/api/apiaccess/git/checkout
    description: "'Checks out a branch or commit in the Git repository. Switches the working directory to the specified branch.'"
  - name: logs
    link: /docs/api/apiaccess/git/logs
    description: "'Retrieves the commit logs for the Git repository. Shows commit history with details like hash, message, author, and date.'"
  - name: diff
    link: /docs/api/apiaccess/git/diff
    description: "'Retrieves the diff of changes for a specific commit in the local repository.'"
  - name: clone
    link: /docs/api/apiaccess/git/clone
    description: "'Clones a Git repository from the given URL to the specified path.'"
  - name: pull
    link: /docs/api/apiaccess/git/pull
    description: "'Pulls the latest changes from the remote repository to the local repository.'"
  - name: push
    link: /docs/api/apiaccess/git/push
    description: "'Pushes local repository changes to the remote repository.'"

---
# git

The `git` module provides comprehensive Git version control operations for CodeboltJS. It enables complete Git workflow automation including repository initialization, branch management, commit operations, and remote synchronization.

<CBAPICategory />

## Key Features

### Repository Management
- **Repository Initialization**: Create new Git repositories with `init()`
- **Status Monitoring**: Track working tree status with `status()`
- **History Access**: View commit history and logs with `logs()`

### File Operations
- **Staging Changes**: Add files to staging area with `add()` and `addAll()`
- **Committing**: Save changes with descriptive commit messages using `commit()`
- **Diff Analysis**: Compare changes between commits with `diff()`

### Branch Management
- **Branch Creation**: Create new branches for feature development with `branch()`
- **Branch Switching**: Navigate between branches using `checkout()`
- **Parallel Development**: Work on multiple features simultaneously

### Remote Operations
- **Repository Cloning**: Clone remote repositories with `clone()`
- **Synchronization**: Keep repositories in sync with `pull()` and `push()`
- **Collaboration**: Enable team collaboration through remote operations

## Quick Start Guide

### Initialize a New Repository

```js
import codebolt from '@codebolt/codeboltjs';

// Initialize a new Git repository
await codebolt.git.init();
console.log('✅ Repository initialized');

// Create initial files
await codebolt.fs.createFile('README.md', '# My Project\n\nDescription', '.');
await codebolt.fs.createFile('.gitignore', 'node_modules/\n.env', '.');

// Stage and commit
await codebolt.git.addAll();
await codebolt.git.commit('Initial commit: Add README and gitignore');
console.log('✅ Initial commit created');
```

### Clone an Existing Repository

```js
// Clone a repository from GitHub
await codebolt.git.clone('https://github.com/user/repo.git', './my-project');
console.log('✅ Repository cloned');

// Check the status
const status = await codebolt.git.status();
console.log('Repository status:', status);
```

### Basic Branch Workflow

```js
// Create a new feature branch
await codebolt.git.branch('feature/new-feature');
console.log('✅ Branch created');

// Switch to the new branch
await codebolt.git.checkout('feature/new-feature');
console.log('✅ Switched to feature branch');

// Make changes and commit
await codebolt.fs.createFile('feature.js', '// Feature implementation', '.');
await codebolt.git.addAll();
await codebolt.git.commit('feat: add new feature');

// Switch back to main branch
await codebolt.git.checkout('main');
```

## Common Workflows

### Complete Git Initialization Workflow
```js
// Initialize repository and make first commit
await codebolt.git.init();
await codebolt.fs.createFile('README.md', '# My Project\n\nProject description.');
await codebolt.git.addAll();
await codebolt.git.commit('Initial commit');
```

### Feature Development Workflow
```js
// Create feature branch and develop
await codebolt.git.branch('feature/user-auth');
await codebolt.git.checkout('feature/user-auth');
await codebolt.fs.createFile('auth.js', '// Authentication logic');
await codebolt.git.addAll();
await codebolt.git.commit('Implement user authentication');
await codebolt.git.checkout('main');
```

### Status Monitoring Workflow
```js
// Check status throughout development
const status = await codebolt.git.status();
if (status.untracked?.length > 0) {
    await codebolt.git.addAll();
    await codebolt.git.commit('Add new files');
}
```

### Commit History Analysis
```js
// Analyze project history
const logs = await codebolt.git.logs();
const latestCommit = logs.logs[0];
console.log(`Latest: ${latestCommit.message} by ${latestCommit.author}`);
```

### Collaboration Workflow
```js
// Pull latest changes
await codebolt.git.pull();

// Make your changes
await codebolt.fs.createFile('new-feature.js', '// New feature', '.');
await codebolt.git.addAll();
await codebolt.git.commit('feat: add new feature');

// Push changes to remote
await codebolt.git.push();
```

### Code Review Workflow
```js
// Create feature branch
await codebolt.git.branch('feature/code-review');
await codebolt.git.checkout('feature/code-review');

// Make changes
await codebolt.fs.updateFile('app.js', '.', '// Updated code');
await codebolt.git.addAll();
await codebolt.git.commit('refactor: improve app logic');

// Push and create pull request (if using GitHub)
await codebolt.git.push();
console.log('✅ Ready for code review');
```

### Hotfix Workflow
```js
// Ensure we're on main
await codebolt.git.checkout('main');

// Pull latest changes
await codebolt.git.pull();

// Create hotfix branch
await codebolt.git.branch('hotfix/critical-bug');
await codebolt.git.checkout('hotfix/critical-bug');

// Fix the bug
await codebolt.fs.updateFile('bug.js', '.', '// Bug fix');
await codebolt.git.addAll();
await codebolt.git.commit('fix: resolve critical bug');

// Merge back to main
await codebolt.git.checkout('main');
await codebolt.git.merge('hotfix/critical-bug');
await codebolt.git.push();
```

## Method Categories

### Core Operations
- **`init()`** - Initialize new repository
- **`status()`** - Check repository status
- **`add()` / `addAll()`** - Stage changes
- **`commit(message)`** - Save changes

### Branch Operations
- **`branch(name)`** - Create new branch
- **`checkout(branch)`** - Switch branches
- **`logs()`** - View commit history

### Advanced Operations
- **`diff(commitHash)`** - Compare changes
- **`clone(url, path)`** - Clone repository
- **`pull()`** - Fetch remote changes
- **`push()`** - Send local changes

## Integration with File System

The git module works seamlessly with the `fs` module for complete development workflows:

```js
// Create project structure
await codebolt.fs.createFolder('src', '.');
await codebolt.fs.createFile('index.js', 'console.log("Hello World");', './src');

// Version control the project
await codebolt.git.init();
await codebolt.git.addAll();
await codebolt.git.commit('Initial project structure');

// Continue development
await codebolt.fs.updateFile('index.js', './src', 'console.log("Updated!");');
await codebolt.git.addAll();
await codebolt.git.commit('Update main file');
```

## Module Integration Examples

### Integration with Terminal Module
```js
// Run git commands via terminal for advanced operations
await codebolt.terminal.executeCommand('git remote -v');
await codebolt.terminal.executeCommand('git branch -a');
```

### Integration with File System Module
```js
// Create .gitignore and commit
const gitignore = `node_modules/
.env
dist/
*.log`;

await codebolt.fs.createFile('.gitignore', gitignore, '.');
await codebolt.git.addAll();
await codebolt.git.commit('chore: add gitignore file');
```

## Advanced Usage Patterns

### Atomic Commit Workflow
```js
async function atomicCommit(message) {
    try {
        // Check if there are changes to commit
        const status = await codebolt.git.status();

        const hasChanges =
            (status.data?.staged && status.data.staged.length > 0) ||
            (status.data?.unstaged && status.data.unstaged.length > 0) ||
            (status.data?.untracked && status.data.untracked.length > 0);

        if (!hasChanges) {
            console.log('⚠️ No changes to commit');
            return null;
        }

        // Stage all changes
        await codebolt.git.addAll();

        // Commit with message
        const result = await codebolt.git.commit(message);

        if (result.success) {
            console.log(`✅ Committed: ${message}`);
            return result.hash;
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('❌ Commit failed:', error.message);
        throw error;
    }
}
```

### Branch Management Strategy
```js
async function createFeatureBranch(featureName) {
    try {
        // Ensure we're on main and up to date
        await codebolt.git.checkout('main');
        await codebolt.git.pull();

        // Create and checkout feature branch
        const branchName = `feature/${featureName}`;
        await codebolt.git.branch(branchName);
        await codebolt.git.checkout(branchName);

        console.log(`✅ Created and switched to ${branchName}`);
        return branchName;
    } catch (error) {
        console.error('❌ Failed to create feature branch:', error.message);
        throw error;
    }
}

async function completeFeatureBranch(branchName) {
    try {
        // Commit any remaining changes
        await atomicCommit('feat: complete feature implementation');

        // Switch back to main
        await codebolt.git.checkout('main');
        await codebolt.git.pull();

        console.log(`✅ Feature branch ${branchName} ready for merge`);
        console.log('💡 Create a pull request to merge the changes');
    } catch (error) {
        console.error('❌ Failed to complete feature branch:', error.message);
        throw error;
    }
}
```

### Conventional Commit Helper
```js
async function conventionalCommit(type, scope, description, body = '') {
    const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'];

    if (!types.includes(type)) {
        throw new Error(`Invalid commit type. Use one of: ${types.join(', ')}`);
    }

    // Build commit message
    let message = type;
    if (scope) message += `(${scope})`;
    message += `: ${description}`;

    if (body) {
        message += `\n\n${body}`;
    }

    // Stage changes and commit
    await codebolt.git.addAll();
    const result = await codebolt.git.commit(message);

    if (result.success) {
        console.log(`✅ ${message}`);
        return result.hash;
    } else {
        throw new Error(result.error);
    }
}

// Usage examples:
// await conventionalCommit('feat', 'auth', 'add user login', 'Implements OAuth2 authentication');
// await conventionalCommit('fix', null, 'resolve memory leak', 'Fixes issue #123');
```

### Repository Health Check
```js
async function repoHealthCheck() {
    const health = {
        status: 'healthy',
        issues: []
    };

    try {
        // Check repository status
        const status = await codebolt.git.status();

        // Check for uncommitted changes
        if (status.data?.unstaged?.length > 0 || status.data?.untracked?.length > 0) {
            health.issues.push('Uncommitted changes detected');
            health.status = 'warning';
        }

        // Check for merge conflicts
        if (status.data?.conflicted?.length > 0) {
            health.issues.push(`Merge conflicts: ${status.data.conflicted.length} files`);
            health.status = 'error';
        }

        // Check if detached HEAD
        if (status.data?.head?.includes('HEAD detached')) {
            health.issues.push('Detached HEAD state');
            health.status = 'warning';
        }

        // Get recent commits
        const logs = await codebolt.git.logs();
        if (logs.logs?.length > 0) {
            const latestCommit = logs.logs[0];
            const commitDate = new Date(latestCommit.date);
            const daysSinceLastCommit = Math.floor((new Date() - commitDate) / (1000 * 60 * 60 * 24));

            if (daysSinceLastCommit > 30) {
                health.issues.push(`No commits in ${daysSinceLastCommit} days`);
                health.status = 'warning';
            }
        }

        console.log(`📊 Repository Health: ${health.status.toUpperCase()}`);
        if (health.issues.length > 0) {
            console.log('Issues found:');
            health.issues.forEach(issue => console.log(`  ⚠️ ${issue}`));
        }

        return health;
    } catch (error) {
        health.status = 'error';
        health.issues.push(`Health check failed: ${error.message}`);
        return health;
    }
}
```

### Batch Commit Generator
```js
async function batchCommitFromFiles(files) {
    const commits = [];

    for (const file of files) {
        try {
            // Read file content
            const content = await codebolt.fs.readFile(file.path);

            // Create file if it doesn't exist
            if (!content.success) {
                await codebolt.fs.createFile(file.name, file.content, file.directory);
            }

            // Stage the file
            await codebolt.git.addAll();

            // Commit with message
            const result = await codebolt.git.commit(file.message);

            if (result.success) {
                commits.push({
                    file: file.name,
                    hash: result.hash,
                    message: file.message
                });
                console.log(`✅ Committed ${file.name}`);
            }
        } catch (error) {
            console.error(`❌ Failed to commit ${file.name}:`, error.message);
        }
    }

    console.log(`📦 Created ${commits.length} commits`);
    return commits;
}

// Usage
const files = [
    { name: 'README.md', directory: '.', path: './README.md', content: '# Project', message: 'docs: add README' },
    { name: 'index.js', directory: '.', path: './index.js', content: 'console.log("Hi");', message: 'feat: add main entry point' }
];

await batchCommitFromFiles(files);
```

## Error Handling

All git methods return promises and should be used with proper error handling:

```js
try {
    const result = await codebolt.git.commit('My commit message');
    if (result.success) {
        console.log('✅ Operation successful');
    } else {
        console.log('❌ Operation failed:', result.message);
    }
} catch (error) {
    console.error('Error:', error.message);
}
```

### Comprehensive Error Handling Example
```js
async function safeGitOperation(operation) {
    try {
        // Check if we're in a git repository
        const gitCheck = await codebolt.terminal.executeCommand('git rev-parse --is-inside-work-tree');

        if (gitCheck.exitCode !== 0) {
            throw new Error('Not in a Git repository');
        }

        // Perform the operation
        const result = await operation();

        if (result.success) {
            console.log('✅ Git operation successful');
            return result;
        } else {
            console.error('❌ Git operation failed:', result.error);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Git operation error:', error.message);

        // Handle specific errors
        if (error.message.includes('not a git repository')) {
            console.error('💡 Initialize a git repository first with: await codebolt.git.init()');
        } else if (error.message.includes('merge conflict')) {
            console.error('💡 Resolve merge conflicts before committing');
        } else if (error.message.includes('nothing to commit')) {
            console.log('ℹ️ No changes to commit');
        }

        throw error;
    }
}

// Usage
await safeGitOperation(() => codebolt.git.commit('Update files'));
```

## Performance Considerations

### Optimizing Git Operations
```js
// Batch file operations before committing
async function efficientCommitWorkflow(files) {
    // Create all files first
    for (const file of files) {
        await codebolt.fs.createFile(file.name, file.content, file.path);
    }

    // Stage all files at once
    await codebolt.git.addAll();

    // Single commit for all changes
    await codebolt.git.commit('feat: add multiple files');
}
```

### Avoiding Redundant Operations
```js
// Check status before committing
async function smartCommit(message) {
    const status = await codebolt.git.status();

    if (!status.data?.staged?.length && !status.data?.unstaged?.length) {
        console.log('⚠️ No changes to commit');
        return null;
    }

    return await codebolt.git.commit(message);
}
```

## Common Pitfalls and Solutions

### Pitfall 1: Committing Without Staging
```js
// ❌ Bad: Forgetting to stage changes
await codebolt.git.commit('New feature');

// ✅ Good: Stage changes before committing
await codebolt.git.addAll();
await codebolt.git.commit('New feature');
```

### Pitfall 2: Not Checking Branch Before Work
```js
// ❌ Bad: Working on wrong branch
await codebolt.fs.createFile('feature.js', '// code', '.');

// ✅ Good: Check and switch branch first
const status = await codebolt.git.status();
if (!status.data?.head?.includes('feature')) {
    await codebolt.git.checkout('feature/new-feature');
}
await codebolt.fs.createFile('feature.js', '// code', '.');
```

### Pitfall 3: Ignoring Merge Conflicts
```js
// ❌ Bad: Ignoring conflicts
await codebolt.git.pull();
await codebolt.git.commit('Changes');

// ✅ Good: Check for conflicts
const status = await codebolt.git.status();
if (status.data?.conflicted?.length > 0) {
    console.error('❌ Merge conflicts detected!');
    console.log('Conflicted files:', status.data.conflicted);
    // Resolve conflicts before committing
} else {
    await codebolt.git.commit('Changes');
}
```

### Pitfall 4: Poor Commit Messages
```js
// ❌ Bad: Vague commit messages
await codebolt.git.commit('update');
await codebolt.git.commit('fix');
await codebolt.git.commit('changes');

// ✅ Good: Descriptive, conventional commits
await codebolt.git.commit('feat: add user authentication');
await codebolt.git.commit('fix: resolve login bug');
await codebolt.git.commit('docs: update API documentation');
```

## Best Practices

### 1. Use Conventional Commits
```js
// Follow conventional commit format
await codebolt.git.commit('feat: add new feature');
await codebolt.git.commit('fix: resolve critical bug');
await codebolt.git.commit('docs: update README');
await codebolt.git.commit('refactor: improve code structure');
```

### 2. Create Feature Branches
```js
// Always create branches for features
await codebolt.git.branch('feature/user-auth');
await codebolt.git.checkout('feature/user-auth');
// Work on feature...
await codebolt.git.checkout('main');
```

### 3. Check Status Before Operations
```js
// Always check repository status
const status = await codebolt.git.status();
if (status.data?.conflicted?.length === 0) {
    await codebolt.git.commit('Safe to commit');
}
```

### 4. Write Meaningful Commit Messages
```js
// Include context in commit messages
await codebolt.git.commit(
    'feat: implement OAuth2 authentication\n\n' +
    '- Add Google OAuth provider\n' +
    '- Implement token refresh mechanism\n' +
    '- Add user session management\n\n' +
    'Fixes #123'
);
```

### 5. Pull Before Push
```js
// Always pull before pushing to avoid conflicts
async function safePush() {
    await codebolt.git.pull();
    await codebolt.git.push();
    console.log('✅ Changes pushed successfully');
}
```

### 6. Use Atomic Commits
```js
// One logical change per commit
await codebolt.fs.createFile('auth.js', '// auth code', '.');
await codebolt.git.addAll();
await codebolt.git.commit('feat: add authentication module');

await codebolt.fs.createFile('auth.test.js', '// test code', '.');
await codebolt.git.addAll();
await codebolt.git.commit('test: add authentication tests');
```

### 7. Regular Repository Health Checks
```js
// Periodically check repository health
async function maintainRepositoryHealth() {
    // Check for uncommitted changes
    const status = await codebolt.git.status();
    if (status.data?.unstaged?.length > 0) {
        console.log('⚠️ You have uncommitted changes');
    }

    // Check recent activity
    const logs = await codebolt.git.logs();
    console.log(`📊 Total commits: ${logs.logs?.length || 0}`);
}
```

## Troubleshooting

### Common Issues and Solutions

**Issue**: "Not a git repository" error
- **Solution**: Initialize repository with `await codebolt.git.init()`

**Issue**: Merge conflicts
- **Solution**: Resolve conflicts manually, then stage and commit

**Issue**: "Nothing to commit" error
- **Solution**: Check if files have been modified using `status()`

**Issue**: Detached HEAD state
- **Solution**: Checkout a branch with `await codebolt.git.checkout('main')`

**Issue**: Push rejected
- **Solution**: Pull latest changes first with `await codebolt.git.pull()`

**Issue**: Permission denied
- **Solution**: Check Git credentials and repository access permissions
