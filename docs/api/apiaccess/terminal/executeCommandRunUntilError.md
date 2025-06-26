---
name: executeCommandRunUntilError
cbbaseinfo:
  description: Executes a given command and keeps running until an error occurs.

    Listens for messages from the WebSocket and resolves the promise when an
    error is encountered.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
    - name: executeInMain
      typeName: boolean
      description: Optional parameter to execute in main terminal. Defaults to false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves when an error occurs during command execution.
   
data:
  name: executeCommandRunUntilError
  category: terminal
  link: executeCommandRunUntilError.md
---
<CBBaseInfo/> 
 <CBParameters/>

## Example

```javascript
// Run command until error occurs
try {
    const errorResult = await codebolt.terminal.executeCommandRunUntilError('npm run dev');
    console.log('Command stopped due to error:', errorResult);
} catch (error) {
    console.error('Command execution failed:', error.message);
}

// Run in main terminal
try {
    const result = await codebolt.terminal.executeCommandRunUntilError('npm start', true);
    console.log('Main terminal error:', result);
} catch (error) {
    console.error('Main terminal execution failed:', error.message);
}
```