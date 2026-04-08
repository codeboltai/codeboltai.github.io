---
title: Git MCP
sidebar_label: codebolt.git
sidebar_position: 9
---

# codebolt.git

Git operations for version control and repository management.

## Available Tools

- `git_init` - Initialize a new git repository
- `git_add` - Add all changes to staging
- `git_commit` - Commit staged changes
- `git_push` - Push commits to remote
- `git_pull` - Pull changes from remote
- `git_checkout` - Switch branches
- `git_branch` - Create new branch
- `git_logs` - View commit history
- `git_diff` - View changes for a commit
- `git_status` - Check repository status
- `git_clone` - Clone a repository

## Tool Parameters

### `git_init`

Initializes a new Git repository at the specified path.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The file system path where the Git repository should be initialized. |

### `git_add`

Adds all changes to the Git staging area.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. Adds all changes. |

### `git_commit`

Commits staged changes with a message.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The commit message. |

### `git_push`

Pushes local commits to the remote repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `git_pull`

Pulls changes from the remote repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `git_checkout`

Checks out a branch in the Git repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| branch | string | Yes | The name of the branch to checkout. |

### `git_branch`

Creates a new branch in the Git repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| branch | string | Yes | The name of the new branch to create. |

### `git_logs`

Retrieves the commit logs for the Git repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| path | string | Yes | The file system path to get logs for. |

### `git_diff`

Retrieves the diff for a specific commit.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| commit_hash | string | Yes | The hash of the commit to get the diff for. |

### `git_status`

Retrieves the status of the Git repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required. |

### `git_clone`

Clones a remote Git repository.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | Yes | The URL of the remote repository to clone. |
| path | string | No | Optional path where the repository should be cloned. |

## Sample Usage

```javascript
// Initialize a new repository
const initResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_init",
  { path: "/home/user/project" }
);

// Add all changes to staging
const addResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_add",
  {}
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
  { branch: "feature-branch" }
);

// View commit history
const logsResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_logs",
  { path: "/home/user/project" }
);

// View changes for a commit
const diffResult = await codebolt.tools.executeTool(
  "codebolt.git",
  "git_diff",
  { commit_hash: "abc123" }
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
  {
    url: "https://github.com/user/repo.git",
    path: "/home/user/projects/repo"
  }
);
```

:::info
This functionality provides Git operations through the MCP interface.
::: 