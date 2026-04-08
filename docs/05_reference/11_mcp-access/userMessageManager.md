---
sidebar_position: 81
title: User Message Manager
description: Access and retrieve user message context and metadata
---

# User Message Manager

The User Message Manager MCP provides tools to access user message context, including the current message object, text content, processing configuration, and mentioned files. These tools enable agents to retrieve contextual information about the user's current request.

## Available Tools

- `user_message_get_current` - Get the current user message object
- `user_message_get_text` - Get the current user message text content
- `user_message_get_config` - Get user processing configuration
- `user_message_get_mentioned_files` - Get mentioned files from current user message

:::info
The user message context is automatically populated when a message is received through the `onMessage` callback. These tools provide access to this global state without requiring manual context passing.
:::

## Tool Parameters

### user_message_get_current

Retrieves the complete user message object containing all available message metadata.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns a `FlatUserMessage` object containing:

| Property | Type | Description |
|----------|------|-------------|
| `userMessage` | string | The full text content of the user message |
| `messageId` | string | Unique identifier for the message |
| `threadId` | string | Thread identifier the message belongs to |
| `mentionedMCPs` | string[] | List of mentioned MCP tool names |
| `mentionedFiles` | string[] | List of mentioned file paths |
| `mentionedFullPaths` | string[] | List of mentioned full file paths |
| `mentionedFolders` | string[] | List of mentioned folder paths |
| `mentionedAgents` | array | List of mentioned agents |
| `remixPrompt` | string | Remix prompt if present |
| `uploadedImages` | array | Array of uploaded image objects |
| `currentFile` | string | Current file context (if applicable) |
| `selection` | string | Selected text context (if applicable) |

### user_message_get_text

Retrieves only the text content of the current user message.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns a string containing the user's message text.

### user_message_get_config

Retrieves the user processing configuration that determines how different message components should be processed.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns a `UserProcessingConfig` object:

| Property | Type | Description |
|----------|------|-------------|
| `processMentionedMCPs` | boolean/function | Whether to process mentioned MCP tools |
| `processRemixPrompt` | boolean/function | Whether to process remix prompt |
| `processMentionedFiles` | boolean/function | Whether to process mentioned files |
| `processMentionedAgents` | boolean/function | Whether to process mentioned agents |

### user_message_get_mentioned_files

Retrieves all file paths mentioned in the current user message.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| None | - | - | No parameters required |

#### Return Value

Returns an array of strings containing file paths mentioned in the message. This combines both `mentionedFiles` and `mentionedFullPaths` from the message object.

## JavaScript Examples

### Example 1: Getting Current User Message Context

```javascript
// Retrieve the complete user message object
const messageResult = await codebolt.tools.executeTool(
  "userMessageManager",
  "user_message_get_current",
  {}
);

console.log('User Message:', messageResult.returnDisplay);
// Output: Full message object with messageId, threadId, mentioned files, etc.

if (messageResult.returnDisplay) {
  const message = JSON.parse(messageResult.returnDisplay);
  console.log('Message ID:', message.messageId);
  console.log('Thread ID:', message.threadId);
  console.log('Mentioned MCPs:', message.mentionedMCPs);
  console.log('Current File:', message.currentFile);
}
```

### Example 2: Getting Message Text Only

```javascript
// Retrieve just the text content of the user's message
const textResult = await codebolt.tools.executeTool(
  "userMessageManager",
  "user_message_get_text",
  {}
);

console.log('User said:', textResult.returnDisplay);
// Output: The raw text content of the user's message

// Use the text for processing or analysis
if (textResult.returnDisplay) {
  const userQuery = textResult.returnDisplay.toLowerCase();
  
  if (userQuery.includes('help') || userQuery.includes('assist')) {
    console.log('User is asking for help');
  }
  
  // Count word frequency
  const words = userQuery.split(/\s+/);
  console.log(`Message contains ${words.length} words`);
}
```

### Example 3: Processing Configuration and Mentioned Files

```javascript
// Get processing configuration
const configResult = await codebolt.tools.executeTool(
  "userMessageManager",
  "user_message_get_config",
  {}
);

const config = JSON.parse(configResult.returnDisplay);
console.log('Processing Config:', config);

// Get mentioned files
const filesResult = await codebolt.tools.executeTool(
  "userMessageManager",
  "user_message_get_mentioned_files",
  {}
);

const mentionedFiles = JSON.parse(filesResult.returnDisplay);
console.log('Mentioned files:', mentionedFiles);

// Process files if configured to do so
if (config.processMentionedFiles && mentionedFiles.length > 0) {
  console.log(`Processing ${mentionedFiles.length} mentioned files...`);
  
  for (const filePath of mentionedFiles) {
    // Read each mentioned file
    const fileContent = await codebolt.tools.executeTool(
      "file_utils",
      "file_read",
      { path: filePath }
    );
    console.log(`Content of ${filePath}:`, fileContent.returnDisplay);
  }
}
```

### Example 4: Complete Context Analysis

```javascript
// Comprehensive analysis of user message context
async function analyzeUserContext() {
  // Get full message context
  const messageResult = await codebolt.tools.executeTool(
    "userMessageManager",
    "user_message_get_current",
    {}
  );
  
  const message = JSON.parse(messageResult.returnDisplay);
  
  // Get processing configuration
  const configResult = await codebolt.tools.executeTool(
    "userMessageManager",
    "user_message_get_config",
    {}
  );
  
  const config = JSON.parse(configResult.returnDisplay);
  
  // Build context summary
  const contextSummary = {
    messageText: message.userMessage,
    messageId: message.messageId,
    threadId: message.threadId,
    mentionedResources: {
      mcpTools: message.mentionedMCPs || [],
      files: message.mentionedFiles || [],
      folders: message.mentionedFolders || [],
      agents: message.mentionedAgents || []
    },
    processing: config,
    additionalContext: {
      currentFile: message.currentFile,
      selection: message.selection,
      remixPrompt: message.remixPrompt,
      uploadedImages: message.uploadedImages?.length || 0
    }
  };
  
  console.log('Context Analysis:', JSON.stringify(contextSummary, null, 2));
  
  // Make decisions based on context
  if (contextSummary.mentionedResources.mcpTools.length > 0) {
    console.log('Processing mentioned MCP tools...');
    // Handle MCP tool processing
  }
  
  if (contextSummary.mentionedResources.files.length > 0) {
    console.log('Processing mentioned files...');
    // Handle file processing
  }
  
  if (contextSummary.additionalContext.selection) {
    console.log('User has selected text:', contextSummary.additionalContext.selection);
    // Handle selected text context
  }
  
  return contextSummary;
}

// Execute the analysis
const analysis = await analyzeUserContext();
```

## Error Handling

All tools return consistent error handling:

- If no current user message exists, `user_message_get_current` returns a message indicating no message is available
- All tools include error information in the response if execution fails
- Errors are returned in both `llmContent` and `returnDisplay` fields for visibility

### Example Error Handling

```javascript
const result = await codebolt.tools.executeTool(
  "userMessageManager",
  "user_message_get_current",
  {}
);

if (result.error) {
  console.error('Failed to get user message:', result.error.message);
  // Handle error appropriately
} else if (result.returnDisplay === 'No current user message') {
  console.warn('No user message context available');
  // Handle missing context
} else {
  // Process successful result
  const message = JSON.parse(result.returnDisplay);
  console.log('Message retrieved successfully');
}
```

## Best Practices

1. **Always check for message existence** - Call `user_message_get_current` first to verify a message is available
2. **Use appropriate tools** - Use `user_message_get_text` for simple text access instead of parsing the full message object
3. **Respect processing configuration** - Check `user_message_get_config` before processing mentioned resources
4. **Handle empty results gracefully** - Mentioned files or MCPs arrays may be empty
5. **Use context for intelligent decisions** - Leverage the complete message context to provide more relevant responses

## Related Tools

- `codebolt.file_utils` - For reading mentioned file contents
- `codebolt.context` - For managing context rule engines
- `codebolt.memory` - For storing and retrieving contextual information
