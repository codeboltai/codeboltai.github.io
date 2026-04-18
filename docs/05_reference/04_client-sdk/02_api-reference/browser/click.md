---
name: click
cbbaseinfo:
  description: "Clicks an element in the browser.

Simulates a mouse click on the specified element, identified by
a CSS selector or other locator strategy."
cbparameters:
  parameters:
    - name: data
      typeName: BrowserClickRequest
      description: The click request
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserActionResult>"
    description: A promise that resolves to the BrowserActionResult after the click
data:
  name: click
  category: browser
  link: click.md
---
# click

```typescript
client.browser.click(data: BrowserClickRequest): Promise<BrowserActionResult>
```

Clicks an element in the browser.

Simulates a mouse click on the specified element, identified by
a CSS selector or other locator strategy.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BrowserClickRequest` | The click request |

## Returns

**`Promise<BrowserActionResult>`** — A promise that resolves to the BrowserActionResult after the click

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.browser.click(/* BrowserClickRequest */);
```
