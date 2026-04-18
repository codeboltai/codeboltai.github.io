---
name: setActiveBrowserInstance
cbbaseinfo:
  description: Set the active browser instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The instance ID to set as active
      isOptional: false
  returns:
    signatureTypeName: "Promise<boolean>"
    description: True if successful, false if instance not found
data:
  name: setActiveBrowserInstance
  category: browser
  link: setActiveBrowserInstance.md
---
# setActiveBrowserInstance

```typescript
plugin.browser.setActiveBrowserInstance(instanceId: string): Promise<boolean>
```

Set the active browser instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The instance ID to set as active |

## Returns

**`Promise<boolean>`** — True if successful, false if instance not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.setActiveBrowserInstance('instanceId');
```
