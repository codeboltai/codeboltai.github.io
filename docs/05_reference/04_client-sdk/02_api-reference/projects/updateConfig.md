---
name: updateConfig
cbbaseinfo:
  description: "Updates the project configuration via an alternative endpoint.

Applies configuration changes to the project settings. Functions similarly to
 but uses a different server route."
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
  name: updateConfig
  category: projects
  link: updateConfig.md
---
# updateConfig

```typescript
client.projects.updateConfig(data: UpdateProjectConfigRequest): Promise<void>
```

Updates the project configuration via an alternative endpoint.

Applies configuration changes to the project settings. Functions similarly to
 but uses a different server route.

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

await client.projects.updateConfig(/* UpdateProjectConfigRequest */);
```
