---
name: SystemPrompt
cbbaseinfo:
  description: Class for loading and managing AI system prompts from YAML files with key-based retrieval
cbparameters:
  parameters:
    - name: filepath
      typeName: string
      description: Path to YAML prompt file (absolute or relative)
      default: ""
    - name: key
      typeName: string
      description: Identifier for specific prompt in YAML file
      default: ""
  returns:
    signatureTypeName: Class
    description: SystemPrompt instance with loaded prompt configuration
data:
  name: system-prompt
  category: prompt-management
  link: system-prompt.md
---
<CBBaseInfo/>
<CBParameters/>

### Key Features
- **YAML Loading**: Load prompt configurations from structured YAML files
- **Key-Based Access**: Retrieve prompts using defined identifier keys
- **Error Handling**: Validate file structure and key existence
- **Path Resolution**: Automatic handling of relative/absolute file paths

### Example Usage

```javascript
// Load prompt configuration
const promptLoader = new SystemPrompt(
  "./config/prompts.yaml",
  "customerServiceGreeting"
);

try {
  // Retrieve formatted prompt text
  const promptText = promptLoader.toPromptText();
  console.log("System prompt:", promptText);
  
  /* Example output:
  System prompt: "Welcome to our service! How may I assist you today?"
  */
} catch (error) {
  console.error("Prompt loading failed:", error.message);
}