---
title: closeBrowserInstance
---

# `closeBrowserInstance`

```typescript
plugin.browser.closeBrowserInstance(instanceId: string): Promise<boolean>
```

Close a browser instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to close |

## Returns

`Promise<boolean>` — True if successful, false if instance not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.closeBrowserInstance('instanceId');
console.log(result);
```
