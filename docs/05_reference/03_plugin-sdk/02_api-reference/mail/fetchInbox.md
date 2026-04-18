---
name: fetchInbox
cbbaseinfo:
  description: Call fetchInbox on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IFetchInboxParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IFetchInboxResponse>"
    description: ""
data:
  name: fetchInbox
  category: mail
  link: fetchInbox.md
---
# fetchInbox

```typescript
plugin.mail.fetchInbox(params: IFetchInboxParams): Promise<IFetchInboxResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IFetchInboxParams` |  |

## Returns

**`Promise<IFetchInboxResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.fetchInbox(/* IFetchInboxParams */);
```
