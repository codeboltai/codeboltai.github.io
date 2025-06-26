---
name: executeCommandWithStream
cbbaseinfo:
  description: Executes a given command and streams the output in real-time via EventEmitter.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
    - name: executeInMain
      typeName: boolean
      description: Optional parameter to execute in main terminal. Defaults to false.
  returns:
    signatureTypeName: EventEmitter
    description: An EventEmitter that streams terminal events in real-time.
    typeArgs: []
data:
  name: executeCommandWithStream
  category: terminal
  link: executeCommandWithStream.md
---
<CBBaseInfo/> 
<CBParameters/>

## Example

```javascript
// Basic streaming command
const streamEmitter = codebolt.terminal.executeCommandWithStream('echo "Streaming test"');

streamEmitter.on('commandOutput', (data) => {
    console.log('📡 Stream data:', data);
});

streamEmitter.on('commandError', (error) => {
    console.error('❌ Stream error:', error);
});

streamEmitter.on('commandFinish', () => {
    console.log('✅ Stream ended');
});

// Long-running command with monitoring
const buildEmitter = codebolt.terminal.executeCommandWithStream('npm run build');

buildEmitter.on('commandOutput', (data) => {
    console.log('Build output:', data.message);
    
    if (data.message.includes('Compilation successful')) {
        console.log('🎉 Build completed successfully!');
    }
});

buildEmitter.on('commandError', (error) => {
    console.error('Build error:', error.message);
});

buildEmitter.on('commandFinish', () => {
    console.log('🏁 Build process finished');
});
```