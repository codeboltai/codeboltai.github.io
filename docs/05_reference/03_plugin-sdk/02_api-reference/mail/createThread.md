---
name: createThread
cbbaseinfo:
  description: Call createThread on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: ICreateThreadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ICreateThreadResponse>"
    description: ""
data:
  name: createThread
  category: mail
  link: createThread.md
---
# createThread

```typescript
plugin.mail.createThread(params: ICreateThreadParams): Promise<ICreateThreadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ICreateThreadParams` |  |

## Returns

**`Promise<ICreateThreadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.createThread(/* ICreateThreadParams */);
```
