# Custom Agent

Lets create Custom Agents 

- There are two way to create your agent 

## Sample Agent Flow Code

Here's a complete example of how an agent handles a user request using the **CodeboltJS library**:

```javascript
// Main agent entry point - handles incoming user messages
codebolt.onMessage((userMessage)=> {
    try {
        // 1. Extract context
        const projectContext = await codebolt.project.getContext();
        
        // 2. Get available tools for the agent
        const tools = await codebolt.tools.listToolsFromToolBoxes(["codebolt", "filesystem"]);
        
        // 3. Prepare conversation with system context
        const messages = [
            {
                role: "system",
                content: "You are a helpful coding assistant. Analyze the user request and use available tools to complete the task."
            },
            {
                role: "user", 
                content: `${userMessage}\n\nProject context: ${JSON.stringify(projectContext)}`
            }
        ];
        
        // 4. Start conversation loop with LLM
        let isTaskComplete = false;
        let conversationHistory = [...messages];
        
        while (!isTaskComplete) {
            // Send request to LLM with available tools
            const llmResponse = await codebolt.llm.chat(conversationHistory, tools);
            
            // 5. Process LLM response and execute tool calls
            if (llmResponse.tool_calls && llmResponse.tool_calls.length > 0) {
                // Execute each tool call requested by LLM
                for (const toolCall of llmResponse.tool_calls) {
                    const toolResult = await codebolt.tools.executeToolCall(toolCall);
                    
                    // Add tool result to conversation
                    conversationHistory.push({
                        role: "tool",
                        tool_call_id: toolCall.id,
                        content: JSON.stringify(toolResult)
                    });
                }
                
                // Get LLM's next response after tool execution
                const followUpResponse = await codebolt.llm.chat(conversationHistory, tools);
                
                // Check if LLM indicates task is complete
                if (followUpResponse.content.includes("task completed") || 
                    !followUpResponse.tool_calls) {
                    isTaskComplete = true;
                    
                    // 6. Send final response to user
                    return followUpResponse.content;
                }
            } else {
                // No tool calls needed, task is complete
                isTaskComplete = true;
                return llmResponse.content;
            }
        }
        
    } catch (error) {
        console.error('Error in agent:', error);
    }
});
```



### Advance Using Prompt Builder classes


```js 
const codebolt = require('@codebolt/codeboltjs').default;
const {
  UserMessage,
  SystemPrompt,
  TaskInstruction,
  Agent,
  InitialPromptBuilder,
  LLMOutputHandler,
  FollowUpPromptBuilder
} = require("@codebolt/codeboltjs/utils");

codebolt.onMessage(async (userMessage) => {
    try {
        // Step 1: Build initial prompt with all context
        const initialPromptBuilder = new InitialPromptBuilder(userMessage, codebolt);
        let userPrompt = await initialPromptBuilder
            .addMCPTools()                              // Add external tools
            .addAgentTools()                            // Add sub-agents as tools
            .addEnvironmentDetails()                    // Add system context
            .addSystemPrompt('agent.yaml', 'test')      // Load behavior instructions
            .addTaskInstruction('task.yaml', 'main_task') // Load task definition
            .buildInferenceParams();                    // Assemble final prompt

        // Step 2: Get initial LLM response
        let llmOutput = await codebolt.llm.inference(userPrompt);
        let llmHandler = new LLMOutputHandler(llmOutput, codebolt);

        // Step 3: Continue conversation until completion
        while (!llmHandler.isCompleted()) {
            await llmHandler.sendMessageToUser();      // Send response to user
            const toolResult = await llmHandler.runTools(); // Execute any tools

            // Step 4: Build follow-up prompt with context
            const followUpPromptBuilder = new FollowUpPromptBuilder();
            userPrompt = await followUpPromptBuilder
                .addPreviousConversation(userPrompt, llmOutput)
                .addToolResult(toolResult)
                .checkAndSummarizeConversationIfLong(30)
                .build();

            // Step 5: Continue the conversation
            llmOutput = await codebolt.llm.inference(userPrompt);
            llmHandler = new LLMOutputHandler(llmOutput, codebolt);
        }

        console.log("✅ Agent workflow completed successfully.");
    } catch (error) {
        console.error("❌ Agent error:", error);
        codebolt.chat.sendMessage(error.message);
    }
});
```


### How to run agent locally
