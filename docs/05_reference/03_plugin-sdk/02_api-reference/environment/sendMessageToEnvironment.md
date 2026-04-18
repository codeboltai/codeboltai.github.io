---
name: sendMessageToEnvironment
cbbaseinfo:
  description: Call sendMessageToEnvironment on the Plugin SDK environment module.
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: ""
      isOptional: false
    - name: message
      typeName: any
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: sendMessageToEnvironment
  category: environment
  link: sendMessageToEnvironment.md
---
# sendMessageToEnvironment

```typescript
plugin.environment.sendMessageToEnvironment(environmentId: string, message: any): Promise<any>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` |  |
| `message` | `any` |  |

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.sendMessageToEnvironment('environmentId', /* any */);
```
