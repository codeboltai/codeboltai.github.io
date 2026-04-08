---
title: SystemNotificationPayload
---

[**@codebolt/types**](../index)

***

# Interface: SystemNotificationPayload

Defined in: common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:95

Payload for system notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="actionrequired"></a> `actionRequired?` | `boolean` | Whether the agent needs to take action | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:104](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L104) |
| <a id="actiontype"></a> `actionType?` | `string` | Action to take if actionRequired is true | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:106](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L106) |
| <a id="message"></a> `message` | `string` | Notification message | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:102](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L102) |
| <a id="notificationtype"></a> `notificationType` | `"success"` \| `"error"` \| `"info"` \| `"warning"` | Type of notification | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:98](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L98) |
| <a id="title"></a> `title` | `string` | Notification title | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:100](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L100) |
| <a id="type"></a> `type` | `"systemNotification"` | - | [common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts:96](common/types/src/codeboltjstypes/libFunctionTypes/eventQueue.ts#L96) |
