---
name: TaskInstruction
cbbaseinfo:
  description: Encapsulates task instructions and their metadata, handling loading/processing from YAML files.
cbparameters:
  parameters:
    - name: tools
      typeName: Tools
      description: Object containing tool definitions with descriptions and usage examples
    - name: userMessage
      typeName: UserMessage
      description: User message content handler for prompt generation
    - name: filepath
      typeName: string
      description: Path to YAML file containing task definitions
    - name: refsection
      typeName: string
      description: Specific section key to load from the YAML file
  returns:
    signatureTypeName: TaskInstruction
    description: New TaskInstruction instance configured with provided parameters
    typeArgs: []
data:
  name: TaskInstruction
  category: task-management
  link: TaskInstruction.md
---
<CBBaseInfo/>
<CBParameters/>

### Example

```js
import { TaskInstruction } from './task-instruction';
import { UserMessage } from './usermessage';

// Sample tools configuration
const tools = {
  fileProcessor: {
    description: "Handles file operations",
    usage: "processFile(filename)",
    example: "processFile('data.txt')"
  }
};

// Create a UserMessage instance 
const userMsg = new UserMessage(/* message configuration */);

// Initialize task instruction loader
const taskInstruction = new TaskInstruction(
  tools,
  userMsg,
  "./tasks/data_processing.yml",
  "data_cleanup"
);

// Generate prompts with task details
try {
  const prompts = await taskInstruction.toPrompt();
  console.log("Generated prompts:", prompts);
} catch (error) {
  console.error("Failed to process task:", error);
}