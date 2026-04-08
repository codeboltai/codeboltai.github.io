---
name: LLMOutputHandler
cbbaseinfo:
  description: "Processes the AI model's response, manages tool executions, handles user communication, and detects when the task is completed."
cbparameters:
  parameters: []
  returns:
    signatureTypeName: void
    description: Executes AI logic and tool workflows, and optionally returns completion status.
  typeArgs: []
data:
  name: LLMOutputHandler
  category: codeboltutils
  link: llmoutputhandler.md
---
<CBBaseInfo/>
<CBParameters/>

> **Note:** The `LLMOutputHandler` utility class is planned/aspirational and not yet available in the codebase. The `@codebolt/codeboltjs/utils` import path does not exist yet. This documentation is a placeholder for a future implementation.

### Planned Usage

```javascript
const codebolt = require('@codebolt/codeboltjs').default;

// Note: This import path does not exist yet
// const { LLMOutputHandler } = require("@codebolt/codeboltjs/utils");

// Placeholder for future implementation
```

### Planned Methods

- **`sendMessageToUser()`**: Sends the AI model's response message to the user
- **`runTools()`**: Executes any tools that were called by the AI model and returns the results
- **`isCompleted()`**: Checks if the current task has been completed based on the AI's response
