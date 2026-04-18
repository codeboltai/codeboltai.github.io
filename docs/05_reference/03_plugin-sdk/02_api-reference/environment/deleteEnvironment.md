---
name: deleteEnvironment
cbbaseinfo:
  description: Call deleteEnvironment on the Plugin SDK environment module.
cbparameters:
  parameters:
    - name: environmentId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: deleteEnvironment
  category: environment
  link: deleteEnvironment.md
---
# deleteEnvironment

```typescript
plugin.environment.deleteEnvironment(environmentId: string): Promise<any>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentId` | `string` |  |

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.deleteEnvironment('environmentId');
```
