---
name: UserMessage
cbbaseinfo:
  description: Handles user message processing with file/environment context attachment
cbparameters:
  parameters:
    - name: message
      typeName: Message
      description: Message object containing user input and file/MCP references
    - name: promptOverride
      typeName: boolean
      description: Flag to enable custom prompt rendering (default false)
  returns:
    signatureTypeName: UserMessage
    description: Configured message processor with context attachment capabilities
    typeArgs: []
data:
  name: UserMessage
  category: message-processing
  link: UserMessage.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
import { UserMessage } from './usermessage';

// Create a message with file references
const message = {
  userMessage: "Please analyze these config files",
  mentionedFiles: ["/src/config/app.json"],
  mentionedMCPs: ["config-validator"]
};

// Initialize processor
const userMsgProcessor = new UserMessage(message);

// Generate full context prompt
const fullPrompt = await userMsgProcessor.toPrompt(
  true,   // Attach files
  false,  // Skip images
  true    // Include environment
);

console.log("Context-rich prompt:", fullPrompt);