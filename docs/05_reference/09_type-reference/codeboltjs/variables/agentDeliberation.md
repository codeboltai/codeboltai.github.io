---
title: agentDeliberation
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: agentDeliberation

```ts
const agentDeliberation: {
  create: (params: ICreateDeliberationParams) => Promise<ICreateDeliberationResponse>;
  get: (params: IGetDeliberationParams) => Promise<IGetDeliberationResponse>;
  getWinner: (params: IGetWinnerParams) => Promise<IGetWinnerResponse>;
  list: (params?: IListDeliberationsParams) => Promise<IListDeliberationsResponse>;
  respond: (params: IDeliberationRespondParams) => Promise<IDeliberationRespondResponse>;
  summary: (params: ISummaryParams) => Promise<ISummaryResponse>;
  update: (params: IUpdateDeliberationParams) => Promise<IUpdateDeliberationResponse>;
  vote: (params: IVoteParams) => Promise<IVoteResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/agentDeliberation.ts:23

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| <a id="create"></a> `create()` | (`params`: [`ICreateDeliberationParams`](../interfaces/ICreateDeliberationParams)) => `Promise`\<[`ICreateDeliberationResponse`](../interfaces/ICreateDeliberationResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:24](packages/codeboltjs/src/modules/agentDeliberation.ts#L24) |
| <a id="get"></a> `get()` | (`params`: [`IGetDeliberationParams`](../interfaces/IGetDeliberationParams)) => `Promise`\<[`IGetDeliberationResponse`](../interfaces/IGetDeliberationResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:31](packages/codeboltjs/src/modules/agentDeliberation.ts#L31) |
| <a id="getwinner"></a> `getWinner()` | (`params`: [`IGetWinnerParams`](../interfaces/IGetWinnerParams)) => `Promise`\<[`IGetWinnerResponse`](../interfaces/IGetWinnerResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:66](packages/codeboltjs/src/modules/agentDeliberation.ts#L66) |
| <a id="list"></a> `list()` | (`params?`: [`IListDeliberationsParams`](../interfaces/IListDeliberationsParams)) => `Promise`\<[`IListDeliberationsResponse`](../interfaces/IListDeliberationsResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:38](packages/codeboltjs/src/modules/agentDeliberation.ts#L38) |
| <a id="respond"></a> `respond()` | (`params`: [`IDeliberationRespondParams`](../interfaces/IDeliberationRespondParams)) => `Promise`\<[`IDeliberationRespondResponse`](../interfaces/IDeliberationRespondResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:52](packages/codeboltjs/src/modules/agentDeliberation.ts#L52) |
| <a id="summary"></a> `summary()` | (`params`: `ISummaryParams`) => `Promise`\<`ISummaryResponse`\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:73](packages/codeboltjs/src/modules/agentDeliberation.ts#L73) |
| <a id="update"></a> `update()` | (`params`: [`IUpdateDeliberationParams`](../interfaces/IUpdateDeliberationParams)) => `Promise`\<[`IUpdateDeliberationResponse`](../interfaces/IUpdateDeliberationResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:45](packages/codeboltjs/src/modules/agentDeliberation.ts#L45) |
| <a id="vote"></a> `vote()` | (`params`: [`IVoteParams`](../interfaces/IVoteParams)) => `Promise`\<[`IVoteResponse`](../interfaces/IVoteResponse)\> | [packages/codeboltjs/src/modules/agentDeliberation.ts:59](packages/codeboltjs/src/modules/agentDeliberation.ts#L59) |
