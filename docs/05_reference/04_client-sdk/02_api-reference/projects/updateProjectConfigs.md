---
name: updateProjectConfigs
cbbaseinfo:
  description: "Updates the project configuration settings.

Applies changes to the project-level configuration. This is the primary way to modify
project settings like build commands, environment variables, and agent defaults."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateProjectConfigRequest
      description: The configuration fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the configuration has been saved
data:
  name: updateProjectConfigs
  category: projects
  link: updateProjectConfigs.md
---
# updateProjectConfigs

```typescript
client.projects.updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>
```

Updates the project configuration settings.

Applies changes to the project-level configuration. This is the primary way to modify
project settings like build commands, environment variables, and agent defaults.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateProjectConfigRequest` | The configuration fields to update |

## Returns

**`Promise<void>`** — A promise that resolves when the configuration has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.updateProjectConfigs(/* UpdateProjectConfigRequest */);
```
