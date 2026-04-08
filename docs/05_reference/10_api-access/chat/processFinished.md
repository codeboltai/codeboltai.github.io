---
name: processFinished
cbbaseinfo:
  description: Notifies the server that a process has finished execution successfully.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: This method does not return a value.
data:
  name: processFinished
  category: chat
  link: processFinished.md
---
# processFinished

```typescript
codebolt.chat.processFinished(): void
```

Notifies the server that a process has finished execution successfully.
### Returns

- **`void`**: This method does not return a value.

### Examples

#### Example 1: Finish a Process

```typescript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

// Start a process
codebolt.chat.processStarted();

// Do work
await performTask();

// Notify that process finished
codebolt.chat.processFinished();
```

#### Example 2: Finish with Finally Block

```typescript
codebolt.chat.processStarted();

try {
  await performTask();
  await validateResults();
} catch (error) {
  console.error('Task failed:', error);
  codebolt.chat.stopProcess();
  throw error;
} finally {
  if (!error) {
    codebolt.chat.processFinished();
  }
}
```

#### Example 3: Finish Async Process

```typescript
async function runProcess() {
  codebolt.chat.processStarted();

  try {
    await step1();
    codebolt.chat.sendMessage('Step 1 complete');

    await step2();
    codebolt.chat.sendMessage('Step 2 complete');

    await step3();
    codebolt.chat.sendMessage('Step 3 complete');

    // All steps complete
    codebolt.chat.processFinished();
    codebolt.chat.sendMessage('Process completed successfully!');
  } catch (error) {
    codebolt.chat.stopProcess();
    codebolt.chat.sendMessage(`Process failed: ${error.message}`);
  }
}

runProcess();
```

#### Example 4: Finish with Results

```typescript
codebolt.chat.processStarted();

const results = {
  filesProcessed: 42,
  errors: 0,
  warnings: 3,
  duration: '5m 23s'
};

try {
  await processData();

  codebolt.chat.sendNotificationEvent(
    `Processed ${results.filesProcessed} files in ${results.duration}`,
    'terminal'
  );

  codebolt.chat.processFinished();
} catch (error) {
  codebolt.chat.stopProcess();
}
```

### Common Use Cases

- **Normal Completion**: Indicate successful process finish
- **Task Completion**: Notify when tasks are done
- **Status Updates**: Update server about completion
- **Cleanup**: Signal that resources can be released

### Notes

- Sends PROCESS_FINISHED event to server
- Indicates successful completion (vs stopProcess for interruption)
- Should be called after processStarted
- Does not take parameters (use sendMessage for results)
- Helps server track process lifecycle