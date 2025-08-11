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
    signatureTypeName: Promise<GetTokenResponse>
    description: A promise that resolves with a `GetTokenResponse` object containing the token response.
data:
  name: getToken
  category: tokenizer
  link: getToken.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `GetTokenResponse` object with the following properties:

- **`type`** (string): Always "getTokenResponse".
- **`tokens`** (string[], optional): Array of tokens retrieved from the system.
- **`count`** (number, optional): The count or number of tokens retrieved.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information about the operation.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Basic token retrieval
const result = await codebolt.tokenizer.getToken("api_key_1");
console.log("Response type:", result.type); // "getTokenResponse"
console.log("Tokens retrieved:", result.tokens); // Array of tokens
console.log("Token count:", result.count); // Number of tokens

// Example 2: Retrieve session token
const tokenResult = await codebolt.tokenizer.getToken("user_session_token");
if (tokenResult.success && tokenResult.tokens) {
    console.log("✅ Tokens retrieved successfully");
    console.log("Tokens:", tokenResult.tokens);
    console.log("Count:", tokenResult.count);
} else {
    console.error("❌ Failed to retrieve tokens:", tokenResult.error);
}

// Example 3: Error handling
try {
    const response = await codebolt.tokenizer.getToken("my_token_key");
    
    if (response.success && response.tokens) {
        console.log('✅ Tokens retrieved successfully');
        console.log('Tokens array:', response.tokens);
        console.log('Number of tokens:', response.count);
        
        // Process each token
        response.tokens.forEach((token, index) => {
            console.log(`Token ${index + 1}: ${token}`);
        });
    } else {
        console.error('❌ Token retrieval failed:', response.error);
    }
} catch (error) {
    console.error('Error retrieving tokens:', error);
}

// Example 4: Multiple token key retrieval
const tokenKeys = [
    "auth_token",
    "session_token",
    "api_key"
];

for (const key of tokenKeys) {
    const result = await codebolt.tokenizer.getToken(key);
    if (result.success && result.tokens) {
        console.log(`✅ Retrieved tokens for key '${key}':`, result.tokens);
        console.log(`   Count: ${result.count}`);
    } else {
        console.log(`❌ No tokens found for key: ${key}`);
    }
}
```

### Notes

- The `key` parameter should be a string representing the token key to retrieve from the system.
- The response will contain an array of tokens associated with the provided key.
- Use error handling to gracefully handle cases where no tokens are found or retrieval fails.
- This operation communicates with the system via WebSocket for real-time processing.