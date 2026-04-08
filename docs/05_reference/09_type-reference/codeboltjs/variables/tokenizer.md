---
title: tokenizer
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: tokenizer

```ts
const tokenizer: {
  addToken: (key: string) => Promise<AddTokenResponse>;
  getToken: (key: string) => Promise<GetTokenResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/tokenizer.ts:7

Tokenizer module for handling token-related operations.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addtoken"></a> `addToken()` | (`key`: `string`) => `Promise`\<`AddTokenResponse`\> | Adds a token to the system via WebSocket. | [packages/codeboltjs/src/modules/tokenizer.ts:14](packages/codeboltjs/src/modules/tokenizer.ts#L14) |
| <a id="gettoken"></a> `getToken()` | (`key`: `string`) => `Promise`\<`GetTokenResponse`\> | Retrieves a token from the system via WebSocket. | [packages/codeboltjs/src/modules/tokenizer.ts:32](packages/codeboltjs/src/modules/tokenizer.ts#L32) |
