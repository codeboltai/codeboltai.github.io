---
name: createGroup
cbbaseinfo:
  description: "Creates a new job group.

Groups provide an organizational layer for jobs, allowing you to
categorize and manage them as a collection."
cbparameters:
  parameters:
    - name: data
      typeName: CreateJobGroupRequest
      description: Group creation payload including name and description
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobGroup>"
    description: A promise that resolves to the newly created
data:
  name: createGroup
  category: jobs
  link: createGroup.md
---
# createGroup

```typescript
client.jobs.createGroup(data: CreateJobGroupRequest): Promise<JobGroup>
```

Creates a new job group.

Groups provide an organizational layer for jobs, allowing you to
categorize and manage them as a collection.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJobGroupRequest` | Group creation payload including name and description |

## Returns

**`Promise<JobGroup>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.createGroup(/* CreateJobGroupRequest */);
```
