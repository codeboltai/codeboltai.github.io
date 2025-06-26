---
name: inference
cbbaseinfo:
  description: |-
    Sends an inference request to the LLM and returns the model's response.
    The model is selected based on the provided llmrole parameter.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The input message or prompt to be sent to the LLM.
    - name: llmrole
      typeName: string
      description: The role of the LLM to determine which model to use. This parameter is optional.
  returns:
    signatureTypeName: Promise
    description: A promise that resolves with the LLM's response containing message, token usage, pricing, and completion details.
    typeArgs:
      - type: reference
        name: LLMResponse
data:
  name: inference
  category: llm
  link: inference.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example 

```javascript
import codebolt from "codebolt";

async function main() {
  // Basic inference request
  const response = await codebolt.llm.inference(
    "Hello! This is a test message. Please respond with a simple greeting."
  );
  console.log(response);

  // Inference with specific role
  const codeResponse = await codebolt.llm.inference(
    "Write a simple JavaScript function that adds two numbers.",
    "assistant"
  );
  console.log(codeResponse);

  // Technical explanation request
  const explanation = await codebolt.llm.inference(
    "Explain what REST API is in simple terms."
  );
  console.log(explanation);
}

main();
```

### Response Structure

The response contains comprehensive information about the LLM interaction:

```javascript
{
  message: "Hello! How can I assist you today?",
  type: "llmResponse",
  token: {
    prompt_tokens: 26,
    completion_tokens: 9,
    total_tokens: 35,
    prompt_tokens_details: { cached_tokens: 0, audio_tokens: 0 },
    completion_tokens_details: {
      reasoning_tokens: 0,
      audio_tokens: 0,
      accepted_prediction_tokens: 0,
      rejected_prediction_tokens: 0
    }
  },
  status: 200,
  model: "gpt-4o-2024-08-06",
  timestamp: "2025-06-25T09:26:58.584Z",
  requestId: "2025-06-25T09:26:58.550Z",
  messageId: "dxqxp047jm7vfo7oox5bei",
  agentInstanceId: "147a796c-8e29-4ec7-92c7-5760a5edca3e",
  agentId: "6dd799b5-43c2-4c55-ba49-cae6cbac2498",
  usage: {
    prompt_tokens: 26,
    completion_tokens: 9,
    total_tokens: 35,
    prompt_tokens_details: { cached_tokens: 0, audio_tokens: 0 },
    completion_tokens_details: {
      reasoning_tokens: 0,
      audio_tokens: 0,
      accepted_prediction_tokens: 0,
      rejected_prediction_tokens: 0
    }
  },
  completion: {
    id: "chatcmpl-BmGhAIneYl8qRX0gngCEAPGFIxg0r",
    object: "chat.completion",
    created: 1750843620,
    model: "gpt-4o-2024-08-06",
    choices: [/* completion choices */],
    usage: {/* usage details */},
    service_tier: "default",
    system_fingerprint: "fp_07871e2ad8"
  },
  pricing: {
    inputCost: 0.00013,
    outputCost: 0.00018,
    totalCost: 0.00031
  }
}
```

### Explanation

The `codebolt.llm.inference` function allows you to send an inference request to a Large Language Model (LLM) and retrieves the model's response. It accepts two parameters:

**message** (string): The input question or prompt you want to send to the LLM for inference.

**llmrole** (string, optional): Specifies the role or type of Large Language Model (LLM) you want to use for inference. The role determines which variant of the LLM is selected for processing the input message and generating the response.

The response includes:
- **message**: The actual response from the LLM
- **token**: Detailed token usage information including prompt and completion tokens
- **pricing**: Cost breakdown for the request
- **completion**: Full completion object with metadata
- **model**: The specific model used for the inference
- **timestamp**: When the request was processed
