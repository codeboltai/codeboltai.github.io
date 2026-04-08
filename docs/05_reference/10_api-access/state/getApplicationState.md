---
name: getApplicationState
cbbaseinfo:
  description: Gets the current application state from the server.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: "Promise<ApplicationState>"
    description: A promise that resolves with the application state object.
    typeArgs: []
data:
  name: getApplicationState
  category: state
  link: getApplicationState.md
---
# getApplicationState

```typescript
codebolt.state.getApplicationState(): Promise<ApplicationState>
```

Gets the current application state from the server.
### Returns

- **`Promise<ApplicationState>`**: A promise that resolves with the application state object.

### Example 1: Basic Application State

```js
// Get the current application state
const appState = await codebolt.state.getApplicationState();
console.log('Application state:', appState);

// Response structure varies based on application
// May include: version, configuration, settings, etc.
```

### Example 2: Check Application Status

```js
// Monitor application status
async function checkApplicationHealth() {
  const state = await codebolt.state.getApplicationState();

  const health = {
    status: state.status || 'unknown',
    version: state.version || 'unknown',
    connected: state.connected || false,
    uptime: state.uptime || 0
  };

  console.log('Application Health:', health);

  return health;
}

// Usage
const health = await checkApplicationHealth();
console.log('App is', health.status);
```

### Example 3: Application Configuration

```js
// Get application configuration from state
async function getAppConfiguration() {
  const state = await codebolt.state.getApplicationState();

  const config = {
    environment: state.environment,
    apiVersion: state.apiVersion,
    features: state.features || {},
    limits: state.limits || {}
  };

  console.log('Application configuration:', config);

  return config;
}

// Usage
const config = await getAppConfiguration();
if (config.features.advancedMode) {
  console.log('Advanced mode enabled');
}
```

### Example 4: State Comparison

```js
// Compare application state over time
async function monitorAppStateChanges(intervalMs = 5000) {
  const previousState = await codebolt.state.getApplicationState();

  const monitor = setInterval(async () => {
    const currentState = await codebolt.state.getApplicationState();

    const changes = detectChanges(previousState, currentState);

    if (Object.keys(changes).length > 0) {
      console.log('Application state changed:', changes);
    }

    Object.assign(previousState, currentState);
  }, intervalMs);

  return () => clearInterval(monitor);
}

function detectChanges(prev, current) {
  const changes = {};
  for (const key in current) {
    if (prev[key] !== current[key]) {
      changes[key] = {
        from: prev[key],
        to: current[key]
      };
    }
  }
  return changes;
}

// Usage
const stopMonitoring = await monitorAppStateChanges(10000);
```

### Example 5: Application Initialization Check

```js
// Verify application is properly initialized
async function verifyApplicationInit() {
  const state = await codebolt.state.getApplicationState();

  const checks = {
    initialized: state.initialized === true,
    hasConfig: !!state.config,
    hasSession: !!state.sessionId,
    connected: state.connected === true
  };

  const allPassed = Object.values(checks).every(v => v === true);

  console.log('Initialization checks:', checks);
  console.log('Application ready:', allPassed);

  return {
    ready: allPassed,
    checks,
    state
  };
}

// Usage
const verification = await verifyApplicationInit();
if (verification.ready) {
  console.log('Application is ready for operations');
} else {
  console.log('Application not fully initialized');
}
```

### Example 6: State-Based Feature Flags

```js
// Check feature flags from application state
async function checkFeatureFlags() {
  const state = await codebolt.state.getApplicationState();

  const flags = {
    betaFeatures: state.features?.betaFeatures || false,
    advancedMode: state.features?.advancedMode || false,
    debugMode: state.features?.debugMode || false,
    experimental: state.features?.experimental || false
  };

  console.log('Feature flags:', flags);

  // Apply feature-based logic
  if (flags.betaFeatures) {
    console.log('Beta features enabled');
  }

  if (flags.debugMode) {
    console.log('Debug mode active - detailed logging enabled');
  }

  return flags;
}

// Usage
const flags = await checkFeatureFlags();
if (flags.advancedMode) {
  // Enable advanced functionality
}
```

### Explanation

The `codebolt.state.getApplicationState()` function retrieves the current global application state. This provides a snapshot of the application's overall status, configuration, and settings.

**Key Points:**
- **Global State**: Returns application-wide state information
- **Read-Only**: Retrieves state without modifying it
- **Comprehensive**: Includes various application properties
- **Real-Time**: Reflects current application state

**Return Value Structure:**
```js
{
  // Common properties (may vary)
  status: string,           // Application status
  version: string,          // Application version
  connected: boolean,       // Connection status
  initialized: boolean,     // Initialization status
  environment: string,      // Environment (dev/prod)
  sessionId: string,        // Current session ID
  config: object,          // Application configuration
  features: object,        // Feature flags
  limits: object,          // Application limits
  uptime: number,          // Uptime in milliseconds
  // ... other application-specific properties
}
```

**Common Use Cases:**
- Checking application health
- Verifying initialization
- Accessing configuration
- Monitoring status
- Feature flag checks
- Debugging and diagnostics

**Best Practices:**
1. Cache state when appropriate to reduce API calls
2. Handle missing properties gracefully
3. Use for monitoring and diagnostics
4. Compare state over time for changes
5. Verify initialization before operations

**Typical Workflow:**
```js
// 1. Get application state
const state = await codebolt.state.getApplicationState();

// 2. Verify application is ready
if (state.initialized && state.connected) {
  // 3. Proceed with operations
  console.log('Application ready');
} else {
  // 4. Handle unready state
  console.log('Application not ready');
}
```

**State Properties (Common):**
- **status**: Current application status
- **version**: Application version
- **connected**: WebSocket connection status
- **initialized**: Whether initialization is complete
- **environment**: Runtime environment
- **config**: Application configuration object
- **features**: Feature flags and toggles

**Advanced Patterns:**
- State change monitoring
- Health check implementations
- Feature flag systems
- Configuration access
- Initialization verification
- State comparison and diffing

**Related Functions:**
- `getAgentState()`: Get agent-specific state
- `getProjectState()`: Get project-level state
- `updateProjectState()`: Update project state
- `addToAgentState()`: Add to agent state

**Notes:**
- State structure may vary by application
- Some properties may be optional
- State reflects current point in time
- Use for read-only operations
- Consider state consistency for critical operations
- May include sensitive information - handle securely