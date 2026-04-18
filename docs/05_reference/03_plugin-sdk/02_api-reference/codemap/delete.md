---
name: delete
cbbaseinfo:
  description: Delete a codemap
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: ""
      isOptional: false
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapDeleteResponse>"
    description: ""
data:
  name: delete
  category: codemap
  link: delete.md
---
# delete

```typescript
plugin.codemap.delete(codemapId: string, projectPath?: string): Promise<CodemapDeleteResponse>
```

Delete a codemap

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.delete('codemapId');
```
