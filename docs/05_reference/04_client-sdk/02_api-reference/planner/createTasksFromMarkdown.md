---
name: createTasksFromMarkdown
cbbaseinfo:
  description: "Bulk-creates tasks by parsing a markdown document.

Parses a markdown-formatted task list (using checkboxes, headings, and lists) and
creates individual planner tasks from it. This enables rapid task creation from
planning documents or specifications."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTasksFromMarkdownRequest
      description: The request containing the markdown content to parse
      isOptional: false
  returns:
    signatureTypeName: "Promise<PlannerTask[]>"
    description: A promise that resolves to an array of the newly created tasks
data:
  name: createTasksFromMarkdown
  category: planner
  link: createTasksFromMarkdown.md
---
# createTasksFromMarkdown

```typescript
client.planner.createTasksFromMarkdown(data: CreateTasksFromMarkdownRequest): Promise<PlannerTask[]>
```

Bulk-creates tasks by parsing a markdown document.

Parses a markdown-formatted task list (using checkboxes, headings, and lists) and
creates individual planner tasks from it. This enables rapid task creation from
planning documents or specifications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTasksFromMarkdownRequest` | The request containing the markdown content to parse |

## Returns

**`Promise<PlannerTask[]>`** — A promise that resolves to an array of the newly created tasks

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.createTasksFromMarkdown(/* CreateTasksFromMarkdownRequest */);
```
