---
cbapicategory:
  - name: addToken
    link: /docs/api/apiaccess/tokenizer/addToken
    description: Adds a token to the system and returns tokenized array.
  - name: getToken
    link: /docs/api/apiaccess/tokenizer/getToken
    description: Retrieves a token by its key from the system.

---
# tokenizer
<CBAPICategory />

## Overview

The Tokenizer module provides functionality for managing and retrieving tokens within the CodeBolt system. Tokens are used for authentication, session management, and various other system operations that require secure key-value storage.

## Quick Start

```javascript
import codebolt from '@codebolt/codeboltjs';

// Add a token to the system
const result = await codebolt.tokenizer.addToken("api_key_12345");
console.log("Token added:", result.token);
console.log("Count:", result.count);

// Retrieve the token later
const retrieved = await codebolt.tokenizer.getToken("api_key_12345");
console.log("Retrieved tokens:", retrieved.tokens);
```

## Common Workflows

### 1. API Key Management

```javascript
class APIKeyManager {
    async storeKey(service, apiKey) {
        const tokenKey = `${service}_api_key`;
        const result = await codebolt.tokenizer.addToken(apiKey);

        if (result.success) {
            console.log(`✅ API key stored for ${service}`);
            return { success: true, service, tokenKey };
        }

        return { success: false, service, error: result.error };
    }

    async getKey(service) {
        const tokenKey = `${service}_api_key`;
        const result = await codebolt.tokenizer.getToken(tokenKey);

        if (result.success && result.tokens) {
            return {
                success: true,
                service,
                apiKey: result.tokens[0]
            };
        }

        return { success: false, service, error: result.error };
    }
}

// Usage
const keyManager = new APIKeyManager();
await keyManager.storeKey("openai", "sk-...");
const key = await keyManager.getKey("openai");
```

### 2. Session Token Management

```javascript
class SessionManager {
    constructor() {
        this.sessionPrefix = "user_session_";
    }

    async createSession(userId) {
        const sessionKey = `${this.sessionPrefix}${userId}_${Date.now()}`;
        const result = await codebolt.tokenizer.addToken(sessionKey);

        if (result.success) {
            return {
                success: true,
                sessionKey,
                userId,
                createdAt: new Date().toISOString()
            };
        }

        return { success: false, error: result.error };
    }

    async getSession(userId) {
        // Find session tokens for user
        const sessions = [];
        for (let i = 0; i < 10; i++) {
            const sessionKey = `${this.sessionPrefix}${userId}_${Date.now() - i * 1000}`;
            try {
                const result = await codebolt.tokenizer.getToken(sessionKey);
                if (result.success && result.tokens) {
                    sessions.push(...result.tokens);
                }
            } catch (error) {
                // Continue searching
            }
        }

        return sessions;
    }
}

// Usage
const sessionManager = new SessionManager();
const session = await sessionManager.createSession("user_123");
```

### 3. Token Caching Strategy

```javascript
class TokenCache {
    constructor(ttl = 30 * 60 * 1000) { // 30 minutes
        this.cache = new Map();
        this.ttl = ttl;
    }

    async addToken(key, value) {
        const result = await codebolt.tokenizer.addToken(value);

        if (result.success) {
            this.cache.set(key, {
                value,
                timestamp: Date.now(),
                token: result.token
            });
        }

        return result;
    }

    async getToken(key) {
        const cached = this.cache.get(key);

        if (cached && Date.now() - cached.timestamp < this.ttl) {
            console.log('Cache hit for:', key);
            return {
                success: true,
                tokens: [cached.value],
                cached: true
            };
        }

        console.log('Cache miss for:', key);
        const result = await codebolt.tokenizer.getToken(key);

        if (result.success && result.tokens) {
            this.cache.set(key, {
                value: result.tokens[0],
                timestamp: Date.now()
            });
        }

        return result;
    }

    clear() {
        this.cache.clear();
        console.log('Token cache cleared');
    }
}
```

### 4. Batch Token Operations

```javascript
async function batchAddTokens(tokens) {
    const batchSize = 10;
    const results = [];

    for (let i = 0; i < tokens.length; i += batchSize) {
        const batch = tokens.slice(i, i + batchSize);

        const batchResults = await Promise.all(
            batch.map(token =>
                codebolt.tokenizer.addToken(token)
                    .then(result => ({
                        token,
                        success: result.success,
                        count: result.count
                    }))
                    .catch(error => ({
                        token,
                        success: false,
                        error: error.message
                    }))
            )
        );

        results.push(...batchResults);
        console.log(`Processed batch ${Math.floor(i / batchSize) + 1}`);
    }

    return results;
}

// Usage
const tokens = [
    "auth_token_1",
    "session_token_2",
    "api_key_3",
    "refresh_token_4"
];

const results = await batchAddTokens(tokens);
```

## Best Practices

### Token Naming Conventions

```javascript
// Good token naming practices
const tokenFormats = {
    apiKeys: "service_api_key",           // e.g., "openai_api_key"
    sessions: "user_session_timestamp",    // e.g., "user_123_session_1234567890"
    auth: "auth_token_type",               // e.g., "auth_token_bearer"
    refresh: "refresh_token_userId"        // e.g., "refresh_token_user_123"
};

async function addFormattedToken(format, ...args) {
    const key = format.replace(/{(\d+)}/g, (_, index) => args[index]);
    return await codebolt.tokenizer.addToken(key);
}

// Usage
await addFormattedToken(tokenFormats.apiKeys, "openai");
await addFormattedToken(tokenFormats.sessions, "user_123", Date.now());
```

### Error Handling

```javascript
async function safeTokenOperation(operation, key, value = null) {
    try {
        let result;

        if (operation === 'add') {
            if (!value) {
                throw new Error('Value required for add operation');
            }
            result = await codebolt.tokenizer.addToken(value);
        } else if (operation === 'get') {
            result = await codebolt.tokenizer.getToken(key);
        } else {
            throw new Error('Invalid operation');
        }

        if (!result.success) {
            console.error(`Operation ${operation} failed:`, result.error);
            return {
                success: false,
                operation,
                key,
                error: result.error
            };
        }

        return {
            success: true,
            operation,
            key,
            result
        };

    } catch (error) {
        console.error('Token operation error:', error.message);
        return {
            success: false,
            operation,
            key,
            error: error.message
        };
    }
}
```

### Token Validation

```javascript
class TokenValidator {
    constructor() {
        this.patterns = {
            apiKey: /^[a-zA-Z0-9_-]{20,}$/,
            session: /^[a-zA-Z0-9_-]{10,}$/,
            bearer: /^Bearer\s+[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/
        };
    }

    validateToken(token, type = 'apiKey') {
        const pattern = this.patterns[type];

        if (!pattern) {
            return {
                valid: false,
                error: `Unknown token type: ${type}`
            };
        }

        const isValid = pattern.test(token);

        return {
            valid: isValid,
            type,
            token: isValid ? token : '***REDACTED***'
        };
    }

    async addValidatedToken(token, type = 'apiKey') {
        const validation = this.validateToken(token, type);

        if (!validation.valid) {
            console.error('Invalid token:', validation.error);
            return {
                success: false,
                error: validation.error
            };
        }

        return await codebolt.tokenizer.addToken(token);
    }
}

// Usage
const validator = new TokenValidator();
const result = await validator.addValidatedToken("sk-1234567890abcdef", "apiKey");
```

## Performance Considerations

### Token Pool Management

```javascript
class TokenPool {
    constructor(size = 100) {
        this.size = size;
        this.pool = [];
    }

    async initialize() {
        console.log(`Initializing token pool with ${this.size} tokens...`);

        for (let i = 0; i < this.size; i++) {
            const token = `pool_token_${i}_${Date.now()}`;
            const result = await codebolt.tokenizer.addToken(token);

            if (result.success) {
                this.pool.push(result.token);
            }
        }

        console.log(`✅ Token pool initialized with ${this.pool.length} tokens`);
    }

    async acquire() {
        if (this.pool.length === 0) {
            throw new Error('Token pool exhausted');
        }

        const token = this.pool.pop();
        return token;
    }

    async release(token) {
        this.pool.push(token);
        console.log(`Token released: ${token}`);
    }

    getStats() {
        return {
            total: this.size,
            available: this.pool.length,
            inUse: this.size - this.pool.length
        };
    }
}
```

### Rate Limiting

```javascript
class TokenRateLimiter {
    constructor(maxTokensPerSecond = 10) {
        this.maxTokensPerSecond = maxTokensPerSecond;
        this.tokens = [];
        this.lock = false;
    }

    async addToken(token) {
        // Wait if rate limit exceeded
        while (this.lock) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        this.lock = true;

        try {
            // Remove tokens older than 1 second
            const now = Date.now();
            this.tokens = this.tokens.filter(t => now - t.timestamp < 1000);

            if (this.tokens.length >= this.maxTokensPerSecond) {
                throw new Error('Rate limit exceeded');
            }

            const result = await codebolt.tokenizer.addToken(token);

            if (result.success) {
                this.tokens.push({ token, timestamp: now });
            }

            return result;

        } finally {
            this.lock = false;
        }
    }
}
```

## Integration Examples

### With Chat Module

```javascript
async function chatWithAuthenticatedRequest(userMessage, authToken) {
    // Store auth token
    const tokenResult = await codebolt.tokenizer.addToken(authToken);

    if (!tokenResult.success) {
        throw new Error('Failed to store auth token');
    }

    // Send authenticated chat message
    const response = await codebolt.chat.sendMessage({
        message: userMessage,
        authToken: authToken
    });

    return response;
}
```

### With Project Module

```javascript
async function setupProjectTokens(projectPath) {
    const projectInfo = await codebolt.project.getProjectPath();

    if (!projectInfo.success) {
        throw new Error('No project open');
    }

    // Project-specific tokens
    const tokens = [
        `${projectInfo.projectName}_api_token`,
        `${projectInfo.projectName}_session_token`,
        `${projectInfo.projectName}_refresh_token`
    ];

    const results = [];

    for (const token of tokens) {
        const result = await codebolt.tokenizer.addToken(token);
        results.push({ token, ...result });
    }

    return results;
}
```

### With RAG Module

```javascript
async function indexWithAuthentication(docFile, authToken) {
    // Store auth token
    await codebolt.tokenizer.addToken(authToken);

    // Use token to access protected content
    const knowledge = await codebolt.rag.retrieve_related_knowledge(
        "protected content query",
        docFile
    );

    return knowledge;
}
```

## Common Pitfalls

### Pitfall 1: Not Checking Success

```javascript
// ❌ Wrong - not checking success
const result = await codebolt.tokenizer.addToken("my_token");
console.log(result.token); // May be undefined

// ✅ Correct - check success first
const result = await codebolt.tokenizer.addToken("my_token");
if (result.success) {
    console.log(result.token);
} else {
    console.error('Failed to add token:', result.error);
}
```

### Pitfall 2: Storing Sensitive Data Without Encryption

```javascript
// ❌ Wrong - plain text sensitive data
await codebolt.tokenizer.addToken("password_secret123");

// ✅ Correct - encrypt sensitive data
const encrypted = encrypt("password_secret123");
await codebolt.tokenizer.addToken(encrypted);
```

### Pitfall 3: No Cleanup

```javascript
// ❌ Wrong - tokens accumulate
for (let i = 0; i < 1000; i++) {
    await codebolt.tokenizer.addToken(`token_${i}`);
}

// ✅ Correct - implement cleanup
class TokenCleaner {
    async cleanupOldTokens(maxAge = 24 * 60 * 60 * 1000) { // 24 hours
        // Implementation depends on token storage
        console.log('Cleaning up old tokens...');
    }
}
```

## Advanced Patterns

### Token Rotation

```javascript
class TokenRotator {
    constructor() {
        this.currentToken = null;
        this.previousTokens = [];
    }

    async rotateToken(service) {
        // Store old token
        if (this.currentToken) {
            this.previousTokens.push(this.currentToken);
        }

        // Generate new token
        const newToken = `${service}_token_${Date.now()}`;
        const result = await codebolt.tokenizer.addToken(newToken);

        if (result.success) {
            this.currentToken = newToken;
            console.log(`✅ Token rotated for ${service}`);
            return newToken;
        }

        throw new Error('Token rotation failed');
    }

    getCurrentToken() {
        return this.currentToken;
    }

    async rollback() {
        if (this.previousTokens.length === 0) {
            throw new Error('No previous tokens to rollback to');
        }

        this.currentToken = this.previousTokens.pop();
        console.log('✅ Rolled back to previous token');
        return this.currentToken;
    }
}
```

### Distributed Token Management

```javascript
class DistributedTokenManager {
    constructor() {
        this.managers = [];
    }

    addManager(manager) {
        this.managers.push(manager);
    }

    async distributeToken(token) {
        const results = await Promise.all(
            this.managers.map(manager =>
                codebolt.tokenizer.addToken(token)
                    .then(result => ({
                        manager: manager.name,
                        success: result.success
                    }))
                    .catch(error => ({
                        manager: manager.name,
                        success: false,
                        error: error.message
                    }))
            )
        );

        return {
            token,
            distribution: results,
            successful: results.filter(r => r.success).length
        };
    }
}
```
