---
name: getThread
cbbaseinfo:
  description: Call getThread on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IGetThreadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetThreadResponse>"
    description: ""
data:
  name: getThread
  category: mail
  link: getThread.md
---
# getThread

```typescript
plugin.mail.getThread(params: IGetThreadParams): Promise<IGetThreadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetThreadParams` |  |

## Returns

**`Promise<IGetThreadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.getThread(/* IGetThreadParams */);
```
