---
name: FollowUpQuestionBuilder
cbbaseinfo:
  description: Creates the next prompt for the AI agent by incorporating previous conversation, tool results, and summarizing long interactions when needed.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: InferenceParams
    description: Returns a new inference prompt to continue the agent workflow.
  typeArgs: []
data:
  name: FollowUpQuestionBuilder
  category: codeboltutils
  link: followupquestionbuilder.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```javascript

const codebolt = require('@codebolt/codeboltjs').default;

const { FollowUpPromptBuilder } = require("@codebolt/codeboltjs/utils");

const followUpBuilder = new FollowUpQuestionBuilder(codebolt);
const nextPrompt = await followUpBuilder
    .addPreviousConversation(previousPrompt)
    .addToolResult(toolResults)
    .checkAndSummarizeConversationIfLong()
    .buildInferenceParams();
```

### Methods

The FollowUpQuestionBuilder class provides the following chainable methods:

- **`addPreviousConversation(previousPrompt)`**: Adds the previous conversation context to the new prompt
- **`addToolResult(toolResults)`**: Incorporates tool execution results into the prompt
- **`checkAndSummarizeConversationIfLong()`**: Automatically summarizes the conversation if it becomes too long
- **`buildInferenceParams()`**: Builds and returns the final inference parameters for the next AI interaction

### Usage Notes

- All methods return the FollowUpQuestionBuilder instance, allowing for method chaining
- The constructor requires a `codebolt` parameter
- Use this class to maintain conversation context across multiple AI interactions
- The summarization feature helps manage long conversations by condensing previous interactions
- The final `buildInferenceParams()` method returns an `InferenceParams` object ready for the next LLM call
