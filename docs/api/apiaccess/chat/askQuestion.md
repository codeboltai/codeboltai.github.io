---
name: askQuestion
cbbaseinfo:
  description: Asks a question to the user.
cbparameters:
  parameters:
    - name: question
      typeName: string
      description: The question text to present to the user.
    - name: buttons
      typeName: string[]
      description: An array of button labels. Defaults to an empty array if not specified.
    - name: withFeedback
      typeName: boolean
      description: Whether to allow additional feedback input. Default is false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the user's response.
    typeArgs:
      - type: intrinsic
        name: askQuestion 
data:
  name: askQuestion
  category: chat
  link: askQuestion.md
---
<CBBaseInfo/>
<CBParameters/>

## Response Structure

The `askQuestion` function returns a response object with the following structure:

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
    messageId: 'zhkmrrla0s9gjpf7pz7ipj',
    threadId: '3de168de-d7f9-4c58-8650-4d3029b3477c',
    templateType: 'userChat',
    processId: '',
    mentionedMCPs: [],
    mentionedDocs: [],
    agentId: '6dd799b5-43c2-4c55-ba49-cae6cbac2498',
    agentInstanceId: '3b1ab5e8-f367-4e19-9984-d20e6949aaed'
  },
  sender: { senderType: 'user', senderInfo: {} },
  templateType: 'userChat',
  data: { text: '' },
  messageId: 'msg_1750742351218_ol08itg',
  timestamp: '2025-06-24T05:19:11.218Z'
}
```

### Key Response Fields

- **`feedbackMessage`**: Contains the user's actual response or button selection
- **`messageId`**: Unique identifier for the message
- **`threadId`**: Identifier for the conversation thread
- **`timestamp`**: When the response was received
- **`agentId`** and **`agentInstanceId`**: Identifiers for the agent handling the question

### Examples

```js
// Example 1: Simple question with default options (no buttons)
const response1 = await codebolt.chat.askQuestion("What would you like to do next?");
console.log('User response:', response1);

// Example 2: Question with custom button options
const response2 = await codebolt.chat.askQuestion(
    "How would you like to proceed?",
    ["Continue", "Skip", "Cancel"]
);
console.log('Selected option:', response2);

// Example 3: Question with buttons and feedback input enabled
const response3 = await codebolt.chat.askQuestion(
    "Are you satisfied with the current results?",
    ["Yes", "No", "Need Improvements"],
    true
);
console.log('User feedback:', response3);

// Example 4: Configuration choice question
const configChoice = await codebolt.chat.askQuestion(
    "Which configuration would you like to use?",
    ["Development", "Staging", "Production"],
    false
);
console.log('Selected configuration:', configChoice);

// Example 5: Error handling with question
const errorAction = await codebolt.chat.askQuestion(
    "An error occurred during processing. What would you like to do?",
    ["Retry", "Skip this step", "Abort process"],
    true
);
console.log('Error action choice:', errorAction);

// Example 6: Accessing the feedback message from response
const userChoice = await codebolt.chat.askQuestion(
    "Do you want to continue?",
    ["Yes", "No"]
);
// Access the actual user selection
const selectedOption = userChoice.message.feedbackMessage;
console.log('User selected:', selectedOption);
```

### Explanation

- **Interactive Communication**: This function creates an interactive dialog with the user, pausing script execution until a response is received
- **Button Customization**: You can provide custom button labels to give users specific options to choose from
- **Feedback Option**: When `withFeedback` is true, users can provide additional text input along with their button selection
- **Asynchronous Operation**: The function returns a Promise that resolves with the user's response as a string
- **Default Behavior**: If no buttons are provided, the user can input free-form text as their response