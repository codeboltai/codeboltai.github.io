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

### Example: 

```js

const message = await codebolt.chat.waitforReply(message: string)

```

### Explaination 

The codebolt.chat.waitforReply(message: string) function is used to send a message  on the codebolt chat and wait for the reply. This function enables real-time communication by allowing the script to send text messages on the codebolt chat. This function returns the reply message, which we can store in a variable and use.

