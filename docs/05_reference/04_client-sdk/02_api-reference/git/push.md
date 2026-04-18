---
name: push
cbbaseinfo:
  description: "Pushes committed changes to the remote repository.

An alias for  providing a shorter method name.
Both methods perform the same push operation."
cbparameters:
  parameters:
    - name: data
      typeName: GitPushRequest
      description: Optional push parameters such as branch or force flag
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the push is complete
data:
  name: push
  category: git
  link: push.md
---
# push

```typescript
client.git.push(data?: GitPushRequest): Promise<unknown>
```

Pushes committed changes to the remote repository.

An alias for  providing a shorter method name.
Both methods perform the same push operation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitPushRequest` _(optional)_ | Optional push parameters such as branch or force flag |

## Returns

**`Promise<unknown>`** — A promise that resolves when the push is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.git.push();
```
