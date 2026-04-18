---
name: listEnvironments
cbbaseinfo:
  description: Call listEnvironments on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<Environment[]>"
    description: ""
data:
  name: listEnvironments
  category: environmentsApi
  link: listEnvironments.md
---
# listEnvironments

```typescript
plugin.environmentsApi.listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<Environment[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.listEnvironments();
```
