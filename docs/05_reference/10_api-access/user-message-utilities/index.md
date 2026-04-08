---
cbapicategory:
  - name: getCurrent
    link: /docs/api/apiaccess/user-message-utilities/getCurrent
    description: Gets the current user message object.
  - name: getText
    link: /docs/api/apiaccess/user-message-utilities/getText
    description: Gets the text content of the current user message.
  - name: getMentionedMCPs
    link: /docs/api/apiaccess/user-message-utilities/getMentionedMCPs
    description: Gets mentioned MCP tools from the current message.
  - name: getMentionedFiles
    link: /docs/api/apiaccess/user-message-utilities/getMentionedFiles
    description: Gets mentioned file paths from the current message.
  - name: getMentionedFolders
    link: /docs/api/apiaccess/user-message-utilities/getMentionedFolders
    description: Gets mentioned folder paths from the current message.
  - name: getMentionedAgents
    link: /docs/api/apiaccess/user-message-utilities/getMentionedAgents
    description: Gets mentioned agents from the current message.
  - name: getRemixPrompt
    link: /docs/api/apiaccess/user-message-utilities/getRemixPrompt
    description: Gets the remix prompt from the current message.
  - name: getUploadedImages
    link: /docs/api/apiaccess/user-message-utilities/getUploadedImages
    description: Gets uploaded images from the current message.
  - name: getCurrentFile
    link: /docs/api/apiaccess/user-message-utilities/getCurrentFile
    description: Gets the current file path from the message.
  - name: getSelection
    link: /docs/api/apiaccess/user-message-utilities/getSelection
    description: Gets the text selection from the message.
  - name: getMessageId
    link: /docs/api/apiaccess/user-message-utilities/getMessageId
    description: Gets the message ID from the current message.
  - name: getThreadId
    link: /docs/api/apiaccess/user-message-utilities/getThreadId
    description: Gets the thread ID from the current message.
  - name: getProcessingConfig
    link: /docs/api/apiaccess/user-message-utilities/getProcessingConfig
    description: Gets the processing configuration.
  - name: isProcessingEnabled
    link: /docs/api/apiaccess/user-message-utilities/isProcessingEnabled
    description: Checks if a specific processing type is enabled.
  - name: setSessionData
    link: /docs/api/apiaccess/user-message-utilities/setSessionData
    description: Sets session data for the current message.
  - name: getSessionData
    link: /docs/api/apiaccess/user-message-utilities/getSessionData
    description: Gets session data for the current message.
  - name: getTimestamp
    link: /docs/api/apiaccess/user-message-utilities/getTimestamp
    description: Gets the timestamp when the message was received.
  - name: hasMessage
    link: /docs/api/apiaccess/user-message-utilities/hasMessage
    description: Checks if there is a current message.
  - name: updateProcessingConfig
    link: /docs/api/apiaccess/user-message-utilities/updateProcessingConfig
    description: Updates the processing configuration.
  - name: clear
    link: /docs/api/apiaccess/user-message-utilities/clear
    description: Clears the current user message.
---

# User Message Utilities API

The User Message Utilities API provides a convenient, object-based interface for accessing all aspects of the current user message. It wraps the User Message Manager with a cleaner, more intuitive API.

## Overview

The user message utilities enable you to:
- **Access Message Data**: Get message text, IDs, and metadata
- **Extract Mentions**: Retrieve mentioned files, folders, MCPs, and agents
- **Get Context**: Access current file, selection, and images
- **Manage Configuration**: View and update processing settings
- **Session Management**: Store and retrieve session-specific data

## User Message Utilities vs User Message Manager

The **User Message Utilities** provide a cleaner, object-based API:

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

// Utilities API (preferred)
const text = userMessageUtilities.getText();
const files = userMessageUtilities.getMentionedFiles();
```

The **User Message Manager** provides function-based exports:

```js
import { getUserMessageText, getMentionedFiles } from '@codebolt/codeboltjs';

// Manager API
const text = getUserMessageText();
const files = getMentionedFiles();
```

Both APIs access the same underlying data. Choose the one you prefer.

## Quick Start Example

```js
import { userMessageUtilities } from '@codebolt/codeboltjs';

// Check if there's a message
if (userMessageUtilities.hasMessage()) {
  // Get message text
  const text = userMessageUtilities.getText();
  console.log('User said:', text);

  // Get mentions
  const files = userMessageUtilities.getMentionedFiles();
  const mcpTools = userMessageUtilities.getMentionedMCPs();

  console.log('Files mentioned:', files);
  console.log('MCP tools mentioned:', mcpTools);

  // Get context
  const currentFile = userMessageUtilities.getCurrentFile();
  const selection = userMessageUtilities.getSelection();

  if (currentFile) {
    console.log('Working in file:', currentFile);
  }

  if (selection) {
    console.log('Selected text:', selection);
  }

  // Store session data
  userMessageUtilities.setSessionData('processingStart', Date.now());

  // Check processing config
  const shouldProcessFiles = userMessageUtilities.isProcessingEnabled('processMentionedFiles');
  console.log('Process files?', shouldProcessFiles);

  // Clear when done
  userMessageUtilities.clear();
}
```

## API Categories

### 1. Message Access
- `getCurrent()` - Get complete message object
- `getText()` - Get message text content
- `getMessageId()` - Get message ID
- `getThreadId()` - Get thread ID
- `getTimestamp()` - Get message timestamp
- `hasMessage()` - Check if message exists

### 2. Mentions
- `getMentionedFiles()` - Get mentioned file paths
- `getMentionedFolders()` - Get mentioned folder paths
- `getMentionedMCPs()` - Get mentioned MCP tools
- `getMentionedAgents()` - Get mentioned agents

### 3. Context
- `getCurrentFile()` - Get current file path
- `getSelection()` - Get selected text
- `getUploadedImages()` - Get uploaded images
- `getRemixPrompt()` - Get remix prompt

### 4. Configuration
- `getProcessingConfig()` - Get processing configuration
- `isProcessingEnabled()` - Check if processing is enabled
- `updateProcessingConfig()` - Update processing configuration

### 5. Session Data
- `setSessionData()` - Store session data
- `getSessionData()` - Retrieve session data

### 6. Cleanup
- `clear()` - Clear message state

## Best Practices

1. **Always Check First**: Use `hasMessage()` before accessing data
2. **Use Object API**: Prefer `userMessageUtilities` for cleaner code
3. **Clean Up**: Call `clear()` when done processing
4. **Session Data**: Use session data for temporary state
5. **Type Safety**: Check return values (may be undefined)

<CBAPICategory />
