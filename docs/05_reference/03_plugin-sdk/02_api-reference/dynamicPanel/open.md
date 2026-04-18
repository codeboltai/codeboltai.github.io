---
title: open
---

# `open`

```typescript
plugin.dynamicPanel.open(panelId: string, title: string, html: string, opts?: DynamicPanelOpenOptions): Promise<DynamicPanelOpenResponse>
```

Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `panelId` | `string` | Yes | Unique identifier for the panel |
| `title` | `string` | Yes | Human-readable panel title shown in the tab |
| `html` | `string` | Yes | Full HTML document rendered inside the panel iframe |
| `opts` | `DynamicPanelOpenOptions` | No | Optional: `waitForResponse`, `timeout` |

## Returns

`Promise<DynamicPanelOpenResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.open('panelId', 'title', 'html');
console.log(result);
```
