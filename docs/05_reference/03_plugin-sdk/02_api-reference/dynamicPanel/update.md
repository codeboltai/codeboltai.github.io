---
title: update
---

# `update`

```typescript
plugin.dynamicPanel.update(panelId: string, html: string): Promise<DynamicPanelResponse>
```

Replaces the HTML content of an existing DynamicPanel.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | The panel to update |
| `html` | `string` | Yes | New HTML content |

## Returns

`Promise<DynamicPanelResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.update('panelId', 'html');
console.log(result);
```
