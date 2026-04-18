---
name: getMessage
cbbaseinfo:
  description: Call getMessage on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IGetMessageParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetMessageResponse>"
    description: ""
data:
  name: getMessage
  category: mail
  link: getMessage.md
---
# getMessage

```typescript
plugin.mail.getMessage(params: IGetMessageParams): Promise<IGetMessageResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetMessageParams` |  |

## Returns

**`Promise<IGetMessageResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.getMessage(/* IGetMessageParams */);
```
