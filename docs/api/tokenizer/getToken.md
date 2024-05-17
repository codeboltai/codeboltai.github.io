---
name: getToken
cbbaseinfo:
  description: Retrieves a token from the system via WebSocket.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key associated with the token to be retrieved.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the response from the get token event.
    typeArgs:
      - type: reference
        name: GetTokenResponse
data:
  name: getToken
  category: tokenizer
  link: getToken.md
---
<CBBaseInfo/> 
 <CBParameters/>