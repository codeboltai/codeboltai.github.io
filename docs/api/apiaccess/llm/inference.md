---
name: inference
cbbaseinfo:
  description: Sends an inference request to the LLM using OpenAI message format with tools support. The model is selected based on the provided llmrole parameter. If the specific model for the role is not found, it falls back to the default model for the current agent, and ultimately to the default application-wide LLM if necessary.
cbparameters:
  parameters:
    - name: message
      typeName: LLMInferenceParams
      description: The inference parameters object containing messages, tools, and configuration options.
    - name: message.messages
      typeName: Message[]
      description: Array of conversation messages with roles ('user', 'assistant', 'tool', 'system') and content.
    - name: message.tools
      typeName: Tool[]
      description: "Optional: Available tools for the model to use. Each tool has a type and function definition."
    - name: message.tool_choice
      typeName: string | object
      description: "Optional: How the model should use tools. Can be 'auto', 'none', 'required', or an object specifying a specific function."
    - name: message.llmrole
      typeName: string
      description: The LLM role to determine which model to use for processing the request.
    - name: message.max_tokens
      typeName: number
      description: "Optional: Maximum number of tokens to generate in the response."
    - name: message.temperature
      typeName: number
      description: "Optional: Temperature for response generation (0.0 to 2.0). Higher values make output more random."
    - name: message.stream
      typeName: boolean
      description: "Optional: Whether to stream the response. Defaults to false."
  returns:
    signatureTypeName: Promise<LLMResponse>
    description: A promise that resolves with the LLM's response containing content, token usage, and completion details.
data:
  name: inference
  category: llm
  link: inference.md
---
<CBBaseInfo/>
<CBParameters/>

### Response Structure

The method returns a Promise that resolves to a `LLMResponse` object with the following properties:

- **`type`** (string): Always "llmResponse".
- **`content`** (string): The actual response content from the LLM.
- **`role`** (string): Always "assistant" for LLM responses.
- **`model`** (string, optional): The specific model used for the inference.
- **`usage`** (object, optional): Token usage information including:
  - **`prompt_tokens`** (number): Number of tokens in the prompt.
  - **`completion_tokens`** (number): Number of tokens in the completion.
  - **`total_tokens`** (number): Total tokens used (prompt + completion).
- **`finish_reason`** (string, optional): Reason why the model stopped generating (e.g., "stop", "length", "tool_calls").
- **`choices`** (array, optional): Array of completion choices with message and finish_reason.
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): Additional information about the response.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): Unique identifier for the message.
- **`threadId`** (string, optional): Thread identifier for conversation context.

### Examples

```javascript
// Example 1: Basic inference with simple message
const response = await codebolt.llm.inference({
  messages: [
    {
      role: 'user',
      content: 'Hello! This is a test message. Please respond with a simple greeting.'
    }
  ],
  llmrole: 'assistant'
});
console.log("Response:", response.content);

// Example 2: Multi-turn conversation
const conversationResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'system',
      content: 'You are a helpful coding assistant.'
    },
    {
      role: 'user',
      content: 'Write a simple JavaScript function that adds two numbers.'
    }
  ],
  llmrole: 'assistant',
  max_tokens: 500,
  temperature: 0.7
});
console.log("Code Response:", conversationResponse.content);

// Example 3: Using tools with the LLM
const toolResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'user',
      content: 'What is the weather like today?'
    }
  ],
  tools: [
    {
      type: 'function',
      function: {
        name: 'get_weather',
        description: 'Get the current weather for a location',
        parameters: {
          type: 'object',
          properties: {
            location: {
              type: 'string',
              description: 'The city and state, e.g. San Francisco, CA'
            }
          },
          required: ['location']
        }
      }
    }
  ],
  tool_choice: 'auto',
  llmrole: 'assistant'
});
console.log("Tool Response:", toolResponse);

// Example 4: Forcing tool usage
const forcedToolResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'user',
      content: 'Calculate the sum of 25 and 17'
    }
  ],
  tools: [
    {
      type: 'function',
      function: {
        name: 'calculate',
        description: 'Perform mathematical calculations',
        parameters: {
          type: 'object',
          properties: {
            operation: { type: 'string' },
            numbers: { type: 'array', items: { type: 'number' } }
          },
          required: ['operation', 'numbers']
        }
      }
    }
  ],
  tool_choice: 'required',
  llmrole: 'assistant'
});
console.log("Forced Tool Response:", forcedToolResponse);

// Example 5: Handling tool call responses
const toolCallResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'user',
      content: 'What files are in the current directory?'
    },
    {
      role: 'assistant',
      content: null,
      tool_calls: [
        {
          id: 'call_123',
          type: 'function',
          function: {
            name: 'list_files',
            arguments: '{"path": "."}'
          }
        }
      ]
    },
    {
      role: 'tool',
      tool_call_id: 'call_123',
      content: 'file1.txt, file2.js, folder1/'
    }
  ],
  llmrole: 'assistant'
});
console.log("Tool Call Response:", toolCallResponse.content);

// Example 6: Streaming response (if supported)
const streamResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'user',
      content: 'Write a detailed explanation of machine learning.'
    }
  ],
  llmrole: 'assistant',
  stream: true,
  max_tokens: 1000
});
console.log("Stream Response:", streamResponse);

// Example 7: Error handling
try {
  const errorResponse = await codebolt.llm.inference({
    messages: [
      {
        role: 'user',
        content: 'Test message'
      }
    ],
    llmrole: 'invalid_role'
  });
  console.log("Response:", errorResponse);
} catch (error) {
  console.error("Error:", error);
}

// Example 8: Complex conversation with system prompt
const complexResponse = await codebolt.llm.inference({
  messages: [
    {
      role: 'system',
      content: 'You are an expert software architect. Provide detailed technical explanations.'
    },
    {
      role: 'user',
      content: 'Explain the differences between microservices and monolithic architecture.'
    }
  ],
  llmrole: 'assistant',
  temperature: 0.3,
  max_tokens: 800
});
console.log("Complex Response:", complexResponse.content);
```

### Common Use Cases

1. **Conversational AI**: Build chatbots and interactive assistants
2. **Code Generation**: Generate, review, and explain code
3. **Content Creation**: Write articles, documentation, and creative content
4. **Tool Integration**: Use LLMs with external tools and APIs
5. **Data Analysis**: Analyze and interpret data with AI assistance
6. **Problem Solving**: Get help with complex technical problems

### Notes

- The `messages` array maintains conversation history and context
- `llmrole` determines which model variant to use for the request
- Tool integration allows LLMs to perform actions and access external data
- `temperature` controls response randomness (0.0 = deterministic, 2.0 = very random)
- `max_tokens` limits response length to manage costs and performance
- The response includes detailed usage information for monitoring and billing
- Error handling is important as LLM requests can fail due to various reasons
- System messages help define the AI's behavior and personality
