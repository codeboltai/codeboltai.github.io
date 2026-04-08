---
title: requirementPlan
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: requirementPlan

```ts
const requirementPlan: {
  addSection: (filePath: string, section: Omit<RequirementPlanSection, "id" | "order">, afterIndex?: number) => Promise<RequirementPlanSectionResponse>;
  create: (fileName: string) => Promise<RequirementPlanCreateResponse>;
  get: (filePath: string) => Promise<RequirementPlanGetResponse>;
  list: () => Promise<RequirementPlanListResponse>;
  removeSection: (filePath: string, sectionId: string) => Promise<RequirementPlanSectionResponse>;
  reorderSections: (filePath: string, sectionIds: string[]) => Promise<RequirementPlanSectionResponse>;
  review: (filePath: string) => Promise<RequirementPlanReviewResponse>;
  update: (filePath: string, content: 
     | string
    | RequirementPlanDocument) => Promise<RequirementPlanUpdateResponse>;
  updateSection: (filePath: string, sectionId: string, updates: Partial<RequirementPlanSection>) => Promise<RequirementPlanSectionResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/requirementPlan.ts:114

RequirementPlan Module
Provides functionality for managing Requirement Plan documents

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="addsection"></a> `addSection()` | (`filePath`: `string`, `section`: `Omit`\<[`RequirementPlanSection`](../interfaces/RequirementPlanSection), `"id"` \| `"order"`\>, `afterIndex?`: `number`) => `Promise`\<[`RequirementPlanSectionResponse`](../interfaces/RequirementPlanSectionResponse)\> | Add a section to a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:195](packages/codeboltjs/src/modules/requirementPlan.ts#L195) |
| <a id="create"></a> `create()` | (`fileName`: `string`) => `Promise`\<[`RequirementPlanCreateResponse`](../interfaces/RequirementPlanCreateResponse)\> | Create a new requirement plan file | [packages/codeboltjs/src/modules/requirementPlan.ts:120](packages/codeboltjs/src/modules/requirementPlan.ts#L120) |
| <a id="get"></a> `get()` | (`filePath`: `string`) => `Promise`\<[`RequirementPlanGetResponse`](../interfaces/RequirementPlanGetResponse)\> | Get a requirement plan by file path | [packages/codeboltjs/src/modules/requirementPlan.ts:138](packages/codeboltjs/src/modules/requirementPlan.ts#L138) |
| <a id="list"></a> `list()` | () => `Promise`\<[`RequirementPlanListResponse`](../interfaces/RequirementPlanListResponse)\> | List all requirement plans in the project | [packages/codeboltjs/src/modules/requirementPlan.ts:175](packages/codeboltjs/src/modules/requirementPlan.ts#L175) |
| <a id="removesection"></a> `removeSection()` | (`filePath`: `string`, `sectionId`: `string`) => `Promise`\<[`RequirementPlanSectionResponse`](../interfaces/RequirementPlanSectionResponse)\> | Remove a section from a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:242](packages/codeboltjs/src/modules/requirementPlan.ts#L242) |
| <a id="reordersections"></a> `reorderSections()` | (`filePath`: `string`, `sectionIds`: `string`[]) => `Promise`\<[`RequirementPlanSectionResponse`](../interfaces/RequirementPlanSectionResponse)\> | Reorder sections in a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:261](packages/codeboltjs/src/modules/requirementPlan.ts#L261) |
| <a id="review"></a> `review()` | (`filePath`: `string`) => `Promise`\<`RequirementPlanReviewResponse`\> | Request a review for a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:279](packages/codeboltjs/src/modules/requirementPlan.ts#L279) |
| <a id="update"></a> `update()` | (`filePath`: `string`, `content`: \| `string` \| [`RequirementPlanDocument`](../interfaces/RequirementPlanDocument)) => `Promise`\<[`RequirementPlanUpdateResponse`](../interfaces/RequirementPlanUpdateResponse)\> | Update a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:157](packages/codeboltjs/src/modules/requirementPlan.ts#L157) |
| <a id="updatesection"></a> `updateSection()` | (`filePath`: `string`, `sectionId`: `string`, `updates`: `Partial`\<[`RequirementPlanSection`](../interfaces/RequirementPlanSection)\>) => `Promise`\<[`RequirementPlanSectionResponse`](../interfaces/RequirementPlanSectionResponse)\> | Update a section in a requirement plan | [packages/codeboltjs/src/modules/requirementPlan.ts:219](packages/codeboltjs/src/modules/requirementPlan.ts#L219) |
