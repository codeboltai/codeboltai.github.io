---
sidebar_position: 83
title: Utils Tools
description: AI-assisted file editing and diff application tools
---

# Utils Tools

The Utils MCP tools provide AI-assisted file editing capabilities with intelligent diff application.

## Available Tools

### utils_edit_file_and_apply_diff

Edits a file and applies a diff with AI assistance, enabling intelligent code modifications.

:::info
This tool uses AI models to intelligently apply diffs to files. The AI analyzes the file content and the provided diff to determine the optimal way to apply changes, reducing the risk of merge conflicts and ensuring clean edits.
:::

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `filePath` | string | Yes | The path to the file to edit |
| `diff` | string | Yes | The diff to apply to the file |
| `diffIdentifier` | string | Yes | A unique identifier for tracking this diff operation |
| `prompt` | string | Yes | The prompt describing the intent of the edit |
| `applyModel` | string | No | Optional model to use for applying the diff |

#### Return Value

Returns an object with:
- `success`: Boolean indicating if the operation succeeded
- `content`: The modified file content after applying the diff
- `error`: Error message if the operation failed (optional)

#### JavaScript Examples

**Example 1: Apply a simple code change**

```javascript
const result = await codebolt.tool('utils_edit_file_and_apply_diff', {
  filePath: '/path/to/my-file.js',
  diff: '@@ -1,5 +1,5 @@\n-function oldFunction() {\n+function newFunction() {\n     return true;\n }',
  diffIdentifier: 'fix-123',
  prompt: 'Rename oldFunction to newFunction to improve clarity'
});

if (result.success) {
  console.log('File edited successfully:', result.content);
}
```

**Example 2: Apply multiple changes with custom model**

```javascript
const result = await codebolt.tool('utils_edit_file_and_apply_diff', {
  filePath: '/path/to/config.json',
  diff: '@@ -1,4 +1,4 @@\n {\n-  "version": "1.0.0",\n+  "version": "2.0.0",\n   "name": "my-app"\n }',
  diffIdentifier: 'version-bump',
  prompt: 'Update version number to 2.0.0 for release',
  applyModel: 'gpt-4'
});
```

**Example 3: Complex refactor with descriptive prompt**

```javascript
const result = await codebolt.tool('utils_edit_file_and_apply_diff', {
  filePath: '/path/to/component.tsx',
  diff: `@@ -10,15 +10,20 @@
 import React from 'react';

 export function Component({ data }) {
-    return <div>{data}</div>;
+    const processedData = process(data);
+    return (
+        <div>
+            {processedData}
+        </div>
+    );
 }`,
  diffIdentifier: 'refactor-component-structure',
  prompt: 'Refactor component to add data processing logic before rendering'
});

if (!result.success) {
  console.error('Failed to apply diff:', result.error);
}
```

#### Error Handling

The tool may return errors in the following cases:
- File does not exist or is not accessible
- Diff format is invalid or cannot be parsed
- AI model fails to apply the diff
- File is locked or in use by another process
