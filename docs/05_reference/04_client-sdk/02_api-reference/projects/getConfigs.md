---
name: getConfigs
cbbaseinfo:
  description: "Retrieves the configuration settings for the current project.

Returns project-level settings including build commands, environment variables,
agent preferences, and other configurable options."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ProjectConfig>"
    description: A promise that resolves to the project configuration
data:
  name: getConfigs
  category: projects
  link: getConfigs.md
---
# getConfigs

```typescript
client.projects.getConfigs(): Promise<ProjectConfig>
```

Retrieves the configuration settings for the current project.

Returns project-level settings including build commands, environment variables,
agent preferences, and other configurable options.

## Parameters

_None_

## Returns

**`Promise<ProjectConfig>`** — A promise that resolves to the project configuration

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.getConfigs();
```
