---
name: executeCommandWithStream
cbbaseinfo:
  description: ' '
cbparameters:
  parameters: []
  returns:
    signatureTypeName: ' '
    description: ' '
    typeArgs: []
data:
  name: executeCommandWithStream
  category: terminal
  link: executeCommandWithStream.md
---
<CBBaseInfo/> 
 <CBParameters/>

### status 

Comming soon...

# executeCommandWithStream

Executes a given command and streams the output in real-time via EventEmitter.

## Syntax

```typescript
cbterminal.executeCommandWithStream(command: string, executeInMain?: boolean): EventEmitter
```

## Parameters

- `command` (string) - The command to be executed in the terminal
- `executeInMain` (boolean, optional) - Whether to execute the command in the main terminal. Defaults to `false`

## Returns

- `EventEmitter` - An EventEmitter that streams terminal events in real-time

## Description

The `executeCommandWithStream` function executes a command in the terminal and returns an EventEmitter that streams the output, errors, and completion events in real-time. This is particularly useful for long-running commands, interactive processes, or when you need to monitor command execution progress.

The function emits three types of events:
- `commandOutput` - Streams stdout data as it becomes available
- `commandError` - Emitted when stderr data is received or an error occurs
- `commandFinish` - Emitted when the command execution completes

## Events

### commandOutput
Emitted when stdout data is received from the command.

```typescript
eventEmitter.on('commandOutput', (data: CommandOutput) => {
  console.log('Output:', data.message);
});
```

### commandError
Emitted when stderr data is received or an error occurs.

```typescript
eventEmitter.on('commandError', (data: CommandError) => {
  console.error('Error:', data.message);
});
```

### commandFinish
Emitted when the command execution completes.

```typescript
eventEmitter.on('commandFinish', (data: CommandFinish) => {
  console.log('Command finished:', data.message);
});
```

## Example

```typescript
import cbterminal from '@codebolt/terminal';

function runCommandWithStreaming() {
  const command = 'npm install';
  const eventEmitter = cbterminal.executeCommandWithStream(command);
  
  // Listen for output events
  eventEmitter.on('commandOutput', (data) => {
    console.log('📤 Output:', data.message);
  });
  
  // Listen for error events
  eventEmitter.on('commandError', (data) => {
    console.error('❌ Error:', data.message);
  });
  
  // Listen for completion events
  eventEmitter.on('commandFinish', (data) => {
    console.log('✅ Command completed:', data.message);
    // Clean up or perform post-execution tasks
  });
}

// Usage
runCommandWithStreaming();
```

## Use Cases

### Long-Running Build Processes
```typescript
// Monitor a build process with real-time output
function monitorBuild() {
  const buildEmitter = cbterminal.executeCommandWithStream('npm run build');
  
  let outputBuffer = '';
  
  buildEmitter.on('commandOutput', (data) => {
    outputBuffer += data.message;
    
    // Check for specific build milestones
    if (data.message.includes('Compilation successful')) {
      console.log('🎉 Build compilation successful!');
    }
    
    if (data.message.includes('Bundle size:')) {
      console.log('📦 Bundle information:', data.message);
    }
  });
  
  buildEmitter.on('commandError', (data) => {
    console.error('🚨 Build error:', data.message);
    // Handle build errors
  });
  
  buildEmitter.on('commandFinish', (data) => {
    console.log('🏁 Build process completed');
    // Analyze final output
    analyzeBuildOutput(outputBuffer);
  });
}
```

### Development Server Monitoring
```typescript
// Start and monitor a development server
function startDevServer() {
  const serverEmitter = cbterminal.executeCommandWithStream('npm run dev');
  
  let serverReady = false;
  
  serverEmitter.on('commandOutput', (data) => {
    console.log('Server output:', data.message);
    
    // Detect when server is ready
    if (data.message.includes('Server running on') && !serverReady) {
      serverReady = true;
      console.log('🚀 Development server is ready!');
      // Trigger post-startup actions
      onServerReady();
    }
    
    // Monitor for hot reload events
    if (data.message.includes('File changed')) {
      console.log('🔄 Hot reload triggered');
    }
  });
  
  serverEmitter.on('commandError', (data) => {
    console.error('Server error:', data.message);
    if (data.message.includes('EADDRINUSE')) {
      console.log('💡 Port is already in use. Try a different port.');
    }
  });
}
```

### Interactive Command Execution
```typescript
// Handle interactive commands
function runInteractiveCommand() {
  const interactiveEmitter = cbterminal.executeCommandWithStream('npx create-react-app my-app');
  
  interactiveEmitter.on('commandOutput', (data) => {
    console.log('Interactive output:', data.message);
    
    // Detect prompts and respond accordingly
    if (data.message.includes('Would you like to')) {
      console.log('🤔 Interactive prompt detected');
      // Handle interactive prompts
    }
  });
  
  interactiveEmitter.on('commandFinish', (data) => {
    console.log('✨ Interactive command completed');
  });
}
```

### Progress Tracking
```typescript
// Track command progress with custom progress indicators
function trackCommandProgress() {
  const progressEmitter = cbterminal.executeCommandWithStream('npm test');
  
  let testCount = 0;
  let passedTests = 0;
  let failedTests = 0;
  
  progressEmitter.on('commandOutput', (data) => {
    const output = data.message;
    
    // Parse test results
    if (output.includes('✓')) {
      passedTests++;
      console.log(`✅ Test passed (${passedTests} total)`);
    }
    
    if (output.includes('✗')) {
      failedTests++;
      console.log(`❌ Test failed (${failedTests} total)`);
    }
    
    // Update progress
    testCount = passedTests + failedTests;
    if (testCount > 0) {
      const successRate = (passedTests / testCount * 100).toFixed(1);
      console.log(`📊 Progress: ${testCount} tests, ${successRate}% passed`);
    }
  });
  
  progressEmitter.on('commandFinish', (data) => {
    console.log(`🏁 Testing completed: ${passedTests} passed, ${failedTests} failed`);
  });
}
```

## Advanced Examples

### Command Output Buffering and Analysis
```typescript
class CommandStreamAnalyzer {
  private outputBuffer: string[] = [];
  private errorBuffer: string[] = [];
  
  executeAndAnalyze(command: string) {
    const emitter = cbterminal.executeCommandWithStream(command);
    
    emitter.on('commandOutput', (data) => {
      this.outputBuffer.push(data.message);
      this.analyzeOutput(data.message);
    });
    
    emitter.on('commandError', (data) => {
      this.errorBuffer.push(data.message);
      this.analyzeError(data.message);
    });
    
    emitter.on('commandFinish', (data) => {
      this.generateReport();
    });
    
    return emitter;
  }
  
  private analyzeOutput(output: string) {
    // Real-time output analysis
    if (output.includes('warning')) {
      console.log('⚠️ Warning detected:', output);
    }
    
    if (output.includes('deprecated')) {
      console.log('📛 Deprecated feature used:', output);
    }
  }
  
  private analyzeError(error: string) {
    // Real-time error analysis
    console.error('🔍 Analyzing error:', error);
  }
  
  private generateReport() {
    console.log('📋 Command Execution Report:');
    console.log(`- Output lines: ${this.outputBuffer.length}`);
    console.log(`- Error lines: ${this.errorBuffer.length}`);
    
    // Generate detailed analysis
    const warnings = this.outputBuffer.filter(line => line.includes('warning')).length;
    const deprecations = this.outputBuffer.filter(line => line.includes('deprecated')).length;
    
    console.log(`- Warnings: ${warnings}`);
    console.log(`- Deprecations: ${deprecations}`);
  }
}

// Usage
const analyzer = new CommandStreamAnalyzer();
analyzer.executeAndAnalyze('npm audit');
```

### Multiple Command Coordination
```typescript
// Coordinate multiple streaming commands
class MultiCommandManager {
  private activeCommands = new Map<string, EventEmitter>();
  
  startCommand(id: string, command: string) {
    const emitter = cbterminal.executeCommandWithStream(command);
    this.activeCommands.set(id, emitter);
    
    emitter.on('commandOutput', (data) => {
      console.log(`[${id}] Output:`, data.message);
    });
    
    emitter.on('commandError', (data) => {
      console.log(`[${id}] Error:`, data.message);
    });
    
    emitter.on('commandFinish', (data) => {
      console.log(`[${id}] Finished:`, data.message);
      this.activeCommands.delete(id);
    });
    
    return emitter;
  }
  
  getActiveCommands() {
    return Array.from(this.activeCommands.keys());
  }
  
  isCommandActive(id: string) {
    return this.activeCommands.has(id);
  }
}

// Usage
const manager = new MultiCommandManager();
manager.startCommand('build', 'npm run build');
manager.startCommand('test', 'npm test');
manager.startCommand('lint', 'npm run lint');
```

## Error Handling

```typescript
function robustCommandExecution(command: string) {
  const emitter = cbterminal.executeCommandWithStream(command);
  
  let hasErrors = false;
  let errorMessages: string[] = [];
  
  emitter.on('commandOutput', (data) => {
    console.log('Output:', data.message);
  });
  
  emitter.on('commandError', (data) => {
    hasErrors = true;
    errorMessages.push(data.message);
    console.error('Error:', data.message);
    
    // Handle specific error types
    if (data.message.includes('ENOENT')) {
      console.log('💡 Command not found. Please check if it\'s installed.');
    } else if (data.message.includes('EACCES')) {
      console.log('💡 Permission denied. Try running with appropriate permissions.');
    }
  });
  
  emitter.on('commandFinish', (data) => {
    if (hasErrors) {
      console.log('❌ Command completed with errors:');
      errorMessages.forEach(error => console.log(`  - ${error}`));
    } else {
      console.log('✅ Command completed successfully');
    }
  });
  
  // Handle EventEmitter errors
  emitter.on('error', (error) => {
    console.error('EventEmitter error:', error);
  });
  
  return emitter;
}
```

## Best Practices

1. **Always Handle All Events**: Listen for `commandOutput`, `commandError`, and `commandFinish` events
2. **Clean Up Resources**: Remove event listeners when no longer needed
3. **Buffer Output**: Consider buffering output for analysis or logging
4. **Error Handling**: Implement proper error handling for both command errors and EventEmitter errors
5. **Memory Management**: Be mindful of memory usage with long-running commands

```typescript
// Best practice implementation
function executeCommandSafely(command: string) {
  const emitter = cbterminal.executeCommandWithStream(command);
  
  // Set up cleanup
  const cleanup = () => {
    emitter.removeAllListeners();
  };
  
  // Set up timeout for long-running commands
  const timeout = setTimeout(() => {
    console.log('⏰ Command timeout reached');
    cleanup();
  }, 300000); // 5 minutes
  
  emitter.on('commandOutput', (data) => {
    console.log('📤', data.message);
  });
  
  emitter.on('commandError', (data) => {
    console.error('❌', data.message);
  });
  
  emitter.on('commandFinish', (data) => {
    console.log('✅ Command finished');
    clearTimeout(timeout);
    cleanup();
  });
  
  // Handle EventEmitter errors
  emitter.on('error', (error) => {
    console.error('EventEmitter error:', error);
    clearTimeout(timeout);
    cleanup();
  });
  
  return emitter;
}
```

## Related Functions

- [`executeCommand()`](./executeCommand.md) - Execute a command and wait for completion
- [`executeCommandRunUntilError()`](./executeCommandRunUntilError.md) - Execute a command until an error occurs
- [`sendManualInterrupt()`](./sendManualInterrupt.md) - Send interrupt signal to terminal