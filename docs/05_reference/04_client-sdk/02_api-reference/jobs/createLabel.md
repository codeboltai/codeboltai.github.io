---
name: createLabel
cbbaseinfo:
  description: "Creates a new job label.

Registers a label that can be attached to jobs for categorization.
Labels are system-wide and reusable across all jobs."
cbparameters:
  parameters:
    - name: data
      typeName: CreateLabelRequest
      description: Label creation payload including name and optional color
      isOptional: false
  returns:
    signatureTypeName: "Promise<JobLabel>"
    description: A promise that resolves to the newly created
data:
  name: createLabel
  category: jobs
  link: createLabel.md
---
# createLabel

```typescript
client.jobs.createLabel(data: CreateLabelRequest): Promise<JobLabel>
```

Creates a new job label.

Registers a label that can be attached to jobs for categorization.
Labels are system-wide and reusable across all jobs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateLabelRequest` | Label creation payload including name and optional color |

## Returns

**`Promise<JobLabel>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.jobs.createLabel(/* CreateLabelRequest */);
```
