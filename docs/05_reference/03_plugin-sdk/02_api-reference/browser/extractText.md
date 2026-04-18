---
name: extractText
cbbaseinfo:
  description: Extracts text from the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<ExtractTextResponse>"
    description: A promise that resolves with the extracted text.
data:
  name: extractText
  category: browser
  link: extractText.md
---
# extractText

```typescript
plugin.browser.extractText(options?: BrowserOperationOptions): Promise<ExtractTextResponse>
```

Extracts text from the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<ExtractTextResponse>`** — A promise that resolves with the extracted text.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.extractText();
```
