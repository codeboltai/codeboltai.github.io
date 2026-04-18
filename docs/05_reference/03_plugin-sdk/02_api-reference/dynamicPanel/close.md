---
title: close
---

# `close`

```typescript
plugin.dynamicPanel.close(panelId: string): Promise<DynamicPanelResponse>
```

Closes a DynamicPanel and removes it from the UI.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to close |

## Returns

`Promise<DynamicPanelResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.close('panelId');
console.log(result);
```
