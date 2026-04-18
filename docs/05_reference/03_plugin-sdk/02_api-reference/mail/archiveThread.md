---
name: archiveThread
cbbaseinfo:
  description: Call archiveThread on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IArchiveThreadParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IArchiveThreadResponse>"
    description: ""
data:
  name: archiveThread
  category: mail
  link: archiveThread.md
---
# archiveThread

```typescript
plugin.mail.archiveThread(params: IArchiveThreadParams): Promise<IArchiveThreadResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IArchiveThreadParams` |  |

## Returns

**`Promise<IArchiveThreadResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.archiveThread(/* IArchiveThreadParams */);
```
