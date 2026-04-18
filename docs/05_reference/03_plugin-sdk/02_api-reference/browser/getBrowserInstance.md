---
title: getBrowserInstance
---

# `getBrowserInstance`

```typescript
plugin.browser.getBrowserInstance(instanceId: string): Promise<BrowserInstanceInfo | null>
```

Get a specific browser instance by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to get |

## Returns

`Promise<BrowserInstanceInfo | null>` — Browser instance information or null if not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.getBrowserInstance('instanceId');
console.log(result);
```
