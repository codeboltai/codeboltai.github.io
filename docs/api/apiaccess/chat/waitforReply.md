---
name: waitforReply
cbbaseinfo:
  description: Waits for a reply to a sent message.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The message for which a reply is expected.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the reply.
    typeArgs:
      - type: intrinsic
        name: string
data:
  name: waitforReply
  category: chat
  link: waitforReply.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `UserMessage` object with the following properties:

- **`type`** (string): The type of the WebSocket response.
- **`id`** (string): Unique identifier for the message.
- **`content`** (string): The actual message content/text from the user.
- **`sender`** (string): Always "user" for this response.
- **`timestamp`** (string): When the message was sent (ISO 8601 format).
- **`text`** (string, optional): The text content of the message.
- **`images`** (array, optional): Any images included in the message.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Example: 

```js

const message = await codebolt.chat.waitforReply(message: string)

```

### Explaination 

The codebolt.chat.waitforReply(message: string) function is used to send a message  on the codebolt chat and wait for the reply. This function enables real-time communication by allowing the script to send text messages on the codebolt chat. This function returns the reply message, which we can store in a variable and use.

