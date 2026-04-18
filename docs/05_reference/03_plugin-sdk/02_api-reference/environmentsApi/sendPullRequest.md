---
name: sendPullRequest
cbbaseinfo:
  description: Call sendPullRequest on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: SendPullRequestRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: sendPullRequest
  category: environmentsApi
  link: sendPullRequest.md
---
# sendPullRequest

```typescript
plugin.environmentsApi.sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `SendPullRequestRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.sendPullRequest('id', /* SendPullRequestRequest */);
```
