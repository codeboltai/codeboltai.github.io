---
cbapicategory:
  - name: init
    link: /docs/api/apiaccess/git/init
    description: 'Initializes a new Git repository. Can be used in the current directory or at a specified path.'
  - name: status
    link: /docs/api/apiaccess/git/status
    description: 'Retrieves the status of the Git repository. Shows working tree status including staged, unstaged, and untracked files.'
  - name: add
    link: /docs/api/apiaccess/git/add
    description: 'Adds changes in the local repository to the staging area. Can add specific files or all changes using addAll().'
  - name: commit
    link: /docs/api/apiaccess/git/commit
    description: 'Commits the staged changes in the local repository with the given commit message.'
  - name: branch
    link: /docs/api/apiaccess/git/branch
    description: 'Creates a new branch in the Git repository. Essential for feature development and parallel work streams.'
  - name: checkout
    link: /docs/api/apiaccess/git/checkout
    description: 'Checks out a branch or commit in the Git repository. Switches the working directory to the specified branch.'
  - name: logs
    link: /docs/api/apiaccess/git/logs
    description: 'Retrieves the commit logs for the Git repository. Shows commit history with details like hash, message, author, and date.'
  - name: diff
    link: /docs/api/apiaccess/git/diff
    description: 'Retrieves the diff of changes for a specific commit in the local repository.'
  - name: clone
    link: /docs/api/apiaccess/git/clone
    description: 'Clones a Git repository from the given URL to the specified path.'
  - name: pull
    link: /docs/api/apiaccess/git/pull
    description: 'Pulls the latest changes from the remote repository to the local repository.'
  - name: push
    link: /docs/api/apiaccess/git/push
    description: 'Pushes local repository changes to the remote repository.'

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

## Best Practices

### Commit Messages
- Use clear, descriptive commit messages
- Follow conventional commit format (feat:, fix:, docs:)
- Keep commits atomic and focused

### Branch Management
- Use descriptive branch names (feature/login, hotfix/bug-123)
- Create branches for each feature or bug fix
- Switch back to main after completing work

### Workflow Automation
- Check status before making commits
- Use addAll() for convenience in development
- Leverage logs for debugging and project analysis

The git module enables complete version control automation, making it easy to implement sophisticated development workflows and CI/CD processes.
