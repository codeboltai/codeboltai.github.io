---
sidebar_position: 5
sidebar_label: API Reference
---

# API Reference

Complete reference documentation for all CodeboltJS TypeScript SDK modules and functions.

## Main Codebolt Class

### Constructor & Connection

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for WebSocket connection
await codebolt.waitForConnection(): Promise<void>

// Set up message handler
codebolt.onMessage(handler: (userMessage: any) => void | Promise<void>): void
```

## File System Module (`codebolt.fs`)

### File Operations

```typescript
// Read file content
readFile(filePath: string): Promise<ReadFileResponse>

// Create a new file
createFile(fileName: string, source: string, filePath: string): Promise<CreateFileResponse>

// Update existing file
updateFile(filename: string, filePath: string, newContent: string): Promise<UpdateFileResponse>

// Write to file (alternative method)
writeToFile(relPath: string, newContent: string): Promise<{success: boolean, result: any}>

// Delete a file
deleteFile(filename: string, filePath: string): Promise<DeleteFileResponse>
```

### Folder Operations

```typescript
// Create a new folder
createFolder(folderName: string, folderPath: string): Promise<CreateFolderResponse>

// Delete a folder
deleteFolder(foldername: string, folderpath: string): Promise<DeleteFolderResponse>

// List files in directory
listFile(folderPath: string, isRecursive: boolean = false): Promise<any>
```

### Advanced File Operations

```typescript
// Search files with regex
searchFiles(path: string, regex: string, filePattern: string): Promise<{success: boolean, result: any}>

// List code definitions
listCodeDefinitionNames(path: string): Promise<{success: boolean, result: any}>
```

### Response Types

```typescript
interface ReadFileResponse {
    success: boolean;
    content: string;
    error?: string;
}

interface CreateFileResponse {
    success: boolean;
    message: string;
    error?: string;
}

interface UpdateFileResponse {
    success: boolean;
    message: string;
    error?: string;
}
```

## Terminal Module (`codebolt.terminal`)

### Command Execution

```typescript
// Execute command and wait for completion
executeCommand(command: string, returnEmptyStringOnSuccess: boolean = false): Promise<CommandOutput|CommandError>

// Execute command until error occurs
executeCommandRunUntilError(command: string, executeInMain: boolean = false): Promise<CommandError>

// Execute command with streaming output
executeCommandWithStream(command: string, executeInMain: boolean = false): CustomEventEmitter
```

### Terminal Control

```typescript
// Send interrupt signal (Ctrl+C)
sendManualInterrupt(): Promise<TerminalInterruptResponse>
```

### Event Types

```typescript
interface CommandOutput {
    type: 'commandOutput';
    message: string;
    success: boolean;
}

interface CommandError {
    type: 'commandError';
    message: string;
    error: string;
}

interface CommandFinish {
    type: 'commandFinish';
    message: string;
    success: boolean;
}

// Stream events
stream.on('commandOutput', (data: CommandOutput) => void);
stream.on('commandError', (data: CommandError) => void);
stream.on('commandFinish', (data: CommandFinish) => void);
```

## Chat Module (`codebolt.chat`)

### Basic Communication

```typescript
// Send message to user
sendMessage(message: string, payload?: any): void

// Get chat history
getChatHistory(): Promise<ChatMessage[]>

// Wait for user reply
waitforReply(message: string): Promise<UserMessage>
```

### Interactive Communication

```typescript
// Ask question with buttons
askQuestion(question: string, buttons: string[] = [], withFeedback: boolean = false): Promise<string>

// Send confirmation request
sendConfirmationRequest(confirmationMessage: string, buttons: string[] = [], withFeedback: boolean = false): Promise<string>
```

### Process Management

```typescript
// Start a process with optional stop handler
processStarted(onStopClicked?: (message: any) => void): {
    stopProcess: () => void;
    cleanup?: () => void;
}

// Stop current process
stopProcess(): void

// Mark process as finished
processFinished(): void
```

### Notifications

```typescript
// Send notification event
sendNotificationEvent(notificationMessage: string, type: 'debug' | 'git' | 'planner' | 'browser' | 'editor' | 'terminal' | 'preview'): void
```

### Types

```typescript
interface ChatMessage {
    id: string;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: number;
}

interface UserMessage {
    content: string;
    type: string;
    metadata?: any;
}
```

## LLM Module (`codebolt.llm`)

### Inference

```typescript
// Send inference request to LLM
inference(message: string, llmrole: string): Promise<LLMResponse>
```

### LLM Roles

- `code-reviewer`: Code analysis and review
- `code-generator`: Code generation and creation
- `documentation`: Documentation writing
- `testing`: Test generation and analysis
- `debugging`: Error analysis and debugging
- `general`: General purpose assistance

### Response Type

```typescript
interface LLMResponse {
    message: string;
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
    model: string;
    success: boolean;
}
```

## Git Module (`codebolt.git`)

### Repository Operations

```typescript
// Initialize repository
init(path: string): Promise<any>

// Get repository status
status(): Promise<any>

// Get commit logs
logs(path: string): Promise<any>

// Get commit diff
diff(commitHash: string): Promise<any>
```

### Basic Git Commands

```typescript
// Add all changes
addAll(): Promise<any>

// Commit changes
commit(message: string): Promise<any>

// Push to remote
push(): Promise<any>

// Pull from remote
pull(): Promise<any>
```

### Branch Management

```typescript
// Create new branch
branch(branch: string): Promise<any>

// Checkout branch
checkout(branch: string): Promise<any>
```

## Tools Module (`codebolt.tools`)

### Tool Discovery

```typescript
// Get enabled toolboxes
getEnabledToolBoxes(): Promise<any>

// Get local toolboxes
getLocalToolBoxes(): Promise<any>

// Search available toolboxes
searchAvailableToolBoxes(query: string): Promise<any>

// List tools from toolboxes
listToolsFromToolBoxes(toolBoxes: string[]): Promise<any>
```

### Tool Execution

```typescript
// Get tool details
getTools(tools: { toolbox: string, toolName: string }[]): Promise<any[]>

// Execute a tool
executeTool(toolbox: string, toolName: string, params: any): Promise<any>

// Configure toolbox
configureToolBox(name: string, config: any): Promise<any>
```

## Browser Module (`codebolt.browser`)

### Page Navigation

```typescript
// Create new page
newPage(): Promise<any>

// Navigate to URL
goToPage(url: string): Promise<GoToPageResponse>

// Get current URL
getUrl(): Promise<UrlResponse>

// Close page
close(): void
```

### Content Extraction

```typescript
// Get HTML content
getHTML(): Promise<HtmlReceived>

// Get Markdown content
getMarkdown(): Promise<GetMarkdownResponse>

// Get page content
getContent(): Promise<GetContentResponse>

// Extract text
extractText(): Promise<ExtractTextResponse>

// Get page snapshot
getSnapShot(): Promise<any>

// Get browser info
getBrowserInfo(): Promise<any>
```

### Page Interaction

```typescript
// Take screenshot
screenshot(): Promise<any>

// Scroll page
scroll(direction: string, pixels: string): Promise<any>

// Click element
click(selector: string): Promise<any>

// Type text
type(selector: string, text: string): Promise<any>

// Wait for element
waitForElement(selector: string, timeout?: number): Promise<any>
```

### Response Types

```typescript
interface GoToPageResponse {
    success: boolean;
    url: string;
    error?: string;
}

interface HtmlReceived {
    success: boolean;
    html: string;
    error?: string;
}

interface GetMarkdownResponse {
    success: boolean;
    markdown: string;
    error?: string;
}
```

## Code Utils Module (`codebolt.codeutils`)

### Code Analysis

```typescript
// Parse code structure
parseCode(code: string, language: string): Promise<any>

// Extract functions from code
extractFunctions(code: string, language: string): Promise<any>

// Get imports/dependencies
getImports(code: string, language: string): Promise<any>

// Analyze code complexity
analyzeComplexity(code: string, language: string): Promise<any>
```

### Code Transformation

```typescript
// Format code
formatCode(code: string, language: string, options?: any): Promise<any>

// Minify code
minifyCode(code: string, language: string): Promise<any>

// Transform code (e.g., TypeScript to JavaScript)
transformCode(code: string, fromLanguage: string, toLanguage: string): Promise<any>
```

## Search Module (`codebolt.search`)

### Content Search

```typescript
// Search in files
searchInFiles(query: string, path: string, options?: SearchOptions): Promise<any>

// Find references
findReferences(symbol: string, path: string): Promise<any>

// Search and replace
searchAndReplace(searchTerm: string, replaceTerm: string, path: string): Promise<any>
```

### Search Options

```typescript
interface SearchOptions {
    caseSensitive?: boolean;
    wholeWord?: boolean;
    regex?: boolean;
    includePatterns?: string[];
    excludePatterns?: string[];
}
```

## Vector Database Module (`codebolt.vectordb`)

### Vector Operations

```typescript
// Store vectors
store(id: string, vector: number[], metadata?: any): Promise<any>

// Search similar vectors
search(query: number[], limit?: number, threshold?: number): Promise<any>

// Calculate similarity
similarity(vector1: number[], vector2: number[]): Promise<number>

// Delete vectors
delete(id: string): Promise<any>
```

## Project Module (`codebolt.project`)

### Project Analysis

```typescript
// Get project information
getProjectInfo(): Promise<any>

// Analyze project structure
analyzeStructure(): Promise<any>

// Get project dependencies
getDependencies(): Promise<any>

// Get project metrics
getMetrics(): Promise<any>
```

## Database Memory Module (`codebolt.dbmemory`)

### Persistent Storage

```typescript
// Store data
store(key: string, value: any): Promise<any>

// Retrieve data
retrieve(key: string): Promise<any>

// Update data
update(key: string, value: any): Promise<any>

// Delete data
delete(key: string): Promise<any>

// List all keys
listKeys(): Promise<string[]>
```

## State Module (`codebolt.cbstate`)

### State Management

```typescript
// Set state
setState(key: string, value: any): Promise<any>

// Get state
getState(key: string): Promise<any>

// Clear state
clearState(key?: string): Promise<any>

// Get all state
getAllState(): Promise<any>
```

## Debug Module (`codebolt.debug`)

### Debugging Utilities

```typescript
// Log debug message
log(message: string, ...args: any[]): void

// Trace execution
trace(label: string): void

// Profile performance
profile(label: string): void

// Set debug level
setLevel(level: 'debug' | 'info' | 'warn' | 'error'): void
```

## Tokenizer Module (`codebolt.tokenizer`)

### Text Tokenization

```typescript
// Tokenize text
tokenize(text: string, model?: string): Promise<any>

// Count tokens
countTokens(text: string, model?: string): Promise<number>

// Encode text
encode(text: string, model?: string): Promise<number[]>

// Decode tokens
decode(tokens: number[], model?: string): Promise<string>
```

## Agent Framework Classes

### Agent Class

```typescript
class Agent {
    constructor(tools: any[], systemPrompt: SystemPrompt, maxRun: number = 0)
    
    async run(task: TaskInstruction, successCondition?: () => boolean): Promise<{
        success: boolean;
        error: string | null;
        message: string | null;
    }>
}
```

### SystemPrompt Class

```typescript
class SystemPrompt {
    constructor(filepath?: string, key?: string)
    constructor(promptText: string)
    
    toPromptText(): string
}
```

### TaskInstruction Class

```typescript
class TaskInstruction {
    constructor(
        tools: Tools = {},
        userMessage: UserMessage,
        filepath?: string,
        refsection?: string
    )
    
    async toPrompt(): Promise<UserMessages[]>
}
```

## Utility Functions

### Message Handling

```typescript
// Create user message
createUserMessage(content: string, type?: string): UserMessage

// Parse message content
parseMessageContent(message: any): string

// Validate message format
validateMessage(message: any): boolean
```

### Error Handling

```typescript
// Create error response
createErrorResponse(message: string, code?: string): ErrorResponse

// Handle SDK errors
handleSDKError(error: any): void

// Retry with backoff
retryWithBackoff<T>(fn: () => Promise<T>, maxRetries?: number): Promise<T>
```

## Type Definitions

### Common Types

```typescript
interface ErrorResponse {
    success: false;
    error: string;
    code?: string;
}

interface SuccessResponse<T = any> {
    success: true;
    result: T;
    message?: string;
}

type SDKResponse<T = any> = SuccessResponse<T> | ErrorResponse;
```

### Event Emitter Types

```typescript
interface CustomEventEmitter extends EventEmitter {
    cleanup?: () => void;
}
```

## Usage Examples

### Basic SDK Usage

```typescript
import codebolt from '@codebolt/codeboltjs';

async function main() {
    // Wait for connection
    await codebolt.waitForConnection();
    
    // Set up message handler
    codebolt.onMessage(async (userMessage) => {
        // Handle user requests
        const response = await processRequest(userMessage);
        return response;
    });
}
```

### Error Handling Pattern

```typescript
async function robustOperation() {
    try {
        const result = await codebolt.fs.readFile('./config.json');
        return result;
    } catch (error) {
        console.error('Operation failed:', error);
        // Fallback or retry logic
        throw error;
    }
}
```

### Streaming Operations

```typescript
function streamingCommand() {
    const stream = codebolt.terminal.executeCommandWithStream('npm install');
    
    stream.on('commandOutput', (data) => {
        console.log('Output:', data.message);
    });
    
    stream.on('commandError', (data) => {
        console.error('Error:', data.message);
    });
    
    stream.on('commandFinish', () => {
        console.log('Command completed');
        if (stream.cleanup) {
            stream.cleanup();
        }
    });
    
    return stream;
}
```

## Best Practices

### 1. Always Handle Errors

```typescript
// Good
try {
    const result = await codebolt.fs.readFile('./file.txt');
    // Process result
} catch (error) {
    // Handle error appropriately
    console.error('Failed to read file:', error);
}

// Bad
const result = await codebolt.fs.readFile('./file.txt'); // No error handling
```

### 2. Clean Up Resources

```typescript
// Good
const stream = codebolt.terminal.executeCommandWithStream('command');
// ... use stream
if (stream.cleanup) {
    stream.cleanup();
}

// Good
const processControl = codebolt.chat.processStarted();
// ... do work
processControl.stopProcess();
```

### 3. Use Appropriate Types

```typescript
// Good
interface FileAnalysis {
    totalLines: number;
    functions: string[];
    imports: string[];
}

async function analyzeFile(path: string): Promise<FileAnalysis> {
    // Implementation
}

// Bad
async function analyzeFile(path: any): Promise<any> {
    // Implementation
}
```

### 4. Provide User Feedback

```typescript
// Good
await codebolt.chat.sendMessage('Starting analysis...');
const result = await performAnalysis();
await codebolt.chat.sendMessage('Analysis completed!');

// Bad
const result = await performAnalysis(); // No user feedback
```

---

This API reference provides comprehensive documentation for all CodeboltJS SDK modules and functions. Use it as a quick reference while developing your agents. 