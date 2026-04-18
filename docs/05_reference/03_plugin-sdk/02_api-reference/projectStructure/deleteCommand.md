---
name: deleteCommand
cbbaseinfo:
  description: Delete a run command
cbparameters:
  parameters:
    - name: packageId
      typeName: string
      description: ""
      isOptional: false
    - name: commandId
      typeName: string
      description: ""
      isOptional: false
    - name: workspacePath
      typeName: string
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<ProjectStructureDeleteResponse>"
    description: ""
data:
  name: deleteCommand
  category: projectStructure
  link: deleteCommand.md
---
# deleteCommand

```typescript
plugin.projectStructure.deleteCommand(packageId: string, commandId: string, workspacePath?: string): Promise<ProjectStructureDeleteResponse>
```

Delete a run command

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `packageId` | `string` |  |
| `commandId` | `string` |  |
| `workspacePath` | `string` _(optional)_ |  |

## Returns

**`Promise<ProjectStructureDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.projectStructure.deleteCommand('packageId', 'commandId');
```
