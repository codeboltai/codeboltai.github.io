---
name: getThreads
cbbaseinfo:
  description: Call getThreads on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: params
      typeName: MailThreadListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<MailThread[]>"
    description: ""
data:
  name: getThreads
  category: mailApi
  link: getThreads.md
---
# getThreads

```typescript
plugin.mailApi.getThreads(params?: MailThreadListParams): Promise<MailThread[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `MailThreadListParams` _(optional)_ |  |

## Returns

**`Promise<MailThread[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.getThreads();
```
