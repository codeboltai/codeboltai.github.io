---
title: TerminalSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: TerminalSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:27

Terminal socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="terminalexit"></a> `terminal:exit` | (`data`: \{ `code`: `number`; `terminalId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:29](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L29) |
| <a id="terminalinput"></a> `terminal:input` | (`data`: \{ `input`: `string`; `terminalId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:30](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L30) |
| <a id="terminaloutput"></a> `terminal:output` | (`data`: \{ `output`: `string`; `terminalId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:28](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L28) |
