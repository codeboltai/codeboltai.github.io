---
name: executeCommandWithStream
cbbaseinfo:
  description: Executes a given command and streams the output in real-time via EventEmitter. This method is ideal for long-running commands where you need to monitor output as it happens, such as build processes, server starts, or file operations with progress updates.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed with streaming output (e.g., "npm run build", "npm start", "git clone <url>").
    - name: executeInMain
      typeName: boolean
      description: "Optional parameter to execute the command in the main terminal instead of a separate terminal instance. Defaults to false."
  returns:
    signatureTypeName: EventEmitter
    description: An EventEmitter that streams terminal events in real-time. The emitter will emit 'commandOutput', 'commandError', and 'commandFinish' events as the command executes.
data:
  name: executeCommandWithStream
  category: terminal
  link: executeCommandWithStream.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns an `EventEmitter` that emits the following events with their respective data structures:

#### Event: 'commandOutput'
Emitted when the command produces output during execution.

**Event Data (CommandOutput):**
- **`type`** (string): Always "commandOutput".
- **`output`** (string): The output text from the command.
- **`stdout`** (string, optional): Standard output from the command.
- **`stderr`** (string, optional): Standard error output from the command.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`data`** (any, optional): Additional data from the response.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

#### Event: 'commandError'
Emitted when the command encounters an error during execution.

**Event Data (CommandError):**
- **`type`** (string): Always "commandError".
- **`error`** (string): Error message describing what went wrong.
- **`exitCode`** (number, optional): The exit code of the failed command.
- **`stderr`** (string, optional): Standard error output from the command.
- **`success`** (boolean, optional): Indicates if the operation was successful (typically false).
- **`message`** (string, optional): Additional information about the response.
- **`data`** (any, optional): Additional data from the response.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

#### Event: 'commandFinish'
Emitted when the command completes execution (successfully or unsuccessfully).

**Event Data (CommandFinish):**
- **`type`** (string): Always "commandFinish".
- **`exitCode`** (number): The exit code of the command (0 for success).
- **`stdout`** (string, optional): Standard output from the command.
- **`stderr`** (string, optional): Standard error output from the command.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`data`** (any, optional): Additional data from the response.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for the request.

### Examples

```javascript
// Example 1: Basic streaming command
const basicStreamExample = () => {
    const streamEmitter = codebolt.terminal.executeCommandWithStream('echo "Streaming test"');
    
    streamEmitter.on('commandOutput', (data) => {
        console.log('📡 Stream output:', data.output);
        console.log('   Type:', data.type);
        if (data.stdout) {
            console.log('   Stdout:', data.stdout);
        }
    });
    
    streamEmitter.on('commandError', (error) => {
        console.error('❌ Stream error:', error.error);
        console.error('   Exit code:', error.exitCode);
        if (error.stderr) {
            console.error('   Stderr:', error.stderr);
        }
    });
    
    streamEmitter.on('commandFinish', (finish) => {
        console.log('✅ Stream finished');
        console.log('   Exit code:', finish.exitCode);
        console.log('   Type:', finish.type);
        
        // Clean up the emitter
        if (streamEmitter.cleanup) {
            streamEmitter.cleanup();
        }
    });
    
    return streamEmitter;
};

// Usage
const emitter = basicStreamExample();

// Example 2: Long-running build process with progress monitoring
const monitorBuildProcess = () => {
    const buildEmitter = codebolt.terminal.executeCommandWithStream('npm run build');
    
    let outputBuffer = '';
    let errorBuffer = '';
    
    buildEmitter.on('commandOutput', (data) => {
        outputBuffer += data.output;
        
        console.log('🔨 Build output:', data.output);
        
        // Check for specific build milestones
        if (data.output.includes('Compilation successful')) {
            console.log('🎉 Build completed successfully!');
        } else if (data.output.includes('Compilation failed')) {
            console.log('❌ Build compilation failed!');
        } else if (data.output.includes('webpack')) {
            console.log('📦 Webpack processing...');
        } else if (data.output.includes('TypeScript')) {
            console.log('📘 TypeScript compilation...');
        }
        
        // Monitor build progress
        const progressMatch = data.output.match(/(\d+)%/);
        if (progressMatch) {
            const progress = parseInt(progressMatch[1]);
            console.log(`📊 Build progress: ${progress}%`);
        }
    });
    
    buildEmitter.on('commandError', (error) => {
        errorBuffer += error.error;
        
        console.error('❌ Build error:', error.error);
        
        // Analyze error types
        if (error.error.includes('Module not found')) {
            console.error('📦 Missing module dependency detected');
        } else if (error.error.includes('TypeScript')) {
            console.error('📘 TypeScript compilation error');
        } else if (error.error.includes('Syntax')) {
            console.error('📝 Syntax error in code');
        }
    });
    
    buildEmitter.on('commandFinish', (finish) => {
        console.log('🏁 Build process finished');
        console.log('   Exit code:', finish.exitCode);
        
        if (finish.exitCode === 0) {
            console.log('✅ Build successful!');
            console.log('📄 Total output length:', outputBuffer.length);
        } else {
            console.log('❌ Build failed!');
            console.log('📄 Error summary:', errorBuffer.substring(0, 200) + '...');
        }
        
        // Clean up
        if (buildEmitter.cleanup) {
            buildEmitter.cleanup();
        }
    });
    
    return buildEmitter;
};

// Example 3: Server startup monitoring with health checks
const monitorServerStartup = (serverCommand) => {
    const serverEmitter = codebolt.terminal.executeCommandWithStream(serverCommand);
    
    let serverReady = false;
    let port = null;
    let startTime = Date.now();
    
    serverEmitter.on('commandOutput', (data) => {
        const output = data.output;
        console.log('🖥️ Server output:', output);
        
        // Detect server readiness
        if (output.includes('Server running') || output.includes('listening on')) {
            serverReady = true;
            const duration = Date.now() - startTime;
            console.log(`🚀 Server ready after ${duration}ms`);
        }
        
        // Extract port information
        const portMatch = output.match(/(?:port|:)(\d+)/i);
        if (portMatch) {
            port = parseInt(portMatch[1]);
            console.log(`🔌 Server port detected: ${port}`);
        }
        
        // Monitor for specific server events
        if (output.includes('Connected to database')) {
            console.log('💾 Database connection established');
        } else if (output.includes('Error') || output.includes('ERROR')) {
            console.log('⚠️ Server error detected in output');
        } else if (output.includes('Warning') || output.includes('WARN')) {
            console.log('⚠️ Server warning detected');
        }
    });
    
    serverEmitter.on('commandError', (error) => {
        console.error('❌ Server error:', error.error);
        
        // Analyze server-specific errors
        if (error.error.includes('EADDRINUSE')) {
            console.error('🔌 Port already in use - server cannot start');
        } else if (error.error.includes('EACCES')) {
            console.error('🔒 Permission denied - check port permissions');
        } else if (error.error.includes('MODULE_NOT_FOUND')) {
            console.error('📦 Missing module - run npm install');
        }
    });
    
    serverEmitter.on('commandFinish', (finish) => {
        const duration = Date.now() - startTime;
        console.log('🏁 Server process finished');
        console.log(`   Duration: ${duration}ms`);
        console.log(`   Exit code: ${finish.exitCode}`);
        console.log(`   Server was ready: ${serverReady}`);
        
        if (port) {
            console.log(`   Port used: ${port}`);
        }
        
        if (serverEmitter.cleanup) {
            serverEmitter.cleanup();
        }
    });
    
    return { emitter: serverEmitter, getStatus: () => ({ serverReady, port }) };
};

// Usage
const { emitter: serverEmitter, getStatus } = monitorServerStartup('npm start');

// Example 4: File operation with progress tracking
const monitorFileOperation = (command, operationType) => {
    const fileEmitter = codebolt.terminal.executeCommandWithStream(command);
    
    let filesProcessed = 0;
    let totalSize = 0;
    
    fileEmitter.on('commandOutput', (data) => {
        const output = data.output;
        console.log(`📁 ${operationType} output:`, output);
        
        // Track file operations
        if (output.includes('copying') || output.includes('moving')) {
            filesProcessed++;
            console.log(`📋 Files processed: ${filesProcessed}`);
        }
        
        // Track size information
        const sizeMatch = output.match(/(\d+(?:\.\d+)?)\s*(KB|MB|GB)/i);
        if (sizeMatch) {
            const size = parseFloat(sizeMatch[1]);
            const unit = sizeMatch[2].toUpperCase();
            console.log(`📊 Size: ${size} ${unit}`);
            
            // Convert to bytes for total tracking
            const multiplier = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 };
            totalSize += size * (multiplier[unit] || 1);
        }
        
        // Monitor progress indicators
        if (output.includes('%')) {
            const progressMatch = output.match(/(\d+)%/);
            if (progressMatch) {
                console.log(`📊 Progress: ${progressMatch[1]}%`);
            }
        }
    });
    
    fileEmitter.on('commandError', (error) => {
        console.error(`❌ ${operationType} error:`, error.error);
        
        // File operation specific errors
        if (error.error.includes('No such file')) {
            console.error('📁 File not found');
        } else if (error.error.includes('Permission denied')) {
            console.error('🔒 Permission denied');
        } else if (error.error.includes('No space left')) {
            console.error('💾 Disk space full');
        }
    });
    
    fileEmitter.on('commandFinish', (finish) => {
        console.log(`🏁 ${operationType} completed`);
        console.log(`   Files processed: ${filesProcessed}`);
        console.log(`   Total size: ${Math.round(totalSize / 1024)} KB`);
        console.log(`   Exit code: ${finish.exitCode}`);
        
        if (fileEmitter.cleanup) {
            fileEmitter.cleanup();
        }
    });
    
    return fileEmitter;
};

// Usage
const copyEmitter = monitorFileOperation('cp -r source/ destination/', 'Copy');

// Example 5: Git operation monitoring
const monitorGitOperation = (gitCommand) => {
    const gitEmitter = codebolt.terminal.executeCommandWithStream(gitCommand);
    
    let commitCount = 0;
    let branchInfo = '';
    
    gitEmitter.on('commandOutput', (data) => {
        const output = data.output;
        console.log('📦 Git output:', output);
        
        // Track Git-specific events
        if (output.includes('Cloning into')) {
            console.log('📥 Starting repository clone...');
        } else if (output.includes('Receiving objects')) {
            const progressMatch = output.match(/(\d+)%/);
            if (progressMatch) {
                console.log(`📊 Clone progress: ${progressMatch[1]}%`);
            }
        } else if (output.includes('Resolving deltas')) {
            console.log('🔄 Resolving deltas...');
        } else if (output.includes('commit')) {
            commitCount++;
            console.log(`📝 Commits processed: ${commitCount}`);
        }
        
        // Extract branch information
        const branchMatch = output.match(/branch\s+['"]?([^'"\\s]+)['"]?/i);
        if (branchMatch) {
            branchInfo = branchMatch[1];
            console.log(`🌿 Branch: ${branchInfo}`);
        }
    });
    
    gitEmitter.on('commandError', (error) => {
        console.error('❌ Git error:', error.error);
        
        // Git-specific error analysis
        if (error.error.includes('not a git repository')) {
            console.error('📁 Not in a Git repository');
        } else if (error.error.includes('remote repository')) {
            console.error('🌐 Remote repository access issue');
        } else if (error.error.includes('Authentication failed')) {
            console.error('🔐 Authentication failed');
        } else if (error.error.includes('merge conflict')) {
            console.error('🔀 Merge conflict detected');
        }
    });
    
    gitEmitter.on('commandFinish', (finish) => {
        console.log('🏁 Git operation completed');
        console.log(`   Commits: ${commitCount}`);
        console.log(`   Branch: ${branchInfo || 'unknown'}`);
        console.log(`   Exit code: ${finish.exitCode}`);
        
        if (finish.exitCode === 0) {
            console.log('✅ Git operation successful');
        } else {
            console.log('❌ Git operation failed');
        }
        
        if (gitEmitter.cleanup) {
            gitEmitter.cleanup();
        }
    });
    
    return gitEmitter;
};

// Usage
const cloneEmitter = monitorGitOperation('git clone https://github.com/user/repo.git');

// Example 6: Test execution with real-time results
const monitorTestExecution = (testCommand) => {
    const testEmitter = codebolt.terminal.executeCommandWithStream(testCommand);
    
    let testStats = {
        passed: 0,
        failed: 0,
        skipped: 0,
        total: 0
    };
    
    testEmitter.on('commandOutput', (data) => {
        const output = data.output;
        console.log('🧪 Test output:', output);
        
        // Track test results
        if (output.includes('✓') || output.includes('PASS')) {
            testStats.passed++;
            console.log(`✅ Tests passed: ${testStats.passed}`);
        } else if (output.includes('✗') || output.includes('FAIL')) {
            testStats.failed++;
            console.log(`❌ Tests failed: ${testStats.failed}`);
        } else if (output.includes('SKIP')) {
            testStats.skipped++;
            console.log(`⏭️ Tests skipped: ${testStats.skipped}`);
        }
        
        // Extract test suite information
        if (output.includes('Test Suites:')) {
            console.log('📊 Test suite summary detected');
        }
        
        // Monitor test progress
        const progressMatch = output.match(/(\d+)\/(\d+)/);
        if (progressMatch) {
            const current = parseInt(progressMatch[1]);
            const total = parseInt(progressMatch[2]);
            testStats.total = total;
            console.log(`📊 Test progress: ${current}/${total}`);
        }
    });
    
    testEmitter.on('commandError', (error) => {
        console.error('❌ Test error:', error.error);
        
        // Test-specific error analysis
        if (error.error.includes('No tests found')) {
            console.error('🔍 No tests found to run');
        } else if (error.error.includes('Syntax error')) {
            console.error('📝 Syntax error in test files');
        } else if (error.error.includes('Module not found')) {
            console.error('📦 Missing test dependencies');
        }
    });
    
    testEmitter.on('commandFinish', (finish) => {
        console.log('🏁 Test execution completed');
        console.log('📊 Test Statistics:');
        console.log(`   ✅ Passed: ${testStats.passed}`);
        console.log(`   ❌ Failed: ${testStats.failed}`);
        console.log(`   ⏭️ Skipped: ${testStats.skipped}`);
        console.log(`   📊 Total: ${testStats.total}`);
        console.log(`   Exit code: ${finish.exitCode}`);
        
        const successRate = testStats.total > 0 ? 
            Math.round((testStats.passed / testStats.total) * 100) : 0;
        console.log(`   📈 Success rate: ${successRate}%`);
        
        if (testEmitter.cleanup) {
            testEmitter.cleanup();
        }
    });
    
    return testEmitter;
};

// Usage
const testEmitter = monitorTestExecution('npm test');

// Example 7: Multiple command streaming with management
const executeMultipleStreamingCommands = (commands) => {
    const activeEmitters = [];
    
    commands.forEach((cmd, index) => {
        console.log(`🚀 Starting command ${index + 1}: ${cmd.command}`);
        
        const emitter = codebolt.terminal.executeCommandWithStream(cmd.command, cmd.executeInMain);
        
        emitter.on('commandOutput', (data) => {
            console.log(`[${index + 1}] 📡 ${cmd.name}: ${data.output}`);
        });
        
        emitter.on('commandError', (error) => {
            console.error(`[${index + 1}] ❌ ${cmd.name} error: ${error.error}`);
        });
        
        emitter.on('commandFinish', (finish) => {
            console.log(`[${index + 1}] 🏁 ${cmd.name} finished (exit code: ${finish.exitCode})`);
            
            // Remove from active emitters
            const emitterIndex = activeEmitters.findIndex(e => e.emitter === emitter);
            if (emitterIndex !== -1) {
                activeEmitters.splice(emitterIndex, 1);
            }
            
            if (emitter.cleanup) {
                emitter.cleanup();
            }
            
            // Check if all commands are finished
            if (activeEmitters.length === 0) {
                console.log('🎉 All streaming commands completed');
            }
        });
        
        activeEmitters.push({
            emitter,
            name: cmd.name,
            command: cmd.command,
            index: index + 1
        });
    });
    
    return {
        emitters: activeEmitters,
        cleanup: () => {
            activeEmitters.forEach(({ emitter }) => {
                if (emitter.cleanup) {
                    emitter.cleanup();
                }
            });
        }
    };
};

// Usage
const streamingCommands = [
    { name: 'Build', command: 'npm run build' },
    { name: 'Test', command: 'npm test' },
    { name: 'Lint', command: 'npm run lint' }
];

const { emitters: activeEmitters, cleanup } = executeMultipleStreamingCommands(streamingCommands);

// Cleanup after 30 seconds if still running
setTimeout(() => {
    if (activeEmitters.length > 0) {
        console.log('⏰ Cleaning up remaining streaming commands...');
        cleanup();
    }
}, 30000);
```

### Common Use Cases

1. **Build Processes**: Monitor compilation, bundling, and build steps with real-time progress
2. **Development Servers**: Track server startup, compilation, and reload events
3. **Test Execution**: Monitor test runs with real-time pass/fail feedback
4. **File Operations**: Track large file copies, moves, or synchronization operations
5. **Git Operations**: Monitor clone, pull, push, and merge operations with progress
6. **Package Management**: Track npm/yarn install, update, and audit operations
7. **Database Operations**: Monitor database migrations, backups, and imports
8. **Deployment Processes**: Track deployment steps and progress in real-time

### Notes

- The EventEmitter provides real-time feedback for long-running operations
- Always listen for all three events: `commandOutput`, `commandError`, and `commandFinish`
- Use the `cleanup()` method if available to properly clean up event listeners
- The `executeInMain` parameter affects which terminal context the command runs in
- Output events can be emitted multiple times as the command produces output
- Error events indicate problems during execution but don't necessarily mean the command will stop
- The finish event is always emitted when the command completes, regardless of success or failure
- Consider implementing timeouts for commands that might run indefinitely
- Buffer output if you need to analyze the complete command output after completion