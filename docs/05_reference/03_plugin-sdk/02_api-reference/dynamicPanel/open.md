---
name: open
cbbaseinfo:
  description: "Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data."
cbparameters:
  parameters:
    - name: panelId
      typeName: string
      description: Unique identifier for the panel
      isOptional: false
    - name: title
      typeName: string
      description: Human-readable panel title shown in the tab
      isOptional: false
    - name: html
      typeName: string
      description: Full HTML document rendered inside the panel iframe
      isOptional: false
    - name: opts
      typeName: DynamicPanelOpenOptions
      description: "Optional: `waitForResponse`, `timeout`"
      isOptional: true
  returns:
    signatureTypeName: "Promise<DynamicPanelOpenResponse>"
    description: ""
data:
  name: open
  category: dynamicPanel
  link: open.md
---
# open

```typescript
plugin.dynamicPanel.open(panelId: string, title: string, html: string, opts?: DynamicPanelOpenOptions): Promise<DynamicPanelOpenResponse>
```

Opens a new DynamicPanel with the given HTML content.

When `opts.waitForResponse` is true the call **blocks** until the panel
iframe sends a `{ type: 'submit', data: {...} }` message via
`window.parent.postMessage()`.  The resolved value then contains the
submitted data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `panelId` | `string` | Unique identifier for the panel |
| `title` | `string` | Human-readable panel title shown in the tab |
| `html` | `string` | Full HTML document rendered inside the panel iframe |
| `opts` | `DynamicPanelOpenOptions` _(optional)_ | Optional: `waitForResponse`, `timeout` |

## Returns

**`Promise<DynamicPanelOpenResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.dynamicPanel.open('panelId', 'title', 'html');
```
