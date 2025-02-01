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



### Example 

```js
import codebolt from '@codebolt/codeboltjs';
async function exampleGetToken() {
  try {
    const response = await codebolt.tokenizer.getToken("myTokenKey");
    console.log("Token retrieved successfully:", response);
    catch (error) {
      console.error("Failed to retrieve token:", error);
      }
  }
}

```