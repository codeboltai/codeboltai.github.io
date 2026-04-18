---
name: click
cbbaseinfo:
  description: Clicks on a specified element on the page.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to click.
      isOptional: false
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: A promise that resolves when the click action is complete.
data:
  name: click
  category: browser
  link: click.md
---
# click

```typescript
plugin.browser.click(elementid: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Clicks on a specified element on the page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `elementid` | `string` | The ID of the element to click. |
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserActionResponseData>`** — A promise that resolves when the click action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.click('elementid');
```
