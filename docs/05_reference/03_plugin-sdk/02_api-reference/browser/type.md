---
name: type
cbbaseinfo:
  description: Types text into a specified element on the page.
cbparameters:
  parameters:
    - name: elementid
      typeName: string
      description: The ID of the element to type into.
      isOptional: false
    - name: text
      typeName: string
      description: The text to type.
      isOptional: false
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: A promise that resolves when the typing action is complete.
data:
  name: type
  category: browser
  link: type.md
---
# type

```typescript
plugin.browser.type(elementid: string, text: string, options?: BrowserOperationOptions): Promise<BrowserActionResponseData>
```

Types text into a specified element on the page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `elementid` | `string` | The ID of the element to type into. |
| `text` | `string` | The text to type. |
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserActionResponseData>`** — A promise that resolves when the typing action is complete.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.type('elementid', 'text');
```
