---
name: addDependency
cbbaseinfo:
  description: "Adds a dependency between two jobs.

Declares that the specified job depends on another job, meaning it
cannot start until the dependency is resolved. This builds the
job dependency graph used for scheduling."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the dependent job
      isOptional: false
    - name: data
      typeName: AddDependencyRequest
      description: Dependency payload specifying the target job that must complete first
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the dependency has been added
data:
  name: addDependency
  category: jobs
  link: addDependency.md
---
# addDependency

```typescript
client.jobs.addDependency(id: string, data: AddDependencyRequest): Promise<void>
```

Adds a dependency between two jobs.

Declares that the specified job depends on another job, meaning it
cannot start until the dependency is resolved. This builds the
job dependency graph used for scheduling.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the dependent job |
| `data` | `AddDependencyRequest` | Dependency payload specifying the target job that must complete first |

## Returns

**`Promise<void>`** — A promise that resolves when the dependency has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.addDependency('id', /* AddDependencyRequest */);
```
