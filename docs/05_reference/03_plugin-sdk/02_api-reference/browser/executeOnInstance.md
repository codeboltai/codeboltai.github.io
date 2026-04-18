---
title: executeOnInstance
---

# `executeOnInstance`

```typescript
plugin.browser.executeOnInstance(instanceId: string, operation: BrowserOperationType, params: BrowserOperationParams): Promise<BrowserOperationResponse>
```

Execute action on specific browser instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | The instance ID to execute on |
| `operation` | `BrowserOperationType` | Yes | The operation to execute |
| `params` | `BrowserOperationParams` | Yes | Parameters for the operation |

## Returns

`Promise<BrowserOperationResponse>` — The operation result

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.browser.executeOnInstance('instanceId', /* BrowserOperationType */, /* BrowserOperationParams */);
console.log(result);
```
