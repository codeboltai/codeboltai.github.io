---
name: PromptBuilder
cbbaseinfo:
  description: Constructs a smart prompt for the AI agent by combining tools, environment details, system instructions, and task-specific information.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: InferenceParams
    description: Returns an inference parameter object suitable for running an LLM.
  typeArgs: []
data:
  name: PromptBuilder
  category: codeboltutils
  link: promptBuilder.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```javascript

const codebolt = require('@codebolt/codeboltjs').default;

const { InitialPromptBuilder } = require("@codebolt/codeboltjs/utils");

const promptBuilder = new InitialPromptBuilder(userMessage, codebolt);
const prompt = await promptBuilder
    .addMCPTools()
    .addAgentTools()
    .addEnvironmentDetails()
    .addSystemPrompt('agent.yaml', 'test', 'example.md')
    .addTaskInstruction('task.yaml', 'main_task')
    .buildInferenceParams();
```

### Methods

The PromptBuilder class provides the following chainable methods:

- **`addMCPTools()`**: Adds MCP (Model Context Protocol) tools to the prompt
- **`addAgentTools()`**: Includes agent-specific tools in the prompt
- **`addEnvironmentDetails()`**: Adds environment context and details
- **`addSystemPrompt(yamlFile, section, exampleFile)`**: Loads system instructions from YAML configuration
- **`addTaskInstruction(yamlFile, taskName)`**: Adds specific task instructions
- **`buildInferenceParams()`**: Builds and returns the final inference parameters

### Usage Notes

- All methods return the PromptBuilder instance, allowing for method chaining
- The constructor requires `userMessage` and `codebolt` parameters
- The final `buildInferenceParams()` method returns an `InferenceParams` object ready for LLM execution