---
name: findOrCreateThread
cbbaseinfo:
  description: Call findOrCreateThread on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IFindOrCreateThreadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IFindOrCreateThreadResponse>"
    description: ""
data:
  name: findOrCreateThread
  category: mail
  link: findOrCreateThread.md
---
# findOrCreateThread

```typescript
plugin.mail.findOrCreateThread(params: IFindOrCreateThreadParams): Promise<IFindOrCreateThreadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IFindOrCreateThreadParams` |  |

## Returns

**`Promise<IFindOrCreateThreadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.findOrCreateThread(/* IFindOrCreateThreadParams */);
```
