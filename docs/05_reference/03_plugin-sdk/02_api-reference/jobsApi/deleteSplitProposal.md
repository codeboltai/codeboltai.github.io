---
name: deleteSplitProposal
cbbaseinfo:
  description: Call deleteSplitProposal on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: proposalId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: deleteSplitProposal
  category: jobsApi
  link: deleteSplitProposal.md
---
# deleteSplitProposal

```typescript
plugin.jobsApi.deleteSplitProposal(id: string, proposalId: string): Promise<void>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `proposalId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.deleteSplitProposal('id', 'proposalId');
```
