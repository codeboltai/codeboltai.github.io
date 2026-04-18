---
title: executionGateway
---

[**@codebolt/plugin-sdk**](../index)

***

# Variable: executionGateway

```ts
const executionGateway: {
  claim: () => Promise<ExecutionGatewayClaimResponse>;
  offNotification: (callback: (notification: ExecutionNotification) => void) => void;
  offRequest: (callback: (request: ExecutionRequest) => void) => void;
  onNotification: (callback: (notification: ExecutionNotification) => void) => void;
  onRequest: (callback: (request: ExecutionRequest) => void) => void;
  relinquish: () => Promise<ExecutionGatewayResponse>;
  sendReply: (requestId: string, result: any, success: boolean) => void;
  subscribe: () => Promise<ExecutionGatewayResponse>;
  unsubscribe: () => Promise<ExecutionGatewayResponse>;
};
```

Defined in: CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:116

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="claim"></a> `claim()` | () => `Promise`\<[`ExecutionGatewayClaimResponse`](../interfaces/ExecutionGatewayClaimResponse)\> | Claim exclusive handling of execution requests. Only one plugin can claim at a time. Returns an error if already claimed. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:121](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L121) |
| <a id="offnotification"></a> `offNotification()` | (`callback`: (`notification`: [`ExecutionNotification`](../interfaces/ExecutionNotification)) => `void`) => `void` | Remove a previously registered notification callback. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:214](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L214) |
| <a id="offrequest"></a> `offRequest()` | (`callback`: (`request`: [`ExecutionRequest`](../interfaces/ExecutionRequest)) => `void`) => `void` | Remove a previously registered request callback. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:155](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L155) |
| <a id="onnotification"></a> `onNotification()` | (`callback`: (`notification`: [`ExecutionNotification`](../interfaces/ExecutionNotification)) => `void`) => `void` | Register a callback for execution notifications. These are broadcast after any locally-executed agent action. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:206](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L206) |
| <a id="onrequest"></a> `onRequest()` | (`callback`: (`request`: [`ExecutionRequest`](../interfaces/ExecutionRequest)) => `void`) => `void` | Register a callback for incoming execution requests. These are proxied agent messages that the claiming plugin must handle. After processing, call sendReply() with the requestId and result. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:147](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L147) |
| <a id="relinquish"></a> `relinquish()` | () => `Promise`\<[`ExecutionGatewayResponse`](../interfaces/ExecutionGatewayResponse)\> | Release the claim on the execution gateway. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:132](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L132) |
| <a id="sendreply"></a> `sendReply()` | (`requestId`: `string`, `result`: `any`, `success`: `boolean`) => `void` | Send a reply for a specific execution request. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:167](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L167) |
| <a id="subscribe"></a> `subscribe()` | () => `Promise`\<[`ExecutionGatewayResponse`](../interfaces/ExecutionGatewayResponse)\> | Subscribe to execution notifications. Notifications are broadcast whenever the server handles a message locally. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:181](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L181) |
| <a id="unsubscribe"></a> `unsubscribe()` | () => `Promise`\<[`ExecutionGatewayResponse`](../interfaces/ExecutionGatewayResponse)\> | Unsubscribe from execution notifications. | [CodeBolt/packages/pluginSdk/src/modules/executionGateway.ts:192](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/pluginSdk/src/modules/executionGateway.ts#L192) |
