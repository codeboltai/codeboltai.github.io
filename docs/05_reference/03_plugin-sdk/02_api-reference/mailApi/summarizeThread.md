---
name: summarizeThread
cbbaseinfo:
  description: Call summarizeThread on the Plugin SDK mailApi module.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<MailThreadSummary>"
    description: ""
data:
  name: summarizeThread
  category: mailApi
  link: summarizeThread.md
---
# summarizeThread

```typescript
plugin.mailApi.summarizeThread(threadId: string): Promise<MailThreadSummary>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<MailThreadSummary>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mailApi.summarizeThread('threadId');
```
