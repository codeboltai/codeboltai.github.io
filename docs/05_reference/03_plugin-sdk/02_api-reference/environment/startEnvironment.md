---
name: startEnvironment
cbbaseinfo:
  description: Call startEnvironment on the Plugin SDK environment module.
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
  name: startEnvironment
  category: environment
  link: startEnvironment.md
---
# startEnvironment

```typescript
plugin.environment.startEnvironment(environmentId: string): Promise<any>
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

await plugin.environment.startEnvironment('environmentId');
```
