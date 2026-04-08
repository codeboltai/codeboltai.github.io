---
title: SystemNotificationPayload
---

[**@codebolt/codeboltjs**](../index)

***

# Interface: SystemNotificationPayload

Defined in: common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:81

Payload for system notifications

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="actionrequired"></a> `actionRequired?` | `boolean` | Whether the agent needs to take action | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:90 |
| <a id="actiontype"></a> `actionType?` | `string` | Action to take if actionRequired is true | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:92 |
| <a id="message"></a> `message` | `string` | Notification message | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:88 |
| <a id="notificationtype"></a> `notificationType` | `"info"` \| `"error"` \| `"warning"` \| `"success"` | Type of notification | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:84 |
| <a id="title"></a> `title` | `string` | Notification title | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:86 |
| <a id="type"></a> `type` | `"systemNotification"` | - | common/types/dist/codeboltjstypes/libFunctionTypes/eventQueue.d.ts:82 |
