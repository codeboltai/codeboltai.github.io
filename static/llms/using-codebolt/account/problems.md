# Problems

> The Problems panel aggregates syntax errors, lint warnings, and type errors from the editor and from any background linting processes.

The Problems panel aggregates syntax errors, lint warnings, and type errors from the editor and from any background linting processes.

Open via: **Debug Tools dropdown → Problems**

### Problem list

Each entry shows:

| Column | Description |
|---|---|
| **Severity** | Error (red ●), Warning (yellow ▲), Info (blue ℹ) |
| **Message** | The error or warning text |
| **File** | Relative path to the file |
| **Line : Column** | Exact position in the file |
| **Source** | Which tool flagged it (TypeScript, ESLint, Pyright, etc.) |

Click any entry to jump to that line in the Code editor.

### Filtering by severity

Use the toggle buttons at the top to show only Errors, only Warnings, or all. Click a severity count badge in the bottom bar (shown as `⊗ N errors △ N warnings`) to open the Problems panel pre-filtered to that severity.

### Filtering by file

Type in the search bar to filter problems by file path or message text. Useful when you have hundreds of warnings and only care about one module.

### Fixing problems with agents

Select one or more problem entries, right-click → **Fix with Agent**. Codebolt opens a new chat thread with the problems pre-populated as context. The agent reads the error messages and the relevant code, proposes fixes, and applies them as diffs you can review.

### Live updates

The Problems panel updates live as you edit files. Fixing an error in the Code editor removes it from the Problems list immediately — no need to re-run a build.
