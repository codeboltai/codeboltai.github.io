---
name: sendPullRequest
cbbaseinfo:
  description: "Sends a pull request from the environment's current state.

Creates a pull request on the remote repository using the changes
present in the environment. The PR details are specified in the request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the environment
      isOptional: false
    - name: data
      typeName: SendPullRequestRequest
      description: Pull request details including title, description, and target branch
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pull request has been created
data:
  name: sendPullRequest
  category: environments
  link: sendPullRequest.md
---
# sendPullRequest

```typescript
client.environments.sendPullRequest(id: string, data: SendPullRequestRequest): Promise<unknown>
```

Sends a pull request from the environment's current state.

Creates a pull request on the remote repository using the changes
present in the environment. The PR details are specified in the request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the environment |
| `data` | `SendPullRequestRequest` | Pull request details including title, description, and target branch |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pull request has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.sendPullRequest('id', /* SendPullRequestRequest */);
```
