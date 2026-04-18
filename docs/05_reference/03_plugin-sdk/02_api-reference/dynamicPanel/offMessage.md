---
title: offMessage
---

# `offMessage`

```typescript
plugin.dynamicPanel.offMessage(panelId: string): void
```

Removes the message handler for a specific panel.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to stop listening to |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.offMessage('panelId');
console.log(result);
```
