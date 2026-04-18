---
name: restartEnvironment
cbbaseinfo:
  description: Call restartEnvironment on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: restartEnvironment
  category: environmentsApi
  link: restartEnvironment.md
---
# restartEnvironment

```typescript
plugin.environmentsApi.restartEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.restartEnvironment('id');
```
