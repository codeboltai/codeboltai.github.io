---
title: setActiveBrowserInstance
---

# `setActiveBrowserInstance`

```typescript
plugin.browser.setActiveBrowserInstance(instanceId: string): Promise<boolean>
```

Set the active browser instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to set as active |

## Returns

`Promise<boolean>` — True if successful, false if instance not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.setActiveBrowserInstance('instanceId');
console.log(result);
```
