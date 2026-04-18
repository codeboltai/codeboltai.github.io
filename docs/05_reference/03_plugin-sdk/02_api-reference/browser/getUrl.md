---
name: getUrl
cbbaseinfo:
  description: "Retrieves the current URL of the browser's active page."
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<UrlResponse>"
    description: A promise that resolves with the URL.
data:
  name: getUrl
  category: browser
  link: getUrl.md
---
# getUrl

```typescript
plugin.browser.getUrl(options?: BrowserOperationOptions): Promise<UrlResponse>
```

Retrieves the current URL of the browser's active page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<UrlResponse>`** — A promise that resolves with the URL.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getUrl();
```
