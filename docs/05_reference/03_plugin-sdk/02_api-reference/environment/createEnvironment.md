---
name: createEnvironment
cbbaseinfo:
  description: Call createEnvironment on the Plugin SDK environment module.
cbparameters:
  parameters:
    - name: environmentData
      typeName: object
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<any>"
    description: ""
data:
  name: createEnvironment
  category: environment
  link: createEnvironment.md
---
# createEnvironment

```typescript
plugin.environment.createEnvironment(environmentData: object): Promise<any>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `environmentData` | `object` |  |

## Returns

**`Promise<any>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environment.createEnvironment(/* object */);
```
