---
title: list
---

# `list`

```typescript
plugin.dynamicPanel.list(): Promise<DynamicPanelListResponse>
```

Lists all currently active DynamicPanels.

## Parameters

_No parameters._

## Returns

`Promise<DynamicPanelListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.dynamicPanel.list();
console.log(result);
```
