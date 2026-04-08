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
    signatureTypeName: "Promise<GetTokenResponse>"
    description: A promise that resolves with a `GetTokenResponse` object containing the token response.
data:
  name: getToken
  category: tokenizer
  link: getToken.md
---
# getToken

```typescript
codebolt.tokenizer.getToken(key: string): Promise<GetTokenResponse>
```

Retrieves a token by its key from the system.
### Parameters

- **`key`** (string): The key associated with the token to be retrieved.

### Returns

- **`Promise<GetTokenResponse>`**: A promise that resolves with a [`GetTokenResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetTokenResponse) object containing the token response.

### Response Structure

The method returns a Promise that resolves to a [`GetTokenResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetTokenResponse) object with the following properties:

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

### Advanced Usage Patterns

#### Token Retrieval with Fallback

```javascript
async function getTokenWithFallback(key, fallbackValue = null) {
    try {
        const result = await codebolt.tokenizer.getToken(key);

        if (result.success && result.tokens && result.tokens.length > 0) {
            return {
                success: true,
                source: 'tokenizer',
                tokens: result.tokens
            };
        }

        // Use fallback if no tokens found
        if (fallbackValue !== null) {
            console.log(`No tokens found for ${key}, using fallback`);
            return {
                success: true,
                source: 'fallback',
                tokens: [fallbackValue],
                fallback: true
            };
        }

        return {
            success: false,
            error: 'No tokens found and no fallback provided'
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Usage
const result = await getTokenWithFallback("missing_key", "default_token");
```

#### Bulk Token Retrieval

```javascript
async function bulkGetTokens(keys) {
    const batchSize = 10;
    const allResults = [];

    for (let i = 0; i < keys.length; i += batchSize) {
        const batch = keys.slice(i, i + batchSize);

        const batchResults = await Promise.all(
            batch.map(key =>
                codebolt.tokenizer.getToken(key)
                    .then(result => ({
                        key,
                        success: result.success,
                        tokens: result.tokens || [],
                        count: result.count || 0
                    }))
                    .catch(error => ({
                        key,
                        success: false,
                        error: error.message
                    }))
            )
        );

        allResults.push(...batchResults);
        console.log(`Retrieved batch ${Math.floor(i / batchSize) + 1}`);
    }

    // Generate summary
    const summary = {
        total: keys.length,
        found: allResults.filter(r => r.success && r.tokens.length > 0).length,
        notFound: allResults.filter(r => !r.success || r.tokens.length === 0).length,
        totalTokens: allResults.reduce((sum, r) => sum + r.count, 0)
    };

    return { summary, results: allResults };
}

// Usage
const keys = ["token1", "token2", "token3", "token4", "token5"];
const { summary, results } = await bulkGetTokens(keys);
console.log('Summary:', summary);
```

#### Token Caching Layer

```javascript
class TokenCache {
    constructor(ttl = 5 * 60 * 1000) { // 5 minutes default
        this.cache = new Map();
        this.ttl = ttl;
        this.hits = 0;
        this.misses = 0;
    }

    async get(key) {
        const cached = this.cache.get(key);

        // Check if cached and not expired
        if (cached && Date.now() - cached.timestamp < this.ttl) {
            this.hits++;
            console.log(`✅ Cache hit for ${key}`);
            return {
                success: true,
                tokens: cached.tokens,
                cached: true
            };
        }

        // Cache miss - fetch from tokenizer
        this.misses++;
        console.log(`❌ Cache miss for ${key}, fetching...`);

        const result = await codebolt.tokenizer.getToken(key);

        if (result.success && result.tokens) {
            this.cache.set(key, {
                tokens: result.tokens,
                timestamp: Date.now()
            });
        }

        return {
            ...result,
            cached: false
        };
    }

    invalidate(key) {
        if (key) {
            this.cache.delete(key);
            console.log(`Invalidated cache for ${key}`);
        } else {
            this.cache.clear();
            console.log('Cleared all cache');
        }
    }

    getStats() {
        return {
            size: this.cache.size,
            hits: this.hits,
            misses: this.misses,
            hitRate: this.hits + this.misses > 0
                ? ((this.hits / (this.hits + this.misses)) * 100).toFixed(2) + '%'
                : '0%'
        };
    }
}

// Usage
const cache = new TokenCache(10 * 60 * 1000); // 10 minutes TTL

const result1 = await cache.get("api_key_1"); // Cache miss
const result2 = await cache.get("api_key_1"); // Cache hit
const stats = cache.getStats();
console.log('Cache stats:', stats);
```

#### Token Pattern Matching

```javascript
class PatternTokenRetriever {
    async getMatchingTokens(pattern) {
        // This is a conceptual implementation
        // In practice, you'd need to maintain an index of token keys

        const regex = new RegExp(pattern);
        const matchedTokens = [];

        // If you have a known set of keys, you can iterate through them
        const knownKeys = [
            "user_123_token",
            "user_456_token",
            "service_api_token",
            "admin_access_token"
        ];

        for (const key of knownKeys) {
            if (regex.test(key)) {
                try {
                    const result = await codebolt.tokenizer.getToken(key);
                    if (result.success && result.tokens) {
                        matchedTokens.push({
                            key,
                            tokens: result.tokens
                        });
                    }
                } catch (error) {
                    console.log(`Failed to retrieve ${key}:`, error.message);
                }
            }
        }

        return {
            pattern,
            matches: matchedTokens.length,
            tokens: matchedTokens
        };
    }

    async getUserTokens(userId) {
        return await this.getMatchingTokens(`^user_${userId}_`);
    }

    async getServiceTokens(service) {
        return await this.getMatchingTokens(`^${service}_`);
    }
}

// Usage
const retriever = new PatternTokenRetriever();
const userTokens = await retriever.getUserTokens("123");
const apiTokens = await retriever.getServiceTokens("api");
```

#### Token Validation and Refresh

```javascript
class TokenValidator {
    constructor() {
        this.validatedTokens = new Map();
    }

    async getValidatedToken(key, validatorFn) {
        const result = await codebolt.tokenizer.getToken(key);

        if (!result.success || !result.tokens || result.tokens.length === 0) {
            return {
                success: false,
                error: 'No tokens found'
            };
        }

        const token = result.tokens[0];

        // Validate token using provided validator function
        const isValid = await validatorFn(token);

        if (!isValid) {
            return {
                success: false,
                error: 'Token validation failed',
                token
            };
        }

        // Cache the validated token
        this.validatedTokens.set(key, {
            token,
            validatedAt: Date.now()
        });

        return {
            success: true,
            tokens: [token],
            validated: true
        };
    }

    async refreshIfNeeded(key, maxAge = 3600000) { // 1 hour default
        const cached = this.validatedTokens.get(key);

        if (cached && Date.now() - cached.validatedAt < maxAge) {
            console.log(`Using cached validated token for ${key}`);
            return {
                success: true,
                tokens: [cached.token],
                cached: true
            };
        }

        console.log(`Refreshing token validation for ${key}`);
        const result = await codebolt.tokenizer.getToken(key);

        if (result.success && result.tokens) {
            this.validatedTokens.set(key, {
                token: result.tokens[0],
                validatedAt: Date.now()
            });
        }

        return result;
    }
}

// Usage
const validator = new TokenValidator();

const result = await validator.getValidatedToken(
    "api_token",
    async (token) => {
        // Custom validation logic
        return token.length > 10 && token.startsWith('sk-');
    }
);
```

#### Token Statistics and Monitoring

```javascript
class TokenMonitor {
    constructor() {
        this.accessLog = new Map();
        this.failedAttempts = new Map();
    }

    async getWithMonitoring(key) {
        const startTime = Date.now();

        try {
            const result = await codebolt.tokenizer.getToken(key);

            const duration = Date.now() - startTime;

            // Log successful access
            this.logAccess(key, {
                success: true,
                duration,
                timestamp: new Date().toISOString()
            });

            return result;

        } catch (error) {
            // Log failed attempt
            this.logFailure(key, {
                error: error.message,
                timestamp: new Date().toISOString()
            });

            throw error;
        }
    }

    logAccess(key, data) {
        if (!this.accessLog.has(key)) {
            this.accessLog.set(key, []);
        }

        this.accessLog.get(key).push(data);

        // Keep only last 100 accesses per key
        const accesses = this.accessLog.get(key);
        if (accesses.length > 100) {
            accesses.shift();
        }
    }

    logFailure(key, data) {
        if (!this.failedAttempts.has(key)) {
            this.failedAttempts.set(key, []);
        }

        this.failedAttempts.get(key).push(data);

        // Keep only last 50 failures per key
        const failures = this.failedAttempts.get(key);
        if (failures.length > 50) {
            failures.shift();
        }
    }

    getStatistics(key) {
        const accesses = this.accessLog.get(key) || [];
        const failures = this.failedAttempts.get(key) || [];

        const successfulDurations = accesses
            .filter(a => a.success)
            .map(a => a.duration);

        return {
            key,
            totalAccesses: accesses.length,
            totalFailures: failures.length,
            successRate: accesses.length > 0
                ? ((accesses.length / (accesses.length + failures.length)) * 100).toFixed(2) + '%'
                : '0%',
            avgDuration: successfulDurations.length > 0
                ? (successfulDurations.reduce((a, b) => a + b, 0) / successfulDurations.length).toFixed(2) + 'ms'
                : 'N/A',
            lastAccess: accesses.length > 0 ? accesses[accesses.length - 1].timestamp : 'N/A'
        };
    }

    getAllStatistics() {
        const allKeys = new Set([
            ...this.accessLog.keys(),
            ...this.failedAttempts.keys()
        ]);

        return Array.from(allKeys).map(key => this.getStatistics(key));
    }
}

// Usage
const monitor = new TokenMonitor();

const token = await monitor.getWithMonitoring("api_key_1");
const stats = monitor.getStatistics("api_key_1");
const allStats = monitor.getAllStatistics();
```

### Integration Examples

#### With Configuration Management

```javascript
class ConfigTokenManager {
    async getConfigTokens(configKey) {
        const result = await codebolt.tokenizer.getToken(`config_${configKey}`);

        if (result.success && result.tokens) {
            try {
                // Parse JSON if token contains JSON data
                const config = JSON.parse(result.tokens[0]);
                return {
                    success: true,
                    config
                };
            } catch (error) {
                // Return raw token if not JSON
                return {
                    success: true,
                    config: { value: result.tokens[0] }
                };
            }
        }

        return {
            success: false,
            error: 'Configuration not found'
        };
    }

    async setConfig(configKey, config) {
        const configValue = typeof config === 'object'
            ? JSON.stringify(config)
            : config;

        return await codebolt.tokenizer.addToken(`config_${configKey}`, configValue);
    }
}

// Usage
const configManager = new ConfigTokenManager();
await configManager.setConfig("database", {
    host: "localhost",
    port: 5432,
    name: "mydb"
});

const dbConfig = await configManager.getConfigTokens("database");
```

### Error Handling Patterns

#### Graceful Degradation

```javascript
async function getTokenWithGracefulFallback(key, fallbacks = []) {
    // Try primary key first
    try {
        const result = await codebolt.tokenizer.getToken(key);
        if (result.success && result.tokens && result.tokens.length > 0) {
            return {
                success: true,
                source: 'primary',
                tokens: result.tokens
            };
        }
    } catch (error) {
        console.log(`Primary lookup failed for ${key}:`, error.message);
    }

    // Try fallback keys
    for (const fallbackKey of fallbacks) {
        try {
            const result = await codebolt.tokenizer.getToken(fallbackKey);
            if (result.success && result.tokens && result.tokens.length > 0) {
                console.log(`✅ Using fallback: ${fallbackKey}`);
                return {
                    success: true,
                    source: 'fallback',
                    fallbackKey,
                    tokens: result.tokens
                };
            }
        } catch (error) {
            console.log(`Fallback ${fallbackKey} failed:`, error.message);
        }
    }

    // All attempts failed
    return {
        success: false,
        error: 'All lookup attempts failed',
        attemptedKeys: [key, ...fallbacks]
    };
}

// Usage
const result = await getTokenWithGracefulFallback(
    "production_api_key",
    ["staging_api_key", "development_api_key", "default_api_key"]
);
```