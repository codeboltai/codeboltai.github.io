---
name: addToken
cbbaseinfo:
  description: Adds a token to the system via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key associated with the token to be added.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the add token event.
    typeArgs:
      - type: reference
        name: AddTokenResponse
data:
  name: addToken
  category: tokenizer
  link: addToken.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Status 

Working Progress...