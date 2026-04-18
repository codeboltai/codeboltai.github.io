---
name: acceptSplitProposal
cbbaseinfo:
  description: Call acceptSplitProposal on the Plugin SDK jobsApi module.
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
    - name: data
      typeName: AcceptSplitProposalRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<Job[]>"
    description: ""
data:
  name: acceptSplitProposal
  category: jobsApi
  link: acceptSplitProposal.md
---
# acceptSplitProposal

```typescript
plugin.jobsApi.acceptSplitProposal(id: string, proposalId: string, data?: AcceptSplitProposalRequest): Promise<Job[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `proposalId` | `string` |  |
| `data` | `AcceptSplitProposalRequest` _(optional)_ |  |

## Returns

**`Promise<Job[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.jobsApi.acceptSplitProposal('id', 'proposalId');
```
