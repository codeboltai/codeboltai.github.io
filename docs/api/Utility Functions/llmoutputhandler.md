---
name: LLMOutputHandler
cbbaseinfo:
  description: Processes the AI model's response, manages tool executions, handles user communication, and detects when the task is completed.
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

### Example

```javascript
const codebolt = require('@codebolt/codeboltjs').default;

const { LLMOutputHandler } = require("@codebolt/codeboltjs/utils");

const llmOutput = codebolt.llm.inference(prompt);
const outputHandler = new LLMOutputHandler(llmOutput, codebolt);

await outputHandler.sendMessageToUser();
const toolResults = await outputHandler.runTools();

if (outputHandler.isCompleted()) {
    console.log("Task completed!");
}
```

### Methods

The LLMOutputHandler class provides the following methods:

- **`sendMessageToUser()`**: Sends the AI model's response message to the user
- **`runTools()`**: Executes any tools that were called by the AI model and returns the results
- **`isCompleted()`**: Checks if the current task has been completed based on the AI's response

### Usage Notes

- The constructor requires `llmOutput` (the AI model's response) and `codebolt` parameters
- Use `sendMessageToUser()` to communicate AI responses to the user
- Call `runTools()` to execute any tool calls made by the AI
- Check `isCompleted()` to determine if the workflow should continue or terminate
