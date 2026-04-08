---
cbapicategory:
  - name: inference
    link: /docs/api/apiaccess/llm/inference
    description: |-
      Sends an inference request to the LLM and returns the model's response.
      The model is selected based on the provided llmrole parameter.

---
# LLM

<CBAPICategory />

The LLM module provides powerful language model inference capabilities for your Codebolt applications. It supports OpenAI-compatible message formats, tool/function calling, and various model configurations.

## Quick Start Guide

### Basic LLM Usage

```javascript
import codebolt from '@codebolt/codeboltjs';

async function quickStart() {
  // Simple inference
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'user',
        content: 'Hello! Can you help me write a JavaScript function?'
      }
    ],
    llmrole: 'assistant'
  });

  console.log('Response:', response.content);
  console.log('Tokens used:', response.usage?.total_tokens);
}
```

### Minimal Example

```javascript
// One-line inference
const result = await codebolt.llm.inference({
  messages: [{ role: 'user', content: 'Explain quantum computing' }],
  llmrole: 'assistant'
});
console.log(result.content);
```

## Common Workflows

### Workflow 1: Conversational AI

```javascript
async function chatConversation() {
  const conversationHistory = [];

  async function sendMessage(userMessage) {
    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    // Get AI response
    const response = await codebolt.llm.inference({
      messages: [
        {
          role: 'system',
          content: 'You are a helpful coding assistant.'
        },
        ...conversationHistory
      ],
      llmrole: 'assistant',
      temperature: 0.7
    });

    // Add AI response to history
    conversationHistory.push({
      role: 'assistant',
      content: response.content
    });

    return response.content;
  }

  // Use the chat function
  const reply1 = await sendMessage('How do I create a REST API?');
  console.log('AI:', reply1);

  const reply2 = await sendMessage('Can you show me an example?');
  console.log('AI:', reply2);
}
```

### Workflow 2: Code Generation and Refactoring

```javascript
async function codeWorkflow() {
  // Generate code
  const codeResponse = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are an expert programmer. Write clean, well-documented code.'
      },
      {
        role: 'user',
        content: 'Write a JavaScript function to validate email addresses using regex.'
      }
    ],
    llmrole: 'assistant',
    temperature: 0.3,
    max_tokens: 500
  });

  console.log('Generated Code:\n', codeResponse.content);

  // Refactor the generated code
  const refactorResponse = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are a code optimization expert.'
      },
      {
        role: 'user',
        content: `Refactor this code for better performance:\n${codeResponse.content}`
      }
    ],
    llmrole: 'assistant',
    temperature: 0.2
  });

  console.log('Refactored Code:\n', refactorResponse.content);
}
```

### Workflow 3: Tool/Function Calling

```javascript
async function toolCallingExample() {
  const tools = [
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
            },
            unit: {
              type: 'string',
              enum: ['celsius', 'fahrenheit'],
              description: 'The temperature unit'
            }
          },
          required: ['location']
        }
      }
    },
    {
      type: 'function',
      function: {
        name: 'calculate',
        description: 'Perform mathematical calculations',
        parameters: {
          type: 'object',
          properties: {
            expression: {
              type: 'string',
              description: 'Mathematical expression to evaluate'
            }
          },
          required: ['expression']
        }
      }
    }
  ];

  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'user',
        content: 'What is the weather in Tokyo and what is 25 * 17?'
      }
    ],
    tools,
    tool_choice: 'auto',
    llmrole: 'assistant'
  });

  // Handle tool calls
  if (response.choices?.[0]?.message?.tool_calls) {
    for (const toolCall of response.choices[0].message.tool_calls) {
      console.log(`Tool called: ${toolCall.function.name}`);
      console.log(`Arguments: ${toolCall.function.arguments}`);

      // Execute the tool function
      const toolResult = await executeTool(toolCall.function);

      // Send tool result back to LLM
      const finalResponse = await codebolt.llm.inference({
        messages: [
          {
            role: 'user',
            content: 'What is the weather in Tokyo and what is 25 * 17?'
          },
          {
            role: 'assistant',
            content: null,
            tool_calls: [toolCall]
          },
          {
            role: 'tool',
            tool_call_id: toolCall.id,
            content: JSON.stringify(toolResult)
          }
        ],
        llmrole: 'assistant'
      });

      console.log('Final Response:', finalResponse.content);
    }
  }
}

async function executeTool(functionCall) {
  // Implement your tool logic here
  const { name, arguments: args } = functionCall;
  const params = JSON.parse(args);

  if (name === 'get_weather') {
    return { location: params.location, temperature: 22, condition: 'Sunny' };
  } else if (name === 'calculate') {
    return { result: eval(params.expression) };
  }
}
```

### Workflow 4: Streaming Responses

```javascript
async function streamingExample() {
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'user',
        content: 'Write a detailed explanation of async/await in JavaScript'
      }
    ],
    llmrole: 'assistant',
    stream: true,
    max_tokens: 1000
  });

  // Handle streaming response
  if (response.stream) {
    for await (const chunk of response.stream) {
      process.stdout.write(chunk.content || '');
    }
    console.log('\nStreaming complete');
  } else {
    console.log(response.content);
  }
}
```

### Workflow 5: Multi-Turn Reasoning

```javascript
async function multiTurnReasoning() {
  const messages = [
    {
      role: 'system',
      content: 'You are an expert problem solver. Break down complex problems step by step.'
    }
  ];

  // Initial problem
  messages.push({
    role: 'user',
    content: 'I need to design a scalable microservices architecture for an e-commerce platform.'
  });

  // Step 1: Understand requirements
  let response = await codebolt.llm.inference({
    messages,
    llmrole: 'assistant',
    max_tokens: 300
  });

  messages.push({ role: 'assistant', content: response.content });
  messages.push({
    role: 'user',
    content: 'What are the key components I need to consider?'
  });

  // Step 2: Identify components
  response = await codebolt.llm.inference({
    messages,
    llmrole: 'assistant',
    max_tokens: 500
  });

  messages.push({ role: 'assistant', content: response.content });
  messages.push({
    role: 'user',
    content: 'How should these components communicate with each other?'
  });

  // Step 3: Define communication
  response = await codebolt.llm.inference({
    messages,
    llmrole: 'assistant',
    max_tokens: 500
  });

  console.log('Final Architecture Plan:\n', response.content);
}
```

## Module Integration Examples

### Integration with Agent Module

```javascript
async function llmWithAgent() {
  // Use LLM to analyze task and find appropriate agent
  const analysis = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'Analyze the task and identify what type of agent would be best suited.'
      },
      {
        role: 'user',
        content: 'I need to create a user authentication system with JWT tokens.'
      }
    ],
    llmrole: 'assistant',
    max_tokens: 200
  });

  console.log('Task Analysis:', analysis.content);

  // Use analysis to find agent
  const agent = await codebolt.agent.findAgent(
    `Implement authentication system: ${analysis.content}`,
    1,
    [],
    'all',
    'use_ai'
  );

  if (agent?.agents?.[0]) {
    const result = await codebolt.agent.startAgent(
      agent.agents[0].function.name,
      'Create JWT authentication system with login, register, and token refresh endpoints.'
    );

    return result;
  }
}
```

### Integration with VectorDB

```javascript
async function llmWithVectorDB() {
  // Add knowledge to vector database
  await codebolt.vectordb.addVectorItem({
    type: 'documentation',
    content: 'React is a JavaScript library for building user interfaces.',
    tags: ['react', 'javascript', 'frontend']
  });

  // Query similar knowledge
  const similar = await codebolt.vectordb.queryVectorItem('What is React?');

  // Use retrieved context in LLM prompt
  const context = similar.item?.[0]?.item?.content || '';

  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant. Use this context when answering: ${context}`
      },
      {
        role: 'user',
        content: 'What is React and what are its main features?'
      }
    ],
    llmrole: 'assistant',
    max_tokens: 500
  });

  console.log('Enhanced Response:', response.content);
}
```

### Integration with File System

```javascript
async function llmWithFileSystem() {
  // Read code from file
  const codeContent = await codebolt.fs.readFile('./src/utils.js');

  // Analyze code with LLM
  const analysis = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'You are a code reviewer. Analyze code for bugs, performance issues, and best practices.'
      },
      {
        role: 'user',
        content: `Review this code:\n\`\`\`javascript\n${codeContent}\n\`\`\``
      }
    ],
    llmrole: 'assistant',
    max_tokens: 1000
  });

  // Save analysis to file
  await codebolt.fs.writeFile(
    './code-review.md',
    `# Code Review\n\n${analysis.content}`
  );

  console.log('Code review saved to code-review.md');
}
```

## Best Practices

### 1. System Prompt Engineering

```javascript
// Good: Specific, well-structured system prompt
const systemPrompt = `
You are an expert software architect with 10+ years of experience.
Your responses should:
- Be concise and actionable
- Include code examples when relevant
- Follow best practices and design patterns
- Consider scalability and performance
- Highlight potential trade-offs
`;

// Bad: Vague system prompt
const badPrompt = 'You are a helpful assistant.';
```

### 2. Temperature Tuning

```javascript
// Use low temperature for deterministic outputs
const codeGeneration = await codebolt.llm.inference({
  messages: [{ role: 'user', content: 'Write a function to sort an array' }],
  llmrole: 'assistant',
  temperature: 0.2, // Low = more deterministic
  max_tokens: 500
});

// Use high temperature for creative tasks
const creativeWriting = await codebolt.llm.inference({
  messages: [{ role: 'user', content: 'Write a creative story about AI' }],
  llmrole: 'assistant',
  temperature: 0.9, // High = more creative
  max_tokens: 1000
});
```

### 3. Token Management

```javascript
async function optimizedInference(userMessage) {
  // Estimate tokens (rough approximation: 1 token ≈ 4 characters)
  const estimatedTokens = userMessage.length / 4;

  // Set appropriate max_tokens
  const maxTokens = estimatedTokens < 100 ? 500 : 2000;

  const response = await codebolt.llm.inference({
    messages: [{ role: 'user', content: userMessage }],
    llmrole: 'assistant',
    max_tokens: maxTokens
  });

  // Log actual usage
  console.log(`Prompt tokens: ${response.usage?.prompt_tokens}`);
  console.log(`Completion tokens: ${response.usage?.completion_tokens}`);
  console.log(`Total tokens: ${response.usage?.total_tokens}`);

  return response;
}
```

### 4. Error Handling

```javascript
async function robustInference(messages) {
  try {
    const response = await codebolt.llm.inference({
      messages,
      llmrole: 'assistant',
      timeout: 30000
    });

    if (!response.content) {
      throw new Error('Empty response from LLM');
    }

    return response;

  } catch (error) {
    console.error('LLM Inference failed:', error.message);

    // Implement retry logic
    if (error.message.includes('timeout') || error.message.includes('rate')) {
      console.log('Retrying after delay...');
      await new Promise(resolve => setTimeout(resolve, 2000));

      return await codebolt.llm.inference({
        messages,
        llmrole: 'assistant'
      });
    }

    throw error;
  }
}
```

### 5. Response Validation

```javascript
async function validatedInference(prompt, expectedFormat) {
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `Respond only with ${expectedFormat}. No additional text.`
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    llmrole: 'assistant',
    temperature: 0.1
  });

  // Validate response format
  if (expectedFormat === 'JSON') {
    try {
      return JSON.parse(response.content);
    } catch (error) {
      throw new Error('Invalid JSON response');
    }
  }

  return response.content;
}
```

## Performance Considerations

1. **Temperature Settings**: Lower temperatures (0.1-0.3) for deterministic tasks, higher (0.7-0.9) for creative tasks
2. **Token Limits**: Set appropriate `max_tokens` to balance response completeness with cost and speed
3. **Caching**: Cache responses for frequently asked questions
4. **Batch Processing**: Process multiple independent requests in parallel when possible
5. **Streaming**: Use streaming for long responses to improve perceived performance
6. **Model Selection**: Choose appropriate `llmrole` for your task complexity

## Common Pitfalls and Solutions

### Pitfall 1: Ignoring Token Limits

```javascript
// Problem: Not setting max_tokens
const response = await codebolt.llm.inference({
  messages: [{ role: 'user', content: longPrompt }],
  llmrole: 'assistant'
});
// Response might be cut off

// Solution: Always set appropriate max_tokens
const response = await codebolt.llm.inference({
  messages: [{ role: 'user', content: longPrompt }],
  llmrole: 'assistant',
  max_tokens: 2000
});
```

### Pitfall 2: Not Handling Tool Calls

```javascript
// Problem: Ignoring tool_calls in response
const response = await codebolt.llm.inference({
  messages,
  tools,
  llmrole: 'assistant'
});
console.log(response.content); // Might be null

// Solution: Check for tool_calls
if (response.choices?.[0]?.message?.tool_calls) {
  // Handle tool calls
} else if (response.content) {
  console.log(response.content);
}
```

### Pitfall 3: Poor System Prompts

```javascript
// Problem: Vague system prompt
const response = await codebolt.llm.inference({
  messages: [
    { role: 'system', content: 'Be helpful' },
    { role: 'user', content: 'Write code' }
  ],
  llmrole: 'assistant'
});

// Solution: Specific, detailed system prompt
const response = await codebolt.llm.inference({
  messages: [
    {
      role: 'system',
      content: 'You are an expert Python developer. Write clean, PEP-8 compliant code with type hints and docstrings.'
    },
    { role: 'user', content: 'Write code' }
  ],
  llmrole: 'assistant'
});
```

## Advanced Patterns

### Pattern 1: Chain of Thought

```javascript
async function chainOfThought(problem) {
  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: 'Think step by step. Break down the problem and show your reasoning before giving the final answer.'
      },
      {
        role: 'user',
        content: problem
      }
    ],
    llmrole: 'assistant',
    temperature: 0.5,
    max_tokens: 1000
  });

  return response.content;
}
```

### Pattern 2: Few-Shot Learning

```javascript
async function fewShotLearning(task) {
  const examples = [
    {
      input: 'Sort [3,1,2]',
      output: '[1,2,3]'
    },
    {
      input: 'Sort [5,4,3,2,1]',
      output: '[1,2,3,4,5]'
    }
  ];

  const examplePrompt = examples.map(ex =>
    `Input: ${ex.input}\nOutput: ${ex.output}`
  ).join('\n\n');

  const response = await codebolt.llm.inference({
    messages: [
      {
        role: 'system',
        content: `Complete the pattern:\n\n${examplePrompt}`
      },
      {
        role: 'user',
        content: `Input: ${task}`
      }
    ],
    llmrole: 'assistant',
    temperature: 0.1
  });

  return response.content;
}
```

### Pattern 3: Self-Consistency

```javascript
async function selfConsistency(prompt, numSamples = 3) {
  const responses = await Promise.all(
    Array(numSamples).fill(null).map(() =>
      codebolt.llm.inference({
        messages: [{ role: 'user', content: prompt }],
        llmrole: 'assistant',
        temperature: 0.7
      })
    )
  );

  // Count occurrences of each response
  const counts = {};
  responses.forEach(r => {
    counts[r.content] = (counts[r.content] || 0) + 1;
  });

  // Return most common response
  const mostCommon = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])[0][0];

  return mostCommon;
}
```
