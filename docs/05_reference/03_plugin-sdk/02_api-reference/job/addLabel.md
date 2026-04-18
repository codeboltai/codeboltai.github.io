---
name: addLabel
cbbaseinfo:
  description: Call addLabel on the Plugin SDK job module.
cbparameters:
  parameters:
    - name: label
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobLabelsResponse>"
    description: ""
data:
  name: addLabel
  category: job
  link: addLabel.md
---
# addLabel

```typescript
plugin.job.addLabel(label: string): Promise<JobLabelsResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `label` | `string` |  |

## Returns

**`Promise<JobLabelsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.job.addLabel('label');
```
