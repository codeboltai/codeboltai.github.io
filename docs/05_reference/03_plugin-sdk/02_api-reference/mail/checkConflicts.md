---
name: checkConflicts
cbbaseinfo:
  description: Call checkConflicts on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: ICheckConflictsParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ICheckConflictsResponse>"
    description: ""
data:
  name: checkConflicts
  category: mail
  link: checkConflicts.md
---
# checkConflicts

```typescript
plugin.mail.checkConflicts(params: ICheckConflictsParams): Promise<ICheckConflictsResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ICheckConflictsParams` |  |

## Returns

**`Promise<ICheckConflictsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.checkConflicts(/* ICheckConflictsParams */);
```
