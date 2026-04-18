---
name: listBrowserInstances
cbbaseinfo:
  description: List all open browser instances
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<BrowserInstanceInfo[]>"
    description: Array of browser instance information
data:
  name: listBrowserInstances
  category: browser
  link: listBrowserInstances.md
---
# listBrowserInstances

```typescript
plugin.browser.listBrowserInstances(): Promise<BrowserInstanceInfo[]>
```

List all open browser instances

## Parameters

_None_

## Returns

**`Promise<BrowserInstanceInfo[]>`** — Array of browser instance information

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.listBrowserInstances();
```
