---
cbapicategory:
  - name: getCurrentUserMessage
    link: /docs/api/apiaccess/user-message-manager/getCurrentUserMessage
    description: Gets the current user message object.
  - name: getUserMessageText
    link: /docs/api/apiaccess/user-message-manager/getUserMessageText
    description: Gets the text content of the current user message.
  - name: getUserProcessingConfig
    link: /docs/api/apiaccess/user-message-manager/getUserProcessingConfig
    description: Gets the processing configuration for the current message.
  - name: getMentionedMCPs
    link: /docs/api/apiaccess/user-message-manager/getMentionedMCPs
    description: Gets mentioned MCP tools from the current message.
  - name: getMentionedFiles
    link: /docs/api/apiaccess/user-message-manager/getMentionedFiles
    description: Gets mentioned file paths from the current message.
  - name: getMentionedAgents
    link: /docs/api/apiaccess/user-message-manager/getMentionedAgents
    description: Gets mentioned agents from the current message.
  - name: getRemixPrompt
    link: /docs/api/apiaccess/user-message-manager/getRemixPrompt
    description: Gets the remix prompt from the current message.
  - name: clearUserMessage
    link: /docs/api/apiaccess/user-message-manager/clearUserMessage
    description: Clears the current user message state.
  - name: hasCurrentUserMessage
    link: /docs/api/apiaccess/user-message-manager/hasCurrentUserMessage
    description: Checks if there is a current user message.
---

# User Message Manager API

The User Message Manager API provides access to the current user message context, enabling agents to understand what the user is requesting, what resources they've mentioned, and how to process their message.

## Overview

The user message manager enables you to:
- **Access Message Content**: Get the user's message text and metadata
- **Extract Mentions**: Retrieve mentioned files, MCPs, agents, and folders
- **Processing Configuration**: Get and update processing settings
- **Session Data**: Store and retrieve session-specific data
- **Message State**: Check if a message exists and clear when done

## What is the User Message Manager?

The User Message Manager is a global singleton that automatically captures the user's message when an agent receives it through the `onMessage` handler. It provides convenient access to all aspects of the user's request without needing to pass the message object through multiple function calls.

## Message Context

When a user sends a message to an agent, the message may contain:

- **Text**: The main message content
- **Mentions**: References to files (@file.ts), MCPs (@mcp), agents (@agent)
- **Remix Prompts**: Special prompts for code modification
- **Uploaded Images**: Attached image files
- **Current File**: The file currently open in the editor
- **Selection**: Selected text in the editor
- **Thread/Message IDs**: Conversation context

## Quick Start Example

```js
import { userMessageManager } from '@codebolt/codeboltjs';

// In your agent's onMessage handler
async function onMessage(message) {
  // Save the message (done automatically in most cases)
  userMessageManager.saveMessage(message);

  // Access message content
  const text = userMessageManager.getMessageText();
  console.log('User said:', text);

  // Check for mentions
  const files = userMessageManager.getMentionedFiles();
  const mcpTools = userMessageManager.getMentionedMCPs();

  if (files.length > 0) {
    console.log('User mentioned files:', files);
  }

  if (mcpTools.length > 0) {
    console.log('User mentioned MCP tools:', mcpTools);
  }

  // Process based on configuration
  const config = userMessageManager.getConfig();
  if (config.processMentionedFiles) {
    // Process mentioned files
  }

  // Clear when done
  userMessageManager.clear();
}
```

## Processing Configuration

The user processing config (AgentProcessingConfig) determines how the message should be processed:

```js
{
  processMentionedMCPs: boolean | function,
  processRemixPrompt: boolean | function,
  processMentionedFiles: boolean | function,
  processMentionedAgents: boolean | function
}
```

## Best Practices

1. **Check Before Accessing**: Always use `hasMessage()` before accessing message data
2. **Clear When Done**: Call `clear()` after processing to free memory
3. **Use Session Data**: Store temporary processing state with `setSessionData()`
4. **Auto-detection**: Let the manager auto-detect configuration when possible
5. **Thread Safety**: The manager is a singleton - be careful in concurrent scenarios

<CBAPICategory />
