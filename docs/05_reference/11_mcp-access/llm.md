---
title: LLM MCP
sidebar_label: codebolt.llm
sidebar_position: 24
---

# codebolt.llm

Tools for interacting with Large Language Models (LLMs) and managing model configurations.

## Available Tools

- `llm_inference` - Sends an inference request to the LLM using OpenAI message format with tools support
- `llm_get_config` - Gets the model configuration for a specific model or the default application model

## Tool Parameters

### `llm_inference`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messages | array | Yes | Array of conversation messages. Each message has "role" (user/assistant/system) and "content" |
| tools | array | No | Array of tools available for the model to use |
| tool_choice | string | No | How the model should use tools (e.g., "auto", "none", or specific tool name) |
| max_tokens | number | No | Maximum number of tokens to generate |
| temperature | number | No | Temperature for response generation (0-2). Higher values make output more random |
| stream | boolean | No | Whether to stream the response |
| llmrole | string | No | Role of the LLM to determine which model to use |

---

### `llm_get_config`
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| modelId | string | No | Model identifier. If not provided, returns default application model configuration |

## Sample Usage

```javascript
// Send an inference request to the LLM
const inferenceResult = await codebolt.tools.executeTool(
  "codebolt.llm",
  "llm_inference",
  {
    messages: [
      { role: "system", content: "You are a helpful coding assistant." },
      { role: "user", content: "Explain how async/await works in JavaScript." }
    ],
    max_tokens: 1000,
    temperature: 0.7
  }
);

// Inference with tools support
const toolInferenceResult = await codebolt.tools.executeTool(
  "codebolt.llm",
  "llm_inference",
  {
    messages: [
      { role: "user", content: "What files are in the current directory?" }
    ],
    tools: [
      {
        type: "function",
        function: {
          name: "list_files",
          description: "Lists files in a directory",
          parameters: {
            type: "object",
            properties: {
              path: { type: "string", description: "Directory path" }
            },
            required: ["path"]
          }
        }
      }
    ],
    tool_choice: "auto"
  }
);

// Inference with streaming enabled
const streamResult = await codebolt.tools.executeTool(
  "codebolt.llm",
  "llm_inference",
  {
    messages: [
      { role: "user", content: "Write a short story about a robot." }
    ],
    stream: true,
    llmrole: "creative"
  }
);

// Get default model configuration
const defaultConfigResult = await codebolt.tools.executeTool(
  "codebolt.llm",
  "llm_get_config",
  {}
);

// Get configuration for a specific model
const specificConfigResult = await codebolt.tools.executeTool(
  "codebolt.llm",
  "llm_get_config",
  { modelId: "gpt-4" }
);
```

:::info
The LLM tools provide direct access to language model inference capabilities with full support for the OpenAI message format, including multi-turn conversations, tool/function calling, and configurable generation parameters. The `llmrole` parameter allows selecting different model configurations based on the use case (e.g., coding, creative writing, analysis).
:::
