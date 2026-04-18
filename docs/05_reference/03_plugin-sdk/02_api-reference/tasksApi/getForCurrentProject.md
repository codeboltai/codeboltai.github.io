---
name: getForCurrentProject
cbbaseinfo:
  description: "Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<Task[]>"
    description: A promise that resolves to an array of Task objects for the current project
data:
  name: getForCurrentProject
  category: tasksApi
  link: getForCurrentProject.md
---
# getForCurrentProject

```typescript
plugin.tasksApi.getForCurrentProject(): Promise<Task[]>
```

Retrieves all tasks associated with the current project.

Returns tasks that belong to the currently active project context.
This is useful for project-specific task views and when you need to
operate on tasks within the current working project.

## Parameters

_None_

## Returns

**`Promise<Task[]>`** — A promise that resolves to an array of Task objects for the current project

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.getForCurrentProject();
```
