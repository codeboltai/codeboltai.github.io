---
title: Tokenizer MCP
sidebar_label: codebolt.tokenizer
sidebar_position: 15
---

# codebolt.tokenizer

Text tokenization utilities for encoding and decoding text into tokens.

## Available Tools

- `tokenizer_encode` - Encode text into tokens
- `tokenizer_decode` - Decode tokens back to text

## Sample Usage

```javascript
// Encode text into tokens
const encodeResult = await codeboltMCP.executeTool(
  "codebolt.tokenizer",
  "tokenizer_encode",
  { 
    text: "Hello, world! This is a sample text.",
    model: "gpt-4"
  }
);

// Decode tokens back to text
const decodeResult = await codeboltMCP.executeTool(
  "codebolt.tokenizer",
  "tokenizer_decode",
  { 
    tokens: [15496, 11, 1917, 0, 1212, 374, 264, 6205, 1495, 13],
    model: "gpt-4"
  }
);

// Encode with specific options
const advancedEncodeResult = await codeboltMCP.executeTool(
  "codebolt.tokenizer",
  "tokenizer_encode",
  { 
    text: "function calculateSum(a, b) { return a + b; }",
    model: "gpt-4",
    options: {
      addSpecialTokens: true,
      returnAttentionMask: true
    }
  }
);
```

:::info
This functionality is similar to the [tokenizer API](/docs/api/apiaccess/tokenizer) and provides text tokenization through MCP interface.
::: 