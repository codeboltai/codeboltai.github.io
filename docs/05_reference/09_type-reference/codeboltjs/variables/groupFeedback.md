---
title: groupFeedback
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: groupFeedback

```ts
const groupFeedback: {
  create: (params: ICreateFeedbackParams) => Promise<ICreateFeedbackResponse>;
  get: (params: IGetFeedbackParams) => Promise<IGetFeedbackResponse>;
  list: (params?: IListFeedbacksParams) => Promise<IListFeedbacksResponse>;
  reply: (params: IReplyParams) => Promise<IReplyResponse>;
  respond: (params: IFeedbackRespondParams) => Promise<IFeedbackRespondResponse>;
  updateStatus: (params: IUpdateStatusParams) => Promise<IUpdateStatusResponse>;
  updateSummary: (params: IUpdateSummaryParams) => Promise<IUpdateSummaryResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/groupFeedback.ts:21

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`params`: [`ICreateFeedbackParams`](../interfaces/ICreateFeedbackParams)) => `Promise`\<[`ICreateFeedbackResponse`](../interfaces/ICreateFeedbackResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:22](packages/codeboltjs/src/modules/groupFeedback.ts#L22) |
| <a id="get"></a> `get()` | (`params`: [`IGetFeedbackParams`](../interfaces/IGetFeedbackParams)) => `Promise`\<[`IGetFeedbackResponse`](../interfaces/IGetFeedbackResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:29](packages/codeboltjs/src/modules/groupFeedback.ts#L29) |
| <a id="list"></a> `list()` | (`params?`: [`IListFeedbacksParams`](../interfaces/IListFeedbacksParams)) => `Promise`\<[`IListFeedbacksResponse`](../interfaces/IListFeedbacksResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:36](packages/codeboltjs/src/modules/groupFeedback.ts#L36) |
| <a id="reply"></a> `reply()` | (`params`: [`IReplyParams`](../interfaces/IReplyParams)) => `Promise`\<[`IReplyResponse`](../interfaces/IReplyResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:50](packages/codeboltjs/src/modules/groupFeedback.ts#L50) |
| <a id="respond"></a> `respond()` | (`params`: [`IFeedbackRespondParams`](../interfaces/IFeedbackRespondParams)) => `Promise`\<[`IFeedbackRespondResponse`](../interfaces/IFeedbackRespondResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:43](packages/codeboltjs/src/modules/groupFeedback.ts#L43) |
| <a id="updatestatus"></a> `updateStatus()` | (`params`: [`IUpdateStatusParams`](../interfaces/IUpdateStatusParams)) => `Promise`\<[`IUpdateStatusResponse`](../interfaces/IUpdateStatusResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:64](packages/codeboltjs/src/modules/groupFeedback.ts#L64) |
| <a id="updatesummary"></a> `updateSummary()` | (`params`: [`IUpdateSummaryParams`](../interfaces/IUpdateSummaryParams)) => `Promise`\<[`IUpdateSummaryResponse`](../interfaces/IUpdateSummaryResponse)\> | [packages/codeboltjs/src/modules/groupFeedback.ts:57](packages/codeboltjs/src/modules/groupFeedback.ts#L57) |
