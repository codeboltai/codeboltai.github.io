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
    signatureTypeName: Promise<AddTokenResponse>
    description: A promise that resolves with an `AddTokenResponse` object containing the tokenization response.
data:
  name: addToken
  category: tokenizer
  link: addToken.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `AddTokenResponse` object with the following properties:

- **`type`** (string): Always "addTokenResponse".
- **`token`** (string, optional): The token that was added to the system.
- **`count`** (number, optional): The count or number of tokens processed.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic token addition
const result = await codebolt.tokenizer.addToken("api_key_1");
console.log("Response type:", result.type); // "addTokenResponse"
console.log("Token added:", result.token); // "api_key_1"
console.log("Token count:", result.count); // Number of tokens processed

// Example 2: Add a complex token
const tokenResult = await codebolt.tokenizer.addToken("user_session_token_12345");
if (tokenResult.success) {
    console.log("✅ Token added successfully");
    console.log("Token:", tokenResult.token);
    console.log("Count:", tokenResult.count);
} else {
    console.error("❌ Failed to add token:", tokenResult.error);
}

// Example 3: Error handling
try {
    const response = await codebolt.tokenizer.addToken("my_token");
    
    if (response.success && response.token) {
        console.log('✅ Token added successfully');
        console.log('Token:', response.token);
        console.log('Count:', response.count);
    } else {
        console.error('❌ Token addition failed:', response.error);
    }
} catch (error) {
    console.error('Error adding token:', error);
}

// Example 4: Batch token addition
const tokensToAdd = [
    "auth_token_1",
    "session_token_2", 
    "api_key_3"
];

for (const token of tokensToAdd) {
    const result = await codebolt.tokenizer.addToken(token);
    if (result.success) {
        console.log(`✅ Added token: ${result.token} (count: ${result.count})`);
    } else {
        console.log(`❌ Failed to add token: ${token}`);
    }
}
```

### Notes

- The `key` parameter should be a string representing the token to be added to the system.
- The response will contain the added token and processing information.
- Use error handling to gracefully handle cases where token addition fails.
- This operation communicates with the system via WebSocket for real-time processing.