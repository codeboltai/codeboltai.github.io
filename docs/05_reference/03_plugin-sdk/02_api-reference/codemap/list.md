---
name: list
cbbaseinfo:
  description: List all codemaps for a project
cbparameters:
  parameters:
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapListResponse>"
    description: ""
data:
  name: list
  category: codemap
  link: list.md
---
# list

```typescript
plugin.codemap.list(projectPath?: string): Promise<CodemapListResponse>
```

List all codemaps for a project

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapListResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.list();
```
