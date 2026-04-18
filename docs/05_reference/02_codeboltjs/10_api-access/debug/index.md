---
cbapicategory:
  - name: debug
    link: /docs/api/apiaccess/debug/debug-method
    description: Sends a log message to the debug websocket and waits for a response.
  - name: debugLog
    link: /docs/api/apiaccess/debug/debugLog
    description: Alternative method for sending debug log messages to the debug system.
  - name: openDebugBrowser
    link: /docs/api/apiaccess/debug/openDebugBrowser
    description: Requests to open a debug browser at the specified URL and port.

---
# debug
<CBAPICategory />

## Quick Start Guide

The `debug` module provides comprehensive debugging capabilities for your Codebolt applications, including logging, browser debugging, and development tools.

### Basic Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

// Log different types of messages
await codebolt.debug.debug('Application started successfully', 'info');
await codebolt.debug.debug('API rate limit approaching', 'warning');
await codebolt.debug.debug('Database connection failed', 'error');

// Open debug browser for development
await codebolt.debug.openDebugBrowser('http://localhost:3000', 9222);
```

## Common Workflows

### Workflow 1: Structured Logging

```javascript
class DebugLogger {
  constructor(context) {
    this.context = context;
  }

  async info(message, data = {}) {
    const logMessage = this.formatMessage('INFO', message, data);
    await codebolt.debug.debug(logMessage, 'info');
  }

  async warning(message, data = {}) {
    const logMessage = this.formatMessage('WARN', message, data);
    await codebolt.debug.debug(logMessage, 'warning');
  }

  async error(message, error = null, data = {}) {
    const logData = {
      ...data,
      error: error ? {
        message: error.message,
        stack: error.stack,
        name: error.name
      } : null
    };

    const logMessage = this.formatMessage('ERROR', message, logData);
    await codebolt.debug.debug(logMessage, 'error');
  }

  formatMessage(level, message, data) {
    const timestamp = new Date().toISOString();
    const dataStr = Object.keys(data).length > 0 ? `\n${JSON.stringify(data, null, 2)}` : '';

    return `[${timestamp}] [${this.context}] [${level}] ${message}${dataStr}`;
  }

  async logFunctionCall(fnName, args) {
    await this.info(`Calling function: ${fnName}`, { args });
  }

  async logFunctionResult(fnName, result, duration) {
    await this.info(`Function completed: ${fnName}`, {
      result: typeof result === 'object' ? JSON.stringify(result) : result,
      duration: `${duration}ms`
    });
  }

  async logAsyncFunction(fnName, fn) {
    const startTime = Date.now();
    await this.logFunctionCall(fnName);

    try {
      const result = await fn();
      const duration = Date.now() - startTime;
      await this.logFunctionResult(fnName, result, duration);
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      await this.error(`Function failed: ${fnName}`, error, { duration });
      throw error;
    }
  }
}

// Usage
const logger = new DebugLogger('UserService');

await logger.info('User login attempt', { userId: 'user_123' });
await logger.warning('High memory usage', { usage: '85%' });
await logger.error('Database error', new Error('Connection timeout'), { timeout: 5000 });

// Track async functions
const result = await logger.logAsyncFunction('fetchUserData', async () => {
  return await fetchUserFromAPI('user_123');
});
```

### Workflow 2: Performance Profiling

```javascript
class PerformanceProfiler {
  constructor() {
    this.marks = new Map();
    this.measures = [];
  }

  async mark(name) {
    const timestamp = Date.now();
    this.marks.set(name, timestamp);

    await codebolt.debug.debug(`Mark: ${name}`, 'info');
    return timestamp;
  }

  async measure(name, startMark, endMark) {
    const start = this.marks.get(startMark);
    const end = this.marks.get(endMark);

    if (!start || !end) {
      throw new Error(`Marks not found: ${startMark}, ${endMark}`);
    }

    const duration = end - start;
    this.measures.push({ name, duration, start, end });

    await codebolt.debug.debug(
      `Measure ${name}: ${duration}ms`,
      'info'
    );

    return duration;
  }

  async profileFunction(name, fn) {
    const markName = `fn_${name}_${Date.now()}`;
    await this.mark(markName);

    try {
      const result = await fn();
      const duration = Date.now() - this.marks.get(markName);

      await codebolt.debug.debug(
        `Function ${name} completed in ${duration}ms`,
        'info'
      );

      return result;
    } catch (error) {
      await codebolt.debug.debug(
        `Function ${name} failed`,
        'error'
      );
      throw error;
    }
  }

  async getReport() {
    const report = {
      totalMeasures: this.measures.length,
      averageDuration: 0,
      slowest: null,
      fastest: null,
      measures: this.measures
    };

    if (this.measures.length > 0) {
      const durations = this.measures.map(m => m.duration);
      report.averageDuration = durations.reduce((a, b) => a + b) / durations.length;
      report.slowest = this.measures.reduce((a, b) => a.duration > b.duration ? a : b);
      report.fastest = this.measures.reduce((a, b) => a.duration < b.duration ? a : b);
    }

    return report;
  }

  async logReport() {
    const report = await this.getReport();

    await codebolt.debug.debug(
      `Performance Report:\n${JSON.stringify(report, null, 2)}`,
      'info'
    );

    return report;
  }
}

// Usage
const profiler = new PerformanceProfiler();

await profiler.mark('request_start');
await processUserRequest();
await profiler.mark('request_end');

const duration = await profiler.measure('total_request', 'request_start', 'request_end');

// Profile a function
const result = await profiler.profileFunction('database_query', async () => {
  return await db.query('SELECT * FROM users');
});

// Get performance report
await profiler.logReport();
```

### Workflow 3: Debug Session Manager

```javascript
class DebugSession {
  constructor() {
    this.breakpoints = new Map();
    this.watchExpressions = new Map();
    this.callStack = [];
  }

  async setBreakpoint(file, line, condition = null) {
    const bp = { file, line, condition, hits: 0 };
    this.breakpoints.set(`${file}:${line}`, bp);

    await codebolt.debug.debug(
      `Breakpoint set at ${file}:${line}`,
      'info'
    );
  }

  async addWatch(expression, evalFn) {
    this.watchExpressions.set(expression, evalFn);

    await codebolt.debug.debug(
      `Watch added: ${expression}`,
      'info'
    );
  }

  async evaluateWatches(context) {
    const results = {};

    for (const [expr, evalFn] of this.watchExpressions) {
      try {
        results[expr] = await evalFn(context);
      } catch (error) {
        results[expr] = `Error: ${error.message}`;
      }
    }

    await codebolt.debug.debug(
      `Watch expressions:\n${JSON.stringify(results, null, 2)}`,
      'info'
    );

    return results;
  }

  async enterFunction(name, args) {
    this.callStack.push({ name, args, timestamp: Date.now() });

    await codebolt.debug.debug(
      `Entering: ${name}`,
      'info'
    );
  }

  async exitFunction(name, result) {
    const frame = this.callStack.pop();

    if (frame.name !== name) {
      await codebolt.debug.debug(
        `Warning: Mismatch exit. Expected ${frame.name}, got ${name}`,
        'warning'
      );
    }

    await codebolt.debug.debug(
      `Exiting: ${name}`,
      'info'
    );
  }

  async getStackTrace() {
    return this.callStack.map((frame, index) => ({
      depth: this.callStack.length - index,
      function: frame.name,
      args: frame.args,
      timestamp: new Date(frame.timestamp).toISOString()
    }));
  }

  async logStackTrace() {
    const stack = await this.getStackTrace();

    await codebolt.debug.debug(
      `Call stack:\n${JSON.stringify(stack, null, 2)}`,
      'info'
    );
  }
}

// Usage
const session = new DebugSession();

await session.setBreakpoint('UserService.js', 42, 'userId === "admin"');
await session.addWatch('user.role', (ctx) => ctx.user?.role);
await session.addWatch('request.headers', (ctx) => ctx.request?.headers);

await session.enterFunction('processRequest', { userId: 'user_123' });
await processUserRequest();
await session.exitFunction('processRequest', { success: true });

await session.logStackTrace();
```

### Workflow 4: Debug Browser Integration

```javascript
class BrowserDebugSession {
  constructor() {
    this.sessions = new Map();
    this.activeSession = null;
  }

  async start(url, port = 9222) {
    const result = await codebolt.debug.openDebugBrowser(url, port);

    if (result.success) {
      const session = {
        url,
        port,
        startTime: new Date().toISOString(),
        status: 'active'
      };

      this.sessions.set(port, session);
      this.activeSession = port;

      await codebolt.debug.debug(
        `Debug browser started at ${url}:${port}`,
        'info'
      );

      return session;
    } else {
      throw new Error(`Failed to start debug browser: ${result.error}`);
    }
  }

  async stop(port) {
    const session = this.sessions.get(port);

    if (!session) {
      throw new Error(`No session found on port ${port}`);
    }

    // Stop the debug browser
    this.sessions.delete(port);

    if (this.activeSession === port) {
      this.activeSession = null;
    }

    await codebolt.debug.debug(
      `Debug browser stopped on port ${port}`,
      'info'
    );
  }

  async listSessions() {
    return Array.from(this.sessions.entries()).map(([port, session]) => ({
      port,
      ...session
    }));
  }

  async getActiveSession() {
    if (!this.activeSession) {
      return null;
    }

    return this.sessions.get(this.activeSession);
  }

  async logPageAction(action, details) {
    await codebolt.debug.debug(
      `Page action: ${action}`,
      'info'
    );

    await codebolt.debug.debug(
      `Details: ${JSON.stringify(details, null, 2)}`,
      'info'
    );
  }

  async logNetworkRequest(request) {
    await codebolt.debug.debug(
      `Network request: ${request.method} ${request.url}`,
      'info'
    );

    if (request.status >= 400) {
      await codebolt.debug.debug(
        `Request failed with status ${request.status}`,
        'warning'
      );
    }
  }

  async logConsoleMessage(level, message) {
    const logType = level === 'error' ? 'error' : level === 'warn' ? 'warning' : 'info';
    await codebolt.debug.debug(message, logType);
  }
}

// Usage
const browser = new BrowserDebugSession();

// Start debug session
await browser.start('http://localhost:3000', 9222);

// Log page interactions
await browser.logPageAction('click', { element: 'button#submit', x: 100, y: 200 });

// Log network activity
await browser.logNetworkRequest({
  method: 'GET',
  url: '/api/users',
  status: 200,
  duration: 150
});

// List all active sessions
const sessions = await browser.listSessions();
console.log('Active debug sessions:', sessions);
```

## Module Integration Examples

### Integration with State Module

```javascript
async function debugStateChanges() {
  const initialState = await codebolt.cbstate.getAgentState();

  // Perform state changes
  await codebolt.cbstate.addToAgentState('test_key', 'test_value');

  const newState = await codebolt.cbstate.getAgentState();

  // Log state changes
  await codebolt.debug.debug(
    `State changed:\nBefore: ${JSON.stringify(initialState.payload)}\nAfter: ${JSON.stringify(newState.payload)}`,
    'info'
  );
}
```

### Integration with Memory Module

```javascript
async function debugMemoryOperations() {
  // Log memory write
  await codebolt.debug.debug('Writing to memory', 'info');
  await codebolt.dbmemory.addKnowledge('test:key', { data: 'test' });

  // Log memory read
  await codebolt.debug.debug('Reading from memory', 'info');
  const result = await codebolt.dbmemory.getKnowledge('test:key');

  // Log result
  await codebolt.debug.debug(
    `Memory result: ${JSON.stringify(result)}`,
    'info'
  );
}
```

### Integration with History Module

```javascript
async function debugConversationFlow() {
  const summary = await codebolt.history.summarizeAll();

  await codebolt.debug.debug(
    `Conversation flow:\n${JSON.stringify(summary, null, 2)}`,
    'info'
  );

  // Analyze conversation patterns
  const userMessages = summary.filter(m => m.role === 'user');
  const assistantMessages = summary.filter(m => m.role === 'assistant');

  await codebolt.debug.debug(
    `User messages: ${userMessages.length}, Assistant messages: ${assistantMessages.length}`,
    'info'
  );
}
```

## Best Practices

### 1. Use Appropriate Log Levels

```javascript
// ✅ Good: Use appropriate log levels
await codebolt.debug.debug('Application started', 'info');
await codebolt.debug.debug('High memory usage detected', 'warning');
await codebolt.debug.debug('Database connection failed', 'error');

// ❌ Bad: Always using 'info'
await codebolt.debug.debug('Application started', 'info');
await codebolt.debug.debug('High memory usage detected', 'info');
await codebolt.debug.debug('Database connection failed', 'info');
```

### 2. Include Context in Logs

```javascript
// ✅ Good: Include context
await codebolt.debug.debug(
  `User login failed for ${userId} from ${ipAddress}`,
  'warning'
);

// ❌ Bad: Vague message
await codebolt.debug.debug(
  'Login failed',
  'warning'
);
```

### 3. Use Structured Logging

```javascript
// ✅ Good: Structured data
await codebolt.debug.debug(
  `API request completed: ${JSON.stringify({ endpoint, status, duration })}`,
  'info'
);

// ❌ Bad: Unstructured string
await codebolt.debug.debug(
  `API request to ${endpoint} completed with status ${status} in ${duration}ms`,
  'info'
);
```

### 4. Log Errors with Details

```javascript
// ✅ Good: Include error details
try {
  await riskyOperation();
} catch (error) {
  await codebolt.debug.debug(
    `Operation failed: ${error.message}\nStack: ${error.stack}`,
    'error'
  );
}

// ❌ Bad: Vague error message
try {
  await riskyOperation();
} catch (error) {
  await codebolt.debug.debug('Operation failed', 'error');
}
```

## Performance Considerations

### Avoid Excessive Logging

```javascript
// ❌ Bad: Logging in tight loop
for (let i = 0; i < 10000; i++) {
  await codebolt.debug.debug(`Processing item ${i}`, 'info');
}

// ✅ Good: Log summary
for (let i = 0; i < 10000; i++) {
  processItem(i);
}
await codebolt.debug.debug('Processed 10000 items', 'info');
```

### Use Conditional Logging

```javascript
class SmartLogger {
  constructor() {
    this.enabled = true;
    this.level = 'info';
  }

  async debug(message, type) {
    if (!this.enabled) return;

    const levels = ['info', 'warning', 'error'];
    const currentLevel = levels.indexOf(this.level);
    const messageLevel = levels.indexOf(type);

    if (messageLevel >= currentLevel) {
      await codebolt.debug.debug(message, type);
    }
  }
}
```

## Common Pitfalls

### Pitfall 1: Logging Sensitive Data

```javascript
// ❌ Problem: Logging passwords
await codebolt.debug.debug(`User login: ${username}:${password}`, 'info');

// ✅ Solution: Redact sensitive data
await codebolt.debug.debug(`User login: ${username}:***`, 'info');
```

### Pitfall 2: Not Handling Debug Failures

```javascript
// ❌ Problem: Debug failures crash app
await codebolt.debug.debug(message, 'info'); // May throw

// ✅ Solution: Handle debug errors
try {
  await codebolt.debug.debug(message, 'info');
} catch (error) {
  console.error('Debug logging failed:', error);
  // Continue execution
}
```

### Pitfall 3: Over-logging

```javascript
// ❌ Problem: Too much noise
await codebolt.debug.debug('Starting operation', 'info');
await codebolt.debug.debug('Step 1 complete', 'info');
await codebolt.debug.debug('Step 2 complete', 'info');
await codebolt.debug.debug('Step 3 complete', 'info');
await codebolt.debug.debug('Operation complete', 'info');

// ✅ Solution: Log key milestones
await codebolt.debug.debug('Starting operation', 'info');
await codebolt.debug.debug('Operation complete', 'info');
```

### Pitfall 4: Not Cleaning Up Debug Sessions

```javascript
// ❌ Problem: Debug sessions left open
await codebolt.debug.openDebugBrowser('http://localhost:3000', 9222);
// Forget to close

// ✅ Solution: Always clean up
const session = await codebolt.debug.openDebugBrowser('http://localhost:3000', 9222);

try {
  await doDebugWork();
} finally {
  await cleanupDebugSession(session);
}
```
