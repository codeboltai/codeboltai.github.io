---
name: getEnvironment
cbbaseinfo:
  description: Call getEnvironment on the Plugin SDK environment module.
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
  name: getEnvironment
  category: environment
  link: getEnvironment.md
---
# getEnvironment

```typescript
plugin.environment.getEnvironment(environmentId: string): Promise<any>
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

await plugin.environment.getEnvironment('environmentId');
```
