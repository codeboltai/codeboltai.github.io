---
name: getBrowserInstance
cbbaseinfo:
  description: Get a specific browser instance by ID
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The instance ID to get
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserInstanceInfo | null>"
    description: Browser instance information or null if not found
data:
  name: getBrowserInstance
  category: browser
  link: getBrowserInstance.md
---
# getBrowserInstance

```typescript
plugin.browser.getBrowserInstance(instanceId: string): Promise<BrowserInstanceInfo | null>
```

Get a specific browser instance by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The instance ID to get |

## Returns

**`Promise<BrowserInstanceInfo | null>`** — Browser instance information or null if not found

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.getBrowserInstance('instanceId');
```
