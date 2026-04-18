---
name: updateThreadStatus
cbbaseinfo:
  description: Call updateThreadStatus on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateThreadStatusParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IUpdateThreadStatusResponse>"
    description: ""
data:
  name: updateThreadStatus
  category: mail
  link: updateThreadStatus.md
---
# updateThreadStatus

```typescript
plugin.mail.updateThreadStatus(params: IUpdateThreadStatusParams): Promise<IUpdateThreadStatusResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IUpdateThreadStatusParams` |  |

## Returns

**`Promise<IUpdateThreadStatusResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.updateThreadStatus(/* IUpdateThreadStatusParams */);
```
