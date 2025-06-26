---
name: sendManualInterrupt
cbbaseinfo:
  description: Sends a manual interrupt signal (SIGINT) to the terminal to cancel or stop a currently running command.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the interrupt response.
data:
  name: sendManualInterrupt
  category: terminal
  link: sendManualInterrupt.md
---
<CBBaseInfo/> 
<CBParameters/>


## Example

```javascript
// Start a long-running command
const serverEmitter = codebolt.terminal.executeCommandWithStream('npm run dev');

serverEmitter.on('commandOutput', (data) => {
    console.log('Server output:', data.message);
});

// Stop the command after 10 seconds
setTimeout(async () => {
    try {
        const interruptResult = await codebolt.terminal.sendManualInterrupt();
        console.log('✅ Command interrupted:', interruptResult);
    } catch (error) {
        console.error('❌ Failed to interrupt:', error.message);
    }
}, 10000);

// Emergency stop based on condition
const buildEmitter = codebolt.terminal.executeCommandWithStream('npm run build');

buildEmitter.on('commandOutput', (data) => {
    // Stop if we detect an error condition
    if (data.message.includes('FATAL ERROR')) {
        console.log('🚨 Fatal error detected, stopping...');
        codebolt.terminal.sendManualInterrupt();
    }
});

// Automatic timeout protection
function runCommandWithTimeout(command, timeoutMs = 30000) {
    const emitter = codebolt.terminal.executeCommandWithStream(command);
    
    const timeout = setTimeout(async () => {
        console.log('⏰ Command timeout, interrupting...');
        await codebolt.terminal.sendManualInterrupt();
    }, timeoutMs);
    
    emitter.on('commandFinish', () => {
        clearTimeout(timeout);
    });
    
    return emitter;
}
```