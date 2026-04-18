---
name: pdfToText
cbbaseinfo:
  description: Converts the PDF content of the current page to text.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: pdfToText
  category: browser
  link: pdfToText.md
---
# pdfToText

```typescript
plugin.browser.pdfToText(options?: BrowserOperationOptions): Promise<void>
```

Converts the PDF content of the current page to text.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.pdfToText();
```
