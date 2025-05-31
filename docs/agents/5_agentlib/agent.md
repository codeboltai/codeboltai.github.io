---
name: AgentLib
cbbaseinfo:
  description: Central class for managing AI agent operations including tool execution, subagent coordination, and task processing through LLM interactions.
cbparameters:
  parameters:
    - name: tools
      typeName: Array<any>
      description: Initial set of tools available to the agent
    - name: systemPrompt
      typeName: SystemPrompt
      description: Base prompt configuration for the agent
    - name: maxRun
      typeName: number (optional)
      description: Maximum execution cycles (0 = unlimited)
      default: 0
    - name: subAgents
      typeName: Array<any>
      description: List of subordinate agents
      default: []
  returns:
    signatureTypeName: Class
    description: Agent instance with task processing capabilities
data:
  name: Agent
  category: agent
  link: agent.md
---
<CBBaseInfo/>
<CBParameters/>


### Key Features
- **Tool Integration**: Execute local and MCP tools
- **Subagent Coordination**: Manage nested agent workflows
- **Conversation Management**: Maintain context-aware dialog history
- **Automatic Retry**: Configurable execution attempts

### Example Usage

```javascript
// Initialize agent with tools and prompts
const systemPrompt = new SystemPrompt("You are a helpful AI assistant");
const taskInstruction = new TaskInstruction("Process user request", { priority: "high" });

const agent = new Agent(
  [imageProcessorTool, dataValidatorTool],
  systemPrompt,
  3, // max 3 attempts
  [reportGeneratorAgent]
);

// Execute task
const result = await agent.run(taskInstruction);
if (result.success) {
  console.log("Task completed:", result.message);
} else {
  console.error("Failed:", result.error);
}
