---
title: Browser API
---

# Browser API

The `browser` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`click`](./click) | Clicks on a specified element on the page. |
| [`close`](./close) | Closes the current page. |
| [`closeBrowserInstance`](./closeBrowserInstance) | Close a browser instance |
| [`enter`](./enter) | Simulates the Enter key press on the current page. |
| [`executeOnInstance`](./executeOnInstance) | Execute action on specific browser instance |
| [`extractText`](./extractText) | Extracts text from the current page. |
| [`getBrowserInfo`](./getBrowserInfo) | Retrieves browser info like height width scrollx scrolly of the current page. |
| [`getBrowserInstance`](./getBrowserInstance) | Get a specific browser instance by ID |
| [`getContent`](./getContent) | Retrieves the content of the current page. |
| [`getHTML`](./getHTML) | Retrieves the HTML content of the current page. |
| [`getMarkdown`](./getMarkdown) | Retrieves the Markdown content of the current page. |
| [`getPDF`](./getPDF) | Retrieves the PDF content of the current page. |
| [`getSnapShot`](./getSnapShot) | Retrieves the snapshot of the current page. |
| [`getUrl`](./getUrl) | Retrieves the current URL of the browser's active page. |
| [`goToPage`](./goToPage) | Navigates to a specified URL. |
| [`listBrowserInstances`](./listBrowserInstances) | List all open browser instances |
| [`newPage`](./newPage) | Opens a new page in the browser. |
| [`openNewBrowserInstance`](./openNewBrowserInstance) | Open a new browser instance |
| [`pdfToText`](./pdfToText) | Converts the PDF content of the current page to text. |
| [`screenshot`](./screenshot) | Takes a screenshot of the current page. |
| [`scroll`](./scroll) | Scrolls the current page in a specified direction by a specified number of pixels. |
| [`search`](./search) | Performs a search on the current page using a specified query. |
| [`setActiveBrowserInstance`](./setActiveBrowserInstance) | Set the active browser instance |
| [`type`](./type) | Types text into a specified element on the page. |

## Methods

---

### `click`

```typescript
plugin.browser.click(elementid: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Clicks on a specified element on the page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to click. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserActionResponseData>` — A promise that resolves when the click action is complete.

[Full reference →](./click)

---

### `close`

```typescript
plugin.browser.close(options?: BrowserOperationOptions): Promise<void>
```

Closes the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<void>`

[Full reference →](./close)

---

### `closeBrowserInstance`

```typescript
plugin.browser.closeBrowserInstance(instanceId: string): Promise<boolean>
```

Close a browser instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to close |

**Returns:** `Promise<boolean>` — True if successful, false if instance not found

[Full reference →](./closeBrowserInstance)

---

### `enter`

```typescript
plugin.browser.enter(options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Simulates the Enter key press on the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserActionResponseData>` — A promise that resolves when the Enter action is complete.

[Full reference →](./enter)

---

### `executeOnInstance`

```typescript
plugin.browser.executeOnInstance(instanceId: string, operation: BrowserOperationType, params: BrowserOperationParams): Promise<BrowserOperationResponse>
```

Execute action on specific browser instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to execute on |
| `operation` | `BrowserOperationType` | Yes | The operation to execute |
| `params` | `BrowserOperationParams` | Yes | Parameters for the operation |

**Returns:** `Promise<BrowserOperationResponse>` — The operation result

[Full reference →](./executeOnInstance)

---

### `extractText`

```typescript
plugin.browser.extractText(options?: BrowserOperationOptions): Promise<ExtractTextResponse>
```

Extracts text from the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<ExtractTextResponse>` — A promise that resolves with the extracted text.

[Full reference →](./extractText)

---

### `getBrowserInfo`

```typescript
plugin.browser.getBrowserInfo(options?: BrowserOperationOptions): Promise<BrowserInfoResponse>
```

Retrieves browser info like height width scrollx scrolly of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserInfoResponse>` — A promise that resolves with the browser info.

[Full reference →](./getBrowserInfo)

---

### `getBrowserInstance`

```typescript
plugin.browser.getBrowserInstance(instanceId: string): Promise<BrowserInstanceInfo | null>
```

Get a specific browser instance by ID

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to get |

**Returns:** `Promise<BrowserInstanceInfo | null>` — Browser instance information or null if not found

[Full reference →](./getBrowserInstance)

---

### `getContent`

```typescript
plugin.browser.getContent(options?: BrowserOperationOptions): Promise<GetContentResponse>
```

Retrieves the content of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<GetContentResponse>` — A promise that resolves with the content.

[Full reference →](./getContent)

---

### `getHTML`

```typescript
plugin.browser.getHTML(options?: BrowserOperationOptions): Promise<HtmlReceived>
```

Retrieves the HTML content of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<HtmlReceived>` — A promise that resolves with the HTML content.

[Full reference →](./getHTML)

---

### `getMarkdown`

```typescript
plugin.browser.getMarkdown(options?: BrowserOperationOptions): Promise<GetMarkdownResponse>
```

Retrieves the Markdown content of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<GetMarkdownResponse>` — A promise that resolves with the Markdown content.

[Full reference →](./getMarkdown)

---

### `getPDF`

```typescript
plugin.browser.getPDF(options?: BrowserOperationOptions): Promise<void>
```

Retrieves the PDF content of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<void>`

[Full reference →](./getPDF)

---

### `getSnapShot`

```typescript
plugin.browser.getSnapShot(options?: BrowserOperationOptions): Promise<BrowserSnapshotResponse>
```

Retrieves the snapshot of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserSnapshotResponse>` — A promise that resolves with the snapshot.

[Full reference →](./getSnapShot)

---

### `getUrl`

```typescript
plugin.browser.getUrl(options?: BrowserOperationOptions): Promise<UrlResponse>
```

Retrieves the current URL of the browser's active page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<UrlResponse>` — A promise that resolves with the URL.

[Full reference →](./getUrl)

---

### `goToPage`

```typescript
plugin.browser.goToPage(url: string, options?: BrowserOperationOptions): Promise<GoToPageResponse>
```

Navigates to a specified URL.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | `string` | Yes | The URL to navigate to. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<GoToPageResponse>` — A promise that resolves when navigation is complete.

[Full reference →](./goToPage)

---

### `listBrowserInstances`

```typescript
plugin.browser.listBrowserInstances(): Promise<BrowserInstanceInfo[]>
```

List all open browser instances

_No parameters._

**Returns:** `Promise<BrowserInstanceInfo[]>` — Array of browser instance information

[Full reference →](./listBrowserInstances)

---

### `newPage`

```typescript
plugin.browser.newPage(options?: BrowserInstanceOptions): Promise<BrowserActionResponseData>
```

Opens a new page in the browser.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserInstanceOptions` | No | Optional browser instance options |

**Returns:** `Promise<BrowserActionResponseData>`

[Full reference →](./newPage)

---

### `openNewBrowserInstance`

```typescript
plugin.browser.openNewBrowserInstance(options?: BrowserInstanceOptions): Promise<object>
```

Open a new browser instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserInstanceOptions` | No | Optional instance creation options |

**Returns:** `Promise<object>` — The new instance ID

[Full reference →](./openNewBrowserInstance)

---

### `pdfToText`

```typescript
plugin.browser.pdfToText(options?: BrowserOperationOptions): Promise<void>
```

Converts the PDF content of the current page to text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<void>`

[Full reference →](./pdfToText)

---

### `screenshot`

```typescript
plugin.browser.screenshot(options?: BrowserScreenshotOptions): Promise<BrowserScreenshotResponse>
```

Takes a screenshot of the current page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `options` | `BrowserScreenshotOptions` | No | Optional browser screenshot options |

**Returns:** `Promise<BrowserScreenshotResponse>`

[Full reference →](./screenshot)

---

### `scroll`

```typescript
plugin.browser.scroll(direction: string, pixels: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Scrolls the current page in a specified direction by a specified number of pixels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `direction` | `string` | Yes | The direction to scroll. |
| `pixels` | `string` | Yes | The number of pixels to scroll. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserActionResponseData>` — A promise that resolves when the scroll action is complete.

[Full reference →](./scroll)

---

### `search`

```typescript
plugin.browser.search(elementid: string, query: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Performs a search on the current page using a specified query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to perform the search in. |
| `query` | `string` | Yes | The search query. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserActionResponseData>` — A promise that resolves with the search results.

[Full reference →](./search)

---

### `setActiveBrowserInstance`

```typescript
plugin.browser.setActiveBrowserInstance(instanceId: string): Promise<boolean>
```

Set the active browser instance

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to set as active |

**Returns:** `Promise<boolean>` — True if successful, false if instance not found

[Full reference →](./setActiveBrowserInstance)

---

### `type`

```typescript
plugin.browser.type(elementid: string, text: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Types text into a specified element on the page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `elementid` | `string` | Yes | The ID of the element to type into. |
| `text` | `string` | Yes | The text to type. |
| `options` | `BrowserOperationOptions` | No | Optional browser operation options |

**Returns:** `Promise<BrowserActionResponseData>` — A promise that resolves when the typing action is complete.

[Full reference →](./type)

