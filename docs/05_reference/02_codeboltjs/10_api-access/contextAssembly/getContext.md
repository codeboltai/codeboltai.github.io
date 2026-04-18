---
name: getContext
cbbaseinfo:
  description: Assembles context from various memory sources based on rules and variables.
cbparameters:
  parameters:
    - name: request
      type: ContextAssemblyRequest
      required: true
      description: Context assembly request with scope variables, memory types, and constraints.
  returns:
    signatureTypeName: "Promise<ContextAssemblyResponse>"
    description: A promise that resolves with assembled context from all memory sources.
data:
  name: getContext
  category: contextAssembly
  link: getContext.md
---
# getContext

```typescript
codebolt.contextAssembly.getContext(request: undefined): Promise<ContextAssemblyResponse>
```

Assembles context from various memory sources based on rules and variables.
### Parameters

- **`request`** (unknown): Context assembly request with scope variables, memory types, and constraints.

### Returns

- **`Promise<[ContextAssemblyResponse](/docs/reference/codeboltjs/type-reference/codeboltjs/interfaces/ContextAssemblyResponse)>`**: A promise that resolves with assembled context from all memory sources.

### Response Structure

```typescript
{
  type: 'contextAssembly.getContext',
  success: boolean,
  data?: {
    context: {
      contributions: Array<{
        memory_id: string;
        memory_label: string;
        content: string;
        format: 'text' | 'json' | 'markdown';
        tokens?: number;
        source?: string;
      }>;
      total_tokens: number;
      assembly_time_ms: number;
      applied_rules?: string[];
      warnings?: string[];
    }
  }
}
```

### Examples

#### Example 1: Basic Context Assembly
```javascript
import codebolt from '@codebolt/codeboltjs';

await codebolt.waitForReady();

const result = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: 'How do I reset my password?',
    userId: 'user-123'
  }
});

if (result.success) {
  const { contributions, total_tokens } = result.data.context;

  console.log(`Assembled ${total_tokens} tokens from ${contributions.length} sources`);

  // Combine all contributions
  const fullContext = contributions
    .map(c => c.content)
    .join('\n\n');
}
```

#### Example 2: Assemble with Explicit Memory Types
```javascript
const result = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: 'What did we discuss about the API?',
    conversationId: 'conv-456'
  },
  explicit_memory: ['episodic', 'semantic'],
  constraints: {
    max_tokens: 4000,
    max_sources: 5
  }
});

result.data.context.contributions.forEach(contrib => {
  console.log(`${contrib.memory_label}: ${contrib.tokens} tokens`);
});
```

#### Example 3: Assemble with Rule Engine
```javascript
const result = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: 'Debug the authentication issue',
    task_type: 'debugging',
    priority: 'high'
  },
  rule_engine_ids: ['debugging-rules', 'priority-rules'],
  constraints: {
    max_tokens: 6000,
    timeout_ms: 3000
  }
});

console.log('Applied rules:', result.data.context.applied_rules);
```

#### Example 4: Assemble for LLM Prompt
```javascript
async function buildPromptForLLM(userMessage, context) {
  const result = await codebolt.contextAssembly.getContext({
    scope_variables: {
      input: userMessage,
      mode: 'assistant'
    },
    constraints: {
      max_tokens: 8000,
      max_sources: 10
    }
  });

  const contextText = result.data.context.contributions
    .map(c => `## ${c.memory_label}\n${c.content}`)
    .join('\n\n');

  return `Context:\n${contextText}\n\nUser: ${userMessage}\nAssistant:`;
}

const prompt = await buildPromptForLLM('Help me with X', contextData);
```

#### Example 5: Assemble with Additional Variables
```javascript
const result = await codebolt.contextAssembly.getContext({
  scope_variables: {
    input: 'Update the user profile feature',
    userId: 'user-123'
  },
  additional_variables: {
    currentProject: 'frontend-app',
    feature: 'user-profile',
    files: ['/src/profile.tsx', '/src/api/user.ts']
  },
  explicit_memory: ['procedural', 'semantic']
});
```

#### Example 6: Handle Warnings
```javascript
const result = await codebolt.contextAssembly.getContext({
  scope_variables: { input: 'test' },
  constraints: { max_tokens: 100 }
});

if (result.success) {
  if (result.data.context.warnings) {
    console.warn('Warnings:', result.data.context.warnings);
    // Handle warnings (e.g., truncated context)
  }

  const context = result.data.context;
  console.log(`Assembled ${context.total_tokens} tokens`);
}
```

### Common Use Cases
**LLM Context Building**: Assemble relevant context for LLM prompts.
**Decision Support**: Gather relevant information for decision making.
**Knowledge Retrieval**: Fetch related knowledge and experiences.
**Task Execution**: Get context needed for specific tasks.

### Notes
- Use `explicit_memory` to force specific memory types
- `scope_variables` provide context for rule evaluation
- `constraints` control token usage and performance
- Check `warnings` for potential issues
- Contributions are ordered by relevance
