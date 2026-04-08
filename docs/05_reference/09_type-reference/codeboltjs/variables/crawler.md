---
title: crawler
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: crawler

```ts
const crawler: {
  click: (id: string) => Promise<any>;
  goToPage: (url: string) => void;
  screenshot: () => void;
  scroll: (direction: string) => void;
  start: () => void;
};
```

Defined in: packages/codeboltjs/src/modules/crawler.ts:6

A module for controlling a web crawler through WebSocket messages.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="click"></a> `click()` | (`id`: `string`) => `Promise`\<`any`\> | Simulates a click event on an element with the specified ID. | [packages/codeboltjs/src/modules/crawler.ts:52](packages/codeboltjs/src/modules/crawler.ts#L52) |
| <a id="gotopage"></a> `goToPage()` | (`url`: `string`) => `void` | Directs the crawler to navigate to a specified URL. | [packages/codeboltjs/src/modules/crawler.ts:29](packages/codeboltjs/src/modules/crawler.ts#L29) |
| <a id="screenshot"></a> `screenshot()` | () => `void` | Takes a screenshot using the crawler. | [packages/codeboltjs/src/modules/crawler.ts:19](packages/codeboltjs/src/modules/crawler.ts#L19) |
| <a id="scroll"></a> `scroll()` | (`direction`: `string`) => `void` | Scrolls the crawler in a specified direction. | [packages/codeboltjs/src/modules/crawler.ts:40](packages/codeboltjs/src/modules/crawler.ts#L40) |
| <a id="start"></a> `start()` | () => `void` | Starts the crawler. | [packages/codeboltjs/src/modules/crawler.ts:10](packages/codeboltjs/src/modules/crawler.ts#L10) |
