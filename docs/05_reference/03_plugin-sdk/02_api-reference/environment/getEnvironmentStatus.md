---
name: getEnvironmentStatus
cbbaseinfo:
  description: Call getEnvironmentStatus on the Plugin SDK environment module.
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
  name: getEnvironmentStatus
  category: environment
  link: getEnvironmentStatus.md
---
# getEnvironmentStatus

```typescript
plugin.environment.getEnvironmentStatus(environmentId: string): Promise<any>
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

await plugin.environment.getEnvironmentStatus('environmentId');
```
