---
title: ContextMemory
---

[**@codebolt/client-sdk**](../index)

***

# Interface: ContextMemory

Defined in: CodeBolt/packages/clientsdk/src/types/memory.ts:25

Context memory thread

## Extends

- [`MemoryThread`](MemoryThread)

## Properties

| Property | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="archived"></a> `archived?` | `boolean` | - | [`MemoryThread`](MemoryThread).[`archived`](MemoryThread.md#archived) | [CodeBolt/packages/clientsdk/src/types/memory.ts:9](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L9) |
| <a id="createdat"></a> `createdAt?` | `string` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:30](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L30) |
| <a id="id"></a> `id` | `string` | - | [`MemoryThread`](MemoryThread).[`id`](MemoryThread.md#id) | [CodeBolt/packages/clientsdk/src/types/memory.ts:6](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L6) |
| <a id="messages"></a> `messages` | `unknown`[] | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:29](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L29) |
| <a id="metadata"></a> `metadata?` | \{ \[`key`: `string`\]: `unknown`; `messageCount?`: `number`; `savedBy?`: `string`; \} | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:32](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L32) |
| `metadata.messageCount?` | `number` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:33](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L33) |
| `metadata.savedBy?` | `string` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:34](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L34) |
| <a id="sourcethreadid"></a> `sourceThreadId?` | `string` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:27](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L27) |
| <a id="summary"></a> `summary?` | `string` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:28](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L28) |
| <a id="title"></a> `title?` | `string` | - | [`MemoryThread`](MemoryThread).[`title`](MemoryThread.md#title) | [CodeBolt/packages/clientsdk/src/types/memory.ts:8](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L8) |
| <a id="type"></a> `type` | `"context"` | [`MemoryThread`](MemoryThread).[`type`](MemoryThread.md#type) | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:26](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L26) |
| <a id="updatedat"></a> `updatedAt?` | `string` | - | - | [CodeBolt/packages/clientsdk/src/types/memory.ts:31](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/memory.ts#L31) |
