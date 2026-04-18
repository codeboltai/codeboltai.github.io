---
cbapicategory:
  - name: branch
    link: /docs/reference/client-sdk/api-reference/git/branch
    description: "Lists branches in the repository.

Returns all local (and optionally remote) branches with their
metadata. Useful for branch selection UIs and workflow logic."
  - name: checkout
    link: /docs/reference/client-sdk/api-reference/git/checkout
    description: "Checks out an existing branch or commit.

Switches the working directory to the specified branch, tag, or
commit hash."
  - name: commit
    link: /docs/reference/client-sdk/api-reference/git/commit
    description: "Creates a new Git commit with the staged changes.

Commits all currently staged files with the provided commit message
and optional author information."
  - name: createBranch
    link: /docs/reference/client-sdk/api-reference/git/createBranch
    description: "Creates a new Git branch.

Creates a branch with the specified name, optionally based on a
given starting point (commit, tag, or another branch)."
  - name: diff
    link: /docs/reference/client-sdk/api-reference/git/diff
    description: "Retrieves the current diff of changes in the working directory.

Compares the working tree against the latest commit to show all
unstaged modifications. Optionally filters to a specific file path."
  - name: download
    link: /docs/reference/client-sdk/api-reference/git/download
    description: "Downloads (clones) a remote Git repository.

Clones a repository from a URL into the workspace. Use this to
set up a project from an existing remote repository."
  - name: getRemoteUrl
    link: /docs/reference/client-sdk/api-reference/git/getRemoteUrl
    description: "Retrieves the configured remote URL for the repository.

Returns the URL of the primary remote (typically \"origin\"). Useful
for displaying repository information or constructing web links."
  - name: graph
    link: /docs/reference/client-sdk/api-reference/git/graph
    description: "Retrieves the commit graph (history) of the repository.

Returns an array of commits representing the repository's history.
Useful for rendering commit timelines or inspecting past changes."
  - name: init
    link: /docs/reference/client-sdk/api-reference/git/init
    description: "Initializes a new Git repository in the workspace.

Creates a new `.git` directory and sets up the repository. If the
repository already exists, behavior depends on the server configuration."
  - name: publishRemote
    link: /docs/reference/client-sdk/api-reference/git/publishRemote
    description: "Publishes the local repository to a new remote.

Sets up a remote and pushes the local repository to it for the first
time. Use this when the repository does not yet have a remote configured."
  - name: pull
    link: /docs/reference/client-sdk/api-reference/git/pull
    description: "Pulls changes from the remote repository.

Downloads and integrates remote changes into the current branch.
Equivalent to running `git pull` from the command line."
  - name: push
    link: /docs/reference/client-sdk/api-reference/git/push
    description: "Pushes committed changes to the remote repository.

An alias for  providing a shorter method name.
Both methods perform the same push operation."
  - name: pushToRemote
    link: /docs/reference/client-sdk/api-reference/git/pushToRemote
    description: "Pushes committed changes to the remote repository.

Uploads local commits to the configured remote. This is the standard
way to share local changes with the remote repository."
  - name: revert
    link: /docs/reference/client-sdk/api-reference/git/revert
    description: "Reverts changes to tracked files in the working directory.

Discards uncommitted modifications to files that are already tracked
by Git, restoring them to their last committed state."
  - name: revertUntracked
    link: /docs/reference/client-sdk/api-reference/git/revertUntracked
    description: "Removes untracked files from the working directory.

Deletes files that are not tracked by Git (i.e., new files that
have not been staged or committed). Use with caution as this
operation cannot be undone."
  - name: status
    link: /docs/reference/client-sdk/api-reference/git/status
    description: "Retrieves the current Git status of the working directory.

Returns information about staged, unstaged, and untracked files,
similar to running `git status` from the command line."
---
# Git API

Git API - git operations

<CBAPICategory />

## Methods

- [`branch()`](./branch) — Lists branches in the repository.

Returns all local (and optionally remote) branches with their
metadata. Useful for branch selection UIs and workflow logic.
- [`checkout()`](./checkout) — Checks out an existing branch or commit.

Switches the working directory to the specified branch, tag, or
commit hash.
- [`commit()`](./commit) — Creates a new Git commit with the staged changes.

Commits all currently staged files with the provided commit message
and optional author information.
- [`createBranch()`](./createBranch) — Creates a new Git branch.

Creates a branch with the specified name, optionally based on a
given starting point (commit, tag, or another branch).
- [`diff()`](./diff) — Retrieves the current diff of changes in the working directory.

Compares the working tree against the latest commit to show all
unstaged modifications. Optionally filters to a specific file path.
- [`download()`](./download) — Downloads (clones) a remote Git repository.

Clones a repository from a URL into the workspace. Use this to
set up a project from an existing remote repository.
- [`getRemoteUrl()`](./getRemoteUrl) — Retrieves the configured remote URL for the repository.

Returns the URL of the primary remote (typically "origin"). Useful
for displaying repository information or constructing web links.
- [`graph()`](./graph) — Retrieves the commit graph (history) of the repository.

Returns an array of commits representing the repository's history.
Useful for rendering commit timelines or inspecting past changes.
- [`init()`](./init) — Initializes a new Git repository in the workspace.

Creates a new `.git` directory and sets up the repository. If the
repository already exists, behavior depends on the server configuration.
- [`publishRemote()`](./publishRemote) — Publishes the local repository to a new remote.

Sets up a remote and pushes the local repository to it for the first
time. Use this when the repository does not yet have a remote configured.
- [`pull()`](./pull) — Pulls changes from the remote repository.

Downloads and integrates remote changes into the current branch.
Equivalent to running `git pull` from the command line.
- [`push()`](./push) — Pushes committed changes to the remote repository.

An alias for  providing a shorter method name.
Both methods perform the same push operation.
- [`pushToRemote()`](./pushToRemote) — Pushes committed changes to the remote repository.

Uploads local commits to the configured remote. This is the standard
way to share local changes with the remote repository.
- [`revert()`](./revert) — Reverts changes to tracked files in the working directory.

Discards uncommitted modifications to files that are already tracked
by Git, restoring them to their last committed state.
- [`revertUntracked()`](./revertUntracked) — Removes untracked files from the working directory.

Deletes files that are not tracked by Git (i.e., new files that
have not been staged or committed). Use with caution as this
operation cannot be undone.
- [`status()`](./status) — Retrieves the current Git status of the working directory.

Returns information about staged, unstaged, and untracked files,
similar to running `git status` from the command line.
