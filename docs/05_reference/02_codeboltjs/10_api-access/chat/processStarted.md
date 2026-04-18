---
name: processStarted
cbbaseinfo:
  description: Notifies the server that a process has started and optionally sets up a handler for stop process events.
cbparameters:
  parameters:
    - name: onStopClicked
      typeName: "(message: any) => void"
      description: Optional callback function to handle stop process events when user clicks stop.
  returns:
    signatureTypeName: "{ stopProcess: () => void; cleanup?: () => void }"
    description: An object containing a stopProcess method and optionally a cleanup method.
data:
  name: processStarted
  category: chat
  link: processStarted.md
---
# processStarted

```typescript
codebolt.chat.processStarted(onStopClicked: (message: any) => void): { stopProcess: () => void; cleanup?: () => void }
```

Notifies the server that a process has started and optionally sets up a handler for stop process events.
### Parameters

- **`onStopClicked`** ((message: any) => void): Optional callback function to handle stop process events when user clicks stop.

### Returns

- **`{ stopProcess: () => void; cleanup?: () => void }`**: An object containing a stopProcess method and optionally a cleanup method.

### Response Structure

```typescript
interface ProcessControl {
  stopProcess: () => void;
  cleanup?: () => void;
}
```

### Examples

#### Example 1: Start a Process

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Notify that a process has started
const processControl = codebolt.chat.processStarted();

// Do some work...
console.log('Process running...');

// Stop the process when done
processControl.stopProcess();
```

#### Example 2: Start Process with Stop Handler

```typescript
const processControl = codebolt.chat.processStarted((message) => {
  console.log('Stop requested by user:', message);

  // Perform cleanup
  cleanupResources();

  // Notify that we're stopping
  console.log('Stopping process gracefully...');
});

// Process is now running and can be stopped by the user
```

#### Example 3: Start Process with Cleanup

```typescript
const processControl = codebolt.chat.processStarted(() => {
  console.log('Stopping process...');
  cleanup();
});

try {
  // Do work
  await performTask();
} finally {
  // Clean up event listener
  if (processControl.cleanup) {
    processControl.cleanup();
  }

  // Notify server that process finished
  codebolt.chat.processFinished();
}
```

#### Example 4: Long-Running Process with Progress

```typescript
const processControl = codebolt.chat.processStarted(() => {
  console.log('Process interrupted by user');
});

async function runLongTask() {
  const steps = 100;

  for (let i = 0; i < steps; i++) {
    // Check if we should stop (you'd need to implement this flag)
    if (shouldStop) break;

    await processStep(i);
    codebolt.chat.sendNotificationEvent(
      `Progress: ${i + 1}/${steps}`,
      'terminal'
    );
  }

  processControl.stopProcess();
  codebolt.chat.processFinished();
}

runLongTask();
```

### Common Use Cases

- **Task Execution**: Notify server when starting long-running tasks
- **User Control**: Allow users to stop processes
- **Progress Tracking**: Indicate active process state
- **Resource Management**: Clean up when process stops

### Notes

- Sends a PROCESS_STARTED event to the server
- Stop handler is called when user clicks stop button
- Always call stopProcess or processFinished when done
- Cleanup method removes event listeners
- Use processFinished to indicate normal completion
