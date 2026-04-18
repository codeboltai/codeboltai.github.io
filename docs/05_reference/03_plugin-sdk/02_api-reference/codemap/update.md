---
name: update
cbbaseinfo:
  description: Update codemap info (title, description, etc.)
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateCodemapData
      description: ""
      isOptional: false
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapUpdateResponse>"
    description: ""
data:
  name: update
  category: codemap
  link: update.md
---
# update

```typescript
plugin.codemap.update(codemapId: string, data: UpdateCodemapData, projectPath?: string): Promise<CodemapUpdateResponse>
```

Update codemap info (title, description, etc.)

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` |  |
| `data` | `UpdateCodemapData` |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.update('codemapId', /* UpdateCodemapData */);
```
