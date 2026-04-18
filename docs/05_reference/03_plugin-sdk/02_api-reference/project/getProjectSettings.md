---
title: getProjectSettings
---

# `getProjectSettings`

```typescript
plugin.project.getProjectSettings(): Promise<GetProjectSettingsResponse>
```

Retrieves the project settings from the server.

## Parameters

_No parameters._

## Returns

`Promise<GetProjectSettingsResponse>` — A promise that resolves with the project settings response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.project.getProjectSettings();
console.log(result);
```
