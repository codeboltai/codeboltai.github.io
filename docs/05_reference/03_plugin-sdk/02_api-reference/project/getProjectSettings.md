---
name: getProjectSettings
cbbaseinfo:
  description: Retrieves the project settings from the server.
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<GetProjectSettingsResponse>"
    description: A promise that resolves with the project settings response.
data:
  name: getProjectSettings
  category: project
  link: getProjectSettings.md
---
# getProjectSettings

```typescript
plugin.project.getProjectSettings(): Promise<GetProjectSettingsResponse>
```

Retrieves the project settings from the server.

## Parameters

_None_

## Returns

**`Promise<GetProjectSettingsResponse>`** — A promise that resolves with the project settings response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.project.getProjectSettings();
```
