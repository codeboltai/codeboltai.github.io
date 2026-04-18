---
name: getProjectPath
cbbaseinfo:
  description: Retrieves the path of the current project.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetProjectPathResponse>"
    description: A promise that resolves with the project path response.
data:
  name: getProjectPath
  category: project
  link: getProjectPath.md
---
# getProjectPath

```typescript
plugin.project.getProjectPath(): Promise<GetProjectPathResponse>
```

Retrieves the path of the current project.

## Parameters

_None_

## Returns

**`Promise<GetProjectPathResponse>`** — A promise that resolves with the project path response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.project.getProjectPath();
```
