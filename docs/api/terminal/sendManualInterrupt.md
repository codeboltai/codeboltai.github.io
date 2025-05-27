---
name: sendManualInterrupt
cbbaseinfo:
  description: ' '
cbparameters:
  parameters: []
  returns:
    signatureTypeName: ' '
    description: ' '
    typeArgs: []
data:
  name: sendManualInterrupt
  category: terminal
  link: sendManualInterrupt.md
---
<CBBaseInfo/> 
 <CBParameters/>

# sendManualInterrupt

Sends a manual interrupt signal (SIGINT) to the terminal to cancel or stop a currently running command.

## Syntax

```typescript
cbterminal.sendManualInterrupt(): void
```

## Parameters

This function takes no parameters.

## Returns

- `void` - This function does not return a value

## Description

The `sendManualInterrupt` function sends a manual interrupt signal (equivalent to pressing Ctrl+C) to the terminal to cancel or stop any currently running command. This is useful for programmatically stopping long-running processes, infinite loops, or commands that need to be terminated.

The function sends a SIGINT (Signal Interrupt) to the active terminal process, which is the standard way to request graceful termination of a running command.

## Example

```typescript
import cbterminal from '@codebolt/terminal';

// Start a long-running command
const emitter = cbterminal.executeCommandWithStream('npm run dev');

// Set up a timeout to automatically cancel the command after 30 seconds
setTimeout(() => {
  console.log('⏰ Timeout reached, cancelling command...');
  cbterminal.sendManualInterrupt();
}, 30000);

// Listen for command events
emitter.on('commandOutput', (data) => {
  console.log('Output:', data.message);
  
  // Cancel if we see an error condition
  if (data.message.includes('FATAL ERROR')) {
    console.log('🚨 Fatal error detected, cancelling...');
    cbterminal.sendManualInterrupt();
  }
});

emitter.on('commandFinish', (data) => {
  console.log('✅ Command finished or was cancelled');
});
```

## Use Cases

### Emergency Stop for Long-Running Processes
```typescript
// Monitor a build process and provide emergency stop
function monitorBuildWithStop() {
  const buildEmitter = cbterminal.executeCommandWithStream('npm run build:production');
  
  let buildStartTime = Date.now();
  
  buildEmitter.on('commandOutput', (data) => {
    console.log('Build output:', data.message);
    
    // Emergency stop if build takes too long
    const elapsed = Date.now() - buildStartTime;
    if (elapsed > 600000) { // 10 minutes
      console.log('🛑 Build taking too long, stopping...');
      cbterminal.sendManualInterrupt();
    }
  });
  
  buildEmitter.on('commandError', (data) => {
    if (data.message.includes('out of memory')) {
      console.log('💾 Out of memory error, stopping build...');
      cbterminal.sendManualInterrupt();
    }
  });
}
```

### Interactive Command Control
```typescript
// Provide user control over running commands
class CommandController {
  private isRunning = false;
  
  startCommand(command: string) {
    if (this.isRunning) {
      console.log('⚠️ Command already running. Stop current command first.');
      return;
    }
    
    this.isRunning = true;
    const emitter = cbterminal.executeCommandWithStream(command);
    
    emitter.on('commandOutput', (data) => {
      console.log('📤', data.message);
    });
    
    emitter.on('commandFinish', (data) => {
      console.log('✅ Command completed');
      this.isRunning = false;
    });
    
    return emitter;
  }
  
  stopCommand() {
    if (!this.isRunning) {
      console.log('ℹ️ No command currently running');
      return;
    }
    
    console.log('🛑 Stopping current command...');
    cbterminal.sendManualInterrupt();
    this.isRunning = false;
  }
  
  isCommandRunning() {
    return this.isRunning;
  }
}

// Usage
const controller = new CommandController();
controller.startCommand('npm run dev');

// Later, stop the command
setTimeout(() => {
  controller.stopCommand();
}, 10000);
```

### Development Server Management
```typescript
// Manage development server lifecycle
function manageDevelopmentServer() {
  let serverEmitter: any = null;
  let serverRunning = false;
  
  function startServer() {
    if (serverRunning) {
      console.log('🔄 Restarting server...');
      stopServer();
      // Wait a moment before restarting
      setTimeout(() => startServer(), 1000);
      return;
    }
    
    console.log('🚀 Starting development server...');
    serverEmitter = cbterminal.executeCommandWithStream('npm run dev');
    serverRunning = true;
    
    serverEmitter.on('commandOutput', (data) => {
      console.log('Server:', data.message);
      
      if (data.message.includes('Server running on')) {
        console.log('✅ Server is ready!');
      }
    });
    
    serverEmitter.on('commandError', (data) => {
      console.error('Server error:', data.message);
      if (data.message.includes('EADDRINUSE')) {
        console.log('🛑 Port in use, stopping...');
        stopServer();
      }
    });
    
    serverEmitter.on('commandFinish', (data) => {
      console.log('🏁 Server stopped');
      serverRunning = false;
    });
  }
  
  function stopServer() {
    if (!serverRunning) {
      console.log('ℹ️ Server not running');
      return;
    }
    
    console.log('🛑 Stopping development server...');
    cbterminal.sendManualInterrupt();
    serverRunning = false;
  }
  
  return { startServer, stopServer };
}

// Usage
const serverManager = manageDevelopmentServer();
serverManager.startServer();

// Stop server after some time
setTimeout(() => {
  serverManager.stopServer();
}, 60000);
```

### Conditional Command Termination
```typescript
// Stop commands based on specific conditions
function conditionalCommandStop() {
  const testEmitter = cbterminal.executeCommandWithStream('npm test -- --watch');
  
  let failureCount = 0;
  let consecutiveFailures = 0;
  
  testEmitter.on('commandOutput', (data) => {
    const output = data.message;
    
    // Count test failures
    if (output.includes('FAIL')) {
      failureCount++;
      consecutiveFailures++;
      
      console.log(`❌ Test failure #${failureCount}`);
      
      // Stop if too many consecutive failures
      if (consecutiveFailures >= 5) {
        console.log('🛑 Too many consecutive failures, stopping tests...');
        cbterminal.sendManualInterrupt();
      }
    } else if (output.includes('PASS')) {
      consecutiveFailures = 0; // Reset consecutive failure count
    }
    
    // Stop if total failures exceed threshold
    if (failureCount >= 20) {
      console.log('🛑 Too many total failures, stopping tests...');
      cbterminal.sendManualInterrupt();
    }
  });
}
```

### Resource Monitoring and Protection
```typescript
// Monitor system resources and stop commands if needed
function resourceProtectedExecution(command: string) {
  const emitter = cbterminal.executeCommandWithStream(command);
  
  // Monitor resource usage (pseudo-code - would need actual monitoring)
  const resourceMonitor = setInterval(() => {
    // Check CPU usage, memory, etc.
    const cpuUsage = getCPUUsage(); // Hypothetical function
    const memoryUsage = getMemoryUsage(); // Hypothetical function
    
    if (cpuUsage > 90 || memoryUsage > 90) {
      console.log('🚨 High resource usage detected, stopping command...');
      cbterminal.sendManualInterrupt();
      clearInterval(resourceMonitor);
    }
  }, 5000); // Check every 5 seconds
  
  emitter.on('commandFinish', () => {
    clearInterval(resourceMonitor);
  });
  
  return emitter;
}
```

## Advanced Examples

### Command Queue with Interrupt Support
```typescript
class InterruptibleCommandQueue {
  private queue: string[] = [];
  private currentCommand: any = null;
  private isProcessing = false;
  
  addCommand(command: string) {
    this.queue.push(command);
    if (!this.isProcessing) {
      this.processNext();
    }
  }
  
  private processNext() {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }
    
    this.isProcessing = true;
    const command = this.queue.shift()!;
    
    console.log(`🔄 Executing: ${command}`);
    this.currentCommand = cbterminal.executeCommandWithStream(command);
    
    this.currentCommand.on('commandOutput', (data) => {
      console.log('📤', data.message);
    });
    
    this.currentCommand.on('commandError', (data) => {
      console.error('❌', data.message);
    });
    
    this.currentCommand.on('commandFinish', (data) => {
      console.log('✅ Command completed');
      this.currentCommand = null;
      this.processNext();
    });
  }
  
  stopCurrent() {
    if (this.currentCommand) {
      console.log('🛑 Stopping current command...');
      cbterminal.sendManualInterrupt();
    }
  }
  
  clearQueue() {
    this.queue = [];
    console.log('🗑️ Command queue cleared');
  }
  
  stopAll() {
    this.stopCurrent();
    this.clearQueue();
  }
}

// Usage
const commandQueue = new InterruptibleCommandQueue();
commandQueue.addCommand('npm install');
commandQueue.addCommand('npm run build');
commandQueue.addCommand('npm test');

// Stop everything if needed
setTimeout(() => {
  commandQueue.stopAll();
}, 30000);
```

## Important Notes

1. **Graceful Termination**: The interrupt signal allows processes to clean up gracefully before terminating
2. **Process State**: After sending an interrupt, the command may take a moment to actually stop
3. **No Return Value**: This function doesn't return any confirmation of success
4. **Single Terminal**: The interrupt affects the currently active terminal session
5. **Timing**: There may be a slight delay between calling this function and the actual termination

## Best Practices

1. **Use with Streaming Commands**: Most effective when used with `executeCommandWithStream()` for real-time control
2. **Implement Timeouts**: Set reasonable timeouts for long-running commands
3. **Monitor Output**: Watch command output for error conditions that warrant interruption
4. **Resource Protection**: Use interrupts to protect system resources from runaway processes
5. **User Experience**: Provide clear feedback when interrupting commands

```typescript
// Best practice implementation
function safeCommandExecution(command: string, maxDuration = 300000) {
  const emitter = cbterminal.executeCommandWithStream(command);
  const startTime = Date.now();
  
  // Set up automatic timeout
  const timeout = setTimeout(() => {
    console.log('⏰ Command timeout reached, interrupting...');
    cbterminal.sendManualInterrupt();
  }, maxDuration);
  
  emitter.on('commandOutput', (data) => {
    console.log('Output:', data.message);
    
    // Check for error conditions
    if (data.message.includes('FATAL') || data.message.includes('CRITICAL')) {
      console.log('🚨 Critical error detected, interrupting...');
      cbterminal.sendManualInterrupt();
    }
  });
  
  emitter.on('commandFinish', (data) => {
    clearTimeout(timeout);
    const duration = Date.now() - startTime;
    console.log(`✅ Command completed in ${duration}ms`);
  });
  
  return emitter;
}
```

## Related Functions

- [`executeCommandWithStream()`](./executeCommandWithStream.md) - Execute commands with real-time streaming
- [`executeCommand()`](./executeCommand.md) - Execute a command and wait for completion
- [`executeCommandRunUntilError()`](./executeCommandRunUntilError.md) - Execute a command until an error occurs