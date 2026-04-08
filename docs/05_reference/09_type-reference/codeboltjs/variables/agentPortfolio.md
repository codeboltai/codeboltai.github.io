---
title: agentPortfolio
---

[**@codebolt/codeboltjs**](../index.md)

***

# Variable: agentPortfolio

```ts
const agentPortfolio: {
  addAppreciation: (toAgentId: string, message: string) => Promise<AddAppreciationResponse>;
  addKarma: (toAgentId: string, amount: number, reason?: string) => Promise<AddKarmaResponse>;
  addTalent: (name: string, description?: string) => Promise<AddTalentResponse>;
  addTestimonial: (toAgentId: string, content: string, projectId?: string) => Promise<AddTestimonialResponse>;
  deleteTestimonial: (testimonialId: string) => Promise<DeleteTestimonialResponse>;
  endorseTalent: (talentId: string) => Promise<EndorseTalentResponse>;
  getConversations: (agentId: string, limit?: number, offset?: number) => Promise<GetConversationsResponse>;
  getKarmaHistory: (agentId: string, limit?: number) => Promise<GetKarmaHistoryResponse>;
  getPortfolio: (agentId: string) => Promise<GetPortfolioResponse>;
  getPortfoliosByProject: (projectId: string) => Promise<GetPortfoliosByProjectResponse>;
  getRanking: (limit?: number, sortBy?: "karma" | "testimonials" | "endorsements") => Promise<GetRankingResponse>;
  getTalents: (agentId?: string) => Promise<GetTalentsResponse>;
  updateProfile: (agentId: string, profile: {
     avatarUrl?: string;
     bio?: string;
     displayName?: string;
     location?: string;
     specialties?: string[];
     website?: string;
  }) => Promise<UpdateProfileResponse>;
  updateTestimonial: (testimonialId: string, content: string) => Promise<UpdateTestimonialResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/agentPortfolio.ts:25

Agent Portfolio Module
Provides functionality for managing agent portfolios, karma, talents, testimonials, and appreciations

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addappreciation"></a> `addAppreciation()` | (`toAgentId`: `string`, `message`: `string`) => `Promise`\<[`AddAppreciationResponse`](../interfaces/AddAppreciationResponse)\> | Add an appreciation for an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:178 |
| <a id="addkarma"></a> `addKarma()` | (`toAgentId`: `string`, `amount`: `number`, `reason?`: `string`) => `Promise`\<[`AddKarmaResponse`](../interfaces/AddKarmaResponse)\> | Add karma to an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:134 |
| <a id="addtalent"></a> `addTalent()` | (`name`: `string`, `description?`: `string`) => `Promise`\<[`AddTalentResponse`](../interfaces/AddTalentResponse)\> | Add a talent skill | packages/codeboltjs/src/modules/agentPortfolio.ts:199 |
| <a id="addtestimonial"></a> `addTestimonial()` | (`toAgentId`: `string`, `content`: `string`, `projectId?`: `string`) => `Promise`\<[`AddTestimonialResponse`](../interfaces/AddTestimonialResponse)\> | Add a testimonial for an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:73 |
| <a id="deletetestimonial"></a> `deleteTestimonial()` | (`testimonialId`: `string`) => `Promise`\<[`DeleteTestimonialResponse`](../interfaces/DeleteTestimonialResponse)\> | Delete a testimonial | packages/codeboltjs/src/modules/agentPortfolio.ts:116 |
| <a id="endorsetalent"></a> `endorseTalent()` | (`talentId`: `string`) => `Promise`\<[`EndorseTalentResponse`](../interfaces/EndorseTalentResponse)\> | Endorse a talent skill | packages/codeboltjs/src/modules/agentPortfolio.ts:219 |
| <a id="getconversations"></a> `getConversations()` | (`agentId`: `string`, `limit?`: `number`, `offset?`: `number`) => `Promise`\<[`GetConversationsResponse`](../interfaces/GetConversationsResponse)\> | Get conversations involving an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:49 |
| <a id="getkarmahistory"></a> `getKarmaHistory()` | (`agentId`: `string`, `limit?`: `number`) => `Promise`\<[`GetKarmaHistoryResponse`](../interfaces/GetKarmaHistoryResponse)\> | Get the karma history of an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:157 |
| <a id="getportfolio"></a> `getPortfolio()` | (`agentId`: `string`) => `Promise`\<[`GetPortfolioResponse`](../interfaces/GetPortfolioResponse)\> | Get the portfolio of an agent | packages/codeboltjs/src/modules/agentPortfolio.ts:31 |
| <a id="getportfoliosbyproject"></a> `getPortfoliosByProject()` | (`projectId`: `string`) => `Promise`\<[`GetPortfoliosByProjectResponse`](../interfaces/GetPortfoliosByProjectResponse)\> | Get portfolios by project | packages/codeboltjs/src/modules/agentPortfolio.ts:272 |
| <a id="getranking"></a> `getRanking()` | (`limit?`: `number`, `sortBy?`: `"karma"` \| `"testimonials"` \| `"endorsements"`) => `Promise`\<[`GetRankingResponse`](../interfaces/GetRankingResponse)\> | Get agent ranking/leaderboard | packages/codeboltjs/src/modules/agentPortfolio.ts:252 |
| <a id="gettalents"></a> `getTalents()` | (`agentId?`: `string`) => `Promise`\<[`GetTalentsResponse`](../interfaces/GetTalentsResponse)\> | Get talents for an agent or all talents | packages/codeboltjs/src/modules/agentPortfolio.ts:235 |
| <a id="updateprofile"></a> `updateProfile()` | (`agentId`: `string`, `profile`: \{ `avatarUrl?`: `string`; `bio?`: `string`; `displayName?`: `string`; `location?`: `string`; `specialties?`: `string`[]; `website?`: `string`; \}) => `Promise`\<[`UpdateProfileResponse`](../interfaces/UpdateProfileResponse)\> | Update agent profile | packages/codeboltjs/src/modules/agentPortfolio.ts:289 |
| <a id="updatetestimonial"></a> `updateTestimonial()` | (`testimonialId`: `string`, `content`: `string`) => `Promise`\<[`UpdateTestimonialResponse`](../interfaces/UpdateTestimonialResponse)\> | Update an existing testimonial | packages/codeboltjs/src/modules/agentPortfolio.ts:96 |
