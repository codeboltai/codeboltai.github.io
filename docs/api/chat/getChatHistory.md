---
name: getChatHistory
cbbaseinfo:
  description: Retrieves the chat history from the server.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: >-
      A promise that resolves with an array of ChatMessage objects representing
      the chat history.
    typeArgs:
      - type: array
        name: ChatMessage
data:
  name: getChatHistory
  category: chat
  link: getChatHistory.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Examples

```js
// Retrieve the chat history from the server
const chatHistory = await codebolt.chat.getChatHistory();

```

### Explanation

This function basically helps us get all the previous messages from our Codebolt chats. 