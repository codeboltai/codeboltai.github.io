---
sidebar_position: 82
title: User Message Utilities
description: Tools for accessing current user message and context information
---

# User Message Utilities

The User Message Utilities MCP tools provide access to the current user message context, including message text, mentioned files, MCPs, and editor state information.

:::info Message Context Extraction

These utilities extract context from the active user message session, allowing agents to understand what files, tools, and content are currently in scope. This is particularly useful for context-aware operations and understanding user intent without manual parsing.

:::

## Available Tools

### user_utilities_get_current

Retrieves the complete current user message object containing all available context information.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary message
- `returnDisplay`: JSON string representation of the current user message object

#### JavaScript Examples

**Example 1: Retrieve complete user message context**

```javascript
const result = await codebolt.tool('user_utilities_get_current');

if (result.returnDisplay !== 'No current user message') {
  const message = JSON.parse(result.returnDisplay);
  console.log('Message ID:', message.messageId);
  console.log('Thread ID:', message.threadId);
  console.log('Timestamp:', message.timestamp);
}
```

**Example 2: Check if message context is available**

```javascript
const result = await codebolt.tool('user_utilities_get_current');

if (result.returnDisplay === 'No current user message') {
  console.log('No active user message context');
} else {
  const context = JSON.parse(result.returnDisplay);
  console.log('User message context loaded');
}
```

### user_utilities_get_text

Retrieves the text content of the current user message.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary message with text content
- `returnDisplay`: The raw text content of the user message

#### JavaScript Examples

**Example 1: Get user's request text**

```javascript
const result = await codebolt.tool('user_utilities_get_text');

console.log('User message:', result.returnDisplay);

// Process the user's request
if (result.returnDisplay.includes('refactor')) {
  console.log('User wants to refactor code');
}
```

**Example 2: Use message text for intent analysis**

```javascript
const result = await codebolt.tool('user_utilities_get_text');
const text = result.returnDisplay;

// Analyze user intent
const intent = text.toLowerCase().includes('fix bug') ? 'bugfix' : 'feature';
console.log('Detected intent:', intent);
```

### user_utilities_get_mentioned_mcps

Retrieves all MCP (Model Context Protocol) tools mentioned in the current user message.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary with count of mentioned MCPs
- `returnDisplay`: JSON array of mentioned MCP tools

#### JavaScript Examples

**Example 1: Check for mentioned MCP tools**

```javascript
const result = await codebolt.tool('user_utilities_get_mentioned_mcps');
const mcps = JSON.parse(result.returnDisplay);

console.log(`Found ${mcps.length} mentioned MCP(s)`);

if (mcps.length > 0) {
  mcps.forEach(mcp => {
    console.log('MCP tool:', mcp.name);
  });
}
```

**Example 2: Conditionally use mentioned MCPs**

```javascript
const result = await codebolt.tool('user_utilities_get_mentioned_mcps');
const mcps = JSON.parse(result.returnDisplay);

if (mcps.includes('git') && mcps.includes('terminal')) {
  // User mentioned git and terminal tools
  await codebolt.tool('git_status');
}
```

### user_utilities_get_mentioned_files

Retrieves all file paths mentioned in the current user message.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary with count of mentioned files
- `returnDisplay`: JSON array of mentioned file paths

#### JavaScript Examples

**Example 1: Process mentioned files**

```javascript
const result = await codebolt.tool('user_utilities_get_mentioned_files');
const files = JSON.parse(result.returnDisplay);

console.log(`Found ${files.length} mentioned file(s)`);

for (const file of files) {
  const content = await codebolt.fs.readFile(file);
  console.log(`Content of ${file}:`, content);
}
```

**Example 2: Batch operations on mentioned files**

```javascript
const result = await codebolt.tool('user_utilities_get_mentioned_files');
const files = JSON.parse(result.returnDisplay);

// Analyze all mentioned files
const analysisPromises = files.map(async (file) => {
  const content = await codebolt.fs.readFile(file);
  return {
    path: file,
    lines: content.split('\n').length,
    size: content.length
  };
});

const analyses = await Promise.all(analysisPromises);
console.log('File analyses:', analyses);
```

### user_utilities_get_current_file

Retrieves the current file path from the user message context (typically the file active in the editor).

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary with file path
- `returnDisplay`: The current file path string, or 'No current file' if unavailable

#### JavaScript Examples

**Example 1: Get current active file**

```javascript
const result = await codebolt.tool('user_utilities_get_current_file');

if (result.returnDisplay !== 'No current file') {
  const currentFile = result.returnDisplay;
  console.log('Active file:', currentFile);

  // Read the active file
  const content = await codebolt.fs.readFile(currentFile);
  console.log('Content length:', content.length);
}
```

**Example 2: Perform action on current file**

```javascript
const result = await codebolt.tool('user_utilities_get_current_file');
const currentFile = result.returnDisplay;

if (currentFile && currentFile.endsWith('.js')) {
  // Apply JavaScript-specific transformations
  await codebolt.tool('code_utils_analyze_code', {
    filePath: currentFile,
    language: 'javascript'
  });
}
```

### user_utilities_get_selection

Retrieves the currently selected text from the user's editor or message context.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an object with:
- `llmContent`: Summary message
- `returnDisplay`: The selected text string, or 'No text selection' if unavailable

#### JavaScript Examples

**Example 1: Process user's text selection**

```javascript
const result = await codebolt.tool('user_utilities_get_selection');

if (result.returnDisplay !== 'No text selection') {
  const selection = result.returnDisplay;
  console.log('Selected text:', selection);

  // Analyze the selection
  const analysis = await codebolt.tool('llm_analyze', {
    text: selection,
    task: 'summarize'
  });
}
```

**Example 2: Refactor selected code**

```javascript
const result = await codebolt.tool('user_utilities_get_selection');
const selection = result.returnDisplay;

if (selection && selection.trim().length > 0) {
  // Refactor the selected code
  const refactored = await codebolt.tool('llm_generate', {
    prompt: `Refactor this code for better readability:\n${selection}`,
    systemPrompt: 'You are a code refactoring expert'
  });

  console.log('Refactored code:', refactored.returnDisplay);
}
```

**Example 3: Explain user's selection**

```javascript
const result = await codebolt.tool('user_utilities_get_selection');

if (result.returnDisplay !== 'No text selection') {
  const explanation = await codebolt.tool('llm_analyze', {
    text: result.returnDisplay,
    task: 'explain',
    context: 'code_explanation'
  });

  console.log('Explanation:', explanation.returnDisplay);
}
```

## Error Handling

All tools in the User Message Utilities may return errors in the following cases:
- No active user message session
- Message context is not available or has been cleared
- Invalid session state

Error responses will include:
- `llmContent`: Error description
- `returnDisplay`: Error message
- `error`: Object with `message` and `type` properties

## Common Use Cases

### Context-Aware File Operations

```javascript
// Get mentioned files and current file
const [mentionedResult, currentResult] = await Promise.all([
  codebolt.tool('user_utilities_get_mentioned_files'),
  codebolt.tool('user_utilities_get_current_file')
]);

const mentionedFiles = JSON.parse(mentionedResult.returnDisplay);
const currentFile = currentResult.returnDisplay;

// Combine mentioned files with current file
const filesToProcess = currentFile 
  ? [...new Set([...mentionedFiles, currentFile])]
  : mentionedFiles;

console.log('Files to process:', filesToProcess);
```

### Understanding User Intent

```javascript
// Get message text and mentioned MCPs
const [textResult, mcpsResult] = await Promise.all([
  codebolt.tool('user_utilities_get_text'),
  codebolt.tool('user_utilities_get_mentioned_mcps')
]);

const userText = textResult.returnDisplay;
const mcps = JSON.parse(mcpsResult.returnDisplay);

// Analyze intent
const hasGit = mcps.includes('git');
const hasTerminal = mcps.includes('terminal');
const wantsCommit = userText.toLowerCase().includes('commit');

if (hasGit && wantsCommit) {
  console.log('User wants to commit changes');
  await codebolt.tool('git_commit', { message: userText });
}
```

### Selection-Based Operations

```javascript
// Check for text selection and current file
const [selectionResult, fileResult] = await Promise.all([
  codebolt.tool('user_utilities_get_selection'),
  codebolt.tool('user_utilities_get_current_file')
]);

const selection = selectionResult.returnDisplay;
const currentFile = fileResult.returnDisplay;

if (selection !== 'No text selection' && currentFile) {
  // Apply operation to selection within current file context
  const enhanced = await codebolt.tool('llm_enhance', {
    text: selection,
    context: { file: currentFile }
  });

  console.log('Enhanced text:', enhanced.returnDisplay);
}
```
