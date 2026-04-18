---
name: removeDependency
cbbaseinfo:
  description: "Removes a dependency from a job.

Detaches the dependency link between the job and its target, which
may unblock the job if this was its only remaining dependency."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the dependent job
      isOptional: false
    - name: targetId
      typeName: string
      description: The unique identifier of the dependency target to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the dependency has been removed
data:
  name: removeDependency
  category: jobs
  link: removeDependency.md
---
# removeDependency

```typescript
client.jobs.removeDependency(id: string, targetId: string): Promise<void>
```

Removes a dependency from a job.

Detaches the dependency link between the job and its target, which
may unblock the job if this was its only remaining dependency.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the dependent job |
| `targetId` | `string` | The unique identifier of the dependency target to remove |

## Returns

**`Promise<void>`** — A promise that resolves when the dependency has been removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.removeDependency('id', 'targetId');
```
