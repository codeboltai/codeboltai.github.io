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