---
name: fill
cbbaseinfo:
  description: "Fills a form field in the browser.

Types text into the specified form field, replacing any existing content.
The field is identified by a CSS selector or other locator strategy."
cbparameters:
  parameters:
    - name: data
      typeName: BrowserFillRequest
      description: The fill request
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserActionResult>"
    description: A promise that resolves to the BrowserActionResult after the fill
data:
  name: fill
  category: browser
  link: fill.md
---
# fill

```typescript
client.browser.fill(data: BrowserFillRequest): Promise<BrowserActionResult>
```

Fills a form field in the browser.

Types text into the specified form field, replacing any existing content.
The field is identified by a CSS selector or other locator strategy.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BrowserFillRequest` | The fill request |

## Returns

**`Promise<BrowserActionResult>`** — A promise that resolves to the BrowserActionResult after the fill

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.browser.fill(/* BrowserFillRequest */);
```
