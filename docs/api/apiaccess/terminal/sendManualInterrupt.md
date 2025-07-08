---
name: sendManualInterrupt
cbbaseinfo:
  description: Sends a manual interrupt signal (SIGINT) to the terminal to cancel or stop a currently running command. This method is equivalent to pressing Ctrl+C in a terminal and is useful for stopping long-running processes or commands that need to be terminated.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise<TerminalInterruptResponse>
    description: A promise that resolves with a TerminalInterruptResponse object indicating whether the interrupt signal was successfully sent to the terminal.
data:
  name: sendManualInterrupt
  category: terminal
  link: sendManualInterrupt.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `TerminalInterruptResponse` object with the following properties:

#### TerminalInterruptResponse
- **`type`** (string): Always "terminalInterrupted".
- **`success`** (boolean): Indicates whether the interrupt signal was successfully sent.
- **`message`** (string, optional): Additional information about the interrupt operation or any issues encountered.

### Examples

```javascript
// Example 1: Basic interrupt usage
const interruptRunningCommand = async () => {
    try {
        const interruptResult = await codebolt.terminal.sendManualInterrupt();
        
        if (interruptResult.success) {
            console.log('✅ Command interrupted successfully');
            console.log('Response type:', interruptResult.type);
            if (interruptResult.message) {
                console.log('Message:', interruptResult.message);
            }
        } else {
            console.log('❌ Failed to interrupt command');
            console.log('Message:', interruptResult.message);
        }
        
        return interruptResult;
    } catch (error) {
        console.error('❌ Exception during interrupt:', error.message);
        throw error;
    }
};

// Usage
await interruptRunningCommand();

// Example 2: Interrupt long-running server
const startAndStopServer = async () => {
    // Start a long-running server
    const serverEmitter = codebolt.terminal.executeCommandWithStream('npm run dev');
    
    serverEmitter.on('commandOutput', (data) => {
        console.log('🖥️ Server output:', data.output);
        
        // Check if server is ready
        if (data.output.includes('Server running') || data.output.includes('listening')) {
            console.log('🚀 Server is ready');
        }
    });
    
    serverEmitter.on('commandError', (error) => {
        console.error('❌ Server error:', error.error);
    });
    
    serverEmitter.on('commandFinish', (finish) => {
        console.log('🏁 Server stopped');
        console.log('Exit code:', finish.exitCode);
    });
    
    // Stop the server after 10 seconds
    setTimeout(async () => {
        console.log('⏰ Stopping server after 10 seconds...');
        
        try {
            const interruptResult = await codebolt.terminal.sendManualInterrupt();
            
            if (interruptResult.success) {
                console.log('✅ Server interrupt signal sent successfully');
            } else {
                console.log('❌ Failed to send interrupt signal');
            }
        } catch (error) {
            console.error('❌ Failed to interrupt server:', error.message);
        }
    }, 10000);
    
    return serverEmitter;
};

// Example 3: Emergency stop with error detection
const emergencyStopOnError = () => {
    const buildEmitter = codebolt.terminal.executeCommandWithStream('npm run build');
    
    buildEmitter.on('commandOutput', (data) => {
        console.log('🔨 Build output:', data.output);
        
        // Emergency stop if we detect a fatal error condition
        if (data.output.includes('FATAL ERROR') || 
            data.output.includes('Out of memory') ||
            data.output.includes('EMFILE')) {
            
            console.log('🚨 Fatal error detected, emergency stop!');
            
            codebolt.terminal.sendManualInterrupt()
                .then(result => {
                    if (result.success) {
                        console.log('🛑 Emergency stop successful');
                    } else {
                        console.log('❌ Emergency stop failed');
                    }
                })
                .catch(error => {
                    console.error('❌ Emergency stop exception:', error.message);
                });
        }
    });
    
    buildEmitter.on('commandError', (error) => {
        console.error('❌ Build error:', error.error);
    });
    
    buildEmitter.on('commandFinish', (finish) => {
        console.log('🏁 Build process ended');
        console.log('Exit code:', finish.exitCode);
    });
    
    return buildEmitter;
};

// Example 4: Timeout protection with automatic interrupt
const runCommandWithTimeout = (command, timeoutMs = 30000) => {
    console.log(`🔄 Running command with ${timeoutMs}ms timeout: ${command}`);
    
    const emitter = codebolt.terminal.executeCommandWithStream(command);
    let commandFinished = false;
    
    // Set up timeout
    const timeout = setTimeout(async () => {
        if (!commandFinished) {
            console.log('⏰ Command timeout reached, interrupting...');
            
            try {
                const interruptResult = await codebolt.terminal.sendManualInterrupt();
                
                if (interruptResult.success) {
                    console.log('✅ Timeout interrupt successful');
                } else {
                    console.log('❌ Timeout interrupt failed:', interruptResult.message);
                }
            } catch (error) {
                console.error('❌ Timeout interrupt exception:', error.message);
            }
        }
    }, timeoutMs);
    
    emitter.on('commandOutput', (data) => {
        console.log('📡 Output:', data.output);
    });
    
    emitter.on('commandError', (error) => {
        console.error('❌ Error:', error.error);
    });
    
    emitter.on('commandFinish', (finish) => {
        commandFinished = true;
        clearTimeout(timeout);
        
        console.log('🏁 Command finished');
        console.log('Exit code:', finish.exitCode);
        
        if (finish.exitCode === 0) {
            console.log('✅ Command completed successfully within timeout');
        } else {
            console.log('❌ Command failed or was interrupted');
        }
    });
    
    return {
        emitter,
        interrupt: async () => {
            clearTimeout(timeout);
            return await codebolt.terminal.sendManualInterrupt();
        }
    };
};

// Usage
const { emitter: cmdEmitter, interrupt } = runCommandWithTimeout('npm run build', 15000);

// Manual interrupt if needed
// await interrupt();

// Example 5: Graceful shutdown sequence
const gracefulShutdown = async (processes) => {
    console.log('🔄 Starting graceful shutdown sequence...');
    
    for (let i = 0; i < processes.length; i++) {
        const process = processes[i];
        console.log(`[${i + 1}/${processes.length}] Stopping ${process.name}...`);
        
        try {
            // Send interrupt signal
            const interruptResult = await codebolt.terminal.sendManualInterrupt();
            
            if (interruptResult.success) {
                console.log(`✅ ${process.name} interrupt signal sent`);
                
                // Wait for process to stop gracefully
                await new Promise(resolve => setTimeout(resolve, process.gracePeriod || 2000));
                
                console.log(`✅ ${process.name} graceful shutdown completed`);
            } else {
                console.log(`❌ Failed to interrupt ${process.name}: ${interruptResult.message}`);
            }
        } catch (error) {
            console.error(`❌ Exception stopping ${process.name}:`, error.message);
        }
    }
    
    console.log('🎉 Graceful shutdown sequence completed');
};

// Usage
const runningProcesses = [
    { name: 'Development Server', gracePeriod: 3000 },
    { name: 'Background Worker', gracePeriod: 2000 },
    { name: 'File Watcher', gracePeriod: 1000 }
];

// await gracefulShutdown(runningProcesses);

// Example 6: Interactive command management
const interactiveCommandManager = () => {
    let currentCommand = null;
    let commandHistory = [];
    
    const startCommand = (command) => {
        if (currentCommand) {
            console.log('⚠️ Another command is already running. Stop it first.');
            return null;
        }
        
        console.log(`🚀 Starting: ${command}`);
        currentCommand = {
            command,
            emitter: codebolt.terminal.executeCommandWithStream(command),
            startTime: Date.now()
        };
        
        currentCommand.emitter.on('commandOutput', (data) => {
            console.log('📡', data.output);
        });
        
        currentCommand.emitter.on('commandError', (error) => {
            console.error('❌', error.error);
        });
        
        currentCommand.emitter.on('commandFinish', (finish) => {
            const duration = Date.now() - currentCommand.startTime;
            
            console.log('🏁 Command finished');
            console.log(`Duration: ${Math.round(duration / 1000)}s`);
            console.log(`Exit code: ${finish.exitCode}`);
            
            commandHistory.push({
                command: currentCommand.command,
                duration: Math.round(duration / 1000),
                exitCode: finish.exitCode,
                timestamp: new Date().toISOString()
            });
            
            currentCommand = null;
        });
        
        return currentCommand;
    };
    
    const stopCommand = async () => {
        if (!currentCommand) {
            console.log('⚠️ No command is currently running');
            return { success: false, message: 'No active command' };
        }
        
        console.log(`🛑 Stopping: ${currentCommand.command}`);
        
        try {
            const interruptResult = await codebolt.terminal.sendManualInterrupt();
            
            if (interruptResult.success) {
                console.log('✅ Stop signal sent successfully');
            } else {
                console.log('❌ Failed to send stop signal');
            }
            
            return interruptResult;
        } catch (error) {
            console.error('❌ Exception stopping command:', error.message);
            return { success: false, message: error.message };
        }
    };
    
    const getStatus = () => {
        return {
            currentCommand: currentCommand ? {
                command: currentCommand.command,
                duration: Math.round((Date.now() - currentCommand.startTime) / 1000)
            } : null,
            history: commandHistory
        };
    };
    
    return {
        start: startCommand,
        stop: stopCommand,
        status: getStatus
    };
};

// Usage
const manager = interactiveCommandManager();

// Start a command
manager.start('npm run dev');

// Check status
console.log('Current status:', manager.status());

// Stop the command after some time
setTimeout(async () => {
    const stopResult = await manager.stop();
    console.log('Stop result:', stopResult);
}, 5000);

// Example 7: Batch interrupt for multiple processes
const interruptMultipleProcesses = async (processNames = []) => {
    console.log('🔄 Interrupting multiple processes...');
    
    const results = [];
    
    for (let i = 0; i < processNames.length; i++) {
        const processName = processNames[i];
        console.log(`[${i + 1}/${processNames.length}] Interrupting ${processName}...`);
        
        try {
            const interruptResult = await codebolt.terminal.sendManualInterrupt();
            
            results.push({
                processName,
                success: interruptResult.success,
                message: interruptResult.message,
                timestamp: new Date().toISOString()
            });
            
            if (interruptResult.success) {
                console.log(`✅ ${processName} interrupted successfully`);
            } else {
                console.log(`❌ Failed to interrupt ${processName}: ${interruptResult.message}`);
            }
            
            // Small delay between interrupts
            if (i < processNames.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        } catch (error) {
            console.error(`❌ Exception interrupting ${processName}:`, error.message);
            
            results.push({
                processName,
                success: false,
                message: error.message,
                timestamp: new Date().toISOString(),
                exception: true
            });
        }
    }
    
    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log('📊 Interrupt Summary:');
    console.log(`   ✅ Successful: ${successful}`);
    console.log(`   ❌ Failed: ${failed}`);
    console.log(`   📈 Success rate: ${Math.round(successful / results.length * 100)}%`);
    
    return results;
};

// Usage
const processesToStop = ['Development Server', 'API Server', 'Background Worker'];
const interruptResults = await interruptMultipleProcesses(processesToStop);

// Example 8: Smart interrupt with retry logic
const smartInterrupt = async (maxRetries = 3, retryDelay = 1000) => {
    let attempt = 1;
    
    while (attempt <= maxRetries) {
        console.log(`🔄 Interrupt attempt ${attempt}/${maxRetries}...`);
        
        try {
            const interruptResult = await codebolt.terminal.sendManualInterrupt();
            
            if (interruptResult.success) {
                console.log(`✅ Interrupt successful on attempt ${attempt}`);
                return {
                    success: true,
                    attempts: attempt,
                    result: interruptResult
                };
            } else {
                console.log(`❌ Interrupt failed on attempt ${attempt}: ${interruptResult.message}`);
                
                if (attempt < maxRetries) {
                    console.log(`⏳ Retrying in ${retryDelay}ms...`);
                    await new Promise(resolve => setTimeout(resolve, retryDelay));
                }
            }
        } catch (error) {
            console.error(`❌ Exception on attempt ${attempt}:`, error.message);
            
            if (attempt < maxRetries) {
                console.log(`⏳ Retrying in ${retryDelay}ms...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
        }
        
        attempt++;
    }
    
    console.log(`❌ All ${maxRetries} interrupt attempts failed`);
    return {
        success: false,
        attempts: maxRetries,
        message: 'All retry attempts exhausted'
    };
};

// Usage
const smartResult = await smartInterrupt(3, 2000);
console.log('Smart interrupt result:', smartResult);
```

### Common Use Cases

1. **Development Server Management**: Stop development servers when switching projects or configurations
2. **Build Process Control**: Cancel long-running build processes that are stuck or taking too long
3. **Emergency Stops**: Immediately stop processes that are consuming too many resources or causing issues
4. **Timeout Protection**: Automatically stop commands that exceed expected execution time
5. **Graceful Shutdown**: Implement proper shutdown sequences for applications with multiple processes
6. **Interactive Development**: Provide users with the ability to stop long-running operations
7. **Error Recovery**: Stop processes when error conditions are detected
8. **Resource Management**: Stop processes to free up system resources when needed

### Notes

- The interrupt signal is equivalent to pressing Ctrl+C in a terminal
- Not all processes may respond to SIGINT signals immediately
- Some processes may have cleanup routines that run before terminating
- The method only sends the interrupt signal; it doesn't guarantee immediate process termination
- Use this method responsibly as it can cause data loss in processes that don't handle interrupts gracefully
- Consider implementing graceful shutdown procedures before using force interrupts
- The success response indicates the signal was sent, not that the process actually stopped
- Some system processes or privileged operations may not be interruptible
- Always handle both successful and failed interrupt attempts in your code