---
name: createSplitProposal
cbbaseinfo:
  description: Call createSplitProposal on the Plugin SDK jobsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: CreateSplitProposalRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobSplitProposal>"
    description: ""
data:
  name: createSplitProposal
  category: jobsApi
  link: createSplitProposal.md
---
# createSplitProposal

```typescript
plugin.jobsApi.createSplitProposal(id: string, data: CreateSplitProposalRequest): Promise<JobSplitProposal>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `CreateSplitProposalRequest` |  |

## Returns

**`Promise<JobSplitProposal>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.createSplitProposal('id', /* CreateSplitProposalRequest */);
```
