---
title: EventFilter
---

[**@codebolt/client-sdk**](../index)

***

# Interface: EventFilter

Defined in: CodeBolt/packages/clientsdk/src/core/event-filter.ts:1

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="and"></a> `and?` | `EventFilter`[] | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:6](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L6) |
| <a id="event"></a> `event?` | `string` | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:3](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L3) |
| <a id="filter"></a> `filter?` | `EventFilter` | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:4](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L4) |
| <a id="matcher"></a> `matcher?` | (`event`: \{ `data?`: `unknown`; `event`: `string`; `socket`: `string`; \}) => `boolean` | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:7](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L7) |
| <a id="or"></a> `or?` | `EventFilter`[] | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:5](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L5) |
| <a id="socket"></a> `socket?` | `string` | [CodeBolt/packages/clientsdk/src/core/event-filter.ts:2](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/core/event-filter.ts#L2) |
