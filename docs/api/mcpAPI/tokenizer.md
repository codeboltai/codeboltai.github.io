---
title: Tokenizer MCP
sidebar_label: codebolt.tokenizer
sidebar_position: 17
---

# codebolt.tokenizer

Tokenizer operations for encoding and decoding text.

## Available Tools

- `tokenizer_encode` - Encode text into tokens
- `tokenizer_decode` - Decode tokens into text

## Sample Usage

```javascript
// Encode text
const encodeResult = await codebolt.tools.executeTool(
  "codebolt.tokenizer",
  "tokenizer_encode",
  { text: "Hello MCP" }
);

// Decode tokens
const decodeResult = await codebolt.tools.executeTool(
  "codebolt.tokenizer",
  "tokenizer_decode",
  { tokens: [1, 2, 3] }
);
```

:::info
This functionality provides text tokenization through the MCP interface.
::: 