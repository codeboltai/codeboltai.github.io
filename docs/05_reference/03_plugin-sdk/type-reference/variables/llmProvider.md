---
title: llmProvider
---

[**@codebolt/plugin-sdk**](../index)

***

# Variable: llmProvider

```ts
const llmProvider: {
  onCompletionRequest: (callback: (req: LlmCompletionRequest) => void) => void;
  onLoginRequest: (callback: (req: LlmLoginRequest) => void) => void;
  onStreamRequest: (callback: (req: LlmStreamRequest) => void) => void;
  register: (manifest: LlmProviderManifest) => Promise<LlmProviderRegisterResponse>;
  sendChunk: (requestId: string, chunk: any) => void;
  sendError: (requestId: string, error: string) => void;
  sendReply: (requestId: string, response: any, success: boolean) => void;
  unregister: (providerId: string) => Promise<LlmProviderResponse>;
};
```

Defined in: CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:166

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="oncompletionrequest"></a> `onCompletionRequest()` | (`callback`: (`req`: [`LlmCompletionRequest`](../interfaces/LlmCompletionRequest)) => `void`) => `void` | Subscribe to incoming non-streaming completion requests. Reply with sendReply(requestId, response) or sendError(requestId, error). | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:195](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L195) |
| <a id="onloginrequest"></a> `onLoginRequest()` | (`callback`: (`req`: `LlmLoginRequest`) => `void`) => `void` | Subscribe to incoming login requests (triggered by the UI login button). The plugin should run its authentication flow (e.g. OAuth) and then call sendReply(requestId, \{ authenticated: true \}) or sendError(). | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:215](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L215) |
| <a id="onstreamrequest"></a> `onStreamRequest()` | (`callback`: (`req`: [`LlmStreamRequest`](../interfaces/LlmStreamRequest)) => `void`) => `void` | Subscribe to incoming streaming completion requests. Stream tokens with sendChunk(requestId, chunk), then finalize with sendReply(requestId, finalResponse) or sendError(requestId, error). | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:205](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L205) |
| <a id="register"></a> `register()` | (`manifest`: [`LlmProviderManifest`](../interfaces/LlmProviderManifest)) => `Promise`\<[`LlmProviderRegisterResponse`](../interfaces/LlmProviderRegisterResponse)\> | Register this plugin as a custom LLM provider on the server. After registration, the provider appears in the provider list and can be selected by users like any built-in provider. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:172](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L172) |
| <a id="sendchunk"></a> `sendChunk()` | (`requestId`: `string`, `chunk`: `any`) => `void` | Send a streaming chunk for an in-flight stream request. The chunk shape should match multillm StreamChunk (id, model, choices: [\{delta: \{content, ...\}\}]). | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:225](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L225) |
| <a id="senderror"></a> `sendError()` | (`requestId`: `string`, `error`: `string`) => `void` | Send an error for a completion or stream request. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:252](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L252) |
| <a id="sendreply"></a> `sendReply()` | (`requestId`: `string`, `response`: `any`, `success`: `boolean`) => `void` | Send the final reply for a completion or stream request. For non-streaming: this is the only message you send. For streaming: send after all chunks have been emitted. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:239](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L239) |
| <a id="unregister"></a> `unregister()` | (`providerId`: `string`) => `Promise`\<[`LlmProviderResponse`](../interfaces/LlmProviderResponse)\> | Unregister this plugin's provider. | [CodeBolt/packages/pluginSdk/src/modules/llmProvider.ts:183](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/llmProvider.ts#L183) |
