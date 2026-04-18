---
name: create
cbbaseinfo:
  description: "Create a placeholder codemap (status: 'creating')
Call this before generating the actual codemap content"
cbparameters:
  parameters:
    - name: data
      typeName: CreateCodemapData
      description: ""
      isOptional: false
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapCreateResponse>"
    description: ""
data:
  name: create
  category: codemap
  link: create.md
---
# create

```typescript
plugin.codemap.create(data: CreateCodemapData, projectPath?: string): Promise<CodemapCreateResponse>
```

Create a placeholder codemap (status: 'creating')
Call this before generating the actual codemap content

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCodemapData` |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapCreateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.create(/* CreateCodemapData */);
```
