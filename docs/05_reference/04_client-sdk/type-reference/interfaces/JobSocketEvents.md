---
title: JobSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: JobSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:63

Job socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="jobassigned"></a> `job:assigned` | (`data`: \{ `assignee`: `string`; `jobId`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:67](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L67) |
| <a id="jobcreated"></a> `job:created` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:64](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L64) |
| <a id="jobstatus-changed"></a> `job:status-changed` | (`data`: \{ `jobId`: `string`; `status`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:66](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L66) |
| <a id="jobupdated"></a> `job:updated` | (`data`: `unknown`) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:65](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L65) |
