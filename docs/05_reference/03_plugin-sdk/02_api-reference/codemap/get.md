---
name: get
cbbaseinfo:
  description: Get a specific codemap by ID
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
    signatureTypeName: "Promise<CodemapGetResponse>"
    description: ""
data:
  name: get
  category: codemap
  link: get.md
---
# get

```typescript
plugin.codemap.get(codemapId: string, projectPath?: string): Promise<CodemapGetResponse>
```

Get a specific codemap by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapGetResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.get('codemapId');
```
