---
name: setStatus
cbbaseinfo:
  description: Set the status of a codemap
cbparameters:
  parameters:
    - name: codemapId
      typeName: string
      description: ""
      isOptional: false
    - name: status
      typeName: CodemapStatus
      description: ""
      isOptional: false
    - name: error
      typeName: string
      description: ""
      isOptional: true
    - name: projectPath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<CodemapUpdateResponse>"
    description: ""
data:
  name: setStatus
  category: codemap
  link: setStatus.md
---
# setStatus

```typescript
plugin.codemap.setStatus(codemapId: string, status: CodemapStatus, error?: string, projectPath?: string): Promise<CodemapUpdateResponse>
```

Set the status of a codemap

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `codemapId` | `string` |  |
| `status` | `CodemapStatus` |  |
| `error` | `string` _(optional)_ |  |
| `projectPath` | `string` _(optional)_ |  |

## Returns

**`Promise<CodemapUpdateResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.codemap.setStatus('codemapId', /* CodemapStatus */);
```
