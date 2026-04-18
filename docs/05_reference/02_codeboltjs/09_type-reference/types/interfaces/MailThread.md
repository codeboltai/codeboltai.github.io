---
title: MailThread
---

[**@codebolt/types**](../index.md)

***

# Interface: MailThread

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:18

Mail thread structure

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="createdat"></a> `createdAt?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:24 |
| <a id="id"></a> `id` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:19 |
| <a id="metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:26 |
| <a id="participants"></a> `participants` | `string`[] | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:21 |
| <a id="status"></a> `status?` | `"open"` \| `"closed"` \| `"archived"` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:23 |
| <a id="subject"></a> `subject` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:20 |
| <a id="type"></a> `type?` | `"agent-to-agent"` \| `"agent-to-user"` \| `"broadcast"` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:22 |
| <a id="updatedat"></a> `updatedAt?` | `string` | common/types/src/codeboltjstypes/libFunctionTypes/mail.ts:25 |
