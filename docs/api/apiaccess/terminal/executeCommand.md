---
name: executeCommand
cbbaseinfo:
  description: Executes a given command and returns the result.

    Listens for messages from the WebSocket that indicate the output, error, or
    finish state

    of the executed command and resolves the promise accordingly.
cbparameters:
  parameters:
    - name: command
      typeName: string
      description: The command to be executed.
    - name: returnEmptyStringOnSuccess
      typeName: boolean
      description: Optional parameter to return empty string on success. Defaults to false.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the command's output or error.
    typeArgs: []
data:
  name: executeCommand
  category: terminal
  link: executeCommand.md
---
<CBBaseInfo/> 
<CBParameters/>

## Example

```javascript
// Basic command execution
const nodeVersionResult = await codebolt.terminal.executeCommand('node --version');
console.log('✅ Node version:', nodeVersionResult);

const npmVersionResult = await codebolt.terminal.executeCommand('npm --version');
console.log('✅ NPM version:', npmVersionResult);

// Command with return empty string on success
const emptyResult = await codebolt.terminal.executeCommand('echo "test"', true);
console.log('✅ Empty result (success):', emptyResult);

// Error handling
try {
    const result = await codebolt.terminal.executeCommand('invalidcommand');
    console.log('Command result:', result);
} catch (error) {
    console.error('Command failed:', error.message);
}
```