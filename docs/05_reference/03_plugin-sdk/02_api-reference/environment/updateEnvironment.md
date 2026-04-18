---
name: updateEnvironment
cbbaseinfo:
  description: Call updateEnvironment on the Plugin SDK environment module.
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: ""
      isOptional: false
    - name: updateData
      typeName: any
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: updateEnvironment
  category: environment
  link: updateEnvironment.md
---
# updateEnvironment

```typescript
plugin.environment.updateEnvironment(environmentId: string, updateData: any): Promise<any>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` |  |
| `updateData` | `any` |  |

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.updateEnvironment('environmentId', /* any */);
```
