---
name: createTaskFromFeature
cbbaseinfo:
  description: "Creates a task from a roadmap feature.

Converts a feature into an actionable task in the task management system. This
bridges the gap between roadmap planning and task execution."
cbparameters:
  parameters:
    - name: featureId
      typeName: string
      description: The unique identifier of the feature to create a task from
      isOptional: false
    - name: data
      typeName: CreateTaskFromFeatureRequest
      description: Optional task creation parameters to override defaults
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the task has been created
data:
  name: createTaskFromFeature
  category: roadmap
  link: createTaskFromFeature.md
---
# createTaskFromFeature

```typescript
client.roadmap.createTaskFromFeature(featureId: string, data?: CreateTaskFromFeatureRequest): Promise<unknown>
```

Creates a task from a roadmap feature.

Converts a feature into an actionable task in the task management system. This
bridges the gap between roadmap planning and task execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `featureId` | `string` | The unique identifier of the feature to create a task from |
| `data` | `CreateTaskFromFeatureRequest` _(optional)_ | Optional task creation parameters to override defaults |

## Returns

**`Promise<unknown>`** — A promise that resolves when the task has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.roadmap.createTaskFromFeature('featureId');
```
