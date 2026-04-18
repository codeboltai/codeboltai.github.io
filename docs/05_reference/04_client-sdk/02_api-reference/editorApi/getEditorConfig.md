---
name: getEditorConfig
cbbaseinfo:
  description: "Retrieves the current editor configuration.

Returns settings that control editor behavior such as theme, font size,
tab width, and other preferences. Useful for synchronizing editor state
across components or persisting user preferences."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<EditorConfig>"
    description: A promise that resolves to the current
data:
  name: getEditorConfig
  category: editorApi
  link: getEditorConfig.md
---
# getEditorConfig

```typescript
client.editorApi.getEditorConfig(): Promise<EditorConfig>
```

Retrieves the current editor configuration.

Returns settings that control editor behavior such as theme, font size,
tab width, and other preferences. Useful for synchronizing editor state
across components or persisting user preferences.

## Parameters

_None_

## Returns

**`Promise<EditorConfig>`** — A promise that resolves to the current

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.editorApi.getEditorConfig();
```
