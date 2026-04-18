---
name: openNewBrowserInstance
cbbaseinfo:
  description: Open a new browser instance
cbparameters:
  parameters:
    - name: options
      typeName: BrowserInstanceOptions
      description: Optional instance creation options
      isOptional: true
  returns:
    signatureTypeName: "Promise<object>"
    description: The new instance ID
data:
  name: openNewBrowserInstance
  category: browser
  link: openNewBrowserInstance.md
---
# openNewBrowserInstance

```typescript
plugin.browser.openNewBrowserInstance(options?: BrowserInstanceOptions): Promise<object>
```

Open a new browser instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `options` | `BrowserInstanceOptions` _(optional)_ | Optional instance creation options |

## Returns

**`Promise<object>`** — The new instance ID

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.openNewBrowserInstance();
```
