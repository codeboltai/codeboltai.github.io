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
    signatureTypeName: "Promise<AddTokenResponse>"
    description: A promise that resolves with an `AddTokenResponse` object containing the tokenization response.
data:
  name: addToken
  category: tokenizer
  link: addToken.md
---
# addToken

```typescript
codebolt.tokenizer.addToken(key: string): Promise<AddTokenResponse>
```

Adds a token to the system and returns tokenized array.
### Parameters

- **`key`** (string): The key/string to be tokenized.

### Returns

- **`Promise<AddTokenResponse>`**: A promise that resolves with an [`AddTokenResponse`](/docs/api/11_doc-type-ref/types/interfaces/AddTokenResponse) object containing the tokenization response.

### Response Structure

The method returns a Promise that resolves to an [`AddTokenResponse`](/docs/api/11_doc-type-ref/types/interfaces/AddTokenResponse) object with the following properties:

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

### Advanced Usage Patterns

#### Token with Metadata

```javascript
async function addTokenWithMetadata(key, metadata = {}) {
    const result = await codebolt.tokenizer.addToken(key);

    if (result.success) {
        // Store metadata separately
        const metadataKey = `${key}_metadata`;
        await codebolt.tokenizer.addToken(JSON.stringify({
            ...metadata,
            token: key,
            createdAt: new Date().toISOString()
        }));

        return {
            ...result,
            metadata
        };
    }

    return result;
}

// Usage
const result = await addTokenWithMetadata("api_token_123", {
    service: "openai",
    userId: "user_456",
    permissions: ["read", "write"]
});
```

#### Token Expiration Management

```javascript
class ExpiringTokenManager {
    constructor() {
        this.tokens = new Map();
    }

    async addToken(key, ttl = 3600000) { // 1 hour default
        const result = await codebolt.tokenizer.addToken(key);

        if (result.success) {
            const expiresAt = Date.now() + ttl;

            this.tokens.set(key, {
                token: result.token,
                expiresAt,
                ttl
            });

            console.log(`Token expires at: ${new Date(expiresAt).toISOString()}`);

            // Set up expiration timer
            setTimeout(() => {
                console.log(`Token expired: ${key}`);
                this.tokens.delete(key);
            }, ttl);
        }

        return result;
    }

    isExpired(key) {
        const token = this.tokens.get(key);
        if (!token) return true;

        return Date.now() > token.expiresAt;
    }

    getTimeToExpiry(key) {
        const token = this.tokens.get(key);
        if (!token) return 0;

        return Math.max(0, token.expiresAt - Date.now());
    }
}
```

#### Token Deduplication

```javascript
class TokenDeduplicator {
    constructor() {
        this.seenTokens = new Set();
    }

    async addUniqueToken(key) {
        if (this.seenTokens.has(key)) {
            console.log(`Token already exists: ${key}`);
            return {
                success: false,
                error: 'Token already exists',
                duplicate: true
            };
        }

        const result = await codebolt.tokenizer.addToken(key);

        if (result.success) {
            this.seenTokens.add(key);
            console.log(`✅ New token added: ${key}`);
        }

        return result;
    }

    async addWithDeduplication(keys) {
        const results = [];

        for (const key of keys) {
            const result = await this.addUniqueToken(key);
            results.push({ key, ...result });
        }

        return {
            total: keys.length,
            unique: results.filter(r => r.success).length,
            duplicates: results.filter(r => r.duplicate).length,
            results
        };
    }

    clear() {
        this.seenTokens.clear();
    }
}
```

#### Bulk Token Operations with Transactions

```javascript
async function bulkTokenOperation(tokens, operation) {
    const results = [];
    const failed = [];

    for (const token of tokens) {
        try {
            const result = await codebolt.tokenizer.addToken(token);

            if (result.success) {
                results.push({ token, success: true, result });
            } else {
                failed.push({ token, success: false, error: result.error });
            }
        } catch (error) {
            failed.push({ token, success: false, error: error.message });
        }
    }

    const summary = {
        total: tokens.length,
        successful: results.length,
        failed: failed.length,
        successRate: ((results.length / tokens.length) * 100).toFixed(2) + '%'
    };

    console.log('Bulk operation summary:', summary);

    return {
        summary,
        results,
        failed
    };
}

// Usage
const tokens = Array.from({ length: 50 }, (_, i) => `token_${i}`);
const { summary, results, failed } = await bulkTokenOperation(tokens, 'add');
```

### Integration Examples

#### With Authentication System

```javascript
class AuthTokenManager {
    async storeUserTokens(userId, tokens) {
        const results = [];

        for (const [type, token] of Object.entries(tokens)) {
            const key = `user_${userId}_${type}`;
            const result = await codebolt.tokenizer.addToken(token);

            if (result.success) {
                results.push({ type, key, success: true });
            } else {
                results.push({ type, key, success: false, error: result.error });
            }
        }

        return {
            userId,
            results,
            successful: results.filter(r => r.success).length
        };
    }

    async retrieveUserTokens(userId, tokenTypes) {
        const tokens = {};

        for (const type of tokenTypes) {
            const key = `user_${userId}_${type}`;
            const result = await codebolt.tokenizer.getToken(key);

            if (result.success && result.tokens) {
                tokens[type] = result.tokens[0];
            }
        }

        return tokens;
    }
}

// Usage
const authManager = new AuthTokenManager();
await authManager.storeUserTokens("user_123", {
    access: "access_token_abc",
    refresh: "refresh_token_def",
    id: "id_token_ghi"
});

const userTokens = await authManager.retrieveUserTokens("user_123", [
    "access",
    "refresh",
    "id"
]);
```

### Performance Optimization

#### Token Batching with Rate Limiting

```javascript
class RateLimitedTokenAdder {
    constructor(tokensPerSecond = 10) {
        this.tokensPerSecond = tokensPerSecond;
        this.queue = [];
        this.processing = false;
    }

    async add(key) {
        return new Promise((resolve, reject) => {
            this.queue.push({ key, resolve, reject });

            if (!this.processing) {
                this.processQueue();
            }
        });
    }

    async processQueue() {
        this.processing = true;

        while (this.queue.length > 0) {
            const batch = this.queue.splice(0, this.tokensPerSecond);

            await Promise.all(
                batch.map(({ key, resolve, reject }) =>
                    codebolt.tokenizer.addToken(key)
                        .then(resolve)
                        .catch(reject)
                )
            );

            // Wait 1 second before next batch
            if (this.queue.length > 0) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        this.processing = false;
    }
}

// Usage
const adder = new RateLimitedTokenAdder(5);

for (let i = 0; i < 20; i++) {
    adder.add(`rate_limited_token_${i}`)
        .then(result => console.log(`Added token ${i}`))
        .catch(error => console.error(`Failed to add token ${i}:`, error));
}
```

### Error Recovery

#### Automatic Retry with Backoff

```javascript
async function addTokenWithBackoff(key, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await codebolt.tokenizer.addToken(key);

            if (result.success) {
                if (attempt > 1) {
                    console.log(`✅ Succeeded on attempt ${attempt}`);
                }
                return result;
            }

            // If not successful and not the last attempt
            if (attempt < maxRetries) {
                const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
                console.log(`Retry ${attempt}/${maxRetries} after ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            }

        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }

            const delay = Math.pow(2, attempt) * 1000;
            console.log(`Error on attempt ${attempt}, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error(`Failed after ${maxRetries} attempts`);
}
```

### Security Best Practices

#### Token Sanitization

```javascript
class SecureTokenManager {
    sanitizeToken(token) {
        // Remove any whitespace
        let sanitized = token.trim();

        // Remove special characters that might cause issues
        sanitized = sanitized.replace(/[\n\r\t]/g, '');

        return sanitized;
    }

    async addSecureToken(rawToken) {
        const sanitized = this.sanitizeToken(rawToken);

        if (!sanitized) {
            return {
                success: false,
                error: 'Token cannot be empty after sanitization'
            };
        }

        // Validate token format
        if (sanitized.length < 10) {
            return {
                success: false,
                error: 'Token is too short (minimum 10 characters)'
            };
        }

        return await codebolt.tokenizer.addToken(sanitized);
    }

    maskToken(token) {
        if (token.length <= 8) {
            return '***';
        }

        return `${token.substring(0, 4)}...${token.substring(token.length - 4)}`;
    }
}
```