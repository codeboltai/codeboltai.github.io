---
title: browser
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: browser

```ts
const browser: {
  click: (elementid: string, options?: BrowserOperationOptions) => Promise<BrowserActionResponseData>;
  close: (options?: BrowserOperationOptions) => Promise<void>;
  closeBrowserInstance: (instanceId: string) => Promise<boolean>;
  enter: (options?: BrowserOperationOptions) => Promise<BrowserActionResponseData>;
  executeOnInstance: (instanceId: string, operation: BrowserOperationType, params: BrowserOperationParams) => Promise<BrowserOperationResponse>;
  extractText: (options?: BrowserOperationOptions) => Promise<ExtractTextResponse>;
  getBrowserInfo: (options?: BrowserOperationOptions) => Promise<BrowserInfoResponse>;
  getBrowserInstance: (instanceId: string) => Promise<BrowserInstanceInfo | null>;
  getContent: (options?: BrowserOperationOptions) => Promise<GetContentResponse>;
  getHTML: (options?: BrowserOperationOptions) => Promise<HtmlReceived>;
  getMarkdown: (options?: BrowserOperationOptions) => Promise<GetMarkdownResponse>;
  getPDF: (options?: BrowserOperationOptions) => Promise<void>;
  getSnapShot: (options?: BrowserOperationOptions) => Promise<BrowserSnapshotResponse>;
  getUrl: (options?: BrowserOperationOptions) => Promise<UrlResponse>;
  goToPage: (url: string, options?: BrowserOperationOptions) => Promise<GoToPageResponse>;
  listBrowserInstances: () => Promise<BrowserInstanceInfo[]>;
  newPage: (options?: BrowserInstanceOptions) => Promise<BrowserActionResponseData>;
  openNewBrowserInstance: (options?: BrowserInstanceOptions) => Promise<{
     instanceId: string;
  }>;
  pdfToText: (options?: BrowserOperationOptions) => Promise<void>;
  screenshot: (options?: BrowserScreenshotOptions) => Promise<BrowserScreenshotResponse>;
  scroll: (direction: string, pixels: string, options?: BrowserOperationOptions) => Promise<BrowserActionResponseData>;
  search: (elementid: string, query: string, options?: BrowserOperationOptions) => Promise<BrowserActionResponseData>;
  setActiveBrowserInstance: (instanceId: string) => Promise<boolean>;
  type: (elementid: string, text: string, options?: BrowserOperationOptions) => Promise<BrowserActionResponseData>;
};
```

Defined in: packages/codeboltjs/src/modules/browser.ts:55

A module for interacting with a browser through WebSockets.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="click"></a> `click()` | (`elementid`: `string`, `options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserActionResponseData`\> | Clicks on a specified element on the page. | [packages/codeboltjs/src/modules/browser.ts:317](packages/codeboltjs/src/modules/browser.ts#L317) |
| <a id="close"></a> `close()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`void`\> | Closes the current page. | [packages/codeboltjs/src/modules/browser.ts:260](packages/codeboltjs/src/modules/browser.ts#L260) |
| <a id="closebrowserinstance"></a> `closeBrowserInstance()` | (`instanceId`: `string`) => `Promise`\<`boolean`\> | Close a browser instance | [packages/codeboltjs/src/modules/browser.ts:441](packages/codeboltjs/src/modules/browser.ts#L441) |
| <a id="enter"></a> `enter()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserActionResponseData`\> | Simulates the Enter key press on the current page. | [packages/codeboltjs/src/modules/browser.ts:335](packages/codeboltjs/src/modules/browser.ts#L335) |
| <a id="executeoninstance"></a> `executeOnInstance()` | (`instanceId`: `string`, `operation`: `BrowserOperationType`, `params`: `BrowserOperationParams`) => `Promise`\<`BrowserOperationResponse`\> | Execute action on specific browser instance | [packages/codeboltjs/src/modules/browser.ts:464](packages/codeboltjs/src/modules/browser.ts#L464) |
| <a id="extracttext"></a> `extractText()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`ExtractTextResponse`\> | Extracts text from the current page. | [packages/codeboltjs/src/modules/browser.ts:244](packages/codeboltjs/src/modules/browser.ts#L244) |
| <a id="getbrowserinfo"></a> `getBrowserInfo()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserInfoResponse`\> | Retrieves browser info like height width scrollx scrolly of the current page. | [packages/codeboltjs/src/modules/browser.ts:227](packages/codeboltjs/src/modules/browser.ts#L227) |
| <a id="getbrowserinstance"></a> `getBrowserInstance()` | (`instanceId`: `string`) => `Promise`\<[`BrowserInstanceInfo`](../interfaces/BrowserInstanceInfo) \| `null`\> | Get a specific browser instance by ID | [packages/codeboltjs/src/modules/browser.ts:397](packages/codeboltjs/src/modules/browser.ts#L397) |
| <a id="getcontent"></a> `getContent()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`GetContentResponse`\> | Retrieves the content of the current page. | [packages/codeboltjs/src/modules/browser.ts:195](packages/codeboltjs/src/modules/browser.ts#L195) |
| <a id="gethtml"></a> `getHTML()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`HtmlReceived`\> | Retrieves the HTML content of the current page. | [packages/codeboltjs/src/modules/browser.ts:135](packages/codeboltjs/src/modules/browser.ts#L135) |
| <a id="getmarkdown"></a> `getMarkdown()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`GetMarkdownResponse`\> | Retrieves the Markdown content of the current page. | [packages/codeboltjs/src/modules/browser.ts:152](packages/codeboltjs/src/modules/browser.ts#L152) |
| <a id="getpdf"></a> `getPDF()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`void`\> | Retrieves the PDF content of the current page. | [packages/codeboltjs/src/modules/browser.ts:168](packages/codeboltjs/src/modules/browser.ts#L168) |
| <a id="getsnapshot"></a> `getSnapShot()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserSnapshotResponse`\> | Retrieves the snapshot of the current page. | [packages/codeboltjs/src/modules/browser.ts:211](packages/codeboltjs/src/modules/browser.ts#L211) |
| <a id="geturl"></a> `getUrl()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`UrlResponse`\> | Retrieves the current URL of the browser's active page. | [packages/codeboltjs/src/modules/browser.ts:79](packages/codeboltjs/src/modules/browser.ts#L79) |
| <a id="gotopage"></a> `goToPage()` | (`url`: `string`, `options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`GoToPageResponse`\> | Navigates to a specified URL. | [packages/codeboltjs/src/modules/browser.ts:97](packages/codeboltjs/src/modules/browser.ts#L97) |
| <a id="listbrowserinstances"></a> `listBrowserInstances()` | () => `Promise`\<[`BrowserInstanceInfo`](../interfaces/BrowserInstanceInfo)[]\> | List all open browser instances | [packages/codeboltjs/src/modules/browser.ts:376](packages/codeboltjs/src/modules/browser.ts#L376) |
| <a id="newpage"></a> `newPage()` | (`options?`: [`BrowserInstanceOptions`](../interfaces/BrowserInstanceOptions)) => `Promise`\<`BrowserActionResponseData`\> | Opens a new page in the browser. | [packages/codeboltjs/src/modules/browser.ts:61](packages/codeboltjs/src/modules/browser.ts#L61) |
| <a id="opennewbrowserinstance"></a> `openNewBrowserInstance()` | (`options?`: [`BrowserInstanceOptions`](../interfaces/BrowserInstanceOptions)) => `Promise`\<\{ `instanceId`: `string`; \}\> | Open a new browser instance | [packages/codeboltjs/src/modules/browser.ts:422](packages/codeboltjs/src/modules/browser.ts#L422) |
| <a id="pdftotext"></a> `pdfToText()` | (`options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`void`\> | Converts the PDF content of the current page to text. | [packages/codeboltjs/src/modules/browser.ts:181](packages/codeboltjs/src/modules/browser.ts#L181) |
| <a id="screenshot"></a> `screenshot()` | (`options?`: [`BrowserScreenshotOptions`](../interfaces/BrowserScreenshotOptions)) => `Promise`\<`BrowserScreenshotResponse`\> | Takes a screenshot of the current page. | [packages/codeboltjs/src/modules/browser.ts:114](packages/codeboltjs/src/modules/browser.ts#L114) |
| <a id="scroll"></a> `scroll()` | (`direction`: `string`, `pixels`: `string`, `options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserActionResponseData`\> | Scrolls the current page in a specified direction by a specified number of pixels. | [packages/codeboltjs/src/modules/browser.ts:276](packages/codeboltjs/src/modules/browser.ts#L276) |
| <a id="search"></a> `search()` | (`elementid`: `string`, `query`: `string`, `options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserActionResponseData`\> | Performs a search on the current page using a specified query. | [packages/codeboltjs/src/modules/browser.ts:354](packages/codeboltjs/src/modules/browser.ts#L354) |
| <a id="setactivebrowserinstance"></a> `setActiveBrowserInstance()` | (`instanceId`: `string`) => `Promise`\<`boolean`\> | Set the active browser instance | [packages/codeboltjs/src/modules/browser.ts:407](packages/codeboltjs/src/modules/browser.ts#L407) |
| <a id="type"></a> `type()` | (`elementid`: `string`, `text`: `string`, `options?`: [`BrowserOperationOptions`](../interfaces/BrowserOperationOptions)) => `Promise`\<`BrowserActionResponseData`\> | Types text into a specified element on the page. | [packages/codeboltjs/src/modules/browser.ts:297](packages/codeboltjs/src/modules/browser.ts#L297) |
