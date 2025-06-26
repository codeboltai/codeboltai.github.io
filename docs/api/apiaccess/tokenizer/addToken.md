---
name: addToken
cbbaseinfo:
  description: Adds a token to the system and returns tokenized array.
cbparameters:
  parameters:
    - name: key
      typeName: string
      description: The key/string to be tokenized.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the tokenization response.
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

## Response Structure

```javascript
{
  type: 'addTokenResponse',
  message: 'success',
  tokens: number[] // Array of token IDs
}
```

## Example

```js
import codebolt from '@codebolt/codeboltjs';

async function addTokenExample() {
    try {
        const response = await codebolt.tokenizer.addToken("api_key_1");
        console.log("Token added:", response);
        // Output: {
        //   type: 'addTokenResponse',
        //   message: 'success', 
        //   tokens: [15042, 62, 2539, 62, 16]
        // }
    } catch (error) {
        console.error("Failed to add token:", error);
    }
}

addTokenExample();
```