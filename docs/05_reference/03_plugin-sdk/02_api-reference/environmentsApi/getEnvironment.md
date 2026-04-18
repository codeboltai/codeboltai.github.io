---
name: getEnvironment
cbbaseinfo:
  description: Call getEnvironment on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<Environment>"
    description: ""
data:
  name: getEnvironment
  category: environmentsApi
  link: getEnvironment.md
---
# getEnvironment

```typescript
plugin.environmentsApi.getEnvironment(id: string): Promise<Environment>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<Environment>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getEnvironment('id');
```
