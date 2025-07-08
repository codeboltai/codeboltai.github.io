---
name: executeCommand
cbbaseinfo:
  description: Executes a given command in the terminal environment and returns the result. This method listens for WebSocket messages that indicate the output, error, or finish state of the executed command and resolves the promise accordingly.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed in the terminal (e.g., "node --version", "npm install", "ls -la").
    - name: returnEmptyStringOnSuccess
      typeName: boolean
      description: "Optional parameter to return empty string on success instead of command output. Defaults to false."
  returns:
    signatureTypeName: Promise<CommandFinish | CommandError>
    description: A promise that resolves with either a CommandFinish object (on success) or CommandError object (on failure) containing the command's output or error information.
data:
  name: executeCommand
  category: terminal
  link: executeCommand.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to either a `CommandFinish` or `CommandError` object:

#### CommandFinish (Success Response)
- **`type`** (string): Always "commandFinish".
- **`exitCode`** (number): The exit code of the command (0 for success).
- **`stdout`** (string, optional): Standard output from the command.
- **`stderr`** (string, optional): Standard error output from the command.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`data`** (any, optional): Additional data from the response.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

#### CommandError (Error Response)
- **`type`** (string): Always "commandError".
- **`error`** (string): Error message describing what went wrong.
- **`exitCode`** (number, optional): The exit code of the failed command.
- **`stderr`** (string, optional): Standard error output from the command.
- **`success`** (boolean, optional): Indicates if the operation was successful (typically false).
- **`message`** (string, optional): Additional information about the response.
- **`data`** (any, optional): Additional data from the response.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic command execution
const nodeVersionResult = await codebolt.terminal.executeCommand('node --version');
console.log('✅ Node version:', nodeVersionResult);
console.log('Exit code:', nodeVersionResult.exitCode);
console.log('Output:', nodeVersionResult.stdout);

// Example 2: Command with npm version check
const npmVersionResult = await codebolt.terminal.executeCommand('npm --version');
console.log('✅ NPM version:', npmVersionResult);

// Example 3: Command with returnEmptyStringOnSuccess option
const emptyResult = await codebolt.terminal.executeCommand('echo "test"', true);
console.log('✅ Empty result (success):', emptyResult);
if (emptyResult.type === 'commandFinish') {
    console.log('Command completed successfully with exit code:', emptyResult.exitCode);
}

// Example 4: Error handling with try-catch
const executeWithErrorHandling = async (command) => {
    try {
        const result = await codebolt.terminal.executeCommand(command);
        
        if (result.type === 'commandFinish') {
            console.log('✅ Command succeeded');
            console.log('Exit code:', result.exitCode);
            console.log('Output:', result.stdout);
            return result;
        } else if (result.type === 'commandError') {
            console.error('❌ Command failed');
            console.error('Error:', result.error);
            console.error('Exit code:', result.exitCode);
            console.error('Stderr:', result.stderr);
            return result;
        }
    } catch (error) {
        console.error('❌ Exception during command execution:', error.message);
        throw error;
    }
};

// Usage
await executeWithErrorHandling('ls -la');
await executeWithErrorHandling('invalidcommand');

// Example 5: File operations
const executeFileOperations = async () => {
    // Create a directory
    const mkdirResult = await codebolt.terminal.executeCommand('mkdir test-folder');
    if (mkdirResult.type === 'commandFinish' && mkdirResult.exitCode === 0) {
        console.log('✅ Directory created successfully');
        
        // List directory contents
        const lsResult = await codebolt.terminal.executeCommand('ls -la');
        if (lsResult.type === 'commandFinish') {
            console.log('📁 Directory contents:');
            console.log(lsResult.stdout);
        }
        
        // Remove the directory
        const rmResult = await codebolt.terminal.executeCommand('rmdir test-folder');
        if (rmResult.type === 'commandFinish') {
            console.log('✅ Directory removed successfully');
        }
    }
};

// Example 6: Package management operations
const packageOperations = async () => {
    // Check if package.json exists
    const checkPackageJson = await codebolt.terminal.executeCommand('test -f package.json');
    
    if (checkPackageJson.type === 'commandFinish' && checkPackageJson.exitCode === 0) {
        console.log('📦 package.json found');
        
        // Install dependencies
        const installResult = await codebolt.terminal.executeCommand('npm install');
        if (installResult.type === 'commandFinish') {
            console.log('✅ Dependencies installed');
            console.log('Install output:', installResult.stdout);
        } else {
            console.error('❌ Failed to install dependencies:', installResult.error);
        }
    } else {
        console.log('⚠️ No package.json found');
    }
};

// Example 7: System information gathering
const gatherSystemInfo = async () => {
    const commands = [
        { name: 'OS Info', cmd: 'uname -a' },
        { name: 'Current Directory', cmd: 'pwd' },
        { name: 'Disk Space', cmd: 'df -h' },
        { name: 'Memory Info', cmd: 'free -h' },
        { name: 'Node Version', cmd: 'node --version' },
        { name: 'NPM Version', cmd: 'npm --version' }
    ];
    
    const systemInfo = {};
    
    for (const { name, cmd } of commands) {
        try {
            const result = await codebolt.terminal.executeCommand(cmd);
            
            if (result.type === 'commandFinish') {
                systemInfo[name] = {
                    success: true,
                    output: result.stdout?.trim(),
                    exitCode: result.exitCode
                };
                console.log(`✅ ${name}: ${result.stdout?.trim()}`);
            } else {
                systemInfo[name] = {
                    success: false,
                    error: result.error,
                    exitCode: result.exitCode
                };
                console.log(`❌ ${name}: ${result.error}`);
            }
        } catch (error) {
            systemInfo[name] = {
                success: false,
                error: error.message
            };
            console.log(`❌ ${name}: Exception - ${error.message}`);
        }
    }
    
    return systemInfo;
};

// Example 8: Command execution with timeout simulation
const executeWithTimeout = async (command, timeoutMs = 10000) => {
    console.log(`🔄 Executing: ${command}`);
    
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Command timeout after ${timeoutMs}ms`));
        }, timeoutMs);
    });
    
    try {
        const result = await Promise.race([
            codebolt.terminal.executeCommand(command),
            timeoutPromise
        ]);
        
        if (result.type === 'commandFinish') {
            console.log(`✅ Command completed in time`);
            console.log(`Exit code: ${result.exitCode}`);
            if (result.stdout) {
                console.log(`Output: ${result.stdout.substring(0, 200)}...`);
            }
        } else if (result.type === 'commandError') {
            console.log(`❌ Command failed`);
            console.log(`Error: ${result.error}`);
            console.log(`Exit code: ${result.exitCode}`);
        }
        
        return result;
    } catch (error) {
        console.error(`⏰ ${error.message}`);
        throw error;
    }
};

// Usage
await executeWithTimeout('echo "Quick command"', 5000);

// Example 9: Conditional command execution
const conditionalExecution = async () => {
    // Check if Git is available
    const gitCheck = await codebolt.terminal.executeCommand('git --version');
    
    if (gitCheck.type === 'commandFinish') {
        console.log('✅ Git is available:', gitCheck.stdout?.trim());
        
        // Check if we're in a Git repository
        const gitRepoCheck = await codebolt.terminal.executeCommand('git rev-parse --is-inside-work-tree');
        
        if (gitRepoCheck.type === 'commandFinish') {
            console.log('📁 Inside Git repository');
            
            // Get Git status
            const gitStatus = await codebolt.terminal.executeCommand('git status --porcelain');
            if (gitStatus.type === 'commandFinish') {
                if (gitStatus.stdout?.trim()) {
                    console.log('📝 Repository has changes');
                    console.log(gitStatus.stdout);
                } else {
                    console.log('✨ Repository is clean');
                }
            }
        } else {
            console.log('⚠️ Not in a Git repository');
        }
    } else {
        console.log('❌ Git is not available:', gitCheck.error);
    }
};

// Example 10: Batch command execution with results summary
const batchExecution = async (commands) => {
    const results = [];
    let successCount = 0;
    let failureCount = 0;
    
    console.log(`🔄 Executing ${commands.length} commands...`);
    
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        console.log(`[${i + 1}/${commands.length}] Executing: ${command}`);
        
        try {
            const result = await codebolt.terminal.executeCommand(command);
            
            if (result.type === 'commandFinish') {
                successCount++;
                console.log(`✅ [${i + 1}] Success (exit code: ${result.exitCode})`);
            } else {
                failureCount++;
                console.log(`❌ [${i + 1}] Failed: ${result.error}`);
            }
            
            results.push({
                command,
                result,
                index: i + 1,
                success: result.type === 'commandFinish'
            });
        } catch (error) {
            failureCount++;
            console.log(`❌ [${i + 1}] Exception: ${error.message}`);
            results.push({
                command,
                error: error.message,
                index: i + 1,
                success: false
            });
        }
    }
    
    console.log(`📊 Batch execution summary:`);
    console.log(`   ✅ Successful: ${successCount}`);
    console.log(`   ❌ Failed: ${failureCount}`);
    console.log(`   📈 Success rate: ${Math.round(successCount / commands.length * 100)}%`);
    
    return results;
};

// Usage
const commands = [
    'echo "Hello World"',
    'pwd',
    'whoami',
    'date',
    'invalidcommand123'
];

const batchResults = await batchExecution(commands);
```

### Common Use Cases

1. **Version Checking**: Check versions of installed tools and dependencies
2. **File Operations**: Create, move, copy, and delete files and directories
3. **Package Management**: Install, update, and manage project dependencies
4. **Build Operations**: Compile, build, and package applications
5. **System Information**: Gather information about the system environment
6. **Git Operations**: Execute Git commands for version control
7. **Development Tools**: Run linters, formatters, and testing tools
8. **Environment Setup**: Configure development environments and tools

### Notes

- The method waits for command completion before resolving the promise
- Exit code 0 typically indicates successful command execution
- The `returnEmptyStringOnSuccess` parameter can be useful when you only need to know if a command succeeded
- Both `stdout` and `stderr` may contain output depending on the command
- Commands are executed in the current working directory of the terminal
- Long-running commands should use `executeCommandWithStream` for real-time output
- Always handle both success (`CommandFinish`) and error (`CommandError`) response types
- Consider implementing timeouts for commands that might hang indefinitely