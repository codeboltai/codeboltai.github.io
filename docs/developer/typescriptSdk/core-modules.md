---
sidebar_position: 3
sidebar_label: Core Modules
---

# Core Modules

The CodeboltJS SDK provides a comprehensive set of modules for different functionalities. This guide covers the most essential core modules that every agent developer should know.

## File System Module (`codebolt.fs`)

The file system module provides complete file and folder management capabilities.

### Key Functions

#### File Operations

```typescript
// Read file content
const content = await codebolt.fs.readFile('./src/index.ts');
console.log(content.content); // File content as string

// Create a new file
await codebolt.fs.createFile(
    'newComponent.tsx',           // filename
    'export default function NewComponent() { return <div>Hello</div>; }', // content
    './src/components/'           // path
);

// Update existing file
await codebolt.fs.updateFile(
    'index.ts',                   // filename
    './src/',                     // filepath
    'console.log("Updated!");'    // new content
);

// Write to file (simpler alternative)
await codebolt.fs.writeToFile(
    './src/config.json',          // relative path
    JSON.stringify({ version: '1.0.0' }, null, 2)
);

// Delete a file
await codebolt.fs.deleteFile('oldFile.js', './src/');
```

#### Folder Operations

```typescript
// Create a new folder
await codebolt.fs.createFolder('components', './src/');

// List files in a directory
const files = await codebolt.fs.listFile('./', true); // recursive
console.log(files); // Array of file objects

// Delete a folder
await codebolt.fs.deleteFolder('oldFolder', './src/');
```

#### Advanced File Operations

```typescript
// Search files with regex
const searchResults = await codebolt.fs.searchFiles(
    './src/',                     // search path
    'function\\s+\\w+',          // regex pattern
    '*.ts'                       // file pattern
);

// List code definitions (functions, classes, etc.)
const definitions = await codebolt.fs.listCodeDefinitionNames('./src/');
console.log(definitions.result); // Array of code definitions
```

### Example: File Analysis Agent

```typescript
async function analyzeProject() {
    // Get all TypeScript files
    const files = await codebolt.fs.listFile('./', true);
    const tsFiles = files.filter(f => f.name.endsWith('.ts') || f.name.endsWith('.tsx'));
    
    let totalLines = 0;
    let totalFunctions = 0;
    
    for (const file of tsFiles) {
        // Read file content
        const content = await codebolt.fs.readFile(file.path);
        totalLines += content.content.split('\n').length;
        
        // Find function definitions
        const functions = await codebolt.fs.searchFiles(
            file.path,
            'function\\s+\\w+|const\\s+\\w+\\s*=\\s*\\(',
            '*.ts'
        );
        totalFunctions += functions.result.length;
    }
    
    return {
        totalFiles: tsFiles.length,
        totalLines,
        totalFunctions,
        averageLinesPerFile: Math.round(totalLines / tsFiles.length)
    };
}
```

## Terminal Module (`codebolt.terminal`)

Execute commands and interact with the system terminal.

### Key Functions

#### Basic Command Execution

```typescript
// Execute a command and wait for completion
const result = await codebolt.terminal.executeCommand('npm install');
console.log(result.output); // Command output

// Execute with empty string on success (cleaner output)
const cleanResult = await codebolt.terminal.executeCommand('npm test', true);

// Execute command that runs until error
const longRunning = await codebolt.terminal.executeCommandRunUntilError(
    'npm run dev',
    false // executeInMain terminal
);
```

#### Streaming Command Execution

```typescript
// Execute command with real-time output streaming
const stream = codebolt.terminal.executeCommandWithStream('npm run build');

stream.on('commandOutput', (data) => {
    console.log('Output:', data.message);
    // Send progress to user
    codebolt.chat.sendMessage(`Build progress: ${data.message}`);
});

stream.on('commandError', (data) => {
    console.error('Error:', data.message);
});

stream.on('commandFinish', (data) => {
    console.log('Command completed');
    // Clean up the stream
    if (stream.cleanup) {
        stream.cleanup();
    }
});
```

#### Terminal Control

```typescript
// Send interrupt signal (Ctrl+C)
const interruptResult = await codebolt.terminal.sendManualInterrupt();
console.log('Interrupt sent:', interruptResult.success);
```

### Example: Build and Test Agent

```typescript
async function buildAndTest() {
    await codebolt.chat.sendMessage('🔨 Starting build process...');
    
    try {
        // Install dependencies
        await codebolt.chat.sendMessage('📦 Installing dependencies...');
        await codebolt.terminal.executeCommand('npm install');
        
        // Run build with streaming output
        await codebolt.chat.sendMessage('🏗️ Building project...');
        const buildStream = codebolt.terminal.executeCommandWithStream('npm run build');
        
        buildStream.on('commandOutput', (data) => {
            if (data.message.includes('error') || data.message.includes('Error')) {
                codebolt.chat.sendMessage(`❌ Build error: ${data.message}`);
            }
        });
        
        buildStream.on('commandFinish', async () => {
            await codebolt.chat.sendMessage('✅ Build completed successfully!');
            
            // Run tests
            await codebolt.chat.sendMessage('🧪 Running tests...');
            const testResult = await codebolt.terminal.executeCommand('npm test');
            
            if (testResult.success) {
                await codebolt.chat.sendMessage('✅ All tests passed!');
            } else {
                await codebolt.chat.sendMessage(`❌ Tests failed: ${testResult.error}`);
            }
        });
        
    } catch (error) {
        await codebolt.chat.sendMessage(`💥 Build failed: ${error.message}`);
    }
}
```

## Chat Module (`codebolt.chat`)

Handle real-time communication with users.

### Key Functions

#### Basic Communication

```typescript
// Send a message to the user
await codebolt.chat.sendMessage('Hello! How can I help you today?');

// Send message with payload data
await codebolt.chat.sendMessage('Task completed', {
    taskId: '123',
    duration: '2.5s',
    filesModified: 3
});

// Get chat history
const history = await codebolt.chat.getChatHistory();
console.log(history); // Array of ChatMessage objects
```

#### Interactive Communication

```typescript
// Ask a question with custom buttons
const response = await codebolt.chat.askQuestion(
    'Which framework would you like to use?',
    ['React', 'Vue', 'Angular'],
    false // withFeedback
);
console.log('User selected:', response);

// Send confirmation request
const confirmed = await codebolt.chat.sendConfirmationRequest(
    'Do you want to proceed with the deployment?',
    ['Yes', 'No', 'Cancel']
);

if (confirmed === 'Yes') {
    // Proceed with deployment
}
```

#### Process Management

```typescript
// Notify that a process has started
const processControl = codebolt.chat.processStarted((stopMessage) => {
    console.log('User requested to stop the process');
    // Handle stop request
});

// Long running operation
setTimeout(() => {
    // Stop the process when done
    processControl.stopProcess();
}, 5000);

// Alternative: Simple process completion
await codebolt.chat.processFinished();
```

#### Notifications

```typescript
// Send different types of notifications
codebolt.chat.sendNotificationEvent('Git commit successful', 'git');
codebolt.chat.sendNotificationEvent('Tests are running...', 'terminal');
codebolt.chat.sendNotificationEvent('Code analysis complete', 'editor');
codebolt.chat.sendNotificationEvent('Browser automation started', 'browser');
```

### Example: Interactive Code Review

```typescript
async function interactiveCodeReview() {
    await codebolt.chat.sendMessage('🔍 Starting code review process...');
    
    // Get files to review
    const files = await codebolt.fs.listFile('./src/', true);
    const codeFiles = files.filter(f => 
        f.name.endsWith('.ts') || f.name.endsWith('.js') || f.name.endsWith('.tsx')
    );
    
    for (const file of codeFiles) {
        const content = await codebolt.fs.readFile(file.path);
        
        // Analyze the file (simplified)
        const issues = analyzeCodeIssues(content.content);
        
        if (issues.length > 0) {
            await codebolt.chat.sendMessage(
                `⚠️ Found ${issues.length} issues in ${file.name}:\n${issues.join('\n')}`
            );
            
            const action = await codebolt.chat.askQuestion(
                'What would you like to do?',
                ['Fix automatically', 'Show details', 'Skip', 'Stop review']
            );
            
            switch (action) {
                case 'Fix automatically':
                    await fixCodeIssues(file.path, issues);
                    await codebolt.chat.sendMessage('✅ Issues fixed automatically');
                    break;
                case 'Show details':
                    await showIssueDetails(issues);
                    break;
                case 'Stop review':
                    return;
            }
        }
    }
    
    await codebolt.chat.sendMessage('✅ Code review completed!');
}
```

## LLM Module (`codebolt.llm`)

Interact with language models for AI-powered functionality.

### Key Functions

```typescript
// Basic LLM inference
const response = await codebolt.llm.inference(
    'Explain this code and suggest improvements: function add(a, b) { return a + b; }',
    'code-reviewer' // LLM role
);

console.log(response.message); // LLM response
console.log(response.usage);   // Token usage information
```

### LLM Roles

Different roles optimize the LLM for specific tasks:

- `code-reviewer`: Code analysis and review
- `code-generator`: Code generation and creation
- `documentation`: Documentation writing
- `testing`: Test generation and analysis
- `debugging`: Error analysis and debugging
- `general`: General purpose assistance

### Example: AI-Powered Code Generator

```typescript
async function generateComponent(componentName: string, description: string) {
    const prompt = `
Generate a React TypeScript component with the following requirements:
- Component name: ${componentName}
- Description: ${description}
- Use modern React patterns (hooks, functional components)
- Include proper TypeScript types
- Add basic styling with CSS modules
- Include JSDoc comments

Return only the component code, no explanations.
`;

    const response = await codebolt.llm.inference(prompt, 'code-generator');
    
    // Save the generated component
    await codebolt.fs.createFile(
        `${componentName}.tsx`,
        response.message,
        './src/components/'
    );
    
    await codebolt.chat.sendMessage(
        `✅ Generated ${componentName} component with ${response.usage.total_tokens} tokens used`
    );
    
    return response.message;
}
```

## Git Module (`codebolt.git`)

Complete Git operations integration.

### Key Functions

#### Repository Status and Information

```typescript
// Get repository status
const status = await codebolt.git.status();
console.log(status); // Git status information

// Get commit logs
const logs = await codebolt.git.logs('./');
console.log(logs); // Array of commit information

// Get diff for a specific commit
const diff = await codebolt.git.diff('abc123'); // commit hash
console.log(diff); // Commit diff information
```

#### Basic Git Operations

```typescript
// Initialize a new repository
await codebolt.git.init('./my-project');

// Add all changes to staging
await codebolt.git.addAll();

// Commit changes
await codebolt.git.commit('feat: add new feature');

// Push to remote
await codebolt.git.push();

// Pull from remote
await codebolt.git.pull();
```

#### Branch Management

```typescript
// Create a new branch
await codebolt.git.branch('feature/new-feature');

// Checkout a branch
await codebolt.git.checkout('feature/new-feature');

// Checkout and create in one step
await codebolt.git.checkout('-b feature/another-feature');
```

### Example: Automated Git Workflow

```typescript
async function automatedGitWorkflow(commitMessage: string) {
    try {
        // Check current status
        const status = await codebolt.git.status();
        
        if (status.changes && status.changes.length > 0) {
            await codebolt.chat.sendMessage(`📝 Found ${status.changes.length} changes to commit`);
            
            // Add all changes
            await codebolt.git.addAll();
            await codebolt.chat.sendMessage('✅ Added all changes to staging');
            
            // Commit changes
            await codebolt.git.commit(commitMessage);
            await codebolt.chat.sendMessage(`✅ Committed changes: "${commitMessage}"`);
            
            // Ask if user wants to push
            const shouldPush = await codebolt.chat.askQuestion(
                'Do you want to push the changes to remote?',
                ['Yes', 'No']
            );
            
            if (shouldPush === 'Yes') {
                await codebolt.git.push();
                await codebolt.chat.sendMessage('✅ Changes pushed to remote repository');
            }
        } else {
            await codebolt.chat.sendMessage('ℹ️ No changes to commit');
        }
        
    } catch (error) {
        await codebolt.chat.sendMessage(`❌ Git operation failed: ${error.message}`);
    }
}
```

## Tools Module (`codebolt.tools`)

Discover and execute MCP-compatible tools.

### Key Functions

#### Tool Discovery

```typescript
// Get enabled toolboxes
const enabledToolboxes = await codebolt.tools.getEnabledToolBoxes();
console.log(enabledToolboxes);

// Get local toolboxes
const localToolboxes = await codebolt.tools.getLocalToolBoxes();

// Search for available toolboxes
const searchResults = await codebolt.tools.searchAvailableToolBoxes('npm');

// List tools from specific toolboxes
const tools = await codebolt.tools.listToolsFromToolBoxes(['codebolt', 'git']);
```

#### Tool Execution

```typescript
// Get detailed tool information
const toolDetails = await codebolt.tools.getTools([
    { toolbox: 'npm', toolName: 'install' },
    { toolbox: 'git', toolName: 'status' }
]);

// Execute a tool
const result = await codebolt.tools.executeTool(
    'npm',              // toolbox name
    'install',          // tool name
    {                   // parameters
        package: 'lodash',
        saveDev: false
    }
);
```

#### Tool Configuration

```typescript
// Configure a toolbox
await codebolt.tools.configureToolBox('database', {
    connectionString: 'postgresql://localhost:5432/mydb',
    timeout: 30000
});
```

### Example: Dynamic Tool Usage

```typescript
async function dynamicToolExecution(userRequest: string) {
    // Search for relevant tools based on user request
    const searchResults = await codebolt.tools.searchAvailableToolBoxes(userRequest);
    
    if (searchResults.length > 0) {
        const toolbox = searchResults[0];
        
        // Get available tools from the toolbox
        const tools = await codebolt.tools.listToolsFromToolBoxes([toolbox.name]);
        
        // Let user choose a tool
        const toolNames = tools.map(t => t.name);
        const selectedTool = await codebolt.chat.askQuestion(
            `Found ${toolNames.length} tools in ${toolbox.name}. Which one would you like to use?`,
            toolNames
        );
        
        // Get tool details
        const toolDetails = await codebolt.tools.getTools([
            { toolbox: toolbox.name, toolName: selectedTool }
        ]);
        
        // Execute the tool (simplified - you'd need to gather parameters)
        const result = await codebolt.tools.executeTool(
            toolbox.name,
            selectedTool,
            {} // parameters would be gathered from user
        );
        
        await codebolt.chat.sendMessage(`Tool executed successfully: ${JSON.stringify(result)}`);
    } else {
        await codebolt.chat.sendMessage('No relevant tools found for your request');
    }
}
```

## Module Integration Patterns

### Combining Multiple Modules

```typescript
async function fullStackDevelopmentWorkflow() {
    // 1. File System: Analyze project structure
    const files = await codebolt.fs.listFile('./', true);
    
    // 2. Git: Check repository status
    const gitStatus = await codebolt.git.status();
    
    // 3. Terminal: Install dependencies
    await codebolt.terminal.executeCommand('npm install');
    
    // 4. LLM: Generate code based on analysis
    const analysis = await codebolt.llm.inference(
        `Analyze this project structure: ${JSON.stringify(files)}`,
        'code-reviewer'
    );
    
    // 5. Chat: Communicate with user
    await codebolt.chat.sendMessage(`Analysis complete: ${analysis.message}`);
    
    // 6. Tools: Use additional tools if needed
    const tools = await codebolt.tools.listToolsFromToolBoxes(['codebolt']);
    
    return {
        projectFiles: files.length,
        gitStatus: gitStatus,
        analysis: analysis.message,
        availableTools: tools.length
    };
}
```

## Error Handling Best Practices

```typescript
async function robustModuleUsage() {
    try {
        // File operations with error handling
        const fileExists = await codebolt.fs.readFile('./config.json')
            .catch(() => null);
        
        if (!fileExists) {
            await codebolt.fs.createFile('config.json', '{}', './');
        }
        
        // Terminal operations with timeout
        const result = await Promise.race([
            codebolt.terminal.executeCommand('npm test'),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), 30000)
            )
        ]);
        
        // LLM operations with fallback
        const llmResponse = await codebolt.llm.inference('test prompt', 'general')
            .catch(error => ({
                message: 'LLM service unavailable',
                usage: { total_tokens: 0 }
            }));
        
    } catch (error) {
        await codebolt.chat.sendMessage(`Operation failed: ${error.message}`);
        codebolt.debug.log('Error details:', error);
    }
}
```

## Next Steps

Now that you understand the core modules:

1. **[Agent Framework](./agent-framework.md)** - Build sophisticated agents using the Agent class
2. **[API Reference](./api-reference.md)** - Complete function documentation
3. **[Examples](./examples.md)** - See real-world implementations
4. **[Best Practices](./best-practices.md)** - Advanced patterns and optimization

---

These core modules provide the foundation for building powerful Codebolt agents. Master these, and you'll be able to create agents that can handle complex development workflows with ease! 