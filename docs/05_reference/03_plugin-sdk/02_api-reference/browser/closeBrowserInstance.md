---
name: closeBrowserInstance
cbbaseinfo:
  description: Close a browser instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The instance ID to close
      isOptional: false
  returns:
    signatureTypeName: "Promise<boolean>"
    description: True if successful, false if instance not found
data:
  name: closeBrowserInstance
  category: browser
  link: closeBrowserInstance.md
---
# closeBrowserInstance

```typescript
plugin.browser.closeBrowserInstance(instanceId: string): Promise<boolean>
```

Close a browser instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The instance ID to close |

## Returns

**`Promise<boolean>`** — True if successful, false if instance not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.closeBrowserInstance('instanceId');
```
