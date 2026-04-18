---
name: navigate
cbbaseinfo:
  description: "Navigates the browser to a URL.

Loads the specified URL in the browser, waiting for the page to
reach a ready state before resolving."
cbparameters:
  parameters:
    - name: data
      typeName: BrowserNavigateRequest
      description: The navigation request
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserActionResult>"
    description: A promise that resolves to the BrowserActionResult after navigation completes
data:
  name: navigate
  category: browser
  link: navigate.md
---
# navigate

```typescript
client.browser.navigate(data: BrowserNavigateRequest): Promise<BrowserActionResult>
```

Navigates the browser to a URL.

Loads the specified URL in the browser, waiting for the page to
reach a ready state before resolving.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BrowserNavigateRequest` | The navigation request |

## Returns

**`Promise<BrowserActionResult>`** — A promise that resolves to the BrowserActionResult after navigation completes

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.browser.navigate(/* BrowserNavigateRequest */);
```
