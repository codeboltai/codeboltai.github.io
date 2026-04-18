---
name: getBrowserInfo
cbbaseinfo:
  description: Retrieves browser info like height width scrollx scrolly of the current page.
cbparameters:
  parameters:
    - name: options
      typeName: BrowserOperationOptions
      description: Optional browser operation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<BrowserInfoResponse>"
    description: A promise that resolves with the browser info.
data:
  name: getBrowserInfo
  category: browser
  link: getBrowserInfo.md
---
# getBrowserInfo

```typescript
plugin.browser.getBrowserInfo(options?: BrowserOperationOptions): Promise<BrowserInfoResponse>
```

Retrieves browser info like height width scrollx scrolly of the current page.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserOperationOptions` _(optional)_ | Optional browser operation options |

## Returns

**`Promise<BrowserInfoResponse>`** — A promise that resolves with the browser info.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getBrowserInfo();
```
