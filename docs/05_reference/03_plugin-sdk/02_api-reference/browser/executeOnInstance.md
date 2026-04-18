---
name: executeOnInstance
cbbaseinfo:
  description: Execute action on specific browser instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: The instance ID to execute on
      isOptional: false
    - name: operation
      typeName: BrowserOperationType
      description: The operation to execute
      isOptional: false
    - name: params
      typeName: BrowserOperationParams
      description: Parameters for the operation
      isOptional: false
  returns:
    signatureTypeName: "Promise<BrowserOperationResponse>"
    description: The operation result
data:
  name: executeOnInstance
  category: browser
  link: executeOnInstance.md
---
# executeOnInstance

```typescript
plugin.browser.executeOnInstance(instanceId: string, operation: BrowserOperationType, params: BrowserOperationParams): Promise<BrowserOperationResponse>
```

Execute action on specific browser instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | The instance ID to execute on |
| `operation` | `BrowserOperationType` | The operation to execute |
| `params` | `BrowserOperationParams` | Parameters for the operation |

## Returns

**`Promise<BrowserOperationResponse>`** — The operation result

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.browser.executeOnInstance('instanceId', /* BrowserOperationType */, /* BrowserOperationParams */);
```
