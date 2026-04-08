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

## Tool Parameters

### `tokenizer_encode`

Encodes text into a sequence of tokens. Useful for understanding token counts and text representation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| text | string | Yes | The text to encode into tokens |

### `tokenizer_decode`

Decodes a sequence of tokens back into text.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| tokens | array | Yes | Array of token IDs (numbers) to decode into text |

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