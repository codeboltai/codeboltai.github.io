---
name: listThreads
cbbaseinfo:
  description: Call listThreads on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IListThreadsParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IListThreadsResponse>"
    description: ""
data:
  name: listThreads
  category: mail
  link: listThreads.md
---
# listThreads

```typescript
plugin.mail.listThreads(params: IListThreadsParams): Promise<IListThreadsResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IListThreadsParams` |  Default: `{}` |

## Returns

**`Promise<IListThreadsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.listThreads(/* IListThreadsParams */);
```
