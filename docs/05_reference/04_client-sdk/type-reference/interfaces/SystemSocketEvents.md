---
title: SystemSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: SystemSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:112

System socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="systemerror"></a> `system:error` | (`data`: \{ `code`: `string`; `message`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:114](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L114) |
| <a id="systemhealth"></a> `system:health` | (`data`: \{ `status`: `string`; `uptime`: `number`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:115](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L115) |
| <a id="systemnotification"></a> `system:notification` | (`data`: \{ `data?`: `unknown`; `message`: `string`; `type`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:113](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L113) |
