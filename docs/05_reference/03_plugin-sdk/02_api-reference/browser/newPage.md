---
name: newPage
cbbaseinfo:
  description: Opens a new page in the browser.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserInstanceOptions
      description: Optional browser instance options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserActionResponseData>"
    description: ""
data:
  name: newPage
  category: browser
  link: newPage.md
---
# newPage

```typescript
plugin.browser.newPage(options?: BrowserInstanceOptions): Promise<BrowserActionResponseData>
```

Opens a new page in the browser.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserInstanceOptions` _(optional)_ | Optional browser instance options |

## Returns

**`Promise<BrowserActionResponseData>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.newPage();
```
