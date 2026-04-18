---
name: stopEnvironment
cbbaseinfo:
  description: Call stopEnvironment on the Plugin SDK environment module.
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
  name: stopEnvironment
  category: environment
  link: stopEnvironment.md
---
# stopEnvironment

```typescript
plugin.environment.stopEnvironment(environmentId: string): Promise<any>
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

await plugin.environment.stopEnvironment('environmentId');
```
