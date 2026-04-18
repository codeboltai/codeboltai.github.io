---
title: GitStatus
---

[**@codebolt/client-sdk**](../index)

***

# Interface: GitStatus

Defined in: CodeBolt/packages/clientsdk/src/types/git.ts:5

Git status

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ahead"></a> `ahead` | `number` | [CodeBolt/packages/clientsdk/src/types/git.ts:7](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L7) |
| <a id="behind"></a> `behind` | `number` | [CodeBolt/packages/clientsdk/src/types/git.ts:8](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L8) |
| <a id="branch"></a> `branch` | `string` | [CodeBolt/packages/clientsdk/src/types/git.ts:6](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L6) |
| <a id="conflicted"></a> `conflicted` | `string`[] | [CodeBolt/packages/clientsdk/src/types/git.ts:12](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L12) |
| <a id="isclean"></a> `isClean` | `boolean` | [CodeBolt/packages/clientsdk/src/types/git.ts:13](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L13) |
| <a id="staged"></a> `staged` | [`GitFileChange`](GitFileChange)[] | [CodeBolt/packages/clientsdk/src/types/git.ts:9](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L9) |
| <a id="unstaged"></a> `unstaged` | [`GitFileChange`](GitFileChange)[] | [CodeBolt/packages/clientsdk/src/types/git.ts:10](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L10) |
| <a id="untracked"></a> `untracked` | `string`[] | [CodeBolt/packages/clientsdk/src/types/git.ts:11](https://github.com/ArrowAI/CodeBolt/blob/3ec2a023ac4847fda21629eb478288fca7dc47a5/packages/clientsdk/src/types/git.ts#L11) |
