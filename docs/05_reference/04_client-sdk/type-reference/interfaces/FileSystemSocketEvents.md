---
title: FileSystemSocketEvents
---

[**@codebolt/client-sdk**](../index)

***

# Interface: FileSystemSocketEvents

Defined in: CodeBolt/packages/clientsdk/src/types/socket-events.ts:34

File system socket events

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="fsfile-changed"></a> `fs:file-changed` | (`data`: \{ `path`: `string`; `type`: `"created"` \| `"modified"` \| `"deleted"`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:35](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L35) |
| <a id="fsfile-read"></a> `fs:file-read` | (`data`: \{ `content`: `string`; `path`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:36](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L36) |
| <a id="fsfile-written"></a> `fs:file-written` | (`data`: \{ `path`: `string`; \}) => `void` | [CodeBolt/packages/clientsdk/src/types/socket-events.ts:37](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/socket-events.ts#L37) |
