---
name: updateCodeboltYaml
cbbaseinfo:
  description: "Updates the codebolt.yaml configuration file for the project.

Modifies the project's codebolt.yaml, which defines agent configurations, tool
permissions, and workflow settings specific to the CodeBolt platform."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateCodeboltYamlRequest
      description: The YAML configuration updates to apply
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the YAML has been updated
data:
  name: updateCodeboltYaml
  category: projects
  link: updateCodeboltYaml.md
---
# updateCodeboltYaml

```typescript
client.projects.updateCodeboltYaml(data: UpdateCodeboltYamlRequest): Promise<void>
```

Updates the codebolt.yaml configuration file for the project.

Modifies the project's codebolt.yaml, which defines agent configurations, tool
permissions, and workflow settings specific to the CodeBolt platform.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateCodeboltYamlRequest` | The YAML configuration updates to apply |

## Returns

**`Promise<void>`** — A promise that resolves when the YAML has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.updateCodeboltYaml(/* UpdateCodeboltYamlRequest */);
```
