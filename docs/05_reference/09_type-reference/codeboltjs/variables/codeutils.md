---
title: codeutils
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: codeutils

```ts
const codeutils: {
  getAllFilesAsMarkDown: () => Promise<string>;
  getMatcherList: () => Promise<GetMatcherListTreeResponse>;
  matchDetail: (matcher: string) => Promise<getMatchDetail>;
  performMatch: (matcherDefinition: object, problemPatterns: any[], problems: any[]) => Promise<MatchProblemResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/codeutils.ts:13

A utility module for working with code.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="getallfilesasmarkdown"></a> `getAllFilesAsMarkDown()` | () => `Promise`\<`string`\> | Retrieves all files as Markdown. | [packages/codeboltjs/src/modules/codeutils.ts:19](packages/codeboltjs/src/modules/codeutils.ts#L19) |
| <a id="getmatcherlist"></a> `getMatcherList()` | () => `Promise`\<`GetMatcherListTreeResponse`\> | Retrieves the list of matchers. | [packages/codeboltjs/src/modules/codeutils.ts:55](packages/codeboltjs/src/modules/codeutils.ts#L55) |
| <a id="matchdetail"></a> `matchDetail()` | (`matcher`: `string`) => `Promise`\<`getMatchDetail`\> | Retrieves details of a match. | [packages/codeboltjs/src/modules/codeutils.ts:70](packages/codeboltjs/src/modules/codeutils.ts#L70) |
| <a id="performmatch"></a> `performMatch()` | (`matcherDefinition`: `object`, `problemPatterns`: `any`[], `problems`: `any`[]) => `Promise`\<`MatchProblemResponse`\> | Performs a matching operation based on the provided matcher definition and problem patterns. | [packages/codeboltjs/src/modules/codeutils.ts:36](packages/codeboltjs/src/modules/codeutils.ts#L36) |
