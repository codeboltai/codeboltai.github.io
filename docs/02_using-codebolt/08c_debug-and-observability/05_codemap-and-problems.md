---
sidebar_position: 4
title: Codemap & Problems
---

# Codemap & Problems

## Codemap

The Codemap is a structural dependency visualisation of your project — files, modules, classes, and functions as nodes, with edges representing imports, calls, and inheritance relationships.

Open via: **Debug Tools dropdown → Codemap**

### What Codemap shows

The graph renders your project's architecture at three zoom levels:

| Zoom level | Shows |
|---|---|
| **Project** | Files and folders as nodes, imports as edges |
| **Module** | Classes and top-level functions within each file |
| **Symbol** | Individual methods and their call relationships |

Scroll to zoom in and out. Drag to pan. Click a node to highlight its direct connections (one hop in either direction).

### Navigating from Codemap to code

Double-click any node to jump to that file, class, or function in the Code editor. The editor opens to the exact line and scrolls the Codemap to keep the selected node centred.

### Filtering

- **Search bar** — type to highlight matching nodes; non-matching nodes are dimmed
- **File type filter** — show only `.ts`, `.py`, or other specific file types
- **Depth slider** — control how many hops of dependency to display; set to 1 to see only direct imports

### Using Codemap before agent tasks

Before asking an agent to refactor a module, open the Codemap to see how many other files import it. This tells you the blast radius of the change and helps you frame the task more precisely: "Refactor `PaymentService` — it is imported by `OrderController`, `InvoiceService`, and `WebhookHandler`."

### Codemap updates

The Codemap is rebuilt whenever you save a file. Large projects may take a few seconds to re-render; a spinner appears in the top-right while the index refreshes.

---

## Problems {#problems}

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
