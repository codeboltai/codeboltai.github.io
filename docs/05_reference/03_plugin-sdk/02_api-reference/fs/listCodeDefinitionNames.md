---
name: listCodeDefinitionNames
cbbaseinfo:
  description: listCodeDefinitionNames
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search for code definitions.
      isOptional: false
  returns:
    signatureTypeName: "Promise<ListCodeDefinitionsResponse>"
    description: A promise that resolves with the list of code definition names.
data:
  name: listCodeDefinitionNames
  category: fs
  link: listCodeDefinitionNames.md
---
# listCodeDefinitionNames

```typescript
plugin.fs.listCodeDefinitionNames(path: string): Promise<ListCodeDefinitionsResponse>
```

listCodeDefinitionNames

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | The path to search for code definitions. |

## Returns

**`Promise<ListCodeDefinitionsResponse>`** — A promise that resolves with the list of code definition names.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.listCodeDefinitionNames('path');
```
