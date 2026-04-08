---
title: ToolExecutionTuple
---

[**@codebolt/types**](../index)

***

# Type Alias: ToolExecutionTuple\<TSuccess, TError\>

```ts
type ToolExecutionTuple<TSuccess, TError> = [false, TSuccess] | [true, TError];
```

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mcp.ts:59

Standard tuple format for tool execution responses used over MCP:
- [false, result] => success
- [true, error]   => error

TSuccess: shape of the successful result payload
TError:   shape of the error payload (usually string)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TSuccess` | `unknown` |
| `TError` | `string` |
