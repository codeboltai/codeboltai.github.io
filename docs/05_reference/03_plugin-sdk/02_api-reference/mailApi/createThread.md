---
name: createThread
cbbaseinfo:
  description: Call createThread on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateMailThreadRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThread>"
    description: ""
data:
  name: createThread
  category: mailApi
  link: createThread.md
---
# createThread

```typescript
plugin.mailApi.createThread(data: CreateMailThreadRequest): Promise<MailThread>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMailThreadRequest` |  |

## Returns

**`Promise<MailThread>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.createThread(/* CreateMailThreadRequest */);
```
