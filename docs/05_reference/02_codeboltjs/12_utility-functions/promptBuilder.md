---
name: PromptBuilder
cbbaseinfo:
  description: "Constructs a smart prompt for the AI agent by combining tools, environment details, system instructions, and task-specific information."
cbparameters:
  parameters: []
  returns:
    signatureTypeName: LLMInferenceParams
    description: Returns an inference parameter object suitable for running an LLM.
  typeArgs: []
data:
  name: PromptBuilder
  category: codeboltutils
  link: promptBuilder.md
---
<CBBaseInfo/>
<CBParameters/>

> **Note:** The `PromptBuilder` utility class is planned/aspirational and not yet available in the codebase. The `@codebolt/codeboltjs/utils` import path does not exist yet. This documentation is a placeholder for a future implementation.

### Planned Usage

```javascript
const codebolt = require('@codebolt/codeboltjs').default;

// Note: This import path does not exist yet
// const { InitialPromptBuilder } = require("@codebolt/codeboltjs/utils");

// Placeholder for future implementation
```

### Planned Methods

- **`addMCPTools()`**: Adds MCP (Model Context Protocol) tools to the prompt
- **`addAgentTools()`**: Includes agent-specific tools in the prompt
- **`addEnvironmentDetails()`**: Adds environment context and details
- **`addSystemPrompt(yamlFile, section, exampleFile)`**: Loads system instructions from YAML configuration
- **`addTaskInstruction(yamlFile, taskName)`**: Adds specific task instructions
- **`buildInferenceParams()`**: Builds and returns the final inference parameters
