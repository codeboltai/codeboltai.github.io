---
name: FollowUpQuestionBuilder
cbbaseinfo:
  description: Creates the next prompt for the AI agent by incorporating previous conversation, tool results, and summarizing long interactions when needed.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: LLMInferenceParams
    description: Returns a new inference prompt to continue the agent workflow.
  typeArgs: []
data:
  name: FollowUpQuestionBuilder
  category: codeboltutils
  link: followupquestionbuilder.md
---
<CBBaseInfo/>
<CBParameters/>

> **Note:** The `FollowUpQuestionBuilder` utility class is planned/aspirational and not yet available in the codebase. The `@codebolt/codeboltjs/utils` import path does not exist yet. This documentation is a placeholder for a future implementation.

### Planned Usage

```javascript
const codebolt = require('@codebolt/codeboltjs').default;

// Note: This import path does not exist yet
// const { FollowUpPromptBuilder } = require("@codebolt/codeboltjs/utils");

// Placeholder for future implementation
```

### Planned Methods

- **`addPreviousConversation(previousPrompt)`**: Adds the previous conversation context to the new prompt
- **`addToolResult(toolResults)`**: Incorporates tool execution results into the prompt
- **`checkAndSummarizeConversationIfLong()`**: Automatically summarizes the conversation if it becomes too long
- **`buildInferenceParams()`**: Builds and returns the final inference parameters for the next AI interaction
