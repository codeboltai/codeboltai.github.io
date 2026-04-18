---
name: deleteLabel
cbbaseinfo:
  description: Call deleteLabel on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteLabel
  category: jobsApi
  link: deleteLabel.md
---
# deleteLabel

```typescript
plugin.jobsApi.deleteLabel(name: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.deleteLabel('name');
```
