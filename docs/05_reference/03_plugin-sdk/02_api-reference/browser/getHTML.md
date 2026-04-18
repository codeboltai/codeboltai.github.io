---
name: getHTML
cbbaseinfo:
  description: Retrieves the HTML content of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<HtmlReceived>"
    description: A promise that resolves with the HTML content.
data:
  name: getHTML
  category: browser
  link: getHTML.md
---
# getHTML

```typescript
plugin.browser.getHTML(options?: BrowserOperationOptions): Promise<HtmlReceived>
```

Retrieves the HTML content of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<HtmlReceived>`** — A promise that resolves with the HTML content.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getHTML();
```
