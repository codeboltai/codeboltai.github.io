---
title: BrowserSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: BrowserSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:48

Browser socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="browseraction-result"></a> `browser:action-result` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:49](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L49) |
| <a id="browsernavigated"></a> `browser:navigated` | (`data`: \{ `title`: `string`; `url`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:51](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L51) |
| <a id="browserscreenshot"></a> `browser:screenshot` | (`data`: \{ `image`: `string`; `url`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:50](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L50) |
