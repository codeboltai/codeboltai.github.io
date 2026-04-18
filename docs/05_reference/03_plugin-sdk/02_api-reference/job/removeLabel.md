---
name: removeLabel
cbbaseinfo:
  description: Call removeLabel on the Plugin SDK job module.
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
  name: removeLabel
  category: job
  link: removeLabel.md
---
# removeLabel

```typescript
plugin.job.removeLabel(label: string): Promise<JobLabelsResponse>
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

await plugin.job.removeLabel('label');
```
