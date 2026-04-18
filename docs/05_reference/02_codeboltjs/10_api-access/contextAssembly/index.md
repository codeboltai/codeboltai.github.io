---
cbapicategory:
  - name: getContext
    link: /docs/api/apiaccess/contextassembly/getcontext
    description: Assembles context from various memory sources based on rules and variables.
  - name: validate
    link: /docs/api/apiaccess/contextassembly/validate
    description: Validates a context assembly request without fetching data.
  - name: listMemoryTypes
    link: /docs/api/apiaccess/contextassembly/listmemorytypes
    description: Lists all available memory types that can be used in context assembly.
  - name: evaluateRules
    link: /docs/api/apiaccess/contextassembly/evaluaterules
    description: Evaluates context rules without fetching memory content.
  - name: getRequiredVariables
    link: /docs/api/apiaccess/contextassembly/getrequiredvariables
    description: Gets required variables for specific memory types.

---
# Context Assembly API

The Context Assembly API provides intelligent context building by aggregating data from multiple memory sources. It enables dynamic context composition based on rules, variables, and constraints.

## Overview

The Context Assembly module enables you to:
- **Aggregate Context**: Combine data from multiple memory sources
- **Apply Rules**: Use rule engines to conditionally include/exclude context
- **Validate Requests**: Check requests before expensive operations
- **Optimize**: Control token usage and assembly time

## Key Concepts

### Memory Types

Memory types represent different data sources that can contribute to context:
- **Episodic Memory**: Past experiences and conversations
- **Semantic Memory**: Facts and knowledge
- **Working Memory**: Current task state
- **Procedural Memory**: Skills and procedures
- And more...

### Scope Variables

Variables that define the current context:
- **Input**: The current user message or task
- **Agent State**: Current agent state and mode
- **Session Data**: Session-specific information
- **Environment**: Environment-specific variables

### Rule Engines

Rule engines determine which memories to include:
- **Include**: Always include specific memory types
- **Exclude**: Exclude specific memory types
- **Conditional**: Include based on variable values
- **Priority**: Prioritize certain memories

## Quick Start Example

```javascript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Assemble context
const result = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: 'How do I reset my password?',
    userId: 'user-123',
    sessionId: 'session-456'
  },
  explicit_memory: ['episodic', 'semantic'],
  constraints: {
    max_tokens: 4000,
    max_sources: 10,
    timeout_ms: 5000
  }
});

if (result.success) {
  const { contributions, total_tokens } = result.data.context;

  console.log(`Assembled ${total_tokens} tokens from ${contributions.length} sources`);

  contributions.forEach(contrib => {
    console.log(`- ${contrib.memory_label}: ${contrib.tokens} tokens`);
  });
}
```

## Response Structure

All Context Assembly API functions return responses with a consistent structure:

```javascript
{
  type: 'contextAssembly.operationName',
  success: true,
  data: {
    // Operation-specific data
  },
  message: 'Optional message',
  error: 'Error details if failed',
  timestamp: '2024-01-19T10:00:00Z',
  requestId: 'unique-request-id'
}
```

## Common Use Cases

### Build Context for LLM
```javascript
const context = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: userMessage,
    userId,
    conversationId
  },
  constraints: {
    max_tokens: 8000,
    timeout_ms: 3000
  }
});

// Use context for LLM prompt
const prompt = buildPrompt(context.data.context);
```

### Validate Before Assembly
```javascript
const validation = await codebolt.contextAssembly.validate({
  scope_variables: { input: 'test' },
  explicit_memory: ['episodic', 'semantic']
});

if (validation.data.validation.valid) {
  // Proceed with actual assembly
  const context = await codebolt.contextAssembly.getContext({...});
}
```

### List Available Memory Types
```javascript
const types = await codebolt.contextAssembly.listMemoryTypes();

types.data.memoryTypes.forEach(type => {
  console.log(`- ${type.label}: ${type.description}`);
  console.log(`  Required: ${type.inputs_scope.join(', ')}`);
});
```

### Get Required Variables
```javascript
const vars = await codebolt.contextAssembly.getRequiredVariables([
  'episodic',
  'semantic'
]);

console.log('Scope variables:', vars.data.scope_variables);
console.log('Additional variables:', vars.data.additional_variables);
```

### Evaluate Rules Only
```javascript
const rules = await codebolt.contextAssembly.evaluateRules({
  scope_variables: {
    input: 'Fix the authentication bug',
    task_type: 'debugging'
  }
});

console.log('Matched rules:', rules.data.matched_rules);
console.log('Included memories:', rules.data.included_memories);
```

## Context Constraints

Control the assembly process with constraints:

```javascript
{
  max_tokens: 8000,        // Maximum tokens to assemble
  max_sources: 20,         // Maximum memory sources to include
  timeout_ms: 5000         // Maximum assembly time in milliseconds
}
```

## Memory Contributions

Each memory contribution includes:

```javascript
{
  memory_id: 'episodic',
  memory_label: 'Episodic Memory',
  content: 'Actual memory content...',
  format: 'text',          // text, json, or markdown
  tokens: 1250,            // Token count
  source: 'memory-source'  // Source identifier
}
```

## Notes and Best Practices

### Performance
- Set appropriate `max_tokens` to limit context size
- Use `max_sources` to control the number of memory sources
- Set `timeout_ms` to prevent long-running assemblies

### Memory Selection
- Use `explicit_memory` to force specific memory types
- Let rule engines decide based on `scope_variables`
- Use `validate` to check requests before expensive operations

### Token Management
- Monitor `total_tokens` to stay within limits
- Contributions are ordered by relevance
- Truncate if exceeding limits

### Error Handling
- Always check `success` before using results
- Handle `warnings` for non-fatal issues
- Validate requests before assembly

### Rule Evaluation
- Use `evaluateRules` to test rule logic
- Combine with rule engines for complex logic
- Review `matched_rules` for debugging

<CBAPICategory />
