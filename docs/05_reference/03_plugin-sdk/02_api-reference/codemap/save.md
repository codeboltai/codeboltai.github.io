---
name: save
cbbaseinfo:
  description: Save a complete codemap with content
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: ""
      isOptional: false
    - name: codemap
      typeName: Codemap
      description: ""
      isOptional: false
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapSaveResponse>"
    description: ""
data:
  name: save
  category: codemap
  link: save.md
---
# save

```typescript
plugin.codemap.save(codemapId: string, codemap: Codemap, projectPath?: string): Promise<CodemapSaveResponse>
```

Save a complete codemap with content

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` |  |
| `codemap` | `Codemap` |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapSaveResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.save('codemapId', /* Codemap */);
```
