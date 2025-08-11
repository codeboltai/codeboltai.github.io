---
name: openDebugBrowser
cbbaseinfo:
  description: Requests to open a debug browser at the specified URL and port. This enables debugging capabilities for web applications.
cbparameters:
  parameters:
    - name: url
      typeName: string
      description: The URL where the debug browser should be opened (e.g., 'http://localhost:3000').
    - name: port
      typeName: number
      description: The port on which the debug browser will listen (e.g., 9222 for Chrome DevTools).
  returns:
    signatureTypeName: Promise<OpenDebugBrowserResponse>
    description: A promise that resolves with an `OpenDebugBrowserResponse` object containing the response type and browser configuration.
data:
  name: openDebugBrowser
  category: debug
  link: openDebugBrowser.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to an `OpenDebugBrowserResponse` object with the following properties:

- **`type`** (string): Always "openDebugBrowserResponse".
- **`url`** (string, optional): The URL where the debug browser was opened.
- **`port`** (number, optional): The port on which the debug browser is listening.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Examples

```javascript
// Example 1: Open debug browser for local development
const debugResult = await codebolt.debug.openDebugBrowser("http://localhost:3000", 9222);
console.log("Response type:", debugResult.type); // "openDebugBrowserResponse"
console.log("Debug URL:", debugResult.url); // "http://localhost:3000"
console.log("Debug port:", debugResult.port); // 9222

// Example 2: Open debug browser with custom configuration
const customResult = await codebolt.debug.openDebugBrowser("http://localhost:8080", 9223);
console.log("Debug browser opened:", customResult.success); // true (if successful)

// Example 3: Error handling
try {
  const browserResult = await codebolt.debug.openDebugBrowser("http://localhost:4000", 9224);
  
  if (browserResult.success) {
    console.log("Debug browser opened successfully");
    console.log("Access debug tools at:", browserResult.url);
    console.log("Debug port:", browserResult.port);
  } else {
    console.error("Failed to open debug browser:", browserResult.error);
  }
} catch (error) {
  console.error("Error opening debug browser:", error);
}

// Example 4: Multiple debug sessions
const debugSessions = [
  { url: "http://localhost:3000", port: 9222 },
  { url: "http://localhost:3001", port: 9223 },
  { url: "http://localhost:3002", port: 9224 }
];

for (const session of debugSessions) {
  const result = await codebolt.debug.openDebugBrowser(session.url, session.port);
  console.log(`Debug session for ${session.url}: ${result.success ? 'opened' : 'failed'}`);
}

// Example 5: Development workflow
const devUrl = "http://localhost:3000";
const devPort = 9222;

const debugBrowser = await codebolt.debug.openDebugBrowser(devUrl, devPort);

if (debugBrowser.success) {
  console.log("Debug browser ready for development");
  console.log("Connect your debugger to:", debugBrowser.url);
  console.log("Debug port:", debugBrowser.port);
  
  // Continue with development workflow
} else {
  console.error("Failed to start debug browser:", debugBrowser.error);
}
```

### Common Use Cases

- **Local Development**: Debug web applications running on localhost
- **Remote Debugging**: Connect to applications running on different ports
- **Testing**: Set up debugging environments for automated testing
- **Development Tools**: Enable Chrome DevTools or similar debugging interfaces

### Notes

- The debug browser enables advanced debugging capabilities for web applications.
- The URL should be accessible and the port should be available for the debug session.
- Common debug ports include 9222 (Chrome DevTools), 9229 (Node.js), and custom ports.
- The response includes the actual URL and port used for the debug session.
- If the operation fails, check the `error` property for details about connectivity or port availability.
- This feature is particularly useful for debugging web applications and Node.js services.

### Status

This feature is currently in development and will be available in future releases.