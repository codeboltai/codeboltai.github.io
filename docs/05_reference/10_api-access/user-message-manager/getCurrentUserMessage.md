---
name: getCurrentUserMessage
cbbaseinfo:
  description: Gets the current user message object containing all message data.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "FlatUserMessage | undefined"
    description: The current user message object or undefined if no message is set.
    typeArgs: []
data:
  name: getCurrentUserMessage
  category: user-message-manager
  link: getCurrentUserMessage.md
---
# getCurrentUserMessage

```typescript
codebolt.user-message-manager.getCurrentUserMessage(): FlatUserMessage | undefined
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
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

// Retrieve the current message
const message = getCurrentUserMessage();

if (message) {
  console.log('Message ID:', message.messageId);
  console.log('Thread ID:', message.threadId);
  console.log('User said:', message.userMessage);
  console.log('Mentioned files:', message.mentionedFiles);
} else {
  console.log('No current message');
}
```

**Explanation**: This example retrieves the current user message and logs its properties. Always check if the message exists before accessing its properties.

#### Example 2: Check Message Context

```js
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

function analyzeMessageContext() {
  const message = getCurrentUserMessage();

  if (!message) {
    return { hasContext: false };
  }

  return {
    hasContext: true,
    hasMentions: {
      files: message.mentionedFiles.length > 0,
      mcp: message.mentionedMCPs.length > 0,
      agents: message.mentionedAgents.length > 0,
      folders: message.mentionedFolders.length > 0
    },
    hasRemixPrompt: !!message.remixPrompt,
    hasImages: message.uploadedImages.length > 0,
    hasSelection: !!message.selection,
    currentFile: message.currentFile
  };
}

// Usage
const context = analyzeMessageContext();
console.log('Message context:', context);
```

**Explanation**: This example analyzes the message context to determine what types of content and mentions are present.

#### Example 3: Extract Message Metadata

```js
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

function getMessageMetadata() {
  const message = getCurrentUserMessage();

  if (!message) {
    return null;
  }

  return {
    id: message.messageId,
    threadId: message.threadId,
    timestamp: message.timestamp,
    contentLength: message.userMessage.length,
    mentionCounts: {
      files: message.mentionedFiles.length,
      mcp: message.mentionedMCPs.length,
      agents: message.mentionedAgents.length,
      folders: message.mentionedFolders.length
    },
    hasAttachments: message.uploadedImages.length > 0,
    hasCodeContext: !!message.currentFile || !!message.selection
  };
}

// Usage
const metadata = getMessageMetadata();
console.log('Message metadata:', metadata);
```

**Explanation**: This example extracts structured metadata from the message for logging or analysis.

#### Example 4: Message Validation

```js
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

function validateMessage() {
  const message = getCurrentUserMessage();

  const validation = {
    isValid: true,
    errors: []
  };

  if (!message) {
    validation.isValid = false;
    validation.errors.push('No message available');
    return validation;
  }

  // Check required fields
  if (!message.userMessage || message.userMessage.trim().length === 0) {
    validation.isValid = false;
    validation.errors.push('Message text is empty');
  }

  if (!message.messageId) {
    validation.isValid = false;
    validation.errors.push('Missing message ID');
  }

  // Check for context issues
  if (message.mentionedFiles.length > 0 && !message.currentFile) {
    validation.errors.push('File mentions but no current file context');
  }

  return validation;
}

// Usage
const validation = validateMessage();
if (!validation.isValid) {
  console.error('Message validation failed:', validation.errors);
}
```

**Explanation**: This example validates the message structure and content, checking for required fields and logical consistency.

#### Example 5: Message Comparison

```js
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

let previousMessage = null;

function checkForNewMessage() {
  const currentMessage = getCurrentUserMessage();

  if (!currentMessage) {
    return { isNew: false, reason: 'No current message' };
  }

  if (!previousMessage) {
    previousMessage = currentMessage;
    return { isNew: true, reason: 'First message' };
  }

  if (currentMessage.messageId !== previousMessage.messageId) {
    const diff = {
      isNew: true,
      reason: 'Different message ID',
      previousId: previousMessage.messageId,
      newId: currentMessage.messageId
    };
    previousMessage = currentMessage;
    return diff;
  }

  return { isNew: false, reason: 'Same message' };
}

// Usage
const check = checkForNewMessage();
console.log('Message check:', check);
```

**Explanation**: This example compares the current message with a previously stored message to detect new messages.

#### Example 6: Format Message for Display

```js
import { getCurrentUserMessage } from '@codebolt/codeboltjs';

function formatMessageForDisplay() {
  const message = getCurrentUserMessage();

  if (!message) {
    return 'No message available';
  }

  let display = `Message ID: ${message.messageId}\n`;
  display += `Thread: ${message.threadId}\n`;
  display += `\n${message.userMessage}\n`;

  if (message.mentionedFiles.length > 0) {
    display += `\n📎 Files:\n`;
    message.mentionedFiles.forEach(file => {
      display += `  - ${file}\n`;
    });
  }

  if (message.mentionedMCPs.length > 0) {
    display += `\n🔧 MCP Tools:\n`;
    message.mentionedMCPs.forEach(mcp => {
      display += `  - ${mcp}\n`;
    });
  }

  if (message.currentFile) {
    display += `\n📄 Current File: ${message.currentFile}\n`;
  }

  if (message.selection) {
    display += `\n✂️ Selection:\n${message.selection}\n`;
  }

  return display;
}

// Usage
const formatted = formatMessageForDisplay();
console.log(formatted);
```

**Explanation**: This example formats the message for human-readable display, including all mentions and context.

### Common Use Cases

**1. Logging and Debugging**: Log complete message context.

```js
function logMessageContext() {
  const message = getCurrentUserMessage();
  if (message) {
    console.log('Full message context:', JSON.stringify(message, null, 2));
  }
}
```

**2. Message Processing Pipeline**: Pass message to processing functions.

```js
async function processUserMessage() {
  const message = getCurrentUserMessage();

  if (!message) {
    throw new Error('No message to process');
  }

  // Process in stages
  await validateMessageContent(message);
  await extractIntent(message);
  await executeRequest(message);
}
```

**3. Context Injection**: Add message context to prompts.

```js
function buildPromptWithContext() {
  const message = getCurrentUserMessage();

  const context = {
    userQuery: message?.userMessage,
    mentionedFiles: message?.mentionedFiles || [],
    currentFile: message?.currentFile,
    selection: message?.selection
  };

  return `Context: ${JSON.stringify(context)}\n\nProcess the user's request.`;
}
```

**4. Message Archiving**: Store messages for later reference.

```js
const messageHistory = [];

function archiveMessage() {
  const message = getCurrentUserMessage();
  if (message) {
    messageHistory.push({
      ...message,
      archivedAt: new Date().toISOString()
    });
  }
}
```

### Notes

- Returns `undefined` if no message has been saved
- The message object is read-only - don't modify it directly
- The message persists until `clear()` is called
- Each new message overwrites the previous one
- Message IDs are unique within a thread
- Thread IDs group related messages in a conversation
- Timestamps are in ISO 8601 format
- Mention arrays are empty if no mentions are present
- The `remixPrompt` is only present for code remix requests
- Uploaded images are represented as objects with metadata
- The `selection` contains the text selected in the editor
- Use `hasCurrentUserMessage()` to check for message existence
- The message is automatically saved by the `onMessage` handler in most cases