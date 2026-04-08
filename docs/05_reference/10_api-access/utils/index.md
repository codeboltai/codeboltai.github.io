---
cbapicategory:
  - name: editFileAndApplyDiff
    link: /docs/api/apiaccess/utils/editFileAndApplyDiff
    description: Edits a file and applies a diff with AI assistance.
---

# Utils API

The Utils API provides utility functions for common operations, particularly AI-assisted file editing and diff application.

## Overview

The utils module enables you to:
- **AI-Powered Editing**: Edit files with AI assistance
- **Diff Application**: Apply diffs intelligently
- **Smart Modifications**: Use AI to apply code changes

## Quick Start Example

```js
// Edit a file with AI assistance
const result = await codebolt.utils.editFileAndApplyDiff(
  '/path/to/file.ts',
  'Change function signature',
  'diff-001',
  'Update the function to accept new parameters'
);

console.log('File edited:', result.success);
```

## Common Use Cases

### AI-Assisted Code Updates
Apply code changes with AI help:

```js
async function updateWithAI(filePath, description) {
  const result = await codebolt.utils.editFileAndApplyDiff(
    filePath,
    description,
    'update-001',
    'Apply this change to improve code quality'
  );

  return result;
}
```

### Intelligent Refactoring
Refactor code with AI guidance:

```js
async function refactorCode(filePath, diff, prompt) {
  const result = await codebolt.utils.editFileAndApplyDiff(
    filePath,
    diff,
    'refactor-001',
    prompt
  );

  return result;
}
```

## Response Structure

Utils API functions return typed responses:

**File Editing:**
- [`FsEditFileAndApplyDiffResponse`](/docs/api/11_doc-type-ref/types/interfaces/FsEditFileAndApplyDiffResponse): Result of file editing operation

<CBAPICategory />
