---
name: stopProcess
cbbaseinfo:
  description: Stops the ongoing process by sending a stop signal to the server.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: This method does not return a value.
data:
  name: stopProcess
  category: chat
  link: stopProcess.md
---
# stopProcess

```typescript
codebolt.chat.stopProcess(): void
```

Stops the ongoing process by sending a stop signal to the server.
### Returns

- **`void`**: This method does not return a value.

### Examples

#### Example 1: Stop a Running Process

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Start a process
codebolt.chat.processStarted();

// Do some work...

// Stop the process
codebolt.chat.stopProcess();
```

#### Example 2: Stop Process on Error

```typescript
codebolt.chat.processStarted();

try {
  await riskyOperation();
} catch (error) {
  console.error('Error occurred, stopping process:', error);
  codebolt.chat.stopProcess();
  throw error;
}
```

#### Example 3: Stop Process Conditionally

```typescript
codebolt.chat.processStarted();

let shouldContinue = true;

async function monitorAndStop() {
  while (shouldContinue) {
    const result = await checkCondition();

    if (!result) {
      console.log('Condition failed, stopping process');
      codebolt.chat.stopProcess();
      shouldContinue = false;
    }

    await delay(1000);
  }
}

monitorAndStop();
```

### Common Use Cases

- **Manual Stop**: Stop processes when requested
- **Error Handling**: Stop processes on errors
- **Condition-Based Stop**: Stop based on conditions
- **User Cancellation**: Respond to user requests

### Notes

- Sends PROCESS_STOPPED event to server
- Does not wait for confirmation
- Can be called multiple times (idempotent)
- Use processFinished for normal completion