---
name: createLabel
cbbaseinfo:
  description: Call createLabel on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateLabelRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobLabel>"
    description: ""
data:
  name: createLabel
  category: jobsApi
  link: createLabel.md
---
# createLabel

```typescript
plugin.jobsApi.createLabel(data: CreateLabelRequest): Promise<JobLabel>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateLabelRequest` |  |

## Returns

**`Promise<JobLabel>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.createLabel(/* CreateLabelRequest */);
```
