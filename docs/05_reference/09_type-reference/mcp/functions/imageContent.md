---
title: imageContent
---

[**@codebolt/mcp**](../index)

***

# Function: imageContent()

```ts
function imageContent(input: 
  | {
  url: string;
}
  | {
  path: string;
}
  | {
  buffer: Buffer;
}): Promise<ImageContent>;
```

Defined in: packages/mcp/src/mcpServer.ts:65

Generates an image content object from a URL, file path, or buffer.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `input` | \| \{ `url`: `string`; \} \| \{ `path`: `string`; \} \| \{ `buffer`: `Buffer`; \} | The input source for the image (URL, file path, or buffer) |

## Returns

`Promise`\<`ImageContent`\>

Promise with the image content object
