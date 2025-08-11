---
title: Git MCP
sidebar_label: codebolt.git
sidebar_position: 9
---

# codebolt.git

Git operations for version control and repository management.

## Available Tools

- `git_init` - Initialize a new git repository
- `git_add` - Add files to staging
- `git_commit` - Commit staged changes
- `git_push` - Push commits to remote
- `git_pull` - Pull changes from remote
- `git_checkout` - Switch branches
- `git_branch` - Create new branch
- `git_logs` - View commit history
- `git_diff` - View changes between commits
- `git_status` - Check repository status
- `git_clone` - Clone a repository

## Sample Usage

```javascript
// Initialize a new repository
const initResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_init",
  { dir: "./" }
);

// Add files to staging
const addResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_add",
  { files: ["test.txt"] }
);

// Commit changes
const commitResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_commit",
  { message: "Test commit" }
);

// Push to remote
const pushResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_push",
  {}
);

// Pull from remote
const pullResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_pull",
  {}
);

// Switch branches
const checkoutResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_checkout",
  { branch: "main" }
);

// Create new branch
const branchResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_branch",
  { branch: "test-branch" }
);

// View commit history
const logsResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_logs",
  {}
);

// View changes
const diffResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_diff",
  { commitHash: "HEAD~1" }
);

// Check status
const statusResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_status",
  {}
);

// Clone repository
const cloneResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_clone",
  { url: "https://github.com/user/repo.git" }
);
```

:::info
This functionality provides Git operations through the MCP interface.
::: 