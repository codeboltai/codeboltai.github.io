---
name: summarizeThread
cbbaseinfo:
  description: Call summarizeThread on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: ISummarizeThreadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ISummarizeThreadResponse>"
    description: ""
data:
  name: summarizeThread
  category: mail
  link: summarizeThread.md
---
# summarizeThread

```typescript
plugin.mail.summarizeThread(params: ISummarizeThreadParams): Promise<ISummarizeThreadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ISummarizeThreadParams` |  |

## Returns

**`Promise<ISummarizeThreadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.summarizeThread(/* ISummarizeThreadParams */);
```
