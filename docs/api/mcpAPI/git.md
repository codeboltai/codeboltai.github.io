---
title: Git MCP
sidebar_label: codebolt.git
sidebar_position: 3
---

# codebolt.git

Git repository management and version control operations for managing code repositories.

## Available Tools

- `git_init` - Initialize a new Git repository
- `git_clone` - Clone a repository
- `git_pull` - Pull changes from remote
- `git_push` - Push changes to remote
- `git_status` - Get working directory status
- `git_add` - Add files to staging area
- `git_commit` - Commit staged changes
- `git_checkout` - Checkout branch or files
- `git_branch` - Create or list branches
- `git_logs` - Get commit history
- `git_diff` - Get changes between commits

## Sample Usage

```javascript
// Initialize a new Git repository
const initResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_init",
  { path: "/path/to/project" }
);

// Clone a repository
const cloneResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_clone",
  { 
    url: "https://github.com/user/repo.git",
    destination: "/path/to/clone"
  }
);

// Check repository status
const statusResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_status",
  {}
);

// Add files to staging
const addResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_add",
  { files: ["file1.js", "file2.js"] }
);

// Commit changes
const commitResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_commit",
  { message: "Add new features" }
);

// Get commit history
const logsResult = await codeboltMCP.executeTool(
  "codebolt.git",
  "git_logs",
  { limit: 10 }
);
```

:::info
This functionality is similar to the [git API](/docs/api/apiaccess/git) and provides the same Git operations through MCP interface.
::: 