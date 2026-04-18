---
name: scroll
cbbaseinfo:
  description: Scrolls the current page in a specified direction by a specified number of pixels.
cbparameters:
  parameters:
    - name: direction
      typeName: string
      description: The direction to scroll.
      isOptional: false
    - name: pixels
      typeName: string
      description: The number of pixels to scroll.
      isOptional: false
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: A promise that resolves when the scroll action is complete.
data:
  name: scroll
  category: browser
  link: scroll.md
---
# scroll

```typescript
plugin.browser.scroll(direction: string, pixels: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Scrolls the current page in a specified direction by a specified number of pixels.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `direction` | `string` | The direction to scroll. |
| `pixels` | `string` | The number of pixels to scroll. |
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserActionResponseData>`** — A promise that resolves when the scroll action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.scroll('direction', 'pixels');
```
