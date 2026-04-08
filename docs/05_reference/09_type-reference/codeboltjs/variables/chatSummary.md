---
title: chatSummary
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: chatSummary

```ts
const chatSummary: {
  summarize: (messages: {
     content: string;
     role: string;
  }[], depth: number) => Promise<GetSummarizeResponse>;
  summarizeAll: () => Promise<GetSummarizeAllResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/history.ts:26

Object with methods for summarizing chat history.
Provides functionality to create summaries of conversation history.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="summarize"></a> `summarize()` | (`messages`: \{ `content`: `string`; `role`: `string`; \}[], `depth`: `number`) => `Promise`\<`GetSummarizeResponse`\> | Summarizes a specific part of the chat history. | [packages/codeboltjs/src/modules/history.ts:49](packages/codeboltjs/src/modules/history.ts#L49) |
| <a id="summarizeall"></a> `summarizeAll()` | () => `Promise`\<`GetSummarizeAllResponse`\> | Summarizes the entire chat history. | [packages/codeboltjs/src/modules/history.ts:32](packages/codeboltjs/src/modules/history.ts#L32) |
