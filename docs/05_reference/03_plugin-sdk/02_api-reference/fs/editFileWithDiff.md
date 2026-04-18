---
name: editFileWithDiff
cbbaseinfo:
  description: editFileWithDiff
cbparameters:
  parameters:
    - name: targetFile
      typeName: string
      description: The target file to edit.
      isOptional: false
    - name: codeEdit
      typeName: string
      description: The code edit to apply.
      isOptional: false
    - name: diffIdentifier
      typeName: string
      description: The diff identifier.
      isOptional: false
    - name: prompt
      typeName: string
      description: The prompt for the edit.
      isOptional: false
    - name: applyModel
      typeName: string
      description: The model to apply the edit with.
      isOptional: true
  returns:
    signatureTypeName: "Promise<EditFileAndApplyDiffResponse>"
    description: A promise that resolves with the edit result.
data:
  name: editFileWithDiff
  category: fs
  link: editFileWithDiff.md
---
# editFileWithDiff

```typescript
plugin.fs.editFileWithDiff(targetFile: string, codeEdit: string, diffIdentifier: string, prompt: string, applyModel?: string): Promise<EditFileAndApplyDiffResponse>
```

editFileWithDiff

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `targetFile` | `string` | The target file to edit. |
| `codeEdit` | `string` | The code edit to apply. |
| `diffIdentifier` | `string` | The diff identifier. |
| `prompt` | `string` | The prompt for the edit. |
| `applyModel` | `string` _(optional)_ | The model to apply the edit with. |

## Returns

**`Promise<EditFileAndApplyDiffResponse>`** — A promise that resolves with the edit result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.editFileWithDiff('targetFile', 'codeEdit', 'diffIdentifier', 'prompt');
```
