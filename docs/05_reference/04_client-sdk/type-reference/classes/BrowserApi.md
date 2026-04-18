---
title: BrowserApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: BrowserApi

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:18

Provides methods for controlling a browser instance in the CodeBolt runtime.

This API enables programmatic browser automation including navigation, clicking
elements, filling form fields, and taking screenshots. It is used by agents
to interact with web applications during testing or task execution.

## Constructors

### Constructor

```ts
new BrowserApi(http: HttpClient): BrowserApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`BrowserApi`

## Methods

### click()

```ts
click(data: BrowserClickRequest): Promise<BrowserActionResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:83

Clicks an element in the browser.

Simulates a mouse click on the specified element, identified by
a CSS selector or other locator strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BrowserClickRequest` | The click request |

#### Returns

`Promise`\<`BrowserActionResult`\>

A promise that resolves to the BrowserActionResult after the click

#### Example

```typescript
const result = await client.browser.click({
  selector: '#submit-button'
});
```

***

### fill()

```ts
fill(data: BrowserFillRequest): Promise<BrowserActionResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:106

Fills a form field in the browser.

Types text into the specified form field, replacing any existing content.
The field is identified by a CSS selector or other locator strategy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BrowserFillRequest` | The fill request |

#### Returns

`Promise`\<`BrowserActionResult`\>

A promise that resolves to the BrowserActionResult after the fill

#### Example

```typescript
const result = await client.browser.fill({
  selector: '#email-input',
  value: 'user@example.com'
});
```

***

### navigate()

```ts
navigate(data: BrowserNavigateRequest): Promise<BrowserActionResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:62

Navigates the browser to a URL.

Loads the specified URL in the browser, waiting for the page to
reach a ready state before resolving.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BrowserNavigateRequest` | The navigation request |

#### Returns

`Promise`\<`BrowserActionResult`\>

A promise that resolves to the BrowserActionResult after navigation completes

#### Example

```typescript
const result = await client.browser.navigate({
  url: 'https://example.com'
});
```

***

### screenshot()

```ts
screenshot(data?: BrowserScreenshotRequest): Promise<BrowserActionResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:125

Takes a screenshot of the current browser viewport.

Captures the visible portion of the browser page as an image.
Useful for visual verification and debugging during automated testing.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data?` | `BrowserScreenshotRequest` | Optional screenshot configuration |

#### Returns

`Promise`\<`BrowserActionResult`\>

A promise that resolves to the BrowserActionResult containing the screenshot data

#### Example

```typescript
const result = await client.browser.screenshot({ fullPage: true });
```

***

### sendAction()

```ts
sendAction(data: BrowserSendActionRequest): Promise<BrowserActionResult>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/browser.api.ts:41

Sends a generic browser action.

Executes an arbitrary browser action command. Use this for actions
that don't have a dedicated convenience method, or for sending
complex multi-step actions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `BrowserSendActionRequest` | The browser action payload describing the action to perform |

#### Returns

`Promise`\<`BrowserActionResult`\>

A promise that resolves to the BrowserActionResult with the action outcome

#### Example

```typescript
const result = await client.browser.sendAction({
  action: 'scroll',
  params: { direction: 'down', amount: 500 }
});
```
