---
name: sendConfirmationRequest
cbbaseinfo:
  description: Sends a confirmation request to the server with customizable buttons.
cbparameters:
  parameters:
    - name: confirmationMessage
      typeName: string
      description: The message to display in the confirmation.
    - name: buttons
      typeName: string[]
      description: An array of button labels. Defaults to Yes/No if not specified.
    - name: withFeedback
      typeName: boolean
      description: Whether to allow additional feedback input. Default is false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the server's response.
    typeArgs:
      - type: string
        name: string
data:
  name: sendConfirmationRequest
  category: chat
  link: sendConfirmationRequest.md
---
<CBBaseInfo/> 
<CBParameters/>

## Response Structure

The `sendConfirmationRequest` function returns a response object with the following structure:

```js
{
  type: 'feedbackResponse',
  message: {
    type: 'messageResponse',
    userMessage: '',
    currentFile: '',
    mentionedFiles: [],
    mentionedFullPaths: [],
    mentionedFolders: [],
    actions: [],
    mentionedAgents: [],
    selectedAgent: { id: '', name: '', lastMessage: {} },
    universalAgentLastMessage: '',
    mentionedMultiFile: [],
    uploadedImages: [],
    selection: null,
    controlFiles: [],
    feedbackMessage: 'Yes', // The user's response/selection
    links: [],
    terminalMessage: '',
    messageId: 'q0onroq8puonkvang8u5g',
    threadId: '3de168de-d7f9-4c58-8650-4d3029b3477c',
    templateType: 'userChat',
    processId: '',
    mentionedMCPs: [],
    mentionedDocs: [],
    agentId: '6dd799b5-43c2-4c55-ba49-cae6cbac2498',
    agentInstanceId: 'b28af372-1e67-48cb-8018-2f60d60aa3db'
  },
  sender: { senderType: 'user', senderInfo: {} },
  templateType: 'userChat',
  data: { text: '' },
  messageId: 'msg_1750742836249_v01cpdk',
  timestamp: '2025-06-24T05:27:16.250Z'
}
```

### Key Response Fields

- **`feedbackMessage`**: Contains the user's actual response or button selection
- **`messageId`**: Unique identifier for the message
- **`threadId`**: Identifier for the conversation thread
- **`timestamp`**: When the response was received
- **`agentId`** and **`agentInstanceId`**: Identifiers for the agent handling the confirmation

### Examples

```js
// Example 1: Send a confirmation request with custom buttons
const response = await codebolt.chat.sendConfirmationRequest(
    "Would you like to continue with this operation?",
    ["Yes, continue", "No, cancel"],
    true
);

console.log("User response:", response);
// Access the actual user selection
const userChoice = response.message.feedbackMessage;
console.log("User selected:", userChoice);

// Example 2: Simple Yes/No confirmation (default buttons)
const confirmResponse = await codebolt.chat.sendConfirmationRequest(
    "Are you sure you want to delete this file?",
    [], // Uses default Yes/No buttons
    false
);

if (confirmResponse.message.feedbackMessage === "Yes") {
    console.log("User confirmed deletion");
} else {
    console.log("User cancelled deletion");
}

// Example 3: Multiple choice confirmation with feedback
const actionResponse = await codebolt.chat.sendConfirmationRequest(
    "How would you like to handle this conflict?",
    ["Overwrite", "Skip", "Merge", "Cancel"],
    true
);

const selectedAction = actionResponse.message.feedbackMessage;
console.log("Selected action:", selectedAction);

// Example 4: Processing confirmation response
const deployResponse = await codebolt.chat.sendConfirmationRequest(
    "Ready to deploy to production?",
    ["Deploy Now", "Schedule Later", "Cancel"],
    false
);

```

### Explanation

The `sendConfirmationRequest` function sends a confirmation request to the user with customizable buttons and optional feedback input. This is useful for getting user approval before performing operations or collecting simple input from the user. The function returns a comprehensive response object containing the user's selection and additional metadata for tracking and processing. 