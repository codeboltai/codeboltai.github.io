---
title: GitSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: GitSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:41

Git socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="gitbranch-changed"></a> `git:branch-changed` | (`data`: \{ `branch`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:44](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L44) |
| <a id="gitcommit"></a> `git:commit` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:43](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L43) |
| <a id="gitstatus-changed"></a> `git:status-changed` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:42](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L42) |
