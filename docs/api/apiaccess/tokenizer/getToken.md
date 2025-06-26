---
name: getToken
cbbaseinfo:
  description: Retrieves a token by its key from the system.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key associated with the token to be retrieved.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the token response.
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

## Response Structure

```javascript
{
  type: 'getTokenResponse',
  token: string // The original token key/value
}
```

## Example

```js
import codebolt from '@codebolt/codeboltjs';

async function getTokenExample() {
    try {
        const response = await codebolt.tokenizer.getToken("api_key_1");
        console.log("Token retrieved:", response);
        // Output: {
        //   type: 'getTokenResponse',
        //   token: 'api_key_1'
        // }
    } catch (error) {
        console.error("Failed to retrieve token:", error);
    }
}

getTokenExample();
```