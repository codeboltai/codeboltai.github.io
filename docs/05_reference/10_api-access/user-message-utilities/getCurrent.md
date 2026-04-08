---
name: getCurrent
cbbaseinfo:
  description: Gets the current user message object containing all message data.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "FlatUserMessage | undefined"
    description: The current user message object or undefined if no message is set.
    typeArgs: []
data:
  name: getCurrent
  category: user-message-utilities
  link: getCurrent.md
---
# getCurrent

```typescript
codebolt.user-message-utilities.getCurrent(): FlatUserMessage | undefined
```

Gets the current user message object containing all message data.
### Returns

- **`FlatUserMessage | undefined`**: The current user message object or undefined if no message is set.

### Response Structure

Returns a [`FlatUserMessage`](/docs/api/11_doc-type-ref/types/interfaces/FlatUserMessage) object or `undefined`:

**FlatUserMessage Properties:**
- `userMessage`: The text content of the user's message
- `messageId`: Unique identifier for the message
- `threadId`: Thread identifier for conversation context
- `mentionedMCPs`: Array of mentioned MCP tool names
- `mentionedFiles`: Array of mentioned file names
- `mentionedFullPaths`: Array of mentioned file paths
- `mentionedFolders`: Array of mentioned folder paths
- `mentionedAgents`: Array of mentioned agent objects
- `remixPrompt`: Optional remix prompt for code modification
- `uploadedImages`: Array of uploaded image objects
- `currentFile`: Path of the currently open file
- `selection`: Currently selected text
- `timestamp`: When the message was received

### Examples

#### Example 1: Get Current Message

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

// Retrieve the current message
const message = userMessageUtilities.getCurrent();

if (message) {
  console.log('Message ID:', message.messageId);
  console.log('Thread ID:', message.threadId);
  console.log('User said:', message.userMessage);
  console.log('Mentioned files:', message.mentionedFiles);
  console.log('Mentioned MCPs:', message.mentionedMCPs);
} else {
  console.log('No current message available');
}
```

**Explanation**: This is the simplest way to retrieve the complete message object. Always check if the message exists before accessing its properties.

#### Example 2: Analyze Message Content

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

function analyzeUserMessage() {
  const message = userMessageUtilities.getCurrent();

  if (!message) {
    return { error: 'No message available' };
  }

  const analysis = {
    content: {
      text: message.userMessage,
      wordCount: message.userMessage.split(/\s+/).length,
      charCount: message.userMessage.length
    },
    context: {
      hasCurrentFile: !!message.currentFile,
      hasSelection: !!message.selection,
      hasRemixPrompt: !!message.remixPrompt
    },
    mentions: {
      files: message.mentionedFiles.length,
      folders: message.mentionedFolders.length,
      mcpTools: message.mentionedMCPs.length,
      agents: message.mentionedAgents.length
    },
    attachments: {
      images: message.uploadedImages.length
    },
    metadata: {
      messageId: message.messageId,
      threadId: message.threadId,
      timestamp: message.timestamp
    }
  };

  return analysis;
}

// Usage
const analysis = analyzeUserMessage();
console.log('Message analysis:', analysis);
```

**Explanation**: This example performs a comprehensive analysis of the message, extracting content statistics, context information, and mention counts.

#### Example 3: Message for AI Processing

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

function prepareMessageForAI() {
  const message = userMessageUtilities.getCurrent();

  if (!message) {
    throw new Error('No message to process');
  }

  // Build context object for AI
  const aiContext = {
    query: message.userMessage,
    conversation: {
      messageId: message.messageId,
      threadId: message.threadId
    },
    resources: {
      files: message.mentionedFiles,
      folders: message.mentionedFolders,
      tools: message.mentionedMCPs
    },
    editor: {
      currentFile: message.currentFile,
      selection: message.selection
    },
    special: {
      remixPrompt: message.remixPrompt,
      images: message.uploadedImages
    }
  };

  return aiContext;
}

// Usage
try {
  const context = prepareMessageForAI();
  console.log('AI Context:', JSON.stringify(context, null, 2));
} catch (error) {
  console.error('Error:', error.message);
}
```

**Explanation**: This example prepares the message data for AI processing, structuring it into a clean context object.

#### Example 4: Message Comparison

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

let lastMessageId = null;

function checkMessageChanged() {
  const message = userMessageUtilities.getCurrent();

  if (!message) {
    return { changed: false, reason: 'No message' };
  }

  if (!lastMessageId) {
    lastMessageId = message.messageId;
    return { changed: true, reason: 'First message' };
  }

  if (message.messageId !== lastMessageId) {
    const changed = {
      changed: true,
      reason: 'New message',
      previousId: lastMessageId,
      newId: message.messageId,
      threadChanged: message.threadId
    };
    lastMessageId = message.messageId;
    return changed;
  }

  return { changed: false, reason: 'Same message' };
}

// Usage
const status = checkMessageChanged();
console.log('Message status:', status);
```

**Explanation**: This example tracks message changes by comparing message IDs, useful for detecting new user input.

#### Example 5: Export Message Data

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

function exportMessageData() {
  const message = userMessageUtilities.getCurrent();

  if (!message) {
    return null;
  }

  // Create a clean export object
  const exportData = {
    timestamp: new Date().toISOString(),
    message: {
      id: message.messageId,
      threadId: message.threadId,
      text: message.userMessage,
      receivedAt: message.timestamp
    },
    mentions: {
      files: message.mentionedFiles,
      fullPaths: message.mentionedFullPaths,
      folders: message.mentionedFolders,
      mcpTools: message.mentionedMCPs,
      agents: message.mentionedAgents.map(a => ({
        id: a.id,
        name: a.name
      }))
    },
    context: {
      currentFile: message.currentFile,
      selection: message.selection,
      remixPrompt: message.remixPrompt
    },
    attachments: {
      images: message.uploadedImages.map(img => ({
        name: img.name,
        type: img.type,
        size: img.size
      }))
    }
  };

  return exportData;
}

// Usage
const exported = exportMessageData();
if (exported) {
  console.log('Exported message:', JSON.stringify(exported, null, 2));
}
```

**Explanation**: This example exports the message data in a clean, structured format suitable for logging, storage, or transmission.

#### Example 6: Message Validation

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

function validateCurrentMessage() {
  const message = userMessageUtilities.getCurrent();

  const validation = {
    valid: true,
    warnings: [],
    errors: []
  };

  if (!message) {
    validation.valid = false;
    validation.errors.push('No message available');
    return validation;
  }

  // Check required fields
  if (!message.userMessage || message.userMessage.trim().length === 0) {
    validation.errors.push('Message text is empty');
    validation.valid = false;
  }

  if (!message.messageId) {
    validation.errors.push('Missing message ID');
    validation.valid = false;
  }

  // Check for potential issues
  if (message.mentionedFiles.length > 0 && !message.currentFile) {
    validation.warnings.push('Files mentioned but no current file in context');
  }

  if (message.selection && !message.currentFile) {
    validation.warnings.push('Selection present but no current file');
  }

  if (message.uploadedImages.length > 5) {
    validation.warnings.push('Large number of images attached');
  }

  return validation;
}

// Usage
const validation = validateCurrentMessage();
if (!validation.valid) {
  console.error('Validation errors:', validation.errors);
}
if (validation.warnings.length > 0) {
  console.warn('Validation warnings:', validation.warnings);
}
```

**Explanation**: This example performs comprehensive validation of the message, checking for required fields and potential issues.

### Common Use Cases

**1. Deep Message Inspection**: Examine all message properties.

```js
function inspectMessage() {
  const message = userMessageUtilities.getCurrent();
  console.log('Complete message:', JSON.stringify(message, null, 2));
}
```

**2. Message Routing**: Route based on message content.

```js
function routeMessage() {
  const message = userMessageUtilities.getCurrent();

  if (!message) return 'no-message';

  if (message.mentionedMCPs.length > 0) return 'mcp-request';
  if (message.mentionedFiles.length > 0) return 'file-operation';
  if (message.remixPrompt) return 'code-remix';
  return 'general-query';
}
```

**3. Context Building**: Build rich context for operations.

```js
function buildOperationContext() {
  const message = userMessageUtilities.getCurrent();

  return {
    userIntent: message.userMessage,
    resources: {
      files: message.mentionedFiles,
      tools: message.mentionedMCPs
    },
    editor: message.currentFile,
    selection: message.selection
  };
}
```

**4. Message Logging**: Log complete message for audit.

```js
function logMessage() {
  const message = userMessageUtilities.getCurrent();

  logger.info('User message', {
    id: message.messageId,
    text: message.userMessage,
    mentions: {
      files: message.mentionedFiles.length,
      mcp: message.mentionedMCPs.length
    }
  });
}
```

### Notes

- Returns `undefined` if no message has been saved
- The message object is a snapshot at the time of the call
- Subsequent changes to the manager are not reflected in returned objects
- The message contains all available information about the user's request
- Use `hasMessage()` to check for existence before calling `getCurrent()`
- Message IDs are unique within a thread
- Thread IDs group related messages in conversations
- Timestamps are in ISO 8601 format
- Mention arrays are empty (not undefined) when no mentions exist
- The `remixPrompt` field is only present for code remix requests
- Uploaded images are objects with metadata (name, type, size, data)
- The message is read-only - don't modify properties directly
- Each new message overwrites the previous one in the manager
- Call `clear()` to free memory after processing
- The message automatically persists until cleared
- All file paths are relative to the workspace root unless absolute