---
title: listBrowserInstances
---

# `listBrowserInstances`

```typescript
plugin.browser.listBrowserInstances(): Promise<BrowserInstanceInfo[]>
```

List all open browser instances

## Parameters

_No parameters._

## Returns

`Promise<BrowserInstanceInfo[]>` — Array of browser instance information

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.listBrowserInstances();
console.log(result);
```
