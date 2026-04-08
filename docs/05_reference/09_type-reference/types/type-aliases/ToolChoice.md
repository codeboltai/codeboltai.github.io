---
title: ToolChoice
---

[**@codebolt/types**](../index)

***

# Type Alias: ToolChoice

```ts
type ToolChoice = 
  | "auto"
  | "none"
  | "required"
  | {
  function: {
     name: string;
  };
  type: "function";
};
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/llm.ts:77

Tool choice options for LLM inference
